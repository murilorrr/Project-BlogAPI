const JWT = require('jsonwebtoken');

const generateJwt = (payload) => {
  const SECRET = process.env.JWT_SECRET || 'secret';
  const JWTconfig = {
    algorithm: 'HS256',
    expiresIn: '10h',
  };
  
  const token = JWT.sign(payload, SECRET, JWTconfig);

  return token;
};

module.exports = generateJwt;
