import { ApolloLink } from "@apollo/client";

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers }: { headers?: Record<string, string> }) => ({
    headers: {
      authorization: `Bearer `,
      ...headers,
    },
  }));

  return forward(operation);
});

export default authLink;
