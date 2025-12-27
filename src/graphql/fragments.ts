import { gql } from "@apollo/client";

export const AdminFragment = gql`
  fragment AdminFragment on Admin {
    id
    name
    role
  }
`;

export const AdminAuthPayloadFragment = gql`
  fragment AdminAuthPayloadFragment on AdminAuthPayload {
    status
    message
    access_token
    refresh_token
    expires_in
    token_type
  }
`;

export const BotAccountFragment = gql`
  fragment BotAccountFragment on BotAccount {
    id
    name
    symbol
    api_key
    secret_key
    sandbox
    leverage
    base_qty
    max_entries
    tp_rate
    is_active
    created_at
    updated_at
    entries_count
  }
`;

export const BotResponseFragment = gql`
  fragment BotResponseFragment on BotResponse {
    status
    message
  }
`;

export const CacheResponseFragment = gql`
  fragment CacheResponseFragment on CacheResponse {
    status
    message
    data
  }
`;

export const CountResponseFragment = gql`
  fragment CountResponseFragment on CountResponse {
    status
    message
    count
  }
`;

export const FaqFragment = gql`
  fragment FaqFragment on Faq {
    id
    locale
    type
    title
    content
    is_fixed
    is_active
    started_at
    ended_at
    created_at
    updated_at
  }
`;

export const ImageFragment = gql`
  fragment ImageFragment on Image {
    id
    url
    thumb_small_url
    thumb_medium_url
    thumb_large_url
  }
`;

export const InternalWalletResponseFragment = gql`
  fragment InternalWalletResponseFragment on InternalWalletResponse {
    status
    message
  }
`;

export const LoginAuthPayloadFragment = gql`
  fragment LoginAuthPayloadFragment on LoginAuthPayload {
    status
    message
    access_token
    refresh_token
    expires_in
    token_type
  }
`;

export const MarketPriceFragment = gql`
  fragment MarketPriceFragment on MarketPrice {
    id
    name
    endpoint
    symbol
    price
    created_at
    updated_at
  }
`;

export const MessageResponseFragment = gql`
  fragment MessageResponseFragment on MessageResponse {
    status
    message
  }
`;

export const NextFaqFragment = gql`
  fragment NextFaqFragment on NextFaq {
    id
    title
  }
`;

export const NextNoticeFragment = gql`
  fragment NextNoticeFragment on NextNotice {
    id
    title
  }
`;

export const NoticeFragment = gql`
  fragment NoticeFragment on Notice {
    id
    locale
    title
    content
    is_fixed
    is_active
    started_at
    ended_at
    created_at
    updated_at
  }
`;

export const PaginatorInfoFragment = gql`
  fragment PaginatorInfoFragment on PaginatorInfo {
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

export const PartnerFragment = gql`
  fragment PartnerFragment on Partner {
    id
    name
    fee
    memo1
    memo2
    role
  }
`;

export const PartnerAuthPayloadFragment = gql`
  fragment PartnerAuthPayloadFragment on PartnerAuthPayload {
    status
    message
    access_token
    refresh_token
    expires_in
    token_type
  }
`;

export const PartnerResponseFragment = gql`
  fragment PartnerResponseFragment on PartnerResponse {
    status
    message
  }
`;

export const PreviousFaqFragment = gql`
  fragment PreviousFaqFragment on PreviousFaq {
    id
    title
  }
`;

export const PreviousNoticeFragment = gql`
  fragment PreviousNoticeFragment on PreviousNotice {
    id
    title
  }
`;

export const RefreshAuthPayloadFragment = gql`
  fragment RefreshAuthPayloadFragment on RefreshAuthPayload {
    status
    message
    access_token
    expires_in
    token_type
  }
`;

export const SmsMessageFragment = gql`
  fragment SmsMessageFragment on SmsMessage {
    country_code
    phone_number
    sms_code
    sms_code_expired_at
    request
    response
  }
`;

export const ThumbnailFragment = gql`
  fragment ThumbnailFragment on Thumbnail {
    id
    url
  }
`;

export const TicketFragment = gql`
  fragment TicketFragment on Ticket {
    id
    name
    days
    bonus_days
    price
  }
`;

export const UserFragment = gql`
  fragment UserFragment on User {
    id
    login_id
    name
    email
    auth_step
    country_code
    phone_number
    uid
    locale
    point
    invite_code
    memo
    created_at
    updated_at
    role
  }
`;

export const UserAccountHistoryFragment = gql`
  fragment UserAccountHistoryFragment on UserAccountHistory {
    id
    user_id
    data
    created_at
    updated_at
  }
`;

export const UserAmountFragment = gql`
  fragment UserAmountFragment on UserAmount {
    completed_count
    pending_count
    reject_count
    user_count
  }
`;

export const UserInternalWalletFragment = gql`
  fragment UserInternalWalletFragment on UserInternalWallet {
    id
    user_id
    coin_id
    wallet_address
    private_key
    last_received_at
    created_at
    updated_at
  }
`;

export const UserPointFragment = gql`
  fragment UserPointFragment on UserPoint {
    id
    user_id
    point
  }
`;

export const UserResponseFragment = gql`
  fragment UserResponseFragment on UserResponse {
    status
    message
  }
`;

export const UserTicketFragment = gql`
  fragment UserTicketFragment on UserTicket {
    id
    user_id
    is_free_ticket
    is_ticket
    start_date
    end_date
  }
`;

export const UserWalletHistoryFragment = gql`
  fragment UserWalletHistoryFragment on UserWalletHistory {
    id
    user_id
    email
    type
    title
    content
    image
    from_address
    to_address
    tx_id
    coin_id
    amount
    withdraw_fee
    status
    created_at
    updated_at
  }
`;

export const VerifyResponseFragment = gql`
  fragment VerifyResponseFragment on VerifyResponse {
    ok
    httpStatus
    body
    uid
    balance
  }
`;
