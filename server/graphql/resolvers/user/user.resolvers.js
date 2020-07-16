const userResolvers = {
  Query: {
    getUser: async (_parent, { id }, { models }) => {
        return models.User.findOne({ where: { id } })
    }
  },
  Mutation: {
    register: async (parent, args, { models }) => {
      try {
        const user = await models.User.create(args);

        return {
          user
        };
      } catch (err) {
        throw err;
      }
    },
  }
};

export default userResolvers;
