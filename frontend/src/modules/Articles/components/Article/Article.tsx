import React from "react";
import CardContent from "../CardContent/CardContent";
import Card from "../Card/Card";
import { ArticleItemFragment } from "@/graphql-generated/types/types.generated";

// Type generated from the GraphQL query
type ArticleProps = Omit<ArticleItemFragment, "__typename">;

const Article: React.FC<ArticleProps> = ({
  author,
  description,
  publishedAt,
  title,
  url,
  urlToImage,
}) => {
  return (
    <Card url={url}>
      <CardContent
        title={title}
        description={description}
        publishedAt={publishedAt}
        author={author}
        urlToImage={urlToImage}
      />
    </Card>
  );
};

export default Article;
