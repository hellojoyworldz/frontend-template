import UploadHttpLink from "apollo-upload-client/UploadHttpLink.mjs";

const httpLink = new UploadHttpLink({
  uri: `${process.env.NEXT_PUBLIC_GRAPHQL_URL}`,
});

export default httpLink;
