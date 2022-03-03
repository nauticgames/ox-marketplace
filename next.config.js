/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["marketplace.oxsoccer.com", "ox-images.s3.amazonaws.com"],
  },
  webp: {
    preset: "default",
    quality: 100,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
