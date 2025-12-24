// 검증용 regex
export const REGEX = {
  LOGIN_ID: /^[a-zA-Z0-9]+$/,
  PASSWORD: /^[a-zA-Z0-9]+$/,
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PHONE: /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/,
  NAME: /^[a-zA-Z]+$/,
  BIRTHDAY: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
};
