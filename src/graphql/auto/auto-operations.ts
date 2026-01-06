// Auto-generated. Do not edit.
// Depth: 4
import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      # User
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
      userInfo {
        # UserInfo
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
      kycImage {
        # Image
        id
        url
        thumb_small_url
        thumb_medium_url
        thumb_large_url
      }
      storeImage {
        # Image
        id
        url
        thumb_small_url
        thumb_medium_url
        thumb_large_url
      }
    }
  }
`;

export const QUERY_CURRENT_USER = gql`
  query currentUser {
    currentUser {
      # User
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
      userInfo {
        # UserInfo
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
      kycImage {
        # Image
        id
        url
        thumb_small_url
        thumb_medium_url
        thumb_large_url
      }
      storeImage {
        # Image
        id
        url
        thumb_small_url
        thumb_medium_url
        thumb_large_url
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      # User
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
      userInfo {
        # UserInfo
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
      kycImage {
        # Image
        id
        url
        thumb_small_url
        thumb_medium_url
        thumb_large_url
      }
      storeImage {
        # Image
        id
        url
        thumb_small_url
        thumb_medium_url
        thumb_large_url
      }
    }
  }
`;

export const QUERY_TRANSACTION_AMOUNT = gql`
  query transactionAmount($type: TransactionTypeEnum, $invite_code: String, $created_at: DateTimeRange) {
    transactionAmount(type: $type, invite_code: $invite_code, created_at: $created_at) {
      # AmountResponse
      status
      message
      data {
        # Amount
        name
        comment
        amount
      }
    }
  }
`;

export const QUERY_USER_TRANSACTION_AMOUNT = gql`
  query userTransactionAmount(
    $type: TransactionTypeEnum
    $status: UserTransactionStatusEnum
    $invite_code: String
    $tab: UserTransactionTabEnum
    $created_at: DateTimeRange
  ) {
    userTransactionAmount(type: $type, status: $status, invite_code: $invite_code, tab: $tab, created_at: $created_at) {
      # AmountResponse
      status
      message
      data {
        # Amount
        name
        comment
        amount
      }
    }
  }
`;

export const QUERY_USER_TRANSACTION_AGENT_AMOUNT = gql`
  query userTransactionAgentAmount($invite_code: String, $created_at: DateTimeRange) {
    userTransactionAgentAmount(invite_code: $invite_code, created_at: $created_at) {
      # AgentAmountResponse
      status
      message
      data {
        # AgentAmount
        name
        code
        agent_fee
      }
    }
  }
`;

export const QUERY_USER_WALLET_HISTORY_AGENT_AMOUNT = gql`
  query userWalletHistoryAgentAmount($year: Int, $month: Int, $invite_code: String) {
    userWalletHistoryAgentAmount(year: $year, month: $month, invite_code: $invite_code) {
      # AgentAmountResponse
      status
      message
      data {
        # AgentAmount
        name
        code
        agent_fee
      }
    }
  }
`;

export const QUERY_GET_COUNT_NEW_USER_TRANSACTIONS = gql`
  query getCountNewUserTransactions($type: RoleEnum) {
    getCountNewUserTransactions(type: $type)
  }
`;

export const QUERY_SITE = gql`
  query site {
    site {
      # Site
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
  }
`;

export const QUERY_FAQ = gql`
  query faq($id: ID!) {
    faq(id: $id) {
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
`;

export const QUERY_NOTICE = gql`
  query notice($id: ID!) {
    notice(id: $id) {
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
`;

export const QUERY_TRANSACTION = gql`
  query transaction($id: ID!) {
    transaction(id: $id) {
      # Transaction
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
      user {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const QUERY_USER_TRANSACTION = gql`
  query userTransaction($id: ID!) {
    userTransaction(id: $id) {
      # UserTransaction
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
      author {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
      user {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
      transaction {
        # Transaction
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
        user {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
      }
      chatMessage {
        # ChatMessage
        id
        channel_name
        channel_url
        author_id
        user_id
        saved_at
        created_at
        updated_at
        messages {
          # ChatMessageItem
          user_id
          message
          created_at
        }
      }
      images {
        # Image
        id
        url
        thumb_small_url
        thumb_medium_url
        thumb_large_url
      }
    }
  }
`;

export const QUERY_UNREAD_USER_TRANSACTION_COUNT = gql`
  query unreadUserTransactionCount {
    unreadUserTransactionCount {
      # UnreadUserTransactionCountResponse
      total_unread_count
      buy_unread_count
      sell_unread_count
      my_unread_count
    }
  }
`;

export const QUERY_GET_COIN_CURRENCY = gql`
  query getCoinCurrency {
    getCoinCurrency {
      # CoinCurrency
      id
      coin_id
      currency_id
      bid
      ask
      created_at
      updated_at
    }
  }
`;

export const QUERY_GET_MARKET_CURRENCY = gql`
  query getMarketCurrency {
    getMarketCurrency {
      # GetMarketCurrencyResponse
      symbol
      en_name
      ko_name
      bid
      ask
    }
  }
`;

export const QUERY_USER_POINT = gql`
  query userPoint {
    userPoint {
      # UserPoint
      id
      user_id
      point
      lock_point
    }
  }
`;

export const QUERY_USER_ACCOUNT = gql`
  query userAccount($id: ID!) {
    userAccount(id: $id) {
      # UserAccount
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
  }
`;

export const QUERY_USER_ACCOUNTS = gql`
  query userAccounts {
    userAccounts {
      # UserAccount
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
  }
`;

export const QUERY_USER_INTERNAL_WALLET = gql`
  query userInternalWallet($id: ID!) {
    userInternalWallet(id: $id) {
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
`;

export const QUERY_USER_INTERNAL_WALLETS = gql`
  query userInternalWallets {
    userInternalWallets {
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
`;

export const QUERY_USER_EXTERNAL_WALLET = gql`
  query userExternalWallet($id: ID!) {
    userExternalWallet(id: $id) {
      # UserExternalWallet
      id
      user_id
      coin_id
      name
      wallet_address
      created_at
      updated_at
    }
  }
`;

export const QUERY_USER_EXTERNAL_WALLETS = gql`
  query userExternalWallets {
    userExternalWallets {
      # UserExternalWallet
      id
      user_id
      coin_id
      name
      wallet_address
      created_at
      updated_at
    }
  }
`;

export const QUERY_MY_GUILD = gql`
  query myGuild {
    myGuild {
      # MyGuildResponse
      guild_id
      is_guild_waiting
      is_guild_master
    }
  }
`;

export const QUERY_GUILD = gql`
  query guild($id: ID!) {
    guild(id: $id) {
      # Guild
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
  }
`;

export const QUERY_USER_WALLET_HISTORY_AMOUNT_BY_USER = gql`
  query userWalletHistoryAmountByUser(
    $start_date: Date
    $end_date: Date
    $type: UserWalletHistoryType
    $where: QueryUserWalletHistoryAmountByUserWhereWhereConditions
  ) {
    userWalletHistoryAmountByUser(start_date: $start_date, end_date: $end_date, type: $type, where: $where)
  }
`;

export const QUERY_COINS = gql`
  query coins($is_active: Boolean) {
    coins(is_active: $is_active) {
      # Coin
      id
      name
      symbol
      network
      withdraw_fee_weight
      is_active
      created_at
      updated_at
    }
  }
`;

export const QUERY_USERS = gql`
  query users(
    $auth_step: AuthStepEnum
    $email: String
    $invite_code: String
    $depositor: String
    $first: Int!
    $page: Int
  ) {
    users(
      auth_step: $auth_step
      email: $email
      invite_code: $invite_code
      depositor: $depositor
      first: $first
      page: $page
    ) {
      # UserPaginator
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const QUERY_FAQS = gql`
  query faqs(
    $locale: LocaleStatus
    $type: FaqTypeEnum
    $is_active: Boolean
    $orderBy: [QueryFaqsOrderByOrderByClause!]
    $first: Int!
    $page: Int
  ) {
    faqs(locale: $locale, type: $type, is_active: $is_active, orderBy: $orderBy, first: $first, page: $page) {
      # FaqPaginator
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

export const QUERY_FAQ_SEARCH = gql`
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
      # FaqPaginator
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

export const QUERY_NOTICES = gql`
  query notices(
    $locale: LocaleStatus
    $is_active: Boolean
    $orderBy: [QueryNoticesOrderByOrderByClause!]
    $first: Int!
    $page: Int
  ) {
    notices(locale: $locale, is_active: $is_active, orderBy: $orderBy, first: $first, page: $page) {
      # NoticePaginator
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

export const QUERY_NOTICE_SEARCH = gql`
  query noticeSearch(
    $locale: LocaleStatus
    $is_active: Boolean
    $where: QueryNoticeSearchWhereWhereConditions
    $orderBy: [QueryNoticeSearchOrderByOrderByClause!]
    $first: Int!
    $page: Int
  ) {
    noticeSearch(locale: $locale, is_active: $is_active, where: $where, orderBy: $orderBy, first: $first, page: $page) {
      # NoticePaginator
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

export const QUERY_TRANSACTIONS_BY_USER = gql`
  query transactionsByUser(
    $type: TransactionTypeEnum
    $visibility: VisibilityEnum
    $orderBy: [QueryTransactionsByUserOrderByOrderByClause!]
    $first: Int!
    $page: Int
  ) {
    transactionsByUser(type: $type, visibility: $visibility, orderBy: $orderBy, first: $first, page: $page) {
      # TransactionPaginator
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
        # Transaction
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
        user {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
      }
    }
  }
`;

export const QUERY_MY_TRANSACTIONS = gql`
  query myTransactions(
    $type: TransactionTypeEnum
    $orderBy: [QueryMyTransactionsOrderByOrderByClause!]
    $first: Int!
    $page: Int
  ) {
    myTransactions(type: $type, orderBy: $orderBy, first: $first, page: $page) {
      # TransactionPaginator
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
        # Transaction
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
        user {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
      }
    }
  }
`;

export const QUERY_USER_TRANSACTIONS = gql`
  query userTransactions(
    $type: TransactionTypeEnum
    $status: UserTransactionStatusEnum
    $invite_code: String
    $tab: UserTransactionTabEnum
    $created_at: DateTimeRange
    $first: Int!
    $page: Int
  ) {
    userTransactions(
      type: $type
      status: $status
      invite_code: $invite_code
      tab: $tab
      created_at: $created_at
      first: $first
      page: $page
    ) {
      # UserTransactionPaginator
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
        # UserTransaction
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
        author {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
        user {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
        transaction {
          # Transaction
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
          user {
            # User
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
            userInfo {
              # UserInfo
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
            kycImage {
              # Image
              id
              url
              thumb_small_url
              thumb_medium_url
              thumb_large_url
            }
            storeImage {
              # Image
              id
              url
              thumb_small_url
              thumb_medium_url
              thumb_large_url
            }
          }
        }
        chatMessage {
          # ChatMessage
          id
          channel_name
          channel_url
          author_id
          user_id
          saved_at
          created_at
          updated_at
          messages {
            # ChatMessageItem
            user_id
            message
            created_at
          }
        }
        images {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const QUERY_MY_USER_TRANSACTIONS = gql`
  query myUserTransactions(
    $start_date: Date
    $end_date: Date
    $type: TransactionTypeEnum
    $tab: UserTransactionTabEnum
    $first: Int!
    $page: Int
  ) {
    myUserTransactions(
      start_date: $start_date
      end_date: $end_date
      type: $type
      tab: $tab
      first: $first
      page: $page
    ) {
      # UserTransactionPaginator
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
        # UserTransaction
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
        author {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
        user {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
        transaction {
          # Transaction
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
          user {
            # User
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
            userInfo {
              # UserInfo
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
            kycImage {
              # Image
              id
              url
              thumb_small_url
              thumb_medium_url
              thumb_large_url
            }
            storeImage {
              # Image
              id
              url
              thumb_small_url
              thumb_medium_url
              thumb_large_url
            }
          }
        }
        chatMessage {
          # ChatMessage
          id
          channel_name
          channel_url
          author_id
          user_id
          saved_at
          created_at
          updated_at
          messages {
            # ChatMessageItem
            user_id
            message
            created_at
          }
        }
        images {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const QUERY_USER_TRANSACTIONS_BY_MY_TRANSACTIONS = gql`
  query userTransactionsByMyTransactions(
    $start_date: Date
    $end_date: Date
    $tab: UserTransactionTabEnum
    $first: Int!
    $page: Int
  ) {
    userTransactionsByMyTransactions(
      start_date: $start_date
      end_date: $end_date
      tab: $tab
      first: $first
      page: $page
    ) {
      # UserTransactionPaginator
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
        # UserTransaction
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
        author {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
        user {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
        transaction {
          # Transaction
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
          user {
            # User
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
            userInfo {
              # UserInfo
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
            kycImage {
              # Image
              id
              url
              thumb_small_url
              thumb_medium_url
              thumb_large_url
            }
            storeImage {
              # Image
              id
              url
              thumb_small_url
              thumb_medium_url
              thumb_large_url
            }
          }
        }
        chatMessage {
          # ChatMessage
          id
          channel_name
          channel_url
          author_id
          user_id
          saved_at
          created_at
          updated_at
          messages {
            # ChatMessageItem
            user_id
            message
            created_at
          }
        }
        images {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const QUERY_GUILDS = gql`
  query guilds($name: String, $orderBy: [QueryGuildsOrderByOrderByClause!], $first: Int!, $page: Int) {
    guilds(name: $name, orderBy: $orderBy, first: $first, page: $page) {
      # GuildPaginator
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
        # Guild
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
    }
  }
`;

export const QUERY_GUILD_RANKING = gql`
  query guildRanking($orderBy: [QueryGuildRankingOrderByOrderByClause!], $first: Int!, $page: Int) {
    guildRanking(orderBy: $orderBy, first: $first, page: $page) {
      # GuildPaginator
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
        # Guild
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
    }
  }
`;

export const QUERY_GUILD_WAITINGS = gql`
  query guildWaitings($email: String, $first: Int!, $page: Int) {
    guildWaitings(email: $email, first: $first, page: $page) {
      # GuildWaitingPaginator
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
        # GuildWaiting
        id
        guild_id
        user_id
        status
        message
        created_at
        updated_at
        user {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
      }
    }
  }
`;

export const QUERY_GUILD_USERS = gql`
  query guildUsers($email: String, $first: Int!, $page: Int) {
    guildUsers(email: $email, first: $first, page: $page) {
      # UserPaginator
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const QUERY_USER_WALLET_HISTORY_BY_USER = gql`
  query userWalletHistoryByUser(
    $start_date: Date
    $end_date: Date
    $type: UserWalletHistoryType
    $where: QueryUserWalletHistoryByUserWhereWhereConditions
    $orderBy: [QueryUserWalletHistoryByUserOrderByOrderByClause!]
    $first: Int!
    $page: Int
  ) {
    userWalletHistoryByUser(
      start_date: $start_date
      end_date: $end_date
      type: $type
      where: $where
      orderBy: $orderBy
      first: $first
      page: $page
    ) {
      # UserWalletHistoryPaginator
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
    }
  }
`;

export const MUTATION_UPLOAD = gql`
  mutation upload($file: Upload!) {
    upload(file: $file) {
      # Image
      id
      url
      thumb_small_url
      thumb_medium_url
      thumb_large_url
    }
  }
`;

export const MUTATION_UPLOAD_THUMBNAIL = gql`
  mutation uploadThumbnail($file: Upload!) {
    uploadThumbnail(file: $file) {
      # Thumbnail
      id
      url
    }
  }
`;

export const MUTATION_LOGIN = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      # LoginAuthPayload
      status
      message
      access_token
      refresh_token
      expires_in
      token_type
      user {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_REGISTER = gql`
  mutation register($input: RegisterInput!) {
    register(input: $input) {
      # LoginAuthPayload
      status
      message
      access_token
      refresh_token
      expires_in
      token_type
      user {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_REFRESH_TOKEN = gql`
  mutation refreshToken($refresh_token: String!) {
    refreshToken(refresh_token: $refresh_token) {
      # RefreshAuthPayload
      status
      message
      access_token
      expires_in
      token_type
    }
  }
`;

export const MUTATION_LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser {
      # UserResponse
      status
      message
      data {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_DELETE_USER = gql`
  mutation deleteUser {
    deleteUser {
      # UserResponse
      status
      message
      data {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_VERIFY_EMAIL = gql`
  mutation verifyEmail($input: VerifyEmailInput!) {
    verifyEmail(input: $input) {
      # MessageResponse
      status
      message
    }
  }
`;

export const MUTATION_CHECK_EMAIL_FOR_CREATE_USER = gql`
  mutation checkEmailForCreateUser($email: String!, $locale: LocaleStatus!) {
    checkEmailForCreateUser(email: $email, locale: $locale) {
      # MessageResponse
      status
      message
    }
  }
`;

export const MUTATION_RESEND_VERIFY_EMAIL = gql`
  mutation resendVerifyEmail($input: ForgotPasswordInput!) {
    resendVerifyEmail(input: $input) {
      # MessageResponse
      status
      message
    }
  }
`;

export const MUTATION_CHANGE_PASSWORD = gql`
  mutation changePassword($input: ChangePasswordInput) {
    changePassword(input: $input) {
      # UserResponse
      status
      message
      data {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_RESET_PASSWORD = gql`
  mutation resetPassword($input: ResetPasswordInput) {
    resetPassword(input: $input) {
      # UserResponse
      status
      message
      data {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_UPDATE_NAME = gql`
  mutation updateName($name: String!) {
    updateName(name: $name) {
      # UserResponse
      status
      message
      data {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_CREATE_PROFILE = gql`
  mutation createProfile($input: CreateProfileInput!) {
    createProfile(input: $input) {
      # UserResponse
      status
      message
      data {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_SEND_SMS_CODE = gql`
  mutation sendSmsCode($input: SendSmsCodeInput!) {
    sendSmsCode(input: $input) {
      # UserResponse
      status
      message
      data {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_CHECK_SMS_CODE = gql`
  mutation checkSmsCode($sms_code: String!) {
    checkSmsCode(sms_code: $sms_code) {
      # UserResponse
      status
      message
      data {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_CREATE_KYC = gql`
  mutation createKYC($input: CreateImageInput!) {
    createKYC(input: $input) {
      # UserResponse
      status
      message
      data {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_UPDATE_KYC = gql`
  mutation updateKYC($input: UpdateImageInput!) {
    updateKYC(input: $input) {
      # UserResponse
      status
      message
      data {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_CREATE_STORE = gql`
  mutation createStore($input: CreateImageInput!) {
    createStore(input: $input) {
      # UserResponse
      status
      message
      data {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_UPDATE_STORE = gql`
  mutation updateStore($input: UpdateImageInput!) {
    updateStore(input: $input) {
      # UserResponse
      status
      message
      data {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_CHANGE_LOCALE = gql`
  mutation changeLocale($input: UpdateLocaleInput!) {
    changeLocale(input: $input) {
      # UserResponse
      status
      message
      data {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_SET_LOCALE = gql`
  mutation setLocale($input: UpdateLocaleInput!) {
    setLocale(input: $input) {
      # MessageResponse
      status
      message
    }
  }
`;

export const MUTATION_UPDATE_MY_CURRENCY = gql`
  mutation updateMyCurrency($currency_id: CurrencyEnum!) {
    updateMyCurrency(currency_id: $currency_id) {
      # UserResponse
      status
      message
      data {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_SEND_SMS_CODE_BY_GUEST = gql`
  mutation sendSmsCodeByGuest($input: SendSmsCodeByGuestInput!) {
    sendSmsCodeByGuest(input: $input) {
      # CacheResponse
      status
      message
      data
    }
  }
`;

export const MUTATION_CHECK_SMS_CODE_BY_GUEST = gql`
  mutation checkSmsCodeByGuest($input: CheckSmsCodeByGuestInput!) {
    checkSmsCodeByGuest(input: $input) {
      # UserResponse
      status
      message
      data {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_RETURN_KYC = gql`
  mutation returnKYC($id: ID!) {
    returnKYC(id: $id) {
      # UserResponse
      status
      message
      data {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_RETURN_STORE = gql`
  mutation returnStore($id: ID!) {
    returnStore(id: $id) {
      # UserResponse
      status
      message
      data {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_UPDATE_AUTH_STEP = gql`
  mutation updateAuthStep($input: UpdateAuthStepInput) {
    updateAuthStep(input: $input) {
      # UserResponse
      status
      message
      data {
        # User
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
        userInfo {
          # UserInfo
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
        kycImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
        storeImage {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_UPDATE_SITE = gql`
  mutation updateSite($input: UpdateSiteInput!) {
    updateSite(input: $input) {
      # SiteResponse
      status
      message
      data {
        # Site
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
    }
  }
`;

export const MUTATION_CREATE_FAQ = gql`
  mutation createFaq($input: CreateFaqInput!) {
    createFaq(input: $input) {
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
`;

export const MUTATION_UPDATE_FAQ = gql`
  mutation updateFaq($input: UpdateFaqInput!) {
    updateFaq(input: $input) {
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
`;

export const MUTATION_DELETE_FAQ = gql`
  mutation deleteFaq($id: ID!) {
    deleteFaq(id: $id) {
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
`;

export const MUTATION_CREATE_NOTICE = gql`
  mutation createNotice($input: CreateNoticeInput!) {
    createNotice(input: $input) {
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
`;

export const MUTATION_UPDATE_NOTICE = gql`
  mutation updateNotice($input: UpdateNoticeInput!) {
    updateNotice(input: $input) {
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
`;

export const MUTATION_DELETE_NOTICE = gql`
  mutation deleteNotice($id: ID!) {
    deleteNotice(id: $id) {
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
`;

export const MUTATION_CREATE_TRANSACTION = gql`
  mutation createTransaction($input: CreateTransactionInput!) {
    createTransaction(input: $input) {
      # TransactionResponse
      status
      message
      data {
        # Transaction
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
        user {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
      }
    }
  }
`;

export const MUTATION_UPDATE_TRANSACTION = gql`
  mutation updateTransaction($input: UpdateTransactionInput!) {
    updateTransaction(input: $input) {
      # TransactionResponse
      status
      message
      data {
        # Transaction
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
        user {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
      }
    }
  }
`;

export const MUTATION_DELETE_TRANSACTION = gql`
  mutation deleteTransaction($id: ID!) {
    deleteTransaction(id: $id) {
      # TransactionResponse
      status
      message
      data {
        # Transaction
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
        user {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
      }
    }
  }
`;

export const MUTATION_CREATE_USER_TRANSACTION = gql`
  mutation createUserTransaction($input: CreateUserTransactionInput!) {
    createUserTransaction(input: $input) {
      # UserTransactionResponse
      status
      message
      data {
        # UserTransaction
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
        author {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
        user {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
        transaction {
          # Transaction
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
          user {
            # User
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
            userInfo {
              # UserInfo
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
            kycImage {
              # Image
              id
              url
              thumb_small_url
              thumb_medium_url
              thumb_large_url
            }
            storeImage {
              # Image
              id
              url
              thumb_small_url
              thumb_medium_url
              thumb_large_url
            }
          }
        }
        chatMessage {
          # ChatMessage
          id
          channel_name
          channel_url
          author_id
          user_id
          saved_at
          created_at
          updated_at
          messages {
            # ChatMessageItem
            user_id
            message
            created_at
          }
        }
        images {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_UPDATE_USER_TRANSACTION = gql`
  mutation updateUserTransaction($input: UpdateUserTransactionInput!) {
    updateUserTransaction(input: $input) {
      # UserTransactionResponse
      status
      message
      data {
        # UserTransaction
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
        author {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
        user {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
        transaction {
          # Transaction
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
          user {
            # User
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
            userInfo {
              # UserInfo
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
            kycImage {
              # Image
              id
              url
              thumb_small_url
              thumb_medium_url
              thumb_large_url
            }
            storeImage {
              # Image
              id
              url
              thumb_small_url
              thumb_medium_url
              thumb_large_url
            }
          }
        }
        chatMessage {
          # ChatMessage
          id
          channel_name
          channel_url
          author_id
          user_id
          saved_at
          created_at
          updated_at
          messages {
            # ChatMessageItem
            user_id
            message
            created_at
          }
        }
        images {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_UPDATE_USER_TRANSACTION_STATUS = gql`
  mutation updateUserTransactionStatus($input: UpdateUserTransactionStatusInput!) {
    updateUserTransactionStatus(input: $input) {
      # UserTransactionResponse
      status
      message
      data {
        # UserTransaction
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
        author {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
        user {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
        transaction {
          # Transaction
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
          user {
            # User
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
            userInfo {
              # UserInfo
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
            kycImage {
              # Image
              id
              url
              thumb_small_url
              thumb_medium_url
              thumb_large_url
            }
            storeImage {
              # Image
              id
              url
              thumb_small_url
              thumb_medium_url
              thumb_large_url
            }
          }
        }
        chatMessage {
          # ChatMessage
          id
          channel_name
          channel_url
          author_id
          user_id
          saved_at
          created_at
          updated_at
          messages {
            # ChatMessageItem
            user_id
            message
            created_at
          }
        }
        images {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_DELETE_USER_TRANSACTION = gql`
  mutation deleteUserTransaction($id: ID!) {
    deleteUserTransaction(id: $id) {
      # UserTransactionResponse
      status
      message
      data {
        # UserTransaction
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
        author {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
        user {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
        transaction {
          # Transaction
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
          user {
            # User
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
            userInfo {
              # UserInfo
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
            kycImage {
              # Image
              id
              url
              thumb_small_url
              thumb_medium_url
              thumb_large_url
            }
            storeImage {
              # Image
              id
              url
              thumb_small_url
              thumb_medium_url
              thumb_large_url
            }
          }
        }
        chatMessage {
          # ChatMessage
          id
          channel_name
          channel_url
          author_id
          user_id
          saved_at
          created_at
          updated_at
          messages {
            # ChatMessageItem
            user_id
            message
            created_at
          }
        }
        images {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_CREATE_STOPPED = gql`
  mutation createStopped($input: CreateStoppedInput!) {
    createStopped(input: $input) {
      # UserTransactionResponse
      status
      message
      data {
        # UserTransaction
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
        author {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
        user {
          # User
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
          userInfo {
            # UserInfo
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
          kycImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
          storeImage {
            # Image
            id
            url
            thumb_small_url
            thumb_medium_url
            thumb_large_url
          }
        }
        transaction {
          # Transaction
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
          user {
            # User
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
            userInfo {
              # UserInfo
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
            kycImage {
              # Image
              id
              url
              thumb_small_url
              thumb_medium_url
              thumb_large_url
            }
            storeImage {
              # Image
              id
              url
              thumb_small_url
              thumb_medium_url
              thumb_large_url
            }
          }
        }
        chatMessage {
          # ChatMessage
          id
          channel_name
          channel_url
          author_id
          user_id
          saved_at
          created_at
          updated_at
          messages {
            # ChatMessageItem
            user_id
            message
            created_at
          }
        }
        images {
          # Image
          id
          url
          thumb_small_url
          thumb_medium_url
          thumb_large_url
        }
      }
    }
  }
`;

export const MUTATION_CALCULATE_USDT = gql`
  mutation calculateUSDT($input: CreateUserTransactionInput!) {
    calculateUSDT(input: $input) {
      # CalculateUSDTResponse
      total_fee
      platform_fee
      author_fee
      agent_fee
      request_price
      request_amount
      payment_amount
    }
  }
`;

export const MUTATION_CREATE_USER_ACCOUNT = gql`
  mutation createUserAccount($input: CreateUserAccountInput!) {
    createUserAccount(input: $input) {
      # AccountResponse
      status
      message
      data {
        # UserAccount
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
    }
  }
`;

export const MUTATION_UPDATE_USER_ACCOUNT = gql`
  mutation updateUserAccount($input: UpdateUserAccountInput!) {
    updateUserAccount(input: $input) {
      # AccountResponse
      status
      message
      data {
        # UserAccount
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
    }
  }
`;

export const MUTATION_DELETE_USER_ACCOUNT = gql`
  mutation deleteUserAccount($id: ID!) {
    deleteUserAccount(id: $id) {
      # AccountResponse
      status
      message
      data {
        # UserAccount
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
    }
  }
`;

export const MUTATION_CREATE_USER_INTERNAL_WALLET = gql`
  mutation createUserInternalWallet($input: CreateUserInternalWalletInput!) {
    createUserInternalWallet(input: $input) {
      # InternalWalletResponse
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

export const MUTATION_CREATE_USER_EXTERNAL_WALLET = gql`
  mutation createUserExternalWallet($input: CreateUserExternalWalletInput!) {
    createUserExternalWallet(input: $input) {
      # ExternalWalletResponse
      status
      message
      data {
        # UserExternalWallet
        id
        user_id
        coin_id
        name
        wallet_address
        created_at
        updated_at
      }
    }
  }
`;

export const MUTATION_UPDATE_USER_EXTERNAL_WALLET = gql`
  mutation updateUserExternalWallet($input: UpdateUserExternalWalletInput!) {
    updateUserExternalWallet(input: $input) {
      # ExternalWalletResponse
      status
      message
      data {
        # UserExternalWallet
        id
        user_id
        coin_id
        name
        wallet_address
        created_at
        updated_at
      }
    }
  }
`;

export const MUTATION_DELETE_USER_EXTERNAL_WALLET = gql`
  mutation deleteUserExternalWallet($id: ID!) {
    deleteUserExternalWallet(id: $id) {
      # ExternalWalletResponse
      status
      message
      data {
        # UserExternalWallet
        id
        user_id
        coin_id
        name
        wallet_address
        created_at
        updated_at
      }
    }
  }
`;

export const MUTATION_CREATE_GUILD = gql`
  mutation createGuild($input: CreateGuildInput!) {
    createGuild(input: $input) {
      # GuildResponse
      status
      message
      data {
        # Guild
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
    }
  }
`;

export const MUTATION_UPDATE_GUILD = gql`
  mutation updateGuild($input: UpdateGuildInput!) {
    updateGuild(input: $input) {
      # GuildResponse
      status
      message
      data {
        # Guild
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
    }
  }
`;

export const MUTATION_DELETE_GUILD = gql`
  mutation deleteGuild {
    deleteGuild {
      # GuildResponse
      status
      message
      data {
        # Guild
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
    }
  }
`;

export const MUTATION_LEAVE_GUILD = gql`
  mutation leaveGuild {
    leaveGuild {
      # GuildResponse
      status
      message
      data {
        # Guild
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
    }
  }
`;

export const MUTATION_EXPEL_GUILD = gql`
  mutation expelGuild($user_id: Int!) {
    expelGuild(user_id: $user_id) {
      # GuildResponse
      status
      message
      data {
        # Guild
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
    }
  }
`;

export const MUTATION_SIGN_UP_GUILD = gql`
  mutation signUpGuild($guild_id: Int!) {
    signUpGuild(guild_id: $guild_id) {
      # GuildResponse
      status
      message
      data {
        # Guild
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
    }
  }
`;

export const MUTATION_CANCEL_GUILD = gql`
  mutation cancelGuild {
    cancelGuild {
      # GuildResponse
      status
      message
      data {
        # Guild
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
    }
  }
`;

export const MUTATION_APPROVE_GUILD = gql`
  mutation approveGuild($input: ApproveGuildInput!) {
    approveGuild(input: $input) {
      # GuildResponse
      status
      message
      data {
        # Guild
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
    }
  }
`;

export const MUTATION_SEND_COIN = gql`
  mutation sendCoin($input: SendCoinInput!) {
    sendCoin(input: $input) {
      # MessageResponse
      status
      message
    }
  }
`;

export const MUTATION_CALCULATE_SEND_COIN = gql`
  mutation calculateSendCoin($input: SendCoinInput!) {
    calculateSendCoin(input: $input) {
      # CalculateSendCoinResponse
      status
      message
      amount
      total_withdraw_fee
      real_amount
    }
  }
`;

export const MUTATION_SEND_COIN_BY_UUID = gql`
  mutation sendCoinByUUID($input: SendCoinBYUUIDInput!) {
    sendCoinByUUID(input: $input) {
      # MessageResponse
      status
      message
    }
  }
`;

export const MUTATION_REVIEW_SEND_COIN = gql`
  mutation reviewSendCoin($input: ReviewSendCoinInput!) {
    reviewSendCoin(input: $input) {
      # MessageResponse
      status
      message
    }
  }
`;

export const MUTATION_RECEIVE_COIN = gql`
  mutation receiveCoin($input: ReceiveCoinInput!) {
    receiveCoin(input: $input) {
      # CountResponse
      status
      message
      count
    }
  }
`;

export const MUTATION_UPDATE_COIN = gql`
  mutation updateCoin($input: UpdateCoinInput!) {
    updateCoin(input: $input) {
      # MessageResponse
      status
      message
    }
  }
`;

export const MUTATION_REGISTER_DEVICE_TOKEN = gql`
  mutation registerDeviceToken($input: RegisterDeviceTokenInput!) {
    registerDeviceToken(input: $input) {
      # DeviceToken
      id
      token
      platform
      last_seen_at
      created_at
      updated_at
    }
  }
`;

export const MUTATION_DELETE_DEVICE_TOKEN = gql`
  mutation deleteDeviceToken($token: String!) {
    deleteDeviceToken(token: $token)
  }
`;

export const MUTATION_SEND_PUSH_TO_USER = gql`
  mutation sendPushToUser($userId: ID!, $input: PushNotificationInput!) {
    sendPushToUser(userId: $userId, input: $input) {
      # PushSendReport
      successCount
      failureCount
      invalidTokens
    }
  }
`;
