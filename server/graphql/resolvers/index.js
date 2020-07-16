import { mergeResolvers } from '@graphql-tools/merge';

import user from './user/user.resolvers';

const resolvers = [
  user
];

export default mergeResolvers(resolvers);
