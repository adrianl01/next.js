import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // reactStrictMode: true,

  // Image optimization config
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.example-cdn.com",
      },
    ],
  },

  // Basic i18n example
  // i18n: {
  //   locales: ["en", "es"],
  //   defaultLocale: "en",
  // },

  // Example webpack customizations: path alias and SVG as React component
  // webpack(config, { isServer }) {
  //   config.resolve ||= {};
  //   config.resolve.alias ||= {};
  //   config.resolve.alias["@"] = path.resolve(__dirname, "src");

  //   // Add SVGR for importing SVGs as React components
  //   config.module ||= { rules: [] as any[] };
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: ["@svgr/webpack"],
  //   });

  //   return config;
  // },
  turbopack: {},
  // Custom headers for security best-practices
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },

  // Example redirects
  // async redirects() {
  //   return [
  //     {
  //       source: "/old-path/:slug*",
  //       destination: "/new-path/:slug*",
  //       permanent: true,
  //     },
  //   ];
  // },

  // Fail build on TypeScript/ESLint errors (adjust if you want to allow)
  // eslint: { ignoreDuringBuilds: false },
  // typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
