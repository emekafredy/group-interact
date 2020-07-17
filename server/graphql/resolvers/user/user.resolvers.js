import { combineResolvers } from 'graphql-resolvers';

import { loginUser, generateToken } from '../../../helpers/auth';
import { checkAuth } from '../auth/auth.resolvers';
import { formatErrors } from '../../../helpers/errorResponse';

const userResolvers = {
  Query: {
    getAllUsers: combineResolvers(
      checkAuth,
      async (_parent, _args, { models, user }) => models.User.findAll()
    ),
    getUser: combineResolvers(
      checkAuth,
      (_parent, { id }, { models }) => models.User.findOne({ where: { id } })
    )
  },
  Mutation: {
    register: async (_parent, { registerInput }, { models }) => {
      try {
        const user = await models.User.create(registerInput);
        const token = await generateToken(user);

        return {
          success: true,
          token,
          user
        };
      } catch (err) {    
        return {
          success: false,
          errors: formatErrors(err),
        };
      }
    },
    login: async (_parent, { loginInput }, { models }) => {
      const authData = await loginUser(loginInput.email, loginInput.password, models);
      return authData;
    }
  }
};

export default userResolvers;
