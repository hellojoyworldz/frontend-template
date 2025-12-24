import { gql } from "@apollo/client";

export const PAGINATOR_INFO_FRAGMENT = gql`
  fragment PAGINATOR_INFO_FRAGMENT on PaginatorInfo {
    count
    currentPage
    firstItem
    hasMorePages
    lastItem
    lastPage
    perPage
    total
  }
`;
