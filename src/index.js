import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GlobalStyles from './styles';
import Pages from './pages';
// "https://odyssey-lift-off-server-production-98f4.up.railway.app/"
const client = new ApolloClient({
  uri: process.env.SERVER_URI || "http://localhost:4000/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
