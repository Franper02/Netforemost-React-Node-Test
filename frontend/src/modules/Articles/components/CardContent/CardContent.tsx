import { ArticleItemFragment } from "@/graphql-generated/types/types.generated";
import formatDate from "../../utils/formatDate";

// Type generated from the GraphQL query exluding unsued values
type CardContentProps = Omit<ArticleItemFragment, "__typename" | "url">;

const CardContent: React.FC<CardContentProps> = ({
  title,
  description,
  publishedAt,
  author,
  urlToImage,
}) => {
  const date = formatDate(publishedAt);
  return (
    <div className="relative flex flex-col items-start justify-start gap-6 md:flex-row md:items-start">
      <div className="absolute top-0 -right-[1rem] text-xs font-normal text-[#666666] md:-top-[1rem]">
        {date}
      </div>
      <div className="min-w-[100px] min-h-[100px] w-[100px] h-[100px]">
        <img
          className="w-full h-full rounded-xl object-cover"
          src={urlToImage}
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg font-medium line-clamp-2 text-ellipsis">
          {title}
        </h2>
        <span className="text-sm font-normal text-[#666666]">{author}</span>
        <p className="text-sm font-normal text-[#3C3C43]">{description}</p>
      </div>
    </div>
  );
};

export default CardContent;
