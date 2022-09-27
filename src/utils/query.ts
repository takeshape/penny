import {
  ApolloCache,
  ApolloClient,
  DefaultContext,
  DocumentNode,
  FetchResult,
  LazyQueryExecFunction,
  LazyQueryHookOptions,
  MutationFunctionOptions,
  MutationHookOptions,
  MutationResult,
  NormalizedCacheObject,
  OperationVariables,
  QueryHookOptions,
  QueryResult,
  TypedDocumentNode,
  useLazyQuery,
  useMutation,
  useQuery
} from '@apollo/client';
import { JsonValue } from 'type-fest';

export type QueryHookTransformOptions<T, To> = {
  data?: (data?: T | null) => To | null;
};

export type QueryResultWithTransformData<TData, TVariables, TDataTransformed> = QueryResult<TData, TVariables> & {
  transformedData?: TDataTransformed | null;
};

export type MutationResultWithTransformData<TData, TDataTransformed> = MutationResult<TData> & {
  transformedData?: TDataTransformed | null;
};

export type LazyQueryResultTupleWithTransformData<TData, TVariables, TDataTransformed> = [
  LazyQueryExecFunction<TData, TVariables>,
  QueryResultWithTransformData<TData, TVariables, TDataTransformed>
];

export type MutationTupleWithTranformData<
  TData,
  TVariables,
  TDataTransformed = JsonValue,
  TContext = DefaultContext,
  TCache extends ApolloCache<any> = ApolloCache<any>
> = [
  (options?: MutationFunctionOptions<TData, TVariables, TContext, TCache>) => Promise<FetchResult<TData>>,
  MutationResultWithTransformData<TData, TDataTransformed>
];

/**
 * A convenience hook, uses a provided Apollo Client and supports transform fns.
 */
export function useWrappedQuery<TData, TVariables = OperationVariables, TDataTransformed = JsonValue>(
  client: ApolloClient<NormalizedCacheObject> | undefined,
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: QueryHookOptions<TData, TVariables> = {},
  transform: QueryHookTransformOptions<TData, TDataTransformed> = {}
): QueryResultWithTransformData<TData, TVariables, TDataTransformed> {
  const result = useQuery(query, {
    ...options,
    skip: !client,
    client
  });

  if (transform.data) {
    (result as QueryResultWithTransformData<TData, TVariables, TDataTransformed>).transformedData = transform.data(
      result.data
    );
  }

  return result;
}

/**
 * A convenience hook, uses a provided Apollo Client and supports transform fns.
 */
export function useWrappedLazyQuery<TData, TVariables = OperationVariables, TDataTransformed = JsonValue>(
  client: ApolloClient<NormalizedCacheObject> | undefined,
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: LazyQueryHookOptions<TData, TVariables> = {},
  transform: QueryHookTransformOptions<TData, TDataTransformed> = {}
): LazyQueryResultTupleWithTransformData<TData, TVariables, TDataTransformed> {
  const [execFn, result] = useLazyQuery(query, {
    ...options,
    client
  });

  if (transform.data) {
    (result as QueryResultWithTransformData<TData, TVariables, TDataTransformed>).transformedData = transform.data(
      result.data
    );
  }

  return [execFn, result];
}

/**
 * A convenience hook, uses a provided Apollo Client and supports transform fns.
 */
export function useWrappedMutation<TData, TVariables = OperationVariables, TDataTransformed = JsonValue>(
  client: ApolloClient<NormalizedCacheObject> | undefined,
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: MutationHookOptions<TData, TVariables> = {},
  transform: QueryHookTransformOptions<TData, TDataTransformed> = {}
): MutationTupleWithTranformData<TData, TVariables, TDataTransformed> {
  const [execFn, result] = useMutation(query, {
    ...options,
    client
  });

  if (transform.data) {
    (result as MutationResultWithTransformData<TData, TDataTransformed>).transformedData = transform.data(result.data);
  }

  return [execFn, result];
}
