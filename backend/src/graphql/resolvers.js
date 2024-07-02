const Article = require("../models/article");

// Graphql resolvers
const resolvers = {
  searchArticle: async ({ searchQuery }) => {
    try {
      const items = await Article.find({
        $or: [
          { title: { $regex: searchQuery, $options: "i" } }, // Case-insensitive search on 'title'
        ],
      });
      return items;
    } catch (err) {
      console.error(err);
      throw new Error("Failed to fetch items");
    }
  },
  getAllArticles: async () => {
    try {
      const articles = await Article.find();
      return articles;
    } catch (err) {
      throw new Error(err);
    }
  },
};

module.exports = resolvers;
