import type { NextConfig } from "next"
import { withContentlayer } from 'next-contentlayer2'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  turbopack: {},
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  }
}

export default withContentlayer(nextConfig)
