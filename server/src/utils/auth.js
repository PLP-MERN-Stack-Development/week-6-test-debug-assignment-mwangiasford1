const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'testsecret';

function generateToken(user) {
  return jwt.sign(
    { id: user._id, username: user.username, email: user.email },
    SECRET,
    { expiresIn: '1h' }
  );
}

module.exports = { generateToken }; 