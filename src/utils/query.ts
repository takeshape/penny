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
import { useMemo } from 'react';
import { JsonValue } from 'type-fest';

export type TransformOptions<T, To> = {
  data?: (data?: T | null) => To | null;
};

export type QueryHookWithTranformOptions<TData, TVariables, TDataTransformed> = QueryHookOptions<TData, TVariables> & {
  transform?: TransformOptions<TData, TDataTransformed>;
};

export type LazyQueryHookWithTransformOptions<TData, TVariables, TDataTransformed> = LazyQueryHookOptions<
  TData,
  TVariables
> & {
  transform?: TransformOptions<TData, TDataTransformed>;
};

export type MutationHookWithTransformOptions<TData, TVariables, TDataTransformed> = MutationHookOptions<
  TData,
  TVariables
> & {
  transform?: TransformOptions<TData, TDataTransformed>;
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
  { transform, ...options }: QueryHookWithTranformOptions<TData, TVariables, TDataTransformed> = {}
): QueryResultWithTransformData<TData, TVariables, TDataTransformed> {
  const result = useQuery(query, options);

  (result as QueryResultWithTransformData<TData, TVariables, TDataTransformed>).transformedData = useMemo(
    () => transform?.data?.(result.data) ?? undefined,
    [result.data, transform]
  );

  return result;
}

/**
 * A convenience hook, uses a provided Apollo Client and supports transform fns.
 */
export function useLazyQueryWithTransform<TData, TVariables = OperationVariables, TDataTransformed = JsonValue>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  { transform, ...options }: LazyQueryHookWithTransformOptions<TData, TVariables, TDataTransformed> = {}
): LazyQueryResultTupleWithTransformData<TData, TVariables, TDataTransformed> {
  const [execFn, result] = useLazyQuery(query, options);

  (result as QueryResultWithTransformData<TData, TVariables, TDataTransformed>).transformedData = useMemo(
    () => transform?.data?.(result.data) ?? undefined,
    [result.data, transform]
  );

  return [execFn, result];
}

/**
 * A convenience hook, uses a provided Apollo Client and supports transform fns.
 */
export function useMutationWithTransform<TData, TVariables = OperationVariables, TDataTransformed = JsonValue>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  { transform, ...options }: MutationHookWithTransformOptions<TData, TVariables, TDataTransformed> = {}
): MutationTupleWithTranformData<TData, TVariables, TDataTransformed> {
  const [execFn, result] = useMutation(query, options);

  (result as MutationResultWithTransformData<TData, TDataTransformed>).transformedData = useMemo(
    () => transform?.data?.(result.data) ?? undefined,
    [result.data, transform]
  );

  return [execFn, result];
}
