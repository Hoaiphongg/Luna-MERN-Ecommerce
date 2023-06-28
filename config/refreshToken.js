const jwt = require('jsonwebtoken')

const generateRefreshToken = (id) => {
  // maximum token exists is 3 days
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' })
}

module.exports = { generateRefreshToken }
