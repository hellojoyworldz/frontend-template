// Auto-generated. Do not edit.
// Depth: 4
import { gql } from "@apollo/client";
import {
  AdminFragment,
  BotAccountFragment,
  BotResponseFragment,
  CountResponseFragment,
  FaqFragment,
  ImageFragment,
  InternalWalletResponseFragment,
  LoginAuthPayloadFragment,
  MarketPriceFragment,
  MessageResponseFragment,
  NextFaqFragment,
  NextNoticeFragment,
  NoticeFragment,
  PaginatorInfoFragment,
  PreviousFaqFragment,
  PreviousNoticeFragment,
  RefreshAuthPayloadFragment,
  ThumbnailFragment,
  TicketFragment,
  UserAmountFragment,
  UserFragment,
  UserInternalWalletFragment,
  UserPointFragment,
  UserResponseFragment,
  UserTicketFragment,
  UserWalletHistoryFragment,
  VerifyResponseFragment,
} from "./auto-fragments";

export const ME = gql`
  query me {
    me {
      ...UserFragment
      botAccounts {
        ...BotAccountFragment
      }
      userTicket {
        ...UserTicketFragment
      }
    }
  }
  ${UserFragment}
  ${BotAccountFragment}
  ${UserTicketFragment}
`;

export const CURRENT_USER = gql`
  query currentUser {
    currentUser {
      ...UserFragment
      botAccounts {
        ...BotAccountFragment
      }
      userTicket {
        ...UserTicketFragment
      }
    }
  }
  ${UserFragment}
  ${BotAccountFragment}
  ${UserTicketFragment}
`;

export const USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      ...UserFragment
      botAccounts {
        ...BotAccountFragment
      }
      userTicket {
        ...UserTicketFragment
      }
    }
  }
  ${UserFragment}
  ${BotAccountFragment}
  ${UserTicketFragment}
`;

export const USER_AMOUNT = gql`
  query UserAmount {
    UserAmount {
      ...UserAmountFragment
    }
  }
  ${UserAmountFragment}
`;

export const USER_WALLET_HISTORY_AMOUNT = gql`
  query UserWalletHistoryAmount($year: Int, $month: Int, $type: UserWalletHistoryType) {
    UserWalletHistoryAmount(year: $year, month: $month, type: $type)
  }
`;

export const FAQ = gql`
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

export const NOTICE = gql`
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

export const USER_POINT = gql`
  query userPoint {
    userPoint {
      ...UserPointFragment
    }
  }
  ${UserPointFragment}
`;

export const USER_INTERNAL_WALLET = gql`
  query userInternalWallet($id: ID!) {
    userInternalWallet(id: $id) {
      ...UserInternalWalletFragment
    }
  }
  ${UserInternalWalletFragment}
`;

export const USER_INTERNAL_WALLETS = gql`
  query userInternalWallets {
    userInternalWallets {
      ...UserInternalWalletFragment
    }
  }
  ${UserInternalWalletFragment}
`;

export const MARKET_PRICES = gql`
  query marketPrices {
    marketPrices {
      ...MarketPriceFragment
    }
  }
  ${MarketPriceFragment}
`;

export const TICKETS = gql`
  query tickets {
    tickets {
      ...TicketFragment
    }
  }
  ${TicketFragment}
`;

export const USER_TICKET = gql`
  query userTicket {
    userTicket {
      ...UserTicketFragment
    }
  }
  ${UserTicketFragment}
`;

export const USERS = gql`
  query users(
    $auth_step: AuthStepEnum
    $login_id: String
    $name: String
    $email: String
    $phone: String
    $uid: String
    $first: Int!
    $page: Int
  ) {
    users(
      auth_step: $auth_step
      login_id: $login_id
      name: $name
      email: $email
      phone: $phone
      uid: $uid
      first: $first
      page: $page
    ) {
      paginatorInfo {
        ...PaginatorInfoFragment
      }
      data {
        ...UserFragment
        botAccounts {
          ...BotAccountFragment
        }
        userTicket {
          ...UserTicketFragment
        }
      }
    }
  }
  ${PaginatorInfoFragment}
  ${UserFragment}
  ${BotAccountFragment}
  ${UserTicketFragment}
`;

export const FAQS = gql`
  query faqs(
    $locale: LocaleStatus
    $type: FaqTypeEnum
    $is_active: Boolean
    $orderBy: [QueryFaqsOrderByOrderByClause!]
    $first: Int!
    $page: Int
  ) {
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

export const FAQ_SEARCH = gql`
  query faqSearch(
    $locale: LocaleStatus
    $type: FaqTypeEnum
    $is_active: Boolean
    $where: QueryFaqSearchWhereWhereConditions
    $orderBy: [QueryFaqSearchOrderByOrderByClause!]
    $first: Int!
    $page: Int
  ) {
    faqSearch(
      locale: $locale
      type: $type
      is_active: $is_active
      where: $where
      orderBy: $orderBy
      first: $first
      page: $page
    ) {
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

export const NOTICES = gql`
  query notices(
    $locale: LocaleStatus
    $is_active: Boolean
    $orderBy: [QueryNoticesOrderByOrderByClause!]
    $first: Int!
    $page: Int
  ) {
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

export const NOTICE_SEARCH = gql`
  query noticeSearch(
    $locale: LocaleStatus
    $is_active: Boolean
    $where: QueryNoticeSearchWhereWhereConditions
    $orderBy: [QueryNoticeSearchOrderByOrderByClause!]
    $first: Int!
    $page: Int
  ) {
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

export const USER_WALLET_HISTORY_BY_USER = gql`
  query userWalletHistoryByUser(
    $year: Int
    $month: Int
    $type: UserWalletHistoryType
    $where: QueryUserWalletHistoryByUserWhereWhereConditions
    $orderBy: [QueryUserWalletHistoryByUserOrderByOrderByClause!]
    $first: Int!
    $page: Int
  ) {
    userWalletHistoryByUser(
      year: $year
      month: $month
      type: $type
      where: $where
      orderBy: $orderBy
      first: $first
      page: $page
    ) {
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

export const UPLOAD = gql`
  mutation upload($file: Upload!) {
    upload(file: $file) {
      ...ImageFragment
    }
  }
  ${ImageFragment}
`;

export const UPLOAD_THUMBNAIL = gql`
  mutation uploadThumbnail($file: Upload!) {
    uploadThumbnail(file: $file) {
      ...ThumbnailFragment
    }
  }
  ${ThumbnailFragment}
`;

export const LOGIN = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      ...LoginAuthPayloadFragment
      user {
        ...UserFragment
        botAccounts {
          ...BotAccountFragment
        }
        userTicket {
          ...UserTicketFragment
        }
      }
    }
  }
  ${LoginAuthPayloadFragment}
  ${UserFragment}
  ${BotAccountFragment}
  ${UserTicketFragment}
`;

export const REGISTER = gql`
  mutation register($input: RegisterInput!) {
    register(input: $input) {
      ...MessageResponseFragment
    }
  }
  ${MessageResponseFragment}
`;

export const REFRESH_TOKEN = gql`
  mutation refreshToken($refresh_token: String!) {
    refreshToken(refresh_token: $refresh_token) {
      ...RefreshAuthPayloadFragment
    }
  }
  ${RefreshAuthPayloadFragment}
`;

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser {
      ...LoginAuthPayloadFragment
      user {
        ...UserFragment
        botAccounts {
          ...BotAccountFragment
        }
        userTicket {
          ...UserTicketFragment
        }
      }
    }
  }
  ${LoginAuthPayloadFragment}
  ${UserFragment}
  ${BotAccountFragment}
  ${UserTicketFragment}
`;

export const DELETE_USER = gql`
  mutation deleteUser {
    deleteUser {
      ...UserResponseFragment
      data {
        ...UserFragment
        botAccounts {
          ...BotAccountFragment
        }
        userTicket {
          ...UserTicketFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${BotAccountFragment}
  ${UserTicketFragment}
`;

export const VERIFY_EMAIL = gql`
  mutation verifyEmail($input: VerifyEmailInput!) {
    verifyEmail(input: $input) {
      ...MessageResponseFragment
    }
  }
  ${MessageResponseFragment}
`;

export const CHECK_EMAIL_FOR_CREATE_USER = gql`
  mutation checkEmailForCreateUser($email: String!, $locale: LocaleStatus!) {
    checkEmailForCreateUser(email: $email, locale: $locale) {
      ...MessageResponseFragment
    }
  }
  ${MessageResponseFragment}
`;

export const RESEND_VERIFY_EMAIL = gql`
  mutation resendVerifyEmail($input: ForgotPasswordInput!) {
    resendVerifyEmail(input: $input) {
      ...MessageResponseFragment
    }
  }
  ${MessageResponseFragment}
`;

export const CHANGE_PASSWORD = gql`
  mutation changePassword($input: ChangePasswordInput) {
    changePassword(input: $input) {
      ...UserResponseFragment
      data {
        ...UserFragment
        botAccounts {
          ...BotAccountFragment
        }
        userTicket {
          ...UserTicketFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${BotAccountFragment}
  ${UserTicketFragment}
`;

export const REQUEST_PASSWORD_RESET = gql`
  mutation requestPasswordReset($email: String!) {
    requestPasswordReset(email: $email) {
      ...MessageResponseFragment
    }
  }
  ${MessageResponseFragment}
`;

export const RESET_PASSWORD = gql`
  mutation resetPassword($input: ResetPasswordInput) {
    resetPassword(input: $input) {
      ...UserResponseFragment
      data {
        ...UserFragment
        botAccounts {
          ...BotAccountFragment
        }
        userTicket {
          ...UserTicketFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${BotAccountFragment}
  ${UserTicketFragment}
`;

export const CHANGE_LOCALE = gql`
  mutation changeLocale($input: UpdateLocaleInput!) {
    changeLocale(input: $input) {
      ...UserResponseFragment
      data {
        ...UserFragment
        botAccounts {
          ...BotAccountFragment
        }
        userTicket {
          ...UserTicketFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${BotAccountFragment}
  ${UserTicketFragment}
`;

export const SET_LOCALE = gql`
  mutation setLocale($input: UpdateLocaleInput!) {
    setLocale(input: $input) {
      ...MessageResponseFragment
    }
  }
  ${MessageResponseFragment}
`;

export const SEND_SMS_CODE = gql`
  mutation sendSmsCode($input: SendSmsCodeInput!) {
    sendSmsCode(input: $input) {
      ...MessageResponseFragment
    }
  }
  ${MessageResponseFragment}
`;

export const CHECK_SMS_CODE = gql`
  mutation checkSmsCode($input: CheckSmsCodeInput!) {
    checkSmsCode(input: $input) {
      ...UserResponseFragment
      data {
        ...UserFragment
        botAccounts {
          ...BotAccountFragment
        }
        userTicket {
          ...UserTicketFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${BotAccountFragment}
  ${UserTicketFragment}
`;

export const CHANGE_NAME = gql`
  mutation changeName($input: ChangeNameInput!) {
    changeName(input: $input) {
      ...UserResponseFragment
      data {
        ...UserFragment
        botAccounts {
          ...BotAccountFragment
        }
        userTicket {
          ...UserTicketFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${BotAccountFragment}
  ${UserTicketFragment}
`;

export const UPDATE_AUTH_STEP = gql`
  mutation updateAuthStep($input: UpdateAuthStepInput!) {
    updateAuthStep(input: $input) {
      ...UserResponseFragment
      data {
        ...UserFragment
        botAccounts {
          ...BotAccountFragment
        }
        userTicket {
          ...UserTicketFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${BotAccountFragment}
  ${UserTicketFragment}
`;

export const UPDATE_USER_MEMO = gql`
  mutation updateUserMemo($input: UpdateUserMemoInput!) {
    updateUserMemo(input: $input) {
      ...UserResponseFragment
      data {
        ...UserFragment
        botAccounts {
          ...BotAccountFragment
        }
        userTicket {
          ...UserTicketFragment
        }
      }
    }
  }
  ${UserResponseFragment}
  ${UserFragment}
  ${BotAccountFragment}
  ${UserTicketFragment}
`;

export const CREATE_FAQ = gql`
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

export const UPDATE_FAQ = gql`
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

export const DELETE_FAQ = gql`
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

export const CREATE_NOTICE = gql`
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

export const UPDATE_NOTICE = gql`
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

export const DELETE_NOTICE = gql`
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

export const CREATE_USER_INTERNAL_WALLET = gql`
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

export const CREATE_BOT_ACCOUNT = gql`
  mutation createBotAccount($input: CreateBotAccountInput!) {
    createBotAccount(input: $input) {
      ...BotResponseFragment
      data {
        ...BotAccountFragment
      }
    }
  }
  ${BotResponseFragment}
  ${BotAccountFragment}
`;

export const TOGGLE_BOT = gql`
  mutation toggleBot($input: ToggleBotInput!) {
    toggleBot(input: $input) {
      ...BotResponseFragment
      data {
        ...BotAccountFragment
      }
    }
  }
  ${BotResponseFragment}
  ${BotAccountFragment}
`;

export const VERIFY_EXCHANGE_KEYS = gql`
  mutation verifyExchangeKeys($input: VerifyInput!) {
    verifyExchangeKeys(input: $input) {
      ...VerifyResponseFragment
    }
  }
  ${VerifyResponseFragment}
`;

export const RECEIVE_COIN = gql`
  mutation receiveCoin($input: ReceiveCoinInput!) {
    receiveCoin(input: $input) {
      ...CountResponseFragment
    }
  }
  ${CountResponseFragment}
`;

export const CREATE_TICKET = gql`
  mutation createTicket($input: CreateTicketInput!) {
    createTicket(input: $input) {
      ...TicketFragment
    }
  }
  ${TicketFragment}
`;

export const UPDATE_TICKET = gql`
  mutation updateTicket($input: UpdateTicketInput!) {
    updateTicket(input: $input) {
      ...TicketFragment
    }
  }
  ${TicketFragment}
`;

export const DELETE_TICKET = gql`
  mutation deleteTicket($id: ID!) {
    deleteTicket(id: $id) {
      ...TicketFragment
    }
  }
  ${TicketFragment}
`;

export const BUY_TICKET = gql`
  mutation buyTicket($id: ID!) {
    buyTicket(id: $id) {
      ...MessageResponseFragment
    }
  }
  ${MessageResponseFragment}
`;
