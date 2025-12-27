import { gql } from "@apollo/client";
import { LoginAuthPayloadFragment, UserFragment } from "@/graphql/fragments";

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
      ...LoginAuthPayloadFragment
      user {
        ...UserFragment
      }
    }
  }
  ${LoginAuthPayloadFragment}
  ${UserFragment}
`;
