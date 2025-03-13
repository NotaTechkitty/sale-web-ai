/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable the App Router
  appDir: true,
  images: {
    domains: ["localhost"],
  },
  // This adds a custom asset prefix for static files
  assetPrefix: process.env.NODE_ENV === "production" ? undefined : undefined,
  // Important: add a custom webpack configuration to handle static files
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/images/",
            outputPath: "static/images/",
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
