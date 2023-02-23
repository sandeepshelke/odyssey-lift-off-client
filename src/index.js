import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GlobalStyles from './styles';
import Pages from './pages';
// "https://odyssey-lift-off-server-production-98f4.up.railway.app/"
const server_url = process.env.SERVER_URI || "http://localhost:4000/";
console.log(`connecting to url: ${server_url}`)
const client = new ApolloClient({
  uri: server_url,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
