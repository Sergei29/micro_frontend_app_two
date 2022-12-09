const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "frontend_two",
        remotes: {
          frontend_three: `frontend_three@http://localhost:3002/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry_3.js`,
          frontend_one: `frontend_one@http://localhost:3000/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry_2.js",
        exposes: {
          "./footer": "./src/components/Footer/index.tsx",
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
