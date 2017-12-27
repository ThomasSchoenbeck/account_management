import { User as db } from '../connectors';
 
// const findById = (id) => {
//   return db.findById(id);
// };

// const findByName = (name) => { return db.find( {name} ); }
// const findByEmail = (email) => { return db.find( {email} ); }
// const findByTeam = (team) => { return db.find({ team }); };

const create = (user) => {
  return db.create(user);
};

export const User = {
  // findById,
  // findByName,
  // findByEmail,
  // findByTeam,
  create,
};