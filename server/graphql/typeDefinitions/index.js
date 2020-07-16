const { mergeTypeDefs } = require('@graphql-tools/merge');

import user from './user.types';

const types = [
  user
];

export default mergeTypeDefs(types, { all: true });
