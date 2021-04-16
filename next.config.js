const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')

const dotenvPath = path.resolve(process.cwd(), '.env')
if (fs.existsSync(dotenvPath)) {
  const { error } = dotenv.config({ path: dotenvPath })
  if (error) {
    throw error
  }
}

module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes packages that depend on fs/module module
    if (!isServer) {
      config.node = { fs: 'empty', module: 'empty' }
    }
    return config
  },

  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL
  }
}
