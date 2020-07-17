import { ApolloServer } from 'apollo-server-express';
import log from 'fancy-log';

import typeDefs from '../typeDefinitions';
import resolvers from '../resolvers';
import models from '../../database/models';
import { getUser } from '../../helpers/auth';

models.sequelize.sync({}).then(() => {
  log.info('Database Migrated');
});

const graphqlEndpoint = 'http://localhost:8000/graphql';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const user = await getUser(req);
 
    return {
      models,
      user,
    };
  },
  playground: {
    endpoint: graphqlEndpoint,
    settings: {
      'editor.theme': 'dark'
    }
  }
});

export default server;
