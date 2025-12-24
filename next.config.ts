import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { withYak } from "next-yak/withYak";

const IMAGES_HOST_URL = process.env.NEXT_PUBLIC_IMAGES_HOST_URL;
const imagesHostUrl = IMAGES_HOST_URL ? new URL(IMAGES_HOST_URL) : null;

const nextConfig: NextConfig = {
  transpilePackages: ["apollo-upload-client"],
  // 외부 도메인에 호스팅된 이미지를 컴포넌트로 최적화
  ...(imagesHostUrl && {
    images: {
      remotePatterns: [
        {
          protocol: imagesHostUrl.protocol === "https:" ? "https" : "http",
          hostname: imagesHostUrl.hostname,
          port: "",
          pathname: "/**",
        },
      ],
    },
  }),
};

const withNextIntl = createNextIntlPlugin("./src/lib/i18n/request.ts");

export default withNextIntl(withYak(nextConfig));
