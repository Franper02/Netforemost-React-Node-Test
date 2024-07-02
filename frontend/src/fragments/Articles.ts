import { gql } from "@apollo/client";

export const ArticleFragment = gql`
  fragment ArticleItem on Article {
    author
    description
    publishedAt
    title
    url
    urlToImage
  }
`;
