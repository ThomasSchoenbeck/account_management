// import { Team, Project } from './connectors';
import { Teams } from './connectors';

import { ObjectId } from 'mongodb';

// import { User } from './models';

// const Teams = db.collection('teams');

// export const mutations = {
//   createUser: (_, { user }) => {
//     return User.create(user);
//   }
// }

const prepare = (o) => {
  o._id = o._id.toString()
  return o
}

export const resolvers = {
  Query: {
    // team: async (root, args, context, info ) => {
    // team: async (root, args, context, info ) => {
    // // team: async (_, { name }) => {
    //   // console.log(`name: ${name}`);
    //   // console.log(`root: ${root}`); // unfedined
    //   console.log(`args: ${JSON.stringify(args)}`);
    //   // console.log(`context: ${JSON.stringify(context)}`); // {}
    //   // console.log(`info: ${JSON.stringify(info)}`);
    //   // return prepare(await Teams.find( { args } ))
    //   // return await Teams.findOne( { args } );
    //   return await Teams.findOne( { _id: ObjectId(args._id) }, { name: args.name } );
    // },
    teamById: async (root, args, context, info ) => {
      return await Teams.findOne( { _id: ObjectId(args._id) } );
    },
    teamByName: async (root, args, context, info ) => {
      // https://chartio.com/resources/tutorials/how-to-use-a-sql-like-statement-in-mongodb/
      return await Teams.find( { name: /args.name/ } );
    },
    // teams() { return Team.find({}); },
    teams: async () => {
      return (await Teams.find({}).toArray()).map(prepare)
    },
  },
  Mutation: {
    createTeam: async (root, args, context, info) => {
      const res = await Teams.insert(args)
      return prepare(await Teams.findOne({_id: res.insertedIds[1]}))
    },
  }
}



    // teams() { return Team.find({}).toArray().map(prepare) },
    // users() { return User; },
    // createUser(user) { return user; },
    // user: (_, { id }) => { return User.findById(id); },
    // getUserByEmail: ( { email }) => { console.log("resolvers: executing getUserByEmail"); console.log(email); return User.findByEmail(email); },
    // getUserByTeam: ( { team }) => { return User.findByTeam(team.id); },