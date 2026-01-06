import { SetContextLink } from "@apollo/client/link/context";
import { getSession } from "next-auth/react";

const authLink = new SetContextLink(async (prevContext) => {
  const session = await getSession();
  const accessToken = session?.access_token;

  return {
    headers: {
      ...prevContext.headers,
      ...(accessToken ? { authorization: `Bearer ${accessToken}` } : {}),
    },
  };
});

export default authLink;
