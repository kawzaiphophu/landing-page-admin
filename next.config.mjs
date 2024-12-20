/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  reactStrictMode: true,
  // images: {
  //   domains: ["floor-plan-api.knacx.dev"],
  // },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
