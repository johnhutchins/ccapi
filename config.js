const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  API_KEY: process.env.API_KEY,
  ELEVATION_PROFILE_BASE_URL: process.env.ELEVATION_PROFILE_BASE_URL
}