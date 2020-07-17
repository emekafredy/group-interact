const { mergeTypeDefs } = require('@graphql-tools/merge');

import user from './user.types';
import error from './error.types';

const types = [
  user,
  error
];

export default mergeTypeDefs(types, { all: true });
