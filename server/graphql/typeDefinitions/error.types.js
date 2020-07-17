import { gql } from 'apollo-server-express';

const error = gql`
  type Error {
    path: String!
    message: String
  }
`
export default error;
