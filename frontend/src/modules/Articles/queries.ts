import { gql } from "@apollo/client";

export const EveryArticle = gql`
  query EveryArticle {
    getAllArticles {
      ...ArticleItem
    }
  }
`;

export const SearchArticle = gql`
  query SearchArticle($search: String!) {
    searchArticle(searchQuery: $search) {
      ...ArticleItem
    }
  }
`;
