// Auto-generated. Do not edit.
// Depth: 4
import { gql } from "@apollo/client";

export const ME = gql`
  query me {
    me {
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
      botAccounts {
        # BotAccount
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
      userTicket {
        # UserTicket
        id
        user_id
        is_free_ticket
        is_ticket
        start_date
        end_date
      }
      role
    }
  }
`;

export const CURRENT_USER = gql`
  query currentUser {
    currentUser {
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
      botAccounts {
        # BotAccount
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
      userTicket {
        # UserTicket
        id
        user_id
        is_free_ticket
        is_ticket
        start_date
        end_date
      }
      role
    }
  }
`;

export const USER = gql`
  query user($id: ID!) {
    user(id: $id) {
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
      botAccounts {
        # BotAccount
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
      userTicket {
        # UserTicket
        id
        user_id
        is_free_ticket
        is_ticket
        start_date
        end_date
      }
      role
    }
  }
`;

export const USER_AMOUNT = gql`
  query UserAmount {
    UserAmount {
      completed_count
      pending_count
      reject_count
      user_count
    }
  }
`;

export const USER_WALLET_HISTORY_AMOUNT = gql`
  query UserWalletHistoryAmount($year: Int, $month: Int, $type: UserWalletHistoryType) {
    UserWalletHistoryAmount(year: $year, month: $month, type: $type)
  }
`;

export const FAQ = gql`
  query faq($id: ID!) {
    faq(id: $id) {
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
      images {
        # Image
        id
        url
        thumb_small_url
        thumb_medium_url
        thumb_large_url
      }
      thumbnail {
        # Thumbnail
        id
        url
      }
      author {
        # Admin
        id
        name
        role
      }
      previous {
        # PreviousFaq
        id
        title
      }
      next {
        # NextFaq
        id
        title
      }
    }
  }
`;

export const NOTICE = gql`
  query notice($id: ID!) {
    notice(id: $id) {
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
      images {
        # Image
        id
        url
        thumb_small_url
        thumb_medium_url
        thumb_large_url
      }
      thumbnail {
        # Thumbnail
        id
        url
      }
      author {
        # Admin
        id
        name
        role
      }
      previous {
        # PreviousNotice
        id
        title
      }
      next {
        # NextNotice
        id
        title
      }
    }
  }
`;

export const USER_POINT = gql`
  query userPoint {
    userPoint {
      id
      user_id
      point
    }
  }
`;

export const USER_INTERNAL_WALLET = gql`
  query userInternalWallet($id: ID!) {
    userInternalWallet(id: $id) {
      id
      user_id
      coin_id
      wallet_address
      private_key
      last_received_at
      created_at
      updated_at
    }
  }
`;

export const USER_INTERNAL_WALLETS = gql`
  query userInternalWallets {
    userInternalWallets {
      id
      user_id
      coin_id
      wallet_address
      private_key
      last_received_at
      created_at
      updated_at
    }
  }
`;

export const MARKET_PRICES = gql`
  query marketPrices {
    marketPrices {
      id
      name
      endpoint
      symbol
      price
      created_at
      updated_at
    }
  }
`;

export const TICKETS = gql`
  query tickets {
    tickets {
      id
      name
      days
      bonus_days
      price
    }
  }
`;

export const USER_TICKET = gql`
  query userTicket {
    userTicket {
      id
      user_id
      is_free_ticket
      is_ticket
      start_date
      end_date
    }
  }
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
        # PaginatorInfo
        count
        currentPage
        firstItem
        hasMorePages
        lastItem
        lastPage
        perPage
        total
      }
      data {
        # User
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
        botAccounts {
          # BotAccount
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
        userTicket {
          # UserTicket
          id
          user_id
          is_free_ticket
          is_ticket
          start_date
          end_date
        }
        role
      }
    }
  }
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
        # PaginatorInfo
        count
        currentPage
        firstItem
        hasMorePages
        lastItem
        lastPage
        perPage
        total
      }
      data {
        # Faq
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
        images {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        thumbnail {
          # Thumbnail
          id
          url
        }
        author {
          # Admin
          id
          name
          role
        }
        previous {
          # PreviousFaq
          id
          title
        }
        next {
          # NextFaq
          id
          title
        }
      }
    }
  }
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
        # PaginatorInfo
        count
        currentPage
        firstItem
        hasMorePages
        lastItem
        lastPage
        perPage
        total
      }
      data {
        # Faq
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
        images {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        thumbnail {
          # Thumbnail
          id
          url
        }
        author {
          # Admin
          id
          name
          role
        }
        previous {
          # PreviousFaq
          id
          title
        }
        next {
          # NextFaq
          id
          title
        }
      }
    }
  }
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
        # PaginatorInfo
        count
        currentPage
        firstItem
        hasMorePages
        lastItem
        lastPage
        perPage
        total
      }
      data {
        # Notice
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
        images {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        thumbnail {
          # Thumbnail
          id
          url
        }
        author {
          # Admin
          id
          name
          role
        }
        previous {
          # PreviousNotice
          id
          title
        }
        next {
          # NextNotice
          id
          title
        }
      }
    }
  }
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
        # PaginatorInfo
        count
        currentPage
        firstItem
        hasMorePages
        lastItem
        lastPage
        perPage
        total
      }
      data {
        # Notice
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
        images {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        thumbnail {
          # Thumbnail
          id
          url
        }
        author {
          # Admin
          id
          name
          role
        }
        previous {
          # PreviousNotice
          id
          title
        }
        next {
          # NextNotice
          id
          title
        }
      }
    }
  }
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
        # PaginatorInfo
        count
        currentPage
        firstItem
        hasMorePages
        lastItem
        lastPage
        perPage
        total
      }
      data {
        # UserWalletHistory
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
    }
  }
`;

export const UPLOAD = gql`
  mutation upload($file: Upload!) {
    upload(file: $file) {
      id
      url
      thumb_small_url
      thumb_medium_url
      thumb_large_url
    }
  }
`;

export const UPLOAD_THUMBNAIL = gql`
  mutation uploadThumbnail($file: Upload!) {
    uploadThumbnail(file: $file) {
      id
      url
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
      user {
        # User
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
        botAccounts {
          # BotAccount
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
        userTicket {
          # UserTicket
          id
          user_id
          is_free_ticket
          is_ticket
          start_date
          end_date
        }
        role
      }
    }
  }
`;

export const REGISTER = gql`
  mutation register($input: RegisterInput!) {
    register(input: $input) {
      status
      message
    }
  }
`;

export const REFRESH_TOKEN = gql`
  mutation refreshToken($refresh_token: String!) {
    refreshToken(refresh_token: $refresh_token) {
      status
      message
      access_token
      expires_in
      token_type
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser {
      status
      message
      access_token
      refresh_token
      expires_in
      token_type
      user {
        # User
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
        botAccounts {
          # BotAccount
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
        userTicket {
          # UserTicket
          id
          user_id
          is_free_ticket
          is_ticket
          start_date
          end_date
        }
        role
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser {
    deleteUser {
      status
      message
      data {
        # User
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
        botAccounts {
          # BotAccount
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
        userTicket {
          # UserTicket
          id
          user_id
          is_free_ticket
          is_ticket
          start_date
          end_date
        }
        role
      }
    }
  }
`;

export const VERIFY_EMAIL = gql`
  mutation verifyEmail($input: VerifyEmailInput!) {
    verifyEmail(input: $input) {
      status
      message
    }
  }
`;

export const CHECK_EMAIL_FOR_CREATE_USER = gql`
  mutation checkEmailForCreateUser($email: String!, $locale: LocaleStatus!) {
    checkEmailForCreateUser(email: $email, locale: $locale) {
      status
      message
    }
  }
`;

export const RESEND_VERIFY_EMAIL = gql`
  mutation resendVerifyEmail($input: ForgotPasswordInput!) {
    resendVerifyEmail(input: $input) {
      status
      message
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation changePassword($input: ChangePasswordInput) {
    changePassword(input: $input) {
      status
      message
      data {
        # User
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
        botAccounts {
          # BotAccount
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
        userTicket {
          # UserTicket
          id
          user_id
          is_free_ticket
          is_ticket
          start_date
          end_date
        }
        role
      }
    }
  }
`;

export const REQUEST_PASSWORD_RESET = gql`
  mutation requestPasswordReset($email: String!) {
    requestPasswordReset(email: $email) {
      status
      message
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation resetPassword($input: ResetPasswordInput) {
    resetPassword(input: $input) {
      status
      message
      data {
        # User
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
        botAccounts {
          # BotAccount
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
        userTicket {
          # UserTicket
          id
          user_id
          is_free_ticket
          is_ticket
          start_date
          end_date
        }
        role
      }
    }
  }
`;

export const CHANGE_LOCALE = gql`
  mutation changeLocale($input: UpdateLocaleInput!) {
    changeLocale(input: $input) {
      status
      message
      data {
        # User
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
        botAccounts {
          # BotAccount
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
        userTicket {
          # UserTicket
          id
          user_id
          is_free_ticket
          is_ticket
          start_date
          end_date
        }
        role
      }
    }
  }
`;

export const SET_LOCALE = gql`
  mutation setLocale($input: UpdateLocaleInput!) {
    setLocale(input: $input) {
      status
      message
    }
  }
`;

export const SEND_SMS_CODE = gql`
  mutation sendSmsCode($input: SendSmsCodeInput!) {
    sendSmsCode(input: $input) {
      status
      message
    }
  }
`;

export const CHECK_SMS_CODE = gql`
  mutation checkSmsCode($input: CheckSmsCodeInput!) {
    checkSmsCode(input: $input) {
      status
      message
      data {
        # User
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
        botAccounts {
          # BotAccount
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
        userTicket {
          # UserTicket
          id
          user_id
          is_free_ticket
          is_ticket
          start_date
          end_date
        }
        role
      }
    }
  }
`;

export const CHANGE_NAME = gql`
  mutation changeName($input: ChangeNameInput!) {
    changeName(input: $input) {
      status
      message
      data {
        # User
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
        botAccounts {
          # BotAccount
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
        userTicket {
          # UserTicket
          id
          user_id
          is_free_ticket
          is_ticket
          start_date
          end_date
        }
        role
      }
    }
  }
`;

export const UPDATE_AUTH_STEP = gql`
  mutation updateAuthStep($input: UpdateAuthStepInput!) {
    updateAuthStep(input: $input) {
      status
      message
      data {
        # User
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
        botAccounts {
          # BotAccount
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
        userTicket {
          # UserTicket
          id
          user_id
          is_free_ticket
          is_ticket
          start_date
          end_date
        }
        role
      }
    }
  }
`;

export const UPDATE_USER_MEMO = gql`
  mutation updateUserMemo($input: UpdateUserMemoInput!) {
    updateUserMemo(input: $input) {
      status
      message
      data {
        # User
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
        botAccounts {
          # BotAccount
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
        userTicket {
          # UserTicket
          id
          user_id
          is_free_ticket
          is_ticket
          start_date
          end_date
        }
        role
      }
    }
  }
`;

export const CREATE_FAQ = gql`
  mutation createFaq($input: CreateFaqInput!) {
    createFaq(input: $input) {
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
      images {
        # Image
        id
        url
        thumb_small_url
        thumb_medium_url
        thumb_large_url
      }
      thumbnail {
        # Thumbnail
        id
        url
      }
      author {
        # Admin
        id
        name
        role
      }
      previous {
        # PreviousFaq
        id
        title
      }
      next {
        # NextFaq
        id
        title
      }
    }
  }
`;

export const UPDATE_FAQ = gql`
  mutation updateFaq($input: UpdateFaqInput!) {
    updateFaq(input: $input) {
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
      images {
        # Image
        id
        url
        thumb_small_url
        thumb_medium_url
        thumb_large_url
      }
      thumbnail {
        # Thumbnail
        id
        url
      }
      author {
        # Admin
        id
        name
        role
      }
      previous {
        # PreviousFaq
        id
        title
      }
      next {
        # NextFaq
        id
        title
      }
    }
  }
`;

export const DELETE_FAQ = gql`
  mutation deleteFaq($id: ID!) {
    deleteFaq(id: $id) {
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
      images {
        # Image
        id
        url
        thumb_small_url
        thumb_medium_url
        thumb_large_url
      }
      thumbnail {
        # Thumbnail
        id
        url
      }
      author {
        # Admin
        id
        name
        role
      }
      previous {
        # PreviousFaq
        id
        title
      }
      next {
        # NextFaq
        id
        title
      }
    }
  }
`;

export const CREATE_NOTICE = gql`
  mutation createNotice($input: CreateNoticeInput!) {
    createNotice(input: $input) {
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
      images {
        # Image
        id
        url
        thumb_small_url
        thumb_medium_url
        thumb_large_url
      }
      thumbnail {
        # Thumbnail
        id
        url
      }
      author {
        # Admin
        id
        name
        role
      }
      previous {
        # PreviousNotice
        id
        title
      }
      next {
        # NextNotice
        id
        title
      }
    }
  }
`;

export const UPDATE_NOTICE = gql`
  mutation updateNotice($input: UpdateNoticeInput!) {
    updateNotice(input: $input) {
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
      images {
        # Image
        id
        url
        thumb_small_url
        thumb_medium_url
        thumb_large_url
      }
      thumbnail {
        # Thumbnail
        id
        url
      }
      author {
        # Admin
        id
        name
        role
      }
      previous {
        # PreviousNotice
        id
        title
      }
      next {
        # NextNotice
        id
        title
      }
    }
  }
`;

export const DELETE_NOTICE = gql`
  mutation deleteNotice($id: ID!) {
    deleteNotice(id: $id) {
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
      images {
        # Image
        id
        url
        thumb_small_url
        thumb_medium_url
        thumb_large_url
      }
      thumbnail {
        # Thumbnail
        id
        url
      }
      author {
        # Admin
        id
        name
        role
      }
      previous {
        # PreviousNotice
        id
        title
      }
      next {
        # NextNotice
        id
        title
      }
    }
  }
`;

export const CREATE_USER_INTERNAL_WALLET = gql`
  mutation createUserInternalWallet($input: CreateUserInternalWalletInput!) {
    createUserInternalWallet(input: $input) {
      status
      message
      data {
        # UserInternalWallet
        id
        user_id
        coin_id
        wallet_address
        private_key
        last_received_at
        created_at
        updated_at
      }
    }
  }
`;

export const CREATE_BOT_ACCOUNT = gql`
  mutation createBotAccount($input: CreateBotAccountInput!) {
    createBotAccount(input: $input) {
      status
      message
      data {
        # BotAccount
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
    }
  }
`;

export const TOGGLE_BOT = gql`
  mutation toggleBot($input: ToggleBotInput!) {
    toggleBot(input: $input) {
      status
      message
      data {
        # BotAccount
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
    }
  }
`;

export const VERIFY_EXCHANGE_KEYS = gql`
  mutation verifyExchangeKeys($input: VerifyInput!) {
    verifyExchangeKeys(input: $input) {
      ok
      httpStatus
      body
      uid
      balance
    }
  }
`;

export const RECEIVE_COIN = gql`
  mutation receiveCoin($input: ReceiveCoinInput!) {
    receiveCoin(input: $input) {
      status
      message
      count
    }
  }
`;

export const CREATE_TICKET = gql`
  mutation createTicket($input: CreateTicketInput!) {
    createTicket(input: $input) {
      id
      name
      days
      bonus_days
      price
    }
  }
`;

export const UPDATE_TICKET = gql`
  mutation updateTicket($input: UpdateTicketInput!) {
    updateTicket(input: $input) {
      id
      name
      days
      bonus_days
      price
    }
  }
`;

export const DELETE_TICKET = gql`
  mutation deleteTicket($id: ID!) {
    deleteTicket(id: $id) {
      id
      name
      days
      bonus_days
      price
    }
  }
`;

export const BUY_TICKET = gql`
  mutation buyTicket($id: ID!) {
    buyTicket(id: $id) {
      status
      message
    }
  }
`;
