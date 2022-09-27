import {
  ApolloCache,
  DefaultContext,
  DocumentNode,
  FetchResult,
  LazyQueryExecFunction,
  LazyQueryHookOptions,
  MutationFunctionOptions,
  MutationHookOptions,
  MutationResult,
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
export function useQueryWithTransform<TData, TVariables = OperationVariables, TDataTransformed = JsonValue>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: QueryHookOptions<TData, TVariables> = {},
  transform: QueryHookTransformOptions<TData, TDataTransformed> = {}
): QueryResultWithTransformData<TData, TVariables, TDataTransformed> {
  const result = useQuery(query, options);

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
export function useLazyQueryWithTransform<TData, TVariables = OperationVariables, TDataTransformed = JsonValue>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: LazyQueryHookOptions<TData, TVariables> = {},
  transform: QueryHookTransformOptions<TData, TDataTransformed> = {}
): LazyQueryResultTupleWithTransformData<TData, TVariables, TDataTransformed> {
  const [execFn, result] = useLazyQuery(query, options);

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
export function useMutationWithTransform<TData, TVariables = OperationVariables, TDataTransformed = JsonValue>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: MutationHookOptions<TData, TVariables> = {},
  transform: QueryHookTransformOptions<TData, TDataTransformed> = {}
): MutationTupleWithTranformData<TData, TVariables, TDataTransformed> {
  const [execFn, result] = useMutation(query, options);

  if (transform.data) {
    (result as MutationResultWithTransformData<TData, TDataTransformed>).transformedData = transform.data(result.data);
  }

  return [execFn, result];
}
