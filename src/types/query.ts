import {
  ApolloCache,
  DefaultContext,
  FetchResult,
  LazyQueryExecFunction,
  MutationFunctionOptions,
  MutationResult,
  QueryResult
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
