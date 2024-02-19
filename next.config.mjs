/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['yt3.ggpht.com'],
  },
  logging: { fetches: { fullUrl: true } },
};

export default nextConfig;
