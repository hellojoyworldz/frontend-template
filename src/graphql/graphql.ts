import { gql } from "@apollo/client";
import * as ApolloReactCommon from "@apollo/client/react";
import * as ApolloReactHooks from "@apollo/client/react";
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: { input: string; output: string };
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: { input: string; output: string };
  /** A datetime and timezone string in ISO 8601 format `Y-m-dTH:i:sO`, e.g. `2020-04-20T13:53:12+02:00`. */
  DateTimeTz: { input: string; output: string };
  /**
   * A datetime string in ISO 8601 format in UTC with nanoseconds
   * `YYYY-MM-DDTHH:mm:ss.SSSSSSZ`, e.g. `2020-04-20T16:20:04.000000Z`.
   */
  DateTimeUtc: { input: string; output: string };
  /**
   * Loose type that allows any value. Be careful when passing in large `Int` or `Float` literals,
   * as they may not be parsed correctly on the server side. Use `String` literals if you are
   * dealing with really large numbers to be on the safe side.
   */
  Mixed: { input: any; output: any };
  /** Can be used as an argument to upload files using https://github.com/jaydenseric/graphql-multipart-request-spec */
  Upload: { input: any; output: any };
};

/** 어드민 정보 */
export type Admin = {
  __typename?: "Admin";
  id: Scalars["ID"]["output"];
  /** 이름 */
  name: Scalars["String"]["output"];
  /** 역할 */
  role: Maybe<Scalars["String"]["output"]>;
};

/** 로그인 정보 */
export type AdminAuthPayload = {
  __typename?: "AdminAuthPayload";
  /** 액세스 토큰 */
  access_token: Maybe<Scalars["String"]["output"]>;
  /** 유저 정보 */
  admin: Maybe<Admin>;
  /** 액세스 토큰 만료 시간 */
  expires_in: Maybe<Scalars["String"]["output"]>;
  /** 메시지 */
  message: Scalars["String"]["output"];
  /** 리프레쉬 토큰 */
  refresh_token: Maybe<Scalars["String"]["output"]>;
  /** 상태 값 */
  status: Scalars["String"]["output"];
  /** 토큰 타입 */
  token_type: Maybe<Scalars["String"]["output"]>;
};

/** 어드민 로그인 Input */
export type AdminLoginInput = {
  /** 관리자 아이디 */
  name: Scalars["String"]["input"];
  /** 관리자 비밀번호 */
  password: Scalars["String"]["input"];
};

/** A paginated list of Admin items. */
export type AdminPaginator = {
  __typename?: "AdminPaginator";
  /** A list of Admin items. */
  data: Array<Admin>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** 관리자 거절 Input */
export type AdminRejectInput = {
  /** 로그인 아이디 */
  login_id: Scalars["String"]["input"];
};

export type AdminTicketInput = {
  /** 지급 일 수(최대: 100일) */
  days: Scalars["Int"]["input"];
  /** users.id */
  id: Scalars["ID"]["input"];
};

/** 인증 단계 */
export enum AuthStepEnum {
  /** 4단계 (관리자 승인) */
  Four = "FOUR",
  /** 1단계 (이메일 인증) */
  One = "ONE",
  /** 3단계 (관리자 거절) */
  Three = "THREE",
  /** 2단계 (승인 대기) */
  Two = "TWO",
  /** 0단계 (미인증) */
  Zero = "ZERO",
}

/** 봇 계정 정보 */
export type BotAccount = {
  __typename?: "BotAccount";
  /** API 키 */
  api_key: Maybe<Scalars["String"]["output"]>;
  /** 기본 주문 수량(XRP) */
  base_qty: Maybe<Scalars["Float"]["output"]>;
  /** 생성일 */
  created_at: Maybe<Scalars["DateTime"]["output"]>;
  /** 현재 추가 주문 */
  entries_count: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["ID"]["output"];
  /** 계정 활성화 상태 */
  is_active: Maybe<Scalars["Boolean"]["output"]>;
  /** 레버리지 배수 */
  leverage: Maybe<Scalars["Int"]["output"]>;
  /** 최대 물타기 진입 횟수 */
  max_entries: Maybe<Scalars["Int"]["output"]>;
  /** 계정 이름 */
  name: Maybe<Scalars["String"]["output"]>;
  /** 테스트넷 사용 여부 */
  sandbox: Maybe<Scalars["Boolean"]["output"]>;
  /** 시크릿 키 */
  secret_key: Maybe<Scalars["String"]["output"]>;
  /** 심볼 */
  symbol: Maybe<SymbolEnum>;
  /** 익절 비율 */
  tp_rate: Maybe<Scalars["Float"]["output"]>;
  /** 수정일 */
  updated_at: Maybe<Scalars["DateTime"]["output"]>;
};

/** 봇 포지션 */
export enum BotPositionEnum {
  Long = "LONG",
  Short = "SHORT",
}

export type BotResponse = {
  __typename?: "BotResponse";
  /** 데이터 */
  data: Maybe<Array<Maybe<BotAccount>>>;
  /** 메시지 */
  message: Scalars["String"]["output"];
  /** 상태 값 */
  status: Scalars["String"]["output"];
};

export type CacheResponse = {
  __typename?: "CacheResponse";
  /** 캐시 키 */
  data: Maybe<Scalars["String"]["output"]>;
  /** 메시지 */
  message: Scalars["String"]["output"];
  /** 상태 값 */
  status: Scalars["String"]["output"];
};

/** 이름 변경 Input */
export type ChangeNameInput = {
  name: Scalars["String"]["input"];
};

/** 패스워드 수정 input */
export type ChangePasswordInput = {
  /** 기존 비밀번호 */
  old_password: Scalars["String"]["input"];
  /** 새 비밀번호 */
  password: Scalars["String"]["input"];
  /** 새 비밀번호 확인 */
  password_confirmation: Scalars["String"]["input"];
};

/** 문자 인증 코드 보내기 Input */
export type CheckSmsCodeInput = {
  /** 국번 */
  country_code: Scalars["String"]["input"];
  /** 휴대폰 번호 */
  phone_number: Scalars["String"]["input"];
  /** 문자 인증 코드 */
  sms_code: Scalars["String"]["input"];
};

/** 코인 타입 */
export enum CoinTypeEnum {
  /** 테더(바이낸스) */
  Bnb = "BNB",
}

export type CountResponse = {
  __typename?: "CountResponse";
  /** 입금 카운트 */
  count: Maybe<Scalars["Int"]["output"]>;
  /** 메시지 */
  message: Maybe<Scalars["String"]["output"]>;
  /** 상태 값 */
  status: Maybe<Scalars["String"]["output"]>;
};

/** 어드민 권한 부여 Input */
export type CreateAdminInput = {
  /** 관리자 아이디 */
  name: Scalars["String"]["input"];
  /** 관리자 비밀번호 */
  password: Scalars["String"]["input"];
};

/** 거래소 API 연결 Input */
export type CreateBotAccountInput = {
  /** API 키 */
  api_key: Scalars["String"]["input"];
  /** SECRET 키 */
  secret_key: Scalars["String"]["input"];
};

/** Faq 등록 input */
export type CreateFaqInput = {
  /** 내용 */
  content: Scalars["String"]["input"];
  /** 노출 종료일 */
  ended_at: InputMaybe<Scalars["DateTime"]["input"]>;
  /** 업로드된 이미지 아이디 배열 */
  images: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** Faq 노출 여부 */
  is_active: InputMaybe<Scalars["Int"]["input"]>;
  /** 상단 고정 여부 */
  is_fixed: InputMaybe<Scalars["Int"]["input"]>;
  /** 언어 */
  locale: LocaleStatus;
  /** 노출 시작일 */
  started_at: InputMaybe<Scalars["DateTime"]["input"]>;
  /** 업로드된 썸네일 아이디 */
  thumbnail: InputMaybe<Scalars["Int"]["input"]>;
  /** 제목 */
  title: Scalars["String"]["input"];
  /** 타입 (1: 지갑 관련, 2: 서비스 관련) */
  type: FaqTypeEnum;
};

/** 공지사항 등록 input */
export type CreateNoticeInput = {
  /** 내용 */
  content: Scalars["String"]["input"];
  /** 노출 종료일 */
  ended_at: InputMaybe<Scalars["DateTime"]["input"]>;
  /** 업로드된 이미지 아이디 배열 */
  images: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** 공지사항 노출 여부 */
  is_active: InputMaybe<Scalars["Int"]["input"]>;
  /** 상단 고정 여부 */
  is_fixed: InputMaybe<Scalars["Int"]["input"]>;
  /** 언어 */
  locale: LocaleStatus;
  /** 노출 시작일 */
  started_at: InputMaybe<Scalars["DateTime"]["input"]>;
  /** 업로드된 썸네일 아이디 */
  thumbnail: InputMaybe<Scalars["Int"]["input"]>;
  /** 제목 */
  title: Scalars["String"]["input"];
};

export type CreatePartnerInput = {
  /** 수수료 */
  fee: Scalars["Float"]["input"];
  /** 메모1 */
  memo1: InputMaybe<Scalars["String"]["input"]>;
  /** 메모2 */
  memo2: InputMaybe<Scalars["String"]["input"]>;
  /** 이름 */
  name: Scalars["String"]["input"];
  /** 비밀번호 */
  password: Scalars["String"]["input"];
};

/** 티켓 생성 Input */
export type CreateTicketInput = {
  /** 보너스 일 수 */
  bonus_days: Scalars["Int"]["input"];
  /** 일 수 */
  days: Scalars["Int"]["input"];
  /** 이름 */
  name: Scalars["String"]["input"];
  /** 가격 */
  price: Scalars["Float"]["input"];
};

/** 내부 지갑 생성 Input */
export type CreateUserInternalWalletInput = {
  /** 코인 아이디 */
  coin_id: CoinTypeEnum;
};

export type DateRange = {
  from: Scalars["Date"]["input"];
  to: Scalars["Date"]["input"];
};

export type DateTimeRange = {
  from: Scalars["DateTime"]["input"];
  to: Scalars["DateTime"]["input"];
};

/** Faq 정보 */
export type Faq = {
  __typename?: "Faq";
  /** 생성자 */
  author: Admin;
  /** 내용 */
  content: Scalars["String"]["output"];
  /** 생성 시간 */
  created_at: Maybe<Scalars["DateTime"]["output"]>;
  /** 노출 종료 시간 */
  ended_at: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["ID"]["output"];
  /** 이미지 */
  images: Maybe<Array<Maybe<Image>>>;
  /** Faq 노출 여부 */
  is_active: Maybe<Scalars["Int"]["output"]>;
  /** 상단 고정 여부 */
  is_fixed: Maybe<Scalars["Int"]["output"]>;
  /** 언어 */
  locale: LocaleStatus;
  /** 다음 Faq */
  next: Maybe<NextFaq>;
  /** 이전 Faq */
  previous: Maybe<PreviousFaq>;
  /** 노출 시작 시간 */
  started_at: Maybe<Scalars["DateTime"]["output"]>;
  /** 썸네일 */
  thumbnail: Maybe<Thumbnail>;
  /** 제목 */
  title: Scalars["String"]["output"];
  /** 타입 (1: 지갑 관련, 2: 서비스 관련) */
  type: FaqTypeEnum;
  /** 수정 시간 */
  updated_at: Maybe<Scalars["DateTime"]["output"]>;
};

/** Faq 검색 항목 */
export enum FaqColumn {
  Content = "CONTENT",
  EndedAt = "ENDED_AT",
  StartedAt = "STARTED_AT",
  Title = "TITLE",
}

/** A paginated list of Faq items. */
export type FaqPaginator = {
  __typename?: "FaqPaginator";
  /** A list of Faq items. */
  data: Array<Faq>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum FaqTypeEnum {
  Service = "SERVICE",
  Wallet = "WALLET",
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
  value: InputMaybe<Scalars["Mixed"]["input"]>;
};

/** 패스워드 찾기 input */
export type ForgotPasswordInput = {
  /** 이름 */
  login_id: Scalars["String"]["input"];
};

export type Image = {
  __typename?: "Image";
  id: Scalars["ID"]["output"];
  /** 큰 이미지 */
  thumb_large_url: Maybe<Scalars["String"]["output"]>;
  /** 중간 이미지 */
  thumb_medium_url: Maybe<Scalars["String"]["output"]>;
  /** 작은 이미지 */
  thumb_small_url: Maybe<Scalars["String"]["output"]>;
  /** 원본 이미지 */
  url: Maybe<Scalars["String"]["output"]>;
};

export type Images = {
  __typename?: "Images";
  image: Array<Image>;
};

export type InternalWalletResponse = {
  __typename?: "InternalWalletResponse";
  /** 데이터 */
  data: Maybe<UserInternalWallet>;
  /** 메시지 */
  message: Scalars["String"]["output"];
  /** 상태 값 */
  status: Scalars["String"]["output"];
};

/** 언어 설정 */
export enum LocaleStatus {
  /** 중국어 */
  Chinese = "CHINESE",
  /** 영어 */
  English = "ENGLISH",
  /** 한글 */
  Korean = "KOREAN",
  /** 러시아어 */
  Russian = "RUSSIAN",
}

/** 로그인 정보 */
export type LoginAuthPayload = {
  __typename?: "LoginAuthPayload";
  /** 액세스 토큰 */
  access_token: Maybe<Scalars["String"]["output"]>;
  /** 액세스 토큰 만료 시간 */
  expires_in: Maybe<Scalars["String"]["output"]>;
  /** 메시지 */
  message: Scalars["String"]["output"];
  /** 리프레쉬 토큰 */
  refresh_token: Maybe<Scalars["String"]["output"]>;
  /** 상태 값 */
  status: Scalars["String"]["output"];
  /** 토큰 타입 */
  token_type: Maybe<Scalars["String"]["output"]>;
  /** 유저 정보 */
  user: Maybe<User>;
};

/** 유저 로그인 Input */
export type LoginInput = {
  /** 로그인 아이디 */
  login_id: Scalars["String"]["input"];
  /** 비밀번호 */
  password: Scalars["String"]["input"];
};

/** 마켓 시세 */
export type MarketPrice = {
  __typename?: "MarketPrice";
  /** 생성일 */
  created_at: Maybe<Scalars["DateTime"]["output"]>;
  /** 엔드포인트 */
  endpoint: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  /** 마켓명 */
  name: Maybe<Scalars["String"]["output"]>;
  /** 시세 */
  price: Maybe<Scalars["Float"]["output"]>;
  /** 거래쌍 */
  symbol: Maybe<Scalars["String"]["output"]>;
  /** 수정일 */
  updated_at: Maybe<Scalars["DateTime"]["output"]>;
};

export type MessageResponse = {
  __typename?: "MessageResponse";
  /** 메시지 */
  message: Maybe<Scalars["String"]["output"]>;
  /** 상태 값 */
  status: Maybe<Scalars["String"]["output"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  /** 관리자 로그인 */
  adminLogin: Maybe<AdminAuthPayload>;
  /** 관리자 거절 */
  adminReject: Maybe<MessageResponse>;
  /** 관리자 쿠폰 지급(인증 4단계인 유저만 지급 가능) */
  adminTicket: Maybe<UserResponse>;
  /** 티켓 구매 */
  buyTicket: Maybe<MessageResponse>;
  /** 로케일 변경 */
  changeLocale: Maybe<UserResponse>;
  /** 이름 변경 */
  changeName: Maybe<UserResponse>;
  /** 비밀번호 변경 */
  changePassword: Maybe<UserResponse>;
  /** 회원가입 이메일 중복 확인 */
  checkEmailForCreateUser: MessageResponse;
  /** 문자 인증 코드 검증 */
  checkSmsCode: Maybe<UserResponse>;
  /** 관리자 권한 부여 */
  createAdmin: Maybe<MessageResponse>;
  /** 거래소 API 연결 */
  createBotAccount: Maybe<BotResponse>;
  /** Faq 등록 */
  createFaq: Faq;
  /** 공지사항 등록 */
  createNotice: Notice;
  /** 파트너 등록 */
  createPartner: Maybe<MessageResponse>;
  /** 티켓 생성 */
  createTicket: Maybe<Ticket>;
  /** 유저 내부(입금) 지갑 생성 */
  createUserInternalWallet: Maybe<InternalWalletResponse>;
  /** Faq 삭제 */
  deleteFaq: Faq;
  /** 공지사항 삭제 */
  deleteNotice: Notice;
  /** 파트너 삭제 */
  deletePartner: Maybe<MessageResponse>;
  /** 티켓 삭제 */
  deleteTicket: Maybe<Ticket>;
  /** 유저 탈퇴 */
  deleteUser: Maybe<UserResponse>;
  /** 유저 로그인 */
  login: Maybe<LoginAuthPayload>;
  /** 로그아웃 */
  logoutUser: Maybe<LoginAuthPayload>;
  /** 파트너 로그인 */
  partnerLogin: Maybe<PartnerAuthPayload>;
  /** 코인 받기 */
  receiveCoin: CountResponse;
  /** 리프레쉬 토큰 */
  refreshToken: Maybe<RefreshAuthPayload>;
  /** 회원가입 */
  register: Maybe<MessageResponse>;
  /** 패스워드 재설정 메일 전송 */
  requestPasswordReset: MessageResponse;
  /** 회원가입 인증 이메일 재전송 */
  resendVerifyEmail: MessageResponse;
  /** 비밀번호 재설정 */
  resetPassword: Maybe<UserResponse>;
  /** 문자 인증 코드 보내기 */
  sendSmsCode: Maybe<MessageResponse>;
  /** 로케일 설정(로그인x) */
  setLocale: MessageResponse;
  /** 관리자 봇 중지 */
  stopBotByAdmin: Maybe<UserResponse>;
  /** AI 오토봇 시작 & 중지 */
  toggleBot: Maybe<BotResponse>;
  /** 인증 단계 업데이트 */
  updateAuthStep: Maybe<UserResponse>;
  /** Faq 수정 */
  updateFaq: Faq;
  /** 공지사항 수정 */
  updateNotice: Notice;
  /** 파트너 수정 */
  updatePartner: Maybe<MessageResponse>;
  /** 티켓 수정 */
  updateTicket: Maybe<Ticket>;
  /** 유저 메모 작성 */
  updateUserMemo: Maybe<UserResponse>;
  /** 업로드 */
  upload: Maybe<Image>;
  /** 썸네일 업로드 */
  uploadThumbnail: Maybe<Thumbnail>;
  /** 회원가입 이메일 인증 */
  verifyEmail: MessageResponse;
  /** 테스트 */
  verifyExchangeKeys: Maybe<VerifyResponse>;
};

export type MutationAdminLoginArgs = {
  input: AdminLoginInput;
};

export type MutationAdminRejectArgs = {
  input: AdminRejectInput;
};

export type MutationAdminTicketArgs = {
  input: AdminTicketInput;
};

export type MutationBuyTicketArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationChangeLocaleArgs = {
  input: UpdateLocaleInput;
};

export type MutationChangeNameArgs = {
  input: ChangeNameInput;
};

export type MutationChangePasswordArgs = {
  input: InputMaybe<ChangePasswordInput>;
};

export type MutationCheckEmailForCreateUserArgs = {
  email: Scalars["String"]["input"];
  locale: LocaleStatus;
};

export type MutationCheckSmsCodeArgs = {
  input: CheckSmsCodeInput;
};

export type MutationCreateAdminArgs = {
  input: CreateAdminInput;
};

export type MutationCreateBotAccountArgs = {
  input: CreateBotAccountInput;
};

export type MutationCreateFaqArgs = {
  input: CreateFaqInput;
};

export type MutationCreateNoticeArgs = {
  input: CreateNoticeInput;
};

export type MutationCreatePartnerArgs = {
  input: InputMaybe<CreatePartnerInput>;
};

export type MutationCreateTicketArgs = {
  input: CreateTicketInput;
};

export type MutationCreateUserInternalWalletArgs = {
  input: CreateUserInternalWalletInput;
};

export type MutationDeleteFaqArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteNoticeArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeletePartnerArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteTicketArgs = {
  id: Scalars["ID"]["input"];
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
  refresh_token: Scalars["String"]["input"];
};

export type MutationRegisterArgs = {
  input: RegisterInput;
};

export type MutationRequestPasswordResetArgs = {
  email: Scalars["String"]["input"];
};

export type MutationResendVerifyEmailArgs = {
  input: ForgotPasswordInput;
};

export type MutationResetPasswordArgs = {
  input: InputMaybe<ResetPasswordInput>;
};

export type MutationSendSmsCodeArgs = {
  input: SendSmsCodeInput;
};

export type MutationSetLocaleArgs = {
  input: UpdateLocaleInput;
};

export type MutationStopBotByAdminArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationToggleBotArgs = {
  input: ToggleBotInput;
};

export type MutationUpdateAuthStepArgs = {
  input: UpdateAuthStepInput;
};

export type MutationUpdateFaqArgs = {
  input: UpdateFaqInput;
};

export type MutationUpdateNoticeArgs = {
  input: UpdateNoticeInput;
};

export type MutationUpdatePartnerArgs = {
  input: InputMaybe<UpdatePartnerInput>;
};

export type MutationUpdateTicketArgs = {
  input: UpdateTicketInput;
};

export type MutationUpdateUserMemoArgs = {
  input: UpdateUserMemoInput;
};

export type MutationUploadArgs = {
  file: Scalars["Upload"]["input"];
};

export type MutationUploadThumbnailArgs = {
  file: Scalars["Upload"]["input"];
};

export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};

export type MutationVerifyExchangeKeysArgs = {
  input: VerifyInput;
};

/** Faq 다음글 */
export type NextFaq = {
  __typename?: "NextFaq";
  id: Maybe<Scalars["ID"]["output"]>;
  title: Maybe<Scalars["String"]["output"]>;
};

/** 공지사항 다음글 */
export type NextNotice = {
  __typename?: "NextNotice";
  id: Maybe<Scalars["ID"]["output"]>;
  title: Maybe<Scalars["String"]["output"]>;
};

/** 공지사항 정보 */
export type Notice = {
  __typename?: "Notice";
  /** 생성자 */
  author: Admin;
  /** 내용 */
  content: Scalars["String"]["output"];
  /** 생성 시간 */
  created_at: Maybe<Scalars["DateTime"]["output"]>;
  /** 노출 종료 시간 */
  ended_at: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["ID"]["output"];
  /** 이미지 */
  images: Maybe<Array<Maybe<Image>>>;
  /** 공지사항 노출 여부 */
  is_active: Maybe<Scalars["Int"]["output"]>;
  /** 상단 고정 여부 */
  is_fixed: Maybe<Scalars["Int"]["output"]>;
  /** 언어 */
  locale: LocaleStatus;
  /** 다음 공지사항 */
  next: Maybe<NextNotice>;
  /** 이전 공지사항 */
  previous: Maybe<PreviousNotice>;
  /** 노출 시작 시간 */
  started_at: Maybe<Scalars["DateTime"]["output"]>;
  /** 썸네일 */
  thumbnail: Maybe<Thumbnail>;
  /** 제목 */
  title: Scalars["String"]["output"];
  /** 수정 시간 */
  updated_at: Maybe<Scalars["DateTime"]["output"]>;
};

/** 공지사항 검색 항목 */
export enum NoticeColumn {
  Content = "CONTENT",
  EndedAt = "ENDED_AT",
  StartedAt = "STARTED_AT",
  Title = "TITLE",
}

/** A paginated list of Notice items. */
export type NoticePaginator = {
  __typename?: "NoticePaginator";
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
  value: InputMaybe<Scalars["Mixed"]["input"]>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars["String"]["input"];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = "COUNT",
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = "AVG",
  /** Amount of items. */
  Count = "COUNT",
  /** Maximum. */
  Max = "MAX",
  /** Minimum. */
  Min = "MIN",
  /** Sum. */
  Sum = "SUM",
}

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: "PaginatorInfo";
  /** Number of items in the current page. */
  count: Scalars["Int"]["output"];
  /** Index of the current page. */
  currentPage: Scalars["Int"]["output"];
  /** Index of the first item in the current page. */
  firstItem: Maybe<Scalars["Int"]["output"]>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars["Boolean"]["output"];
  /** Index of the last item in the current page. */
  lastItem: Maybe<Scalars["Int"]["output"]>;
  /** Index of the last available page. */
  lastPage: Scalars["Int"]["output"];
  /** Number of items per page. */
  perPage: Scalars["Int"]["output"];
  /** Number of total available items. */
  total: Scalars["Int"]["output"];
};

export type Partner = {
  __typename?: "Partner";
  /** 파트너 수수료 */
  fee: Maybe<Scalars["Float"]["output"]>;
  id: Scalars["ID"]["output"];
  /** 메모1 */
  memo1: Maybe<Scalars["String"]["output"]>;
  /** 메모2 */
  memo2: Maybe<Scalars["String"]["output"]>;
  /** 이름 */
  name: Scalars["String"]["output"];
  /** 역할 */
  role: Maybe<Scalars["String"]["output"]>;
};

/** 로그인 정보 */
export type PartnerAuthPayload = {
  __typename?: "PartnerAuthPayload";
  /** 액세스 토큰 */
  access_token: Maybe<Scalars["String"]["output"]>;
  /** 액세스 토큰 만료 시간 */
  expires_in: Maybe<Scalars["String"]["output"]>;
  /** 메시지 */
  message: Scalars["String"]["output"];
  /** 유저 정보 */
  partner: Maybe<Partner>;
  /** 리프레쉬 토큰 */
  refresh_token: Maybe<Scalars["String"]["output"]>;
  /** 상태 값 */
  status: Scalars["String"]["output"];
  /** 토큰 타입 */
  token_type: Maybe<Scalars["String"]["output"]>;
};

export type PartnerLoginInput = {
  /** 이름 */
  name: Scalars["String"]["input"];
  /** 비밀번호 */
  password: Scalars["String"]["input"];
};

/** A paginated list of Partner items. */
export type PartnerPaginator = {
  __typename?: "PartnerPaginator";
  /** A list of Partner items. */
  data: Array<Partner>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type PartnerResponse = {
  __typename?: "PartnerResponse";
  /** 데이터 */
  data: Maybe<Partner>;
  /** 메시지 */
  message: Scalars["String"]["output"];
  /** 상태 값 */
  status: Scalars["String"]["output"];
};

/** Faq 이전글 */
export type PreviousFaq = {
  __typename?: "PreviousFaq";
  id: Maybe<Scalars["ID"]["output"]>;
  title: Maybe<Scalars["String"]["output"]>;
};

/** 공지사항 이전글 */
export type PreviousNotice = {
  __typename?: "PreviousNotice";
  id: Maybe<Scalars["ID"]["output"]>;
  title: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  /** 유저 통계 */
  UserAmount: Maybe<UserAmount>;
  /** 입출금 통계 */
  UserWalletHistoryAmount: Maybe<Scalars["Float"]["output"]>;
  /** 어드민 상세 정보 */
  admin: Maybe<Admin>;
  /** 어드민 목록 */
  admins: AdminPaginator;
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
  /** 마켓 시세 */
  marketPrices: Maybe<Array<Maybe<MarketPrice>>>;
  /** 내 정보 */
  me: Maybe<User>;
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
  /** 티켓 정보 */
  tickets: Maybe<Array<Maybe<Ticket>>>;
  /** 유저 상세 정보 */
  user: Maybe<User>;
  /** 유저 내부(입금) 지갑 상세 정보 */
  userInternalWallet: Maybe<UserInternalWallet>;
  /** 유저 내부(입금) 지갑 목록 */
  userInternalWallets: Maybe<Array<Maybe<UserInternalWallet>>>;
  /** 유저 내부(입금) 지갑 목록 by 어드민 */
  userInternalWalletsByAdmin: Maybe<Array<Maybe<UserInternalWallet>>>;
  /** 유저 포인트 */
  userPoint: Maybe<UserPoint>;
  /** 유저 티켓 정보 */
  userTicket: Maybe<UserTicket>;
  /** 입출금 내역 by 어드민 */
  userWalletHistoryByAdmin: UserWalletHistoryPaginator;
  /** 입출금 내역 by 유저 */
  userWalletHistoryByUser: UserWalletHistoryPaginator;
  /** 유저 목록 */
  users: UserPaginator;
};

export type QueryUserWalletHistoryAmountArgs = {
  month: InputMaybe<Scalars["Int"]["input"]>;
  type: InputMaybe<UserWalletHistoryType>;
  year: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryAdminArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryAdminsArgs = {
  first?: Scalars["Int"]["input"];
  page: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryFaqArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryFaqSearchArgs = {
  first?: Scalars["Int"]["input"];
  is_active: InputMaybe<Scalars["Boolean"]["input"]>;
  locale: InputMaybe<LocaleStatus>;
  orderBy: InputMaybe<Array<QueryFaqSearchOrderByOrderByClause>>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  type: InputMaybe<FaqTypeEnum>;
  where: InputMaybe<QueryFaqSearchWhereWhereConditions>;
};

export type QueryFaqsArgs = {
  first?: Scalars["Int"]["input"];
  is_active: InputMaybe<Scalars["Boolean"]["input"]>;
  locale: InputMaybe<LocaleStatus>;
  orderBy: InputMaybe<Array<QueryFaqsOrderByOrderByClause>>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  type: InputMaybe<FaqTypeEnum>;
};

export type QueryNoticeArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryNoticeSearchArgs = {
  first?: Scalars["Int"]["input"];
  is_active: InputMaybe<Scalars["Boolean"]["input"]>;
  locale: InputMaybe<LocaleStatus>;
  orderBy: InputMaybe<Array<QueryNoticeSearchOrderByOrderByClause>>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<QueryNoticeSearchWhereWhereConditions>;
};

export type QueryNoticesArgs = {
  first?: Scalars["Int"]["input"];
  is_active: InputMaybe<Scalars["Boolean"]["input"]>;
  locale: InputMaybe<LocaleStatus>;
  orderBy: InputMaybe<Array<QueryNoticesOrderByOrderByClause>>;
  page: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryPartnerArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryPartnersArgs = {
  first?: Scalars["Int"]["input"];
  page: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryUserArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUserInternalWalletArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUserInternalWalletsByAdminArgs = {
  user_id: Scalars["Int"]["input"];
};

export type QueryUserWalletHistoryByAdminArgs = {
  first?: Scalars["Int"]["input"];
  month: InputMaybe<Scalars["Int"]["input"]>;
  orderBy: InputMaybe<Array<QueryUserWalletHistoryByAdminOrderByOrderByClause>>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  type: InputMaybe<UserWalletHistoryType>;
  where: InputMaybe<QueryUserWalletHistoryByAdminWhereWhereConditions>;
  year: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryUserWalletHistoryByUserArgs = {
  first?: Scalars["Int"]["input"];
  month: InputMaybe<Scalars["Int"]["input"]>;
  orderBy: InputMaybe<Array<QueryUserWalletHistoryByUserOrderByOrderByClause>>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  type: InputMaybe<UserWalletHistoryType>;
  where: InputMaybe<QueryUserWalletHistoryByUserWhereWhereConditions>;
  year: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryUsersArgs = {
  auth_step: InputMaybe<AuthStepEnum>;
  email: InputMaybe<Scalars["String"]["input"]>;
  first?: Scalars["Int"]["input"];
  login_id: InputMaybe<Scalars["String"]["input"]>;
  name: InputMaybe<Scalars["String"]["input"]>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  phone: InputMaybe<Scalars["String"]["input"]>;
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** Allowed column names for Query.faqSearch.orderBy. */
export enum QueryFaqSearchOrderByColumn {
  CreatedAt = "CREATED_AT",
  IsFixed = "IS_FIXED",
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
  value: InputMaybe<Scalars["Mixed"]["input"]>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `faqSearch`. */
export type QueryFaqSearchWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount: InputMaybe<Scalars["Int"]["input"]>;
  /** Additional condition logic. */
  condition: InputMaybe<QueryFaqSearchWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars["String"]["input"];
};

/** Allowed column names for Query.faqs.orderBy. */
export enum QueryFaqsOrderByColumn {
  CreatedAt = "CREATED_AT",
  IsFixed = "IS_FIXED",
}

/** Order by clause for Query.faqs.orderBy. */
export type QueryFaqsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryFaqsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.noticeSearch.orderBy. */
export enum QueryNoticeSearchOrderByColumn {
  CreatedAt = "CREATED_AT",
  IsFixed = "IS_FIXED",
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
  value: InputMaybe<Scalars["Mixed"]["input"]>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `noticeSearch`. */
export type QueryNoticeSearchWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount: InputMaybe<Scalars["Int"]["input"]>;
  /** Additional condition logic. */
  condition: InputMaybe<QueryNoticeSearchWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars["String"]["input"];
};

/** Allowed column names for Query.notices.orderBy. */
export enum QueryNoticesOrderByColumn {
  CreatedAt = "CREATED_AT",
  IsFixed = "IS_FIXED",
}

/** Order by clause for Query.notices.orderBy. */
export type QueryNoticesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryNoticesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.userWalletHistoryByAdmin.orderBy. */
export enum QueryUserWalletHistoryByAdminOrderByColumn {
  CreatedAt = "CREATED_AT",
  Id = "ID",
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
  value: InputMaybe<Scalars["Mixed"]["input"]>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `userWalletHistoryByAdmin`. */
export type QueryUserWalletHistoryByAdminWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount: InputMaybe<Scalars["Int"]["input"]>;
  /** Additional condition logic. */
  condition: InputMaybe<QueryUserWalletHistoryByAdminWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars["String"]["input"];
};

/** Allowed column names for Query.userWalletHistoryByUser.orderBy. */
export enum QueryUserWalletHistoryByUserOrderByColumn {
  CreatedAt = "CREATED_AT",
  Id = "ID",
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
  value: InputMaybe<Scalars["Mixed"]["input"]>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `userWalletHistoryByUser`. */
export type QueryUserWalletHistoryByUserWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount: InputMaybe<Scalars["Int"]["input"]>;
  /** Additional condition logic. */
  condition: InputMaybe<QueryUserWalletHistoryByUserWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars["String"]["input"];
};

export type ReceiveCoinInput = {
  /** 코인 아이디 */
  coin_id: CoinTypeEnum;
  /** 지갑 주소 */
  wallet_address: Scalars["String"]["input"];
};

/** 리프레시 토큰 정보 */
export type RefreshAuthPayload = {
  __typename?: "RefreshAuthPayload";
  /** 액세스 토큰 */
  access_token: Maybe<Scalars["String"]["output"]>;
  /** 액세스 토큰 만료 시간 */
  expires_in: Maybe<Scalars["String"]["output"]>;
  /** 메시지 */
  message: Scalars["String"]["output"];
  /** 상태 값 */
  status: Scalars["String"]["output"];
  /** 토큰 타입 */
  token_type: Maybe<Scalars["String"]["output"]>;
};

/** 유저 등록 Input */
export type RegisterInput = {
  /** 국번 */
  country_code: InputMaybe<Scalars["String"]["input"]>;
  /** 이메일 */
  email: Scalars["String"]["input"];
  /** 추천인 코드 */
  invite_code: InputMaybe<Scalars["String"]["input"]>;
  /** 언어 */
  locale: InputMaybe<Scalars["String"]["input"]>;
  /** 로그인 아이디 */
  login_id: Scalars["String"]["input"];
  /** 이름 */
  name: Scalars["String"]["input"];
  /** 비밀번호 */
  password: Scalars["String"]["input"];
  /** 휴대폰 번호 */
  phone_number: InputMaybe<Scalars["String"]["input"]>;
};

/** 패스워드 재설정 input */
export type ResetPasswordInput = {
  /** 이메일 */
  email: Scalars["String"]["input"];
  /** 새 비밀번호 */
  password: Scalars["String"]["input"];
  /** 새 비밀번호 확인 */
  password_confirmation: Scalars["String"]["input"];
  /** 토큰 */
  token: Scalars["String"]["input"];
};

export enum RoleEnum {
  /** 어드민 */
  Admin = "ADMIN",
  /** 유저 */
  User = "USER",
}

/** The available SQL operators that are used to filter query results. */
export enum SqlOperator {
  /** Whether a value is within a range of values (`BETWEEN`) */
  Between = "BETWEEN",
  /** Equal operator (`=`) */
  Eq = "EQ",
  /** Greater than operator (`>`) */
  Gt = "GT",
  /** Greater than or equal operator (`>=`) */
  Gte = "GTE",
  /** Whether a value is within a set of values (`IN`) */
  In = "IN",
  /** Whether a value is not null (`IS NOT NULL`) */
  IsNotNull = "IS_NOT_NULL",
  /** Whether a value is null (`IS NULL`) */
  IsNull = "IS_NULL",
  /** Simple pattern matching (`LIKE`) */
  Like = "LIKE",
  /** Less than operator (`<`) */
  Lt = "LT",
  /** Less than or equal operator (`<=`) */
  Lte = "LTE",
  /** Not equal operator (`!=`) */
  Neq = "NEQ",
  /** Whether a value is not within a range of values (`NOT BETWEEN`) */
  NotBetween = "NOT_BETWEEN",
  /** Whether a value is not within a set of values (`NOT IN`) */
  NotIn = "NOT_IN",
  /** Negation of simple pattern matching (`NOT LIKE`) */
  NotLike = "NOT_LIKE",
}

/** 문자 인증 코드 보내기 Input */
export type SendSmsCodeInput = {
  /** 국번 */
  country_code: Scalars["String"]["input"];
  /** 휴대폰 번호 */
  phone_number: Scalars["String"]["input"];
};

/** SMS 메시지 */
export type SmsMessage = {
  __typename?: "SmsMessage";
  /** 국번 */
  country_code: Maybe<Scalars["String"]["output"]>;
  /** 휴대폰 번호 */
  phone_number: Maybe<Scalars["String"]["output"]>;
  /** 요청 */
  request: Maybe<Scalars["String"]["output"]>;
  /** 응답 */
  response: Maybe<Scalars["String"]["output"]>;
  /** 문자 코드 */
  sms_code: Maybe<Scalars["String"]["output"]>;
  /** 문자 코드 만료 시간 */
  sms_code_expired_at: Maybe<Scalars["DateTime"]["output"]>;
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = "ASC",
  /** Sort records in descending order. */
  Desc = "DESC",
}

/** 심볼 */
export enum SymbolEnum {
  Eth = "ETH",
  Xrp = "XRP",
}

export type Thumbnail = {
  __typename?: "Thumbnail";
  id: Scalars["ID"]["output"];
  url: Maybe<Scalars["String"]["output"]>;
};

/** 티켓 정보 */
export type Ticket = {
  __typename?: "Ticket";
  /** 보너스 일 수 */
  bonus_days: Maybe<Scalars["Int"]["output"]>;
  /** 일 수 */
  days: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["ID"]["output"];
  /** 이름 */
  name: Maybe<Scalars["String"]["output"]>;
  /** 가격 */
  price: Maybe<Scalars["Float"]["output"]>;
};

/** AI 오토봇 시작 & 중지 Input */
export type ToggleBotInput = {
  /** 사이즈 */
  base_qty: InputMaybe<Scalars["Float"]["input"]>;
  /** 활성화 여부 */
  is_active: Scalars["Boolean"]["input"];
  /** 레버리지 */
  leverage: InputMaybe<Scalars["Float"]["input"]>;
  /** 심볼 */
  symbol: SymbolEnum;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = "ONLY",
  /** Return both trashed and non-trashed results. */
  With = "WITH",
  /** Only return non-trashed results. */
  Without = "WITHOUT",
}

/** 인증 단계 업데이트 Input */
export type UpdateAuthStepInput = {
  /** 인증 단계 */
  auth_step: AuthStepEnum;
  id: Scalars["ID"]["input"];
  /** 거래소 UID (마에피이지에서 수정할 때만 입력) */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** Faq 수정 input */
export type UpdateFaqInput = {
  /** 내용 */
  content: InputMaybe<Scalars["String"]["input"]>;
  /** 삭제할 이미지 아이디 배열 */
  deleteImages: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** 삭제할 썸네일 아이디 */
  deleteThumbnail: InputMaybe<Scalars["Int"]["input"]>;
  /** 노출 종료일 */
  ended_at: InputMaybe<Scalars["DateTime"]["input"]>;
  id: Scalars["ID"]["input"];
  /** 업로드된 이미지 아이디 배열 */
  images: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** Faq 노출 여부 */
  is_active: InputMaybe<Scalars["Int"]["input"]>;
  /** 상단 고정 여부 */
  is_fixed: InputMaybe<Scalars["Int"]["input"]>;
  /** 언어 */
  locale: InputMaybe<LocaleStatus>;
  /** 노출 시작일 */
  started_at: InputMaybe<Scalars["DateTime"]["input"]>;
  /** 업로드된 썸네일 아이디 */
  thumbnail: InputMaybe<Scalars["Int"]["input"]>;
  /** 제목 */
  title: InputMaybe<Scalars["String"]["input"]>;
  /** 타입 (1: 지갑 관련, 2: 서비스 관련) */
  type: FaqTypeEnum;
};

/** 언어 설정 수정 input */
export type UpdateLocaleInput = {
  /** 언어 */
  locale: LocaleStatus;
};

/** 공지사항 수정 input */
export type UpdateNoticeInput = {
  /** 내용 */
  content: InputMaybe<Scalars["String"]["input"]>;
  /** 삭제할 이미지 아이디 배열 */
  deleteImages: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** 삭제할 썸네일 아이디 */
  deleteThumbnail: InputMaybe<Scalars["Int"]["input"]>;
  /** 노출 종료일 */
  ended_at: InputMaybe<Scalars["DateTime"]["input"]>;
  id: Scalars["ID"]["input"];
  /** 업로드된 이미지 아이디 배열 */
  images: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** 공지사항 노출 여부 */
  is_active: InputMaybe<Scalars["Int"]["input"]>;
  /** 상단 고정 여부 */
  is_fixed: InputMaybe<Scalars["Int"]["input"]>;
  /** 언어 */
  locale: InputMaybe<LocaleStatus>;
  /** 노출 시작일 */
  started_at: InputMaybe<Scalars["DateTime"]["input"]>;
  /** 업로드된 썸네일 아이디 */
  thumbnail: InputMaybe<Scalars["Int"]["input"]>;
  /** 제목 */
  title: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdatePartnerInput = {
  /** 수수료 */
  fee: InputMaybe<Scalars["Float"]["input"]>;
  id: Scalars["ID"]["input"];
  /** 메모1 */
  memo1: InputMaybe<Scalars["String"]["input"]>;
  /** 메모2 */
  memo2: InputMaybe<Scalars["String"]["input"]>;
  /** 비밀번호 */
  password: InputMaybe<Scalars["String"]["input"]>;
};

/** 파트너 메모 작성 Input */
export type UpdatePartnerMemoInput = {
  /** partners.id */
  id: Scalars["ID"]["input"];
  /** 메모1 */
  memo1: InputMaybe<Scalars["String"]["input"]>;
  /** 메모2 */
  memo2: InputMaybe<Scalars["String"]["input"]>;
};

/** 티켓 수정 Input */
export type UpdateTicketInput = {
  /** 보너스 일 수 */
  bonus_days: InputMaybe<Scalars["Int"]["input"]>;
  /** 일 수 */
  days: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["ID"]["input"];
  /** 이름 */
  name: InputMaybe<Scalars["String"]["input"]>;
  /** 가격 */
  price: InputMaybe<Scalars["Float"]["input"]>;
};

/** 유저 메모 작성 Input */
export type UpdateUserMemoInput = {
  /** users.id */
  id: Scalars["ID"]["input"];
  /** 메모 */
  memo: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
  __typename?: "User";
  /** 인증 단계 */
  auth_step: Maybe<AuthStepEnum>;
  /** 봇 정보 */
  botAccounts: Maybe<Array<Maybe<BotAccount>>>;
  /** 국번 */
  country_code: Maybe<Scalars["String"]["output"]>;
  /** 등록일 */
  created_at: Scalars["DateTime"]["output"];
  /** 이메일 */
  email: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  /** 추천인 코드 */
  invite_code: Maybe<Scalars["String"]["output"]>;
  /** 언어 */
  locale: Maybe<Scalars["String"]["output"]>;
  /** 아이디 */
  login_id: Maybe<Scalars["String"]["output"]>;
  /** 메모 */
  memo: Maybe<Scalars["String"]["output"]>;
  /** 이름 */
  name: Maybe<Scalars["String"]["output"]>;
  /** 휴대폰 번호 */
  phone_number: Maybe<Scalars["String"]["output"]>;
  /** 포인트 */
  point: Maybe<Scalars["Float"]["output"]>;
  /** 역할 */
  role: Maybe<Scalars["String"]["output"]>;
  /** 거래소 UID */
  uid: Maybe<Scalars["String"]["output"]>;
  /** 수정일 */
  updated_at: Scalars["DateTime"]["output"];
  /** 티켓 정보 */
  userTicket: Maybe<UserTicket>;
};

/** 봇 계정 정보 히스토리 */
export type UserAccountHistory = {
  __typename?: "UserAccountHistory";
  /** 등록일 */
  created_at: Maybe<Scalars["DateTime"]["output"]>;
  /** 데이터 */
  data: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  /** 수정일 */
  updated_at: Maybe<Scalars["DateTime"]["output"]>;
  /** 유저 아이디 */
  user_id: Maybe<Scalars["Int"]["output"]>;
};

export type UserAmount = {
  __typename?: "UserAmount";
  /** 승인 완료 수 */
  completed_count: Maybe<Scalars["Int"]["output"]>;
  /** 승인 대기 수 */
  pending_count: Maybe<Scalars["Int"]["output"]>;
  /** 승인 거절 수 */
  reject_count: Maybe<Scalars["Int"]["output"]>;
  /** 유저 수 */
  user_count: Maybe<Scalars["Int"]["output"]>;
};

/** 유저 내부(입금) 지갑 정보 */
export type UserInternalWallet = {
  __typename?: "UserInternalWallet";
  /** 코인 아이디 */
  coin_id: Maybe<CoinTypeEnum>;
  /** 등록일 */
  created_at: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["ID"]["output"];
  /** 마지막 입금일 */
  last_received_at: Maybe<Scalars["DateTime"]["output"]>;
  /** 프라이빗 키 */
  private_key: Maybe<Scalars["String"]["output"]>;
  /** 수정일 */
  updated_at: Maybe<Scalars["DateTime"]["output"]>;
  /** 유저 아이디 */
  user_id: Maybe<Scalars["Int"]["output"]>;
  /** 지갑 주소 */
  wallet_address: Maybe<Scalars["String"]["output"]>;
};

/** A paginated list of User items. */
export type UserPaginator = {
  __typename?: "UserPaginator";
  /** A list of User items. */
  data: Array<User>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** 유저 포인트 정보 */
export type UserPoint = {
  __typename?: "UserPoint";
  id: Scalars["ID"]["output"];
  /** 포인트 */
  point: Maybe<Scalars["Float"]["output"]>;
  /** 유저 아이디 */
  user_id: Maybe<Scalars["Int"]["output"]>;
};

export type UserResponse = {
  __typename?: "UserResponse";
  /** 유저 정보 */
  data: Maybe<User>;
  /** 메시지 */
  message: Scalars["String"]["output"];
  /** 상태 값 */
  status: Scalars["String"]["output"];
};

/** 유저 티켓 정보 */
export type UserTicket = {
  __typename?: "UserTicket";
  /** 티켓 종료일 */
  end_date: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["ID"]["output"];
  /** 무료 티켓 지급 여부 */
  is_free_ticket: Maybe<Scalars["Boolean"]["output"]>;
  /** 티켓 보유 여부 */
  is_ticket: Maybe<Scalars["Boolean"]["output"]>;
  /** 티켓 시작일 */
  start_date: Maybe<Scalars["DateTime"]["output"]>;
  /** 유저 아이디 */
  user_id: Maybe<Scalars["Int"]["output"]>;
};

/** 유저 지갑 히스토리 */
export type UserWalletHistory = {
  __typename?: "UserWalletHistory";
  /** 수량 */
  amount: Maybe<Scalars["Float"]["output"]>;
  /** 코인 아이디 */
  coin_id: Maybe<CoinTypeEnum>;
  /** 내용 */
  content: Maybe<Scalars["String"]["output"]>;
  /** 등록일 */
  created_at: Maybe<Scalars["DateTime"]["output"]>;
  /** 이메일 */
  email: Maybe<Scalars["String"]["output"]>;
  /** 보내는 지갑 주소 */
  from_address: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  /** 이미지 경로 */
  image: Maybe<Scalars["String"]["output"]>;
  /** 상태 값 */
  status: Maybe<UserWalletHistoryStatusEnum>;
  /** 제목 */
  title: Maybe<Scalars["String"]["output"]>;
  /** 받는 지갑 주소 */
  to_address: Maybe<Scalars["String"]["output"]>;
  /** 트랜잭션 아이디 */
  tx_id: Maybe<Scalars["String"]["output"]>;
  /** 타입 (1:입금 2:티켓 구매) */
  type: Maybe<UserWalletHistoryType>;
  /** 수정일 */
  updated_at: Maybe<Scalars["DateTime"]["output"]>;
  /** 유저 아이디 */
  user_id: Maybe<Scalars["Int"]["output"]>;
  /** 출금 수수료 */
  withdraw_fee: Maybe<Scalars["Float"]["output"]>;
};

/** 조건 검색 */
export enum UserWalletHistoryColumn {
  /** 수량 */
  Amount = "AMOUNT",
  /** 내용 */
  Content = "CONTENT",
}

/** A paginated list of UserWalletHistory items. */
export type UserWalletHistoryPaginator = {
  __typename?: "UserWalletHistoryPaginator";
  /** A list of UserWalletHistory items. */
  data: Array<UserWalletHistory>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum UserWalletHistoryReviewEnum {
  /** 취소 */
  Canceled = "CANCELED",
  /** 완료 */
  Completed = "COMPLETED",
}

/** 유저 지갑 상태 */
export enum UserWalletHistoryStatusEnum {
  /** 취소 */
  Canceled = "CANCELED",
  /** 완료 */
  Completed = "COMPLETED",
  /** 대기 */
  Pending = "PENDING",
}

/** 유저 지갑 히스토리 타입 */
export enum UserWalletHistoryType {
  /** 전체 */
  All = "ALL",
  /** 티켓 구매 */
  Minus = "MINUS",
  /** 입금 */
  Plus = "PLUS",
}

/** 회원가입 이메일 인증 input */
export type VerifyEmailInput = {
  /** 인증 토큰 */
  token: Scalars["String"]["input"];
};

export type VerifyInput = {
  /** API 키 */
  api_key: Scalars["String"]["input"];
  /** 시크릿 키 */
  secret_key: Scalars["String"]["input"];
};

export type VerifyResponse = {
  __typename?: "VerifyResponse";
  balance: Maybe<Scalars["String"]["output"]>;
  body: Scalars["String"]["output"];
  httpStatus: Scalars["Int"]["output"];
  ok: Scalars["Boolean"]["output"];
  uid: Maybe<Scalars["String"]["output"]>;
};

/** Dynamic WHERE conditions for queries. */
export type WhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND: InputMaybe<Array<WhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS: InputMaybe<WhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR: InputMaybe<Array<WhereConditions>>;
  /** The column that is used for the condition. */
  column: InputMaybe<Scalars["String"]["input"]>;
  /** The operator that is used for the condition. */
  operator: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value: InputMaybe<Scalars["Mixed"]["input"]>;
};

/** Dynamic HAS conditions for WHERE condition queries. */
export type WhereConditionsRelation = {
  /** The amount to test. */
  amount: InputMaybe<Scalars["Int"]["input"]>;
  /** Additional condition logic. */
  condition: InputMaybe<WhereConditions>;
  /** The comparison operator to test against the amount. */
  operator: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars["String"]["input"];
};

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  register: { __typename?: "MessageResponse"; status: string; message: string };
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "LoginAuthPayload";
    status: string;
    message: string;
    access_token: string;
    refresh_token: string;
    expires_in: string;
    token_type: string;
  };
};

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
export function useRegisterMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export const LoginDocument = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      status
      message
      access_token
      refresh_token
      expires_in
      token_type
    }
  }
`;

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
export function useLoginMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
