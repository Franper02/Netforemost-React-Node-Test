import { useState } from "react";
import {
  useEveryArticleQuery,
  useSearchArticleQuery,
} from "@/graphql-generated/hooks/hooks.generated";
import Article from "../components/Article/Article";
import SearchBar from "../components/SearchBar/SearchBar";
import NotFound from "../components/NotFound/NotFound";
import Loader from "../components/Loader/Loader";

const ArticlesView = () => {
  // State that keeps track of the search input value
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Fetch all articles if there is no search query
  const { data, loading } = useEveryArticleQuery({
    skip: !!searchQuery,
  });

  // Fetch articles based on the search query
  const { data: searchResults, loading: loadingSearch } = useSearchArticleQuery(
    {
      variables: {
        search: searchQuery,
      },
      skip: !searchQuery,
    }
  );

  const isLoading = loading || loadingSearch;

  const articles = searchQuery
    ? searchResults?.searchArticle
    : data?.getAllArticles;

  return (
    <div className="max-w-sm mx-auto flex flex-col gap-y-[34px] py-[27px] md:max-w-2xl xl:max-w-5xl">
      <SearchBar
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      {isLoading ? (
        <Loader />
      ) : articles && articles.length > 0 ? (
        articles.map((article, index) => (
          <Article
            key={`${article?.title}-${index}`}
            author={article?.author ?? ""}
            description={article?.description ?? ""}
            publishedAt={article?.publishedAt ?? ""}
            title={article?.title ?? ""}
            url={article?.url ?? ""}
            urlToImage={article?.urlToImage ?? ""}
          />
        ))
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default ArticlesView;
