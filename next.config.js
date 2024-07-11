const { withNextVideo } = require('next-video/process')

// next.config.js
module.exports = {
  
  images: {
    domains: ['cdn.sanity.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  }
};
