import {
  ApolloLink,
  FetchResult,
  NextLink,
  Observable,
  ObservableSubscription,
  Observer,
  Operation
} from '@apollo/client';
import { buildDelayFunction, DelayFunction, DelayFunctionOptions } from './delayFunction';
import { buildRetryFunction, RetryFunction, RetryFunctionOptions } from './retryFunction';

interface RetryOptions {
  delay?: DelayFunctionOptions | DelayFunction;
  attempts?: RetryFunctionOptions | RetryFunction;
}

// export namespace RetryLink {
//   export interface Options {
//     /**
//      * Configuration for the delay strategy to use, or a custom delay strategy.
//      */
//     delay?: DelayFunctionOptions | DelayFunction;

//     /**
//      * Configuration for the retry strategy to use, or a custom retry strategy.
//      */
//     attempts?: RetryFunctionOptions | RetryFunction;
//   }
// }

/**
 * Tracking and management of operations that may be (or currently are) retried.
 */
class RetryableOperation<TValue = any> {
  retryCount: number = 0;
  values: any[] = [];
  error: any;
  complete = false;
  canceled = false;
  observers: (Observer<TValue> | null)[] = [];
  currentSubscription: ObservableSubscription | null = null;
  timerId: number | undefined;

  operation: Operation;
  nextLink: NextLink;
  delayFor: DelayFunction;
  retryIf: RetryFunction;

  constructor(operation: Operation, nextLink: NextLink, delayFor: DelayFunction, retryIf: RetryFunction) {
    this.operation = operation;
    this.nextLink = nextLink;
    this.delayFor = delayFor;
    this.retryIf = retryIf;
  }

  /**
   * Register a new observer for this operation.
   *
   * If the operation has previously emitted other events, they will be
   * immediately triggered for the observer.
   */
  subscribe(observer: Observer<TValue>) {
    if (this.canceled) {
      throw new Error(`Subscribing to a retryable link that was canceled is not supported`);
    }
    this.observers.push(observer);

    // If we've already begun, catch this observer up.
    for (const value of this.values) {
      observer.next!(value);
    }

    if (this.complete) {
      observer.complete!();
    } else if (this.error) {
      observer.error!(this.error);
    }
  }

  /**
   * Remove a previously registered observer from this operation.
   *
   * If no observers remain, the operation will stop retrying, and unsubscribe
   * from its downstream link.
   */
  unsubscribe(observer: Observer<TValue>) {
    const index = this.observers.indexOf(observer);
    if (index < 0) {
      throw new Error(`RetryLink BUG! Attempting to unsubscribe unknown observer!`);
    }
    // Note that we are careful not to change the order of length of the array,
    // as we are often mid-iteration when calling this method.
    this.observers[index] = null;

    // If this is the last observer, we're done.
    if (this.observers.every((o) => o === null)) {
      this.cancel();
    }
  }

  /**
   * Start the initial request.
   */
  start() {
    if (this.currentSubscription) return; // Already started.

    this.try();
  }

  /**
   * Stop retrying for the operation, and cancel any in-progress requests.
   */
  cancel() {
    if (this.currentSubscription) {
      this.currentSubscription.unsubscribe();
    }
    clearTimeout(this.timerId);
    this.timerId = undefined;
    this.currentSubscription = null;
    this.canceled = true;
  }

  try() {
    this.currentSubscription = new Observable((observer) => {
      let onRetry = false;
      const sub = this.nextLink(this.operation).subscribe({
        next: async (result) => {
          if (!result.errors) {
            observer.next(result);
            return;
          }

          onRetry = true;
          this.retryCount += 1;

          const shouldRetry = await this.retryIf(this.retryCount, this.operation, result.errors);

          if (shouldRetry) {
            this.scheduleRetry(this.delayFor(this.retryCount, this.operation, result.errors));
          } else {
            observer.next(result);
            observer.complete();
          }
        },
        error: observer.error,
        complete: () => {
          if (!onRetry) observer.complete.bind(observer)();
        }
      });

      return () => {
        if (sub) sub.unsubscribe();
      };
    }).subscribe({
      next: this.onNext,
      error: this.onError,
      complete: this.onComplete
    });
  }

  onNext = (value: any) => {
    this.values.push(value);
    for (const observer of this.observers) {
      if (!observer) continue;
      observer.next!(value);
    }
  };

  onComplete = () => {
    this.complete = true;
    for (const observer of this.observers) {
      if (!observer) continue;
      observer.complete!();
    }
  };

  onError = async (error: any) => {
    this.retryCount += 1;

    // Should we retry?
    const shouldRetry = await this.retryIf(this.retryCount, this.operation, error);
    if (shouldRetry) {
      this.scheduleRetry(this.delayFor(this.retryCount, this.operation, error));
      return;
    }

    this.error = error;
    for (const observer of this.observers) {
      if (!observer) continue;
      observer.error!(error);
    }
  };

  scheduleRetry(delay: number) {
    if (this.timerId) {
      throw new Error(`RetryLink BUG! Encountered overlapping retries`);
    }

    this.timerId = setTimeout(() => {
      this.timerId = undefined;
      this.try();
    }, delay) as any as number;
  }
}

export class RetryLink extends ApolloLink {
  delayFor: DelayFunction;
  retryIf: RetryFunction;

  constructor(options?: RetryOptions) {
    super();
    const { attempts, delay } = options || ({} as RetryOptions);
    this.delayFor = typeof delay === 'function' ? delay : buildDelayFunction(delay);
    this.retryIf = typeof attempts === 'function' ? attempts : buildRetryFunction(attempts);
  }

  request(operation: Operation, nextLink: NextLink): Observable<FetchResult> {
    const retryable = new RetryableOperation(operation, nextLink, this.delayFor, this.retryIf);
    retryable.start();

    return new Observable((observer) => {
      retryable.subscribe(observer);
      return () => {
        retryable.unsubscribe(observer);
      };
    });
  }
}
