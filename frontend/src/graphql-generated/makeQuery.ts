import {
  ApolloError,
  QueryHookOptions as BaseQueryHookOptions,
  OperationVariables,
  QueryResult,
  useQuery as useBaseQuery,
} from "@apollo/client";
import { DocumentNode } from "graphql";
export { useLazyQuery } from "@apollo/client";
export type { LazyQueryHookOptions } from "@apollo/client";

export type UseQueryResult<
  TData,
  TVariables extends OperationVariables
> = QueryResult<TData, TVariables>;
export type QueryHookOptions<
  TData,
  TVariables extends OperationVariables
> = Partial<
  Omit<BaseQueryHookOptions<TData, TVariables>, "variables"> & {
    handleError?: (error: ApolloError) => void | undefined;
    variables?: TVariables;
  }
>;
type UseQueryHook<TData, TVariables extends OperationVariables> = (
  opts: QueryHookOptions<TData, TVariables>
) => UseQueryResult<TData, TVariables>;

export function useQuery<TData, TVariables extends OperationVariables>(
  query: DocumentNode,
  {
    skip,
    variables,
    fetchPolicy,
    handleError,
    ...opts
  }: QueryHookOptions<TData, TVariables> = {}
): UseQueryResult<TData, any> {
  const queryData = useBaseQuery<TData, TVariables>(query, {
    ...opts,
    context: {
      useBatching: true,
    },
    errorPolicy: "all",
    fetchPolicy: fetchPolicy ?? "cache-and-network",
    onError: (error: ApolloError) => {
      if (handleError) {
        handleError(error);
      }
      throw new Error(error.message);
    },
    skip,
    variables: variables,
  });

  return {
    ...queryData,
  };
}

function makeQuery<TData, TVariables extends OperationVariables>(
  query: DocumentNode
): UseQueryHook<TData, TVariables> {
  return (opts: QueryHookOptions<TData, TVariables>) =>
    useQuery<TData, TVariables>(query, opts);
}

export default makeQuery;
