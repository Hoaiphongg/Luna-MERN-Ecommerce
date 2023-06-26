const jwt = require('jsonwebtoken')

const generateToken = (id) => {
  // maximum token exists is 3 days
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' })
}

module.exports = {
  generateToken,
}
