import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["fakestoreapi.com"], // 添加信任的图片域名
  },
};

export default nextConfig;
