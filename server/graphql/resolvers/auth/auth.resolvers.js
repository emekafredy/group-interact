import { skip } from 'graphql-resolvers';

export const checkAuth = (_parent, _args, { user }) =>
  user ? skip : new Error('Login in to access resource');
