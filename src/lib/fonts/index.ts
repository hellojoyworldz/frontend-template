// font 정의하고 body에 variable class를 주입해야 함
// font 선택은 globals.css에서 lang 속성에 따라 분기 처리
import localFont from "next/font/local";
import { Noto_Sans, Noto_Sans_SC, Poppins } from "next/font/google";

export const pretendard = localFont({
  src: "../../fonts/PretendardVariable.woff2",
  weight: "45 920",
  variable: "--font-pretendard",
  display: "swap",
});

export const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto",
  display: "swap",
});

export const notoSc = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sc",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
  display: "swap",
});
