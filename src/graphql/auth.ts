import { gql } from "@apollo/client";
import {
  LoginAuthPayloadFragment,
  RefreshAuthPayloadFragment,
  UserFragment,
  UserInfoFragment,
} from "@/graphql/fragments";

export const MUTATION_REGISTER = gql`
  mutation register($input: RegisterInput!) {
    register(input: $input) {
      status
      message
    }
  }
`;

export const MUTATION_LOGIN = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      ...LoginAuthPayloadFragment
      user {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
      }
    }
  }
  ${LoginAuthPayloadFragment}
  ${UserFragment}
  ${UserInfoFragment}
`;

export const MUTATION_REFRESH_TOKEN = gql`
  mutation refreshToken($refresh_token: String!) {
    refreshToken(refresh_token: $refresh_token) {
      ...RefreshAuthPayloadFragment
    }
  }
  ${RefreshAuthPayloadFragment}
`;

export const QUERY_ME = gql`
  query me {
    me {
      ...UserFragment
      userInfo {
        ...UserInfoFragment
      }
    }
  }
  ${UserFragment}
  ${UserInfoFragment}
`;

export const MUTATION_CHANGE_LOCALE = gql`
  mutation changeLocale($input: UpdateLocaleInput!) {
    changeLocale(input: $input) {
      status
      message
      data {
        locale
      }
    }
  }
`;
