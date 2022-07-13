/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['design'], {
  resolveSymlinks: false,
})

const nextConfig = withTM({
  reactStrictMode: true,
})

module.exports = nextConfig
