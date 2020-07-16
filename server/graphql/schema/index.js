import { ApolloServer } from 'apollo-server-express';

import typeDefs from '../typeDefinitions';
import resolvers from '../resolvers';

import models from '../../database/index';

const graphqlEndpoint = 'http://localhost:8000/graphql';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: graphqlEndpoint,
    settings: {
      'editor.theme': 'light'
    }
  },
  context: {
    models
  },
});

export default server;
