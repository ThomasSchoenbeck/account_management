// at the top with imports:
// import * as mongoose from 'mongoose';


import { MongoClient, ObjectId } from 'mongodb';

// const MongoClient = require('mongodb').MongoClient; 

// const MONGO_URL = 'mongodb://localhost:32785/account_management'
const MONGO_URL = 'mongodb://localhost:32785/'

// let db;
let Teams;


// nicht dieses beispiel aber der code ist ähnlich
// https://www.howtographql.com/graphql-js/4-connectors/
// const start = async () => {
  // try {
    // const db = await MongoClient.connect(MONGO_URL)
    // const db = MongoClient.connect(MONGO_URL);


    MongoClient.connect(MONGO_URL, function (err, client) {
      if (err) throw err;

      console.log(`connection to ${MONGO_URL} successful`); 
    
      var db = client.db('account_management');
      Teams = db.collection('teams');

      // client.close();
    
      // db.collection('customers').findOne({}, function (findErr, result) {
      //   if (findErr) throw findErr;
      //   console.log(result.name);
      //   client.close();
      // });
    }); 




    
    // const Teams = db.collection('teams');
  // } catch (e) {
  //   console.log(e)
  // }
    // db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    // db.once('open', () => { console.log( 'Connected to mongoose') });
    
    // const Comments = db.collection('comments')
    
  // }

  // const Teams = [
  //   { name: "test" },
  // ];
  
  export { Teams };
  
  // // somewhere in the middle:
  // mongoose.Promise = global.Promise;
  
  // mongoose.connect('mongodb://localhost:32785/account_management', {
    //   useMongoClient: true
    // });
    
    // // Get the default connection
    // const db = mongoose.connection;
    // Bind connection to error event (to get notification of connection errors)
    
    
    
    // define mongoose handler
    // not sure if this is needed
    // http://mongoosejs.com/docs/populate.html examples defines Schema.Types.ObjectId, ObjectId, mongoose.Schema.Types.ObjectId, mongoose.Types.ObjectId()
    // const Schema = mongoose.Schema;
    
    // mongoose schema data types
    // String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array
    // example for relationshipts: https://stackoverflow.com/questions/34985846/mongoose-document-references-with-a-one-to-many-relationship/34986438#34986438
    
    // const teamSchema = mongoose.Schema({
//   id: Number,
//   name: String,
//   users : [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
// }, { collection: 'Teams' });

// const teamSchema = mongoose.Schema({
  //   name: String,
  // });
  
  // const Team = mongoose.model('Team', teamSchema);
  
  
  // const projectSchema = mongoose.Schema({
    //   id: Number,
    //   name: String,
    //   key: String,
    //   description: String,
    //   team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
    // }, { collection: 'Projects' });
    
    // const Project = mongoose.model('Project', projectSchema);
    
    
    // const userSchema = mongoose.Schema({
      //   dbLegiId: String,
      //   email: String,
      //   firstName: String,
      //   lastName: String,
      //   teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
      //   active: Boolean
      // }, { collection: 'Users' });
      
// const User = mongoose.model('User', userSchema);



// at the bottom, add View to the exports
// export { Team, Project, User };