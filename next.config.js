/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_APIKEY: "AIzaSyBdgBklh64dL3YiTLRZomQA7ZWIRchzR_8",
    NEXT_PUBLIC_AUTH_DOMAIN: "nextjs-2b888.firebaseapp.com",
    NEXT_PUBLIC_APROJECT_ID: "nextjs-2b888",
    NEXT_PUBLIC_ASTORAGE_BUCKET: "nextjs-2b888.appspot.com",
    NEXT_PUBLIC_AMESSAING_ID: "1052151823182",
    NEXT_PUBLIC_AAPP_ID: "1:1052151823182:web:e78cea1ffe31568f84fc1f",
  },
};

module.exports = nextConfig;
