// 필요할 때 yarn add nodemailer 설치하여 사용
// https://next-auth.js.org/configuration/providers/email
import EmailProvider from "next-auth/providers/email";

export const email = EmailProvider({
  server: process.env.EMAIL_SERVER,
  from: process.env.EMAIL_FROM,
});
