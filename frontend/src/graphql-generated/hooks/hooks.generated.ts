/* eslint-disable */
import * as Types from "../types/types.generated";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
import * as ApolloReactHooks from "../../graphql-generated";
const defaultOptions = {} as const;
export const ArticleItemFragmentDoc = gql`
  fragment ArticleItem on Article {
    author
    description
    publishedAt
    title
    url
    urlToImage
  }
`;
export const EveryArticleDocument = gql`
  query EveryArticle {
    getAllArticles {
      ...ArticleItem
    }
  }
  ${ArticleItemFragmentDoc}
`;

/**
 * __useEveryArticleQuery__
 *
 * To run a query within a React component, call `useEveryArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useEveryArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEveryArticleQuery({
 *   variables: {
 *   },
 * });
 */
export function useEveryArticleQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    Types.EveryArticleQuery,
    Types.EveryArticleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<
    Types.EveryArticleQuery,
    Types.EveryArticleQueryVariables
  >(EveryArticleDocument, options);
}
export function useEveryArticleLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    Types.EveryArticleQuery,
    Types.EveryArticleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    Types.EveryArticleQuery,
    Types.EveryArticleQueryVariables
  >(EveryArticleDocument, options);
}
export type EveryArticleQueryHookResult = ReturnType<
  typeof useEveryArticleQuery
>;
export type EveryArticleLazyQueryHookResult = ReturnType<
  typeof useEveryArticleLazyQuery
>;
export type EveryArticleQueryResult = Apollo.QueryResult<
  Types.EveryArticleQuery,
  Types.EveryArticleQueryVariables
>;
export const SearchArticleDocument = gql`
  query SearchArticle($search: String!) {
    searchArticle(searchQuery: $search) {
      ...ArticleItem
    }
  }
  ${ArticleItemFragmentDoc}
`;

/**
 * __useSearchArticleQuery__
 *
 * To run a query within a React component, call `useSearchArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchArticleQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useSearchArticleQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    Types.SearchArticleQuery,
    Types.SearchArticleQueryVariables
  > &
    (
      | { variables: Types.SearchArticleQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<
    Types.SearchArticleQuery,
    Types.SearchArticleQueryVariables
  >(SearchArticleDocument, options);
}
export function useSearchArticleLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    Types.SearchArticleQuery,
    Types.SearchArticleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    Types.SearchArticleQuery,
    Types.SearchArticleQueryVariables
  >(SearchArticleDocument, options);
}
export type SearchArticleQueryHookResult = ReturnType<
  typeof useSearchArticleQuery
>;
export type SearchArticleLazyQueryHookResult = ReturnType<
  typeof useSearchArticleLazyQuery
>;
export type SearchArticleQueryResult = Apollo.QueryResult<
  Types.SearchArticleQuery,
  Types.SearchArticleQueryVariables
>;
