const { i18n } = require("./next-i18next.config.js");
require('dotenv').config();
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'km'],
  },
  localePath: path.resolve('./public/locales'),
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
}


module.exports = nextConfig
