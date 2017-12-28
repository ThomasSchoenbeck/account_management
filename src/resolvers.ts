import { client } from './connectors';
// import { resolve } from 'dns';

const teamsQuery = 'SELECT id, name FROM teams';
const teamQuery = 'SELECT id, name FROM teams where name like ?';

export const resolvers = {
  Query: {
    team: (obj, args, context, info ) => {
      return new Promise ( resolve => {
        client.execute(teamQuery, [args.name] ).then(result => {
          console.log(result.rows);
          resolve(result.rows);
        });
      });
    },
    teams: (obj, args, context, info ) => { 
      return new Promise( resolve  => {
        client.execute(teamsQuery).then(result => { 
        console.log(result.rows);
        resolve(result.rows);
        });
      });

    },
  },
}

console.log('Resolvers initialized');