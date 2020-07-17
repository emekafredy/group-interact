import jwt from 'jsonwebtoken';
import { compare } from 'bcrypt';
import { AuthenticationError } from 'apollo-server-express';

require('dotenv').config();

export const generateToken = async (user) => {
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
  
  return token;
};

export const loginUser = async (email, password, models) => {
  const user = await models.User.findOne({ where: { email }, raw: true });
  if (!user) {
    return {
      success: false,
      errors: [{ path: 'email', message: 'Wrong email' }],
    };
  }

  const passwordMatched = await compare(password, user.password);

  if (!passwordMatched) {
    return {
      success: false,
      errors: [{ path: 'password', message: 'Wrong password' }],
    };
  }

  const token = await generateToken(user);

  return {
    success: true,
    user,
    token
  }
}

export const getUser = async (req) => {
  const token = req.headers.authorization;
 
  if (token) {
    try {
      return await jwt.verify(token, process.env.JWT_SECRET);
    } catch (e) {
      throw new AuthenticationError('Your session expired. Sign in again.');
    }
  }
};
