/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_APROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_ASTORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_AMESSAING_ID,
    appId: process.env.NEXT_PUBLIC_AAPP_ID,
  },
};

module.exports = nextConfig;
