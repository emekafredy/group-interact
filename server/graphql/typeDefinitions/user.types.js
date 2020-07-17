import { gql } from 'apollo-server-express';

const user = gql`
  type User {
    id: Int!
    name: String!
    username: String!
    email: String!
  }

  type AuthResponse {
    success: Boolean!
    user: User
    token: String
    errors: [Error!]
  }

  input RegisterInput {
    name: String!,
    username: String!,
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Query {
    getAllUsers: [User!]!
    getUser(id: Int!): User!
  }

  type Mutation {
    register(registerInput: RegisterInput): AuthResponse!
    login(loginInput: LoginInput): AuthResponse!
  }
`;

export default user;
