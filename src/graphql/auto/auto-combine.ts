// Auto-generated. Do not edit.
// Depth: 4
import { gql } from "@apollo/client";
import { AccountResponseFragment, AdminFragment, AgentAmountFragment, AgentAmountResponseFragment, AmountFragment, AmountResponseFragment, CacheResponseFragment, CalculateSendCoinResponseFragment, CalculateUSDTResponseFragment, ChatMessageFragment, ChatMessageItemFragment, CoinCurrencyFragment, CoinFragment, CountResponseFragment, DeviceTokenFragment, ExternalWalletResponseFragment, FaqFragment, GetMarketCurrencyResponseFragment, GuildFragment, GuildResponseFragment, GuildWaitingFragment, ImageFragment, InternalWalletResponseFragment, LoginAuthPayloadFragment, MessageResponseFragment, MyGuildResponseFragment, NextFaqFragment, NextNoticeFragment, NoticeFragment, PaginatorInfoFragment, PreviousFaqFragment, PreviousNoticeFragment, PushSendReportFragment, RefreshAuthPayloadFragment, SiteFragment, SiteResponseFragment, ThumbnailFragment, TransactionFragment, TransactionResponseFragment, UnreadUserTransactionCountResponseFragment, UserAccountFragment, UserExternalWalletFragment, UserFragment, UserInfoFragment, UserInternalWalletFragment, UserPointFragment, UserResponseFragment, UserTransactionFragment, UserTransactionResponseFragment, UserWalletHistoryFragment } from "./auto-fragments";

export const QUERY_ME = gql`
  query me {
    me {
      ...UserFragment
      userInfo {
        ...UserInfoFragment
      }
      kycImage {
        ...ImageFragment
      }
      storeImage {
        ...ImageFragment
      }
    }
  }
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const QUERY_CURRENT_USER = gql`
  query currentUser {
    currentUser {
      ...UserFragment
      userInfo {
        ...UserInfoFragment
      }
      kycImage {
        ...ImageFragment
      }
      storeImage {
        ...ImageFragment
      }
    }
  }
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      ...UserFragment
      userInfo {
        ...UserInfoFragment
      }
      kycImage {
        ...ImageFragment
      }
      storeImage {
        ...ImageFragment
      }
    }
  }
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const QUERY_TRANSACTION_AMOUNT = gql`
  query transactionAmount($type: TransactionTypeEnum, $invite_code: String, $created_at: DateTimeRange) {
    transactionAmount(type: $type, invite_code: $invite_code, created_at: $created_at) {
      ...AmountResponseFragment
      data {
        ...AmountFragment
      }
    }
  }
  ${AmountResponseFragment}
  ${AmountFragment}
`;

export const QUERY_USER_TRANSACTION_AMOUNT = gql`
  query userTransactionAmount($type: TransactionTypeEnum, $status: UserTransactionStatusEnum, $invite_code: String, $tab: UserTransactionTabEnum, $created_at: DateTimeRange) {
    userTransactionAmount(type: $type, status: $status, invite_code: $invite_code, tab: $tab, created_at: $created_at) {
      ...AmountResponseFragment
      data {
        ...AmountFragment
      }
    }
  }
  ${AmountResponseFragment}
  ${AmountFragment}
`;

export const QUERY_USER_TRANSACTION_AGENT_AMOUNT = gql`
  query userTransactionAgentAmount($invite_code: String, $created_at: DateTimeRange) {
    userTransactionAgentAmount(invite_code: $invite_code, created_at: $created_at) {
      ...AgentAmountResponseFragment
      data {
        ...AgentAmountFragment
      }
    }
  }
  ${AgentAmountResponseFragment}
  ${AgentAmountFragment}
`;

export const QUERY_USER_WALLET_HISTORY_AGENT_AMOUNT = gql`
  query userWalletHistoryAgentAmount($year: Int, $month: Int, $invite_code: String) {
    userWalletHistoryAgentAmount(year: $year, month: $month, invite_code: $invite_code) {
      ...AgentAmountResponseFragment
      data {
        ...AgentAmountFragment
      }
    }
  }
  ${AgentAmountResponseFragment}
  ${AgentAmountFragment}
`;

export const QUERY_GET_COUNT_NEW_USER_TRANSACTIONS = gql`
  query getCountNewUserTransactions($type: RoleEnum) {
    getCountNewUserTransactions(type: $type)
  }

`;

export const QUERY_SITE = gql`
  query site {
    site {
      ...SiteFragment
    }
  }
  ${SiteFragment}
`;

export const QUERY_FAQ = gql`
  query faq($id: ID!) {
    faq(id: $id) {
      ...FaqFragment
      images {
        ...ImageFragment
      }
      thumbnail {
        ...ThumbnailFragment
      }
      author {
        ...AdminFragment
      }
      previous {
        ...PreviousFaqFragment
      }
      next {
        ...NextFaqFragment
      }
    }
  }
  ${FaqFragment}
  ${ImageFragment}
  ${ThumbnailFragment}
  ${AdminFragment}
  ${PreviousFaqFragment}
  ${NextFaqFragment}
`;

export const QUERY_NOTICE = gql`
  query notice($id: ID!) {
    notice(id: $id) {
      ...NoticeFragment
      images {
        ...ImageFragment
      }
      thumbnail {
        ...ThumbnailFragment
      }
      author {
        ...AdminFragment
      }
      previous {
        ...PreviousNoticeFragment
      }
      next {
        ...NextNoticeFragment
      }
    }
  }
  ${NoticeFragment}
  ${ImageFragment}
  ${ThumbnailFragment}
  ${AdminFragment}
  ${PreviousNoticeFragment}
  ${NextNoticeFragment}
`;

export const QUERY_TRANSACTION = gql`
  query transaction($id: ID!) {
    transaction(id: $id) {
      ...TransactionFragment
      user {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${TransactionFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const QUERY_USER_TRANSACTION = gql`
  query userTransaction($id: ID!) {
    userTransaction(id: $id) {
      ...UserTransactionFragment
      author {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
      user {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
      transaction {
        ...TransactionFragment
        user {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
      }
      chatMessage {
        ...ChatMessageFragment
        messages {
          ...ChatMessageItemFragment
        }
      }
      images {
        ...ImageFragment
      }
    }
  }
  ${UserTransactionFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
  ${TransactionFragment}
  ${ChatMessageFragment}
  ${ChatMessageItemFragment}
`;

export const QUERY_UNREAD_USER_TRANSACTION_COUNT = gql`
  query unreadUserTransactionCount {
    unreadUserTransactionCount {
      ...UnreadUserTransactionCountResponseFragment
    }
  }
  ${UnreadUserTransactionCountResponseFragment}
`;

export const QUERY_GET_COIN_CURRENCY = gql`
  query getCoinCurrency {
    getCoinCurrency {
      ...CoinCurrencyFragment
    }
  }
  ${CoinCurrencyFragment}
`;

export const QUERY_GET_MARKET_CURRENCY = gql`
  query getMarketCurrency {
    getMarketCurrency {
      ...GetMarketCurrencyResponseFragment
    }
  }
  ${GetMarketCurrencyResponseFragment}
`;

export const QUERY_USER_POINT = gql`
  query userPoint {
    userPoint {
      ...UserPointFragment
    }
  }
  ${UserPointFragment}
`;

export const QUERY_USER_ACCOUNT = gql`
  query userAccount($id: ID!) {
    userAccount(id: $id) {
      ...UserAccountFragment
    }
  }
  ${UserAccountFragment}
`;

export const QUERY_USER_ACCOUNTS = gql`
  query userAccounts {
    userAccounts {
      ...UserAccountFragment
    }
  }
  ${UserAccountFragment}
`;

export const QUERY_USER_INTERNAL_WALLET = gql`
  query userInternalWallet($id: ID!) {
    userInternalWallet(id: $id) {
      ...UserInternalWalletFragment
    }
  }
  ${UserInternalWalletFragment}
`;

export const QUERY_USER_INTERNAL_WALLETS = gql`
  query userInternalWallets {
    userInternalWallets {
      ...UserInternalWalletFragment
    }
  }
  ${UserInternalWalletFragment}
`;

export const QUERY_USER_EXTERNAL_WALLET = gql`
  query userExternalWallet($id: ID!) {
    userExternalWallet(id: $id) {
      ...UserExternalWalletFragment
    }
  }
  ${UserExternalWalletFragment}
`;

export const QUERY_USER_EXTERNAL_WALLETS = gql`
  query userExternalWallets {
    userExternalWallets {
      ...UserExternalWalletFragment
    }
  }
  ${UserExternalWalletFragment}
`;

export const QUERY_MY_GUILD = gql`
  query myGuild {
    myGuild {
      ...MyGuildResponseFragment
    }
  }
  ${MyGuildResponseFragment}
`;

export const QUERY_GUILD = gql`
  query guild($id: ID!) {
    guild(id: $id) {
      ...GuildFragment
    }
  }
  ${GuildFragment}
`;

export const QUERY_USER_WALLET_HISTORY_AMOUNT_BY_USER = gql`
  query userWalletHistoryAmountByUser($start_date: Date, $end_date: Date, $type: UserWalletHistoryType, $where: QueryUserWalletHistoryAmountByUserWhereWhereConditions) {
    userWalletHistoryAmountByUser(start_date: $start_date, end_date: $end_date, type: $type, where: $where)
  }

`;

export const QUERY_COINS = gql`
  query coins($is_active: Boolean) {
    coins(is_active: $is_active) {
      ...CoinFragment
    }
  }
  ${CoinFragment}
`;

export const QUERY_USERS = gql`
  query users($auth_step: AuthStepEnum, $email: String, $invite_code: String, $depositor: String, $first: Int!, $page: Int) {
    users(auth_step: $auth_step, email: $email, invite_code: $invite_code, depositor: $depositor, first: $first, page: $page) {
      paginatorInfo {
        ...PaginatorInfoFragment
      }
      data {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${PaginatorInfoFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const QUERY_FAQS = gql`
  query faqs($locale: LocaleStatus, $type: FaqTypeEnum, $is_active: Boolean, $orderBy: [QueryFaqsOrderByOrderByClause!], $first: Int!, $page: Int) {
    faqs(locale: $locale, type: $type, is_active: $is_active, orderBy: $orderBy, first: $first, page: $page) {
      paginatorInfo {
        ...PaginatorInfoFragment
      }
      data {
        ...FaqFragment
        images {
          ...ImageFragment
        }
        thumbnail {
          ...ThumbnailFragment
        }
        author {
          ...AdminFragment
        }
        previous {
          ...PreviousFaqFragment
        }
        next {
          ...NextFaqFragment
        }
      }
    }
  }
  ${PaginatorInfoFragment}
  ${FaqFragment}
  ${ImageFragment}
  ${ThumbnailFragment}
  ${AdminFragment}
  ${PreviousFaqFragment}
  ${NextFaqFragment}
`;

export const QUERY_FAQ_SEARCH = gql`
  query faqSearch($locale: LocaleStatus, $type: FaqTypeEnum, $is_active: Boolean, $where: QueryFaqSearchWhereWhereConditions, $orderBy: [QueryFaqSearchOrderByOrderByClause!], $first: Int!, $page: Int) {
    faqSearch(locale: $locale, type: $type, is_active: $is_active, where: $where, orderBy: $orderBy, first: $first, page: $page) {
      paginatorInfo {
        ...PaginatorInfoFragment
      }
      data {
        ...FaqFragment
        images {
          ...ImageFragment
        }
        thumbnail {
          ...ThumbnailFragment
        }
        author {
          ...AdminFragment
        }
        previous {
          ...PreviousFaqFragment
        }
        next {
          ...NextFaqFragment
        }
      }
    }
  }
  ${PaginatorInfoFragment}
  ${FaqFragment}
  ${ImageFragment}
  ${ThumbnailFragment}
  ${AdminFragment}
  ${PreviousFaqFragment}
  ${NextFaqFragment}
`;

export const QUERY_NOTICES = gql`
  query notices($locale: LocaleStatus, $is_active: Boolean, $orderBy: [QueryNoticesOrderByOrderByClause!], $first: Int!, $page: Int) {
    notices(locale: $locale, is_active: $is_active, orderBy: $orderBy, first: $first, page: $page) {
      paginatorInfo {
        ...PaginatorInfoFragment
      }
      data {
        ...NoticeFragment
        images {
          ...ImageFragment
        }
        thumbnail {
          ...ThumbnailFragment
        }
        author {
          ...AdminFragment
        }
        previous {
          ...PreviousNoticeFragment
        }
        next {
          ...NextNoticeFragment
        }
      }
    }
  }
  ${PaginatorInfoFragment}
  ${NoticeFragment}
  ${ImageFragment}
  ${ThumbnailFragment}
  ${AdminFragment}
  ${PreviousNoticeFragment}
  ${NextNoticeFragment}
`;

export const QUERY_NOTICE_SEARCH = gql`
  query noticeSearch($locale: LocaleStatus, $is_active: Boolean, $where: QueryNoticeSearchWhereWhereConditions, $orderBy: [QueryNoticeSearchOrderByOrderByClause!], $first: Int!, $page: Int) {
    noticeSearch(locale: $locale, is_active: $is_active, where: $where, orderBy: $orderBy, first: $first, page: $page) {
      paginatorInfo {
        ...PaginatorInfoFragment
      }
      data {
        ...NoticeFragment
        images {
          ...ImageFragment
        }
        thumbnail {
          ...ThumbnailFragment
        }
        author {
          ...AdminFragment
        }
        previous {
          ...PreviousNoticeFragment
        }
        next {
          ...NextNoticeFragment
        }
      }
    }
  }
  ${PaginatorInfoFragment}
  ${NoticeFragment}
  ${ImageFragment}
  ${ThumbnailFragment}
  ${AdminFragment}
  ${PreviousNoticeFragment}
  ${NextNoticeFragment}
`;

export const QUERY_TRANSACTIONS_BY_USER = gql`
  query transactionsByUser($type: TransactionTypeEnum, $visibility: VisibilityEnum, $orderBy: [QueryTransactionsByUserOrderByOrderByClause!], $first: Int!, $page: Int) {
    transactionsByUser(type: $type, visibility: $visibility, orderBy: $orderBy, first: $first, page: $page) {
      paginatorInfo {
        ...PaginatorInfoFragment
      }
      data {
        ...TransactionFragment
        user {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
      }
    }
  }
  ${PaginatorInfoFragment}
  ${TransactionFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const QUERY_MY_TRANSACTIONS = gql`
  query myTransactions($type: TransactionTypeEnum, $orderBy: [QueryMyTransactionsOrderByOrderByClause!], $first: Int!, $page: Int) {
    myTransactions(type: $type, orderBy: $orderBy, first: $first, page: $page) {
      paginatorInfo {
        ...PaginatorInfoFragment
      }
      data {
        ...TransactionFragment
        user {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
      }
    }
  }
  ${PaginatorInfoFragment}
  ${TransactionFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const QUERY_USER_TRANSACTIONS = gql`
  query userTransactions($type: TransactionTypeEnum, $status: UserTransactionStatusEnum, $invite_code: String, $tab: UserTransactionTabEnum, $created_at: DateTimeRange, $first: Int!, $page: Int) {
    userTransactions(type: $type, status: $status, invite_code: $invite_code, tab: $tab, created_at: $created_at, first: $first, page: $page) {
      paginatorInfo {
        ...PaginatorInfoFragment
      }
      data {
        ...UserTransactionFragment
        author {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
        user {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
        transaction {
          ...TransactionFragment
          user {
            ...UserFragment
            userInfo {
              ...UserInfoFragment
            }
            kycImage {
              ...ImageFragment
            }
            storeImage {
              ...ImageFragment
            }
          }
        }
        chatMessage {
          ...ChatMessageFragment
          messages {
            ...ChatMessageItemFragment
          }
        }
        images {
          ...ImageFragment
        }
      }
    }
  }
  ${PaginatorInfoFragment}
  ${UserTransactionFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
  ${TransactionFragment}
  ${ChatMessageFragment}
  ${ChatMessageItemFragment}
`;

export const QUERY_MY_USER_TRANSACTIONS = gql`
  query myUserTransactions($start_date: Date, $end_date: Date, $type: TransactionTypeEnum, $tab: UserTransactionTabEnum, $first: Int!, $page: Int) {
    myUserTransactions(start_date: $start_date, end_date: $end_date, type: $type, tab: $tab, first: $first, page: $page) {
      paginatorInfo {
        ...PaginatorInfoFragment
      }
      data {
        ...UserTransactionFragment
        author {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
        user {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
        transaction {
          ...TransactionFragment
          user {
            ...UserFragment
            userInfo {
              ...UserInfoFragment
            }
            kycImage {
              ...ImageFragment
            }
            storeImage {
              ...ImageFragment
            }
          }
        }
        chatMessage {
          ...ChatMessageFragment
          messages {
            ...ChatMessageItemFragment
          }
        }
        images {
          ...ImageFragment
        }
      }
    }
  }
  ${PaginatorInfoFragment}
  ${UserTransactionFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
  ${TransactionFragment}
  ${ChatMessageFragment}
  ${ChatMessageItemFragment}
`;

export const QUERY_USER_TRANSACTIONS_BY_MY_TRANSACTIONS = gql`
  query userTransactionsByMyTransactions($start_date: Date, $end_date: Date, $tab: UserTransactionTabEnum, $first: Int!, $page: Int) {
    userTransactionsByMyTransactions(start_date: $start_date, end_date: $end_date, tab: $tab, first: $first, page: $page) {
      paginatorInfo {
        ...PaginatorInfoFragment
      }
      data {
        ...UserTransactionFragment
        author {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
        user {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
        transaction {
          ...TransactionFragment
          user {
            ...UserFragment
            userInfo {
              ...UserInfoFragment
            }
            kycImage {
              ...ImageFragment
            }
            storeImage {
              ...ImageFragment
            }
          }
        }
        chatMessage {
          ...ChatMessageFragment
          messages {
            ...ChatMessageItemFragment
          }
        }
        images {
          ...ImageFragment
        }
      }
    }
  }
  ${PaginatorInfoFragment}
  ${UserTransactionFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
  ${TransactionFragment}
  ${ChatMessageFragment}
  ${ChatMessageItemFragment}
`;

export const QUERY_GUILDS = gql`
  query guilds($name: String, $orderBy: [QueryGuildsOrderByOrderByClause!], $first: Int!, $page: Int) {
    guilds(name: $name, orderBy: $orderBy, first: $first, page: $page) {
      paginatorInfo {
        ...PaginatorInfoFragment
      }
      data {
        ...GuildFragment
      }
    }
  }
  ${PaginatorInfoFragment}
  ${GuildFragment}
`;

export const QUERY_GUILD_RANKING = gql`
  query guildRanking($orderBy: [QueryGuildRankingOrderByOrderByClause!], $first: Int!, $page: Int) {
    guildRanking(orderBy: $orderBy, first: $first, page: $page) {
      paginatorInfo {
        ...PaginatorInfoFragment
      }
      data {
        ...GuildFragment
      }
    }
  }
  ${PaginatorInfoFragment}
  ${GuildFragment}
`;

export const QUERY_GUILD_WAITINGS = gql`
  query guildWaitings($email: String, $first: Int!, $page: Int) {
    guildWaitings(email: $email, first: $first, page: $page) {
      paginatorInfo {
        ...PaginatorInfoFragment
      }
      data {
        ...GuildWaitingFragment
        user {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
      }
    }
  }
  ${PaginatorInfoFragment}
  ${GuildWaitingFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const QUERY_GUILD_USERS = gql`
  query guildUsers($email: String, $first: Int!, $page: Int) {
    guildUsers(email: $email, first: $first, page: $page) {
      paginatorInfo {
        ...PaginatorInfoFragment
      }
      data {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${PaginatorInfoFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const QUERY_USER_WALLET_HISTORY_BY_USER = gql`
  query userWalletHistoryByUser($start_date: Date, $end_date: Date, $type: UserWalletHistoryType, $where: QueryUserWalletHistoryByUserWhereWhereConditions, $orderBy: [QueryUserWalletHistoryByUserOrderByOrderByClause!], $first: Int!, $page: Int) {
    userWalletHistoryByUser(start_date: $start_date, end_date: $end_date, type: $type, where: $where, orderBy: $orderBy, first: $first, page: $page) {
      paginatorInfo {
        ...PaginatorInfoFragment
      }
      data {
        ...UserWalletHistoryFragment
      }
    }
  }
  ${PaginatorInfoFragment}
  ${UserWalletHistoryFragment}
`;

export const MUTATION_UPLOAD = gql`
  mutation upload($file: Upload!) {
    upload(file: $file) {
      ...ImageFragment
    }
  }
  ${ImageFragment}
`;

export const MUTATION_UPLOAD_THUMBNAIL = gql`
  mutation uploadThumbnail($file: Upload!) {
    uploadThumbnail(file: $file) {
      ...ThumbnailFragment
    }
  }
  ${ThumbnailFragment}
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
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${LoginAuthPayloadFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_REGISTER = gql`
  mutation register($input: RegisterInput!) {
    register(input: $input) {
      ...LoginAuthPayloadFragment
      user {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${LoginAuthPayloadFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_REFRESH_TOKEN = gql`
  mutation refreshToken($refresh_token: String!) {
    refreshToken(refresh_token: $refresh_token) {
      ...RefreshAuthPayloadFragment
    }
  }
  ${RefreshAuthPayloadFragment}
`;

export const MUTATION_LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser {
      ...UserResponseFragment
      data {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_DELETE_USER = gql`
  mutation deleteUser {
    deleteUser {
      ...UserResponseFragment
      data {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_VERIFY_EMAIL = gql`
  mutation verifyEmail($input: VerifyEmailInput!) {
    verifyEmail(input: $input) {
      ...MessageResponseFragment
    }
  }
  ${MessageResponseFragment}
`;

export const MUTATION_CHECK_EMAIL_FOR_CREATE_USER = gql`
  mutation checkEmailForCreateUser($email: String!, $locale: LocaleStatus!) {
    checkEmailForCreateUser(email: $email, locale: $locale) {
      ...MessageResponseFragment
    }
  }
  ${MessageResponseFragment}
`;

export const MUTATION_RESEND_VERIFY_EMAIL = gql`
  mutation resendVerifyEmail($input: ForgotPasswordInput!) {
    resendVerifyEmail(input: $input) {
      ...MessageResponseFragment
    }
  }
  ${MessageResponseFragment}
`;

export const MUTATION_CHANGE_PASSWORD = gql`
  mutation changePassword($input: ChangePasswordInput) {
    changePassword(input: $input) {
      ...UserResponseFragment
      data {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_RESET_PASSWORD = gql`
  mutation resetPassword($input: ResetPasswordInput) {
    resetPassword(input: $input) {
      ...UserResponseFragment
      data {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_UPDATE_NAME = gql`
  mutation updateName($name: String!) {
    updateName(name: $name) {
      ...UserResponseFragment
      data {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_CREATE_PROFILE = gql`
  mutation createProfile($input: CreateProfileInput!) {
    createProfile(input: $input) {
      ...UserResponseFragment
      data {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_SEND_SMS_CODE = gql`
  mutation sendSmsCode($input: SendSmsCodeInput!) {
    sendSmsCode(input: $input) {
      ...UserResponseFragment
      data {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_CHECK_SMS_CODE = gql`
  mutation checkSmsCode($sms_code: String!) {
    checkSmsCode(sms_code: $sms_code) {
      ...UserResponseFragment
      data {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_CREATE_KYC = gql`
  mutation createKYC($input: CreateImageInput!) {
    createKYC(input: $input) {
      ...UserResponseFragment
      data {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_UPDATE_KYC = gql`
  mutation updateKYC($input: UpdateImageInput!) {
    updateKYC(input: $input) {
      ...UserResponseFragment
      data {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_CREATE_STORE = gql`
  mutation createStore($input: CreateImageInput!) {
    createStore(input: $input) {
      ...UserResponseFragment
      data {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_UPDATE_STORE = gql`
  mutation updateStore($input: UpdateImageInput!) {
    updateStore(input: $input) {
      ...UserResponseFragment
      data {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_CHANGE_LOCALE = gql`
  mutation changeLocale($input: UpdateLocaleInput!) {
    changeLocale(input: $input) {
      ...UserResponseFragment
      data {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_SET_LOCALE = gql`
  mutation setLocale($input: UpdateLocaleInput!) {
    setLocale(input: $input) {
      ...MessageResponseFragment
    }
  }
  ${MessageResponseFragment}
`;

export const MUTATION_UPDATE_MY_CURRENCY = gql`
  mutation updateMyCurrency($currency_id: CurrencyEnum!) {
    updateMyCurrency(currency_id: $currency_id) {
      ...UserResponseFragment
      data {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_SEND_SMS_CODE_BY_GUEST = gql`
  mutation sendSmsCodeByGuest($input: SendSmsCodeByGuestInput!) {
    sendSmsCodeByGuest(input: $input) {
      ...CacheResponseFragment
    }
  }
  ${CacheResponseFragment}
`;

export const MUTATION_CHECK_SMS_CODE_BY_GUEST = gql`
  mutation checkSmsCodeByGuest($input: CheckSmsCodeByGuestInput!) {
    checkSmsCodeByGuest(input: $input) {
      ...UserResponseFragment
      data {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_RETURN_KYC = gql`
  mutation returnKYC($id: ID!) {
    returnKYC(id: $id) {
      ...UserResponseFragment
      data {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_RETURN_STORE = gql`
  mutation returnStore($id: ID!) {
    returnStore(id: $id) {
      ...UserResponseFragment
      data {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_UPDATE_AUTH_STEP = gql`
  mutation updateAuthStep($input: UpdateAuthStepInput) {
    updateAuthStep(input: $input) {
      ...UserResponseFragment
      data {
        ...UserFragment
        userInfo {
          ...UserInfoFragment
        }
        kycImage {
          ...ImageFragment
        }
        storeImage {
          ...ImageFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_UPDATE_SITE = gql`
  mutation updateSite($input: UpdateSiteInput!) {
    updateSite(input: $input) {
      ...SiteResponseFragment
      data {
        ...SiteFragment
      }
    }
  }
  ${SiteResponseFragment}
  ${SiteFragment}
`;

export const MUTATION_CREATE_FAQ = gql`
  mutation createFaq($input: CreateFaqInput!) {
    createFaq(input: $input) {
      ...FaqFragment
      images {
        ...ImageFragment
      }
      thumbnail {
        ...ThumbnailFragment
      }
      author {
        ...AdminFragment
      }
      previous {
        ...PreviousFaqFragment
      }
      next {
        ...NextFaqFragment
      }
    }
  }
  ${FaqFragment}
  ${ImageFragment}
  ${ThumbnailFragment}
  ${AdminFragment}
  ${PreviousFaqFragment}
  ${NextFaqFragment}
`;

export const MUTATION_UPDATE_FAQ = gql`
  mutation updateFaq($input: UpdateFaqInput!) {
    updateFaq(input: $input) {
      ...FaqFragment
      images {
        ...ImageFragment
      }
      thumbnail {
        ...ThumbnailFragment
      }
      author {
        ...AdminFragment
      }
      previous {
        ...PreviousFaqFragment
      }
      next {
        ...NextFaqFragment
      }
    }
  }
  ${FaqFragment}
  ${ImageFragment}
  ${ThumbnailFragment}
  ${AdminFragment}
  ${PreviousFaqFragment}
  ${NextFaqFragment}
`;

export const MUTATION_DELETE_FAQ = gql`
  mutation deleteFaq($id: ID!) {
    deleteFaq(id: $id) {
      ...FaqFragment
      images {
        ...ImageFragment
      }
      thumbnail {
        ...ThumbnailFragment
      }
      author {
        ...AdminFragment
      }
      previous {
        ...PreviousFaqFragment
      }
      next {
        ...NextFaqFragment
      }
    }
  }
  ${FaqFragment}
  ${ImageFragment}
  ${ThumbnailFragment}
  ${AdminFragment}
  ${PreviousFaqFragment}
  ${NextFaqFragment}
`;

export const MUTATION_CREATE_NOTICE = gql`
  mutation createNotice($input: CreateNoticeInput!) {
    createNotice(input: $input) {
      ...NoticeFragment
      images {
        ...ImageFragment
      }
      thumbnail {
        ...ThumbnailFragment
      }
      author {
        ...AdminFragment
      }
      previous {
        ...PreviousNoticeFragment
      }
      next {
        ...NextNoticeFragment
      }
    }
  }
  ${NoticeFragment}
  ${ImageFragment}
  ${ThumbnailFragment}
  ${AdminFragment}
  ${PreviousNoticeFragment}
  ${NextNoticeFragment}
`;

export const MUTATION_UPDATE_NOTICE = gql`
  mutation updateNotice($input: UpdateNoticeInput!) {
    updateNotice(input: $input) {
      ...NoticeFragment
      images {
        ...ImageFragment
      }
      thumbnail {
        ...ThumbnailFragment
      }
      author {
        ...AdminFragment
      }
      previous {
        ...PreviousNoticeFragment
      }
      next {
        ...NextNoticeFragment
      }
    }
  }
  ${NoticeFragment}
  ${ImageFragment}
  ${ThumbnailFragment}
  ${AdminFragment}
  ${PreviousNoticeFragment}
  ${NextNoticeFragment}
`;

export const MUTATION_DELETE_NOTICE = gql`
  mutation deleteNotice($id: ID!) {
    deleteNotice(id: $id) {
      ...NoticeFragment
      images {
        ...ImageFragment
      }
      thumbnail {
        ...ThumbnailFragment
      }
      author {
        ...AdminFragment
      }
      previous {
        ...PreviousNoticeFragment
      }
      next {
        ...NextNoticeFragment
      }
    }
  }
  ${NoticeFragment}
  ${ImageFragment}
  ${ThumbnailFragment}
  ${AdminFragment}
  ${PreviousNoticeFragment}
  ${NextNoticeFragment}
`;

export const MUTATION_CREATE_TRANSACTION = gql`
  mutation createTransaction($input: CreateTransactionInput!) {
    createTransaction(input: $input) {
      ...TransactionResponseFragment
      data {
        ...TransactionFragment
        user {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
      }
    }
  }
  ${TransactionResponseFragment}
  ${TransactionFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_UPDATE_TRANSACTION = gql`
  mutation updateTransaction($input: UpdateTransactionInput!) {
    updateTransaction(input: $input) {
      ...TransactionResponseFragment
      data {
        ...TransactionFragment
        user {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
      }
    }
  }
  ${TransactionResponseFragment}
  ${TransactionFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_DELETE_TRANSACTION = gql`
  mutation deleteTransaction($id: ID!) {
    deleteTransaction(id: $id) {
      ...TransactionResponseFragment
      data {
        ...TransactionFragment
        user {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
      }
    }
  }
  ${TransactionResponseFragment}
  ${TransactionFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
`;

export const MUTATION_CREATE_USER_TRANSACTION = gql`
  mutation createUserTransaction($input: CreateUserTransactionInput!) {
    createUserTransaction(input: $input) {
      ...UserTransactionResponseFragment
      data {
        ...UserTransactionFragment
        author {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
        user {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
        transaction {
          ...TransactionFragment
          user {
            ...UserFragment
            userInfo {
              ...UserInfoFragment
            }
            kycImage {
              ...ImageFragment
            }
            storeImage {
              ...ImageFragment
            }
          }
        }
        chatMessage {
          ...ChatMessageFragment
          messages {
            ...ChatMessageItemFragment
          }
        }
        images {
          ...ImageFragment
        }
      }
    }
  }
  ${UserTransactionResponseFragment}
  ${UserTransactionFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
  ${TransactionFragment}
  ${ChatMessageFragment}
  ${ChatMessageItemFragment}
`;

export const MUTATION_UPDATE_USER_TRANSACTION = gql`
  mutation updateUserTransaction($input: UpdateUserTransactionInput!) {
    updateUserTransaction(input: $input) {
      ...UserTransactionResponseFragment
      data {
        ...UserTransactionFragment
        author {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
        user {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
        transaction {
          ...TransactionFragment
          user {
            ...UserFragment
            userInfo {
              ...UserInfoFragment
            }
            kycImage {
              ...ImageFragment
            }
            storeImage {
              ...ImageFragment
            }
          }
        }
        chatMessage {
          ...ChatMessageFragment
          messages {
            ...ChatMessageItemFragment
          }
        }
        images {
          ...ImageFragment
        }
      }
    }
  }
  ${UserTransactionResponseFragment}
  ${UserTransactionFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
  ${TransactionFragment}
  ${ChatMessageFragment}
  ${ChatMessageItemFragment}
`;

export const MUTATION_UPDATE_USER_TRANSACTION_STATUS = gql`
  mutation updateUserTransactionStatus($input: UpdateUserTransactionStatusInput!) {
    updateUserTransactionStatus(input: $input) {
      ...UserTransactionResponseFragment
      data {
        ...UserTransactionFragment
        author {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
        user {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
        transaction {
          ...TransactionFragment
          user {
            ...UserFragment
            userInfo {
              ...UserInfoFragment
            }
            kycImage {
              ...ImageFragment
            }
            storeImage {
              ...ImageFragment
            }
          }
        }
        chatMessage {
          ...ChatMessageFragment
          messages {
            ...ChatMessageItemFragment
          }
        }
        images {
          ...ImageFragment
        }
      }
    }
  }
  ${UserTransactionResponseFragment}
  ${UserTransactionFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
  ${TransactionFragment}
  ${ChatMessageFragment}
  ${ChatMessageItemFragment}
`;

export const MUTATION_DELETE_USER_TRANSACTION = gql`
  mutation deleteUserTransaction($id: ID!) {
    deleteUserTransaction(id: $id) {
      ...UserTransactionResponseFragment
      data {
        ...UserTransactionFragment
        author {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
        user {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
        transaction {
          ...TransactionFragment
          user {
            ...UserFragment
            userInfo {
              ...UserInfoFragment
            }
            kycImage {
              ...ImageFragment
            }
            storeImage {
              ...ImageFragment
            }
          }
        }
        chatMessage {
          ...ChatMessageFragment
          messages {
            ...ChatMessageItemFragment
          }
        }
        images {
          ...ImageFragment
        }
      }
    }
  }
  ${UserTransactionResponseFragment}
  ${UserTransactionFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
  ${TransactionFragment}
  ${ChatMessageFragment}
  ${ChatMessageItemFragment}
`;

export const MUTATION_CREATE_STOPPED = gql`
  mutation createStopped($input: CreateStoppedInput!) {
    createStopped(input: $input) {
      ...UserTransactionResponseFragment
      data {
        ...UserTransactionFragment
        author {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
        user {
          ...UserFragment
          userInfo {
            ...UserInfoFragment
          }
          kycImage {
            ...ImageFragment
          }
          storeImage {
            ...ImageFragment
          }
        }
        transaction {
          ...TransactionFragment
          user {
            ...UserFragment
            userInfo {
              ...UserInfoFragment
            }
            kycImage {
              ...ImageFragment
            }
            storeImage {
              ...ImageFragment
            }
          }
        }
        chatMessage {
          ...ChatMessageFragment
          messages {
            ...ChatMessageItemFragment
          }
        }
        images {
          ...ImageFragment
        }
      }
    }
  }
  ${UserTransactionResponseFragment}
  ${UserTransactionFragment}
  ${UserFragment}
  ${UserInfoFragment}
  ${ImageFragment}
  ${TransactionFragment}
  ${ChatMessageFragment}
  ${ChatMessageItemFragment}
`;

export const MUTATION_CALCULATE_USDT = gql`
  mutation calculateUSDT($input: CreateUserTransactionInput!) {
    calculateUSDT(input: $input) {
      ...CalculateUSDTResponseFragment
    }
  }
  ${CalculateUSDTResponseFragment}
`;

export const MUTATION_CREATE_USER_ACCOUNT = gql`
  mutation createUserAccount($input: CreateUserAccountInput!) {
    createUserAccount(input: $input) {
      ...AccountResponseFragment
      data {
        ...UserAccountFragment
      }
    }
  }
  ${AccountResponseFragment}
  ${UserAccountFragment}
`;

export const MUTATION_UPDATE_USER_ACCOUNT = gql`
  mutation updateUserAccount($input: UpdateUserAccountInput!) {
    updateUserAccount(input: $input) {
      ...AccountResponseFragment
      data {
        ...UserAccountFragment
      }
    }
  }
  ${AccountResponseFragment}
  ${UserAccountFragment}
`;

export const MUTATION_DELETE_USER_ACCOUNT = gql`
  mutation deleteUserAccount($id: ID!) {
    deleteUserAccount(id: $id) {
      ...AccountResponseFragment
      data {
        ...UserAccountFragment
      }
    }
  }
  ${AccountResponseFragment}
  ${UserAccountFragment}
`;

export const MUTATION_CREATE_USER_INTERNAL_WALLET = gql`
  mutation createUserInternalWallet($input: CreateUserInternalWalletInput!) {
    createUserInternalWallet(input: $input) {
      ...InternalWalletResponseFragment
      data {
        ...UserInternalWalletFragment
      }
    }
  }
  ${InternalWalletResponseFragment}
  ${UserInternalWalletFragment}
`;

export const MUTATION_CREATE_USER_EXTERNAL_WALLET = gql`
  mutation createUserExternalWallet($input: CreateUserExternalWalletInput!) {
    createUserExternalWallet(input: $input) {
      ...ExternalWalletResponseFragment
      data {
        ...UserExternalWalletFragment
      }
    }
  }
  ${ExternalWalletResponseFragment}
  ${UserExternalWalletFragment}
`;

export const MUTATION_UPDATE_USER_EXTERNAL_WALLET = gql`
  mutation updateUserExternalWallet($input: UpdateUserExternalWalletInput!) {
    updateUserExternalWallet(input: $input) {
      ...ExternalWalletResponseFragment
      data {
        ...UserExternalWalletFragment
      }
    }
  }
  ${ExternalWalletResponseFragment}
  ${UserExternalWalletFragment}
`;

export const MUTATION_DELETE_USER_EXTERNAL_WALLET = gql`
  mutation deleteUserExternalWallet($id: ID!) {
    deleteUserExternalWallet(id: $id) {
      ...ExternalWalletResponseFragment
      data {
        ...UserExternalWalletFragment
      }
    }
  }
  ${ExternalWalletResponseFragment}
  ${UserExternalWalletFragment}
`;

export const MUTATION_CREATE_GUILD = gql`
  mutation createGuild($input: CreateGuildInput!) {
    createGuild(input: $input) {
      ...GuildResponseFragment
      data {
        ...GuildFragment
      }
    }
  }
  ${GuildResponseFragment}
  ${GuildFragment}
`;

export const MUTATION_UPDATE_GUILD = gql`
  mutation updateGuild($input: UpdateGuildInput!) {
    updateGuild(input: $input) {
      ...GuildResponseFragment
      data {
        ...GuildFragment
      }
    }
  }
  ${GuildResponseFragment}
  ${GuildFragment}
`;

export const MUTATION_DELETE_GUILD = gql`
  mutation deleteGuild {
    deleteGuild {
      ...GuildResponseFragment
      data {
        ...GuildFragment
      }
    }
  }
  ${GuildResponseFragment}
  ${GuildFragment}
`;

export const MUTATION_LEAVE_GUILD = gql`
  mutation leaveGuild {
    leaveGuild {
      ...GuildResponseFragment
      data {
        ...GuildFragment
      }
    }
  }
  ${GuildResponseFragment}
  ${GuildFragment}
`;

export const MUTATION_EXPEL_GUILD = gql`
  mutation expelGuild($user_id: Int!) {
    expelGuild(user_id: $user_id) {
      ...GuildResponseFragment
      data {
        ...GuildFragment
      }
    }
  }
  ${GuildResponseFragment}
  ${GuildFragment}
`;

export const MUTATION_SIGN_UP_GUILD = gql`
  mutation signUpGuild($guild_id: Int!) {
    signUpGuild(guild_id: $guild_id) {
      ...GuildResponseFragment
      data {
        ...GuildFragment
      }
    }
  }
  ${GuildResponseFragment}
  ${GuildFragment}
`;

export const MUTATION_CANCEL_GUILD = gql`
  mutation cancelGuild {
    cancelGuild {
      ...GuildResponseFragment
      data {
        ...GuildFragment
      }
    }
  }
  ${GuildResponseFragment}
  ${GuildFragment}
`;

export const MUTATION_APPROVE_GUILD = gql`
  mutation approveGuild($input: ApproveGuildInput!) {
    approveGuild(input: $input) {
      ...GuildResponseFragment
      data {
        ...GuildFragment
      }
    }
  }
  ${GuildResponseFragment}
  ${GuildFragment}
`;

export const MUTATION_SEND_COIN = gql`
  mutation sendCoin($input: SendCoinInput!) {
    sendCoin(input: $input) {
      ...MessageResponseFragment
    }
  }
  ${MessageResponseFragment}
`;

export const MUTATION_CALCULATE_SEND_COIN = gql`
  mutation calculateSendCoin($input: SendCoinInput!) {
    calculateSendCoin(input: $input) {
      ...CalculateSendCoinResponseFragment
    }
  }
  ${CalculateSendCoinResponseFragment}
`;

export const MUTATION_SEND_COIN_BY_UUID = gql`
  mutation sendCoinByUUID($input: SendCoinBYUUIDInput!) {
    sendCoinByUUID(input: $input) {
      ...MessageResponseFragment
    }
  }
  ${MessageResponseFragment}
`;

export const MUTATION_REVIEW_SEND_COIN = gql`
  mutation reviewSendCoin($input: ReviewSendCoinInput!) {
    reviewSendCoin(input: $input) {
      ...MessageResponseFragment
    }
  }
  ${MessageResponseFragment}
`;

export const MUTATION_RECEIVE_COIN = gql`
  mutation receiveCoin($input: ReceiveCoinInput!) {
    receiveCoin(input: $input) {
      ...CountResponseFragment
    }
  }
  ${CountResponseFragment}
`;

export const MUTATION_UPDATE_COIN = gql`
  mutation updateCoin($input: UpdateCoinInput!) {
    updateCoin(input: $input) {
      ...MessageResponseFragment
    }
  }
  ${MessageResponseFragment}
`;

export const MUTATION_REGISTER_DEVICE_TOKEN = gql`
  mutation registerDeviceToken($input: RegisterDeviceTokenInput!) {
    registerDeviceToken(input: $input) {
      ...DeviceTokenFragment
    }
  }
  ${DeviceTokenFragment}
`;

export const MUTATION_DELETE_DEVICE_TOKEN = gql`
  mutation deleteDeviceToken($token: String!) {
    deleteDeviceToken(token: $token)
  }

`;

export const MUTATION_SEND_PUSH_TO_USER = gql`
  mutation sendPushToUser($userId: ID!, $input: PushNotificationInput!) {
    sendPushToUser(userId: $userId, input: $input) {
      ...PushSendReportFragment
    }
  }
  ${PushSendReportFragment}
`;

