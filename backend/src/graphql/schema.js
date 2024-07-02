const { buildSchema } = require("graphql");

// GraphQL schema
const articleSchema = buildSchema(`
    type Article {
        _id: ID!
        author: String!
        title: String!
        description: String!
        url: String!
        urlToImage: String!
        publishedAt: String!
    }

    type Query {
        searchArticle(searchQuery: String!): [Article]
        getAllArticles: [Article]
    }

`);

module.exports = articleSchema;
