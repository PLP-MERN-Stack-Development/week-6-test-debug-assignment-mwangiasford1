const { generateToken } = require('../../src/utils/auth');
const jwt = require('jsonwebtoken');

describe('generateToken', () => {
  it('should generate a valid JWT for a user', () => {
    const user = { _id: '123', username: 'test', email: 'test@example.com' };
    const token = generateToken(user);
    const decoded = jwt.verify(token, 'testsecret');
    expect(decoded.id).toBe(user._id);
    expect(decoded.username).toBe(user.username);
    expect(decoded.email).toBe(user.email);
  });
}); 