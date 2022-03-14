/** @type {import('next').NextConfig} */
const { withGoogleFonts } = require("nextjs-google-fonts");

module.exports = {
  reactStrictMode: false,
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
  withGoogleFonts: withGoogleFonts({
    googleFonts: {
      fonts: [
        "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
        "https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&display=swap",
      ],
    },
  }),
};
