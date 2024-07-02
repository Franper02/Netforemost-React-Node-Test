require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
var { createHandler } = require("graphql-http/lib/use/express");
const schema = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
var { ruruHTML } = require("ruru/server");
const corsOptions = require("./config/cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(cors(corsOptions));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Graphql handler
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: resolvers,
  })
);

// Use ruru to show a graphql playground
app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
