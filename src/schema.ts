import gql from 'graphql-tag';
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
import { GraphQLSchema } from 'graphql';

const typeDefs = gql`
  type Team {
    _id: String
    name: String
  }

  input InputTeam {
    name: String!
  }
  
  type Query {
    teamById(_id: String): Team
    teamByName(name: String): Team
    teams: [Team]
  }
  
  type Mutation {
    createTeam(team: InputTeam!): Team
  }
  
  schema {
    query: Query
    mutation: Mutation
  }
  `;
  
  // const typeDefs = gql`
  //   type Team {
    //     id: Int!
    //     name: String!
    //     users: [User]
    //   }
    
    //   type Project {
      //     id: Int!
      //     name: String!
      //     key: String!
      //     description: String
      //     team: Team
      //   }
      
      //   type User {
        //     dbLegiId: String
        //     email: String
        //     firstName: String
        //     lastName: String
        //     teams: [Team]
        //     active: Boolean
//   }

//   input InputUser {
  //     dbLegiId: String!
  //     email: String!
  //     firstName: String!
  //     lastName: String!
  //   }
  
  //   type Query {
    //     team: Team
    //     users: [User]
    //     createUser: User
    //   }
    
    // type Mutation {
      // createUser(user: InputUser!): User
    // }
    
    //   schema {
      //     query: Query
      //     mutation: Mutation
      //   }
      // `;
      
export const schema = makeExecutableSchema({
  allowUndefinedInResolve: true,
  typeDefs,
  resolvers,
}) as GraphQLSchema;