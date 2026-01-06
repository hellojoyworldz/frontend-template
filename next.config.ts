import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { withYak } from "next-yak/withYak";

const IMAGE_HOST_URL = process.env.NEXT_PUBLIC_IMAGE_HOST_URL;
const imageHostUrl = IMAGE_HOST_URL ? new URL(IMAGE_HOST_URL) : null;

const nextConfig: NextConfig = {
  transpilePackages: ["apollo-upload-client"],
  // 외부 도메인에 호스팅된 이미지를 컴포넌트로 최적화
  ...(imageHostUrl && {
    images: {
      remotePatterns: [
        {
          protocol: imageHostUrl.protocol === "https:" ? "https" : "http",
          hostname: imageHostUrl.hostname,
          port: "",
          pathname: "/**",
        },
      ],
    },
  }),
};

const withNextIntl = createNextIntlPlugin("./src/lib/i18n/request.ts");

export default withNextIntl(withYak(nextConfig));
