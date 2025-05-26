import type { NextConfig } from "next";
// @ts-expect-error: next-pwa는 타입 선언이 제공되지 않습니다.
import withPWA from "next-pwa";

const withPWAConfig = withPWA({
  dest: "public", // 서비스워커와 manifest가 public 폴더에 생성됨
  disable: process.env.NODE_ENV === "development", // 개발환경에서는 PWA 비활성화
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default withPWAConfig(nextConfig);
