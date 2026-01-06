import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client/react';
import * as ApolloReactHooks from '@apollo/client/react';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: { input: string; output: string; }
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: { input: string; output: string; }
  /** A datetime and timezone string in ISO 8601 format `Y-m-dTH:i:sO`, e.g. `2020-04-20T13:53:12+02:00`. */
  DateTimeTz: { input: string; output: string; }
  /**
   * A datetime string in ISO 8601 format in UTC with nanoseconds
   * `YYYY-MM-DDTHH:mm:ss.SSSSSSZ`, e.g. `2020-04-20T16:20:04.000000Z`.
   */
  DateTimeUtc: { input: string; output: string; }
  /** Arbitrary data encoded in JavaScript Object Notation. See https://www.json.org. */
  JSON: { input: any; output: any; }
  /**
   * Loose type that allows any value. Be careful when passing in large `Int` or `Float` literals,
   * as they may not be parsed correctly on the server side. Use `String` literals if you are
   * dealing with really large numbers to be on the safe side.
   */
  Mixed: { input: any; output: any; }
  /** Can be used as an argument to upload files using https://github.com/jaydenseric/graphql-multipart-request-spec */
  Upload: { input: any; output: any; }
};

export type AccountResponse = {
  __typename?: 'AccountResponse';
  /** 데이터 */
  data: Maybe<UserAccount>;
  /** 메시지 */
  message: Maybe<Scalars['String']['output']>;
  /** 상태 값 */
  status: Maybe<Scalars['String']['output']>;
};

/** 어드민 정보 */
export type Admin = {
  __typename?: 'Admin';
  id: Scalars['ID']['output'];
  /** 이름 */
  name: Scalars['String']['output'];
  /** 역할 */
  role: Maybe<Scalars['String']['output']>;
};

/** 어드민 액션 */
export type AdminAction = {
  __typename?: 'AdminAction';
  /** 액션 */
  action: Maybe<Scalars['String']['output']>;
  /** 어드민 아이디 */
  admin_id: Maybe<Scalars['Int']['output']>;
  /** 생성일 */
  created_at: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** ip */
  ip: Maybe<Scalars['String']['output']>;
  /** 수정일 */
  updated_at: Maybe<Scalars['DateTime']['output']>;
};

/** A paginated list of AdminAction items. */
export type AdminActionPaginator = {
  __typename?: 'AdminActionPaginator';
  /** A list of AdminAction items. */
  data: Array<AdminAction>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** 로그인 정보 */
export type AdminAuthPayload = {
  __typename?: 'AdminAuthPayload';
  /** 액세스 토큰 */
  access_token: Maybe<Scalars['String']['output']>;
  /** 유저 정보 */
  admin: Maybe<Admin>;
  /** 액세스 토큰 만료 시간 */
  expires_in: Maybe<Scalars['String']['output']>;
  /** 메시지 */
  message: Scalars['String']['output'];
  /** 리프레쉬 토큰 */
  refresh_token: Maybe<Scalars['String']['output']>;
  /** 상태 값 */
  status: Scalars['String']['output'];
  /** 토큰 타입 */
  token_type: Maybe<Scalars['String']['output']>;
};

/** 어드민 로그인 Input */
export type AdminLoginInput = {
  /** 관리자 아이디 */
  name: Scalars['String']['input'];
  /** 관리자 비밀번호 */
  password: Scalars['String']['input'];
};

/** A paginated list of Admin items. */
export type AdminPaginator = {
  __typename?: 'AdminPaginator';
  /** A list of Admin items. */
  data: Array<Admin>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** 수량 */
export type AgentAmount = {
  __typename?: 'AgentAmount';
  /** 수량 */
  agent_fee: Maybe<Scalars['Float']['output']>;
  /** 코드 */
  code: Maybe<Scalars['String']['output']>;
  /** 이름 */
  name: Maybe<Scalars['String']['output']>;
};

/** 수량 결과 */
export type AgentAmountResponse = {
  __typename?: 'AgentAmountResponse';
  /** 데이터 */
  data: Maybe<Array<Maybe<AgentAmount>>>;
  /** 메시지 */
  message: Scalars['String']['output'];
  /** 상태 값 */
  status: Scalars['String']['output'];
};

/** 수량 */
export type Amount = {
  __typename?: 'Amount';
  /** 수량 */
  amount: Maybe<Scalars['Float']['output']>;
  /** 설명 */
  comment: Maybe<Scalars['String']['output']>;
  /** 이름 */
  name: Maybe<Scalars['String']['output']>;
};

/** 수량 결과 */
export type AmountResponse = {
  __typename?: 'AmountResponse';
  /** 데이터 */
  data: Maybe<Array<Maybe<Amount>>>;
  /** 메시지 */
  message: Scalars['String']['output'];
  /** 상태 값 */
  status: Scalars['String']['output'];
};

/** 길드 승인 Input */
export type ApproveGuildInput = {
  /** 거부 메시지 (3: 거부 상태일 경우만) */
  message: InputMaybe<Scalars['String']['input']>;
  /** 상태 값 (2: 승인, 3: 거부) */
  status: GuildWaitingStatusEnum;
  /** 유저 아이디 */
  user_id: Scalars['Int']['input'];
};

/** 가입 방식 */
export enum ApprovedEnum {
  /** 승인제 */
  Approved = 'APPROVED',
  /** 자동 가입 */
  Auto = 'AUTO'
}

/** 인증 단계 */
export enum AuthStepEnum {
  /** 4단계 */
  Four = 'FOUR',
  /** 1단계 */
  One = 'ONE',
  /** 3단계 */
  Three = 'THREE',
  /** 2단계 */
  Two = 'TWO'
}

export type CacheResponse = {
  __typename?: 'CacheResponse';
  /** 캐시 키 */
  data: Maybe<Scalars['String']['output']>;
  /** 메시지 */
  message: Scalars['String']['output'];
  /** 상태 값 */
  status: Scalars['String']['output'];
};

/** 코인 보내기 계산 */
export type CalculateSendCoinResponse = {
  __typename?: 'CalculateSendCoinResponse';
  /** 보낼 수량 */
  amount: Maybe<Scalars['Float']['output']>;
  /** 메시지 */
  message: Maybe<Scalars['String']['output']>;
  /** 실제 수량(출금 수수료 제외 금액) */
  real_amount: Maybe<Scalars['Float']['output']>;
  /** 상태 값 */
  status: Maybe<Scalars['String']['output']>;
  /** 총 출금 수수료 */
  total_withdraw_fee: Maybe<Scalars['Float']['output']>;
};

export type CalculateUsdtResponse = {
  __typename?: 'CalculateUSDTResponse';
  /** 에이전트 수수료 */
  agent_fee: Maybe<Scalars['Float']['output']>;
  /** 작성자 수수료 */
  author_fee: Maybe<Scalars['Float']['output']>;
  /** 지급 수량 */
  payment_amount: Maybe<Scalars['Float']['output']>;
  /** 플랫폼 수수료 */
  platform_fee: Maybe<Scalars['Float']['output']>;
  /** 요청 수량 */
  request_amount: Maybe<Scalars['Float']['output']>;
  /** 요청 금액 */
  request_price: Maybe<Scalars['Float']['output']>;
  /** 전체 수수료 */
  total_fee: Maybe<Scalars['Float']['output']>;
};

/** 패스워드 수정 input */
export type ChangePasswordInput = {
  /** 기존 비밀번호 */
  old_password: Scalars['String']['input'];
  /** 새 비밀번호 */
  password: Scalars['String']['input'];
  /** 새 비밀번호 확인 */
  password_confirmation: Scalars['String']['input'];
};

/** 채팅 메시지 정보 */
export type ChatMessage = {
  __typename?: 'ChatMessage';
  /** 작성자 아이디 */
  author_id: Maybe<Scalars['String']['output']>;
  /** 채널 이름 */
  channel_name: Maybe<Scalars['String']['output']>;
  /** 채널 URL */
  channel_url: Maybe<Scalars['String']['output']>;
  /** 생성일 */
  created_at: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** 메세지 */
  messages: Maybe<Array<Maybe<ChatMessageItem>>>;
  /** 저장 시간 */
  saved_at: Maybe<Scalars['DateTime']['output']>;
  /** 수정일 */
  updated_at: Maybe<Scalars['DateTime']['output']>;
  /** 신청자 아이디 */
  user_id: Maybe<Scalars['String']['output']>;
};

/** 채팅 메시지 아이템 */
export type ChatMessageItem = {
  __typename?: 'ChatMessageItem';
  /** 생성일 */
  created_at: Maybe<Scalars['DateTime']['output']>;
  /** 메시지 */
  message: Maybe<Scalars['String']['output']>;
  /** 유저 아이디 */
  user_id: Maybe<Scalars['String']['output']>;
};

/** 문자 인증 코드 검증 - 아이디, 비밀번호 찾기 */
export type CheckSmsCodeByGuestInput = {
  /** 캐시 키 */
  cache_key: Scalars['String']['input'];
  /** 인증번호 */
  sms_code: Scalars['String']['input'];
};

/** 코인 */
export type Coin = {
  __typename?: 'Coin';
  /** 생성일 */
  created_at: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** 활성화 여부 */
  is_active: Maybe<Scalars['Boolean']['output']>;
  /** 이름 */
  name: Maybe<Scalars['String']['output']>;
  /** 네트워크 */
  network: Maybe<Scalars['String']['output']>;
  /** 심볼 */
  symbol: Maybe<Scalars['String']['output']>;
  /** 수정일 */
  updated_at: Maybe<Scalars['DateTime']['output']>;
  /** 출금 수수료 가중치 */
  withdraw_fee_weight: Maybe<Scalars['Float']['output']>;
};

/** 코인 통화 시세 */
export type CoinCurrency = {
  __typename?: 'CoinCurrency';
  /** 매도 호가(살 때) */
  ask: Maybe<Scalars['Float']['output']>;
  /** 매수 호가(팔 때) */
  bid: Maybe<Scalars['Float']['output']>;
  /** 코인 아이디 */
  coin_id: Maybe<CoinEnum>;
  /** 생성일 */
  created_at: Maybe<Scalars['DateTime']['output']>;
  /** 통화 아이디 */
  currency_id: Maybe<CurrencyEnum>;
  id: Scalars['ID']['output'];
  /** 수정일 */
  updated_at: Maybe<Scalars['DateTime']['output']>;
};

/** 코인 */
export enum CoinEnum {
  /** 테더 */
  Usdt = 'USDT'
}

/** 코인 타입 */
export enum CoinTypeEnum {
  /** 테더(바이낸스) */
  Bnb = 'BNB',
  /** 테더(이더리움) */
  Eth = 'ETH',
  /** 테더(트론) */
  Trx = 'TRX'
}

export type CountResponse = {
  __typename?: 'CountResponse';
  /** 입금 카운트 */
  count: Maybe<Scalars['Int']['output']>;
  /** 메시지 */
  message: Maybe<Scalars['String']['output']>;
  /** 상태 값 */
  status: Maybe<Scalars['String']['output']>;
};

/** 어드민 권한 부여 Input */
export type CreateAdminInput = {
  /** 관리자 아이디 */
  name: Scalars['String']['input'];
  /** 관리자 비밀번호 */
  password: Scalars['String']['input'];
};

/** Faq 등록 input */
export type CreateFaqInput = {
  /** 내용 */
  content: Scalars['String']['input'];
  /** 노출 종료일 */
  ended_at: InputMaybe<Scalars['DateTime']['input']>;
  /** 업로드된 이미지 아이디 배열 */
  images: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Faq 노출 여부 */
  is_active: InputMaybe<Scalars['Int']['input']>;
  /** 상단 고정 여부 */
  is_fixed: InputMaybe<Scalars['Int']['input']>;
  /** 언어 */
  locale: LocaleStatus;
  /** 노출 시작일 */
  started_at: InputMaybe<Scalars['DateTime']['input']>;
  /** 업로드된 썸네일 아이디 */
  thumbnail: InputMaybe<Scalars['Int']['input']>;
  /** 제목 */
  title: Scalars['String']['input'];
  /** 타입 (1: 지갑 관련, 2: 서비스 관련) */
  type: FaqTypeEnum;
};

/** 길드 생성 Input */
export type CreateGuildInput = {
  /** 설명 */
  description: InputMaybe<Scalars['String']['input']>;
  /** 가입 방식 */
  is_approved: ApprovedEnum;
  /** 이름 */
  name: Scalars['String']['input'];
  /** 공개 여부 */
  visibility: VisibilityEnum;
};

/** 이미지 생성 Input */
export type CreateImageInput = {
  /** 이미지 */
  image: Scalars['Upload']['input'];
};

/** 공지사항 등록 input */
export type CreateNoticeInput = {
  /** 내용 */
  content: Scalars['String']['input'];
  /** 노출 종료일 */
  ended_at: InputMaybe<Scalars['DateTime']['input']>;
  /** 업로드된 이미지 아이디 배열 */
  images: InputMaybe<Array<Scalars['Int']['input']>>;
  /** 공지사항 노출 여부 */
  is_active: InputMaybe<Scalars['Int']['input']>;
  /** 상단 고정 여부 */
  is_fixed: InputMaybe<Scalars['Int']['input']>;
  /** 언어 */
  locale: LocaleStatus;
  /** 노출 시작일 */
  started_at: InputMaybe<Scalars['DateTime']['input']>;
  /** 업로드된 썸네일 아이디 */
  thumbnail: InputMaybe<Scalars['Int']['input']>;
  /** 제목 */
  title: Scalars['String']['input'];
};

export type CreatePartnerInput = {
  /** 에이전트 수수료 */
  agent_fee: Scalars['Float']['input'];
  /** 이름 */
  name: Scalars['String']['input'];
  /** 비밀번호 */
  password: Scalars['String']['input'];
  /** 출금 수수료 */
  withdraw_fee: Scalars['Float']['input'];
};

export type CreateProfileInput = {
  /** 추천인 코드 */
  u_code: InputMaybe<Scalars['String']['input']>;
};

export type CreateStoppedInput = {
  id: Scalars['ID']['input'];
  /** 이미지 */
  images: Array<Scalars['Upload']['input']>;
};

export type CreateSuperPartnerInput = {
  /** 에이전트 수수료 */
  agent_fee: Scalars['Float']['input'];
  /** 이름 */
  name: Scalars['String']['input'];
  /** 비밀번호 */
  password: Scalars['String']['input'];
  /** 출금 수수료 */
  withdraw_fee: Scalars['Float']['input'];
};

export type CreateTransactionInput = {
  /** 계좌번호 */
  account_number: InputMaybe<Scalars['String']['input']>;
  /** 계좌 타입 */
  account_type: UserAccountType;
  /** 은행 */
  bank: InputMaybe<Scalars['String']['input']>;
  /** 예금주 */
  depositor: InputMaybe<Scalars['String']['input']>;
  /** 링크 */
  link: InputMaybe<Scalars['String']['input']>;
  /** 총 수량 */
  total_amount: Scalars['Float']['input'];
  /** 타입 */
  type: TransactionTypeEnum;
  /** 단가 */
  unit_price: Scalars['Float']['input'];
  /** 공개 여부 */
  visibility: VisibilityEnum;
};

export type CreateUserAccountInput = {
  /** 계좌번호 (1:은행) */
  account_number: InputMaybe<Scalars['String']['input']>;
  /** 은행명 */
  bank: InputMaybe<Scalars['String']['input']>;
  /** 예금주 */
  depositor: InputMaybe<Scalars['String']['input']>;
  /** 대표 여부 */
  is_default: InputMaybe<Scalars['Boolean']['input']>;
  /** 링크 (2:페이) */
  link: InputMaybe<Scalars['String']['input']>;
  /** 별칭 */
  name: InputMaybe<Scalars['String']['input']>;
  /** 타입 (1:은행 2:페이 3:상품권) */
  type: InputMaybe<UserAccountType>;
};

export type CreateUserExternalWalletInput = {
  /** 코인 아이디 */
  coin_id: CoinTypeEnum;
  /** 별칭 */
  name: InputMaybe<Scalars['String']['input']>;
  /** 지갑 주소 */
  wallet_address: Scalars['String']['input'];
};

export type CreateUserInternalWalletInput = {
  /** 코인 아이디 */
  coin_id: CoinTypeEnum;
};

export type CreateUserTransactionInput = {
  /** 계좌번호 */
  account_number: InputMaybe<Scalars['String']['input']>;
  /** 계좌 타입 */
  account_type: UserAccountType;
  /** 은행 */
  bank: InputMaybe<Scalars['String']['input']>;
  /** 예금주 */
  depositor: InputMaybe<Scalars['String']['input']>;
  /** 링크 */
  link: InputMaybe<Scalars['String']['input']>;
  /** 요청 수량 */
  request_amount: Scalars['Float']['input'];
  /** 요청 금액 */
  request_price: Scalars['Float']['input'];
  /** 거래 아이디 */
  transaction_id: Scalars['Int']['input'];
};

/** 통화 */
export type Currency = {
  __typename?: 'Currency';
  /** 생성일 */
  created_at: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** 이름 */
  name: Maybe<Scalars['String']['output']>;
  /** 심볼 */
  symbol: Maybe<Scalars['String']['output']>;
  /** 수정일 */
  updated_at: Maybe<Scalars['DateTime']['output']>;
};

/** 통화 */
export enum CurrencyEnum {
  /** 원화 */
  Krw = 'KRW',
  /** 달러 */
  Usd = 'USD'
}

export type DateRange = {
  /** 시작일 */
  from: Scalars['Date']['input'];
  /** 종료일 */
  to: Scalars['Date']['input'];
};

export type DateTimeRange = {
  /** 시작시간 */
  from: Scalars['DateTime']['input'];
  /** 종료시간 */
  to: Scalars['DateTime']['input'];
};

/** 디바이스 토큰 */
export type DeviceToken = {
  __typename?: 'DeviceToken';
  /** 생성일 */
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** 마지막 본 시간 */
  last_seen_at: Maybe<Scalars['DateTime']['output']>;
  /** 플랫폼 */
  platform: PlatformEnum;
  /** 토큰 */
  token: Scalars['String']['output'];
  /** 수정일 */
  updated_at: Scalars['DateTime']['output'];
};

export type ExternalWalletResponse = {
  __typename?: 'ExternalWalletResponse';
  /** 데이터 */
  data: Maybe<UserExternalWallet>;
  /** 메시지 */
  message: Maybe<Scalars['String']['output']>;
  /** 상태 값 */
  status: Maybe<Scalars['String']['output']>;
};

/** Faq 정보 */
export type Faq = {
  __typename?: 'Faq';
  /** 생성자 */
  author: Admin;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 생성 시간 */
  created_at: Maybe<Scalars['DateTime']['output']>;
  /** 노출 종료 시간 */
  ended_at: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** 이미지 */
  images: Maybe<Array<Maybe<Image>>>;
  /** Faq 노출 여부 */
  is_active: Maybe<Scalars['Int']['output']>;
  /** 상단 고정 여부 */
  is_fixed: Maybe<Scalars['Int']['output']>;
  /** 언어 */
  locale: LocaleStatus;
  /** 다음 Faq */
  next: Maybe<NextFaq>;
  /** 이전 Faq */
  previous: Maybe<PreviousFaq>;
  /** 노출 시작 시간 */
  started_at: Maybe<Scalars['DateTime']['output']>;
  /** 썸네일 */
  thumbnail: Maybe<Thumbnail>;
  /** 제목 */
  title: Scalars['String']['output'];
  /** 타입 (1: 지갑 관련, 2: 서비스 관련) */
  type: FaqTypeEnum;
  /** 수정 시간 */
  updated_at: Maybe<Scalars['DateTime']['output']>;
};

/** Faq 검색 항목 */
export enum FaqColumn {
  Content = 'CONTENT',
  EndedAt = 'ENDED_AT',
  StartedAt = 'STARTED_AT',
  Title = 'TITLE'
}

/** A paginated list of Faq items. */
export type FaqPaginator = {
  __typename?: 'FaqPaginator';
  /** A list of Faq items. */
  data: Array<Faq>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum FaqTypeEnum {
  Service = 'SERVICE',
  Wallet = 'WALLET'
}

export type FaqWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND: InputMaybe<Array<FaqWhereConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR: InputMaybe<Array<FaqWhereConditions>>;
  /** The column that is used for the condition. */
  column: InputMaybe<FaqColumn>;
  /** The operator that is used for the condition. */
  operator: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value: InputMaybe<Scalars['Mixed']['input']>;
};

/** 패스워드 찾기 input */
export type ForgotPasswordInput = {
  email: Scalars['String']['input'];
};

export type GetMarketCurrencyResponse = {
  __typename?: 'GetMarketCurrencyResponse';
  /** 매도 호가(살 때) */
  ask: Maybe<Scalars['Float']['output']>;
  /** 매수 호가(팔 때) */
  bid: Maybe<Scalars['Float']['output']>;
  /** 영문 이름 */
  en_name: Maybe<Scalars['String']['output']>;
  /** 한글 이름 */
  ko_name: Maybe<Scalars['String']['output']>;
  /** 심볼 */
  symbol: Maybe<Scalars['String']['output']>;
};

/** 길드 정보 */
export type Guild = {
  __typename?: 'Guild';
  /** 완료된 거래 수 */
  completed_transaction_count: Maybe<Scalars['Int']['output']>;
  /** 생성일 */
  created_at: Maybe<Scalars['DateTime']['output']>;
  /** 설명 */
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 승인 여부(1: 자동가입, 2: 승인제) */
  is_approved: ApprovedEnum;
  /** 길드장 이메일 */
  master_email: Maybe<Scalars['String']['output']>;
  /** 멤버 수 */
  member_count: Maybe<Scalars['Int']['output']>;
  /** 이름 */
  name: Scalars['String']['output'];
  /** 진행중인 거래 수 */
  pending_transaction_count: Maybe<Scalars['Int']['output']>;
  /** 총 거래 금액 */
  total_transaction_amount: Maybe<Scalars['Float']['output']>;
  /** 수정일 */
  updated_at: Maybe<Scalars['DateTime']['output']>;
  /** 길드장 아이디 */
  user_id: Scalars['Int']['output'];
  /** 공개 여부(1: public, 2: private) */
  visibility: VisibilityEnum;
};

/** A paginated list of Guild items. */
export type GuildPaginator = {
  __typename?: 'GuildPaginator';
  /** A list of Guild items. */
  data: Array<Guild>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** 길드 랭킹 정렬 컬럼 */
export enum GuildRankingColumnEnum {
  /** 길드원 수 */
  MemberCount = 'MEMBER_COUNT',
  /** 총 거래 금액 */
  TotalTransactionAmount = 'TOTAL_TRANSACTION_AMOUNT'
}

export type GuildResponse = {
  __typename?: 'GuildResponse';
  /** 유저 정보 */
  data: Maybe<Guild>;
  /** 메시지 */
  message: Scalars['String']['output'];
  /** 상태 값 */
  status: Scalars['String']['output'];
};

/** 길드 대기 목록 */
export type GuildWaiting = {
  __typename?: 'GuildWaiting';
  /** 생성일 */
  created_at: Maybe<Scalars['DateTime']['output']>;
  /** 길드 아이디 */
  guild_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  /** 거부 메시지 */
  message: Maybe<Scalars['String']['output']>;
  /** 상태 (1: 대기, 2: 승인, 3: 거부) */
  status: Maybe<GuildWaitingStatusEnum>;
  /** 수정일 */
  updated_at: Maybe<Scalars['DateTime']['output']>;
  /** 유저 정보 */
  user: Maybe<User>;
  /** 유저 아이디 */
  user_id: Maybe<Scalars['Int']['output']>;
};

/** A paginated list of GuildWaiting items. */
export type GuildWaitingPaginator = {
  __typename?: 'GuildWaitingPaginator';
  /** A list of GuildWaiting items. */
  data: Array<GuildWaiting>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** 길드 대기 목록 상태 */
export enum GuildWaitingStatusEnum {
  /** 승인 */
  Approved = 'APPROVED',
  /** 대기 */
  Pending = 'PENDING',
  /** 거부 */
  Rejected = 'REJECTED'
}

export type Image = {
  __typename?: 'Image';
  id: Scalars['ID']['output'];
  /** 큰 이미지 */
  thumb_large_url: Maybe<Scalars['String']['output']>;
  /** 중간 이미지 */
  thumb_medium_url: Maybe<Scalars['String']['output']>;
  /** 작은 이미지 */
  thumb_small_url: Maybe<Scalars['String']['output']>;
  /** 원본 이미지 */
  url: Maybe<Scalars['String']['output']>;
};

export type Images = {
  __typename?: 'Images';
  image: Array<Image>;
};

export type InternalWalletResponse = {
  __typename?: 'InternalWalletResponse';
  /** 데이터 */
  data: Maybe<UserInternalWallet>;
  /** 메시지 */
  message: Maybe<Scalars['String']['output']>;
  /** 상태 값 */
  status: Maybe<Scalars['String']['output']>;
};

/** 언어 설정 */
export enum LocaleStatus {
  /** 중국어 */
  Chinese = 'CHINESE',
  /** 영어 */
  English = 'ENGLISH',
  /** 한글 */
  Korean = 'KOREAN',
  /** 베트남어 */
  Vietnam = 'VIETNAM'
}

/** 로그인 정보 */
export type LoginAuthPayload = {
  __typename?: 'LoginAuthPayload';
  /** 액세스 토큰 */
  access_token: Maybe<Scalars['String']['output']>;
  /** 액세스 토큰 만료 시간 */
  expires_in: Maybe<Scalars['String']['output']>;
  /** 메시지 */
  message: Scalars['String']['output'];
  /** 리프레쉬 토큰 */
  refresh_token: Maybe<Scalars['String']['output']>;
  /** 상태 값 */
  status: Scalars['String']['output'];
  /** 토큰 타입 */
  token_type: Maybe<Scalars['String']['output']>;
  /** 유저 정보 */
  user: Maybe<User>;
};

/** 유저 로그인 Input */
export type LoginInput = {
  /** 이메일 */
  email: Scalars['String']['input'];
  /** 비밀번호 */
  password: Scalars['String']['input'];
};

export type MessageResponse = {
  __typename?: 'MessageResponse';
  /** 메시지 */
  message: Maybe<Scalars['String']['output']>;
  /** 상태 값 */
  status: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** 관리자 로그인 */
  adminLogin: Maybe<AdminAuthPayload>;
  /** 길드 승인 */
  approveGuild: Maybe<GuildResponse>;
  /** 코인 보내기 계산 */
  calculateSendCoin: CalculateSendCoinResponse;
  /** USDT 계산 */
  calculateUSDT: Maybe<CalculateUsdtResponse>;
  /** 긷드 가입 취소 */
  cancelGuild: Maybe<GuildResponse>;
  /** 로케일 변경 */
  changeLocale: Maybe<UserResponse>;
  /** 비밀번호 변경 */
  changePassword: Maybe<UserResponse>;
  /** 회원가입 이메일 중복 확인 */
  checkEmailForCreateUser: MessageResponse;
  /** 문자 인증 코드 검증 - LEVEL 2 */
  checkSmsCode: Maybe<UserResponse>;
  /** 문자 인증 코드 검증 - 아이디, 비밀번호 찾기 */
  checkSmsCodeByGuest: Maybe<UserResponse>;
  /** Faq 등록 */
  createFaq: Faq;
  /** 길드 생성 */
  createGuild: Maybe<GuildResponse>;
  /** KYC 생성 - LEVEL 3 */
  createKYC: Maybe<UserResponse>;
  /** 공지사항 등록 */
  createNotice: Notice;
  /** 파트너 등록 */
  createPartner: Maybe<MessageResponse>;
  /** 프로필 작성 - LEVEL 1 */
  createProfile: Maybe<UserResponse>;
  /** 거래 중지 이미지 업로드 */
  createStopped: Maybe<UserTransactionResponse>;
  /** 상점 생성 - LEVEL 4 */
  createStore: Maybe<UserResponse>;
  /** 슈퍼 파트너 등록 */
  createSuperPartner: Maybe<MessageResponse>;
  /** 거래 글 생성 */
  createTransaction: Maybe<TransactionResponse>;
  /** 유저 계좌 생성 */
  createUserAccount: Maybe<AccountResponse>;
  /** 유저 외부(출금) 지갑 생성 */
  createUserExternalWallet: Maybe<ExternalWalletResponse>;
  /** 유저 내부(입금) 지갑 생성 */
  createUserInternalWallet: Maybe<InternalWalletResponse>;
  /** 거래 신청 내역 생성 */
  createUserTransaction: Maybe<UserTransactionResponse>;
  /** 디바이스 토큰 삭제 */
  deleteDeviceToken: Scalars['Boolean']['output'];
  /** Faq 삭제 */
  deleteFaq: Faq;
  /** 길드 삭제 */
  deleteGuild: Maybe<GuildResponse>;
  /** 공지사항 삭제 */
  deleteNotice: Notice;
  /** 파트너 삭제 */
  deletePartner: Maybe<MessageResponse>;
  /** 슈퍼 파트너 삭제 */
  deleteSuperPartner: Maybe<MessageResponse>;
  /** 거래 글 삭제 */
  deleteTransaction: Maybe<TransactionResponse>;
  /** 유저 탈퇴 */
  deleteUser: Maybe<UserResponse>;
  /** 유저 계좌 삭제 */
  deleteUserAccount: Maybe<AccountResponse>;
  /** 유저 외부(출금) 지갑 삭제 */
  deleteUserExternalWallet: Maybe<ExternalWalletResponse>;
  /** 거래 신청 내역 삭제 */
  deleteUserTransaction: Maybe<UserTransactionResponse>;
  /** 길드 강퇴 */
  expelGuild: Maybe<GuildResponse>;
  /** 길드 탈퇴 */
  leaveGuild: Maybe<GuildResponse>;
  /** 유저 로그인 */
  login: Maybe<LoginAuthPayload>;
  /** 로그아웃 */
  logoutUser: Maybe<UserResponse>;
  /** 제휴사 로그인 */
  partnerLogin: Maybe<PartnerAuthPayload>;
  /** 코인 받기 */
  receiveCoin: CountResponse;
  /** 리프레쉬 토큰 */
  refreshToken: Maybe<RefreshAuthPayload>;
  /** 유저 등록 */
  register: Maybe<LoginAuthPayload>;
  /** 디바이스 토큰 등록 */
  registerDeviceToken: DeviceToken;
  /** 회원가입 인증 이메일 재전송 */
  resendVerifyEmail: MessageResponse;
  /** 비밀번호 재설정 */
  resetPassword: Maybe<UserResponse>;
  /** KYC 반려 - LEVEL 3 */
  returnKYC: Maybe<UserResponse>;
  /** 상점 반려 - LEVEL 4 */
  returnStore: Maybe<UserResponse>;
  /** 코인 보내기 승인 */
  reviewSendCoin: MessageResponse;
  /** 코인 보내기 */
  sendCoin: MessageResponse;
  /** UUID로 코인 보내기 */
  sendCoinByUUID: MessageResponse;
  /** 푸시 보내기 */
  sendPushToUser: PushSendReport;
  /** 문자 인증 코드 보내기 - LEVEL 2 */
  sendSmsCode: Maybe<UserResponse>;
  /** 문자 인증 코드 보내기 - 아이디, 비밀번호 찾기 */
  sendSmsCodeByGuest: Maybe<CacheResponse>;
  /** 로케일 설정(로그인x) */
  setLocale: MessageResponse;
  /** 길드 가입 신청 */
  signUpGuild: Maybe<GuildResponse>;
  /** 인증 단계 업데이트 */
  updateAuthStep: Maybe<UserResponse>;
  /** 코인 정보 수정 */
  updateCoin: MessageResponse;
  /** Faq 수정 */
  updateFaq: Faq;
  /** 길드 수정 */
  updateGuild: Maybe<GuildResponse>;
  /** KYC 수정 - LEVEL 3 */
  updateKYC: Maybe<UserResponse>;
  /** 통화 수정 */
  updateMyCurrency: Maybe<UserResponse>;
  /** 이름 업데이트 */
  updateName: Maybe<UserResponse>;
  /** 공지사항 수정 */
  updateNotice: Notice;
  /** 파트너 수정 */
  updatePartner: Maybe<MessageResponse>;
  /** 사이트 설정 수정 */
  updateSite: Maybe<SiteResponse>;
  /** 상점 수정 - LEVEL 4 */
  updateStore: Maybe<UserResponse>;
  /** 슈퍼 파트너 수정 */
  updateSuperPartner: Maybe<MessageResponse>;
  /** 거래 글 수정 */
  updateTransaction: Maybe<TransactionResponse>;
  /** 유저 계좌 수정 */
  updateUserAccount: Maybe<AccountResponse>;
  /** 유저 외부(출금) 지갑 수정 */
  updateUserExternalWallet: Maybe<ExternalWalletResponse>;
  /** 거래 신청 내역 수정 */
  updateUserTransaction: Maybe<UserTransactionResponse>;
  /** 거래 신청 내역 상태 변경 */
  updateUserTransactionStatus: Maybe<UserTransactionResponse>;
  /** 업로드 */
  upload: Maybe<Image>;
  /** 썸네일 업로드 */
  uploadThumbnail: Maybe<Thumbnail>;
  /** 회원가입 이메일 인증 */
  verifyEmail: MessageResponse;
};


export type MutationAdminLoginArgs = {
  input: AdminLoginInput;
};


export type MutationApproveGuildArgs = {
  input: ApproveGuildInput;
};


export type MutationCalculateSendCoinArgs = {
  input: SendCoinInput;
};


export type MutationCalculateUsdtArgs = {
  input: CreateUserTransactionInput;
};


export type MutationChangeLocaleArgs = {
  input: UpdateLocaleInput;
};


export type MutationChangePasswordArgs = {
  input: InputMaybe<ChangePasswordInput>;
};


export type MutationCheckEmailForCreateUserArgs = {
  email: Scalars['String']['input'];
  locale: LocaleStatus;
};


export type MutationCheckSmsCodeArgs = {
  sms_code: Scalars['String']['input'];
};


export type MutationCheckSmsCodeByGuestArgs = {
  input: CheckSmsCodeByGuestInput;
};


export type MutationCreateFaqArgs = {
  input: CreateFaqInput;
};


export type MutationCreateGuildArgs = {
  input: CreateGuildInput;
};


export type MutationCreateKycArgs = {
  input: CreateImageInput;
};


export type MutationCreateNoticeArgs = {
  input: CreateNoticeInput;
};


export type MutationCreatePartnerArgs = {
  input: InputMaybe<CreatePartnerInput>;
};


export type MutationCreateProfileArgs = {
  input: CreateProfileInput;
};


export type MutationCreateStoppedArgs = {
  input: CreateStoppedInput;
};


export type MutationCreateStoreArgs = {
  input: CreateImageInput;
};


export type MutationCreateSuperPartnerArgs = {
  input: InputMaybe<CreateSuperPartnerInput>;
};


export type MutationCreateTransactionArgs = {
  input: CreateTransactionInput;
};


export type MutationCreateUserAccountArgs = {
  input: CreateUserAccountInput;
};


export type MutationCreateUserExternalWalletArgs = {
  input: CreateUserExternalWalletInput;
};


export type MutationCreateUserInternalWalletArgs = {
  input: CreateUserInternalWalletInput;
};


export type MutationCreateUserTransactionArgs = {
  input: CreateUserTransactionInput;
};


export type MutationDeleteDeviceTokenArgs = {
  token: Scalars['String']['input'];
};


export type MutationDeleteFaqArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteNoticeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePartnerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSuperPartnerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserAccountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserExternalWalletArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationExpelGuildArgs = {
  user_id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationPartnerLoginArgs = {
  input: PartnerLoginInput;
};


export type MutationReceiveCoinArgs = {
  input: ReceiveCoinInput;
};


export type MutationRefreshTokenArgs = {
  refresh_token: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationRegisterDeviceTokenArgs = {
  input: RegisterDeviceTokenInput;
};


export type MutationResendVerifyEmailArgs = {
  input: ForgotPasswordInput;
};


export type MutationResetPasswordArgs = {
  input: InputMaybe<ResetPasswordInput>;
};


export type MutationReturnKycArgs = {
  id: Scalars['ID']['input'];
};


export type MutationReturnStoreArgs = {
  id: Scalars['ID']['input'];
};


export type MutationReviewSendCoinArgs = {
  input: ReviewSendCoinInput;
};


export type MutationSendCoinArgs = {
  input: SendCoinInput;
};


export type MutationSendCoinByUuidArgs = {
  input: SendCoinByuuidInput;
};


export type MutationSendPushToUserArgs = {
  input: PushNotificationInput;
  userId: Scalars['ID']['input'];
};


export type MutationSendSmsCodeArgs = {
  input: SendSmsCodeInput;
};


export type MutationSendSmsCodeByGuestArgs = {
  input: SendSmsCodeByGuestInput;
};


export type MutationSetLocaleArgs = {
  input: UpdateLocaleInput;
};


export type MutationSignUpGuildArgs = {
  guild_id: Scalars['Int']['input'];
};


export type MutationUpdateAuthStepArgs = {
  input: InputMaybe<UpdateAuthStepInput>;
};


export type MutationUpdateCoinArgs = {
  input: UpdateCoinInput;
};


export type MutationUpdateFaqArgs = {
  input: UpdateFaqInput;
};


export type MutationUpdateGuildArgs = {
  input: UpdateGuildInput;
};


export type MutationUpdateKycArgs = {
  input: UpdateImageInput;
};


export type MutationUpdateMyCurrencyArgs = {
  currency_id: CurrencyEnum;
};


export type MutationUpdateNameArgs = {
  name: Scalars['String']['input'];
};


export type MutationUpdateNoticeArgs = {
  input: UpdateNoticeInput;
};


export type MutationUpdatePartnerArgs = {
  input: InputMaybe<UpdatePartnerInput>;
};


export type MutationUpdateSiteArgs = {
  input: UpdateSiteInput;
};


export type MutationUpdateStoreArgs = {
  input: UpdateImageInput;
};


export type MutationUpdateSuperPartnerArgs = {
  input: InputMaybe<UpdateSuperPartnerInput>;
};


export type MutationUpdateTransactionArgs = {
  input: UpdateTransactionInput;
};


export type MutationUpdateUserAccountArgs = {
  input: UpdateUserAccountInput;
};


export type MutationUpdateUserExternalWalletArgs = {
  input: UpdateUserExternalWalletInput;
};


export type MutationUpdateUserTransactionArgs = {
  input: UpdateUserTransactionInput;
};


export type MutationUpdateUserTransactionStatusArgs = {
  input: UpdateUserTransactionStatusInput;
};


export type MutationUploadArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationUploadThumbnailArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};

export type MyGuildResponse = {
  __typename?: 'MyGuildResponse';
  /** 길드 아이디 */
  guild_id: Maybe<Scalars['Int']['output']>;
  /** 길드 마스터 여부 */
  is_guild_master: Maybe<Scalars['Boolean']['output']>;
  /** 길드 대기 여부 */
  is_guild_waiting: Maybe<Scalars['Boolean']['output']>;
};

/** Faq 다음글 */
export type NextFaq = {
  __typename?: 'NextFaq';
  id: Maybe<Scalars['ID']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

/** 공지사항 다음글 */
export type NextNotice = {
  __typename?: 'NextNotice';
  id: Maybe<Scalars['ID']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

/** 공지사항 정보 */
export type Notice = {
  __typename?: 'Notice';
  /** 생성자 */
  author: Admin;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 생성 시간 */
  created_at: Maybe<Scalars['DateTime']['output']>;
  /** 노출 종료 시간 */
  ended_at: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** 이미지 */
  images: Maybe<Array<Maybe<Image>>>;
  /** 공지사항 노출 여부 */
  is_active: Maybe<Scalars['Int']['output']>;
  /** 상단 고정 여부 */
  is_fixed: Maybe<Scalars['Int']['output']>;
  /** 언어 */
  locale: LocaleStatus;
  /** 다음 공지사항 */
  next: Maybe<NextNotice>;
  /** 이전 공지사항 */
  previous: Maybe<PreviousNotice>;
  /** 노출 시작 시간 */
  started_at: Maybe<Scalars['DateTime']['output']>;
  /** 썸네일 */
  thumbnail: Maybe<Thumbnail>;
  /** 제목 */
  title: Scalars['String']['output'];
  /** 수정 시간 */
  updated_at: Maybe<Scalars['DateTime']['output']>;
};

/** 공지사항 검색 항목 */
export enum NoticeColumn {
  Content = 'CONTENT',
  EndedAt = 'ENDED_AT',
  StartedAt = 'STARTED_AT',
  Title = 'TITLE'
}

/** A paginated list of Notice items. */
export type NoticePaginator = {
  __typename?: 'NoticePaginator';
  /** A list of Notice items. */
  data: Array<Notice>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type NoticeWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND: InputMaybe<Array<NoticeWhereConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR: InputMaybe<Array<NoticeWhereConditions>>;
  /** The column that is used for the condition. */
  column: InputMaybe<NoticeColumn>;
  /** The operator that is used for the condition. */
  operator: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value: InputMaybe<Scalars['Mixed']['input']>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String']['input'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int']['output'];
  /** Index of the current page. */
  currentPage: Scalars['Int']['output'];
  /** Index of the first item in the current page. */
  firstItem: Maybe<Scalars['Int']['output']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean']['output'];
  /** Index of the last item in the current page. */
  lastItem: Maybe<Scalars['Int']['output']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int']['output'];
  /** Number of items per page. */
  perPage: Scalars['Int']['output'];
  /** Number of total available items. */
  total: Scalars['Int']['output'];
};

export type Partner = {
  __typename?: 'Partner';
  /** 에이전트 수수료 */
  agent_fee: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  /** 내 코드 */
  my_code: Maybe<Scalars['String']['output']>;
  /** 이름 */
  name: Scalars['String']['output'];
  /** 역할 */
  role: Maybe<Scalars['String']['output']>;
  /** 슈퍼 파트너 코드 */
  sp_code: Maybe<Scalars['String']['output']>;
  /** 출금 수수료 */
  withdraw_fee: Maybe<Scalars['Float']['output']>;
};

/** 로그인 정보 */
export type PartnerAuthPayload = {
  __typename?: 'PartnerAuthPayload';
  /** 액세스 토큰 */
  access_token: Maybe<Scalars['String']['output']>;
  /** 액세스 토큰 만료 시간 */
  expires_in: Maybe<Scalars['String']['output']>;
  /** 메시지 */
  message: Scalars['String']['output'];
  /** 유저 정보 */
  partner: Maybe<Partner>;
  /** 리프레쉬 토큰 */
  refresh_token: Maybe<Scalars['String']['output']>;
  /** 상태 값 */
  status: Scalars['String']['output'];
  /** 토큰 타입 */
  token_type: Maybe<Scalars['String']['output']>;
};

export type PartnerLoginInput = {
  /** 이름 */
  name: Scalars['String']['input'];
  /** 비밀번호 */
  password: Scalars['String']['input'];
};

/** A paginated list of Partner items. */
export type PartnerPaginator = {
  __typename?: 'PartnerPaginator';
  /** A list of Partner items. */
  data: Array<Partner>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum PlatformEnum {
  /** android */
  Android = 'ANDROID',
  /** ios */
  Ios = 'IOS'
}

/** Faq 이전글 */
export type PreviousFaq = {
  __typename?: 'PreviousFaq';
  id: Maybe<Scalars['ID']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

/** 공지사항 이전글 */
export type PreviousNotice = {
  __typename?: 'PreviousNotice';
  id: Maybe<Scalars['ID']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type PushNotificationInput = {
  /** 이미지 링크 */
  imageUrl: InputMaybe<Scalars['String']['input']>;
  /** 내용 */
  msg: InputMaybe<Scalars['String']['input']>;
  /** 제목 */
  title: InputMaybe<Scalars['String']['input']>;
  /** 포워딩 링크 */
  url: InputMaybe<Scalars['String']['input']>;
};

export type PushSendReport = {
  __typename?: 'PushSendReport';
  /** 실패 카운트 */
  failureCount: Scalars['Int']['output'];
  /** 유효하지 않은 토큰 목록 */
  invalidTokens: Array<Scalars['String']['output']>;
  /** 성공 카운트 */
  successCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** 어드민 상세 정보 */
  admin: Maybe<Admin>;
  /** 어드민 액션 로그 */
  adminActions: AdminActionPaginator;
  /** 어드민 목록 */
  admins: AdminPaginator;
  coins: Maybe<Array<Maybe<Coin>>>;
  /** 로그인 중인 어드민 정보 */
  currentAdmin: Maybe<Admin>;
  /** 로그인 중인 파트너 정보 */
  currentPartner: Maybe<Partner>;
  /** 로그인 중인 유저 정보 */
  currentUser: Maybe<User>;
  /** Faq 상세 정보 */
  faq: Maybe<Faq>;
  /** Faq 검색 목록 */
  faqSearch: FaqPaginator;
  /** Faq 목록 */
  faqs: FaqPaginator;
  /** 코인 통화 시세 조회 */
  getCoinCurrency: Maybe<Array<Maybe<CoinCurrency>>>;
  /** 신규 거래 신청 내역 카운트 조회 */
  getCountNewUserTransactions: Maybe<Scalars['Int']['output']>;
  /** 홈 화면 마켓 시세 조회 */
  getMarketCurrency: Maybe<Array<Maybe<GetMarketCurrencyResponse>>>;
  /** 길드 상세 정보 */
  guild: Maybe<Guild>;
  /** 길드 랭킹 (상위 10위) */
  guildRanking: GuildPaginator;
  /** 길드원 목록 (길드장은 제외) */
  guildUsers: UserPaginator;
  /** 길드 대기 목록 (status = 1인 상태) */
  guildWaitings: GuildWaitingPaginator;
  /** 길드 탐색 목록 */
  guilds: GuildPaginator;
  /** 내 정보 */
  me: Maybe<User>;
  /** 내 길드 정보 */
  myGuild: Maybe<MyGuildResponse>;
  /** 내 거래 글 목록 조회 */
  myTransactions: TransactionPaginator;
  /** 내 거래 신청 내역 목록 조회 */
  myUserTransactions: UserTransactionPaginator;
  /** 공지사항 상세 정보 */
  notice: Maybe<Notice>;
  /** 공지사항 검색 목록 */
  noticeSearch: NoticePaginator;
  /** 공지사항 목록 */
  notices: NoticePaginator;
  /** 파트너 상세 정보 */
  partner: Maybe<Partner>;
  /** 파트너 목록 */
  partners: PartnerPaginator;
  /** 슈퍼 파트너 하위 파트너 목록 */
  partnersBySuperPartner: PartnerPaginator;
  /** 사이트 설정 */
  site: Maybe<Site>;
  /** 슈퍼 파트너 목록 */
  superPartners: PartnerPaginator;
  /** 거래 글 상세보기 */
  transaction: Maybe<Transaction>;
  /** 거래 글 수량 통계 */
  transactionAmount: Maybe<AmountResponse>;
  /** 거래 글 목록 조회 by admin */
  transactionsByAdmin: TransactionPaginator;
  /** 거래 글 목록 조회 by user */
  transactionsByUser: TransactionPaginator;
  /** 읽지 않은 거래 신청 내역 카운트 */
  unreadUserTransactionCount: Maybe<UnreadUserTransactionCountResponse>;
  /** 유저 상세 정보 */
  user: Maybe<User>;
  /** 유저 계좌 상세 정보 */
  userAccount: Maybe<UserAccount>;
  /** 유저 계좌 목록 */
  userAccounts: Maybe<Array<Maybe<UserAccount>>>;
  /** 유저 계좌 목록 by 어드민 */
  userAccountsByAdmin: Maybe<Array<Maybe<UserAccount>>>;
  /** 유저 외부(출금) 지갑 상세 정보 */
  userExternalWallet: Maybe<UserExternalWallet>;
  /** 유저 외부(출금) 지갑 목록 */
  userExternalWallets: Maybe<Array<Maybe<UserExternalWallet>>>;
  /** 유저 외부(출금) 지갑 목록 by 어드민 */
  userExternalWalletsByAdmin: Maybe<Array<Maybe<UserExternalWallet>>>;
  /** 유저 내부(입금) 지갑 상세 정보 */
  userInternalWallet: Maybe<UserInternalWallet>;
  /** 유저 내부(입금) 지갑 목록 */
  userInternalWallets: Maybe<Array<Maybe<UserInternalWallet>>>;
  /** 유저 내부(입금) 지갑 목록 by 어드민 */
  userInternalWalletsByAdmin: Maybe<Array<Maybe<UserInternalWallet>>>;
  /** 유저 포인트 */
  userPoint: Maybe<UserPoint>;
  /** 거래 신청 내역 상세보기 */
  userTransaction: Maybe<UserTransaction>;
  /** 거래 신청 내역 정산 통계 */
  userTransactionAgentAmount: Maybe<AgentAmountResponse>;
  /** 거래 신청 내역 수량 통계 */
  userTransactionAmount: Maybe<AmountResponse>;
  /** 거래 신청 내역 목록 조회 */
  userTransactions: UserTransactionPaginator;
  /** 내 거래 글에 신청한 내역 */
  userTransactionsByMyTransactions: UserTransactionPaginator;
  /** 입출금 정산 내역 */
  userWalletHistoryAgentAmount: Maybe<AgentAmountResponse>;
  /** 입출금 내역 수량 통계 by 어드민 */
  userWalletHistoryAmountByAdmin: Maybe<AmountResponse>;
  /** 입출금 내역 수량 통계 by 유저 */
  userWalletHistoryAmountByUser: Scalars['Float']['output'];
  /** 입출금 내역 by 어드민 */
  userWalletHistoryByAdmin: UserWalletHistoryPaginator;
  /** 입출금 내역 by 유저 */
  userWalletHistoryByUser: UserWalletHistoryPaginator;
  /** 유저 목록 */
  users: UserPaginator;
};


export type QueryAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAdminActionsArgs = {
  first?: Scalars['Int']['input'];
  page: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAdminsArgs = {
  first?: Scalars['Int']['input'];
  page: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCoinsArgs = {
  is_active: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFaqArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFaqSearchArgs = {
  first?: Scalars['Int']['input'];
  is_active: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleStatus>;
  orderBy: InputMaybe<Array<QueryFaqSearchOrderByOrderByClause>>;
  page: InputMaybe<Scalars['Int']['input']>;
  type: InputMaybe<FaqTypeEnum>;
  where: InputMaybe<QueryFaqSearchWhereWhereConditions>;
};


export type QueryFaqsArgs = {
  first?: Scalars['Int']['input'];
  is_active: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleStatus>;
  orderBy: InputMaybe<Array<QueryFaqsOrderByOrderByClause>>;
  page: InputMaybe<Scalars['Int']['input']>;
  type: InputMaybe<FaqTypeEnum>;
};


export type QueryGetCountNewUserTransactionsArgs = {
  type: InputMaybe<RoleEnum>;
};


export type QueryGuildArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGuildRankingArgs = {
  first?: Scalars['Int']['input'];
  orderBy: InputMaybe<Array<QueryGuildRankingOrderByOrderByClause>>;
  page: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGuildUsersArgs = {
  email: InputMaybe<Scalars['String']['input']>;
  first?: Scalars['Int']['input'];
  page: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGuildWaitingsArgs = {
  email: InputMaybe<Scalars['String']['input']>;
  first?: Scalars['Int']['input'];
  page: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGuildsArgs = {
  first?: Scalars['Int']['input'];
  name: InputMaybe<Scalars['String']['input']>;
  orderBy: InputMaybe<Array<QueryGuildsOrderByOrderByClause>>;
  page: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMyTransactionsArgs = {
  first?: Scalars['Int']['input'];
  orderBy: InputMaybe<Array<QueryMyTransactionsOrderByOrderByClause>>;
  page: InputMaybe<Scalars['Int']['input']>;
  type: InputMaybe<TransactionTypeEnum>;
};


export type QueryMyUserTransactionsArgs = {
  end_date: InputMaybe<Scalars['Date']['input']>;
  first?: Scalars['Int']['input'];
  page: InputMaybe<Scalars['Int']['input']>;
  start_date: InputMaybe<Scalars['Date']['input']>;
  tab: InputMaybe<UserTransactionTabEnum>;
  type: InputMaybe<TransactionTypeEnum>;
};


export type QueryNoticeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNoticeSearchArgs = {
  first?: Scalars['Int']['input'];
  is_active: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleStatus>;
  orderBy: InputMaybe<Array<QueryNoticeSearchOrderByOrderByClause>>;
  page: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<QueryNoticeSearchWhereWhereConditions>;
};


export type QueryNoticesArgs = {
  first?: Scalars['Int']['input'];
  is_active: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<LocaleStatus>;
  orderBy: InputMaybe<Array<QueryNoticesOrderByOrderByClause>>;
  page: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPartnerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPartnersArgs = {
  first?: Scalars['Int']['input'];
  page: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPartnersBySuperPartnerArgs = {
  first?: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
  page: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySuperPartnersArgs = {
  first?: Scalars['Int']['input'];
  page: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTransactionAmountArgs = {
  created_at: InputMaybe<DateTimeRange>;
  invite_code: InputMaybe<Scalars['String']['input']>;
  type: InputMaybe<TransactionTypeEnum>;
};


export type QueryTransactionsByAdminArgs = {
  created_at: InputMaybe<DateTimeRange>;
  first?: Scalars['Int']['input'];
  invite_code: InputMaybe<Scalars['String']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  type: InputMaybe<TransactionTypeEnum>;
};


export type QueryTransactionsByUserArgs = {
  first?: Scalars['Int']['input'];
  orderBy: InputMaybe<Array<QueryTransactionsByUserOrderByOrderByClause>>;
  page: InputMaybe<Scalars['Int']['input']>;
  type: InputMaybe<TransactionTypeEnum>;
  visibility: InputMaybe<VisibilityEnum>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserAccountArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserAccountsByAdminArgs = {
  user_id: Scalars['Int']['input'];
};


export type QueryUserExternalWalletArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserExternalWalletsByAdminArgs = {
  user_id: Scalars['Int']['input'];
};


export type QueryUserInternalWalletArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserInternalWalletsByAdminArgs = {
  user_id: Scalars['Int']['input'];
};


export type QueryUserTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserTransactionAgentAmountArgs = {
  created_at: InputMaybe<DateTimeRange>;
  invite_code: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserTransactionAmountArgs = {
  created_at: InputMaybe<DateTimeRange>;
  invite_code: InputMaybe<Scalars['String']['input']>;
  status: InputMaybe<UserTransactionStatusEnum>;
  tab: InputMaybe<UserTransactionTabEnum>;
  type: InputMaybe<TransactionTypeEnum>;
};


export type QueryUserTransactionsArgs = {
  created_at: InputMaybe<DateTimeRange>;
  first?: Scalars['Int']['input'];
  invite_code: InputMaybe<Scalars['String']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  status: InputMaybe<UserTransactionStatusEnum>;
  tab: InputMaybe<UserTransactionTabEnum>;
  type: InputMaybe<TransactionTypeEnum>;
};


export type QueryUserTransactionsByMyTransactionsArgs = {
  end_date: InputMaybe<Scalars['Date']['input']>;
  first?: Scalars['Int']['input'];
  page: InputMaybe<Scalars['Int']['input']>;
  start_date: InputMaybe<Scalars['Date']['input']>;
  tab: InputMaybe<UserTransactionTabEnum>;
};


export type QueryUserWalletHistoryAgentAmountArgs = {
  invite_code: InputMaybe<Scalars['String']['input']>;
  month: InputMaybe<Scalars['Int']['input']>;
  year: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserWalletHistoryAmountByAdminArgs = {
  month: InputMaybe<Scalars['Int']['input']>;
  type: InputMaybe<UserWalletHistoryType>;
  year: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserWalletHistoryAmountByUserArgs = {
  end_date: InputMaybe<Scalars['Date']['input']>;
  start_date: InputMaybe<Scalars['Date']['input']>;
  type: InputMaybe<UserWalletHistoryType>;
  where: InputMaybe<QueryUserWalletHistoryAmountByUserWhereWhereConditions>;
};


export type QueryUserWalletHistoryByAdminArgs = {
  first?: Scalars['Int']['input'];
  month: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<QueryUserWalletHistoryByAdminOrderByOrderByClause>>;
  page: InputMaybe<Scalars['Int']['input']>;
  type: InputMaybe<UserWalletHistoryType>;
  where: InputMaybe<QueryUserWalletHistoryByAdminWhereWhereConditions>;
  year: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserWalletHistoryByUserArgs = {
  end_date: InputMaybe<Scalars['Date']['input']>;
  first?: Scalars['Int']['input'];
  orderBy: InputMaybe<Array<QueryUserWalletHistoryByUserOrderByOrderByClause>>;
  page: InputMaybe<Scalars['Int']['input']>;
  start_date: InputMaybe<Scalars['Date']['input']>;
  type: InputMaybe<UserWalletHistoryType>;
  where: InputMaybe<QueryUserWalletHistoryByUserWhereWhereConditions>;
};


export type QueryUsersArgs = {
  auth_step: InputMaybe<AuthStepEnum>;
  depositor: InputMaybe<Scalars['String']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  first?: Scalars['Int']['input'];
  invite_code: InputMaybe<Scalars['String']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
};

/** Allowed column names for Query.faqSearch.orderBy. */
export enum QueryFaqSearchOrderByColumn {
  CreatedAt = 'CREATED_AT',
  IsFixed = 'IS_FIXED'
}

/** Order by clause for Query.faqSearch.orderBy. */
export type QueryFaqSearchOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryFaqSearchOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `where` argument of the query `faqSearch`. */
export type QueryFaqSearchWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND: InputMaybe<Array<QueryFaqSearchWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS: InputMaybe<QueryFaqSearchWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR: InputMaybe<Array<QueryFaqSearchWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column: InputMaybe<FaqColumn>;
  /** The operator that is used for the condition. */
  operator: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `faqSearch`. */
export type QueryFaqSearchWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition: InputMaybe<QueryFaqSearchWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.faqs.orderBy. */
export enum QueryFaqsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  IsFixed = 'IS_FIXED'
}

/** Order by clause for Query.faqs.orderBy. */
export type QueryFaqsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryFaqsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Order by clause for Query.guildRanking.orderBy. */
export type QueryGuildRankingOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: GuildRankingColumnEnum;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Order by clause for Query.guilds.orderBy. */
export type QueryGuildsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: GuildRankingColumnEnum;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.myTransactions.orderBy. */
export enum QueryMyTransactionsOrderByColumn {
  Id = 'ID',
  UnitPrice = 'UNIT_PRICE'
}

/** Order by clause for Query.myTransactions.orderBy. */
export type QueryMyTransactionsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryMyTransactionsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.noticeSearch.orderBy. */
export enum QueryNoticeSearchOrderByColumn {
  CreatedAt = 'CREATED_AT',
  IsFixed = 'IS_FIXED'
}

/** Order by clause for Query.noticeSearch.orderBy. */
export type QueryNoticeSearchOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryNoticeSearchOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `where` argument of the query `noticeSearch`. */
export type QueryNoticeSearchWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND: InputMaybe<Array<QueryNoticeSearchWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS: InputMaybe<QueryNoticeSearchWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR: InputMaybe<Array<QueryNoticeSearchWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column: InputMaybe<NoticeColumn>;
  /** The operator that is used for the condition. */
  operator: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `noticeSearch`. */
export type QueryNoticeSearchWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition: InputMaybe<QueryNoticeSearchWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.notices.orderBy. */
export enum QueryNoticesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  IsFixed = 'IS_FIXED'
}

/** Order by clause for Query.notices.orderBy. */
export type QueryNoticesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryNoticesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.transactionsByUser.orderBy. */
export enum QueryTransactionsByUserOrderByColumn {
  Id = 'ID',
  UnitPrice = 'UNIT_PRICE'
}

/** Order by clause for Query.transactionsByUser.orderBy. */
export type QueryTransactionsByUserOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryTransactionsByUserOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `where` argument of the query `userWalletHistoryAmountByUser`. */
export type QueryUserWalletHistoryAmountByUserWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND: InputMaybe<Array<QueryUserWalletHistoryAmountByUserWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS: InputMaybe<QueryUserWalletHistoryAmountByUserWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR: InputMaybe<Array<QueryUserWalletHistoryAmountByUserWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column: InputMaybe<UserWalletHistoryColumn>;
  /** The operator that is used for the condition. */
  operator: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `userWalletHistoryAmountByUser`. */
export type QueryUserWalletHistoryAmountByUserWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition: InputMaybe<QueryUserWalletHistoryAmountByUserWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.userWalletHistoryByAdmin.orderBy. */
export enum QueryUserWalletHistoryByAdminOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Query.userWalletHistoryByAdmin.orderBy. */
export type QueryUserWalletHistoryByAdminOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryUserWalletHistoryByAdminOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `where` argument of the query `userWalletHistoryByAdmin`. */
export type QueryUserWalletHistoryByAdminWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND: InputMaybe<Array<QueryUserWalletHistoryByAdminWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS: InputMaybe<QueryUserWalletHistoryByAdminWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR: InputMaybe<Array<QueryUserWalletHistoryByAdminWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column: InputMaybe<UserWalletHistoryColumn>;
  /** The operator that is used for the condition. */
  operator: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `userWalletHistoryByAdmin`. */
export type QueryUserWalletHistoryByAdminWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition: InputMaybe<QueryUserWalletHistoryByAdminWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.userWalletHistoryByUser.orderBy. */
export enum QueryUserWalletHistoryByUserOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Query.userWalletHistoryByUser.orderBy. */
export type QueryUserWalletHistoryByUserOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryUserWalletHistoryByUserOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `where` argument of the query `userWalletHistoryByUser`. */
export type QueryUserWalletHistoryByUserWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND: InputMaybe<Array<QueryUserWalletHistoryByUserWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS: InputMaybe<QueryUserWalletHistoryByUserWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR: InputMaybe<Array<QueryUserWalletHistoryByUserWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column: InputMaybe<UserWalletHistoryColumn>;
  /** The operator that is used for the condition. */
  operator: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `userWalletHistoryByUser`. */
export type QueryUserWalletHistoryByUserWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition: InputMaybe<QueryUserWalletHistoryByUserWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

export type ReceiveCoinInput = {
  /** 코인 아이디 */
  coin_id: CoinTypeEnum;
  /** 지갑 주소 */
  wallet_address: Scalars['String']['input'];
};

/** 리프레시 토큰 정보 */
export type RefreshAuthPayload = {
  __typename?: 'RefreshAuthPayload';
  /** 액세스 토큰 */
  access_token: Maybe<Scalars['String']['output']>;
  /** 액세스 토큰 만료 시간 */
  expires_in: Maybe<Scalars['String']['output']>;
  /** 메시지 */
  message: Scalars['String']['output'];
  /** 상태 값 */
  status: Scalars['String']['output'];
  /** 토큰 타입 */
  token_type: Maybe<Scalars['String']['output']>;
};

export type RegisterDeviceTokenInput = {
  /** 플랫폼 (1: ios, 2: android) */
  platform: PlatformEnum;
  /** 디바이스 토큰 */
  token: Scalars['String']['input'];
};

/** 유저 등록 Input */
export type RegisterInput = {
  /** 국가 */
  country: InputMaybe<Scalars['String']['input']>;
  /** 이메일 */
  email: Scalars['String']['input'];
  /** 추천인 코드 */
  invite_code: InputMaybe<Scalars['String']['input']>;
  /** 언어 */
  locale: InputMaybe<Scalars['String']['input']>;
  /** 이름 */
  name: Scalars['String']['input'];
  /** 비밀번호 */
  password: Scalars['String']['input'];
};

/** 패스워드 재설정 input */
export type ResetPasswordInput = {
  /** 캐시 키 */
  cache_key: Scalars['String']['input'];
  /** 새 비밀번호 */
  password: Scalars['String']['input'];
  /** 새 비밀번호 확인 */
  password_confirmation: Scalars['String']['input'];
};

/** 코인 보내기 승인 Input */
export type ReviewSendCoinInput = {
  id: Scalars['ID']['input'];
  /** 월(기본은 현재 월) */
  month: InputMaybe<Scalars['Int']['input']>;
  /** 상태 */
  status: UserWalletHistoryReviewEnum;
  /** 년(기본은 현재 년도) */
  year: InputMaybe<Scalars['Int']['input']>;
};

export enum RoleEnum {
  /** 어드민 */
  Admin = 'ADMIN',
  /** 유저 */
  User = 'USER'
}

/** The available SQL operators that are used to filter query results. */
export enum SqlOperator {
  /** Whether a value is within a range of values (`BETWEEN`) */
  Between = 'BETWEEN',
  /** Equal operator (`=`) */
  Eq = 'EQ',
  /** Greater than operator (`>`) */
  Gt = 'GT',
  /** Greater than or equal operator (`>=`) */
  Gte = 'GTE',
  /** Whether a value is within a set of values (`IN`) */
  In = 'IN',
  /** Whether a value is not null (`IS NOT NULL`) */
  IsNotNull = 'IS_NOT_NULL',
  /** Whether a value is null (`IS NULL`) */
  IsNull = 'IS_NULL',
  /** Simple pattern matching (`LIKE`) */
  Like = 'LIKE',
  /** Less than operator (`<`) */
  Lt = 'LT',
  /** Less than or equal operator (`<=`) */
  Lte = 'LTE',
  /** Not equal operator (`!=`) */
  Neq = 'NEQ',
  /** Whether a value is not within a range of values (`NOT BETWEEN`) */
  NotBetween = 'NOT_BETWEEN',
  /** Whether a value is not within a set of values (`NOT IN`) */
  NotIn = 'NOT_IN',
  /** Negation of simple pattern matching (`NOT LIKE`) */
  NotLike = 'NOT_LIKE'
}

/** UUID로 코인 보내기 Input */
export type SendCoinByuuidInput = {
  /** 수량 */
  amount: Scalars['Float']['input'];
  /** UUID */
  uuid: Scalars['String']['input'];
};

/** 코인 보내기 Input */
export type SendCoinInput = {
  /** 수량 */
  amount: Scalars['Float']['input'];
  /** 코인 아이디 */
  coin_id: CoinTypeEnum;
  /** 지갑 주소 */
  wallet_address: Scalars['String']['input'];
};

/** 문자 인증 코드 보내기 - 아이디, 비밀번호 찾기 */
export type SendSmsCodeByGuestInput = {
  /** 국번 */
  country_code: Scalars['String']['input'];
  /** 이메일 */
  email: InputMaybe<Scalars['String']['input']>;
  /** 휴대폰 번호 */
  phone_number: Scalars['String']['input'];
};

/** 문자 인증 코드 보내기 Input */
export type SendSmsCodeInput = {
  /** 국번 */
  country_code: Scalars['String']['input'];
  /** 휴대폰 번호 */
  phone_number: Scalars['String']['input'];
};

export type Site = {
  __typename?: 'Site';
  /** 매도 호가 증가 */
  ask_plus: Maybe<Scalars['Float']['output']>;
  /** 작성자 수수료 */
  author_fee: Maybe<Scalars['Float']['output']>;
  /** 매수 호가 감소 */
  bid_minus: Maybe<Scalars['Float']['output']>;
  /** 전체 수수료 */
  fee: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  /** 전체 추천인 리워드 */
  invite_reward: Maybe<Scalars['Float']['output']>;
  /** 추천인 리워드1 (1뎁스) */
  invite_reward1: Maybe<Scalars['Float']['output']>;
  /** 추천인 리워드2 (2뎁스) */
  invite_reward2: Maybe<Scalars['Float']['output']>;
  /** 최소 거래 수량 */
  minimum_amount: Maybe<Scalars['Float']['output']>;
  /** 플랫폼 수수료 */
  platform_fee: Maybe<Scalars['Float']['output']>;
};

export type SiteResponse = {
  __typename?: 'SiteResponse';
  /** 사이트 정보 */
  data: Maybe<Site>;
  /** 메시지 */
  message: Scalars['String']['output'];
  /** 상태 값 */
  status: Scalars['String']['output'];
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type Thumbnail = {
  __typename?: 'Thumbnail';
  id: Scalars['ID']['output'];
  url: Maybe<Scalars['String']['output']>;
};

/** 거래 글 */
export type Transaction = {
  __typename?: 'Transaction';
  /** 계좌번호 */
  account_number: Maybe<Scalars['String']['output']>;
  /** 계좌 타입 */
  account_type: Maybe<UserAccountType>;
  /** 은행 */
  bank: Maybe<Scalars['String']['output']>;
  /** 코인 아이디 */
  coin_id: Maybe<Scalars['Int']['output']>;
  /** 생성일 */
  created_at: Maybe<Scalars['DateTime']['output']>;
  /** 통화 아이디 */
  currency_id: Maybe<Scalars['Int']['output']>;
  /** 예금주 */
  depositor: Maybe<Scalars['String']['output']>;
  /** 길드 아이디 */
  guild_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  /** 링크 */
  link: Maybe<Scalars['String']['output']>;
  /** 파트너 코드 */
  p_code: Maybe<Scalars['String']['output']>;
  /** 남은 수량 */
  remaining_amount: Maybe<Scalars['Float']['output']>;
  /** 슈퍼 파트너 코드 */
  sp_code: Maybe<Scalars['String']['output']>;
  /** 총 수량 */
  total_amount: Maybe<Scalars['Float']['output']>;
  /** 타입 */
  type: Maybe<TransactionTypeEnum>;
  /** 유저 코드 */
  u_code: Maybe<Scalars['String']['output']>;
  /** 단가 */
  unit_price: Maybe<Scalars['Float']['output']>;
  /** 수정일 */
  updated_at: Maybe<Scalars['DateTime']['output']>;
  /** 작성자 */
  user: Maybe<User>;
  /** 유저 아이디 */
  user_id: Maybe<Scalars['Int']['output']>;
  /** 공개 범위 */
  visibility: Maybe<VisibilityEnum>;
};

/** A paginated list of Transaction items. */
export type TransactionPaginator = {
  __typename?: 'TransactionPaginator';
  /** A list of Transaction items. */
  data: Array<Transaction>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** 거래 글 결과 */
export type TransactionResponse = {
  __typename?: 'TransactionResponse';
  /** 데이터 */
  data: Maybe<Transaction>;
  /** 메시지 */
  message: Maybe<Scalars['String']['output']>;
  /** 상태 값 */
  status: Maybe<Scalars['String']['output']>;
};

export enum TransactionTypeEnum {
  /** 전체 */
  All = 'ALL',
  /** 구매 */
  Buy = 'BUY',
  /** 판매 */
  Sell = 'SELL'
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type UnreadUserTransactionCountResponse = {
  __typename?: 'UnreadUserTransactionCountResponse';
  /** 구매 탭 카운트 */
  buy_unread_count: Maybe<Scalars['Int']['output']>;
  /** 내 거래 탭 카운트 */
  my_unread_count: Maybe<Scalars['Int']['output']>;
  /** 판매 탭 카운트 */
  sell_unread_count: Maybe<Scalars['Int']['output']>;
  /** 총 카운트 */
  total_unread_count: Maybe<Scalars['Int']['output']>;
};

/** 인증 단계 업데이트 Input */
export type UpdateAuthStepInput = {
  /** 인증 단계 */
  auth_step: AuthStepEnum;
  id: Scalars['ID']['input'];
};

export type UpdateCoinInput = {
  coin_id: CoinTypeEnum;
  /** 활성화 여부 */
  is_active: InputMaybe<Scalars['Boolean']['input']>;
  /** 출금 수수료 가중치 */
  withdraw_fee_weight: InputMaybe<Scalars['Float']['input']>;
};

/** Faq 수정 input */
export type UpdateFaqInput = {
  /** 내용 */
  content: InputMaybe<Scalars['String']['input']>;
  /** 삭제할 이미지 아이디 배열 */
  deleteImages: InputMaybe<Array<Scalars['Int']['input']>>;
  /** 삭제할 썸네일 아이디 */
  deleteThumbnail: InputMaybe<Scalars['Int']['input']>;
  /** 노출 종료일 */
  ended_at: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ID']['input'];
  /** 업로드된 이미지 아이디 배열 */
  images: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Faq 노출 여부 */
  is_active: InputMaybe<Scalars['Int']['input']>;
  /** 상단 고정 여부 */
  is_fixed: InputMaybe<Scalars['Int']['input']>;
  /** 언어 */
  locale: InputMaybe<LocaleStatus>;
  /** 노출 시작일 */
  started_at: InputMaybe<Scalars['DateTime']['input']>;
  /** 업로드된 썸네일 아이디 */
  thumbnail: InputMaybe<Scalars['Int']['input']>;
  /** 제목 */
  title: InputMaybe<Scalars['String']['input']>;
  /** 타입 (1: 지갑 관련, 2: 서비스 관련) */
  type: FaqTypeEnum;
};

/** 길드 수정 Input */
export type UpdateGuildInput = {
  /** 설명 */
  description: InputMaybe<Scalars['String']['input']>;
  /** 가입 방식 */
  is_approved: InputMaybe<ApprovedEnum>;
  /** 이름 */
  name: InputMaybe<Scalars['String']['input']>;
  /** 공개 여부 */
  visibility: InputMaybe<VisibilityEnum>;
};

/** 이미지 수정 Input */
export type UpdateImageInput = {
  /** 이미지 */
  image: InputMaybe<Scalars['Upload']['input']>;
};

/** 언어 설정 수정 input */
export type UpdateLocaleInput = {
  /** 언어 */
  locale: LocaleStatus;
};

/** 공지사항 수정 input */
export type UpdateNoticeInput = {
  /** 내용 */
  content: InputMaybe<Scalars['String']['input']>;
  /** 삭제할 이미지 아이디 배열 */
  deleteImages: InputMaybe<Array<Scalars['Int']['input']>>;
  /** 삭제할 썸네일 아이디 */
  deleteThumbnail: InputMaybe<Scalars['Int']['input']>;
  /** 노출 종료일 */
  ended_at: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ID']['input'];
  /** 업로드된 이미지 아이디 배열 */
  images: InputMaybe<Array<Scalars['Int']['input']>>;
  /** 공지사항 노출 여부 */
  is_active: InputMaybe<Scalars['Int']['input']>;
  /** 상단 고정 여부 */
  is_fixed: InputMaybe<Scalars['Int']['input']>;
  /** 언어 */
  locale: InputMaybe<LocaleStatus>;
  /** 노출 시작일 */
  started_at: InputMaybe<Scalars['DateTime']['input']>;
  /** 업로드된 썸네일 아이디 */
  thumbnail: InputMaybe<Scalars['Int']['input']>;
  /** 제목 */
  title: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePartnerInput = {
  /** 에이전트 수수료 */
  agent_fee: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  /** 이름 */
  name: InputMaybe<Scalars['String']['input']>;
  /** 비밀번호 */
  password: InputMaybe<Scalars['String']['input']>;
  /** 출금 수수료 */
  withdraw_fee: InputMaybe<Scalars['Float']['input']>;
};

/** 사이트 설정 수정 Input */
export type UpdateSiteInput = {
  /** 매도 호가 증가 */
  ask_plus: InputMaybe<Scalars['Float']['input']>;
  /** 작성자 수수료 */
  author_fee: InputMaybe<Scalars['Float']['input']>;
  /** 매수 호가 감소 */
  bid_minus: InputMaybe<Scalars['Float']['input']>;
  /** 추천인 리워드1 */
  invite_reward1: InputMaybe<Scalars['Float']['input']>;
  /** 추천인 리워드2 */
  invite_reward2: InputMaybe<Scalars['Float']['input']>;
  /** 최소 거래 수량 */
  minimum_amount: InputMaybe<Scalars['Float']['input']>;
  /** 플랫폼 수수료 */
  platform_fee: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateSuperPartnerInput = {
  /** 에이전트 수수료 */
  agent_fee: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  /** 이름 */
  name: InputMaybe<Scalars['String']['input']>;
  /** 비밀번호 */
  password: InputMaybe<Scalars['String']['input']>;
  /** 출금 수수료 */
  withdraw_fee: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateTransactionInput = {
  /** 계좌번호 */
  account_number: InputMaybe<Scalars['String']['input']>;
  /** 계좌 타입 */
  account_type: InputMaybe<UserAccountType>;
  /** 은행 */
  bank: InputMaybe<Scalars['String']['input']>;
  /** 예금주 */
  depositor: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  /** 링크 */
  link: InputMaybe<Scalars['String']['input']>;
  /** 단가 */
  unit_price: InputMaybe<Scalars['Float']['input']>;
  /** 공개 여부 */
  visibility: InputMaybe<VisibilityEnum>;
};

export type UpdateUserAccountInput = {
  /** 계좌번호 */
  account_number: InputMaybe<Scalars['String']['input']>;
  /** 은행명 */
  bank: InputMaybe<Scalars['String']['input']>;
  /** 예금주 */
  depositor: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  /** 대표 여부 */
  is_default: InputMaybe<Scalars['Boolean']['input']>;
  /** 링크 (2:페이) */
  link: InputMaybe<Scalars['String']['input']>;
  /** 별칭 */
  name: InputMaybe<Scalars['String']['input']>;
  /** 타입 (1:은행 2:페이 3:상품권) */
  type: InputMaybe<UserAccountType>;
};

export type UpdateUserExternalWalletInput = {
  /** 코인 아이디 */
  coin_id: InputMaybe<CoinTypeEnum>;
  id: Scalars['ID']['input'];
  /** 별칭 */
  name: InputMaybe<Scalars['String']['input']>;
  /** 지갑 주소 */
  wallet_address: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserTransactionInput = {
  /** 계좌번호 */
  account_number: InputMaybe<Scalars['String']['input']>;
  /** 계좌 타입 */
  account_type: InputMaybe<UserAccountType>;
  /** 은행 */
  bank: InputMaybe<Scalars['String']['input']>;
  /** 예금주 */
  depositor: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  /** 링크 */
  link: InputMaybe<Scalars['String']['input']>;
  /** 요청 수량 */
  request_amount: InputMaybe<Scalars['Float']['input']>;
  /** 요청 금액 */
  request_price: InputMaybe<Scalars['Float']['input']>;
  /** 상태 */
  status: InputMaybe<UserTransactionStatusEnum>;
  /** 거래 아이디 */
  transaction_id: InputMaybe<Scalars['Int']['input']>;
  /** 단가 */
  unit_price: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateUserTransactionStatusInput = {
  id: Scalars['ID']['input'];
  /** 보낸 사람 */
  sender: InputMaybe<Scalars['String']['input']>;
  /** 상태 */
  status: UserTransactionStatusEnum;
  /** 중지 이유 */
  stop_reason: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  /** 국가 */
  country: Maybe<Scalars['String']['output']>;
  /** 등록일 */
  created_at: Scalars['DateTime']['output'];
  /** 통화 아이디 */
  currency_id: Maybe<CurrencyEnum>;
  /** 이메일 */
  email: Scalars['String']['output'];
  /** 길드 아이디 */
  guild_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  /** KYC 이미지 */
  kycImage: Maybe<Image>;
  /** 언어 */
  locale: Maybe<Scalars['String']['output']>;
  /** 내 코드 */
  my_code: Maybe<Scalars['String']['output']>;
  /** 이름 */
  name: Maybe<Scalars['String']['output']>;
  /** 파트너 코드 */
  p_code: Maybe<Scalars['String']['output']>;
  /** 포인트 */
  point: Maybe<Scalars['Float']['output']>;
  /** 역할 */
  role: Maybe<Scalars['String']['output']>;
  /** 샌드버드 아이디 */
  sendbird_id: Maybe<Scalars['String']['output']>;
  /** 슈퍼 파트너 코드 */
  sp_code: Maybe<Scalars['String']['output']>;
  /** 상점 등록 이미지 */
  storeImage: Maybe<Image>;
  /** 추천인 코드 */
  u_code: Maybe<Scalars['String']['output']>;
  /** 수정일 */
  updated_at: Scalars['DateTime']['output'];
  /** 유저 상세 정보 */
  userInfo: Maybe<UserInfo>;
  /** UUID */
  uuid: Scalars['String']['output'];
};

/** 유저 계좌 정보 */
export type UserAccount = {
  __typename?: 'UserAccount';
  /** 계좌번호 (1:은행) */
  account_number: Maybe<Scalars['String']['output']>;
  /** 은행명 */
  bank: Maybe<Scalars['String']['output']>;
  /** 등록일 */
  created_at: Maybe<Scalars['DateTime']['output']>;
  /** 예금주 */
  depositor: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 대표 여부 */
  is_default: Maybe<Scalars['Boolean']['output']>;
  /** 링크 (2:페이) */
  link: Maybe<Scalars['String']['output']>;
  /** 별칭 */
  name: Maybe<Scalars['String']['output']>;
  /** 타입 (1:은행 2:페이 3:상품권) */
  type: Maybe<UserAccountType>;
  /** 수정일 */
  updated_at: Maybe<Scalars['DateTime']['output']>;
  /** 유저 아이디 */
  user_id: Maybe<Scalars['Int']['output']>;
};

export enum UserAccountType {
  /** 은행 */
  Bank = 'BANK',
  /** 채팅 */
  Chat = 'CHAT',
  /** 상품권 */
  Gift = 'GIFT',
  /** 페이 */
  Pay = 'PAY'
}

/** 유저 외부(출금) 지갑 정보 */
export type UserExternalWallet = {
  __typename?: 'UserExternalWallet';
  /** 코인 아이디 */
  coin_id: Maybe<CoinTypeEnum>;
  /** 등록일 */
  created_at: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** 별칭 */
  name: Maybe<Scalars['String']['output']>;
  /** 수정일 */
  updated_at: Maybe<Scalars['DateTime']['output']>;
  /** 유저 아이디 */
  user_id: Maybe<Scalars['Int']['output']>;
  /** 지갑 주소 */
  wallet_address: Maybe<Scalars['String']['output']>;
};

export type UserInfo = {
  __typename?: 'UserInfo';
  /** 모든 주문 */
  all_transaction: Maybe<Scalars['Int']['output']>;
  /** 인증 단계 */
  auth_step: Scalars['Int']['output'];
  /** 구매 주문 */
  buy_transaction: Maybe<Scalars['Int']['output']>;
  /** 취소 주문 */
  canceled_transaction: Maybe<Scalars['Int']['output']>;
  /** 완료 주문 */
  completed_transaction: Maybe<Scalars['Int']['output']>;
  /** 완료율 */
  completion_rate: Maybe<Scalars['Float']['output']>;
  /** 국가 코드 */
  country_code: Maybe<Scalars['String']['output']>;
  /** 등록일 */
  created_at: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** 레벨 */
  level: Maybe<Scalars['Int']['output']>;
  /** 휴대폰 번호 */
  phone_number: Maybe<Scalars['String']['output']>;
  /** 판매 주문 */
  sell_transaction: Maybe<Scalars['Int']['output']>;
  /** SMS 문자 코드 */
  sms_code: Maybe<Scalars['String']['output']>;
  /** SMS 문자 코드 만료 시간 */
  sms_code_expired_at: Maybe<Scalars['DateTime']['output']>;
  /** 수정일 */
  updated_at: Maybe<Scalars['DateTime']['output']>;
  /** 유저 아이디 */
  user_id: Maybe<Scalars['Int']['output']>;
};

/** 유저 내부(입금) 지갑 정보 */
export type UserInternalWallet = {
  __typename?: 'UserInternalWallet';
  /** 코인 아이디 */
  coin_id: Maybe<CoinTypeEnum>;
  /** 등록일 */
  created_at: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** 마지막 입금일 */
  last_received_at: Maybe<Scalars['DateTime']['output']>;
  /** 프라이빗 키 */
  private_key: Maybe<Scalars['String']['output']>;
  /** 수정일 */
  updated_at: Maybe<Scalars['DateTime']['output']>;
  /** 유저 아이디 */
  user_id: Maybe<Scalars['Int']['output']>;
  /** 지갑 주소 */
  wallet_address: Maybe<Scalars['String']['output']>;
};

/** A paginated list of User items. */
export type UserPaginator = {
  __typename?: 'UserPaginator';
  /** A list of User items. */
  data: Array<User>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** 유저 포인트 정보 */
export type UserPoint = {
  __typename?: 'UserPoint';
  id: Scalars['ID']['output'];
  /** 락 포인트 */
  lock_point: Maybe<Scalars['Float']['output']>;
  /** 포인트 */
  point: Maybe<Scalars['Float']['output']>;
  /** 유저 아이디 */
  user_id: Maybe<Scalars['Int']['output']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  /** 유저 정보 */
  data: Maybe<User>;
  /** 메시지 */
  message: Scalars['String']['output'];
  /** 상태 값 */
  status: Scalars['String']['output'];
};

/** 거래 신청 내역 */
export type UserTransaction = {
  __typename?: 'UserTransaction';
  /** 계좌번호 */
  account_number: Maybe<Scalars['String']['output']>;
  /** 거래 타입 */
  account_type: Maybe<UserAccountType>;
  /** 에이전트 수수료 */
  agent_fee: Maybe<Scalars['Float']['output']>;
  /** 작성자 */
  author: Maybe<User>;
  /** 작성자 수수료 */
  author_fee: Maybe<Scalars['Float']['output']>;
  /** 은행 */
  bank: Maybe<Scalars['String']['output']>;
  /** 채팅 메시지 정보 */
  chatMessage: Maybe<ChatMessage>;
  /** 생성일 */
  created_at: Maybe<Scalars['DateTime']['output']>;
  /** 예금주 */
  depositor: Maybe<Scalars['String']['output']>;
  /** 길드 아이디 */
  guild_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  /** 거래 중지 이미지 */
  images: Maybe<Array<Maybe<Image>>>;
  /** 링크 */
  link: Maybe<Scalars['String']['output']>;
  /** 파트너 코드 */
  p_code: Maybe<Scalars['String']['output']>;
  /** 지급 수량 */
  payment_amount: Maybe<Scalars['Float']['output']>;
  /** 플랫폼 수수료 */
  platform_fee: Maybe<Scalars['Float']['output']>;
  /** 요청 수량 */
  request_amount: Maybe<Scalars['Float']['output']>;
  /** 요청 금액 */
  request_price: Maybe<Scalars['Float']['output']>;
  /** 보낸사람 */
  sender: Maybe<Scalars['String']['output']>;
  /** 슈퍼 파트너 코드 */
  sp_code: Maybe<Scalars['String']['output']>;
  /** 상태 */
  status: Maybe<UserTransactionStatusEnum>;
  /** 중지 이유 */
  stop_reason: Maybe<Scalars['String']['output']>;
  /** 총 수수료 */
  total_fee: Maybe<Scalars['Float']['output']>;
  /** 거래 글 */
  transaction: Maybe<Transaction>;
  /** 거래 아이디 */
  transaction_id: Maybe<Scalars['Int']['output']>;
  /** 타입 */
  type: Maybe<TransactionTypeEnum>;
  /** 유저 코드 */
  u_code: Maybe<Scalars['String']['output']>;
  /** 단가 */
  unit_price: Maybe<Scalars['Float']['output']>;
  /** 읽지 않음 여부 */
  unread: Maybe<Scalars['Boolean']['output']>;
  /** 수정일 */
  updated_at: Maybe<Scalars['DateTime']['output']>;
  /** 신청자 */
  user: Maybe<User>;
  /** 유저 아이디 */
  user_id: Maybe<Scalars['Int']['output']>;
};

/** A paginated list of UserTransaction items. */
export type UserTransactionPaginator = {
  __typename?: 'UserTransactionPaginator';
  /** A list of UserTransaction items. */
  data: Array<UserTransaction>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** 거래 신청 내역 결과 */
export type UserTransactionResponse = {
  __typename?: 'UserTransactionResponse';
  /** 데이터 */
  data: Maybe<UserTransaction>;
  /** 메시지 */
  message: Maybe<Scalars['String']['output']>;
  /** 상태 값 */
  status: Maybe<Scalars['String']['output']>;
};

export enum UserTransactionStatusEnum {
  /** 전체 */
  All = 'ALL',
  /** 거래 취소 */
  Canceled = 'CANCELED',
  /** 거래 완료 - LV4 */
  Completed = 'COMPLETED',
  /** 구매: 입금 완료, 판매: 전송 완료 - LV3 */
  Deposit = 'DEPOSIT',
  /** 구매: 입금 대기, 판매: 전송 대기 */
  Pending = 'PENDING',
  /** 거래 중지 */
  Stopped = 'STOPPED'
}

/** 거래 신청 탭 구분 */
export enum UserTransactionTabEnum {
  /** 전체 */
  All = 'ALL',
  /** 거래 완료: COMPLETED, CANCELED */
  Completed = 'COMPLETED',
  /** 거래중: PENDING, DEPOSIT, STOPPED */
  Pending = 'PENDING'
}

/** 유저 지갑 히스토리 */
export type UserWalletHistory = {
  __typename?: 'UserWalletHistory';
  /** 에이전트 출금 수수료 */
  agent_withdraw_fee: Maybe<Scalars['Float']['output']>;
  /** 수량 */
  amount: Maybe<Scalars['Float']['output']>;
  /** 코인 아이디 */
  coin_id: Maybe<CoinTypeEnum>;
  /** 코인 출금 수수료 */
  coin_withdraw_fee: Maybe<Scalars['Float']['output']>;
  /** 내용(다국어 처리) */
  content: Maybe<Scalars['String']['output']>;
  /** 등록일 */
  created_at: Maybe<Scalars['DateTime']['output']>;
  /** 이메일 */
  email: Maybe<Scalars['String']['output']>;
  /** 보내는 지갑 주소 */
  from_address: Maybe<Scalars['String']['output']>;
  /** 길드 아이디 */
  guild_id: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  /** 이미지 경로 */
  image: Maybe<Scalars['String']['output']>;
  /** 파트너 코드 */
  p_code: Maybe<Scalars['String']['output']>;
  /** 받는 사람 */
  receiver: Maybe<Scalars['String']['output']>;
  /** 보내는 사람 */
  sender: Maybe<Scalars['String']['output']>;
  /** 슈퍼 파트너 코드 */
  sp_code: Maybe<Scalars['String']['output']>;
  /** 상태 값 */
  status: Maybe<UserWalletHistoryStatusEnum>;
  /** 제목(다국어 처리) */
  title: Maybe<Scalars['String']['output']>;
  /** 받는 지갑 주소 */
  to_address: Maybe<Scalars['String']['output']>;
  /** 총 출금 수수료 */
  total_withdraw_fee: Maybe<Scalars['Float']['output']>;
  /** 트랜잭션 아이디 */
  tx_id: Maybe<Scalars['String']['output']>;
  /** 타입 1:입금 2:출금 3:리워드 */
  type: Maybe<UserWalletHistoryType>;
  /** 유저 코드 */
  u_code: Maybe<Scalars['String']['output']>;
  /** 수정일 */
  updated_at: Maybe<Scalars['DateTime']['output']>;
  /** 유저 아이디 */
  user_id: Maybe<Scalars['Int']['output']>;
  /** 거래 신청 아이디 */
  user_transaction_id: Maybe<Scalars['Int']['output']>;
};

/** 조건 검색 */
export enum UserWalletHistoryColumn {
  /** 수량 */
  Amount = 'AMOUNT',
  /** 내용 */
  Content = 'CONTENT'
}

/** A paginated list of UserWalletHistory items. */
export type UserWalletHistoryPaginator = {
  __typename?: 'UserWalletHistoryPaginator';
  /** A list of UserWalletHistory items. */
  data: Array<UserWalletHistory>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum UserWalletHistoryReviewEnum {
  /** 취소 */
  Canceled = 'CANCELED',
  /** 완료 */
  Completed = 'COMPLETED'
}

/** 유저 지갑 상태 */
export enum UserWalletHistoryStatusEnum {
  /** 취소 */
  Canceled = 'CANCELED',
  /** 완료 */
  Completed = 'COMPLETED',
  /** 대기 */
  Pending = 'PENDING'
}

/** 유저 지갑 히스토리 타입 */
export enum UserWalletHistoryType {
  /** 전체 */
  All = 'ALL',
  /** 출금 */
  Minus = 'MINUS',
  /** 입금 */
  Plus = 'PLUS',
  /** 리워드 */
  Reward = 'REWARD'
}

/** 회원가입 이메일 인증 input */
export type VerifyEmailInput = {
  token: Scalars['String']['input'];
};

/** 공개 여부 */
export enum VisibilityEnum {
  /** 비공개 */
  Private = 'PRIVATE',
  /** 공개 */
  Public = 'PUBLIC'
}

/** Dynamic WHERE conditions for queries. */
export type WhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND: InputMaybe<Array<WhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS: InputMaybe<WhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR: InputMaybe<Array<WhereConditions>>;
  /** The column that is used for the condition. */
  column: InputMaybe<Scalars['String']['input']>;
  /** The operator that is used for the condition. */
  operator: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE condition queries. */
export type WhereConditionsRelation = {
  /** The amount to test. */
  amount: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition: InputMaybe<WhereConditions>;
  /** The comparison operator to test against the amount. */
  operator: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'LoginAuthPayload', status: string, message: string } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginAuthPayload', status: string, message: string, access_token: string, refresh_token: string, expires_in: string, token_type: string, user: { __typename?: 'User', id: string, uuid: string, email: string, name: string, sendbird_id: string, guild_id: number, sp_code: string, p_code: string, u_code: string, my_code: string, locale: string, country: string, currency_id: CurrencyEnum, point: number, created_at: string, updated_at: string, role: string, userInfo: { __typename?: 'UserInfo', id: string, user_id: number, auth_step: number, sms_code: string, sms_code_expired_at: string, country_code: string, phone_number: string, all_transaction: number, completed_transaction: number, canceled_transaction: number, buy_transaction: number, sell_transaction: number, level: number, completion_rate: number, created_at: string, updated_at: string } } } };

export type RefreshTokenMutationVariables = Exact<{
  refresh_token: Scalars['String']['input'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'RefreshAuthPayload', status: string, message: string, access_token: string, expires_in: string, token_type: string } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, uuid: string, email: string, name: string, sendbird_id: string, guild_id: number, sp_code: string, p_code: string, u_code: string, my_code: string, locale: string, country: string, currency_id: CurrencyEnum, point: number, created_at: string, updated_at: string, role: string, userInfo: { __typename?: 'UserInfo', id: string, user_id: number, auth_step: number, sms_code: string, sms_code_expired_at: string, country_code: string, phone_number: string, all_transaction: number, completed_transaction: number, canceled_transaction: number, buy_transaction: number, sell_transaction: number, level: number, completion_rate: number, created_at: string, updated_at: string } } };

export type ChangeLocaleMutationVariables = Exact<{
  input: UpdateLocaleInput;
}>;


export type ChangeLocaleMutation = { __typename?: 'Mutation', changeLocale: { __typename?: 'UserResponse', status: string, message: string, data: { __typename?: 'User', locale: string } } };

export type AccountResponseFragmentFragment = { __typename?: 'AccountResponse', status: string, message: string };

export type AdminFragmentFragment = { __typename?: 'Admin', id: string, name: string, role: string };

export type AdminActionFragmentFragment = { __typename?: 'AdminAction', id: string, admin_id: number, action: string, ip: string, created_at: string, updated_at: string };

export type AdminAuthPayloadFragmentFragment = { __typename?: 'AdminAuthPayload', status: string, message: string, access_token: string, refresh_token: string, expires_in: string, token_type: string };

export type AgentAmountFragmentFragment = { __typename?: 'AgentAmount', name: string, code: string, agent_fee: number };

export type AgentAmountResponseFragmentFragment = { __typename?: 'AgentAmountResponse', status: string, message: string };

export type AmountFragmentFragment = { __typename?: 'Amount', name: string, comment: string, amount: number };

export type AmountResponseFragmentFragment = { __typename?: 'AmountResponse', status: string, message: string };

export type CacheResponseFragmentFragment = { __typename?: 'CacheResponse', status: string, message: string, data: string };

export type CalculateSendCoinResponseFragmentFragment = { __typename?: 'CalculateSendCoinResponse', status: string, message: string, amount: number, total_withdraw_fee: number, real_amount: number };

export type CalculateUsdtResponseFragmentFragment = { __typename?: 'CalculateUSDTResponse', total_fee: number, platform_fee: number, author_fee: number, agent_fee: number, request_price: number, request_amount: number, payment_amount: number };

export type ChatMessageFragmentFragment = { __typename?: 'ChatMessage', id: string, channel_name: string, channel_url: string, author_id: string, user_id: string, saved_at: string, created_at: string, updated_at: string };

export type ChatMessageItemFragmentFragment = { __typename?: 'ChatMessageItem', user_id: string, message: string, created_at: string };

export type CoinFragmentFragment = { __typename?: 'Coin', id: string, name: string, symbol: string, network: string, withdraw_fee_weight: number, is_active: boolean, created_at: string, updated_at: string };

export type CoinCurrencyFragmentFragment = { __typename?: 'CoinCurrency', id: string, coin_id: CoinEnum, currency_id: CurrencyEnum, bid: number, ask: number, created_at: string, updated_at: string };

export type CountResponseFragmentFragment = { __typename?: 'CountResponse', status: string, message: string, count: number };

export type CurrencyFragmentFragment = { __typename?: 'Currency', id: string, name: string, symbol: string, created_at: string, updated_at: string };

export type DeviceTokenFragmentFragment = { __typename?: 'DeviceToken', id: string, token: string, platform: PlatformEnum, last_seen_at: string, created_at: string, updated_at: string };

export type ExternalWalletResponseFragmentFragment = { __typename?: 'ExternalWalletResponse', status: string, message: string };

export type FaqFragmentFragment = { __typename?: 'Faq', id: string, locale: LocaleStatus, type: FaqTypeEnum, title: string, content: string, is_fixed: number, is_active: number, started_at: string, ended_at: string, created_at: string, updated_at: string };

export type GetMarketCurrencyResponseFragmentFragment = { __typename?: 'GetMarketCurrencyResponse', symbol: string, en_name: string, ko_name: string, bid: number, ask: number };

export type GuildFragmentFragment = { __typename?: 'Guild', id: string, user_id: number, name: string, description: string, is_approved: ApprovedEnum, visibility: VisibilityEnum, member_count: number, pending_transaction_count: number, completed_transaction_count: number, total_transaction_amount: number, master_email: string, created_at: string, updated_at: string };

export type GuildResponseFragmentFragment = { __typename?: 'GuildResponse', status: string, message: string };

export type GuildWaitingFragmentFragment = { __typename?: 'GuildWaiting', id: string, guild_id: number, user_id: number, status: GuildWaitingStatusEnum, message: string, created_at: string, updated_at: string };

export type ImageFragmentFragment = { __typename?: 'Image', id: string, url: string, thumb_small_url: string, thumb_medium_url: string, thumb_large_url: string };

export type InternalWalletResponseFragmentFragment = { __typename?: 'InternalWalletResponse', status: string, message: string };

export type LoginAuthPayloadFragmentFragment = { __typename?: 'LoginAuthPayload', status: string, message: string, access_token: string, refresh_token: string, expires_in: string, token_type: string };

export type MessageResponseFragmentFragment = { __typename?: 'MessageResponse', status: string, message: string };

export type MyGuildResponseFragmentFragment = { __typename?: 'MyGuildResponse', guild_id: number, is_guild_waiting: boolean, is_guild_master: boolean };

export type NextFaqFragmentFragment = { __typename?: 'NextFaq', id: string, title: string };

export type NextNoticeFragmentFragment = { __typename?: 'NextNotice', id: string, title: string };

export type NoticeFragmentFragment = { __typename?: 'Notice', id: string, locale: LocaleStatus, title: string, content: string, is_fixed: number, is_active: number, started_at: string, ended_at: string, created_at: string, updated_at: string };

export type PaginatorInfoFragmentFragment = { __typename?: 'PaginatorInfo', count: number, currentPage: number, firstItem: number, hasMorePages: boolean, lastItem: number, lastPage: number, perPage: number, total: number };

export type PartnerFragmentFragment = { __typename?: 'Partner', id: string, name: string, sp_code: string, my_code: string, withdraw_fee: number, agent_fee: number, role: string };

export type PartnerAuthPayloadFragmentFragment = { __typename?: 'PartnerAuthPayload', status: string, message: string, access_token: string, refresh_token: string, expires_in: string, token_type: string };

export type PreviousFaqFragmentFragment = { __typename?: 'PreviousFaq', id: string, title: string };

export type PreviousNoticeFragmentFragment = { __typename?: 'PreviousNotice', id: string, title: string };

export type PushSendReportFragmentFragment = { __typename?: 'PushSendReport', successCount: number, failureCount: number, invalidTokens: Array<string> };

export type RefreshAuthPayloadFragmentFragment = { __typename?: 'RefreshAuthPayload', status: string, message: string, access_token: string, expires_in: string, token_type: string };

export type SiteFragmentFragment = { __typename?: 'Site', id: string, fee: number, platform_fee: number, author_fee: number, invite_reward: number, invite_reward1: number, invite_reward2: number, minimum_amount: number, bid_minus: number, ask_plus: number };

export type SiteResponseFragmentFragment = { __typename?: 'SiteResponse', status: string, message: string };

export type ThumbnailFragmentFragment = { __typename?: 'Thumbnail', id: string, url: string };

export type TransactionFragmentFragment = { __typename?: 'Transaction', id: string, user_id: number, type: TransactionTypeEnum, visibility: VisibilityEnum, coin_id: number, currency_id: number, unit_price: number, remaining_amount: number, total_amount: number, account_type: UserAccountType, bank: string, depositor: string, account_number: string, link: string, sp_code: string, p_code: string, u_code: string, guild_id: number, created_at: string, updated_at: string };

export type TransactionResponseFragmentFragment = { __typename?: 'TransactionResponse', status: string, message: string };

export type UnreadUserTransactionCountResponseFragmentFragment = { __typename?: 'UnreadUserTransactionCountResponse', total_unread_count: number, buy_unread_count: number, sell_unread_count: number, my_unread_count: number };

export type UserFragmentFragment = { __typename?: 'User', id: string, uuid: string, email: string, name: string, sendbird_id: string, guild_id: number, sp_code: string, p_code: string, u_code: string, my_code: string, locale: string, country: string, currency_id: CurrencyEnum, point: number, created_at: string, updated_at: string, role: string };

export type UserAccountFragmentFragment = { __typename?: 'UserAccount', id: string, user_id: number, name: string, type: UserAccountType, bank: string, depositor: string, account_number: string, link: string, is_default: boolean, created_at: string, updated_at: string };

export type UserExternalWalletFragmentFragment = { __typename?: 'UserExternalWallet', id: string, user_id: number, coin_id: CoinTypeEnum, name: string, wallet_address: string, created_at: string, updated_at: string };

export type UserInfoFragmentFragment = { __typename?: 'UserInfo', id: string, user_id: number, auth_step: number, sms_code: string, sms_code_expired_at: string, country_code: string, phone_number: string, all_transaction: number, completed_transaction: number, canceled_transaction: number, buy_transaction: number, sell_transaction: number, level: number, completion_rate: number, created_at: string, updated_at: string };

export type UserInternalWalletFragmentFragment = { __typename?: 'UserInternalWallet', id: string, user_id: number, coin_id: CoinTypeEnum, wallet_address: string, private_key: string, last_received_at: string, created_at: string, updated_at: string };

export type UserPointFragmentFragment = { __typename?: 'UserPoint', id: string, user_id: number, point: number, lock_point: number };

export type UserResponseFragmentFragment = { __typename?: 'UserResponse', status: string, message: string };

export type UserTransactionFragmentFragment = { __typename?: 'UserTransaction', id: string, user_id: number, transaction_id: number, type: TransactionTypeEnum, unit_price: number, request_amount: number, request_price: number, total_fee: number, platform_fee: number, author_fee: number, agent_fee: number, payment_amount: number, status: UserTransactionStatusEnum, sender: string, account_type: UserAccountType, bank: string, depositor: string, account_number: string, link: string, sp_code: string, p_code: string, u_code: string, guild_id: number, stop_reason: string, created_at: string, updated_at: string, unread: boolean };

export type UserTransactionResponseFragmentFragment = { __typename?: 'UserTransactionResponse', status: string, message: string };

export type UserWalletHistoryFragmentFragment = { __typename?: 'UserWalletHistory', id: string, user_id: number, email: string, type: UserWalletHistoryType, title: string, content: string, image: string, from_address: string, to_address: string, sender: string, receiver: string, user_transaction_id: number, tx_id: string, coin_id: CoinTypeEnum, amount: number, total_withdraw_fee: number, coin_withdraw_fee: number, agent_withdraw_fee: number, status: UserWalletHistoryStatusEnum, sp_code: string, p_code: string, u_code: string, guild_id: number, created_at: string, updated_at: string };

export const AccountResponseFragmentFragmentDoc = gql`
    fragment AccountResponseFragment on AccountResponse {
  status
  message
}
    `;
export const AdminFragmentFragmentDoc = gql`
    fragment AdminFragment on Admin {
  id
  name
  role
}
    `;
export const AdminActionFragmentFragmentDoc = gql`
    fragment AdminActionFragment on AdminAction {
  id
  admin_id
  action
  ip
  created_at
  updated_at
}
    `;
export const AdminAuthPayloadFragmentFragmentDoc = gql`
    fragment AdminAuthPayloadFragment on AdminAuthPayload {
  status
  message
  access_token
  refresh_token
  expires_in
  token_type
}
    `;
export const AgentAmountFragmentFragmentDoc = gql`
    fragment AgentAmountFragment on AgentAmount {
  name
  code
  agent_fee
}
    `;
export const AgentAmountResponseFragmentFragmentDoc = gql`
    fragment AgentAmountResponseFragment on AgentAmountResponse {
  status
  message
}
    `;
export const AmountFragmentFragmentDoc = gql`
    fragment AmountFragment on Amount {
  name
  comment
  amount
}
    `;
export const AmountResponseFragmentFragmentDoc = gql`
    fragment AmountResponseFragment on AmountResponse {
  status
  message
}
    `;
export const CacheResponseFragmentFragmentDoc = gql`
    fragment CacheResponseFragment on CacheResponse {
  status
  message
  data
}
    `;
export const CalculateSendCoinResponseFragmentFragmentDoc = gql`
    fragment CalculateSendCoinResponseFragment on CalculateSendCoinResponse {
  status
  message
  amount
  total_withdraw_fee
  real_amount
}
    `;
export const CalculateUsdtResponseFragmentFragmentDoc = gql`
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
export const ChatMessageFragmentFragmentDoc = gql`
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
export const ChatMessageItemFragmentFragmentDoc = gql`
    fragment ChatMessageItemFragment on ChatMessageItem {
  user_id
  message
  created_at
}
    `;
export const CoinFragmentFragmentDoc = gql`
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
export const CoinCurrencyFragmentFragmentDoc = gql`
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
export const CountResponseFragmentFragmentDoc = gql`
    fragment CountResponseFragment on CountResponse {
  status
  message
  count
}
    `;
export const CurrencyFragmentFragmentDoc = gql`
    fragment CurrencyFragment on Currency {
  id
  name
  symbol
  created_at
  updated_at
}
    `;
export const DeviceTokenFragmentFragmentDoc = gql`
    fragment DeviceTokenFragment on DeviceToken {
  id
  token
  platform
  last_seen_at
  created_at
  updated_at
}
    `;
export const ExternalWalletResponseFragmentFragmentDoc = gql`
    fragment ExternalWalletResponseFragment on ExternalWalletResponse {
  status
  message
}
    `;
export const FaqFragmentFragmentDoc = gql`
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
export const GetMarketCurrencyResponseFragmentFragmentDoc = gql`
    fragment GetMarketCurrencyResponseFragment on GetMarketCurrencyResponse {
  symbol
  en_name
  ko_name
  bid
  ask
}
    `;
export const GuildFragmentFragmentDoc = gql`
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
export const GuildResponseFragmentFragmentDoc = gql`
    fragment GuildResponseFragment on GuildResponse {
  status
  message
}
    `;
export const GuildWaitingFragmentFragmentDoc = gql`
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
export const ImageFragmentFragmentDoc = gql`
    fragment ImageFragment on Image {
  id
  url
  thumb_small_url
  thumb_medium_url
  thumb_large_url
}
    `;
export const InternalWalletResponseFragmentFragmentDoc = gql`
    fragment InternalWalletResponseFragment on InternalWalletResponse {
  status
  message
}
    `;
export const LoginAuthPayloadFragmentFragmentDoc = gql`
    fragment LoginAuthPayloadFragment on LoginAuthPayload {
  status
  message
  access_token
  refresh_token
  expires_in
  token_type
}
    `;
export const MessageResponseFragmentFragmentDoc = gql`
    fragment MessageResponseFragment on MessageResponse {
  status
  message
}
    `;
export const MyGuildResponseFragmentFragmentDoc = gql`
    fragment MyGuildResponseFragment on MyGuildResponse {
  guild_id
  is_guild_waiting
  is_guild_master
}
    `;
export const NextFaqFragmentFragmentDoc = gql`
    fragment NextFaqFragment on NextFaq {
  id
  title
}
    `;
export const NextNoticeFragmentFragmentDoc = gql`
    fragment NextNoticeFragment on NextNotice {
  id
  title
}
    `;
export const NoticeFragmentFragmentDoc = gql`
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
export const PaginatorInfoFragmentFragmentDoc = gql`
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
export const PartnerFragmentFragmentDoc = gql`
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
export const PartnerAuthPayloadFragmentFragmentDoc = gql`
    fragment PartnerAuthPayloadFragment on PartnerAuthPayload {
  status
  message
  access_token
  refresh_token
  expires_in
  token_type
}
    `;
export const PreviousFaqFragmentFragmentDoc = gql`
    fragment PreviousFaqFragment on PreviousFaq {
  id
  title
}
    `;
export const PreviousNoticeFragmentFragmentDoc = gql`
    fragment PreviousNoticeFragment on PreviousNotice {
  id
  title
}
    `;
export const PushSendReportFragmentFragmentDoc = gql`
    fragment PushSendReportFragment on PushSendReport {
  successCount
  failureCount
  invalidTokens
}
    `;
export const RefreshAuthPayloadFragmentFragmentDoc = gql`
    fragment RefreshAuthPayloadFragment on RefreshAuthPayload {
  status
  message
  access_token
  expires_in
  token_type
}
    `;
export const SiteFragmentFragmentDoc = gql`
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
export const SiteResponseFragmentFragmentDoc = gql`
    fragment SiteResponseFragment on SiteResponse {
  status
  message
}
    `;
export const ThumbnailFragmentFragmentDoc = gql`
    fragment ThumbnailFragment on Thumbnail {
  id
  url
}
    `;
export const TransactionFragmentFragmentDoc = gql`
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
export const TransactionResponseFragmentFragmentDoc = gql`
    fragment TransactionResponseFragment on TransactionResponse {
  status
  message
}
    `;
export const UnreadUserTransactionCountResponseFragmentFragmentDoc = gql`
    fragment UnreadUserTransactionCountResponseFragment on UnreadUserTransactionCountResponse {
  total_unread_count
  buy_unread_count
  sell_unread_count
  my_unread_count
}
    `;
export const UserFragmentFragmentDoc = gql`
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
export const UserAccountFragmentFragmentDoc = gql`
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
export const UserExternalWalletFragmentFragmentDoc = gql`
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
export const UserInfoFragmentFragmentDoc = gql`
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
export const UserInternalWalletFragmentFragmentDoc = gql`
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
export const UserPointFragmentFragmentDoc = gql`
    fragment UserPointFragment on UserPoint {
  id
  user_id
  point
  lock_point
}
    `;
export const UserResponseFragmentFragmentDoc = gql`
    fragment UserResponseFragment on UserResponse {
  status
  message
}
    `;
export const UserTransactionFragmentFragmentDoc = gql`
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
export const UserTransactionResponseFragmentFragmentDoc = gql`
    fragment UserTransactionResponseFragment on UserTransactionResponse {
  status
  message
}
    `;
export const UserWalletHistoryFragmentFragmentDoc = gql`
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
export const RegisterDocument = gql`
    mutation register($input: RegisterInput!) {
  register(input: $input) {
    status
    message
  }
}
    `;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export const LoginDocument = gql`
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
    ${LoginAuthPayloadFragmentFragmentDoc}
${UserFragmentFragmentDoc}
${UserInfoFragmentFragmentDoc}`;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export const RefreshTokenDocument = gql`
    mutation refreshToken($refresh_token: String!) {
  refreshToken(refresh_token: $refresh_token) {
    ...RefreshAuthPayloadFragment
  }
}
    ${RefreshAuthPayloadFragmentFragmentDoc}`;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *      refresh_token: // value for 'refresh_token'
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = ApolloReactCommon.MutationResult<RefreshTokenMutation>;
export const MeDocument = gql`
    query me {
  me {
    ...UserFragment
    userInfo {
      ...UserInfoFragment
    }
  }
}
    ${UserFragmentFragmentDoc}
${UserInfoFragmentFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
// @ts-ignore
export function useMeSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<MeQuery | undefined, MeQueryVariables>;
export function useMeSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<MeQuery | undefined, MeQueryVariables>;
export function useMeSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const ChangeLocaleDocument = gql`
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

/**
 * __useChangeLocaleMutation__
 *
 * To run a mutation, you first call `useChangeLocaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeLocaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeLocaleMutation, { data, loading, error }] = useChangeLocaleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeLocaleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeLocaleMutation, ChangeLocaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ChangeLocaleMutation, ChangeLocaleMutationVariables>(ChangeLocaleDocument, options);
      }
export type ChangeLocaleMutationHookResult = ReturnType<typeof useChangeLocaleMutation>;
export type ChangeLocaleMutationResult = ApolloReactCommon.MutationResult<ChangeLocaleMutation>;