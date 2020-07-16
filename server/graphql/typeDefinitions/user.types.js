import { gql } from 'apollo-server-express';

const user = gql`
  type User {
    id: Int!
    name: String!
    username: String!
    email: String!
  }

  type AuthResponse {
    user: User
  }

  type Query {
    getUser(id: Int!): User!
  }

  type Mutation {
    register(name: String!, username: String!, email: String!, password: String!): AuthResponse!
  }
`;

export default user;
