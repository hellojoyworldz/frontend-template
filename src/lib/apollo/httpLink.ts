import { GRAPHQL_URL } from "@/constants";
import UploadHttpLink from "apollo-upload-client/UploadHttpLink.mjs";

const httpLink = new UploadHttpLink({
  uri: `${GRAPHQL_URL}`,
});

export default httpLink;
