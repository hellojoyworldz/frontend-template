import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import errorLink from "./errorLink";
import authLink from "./authLink";
import httpLink from "./httpLink";

const client = new ApolloClient({
  link: ApolloLink.from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
