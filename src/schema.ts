import gql from 'graphql-tag';
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
import { GraphQLSchema } from 'graphql';

const typeDefs = gql`
  type Team {
    id: String
    name: String
  }

  input InputTeam {
    name: String!
  }
  
  type Query {
    team(name: String): [Team]
    teams: [Team]
  }
  
  
  schema {
    query: Query
  }
`;

export const schema = makeExecutableSchema({
  allowUndefinedInResolve: true,
  typeDefs,
  resolvers,
}) as GraphQLSchema;

console.log('Schema initialized');