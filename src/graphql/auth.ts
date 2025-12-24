import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      status
      message
      access_token
      refresh_token
      expires_in
      token_type
    }
  }
`;
