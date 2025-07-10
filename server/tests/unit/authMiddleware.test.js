const auth = require('../../src/middleware/auth');
const jwt = require('jsonwebtoken');

// Mock Express req, res, next
function getMockRes() {
  return {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
}

describe('auth middleware', () => {
  const user = { id: '123', username: 'test', email: 'test@example.com' };
  const SECRET = 'testsecret';
  const validToken = jwt.sign(user, SECRET);

  it('should call next() and set req.user for a valid token', async () => {
    const req = { headers: { authorization: `Bearer ${validToken}` } };
    const res = getMockRes();
    const next = jest.fn();
    await auth(req, res, next);
    expect(req.user).toMatchObject(user);
    expect(next).toHaveBeenCalled();
  });

  it('should return 401 if no token is provided', async () => {
    const req = { headers: {} };
    const res = getMockRes();
    const next = jest.fn();
    await auth(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'No token provided' });
    expect(next).not.toHaveBeenCalled();
  });

  it('should return 401 if token is invalid', async () => {
    const req = { headers: { authorization: 'Bearer invalidtoken' } };
    const res = getMockRes();
    const next = jest.fn();
    await auth(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid token' });
    expect(next).not.toHaveBeenCalled();
  });
}); 