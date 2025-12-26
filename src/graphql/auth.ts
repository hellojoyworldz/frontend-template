import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation register($input: RegisterInput!) {
    register(input: $input) {
      status
      message
    }
  }
`;

export const LOGIN = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      status
      message
      access_token
      refresh_token
      expires_in
      token_type
    }
  }
`;
