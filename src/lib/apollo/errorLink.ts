import { ErrorLink } from "@apollo/client/link/error";
import { CombinedGraphQLErrors, CombinedProtocolErrors } from "@apollo/client/errors";

const errorLink = new ErrorLink(({ error, operation }) => {
  if (CombinedGraphQLErrors.is(error)) {
    error.errors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}, operation: ${operation.operationName}`,
      ),
    );
  } else if (CombinedProtocolErrors.is(error)) {
    error.errors.forEach(({ message, extensions }) =>
      console.error(
        `[Protocol error]: Message: ${message}, Extensions: ${JSON.stringify(extensions)}, ${operation.operationName}`,
      ),
    );
  } else {
    console.error(`[Network error]: ${error}, operation: ${operation.operationName}`);
  }
});

export default errorLink;
