import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./client/ApolloClient";
import ArticlesView from "./modules/Articles/views/Articles";
import "@fontsource-variable/source-code-pro";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <ArticlesView />
    </ApolloProvider>
  </React.StrictMode>
);
