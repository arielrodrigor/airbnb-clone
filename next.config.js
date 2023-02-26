/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
        domains: ['links.papareact.com'],
    },
    env: {
      map_box_api_token: process.env.MAPBOX_API_TOKEN
    }


}

module.exports = nextConfig
