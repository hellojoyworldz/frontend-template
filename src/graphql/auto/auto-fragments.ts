// Auto-generated. Do not edit.
// Depth: 4
import { gql } from "@apollo/client";

export const AccountResponseFragment = gql`
  fragment AccountResponseFragment on AccountResponse {
    status
    message
  }
`;

export const AdminFragment = gql`
  fragment AdminFragment on Admin {
    id
    name
    role
  }
`;

export const AdminActionFragment = gql`
  fragment AdminActionFragment on AdminAction {
    id
    admin_id
    action
    ip
    created_at
    updated_at
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

export const AgentAmountFragment = gql`
  fragment AgentAmountFragment on AgentAmount {
    name
    code
    agent_fee
  }
`;

export const AgentAmountResponseFragment = gql`
  fragment AgentAmountResponseFragment on AgentAmountResponse {
    status
    message
  }
`;

export const AmountFragment = gql`
  fragment AmountFragment on Amount {
    name
    comment
    amount
  }
`;

export const AmountResponseFragment = gql`
  fragment AmountResponseFragment on AmountResponse {
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

export const CalculateSendCoinResponseFragment = gql`
  fragment CalculateSendCoinResponseFragment on CalculateSendCoinResponse {
    status
    message
    amount
    total_withdraw_fee
    real_amount
  }
`;

export const CalculateUSDTResponseFragment = gql`
  fragment CalculateUSDTResponseFragment on CalculateUSDTResponse {
    total_fee
    platform_fee
    author_fee
    agent_fee
    request_price
    request_amount
    payment_amount
  }
`;

export const ChatMessageFragment = gql`
  fragment ChatMessageFragment on ChatMessage {
    id
    channel_name
    channel_url
    author_id
    user_id
    saved_at
    created_at
    updated_at
  }
`;

export const ChatMessageItemFragment = gql`
  fragment ChatMessageItemFragment on ChatMessageItem {
    user_id
    message
    created_at
  }
`;

export const CoinFragment = gql`
  fragment CoinFragment on Coin {
    id
    name
    symbol
    network
    withdraw_fee_weight
    is_active
    created_at
    updated_at
  }
`;

export const CoinCurrencyFragment = gql`
  fragment CoinCurrencyFragment on CoinCurrency {
    id
    coin_id
    currency_id
    bid
    ask
    created_at
    updated_at
  }
`;

export const CountResponseFragment = gql`
  fragment CountResponseFragment on CountResponse {
    status
    message
    count
  }
`;

export const CurrencyFragment = gql`
  fragment CurrencyFragment on Currency {
    id
    name
    symbol
    created_at
    updated_at
  }
`;

export const DeviceTokenFragment = gql`
  fragment DeviceTokenFragment on DeviceToken {
    id
    token
    platform
    last_seen_at
    created_at
    updated_at
  }
`;

export const ExternalWalletResponseFragment = gql`
  fragment ExternalWalletResponseFragment on ExternalWalletResponse {
    status
    message
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

export const GetMarketCurrencyResponseFragment = gql`
  fragment GetMarketCurrencyResponseFragment on GetMarketCurrencyResponse {
    symbol
    en_name
    ko_name
    bid
    ask
  }
`;

export const GuildFragment = gql`
  fragment GuildFragment on Guild {
    id
    user_id
    name
    description
    is_approved
    visibility
    member_count
    pending_transaction_count
    completed_transaction_count
    total_transaction_amount
    master_email
    created_at
    updated_at
  }
`;

export const GuildResponseFragment = gql`
  fragment GuildResponseFragment on GuildResponse {
    status
    message
  }
`;

export const GuildWaitingFragment = gql`
  fragment GuildWaitingFragment on GuildWaiting {
    id
    guild_id
    user_id
    status
    message
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

export const MessageResponseFragment = gql`
  fragment MessageResponseFragment on MessageResponse {
    status
    message
  }
`;

export const MyGuildResponseFragment = gql`
  fragment MyGuildResponseFragment on MyGuildResponse {
    guild_id
    is_guild_waiting
    is_guild_master
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
    sp_code
    my_code
    withdraw_fee
    agent_fee
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

export const PushSendReportFragment = gql`
  fragment PushSendReportFragment on PushSendReport {
    successCount
    failureCount
    invalidTokens
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

export const SiteFragment = gql`
  fragment SiteFragment on Site {
    id
    fee
    platform_fee
    author_fee
    invite_reward
    invite_reward1
    invite_reward2
    minimum_amount
    bid_minus
    ask_plus
  }
`;

export const SiteResponseFragment = gql`
  fragment SiteResponseFragment on SiteResponse {
    status
    message
  }
`;

export const ThumbnailFragment = gql`
  fragment ThumbnailFragment on Thumbnail {
    id
    url
  }
`;

export const TransactionFragment = gql`
  fragment TransactionFragment on Transaction {
    id
    user_id
    type
    visibility
    coin_id
    currency_id
    unit_price
    remaining_amount
    total_amount
    account_type
    bank
    depositor
    account_number
    link
    sp_code
    p_code
    u_code
    guild_id
    created_at
    updated_at
  }
`;

export const TransactionResponseFragment = gql`
  fragment TransactionResponseFragment on TransactionResponse {
    status
    message
  }
`;

export const UnreadUserTransactionCountResponseFragment = gql`
  fragment UnreadUserTransactionCountResponseFragment on UnreadUserTransactionCountResponse {
    total_unread_count
    buy_unread_count
    sell_unread_count
    my_unread_count
  }
`;

export const UserFragment = gql`
  fragment UserFragment on User {
    id
    uuid
    email
    name
    sendbird_id
    guild_id
    sp_code
    p_code
    u_code
    my_code
    locale
    country
    currency_id
    point
    created_at
    updated_at
    role
  }
`;

export const UserAccountFragment = gql`
  fragment UserAccountFragment on UserAccount {
    id
    user_id
    name
    type
    bank
    depositor
    account_number
    link
    is_default
    created_at
    updated_at
  }
`;

export const UserExternalWalletFragment = gql`
  fragment UserExternalWalletFragment on UserExternalWallet {
    id
    user_id
    coin_id
    name
    wallet_address
    created_at
    updated_at
  }
`;

export const UserInfoFragment = gql`
  fragment UserInfoFragment on UserInfo {
    id
    user_id
    auth_step
    sms_code
    sms_code_expired_at
    country_code
    phone_number
    all_transaction
    completed_transaction
    canceled_transaction
    buy_transaction
    sell_transaction
    level
    completion_rate
    created_at
    updated_at
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
    lock_point
  }
`;

export const UserResponseFragment = gql`
  fragment UserResponseFragment on UserResponse {
    status
    message
  }
`;

export const UserTransactionFragment = gql`
  fragment UserTransactionFragment on UserTransaction {
    id
    user_id
    transaction_id
    type
    unit_price
    request_amount
    request_price
    total_fee
    platform_fee
    author_fee
    agent_fee
    payment_amount
    status
    sender
    account_type
    bank
    depositor
    account_number
    link
    sp_code
    p_code
    u_code
    guild_id
    stop_reason
    created_at
    updated_at
    unread
  }
`;

export const UserTransactionResponseFragment = gql`
  fragment UserTransactionResponseFragment on UserTransactionResponse {
    status
    message
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
    sender
    receiver
    user_transaction_id
    tx_id
    coin_id
    amount
    total_withdraw_fee
    coin_withdraw_fee
    agent_withdraw_fee
    status
    sp_code
    p_code
    u_code
    guild_id
    created_at
    updated_at
  }
`;
