// CRUD Create. Read. Update. Delete
const mongodb = require('mongodb');

// we need a mongo client to initilize the connection   
    // MongoClient will allow us to connect and enable us to perform crud operations
        // define the connect url, db name

const MongoClient = mongodb.MongoClient;
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// we are going to set up an {} option ex: useNewURLParser
    // then a callback that will connect to the db it is asyncrhounous

async function connectToDB() {
    try {
        const client = await MongoClient.connect(connectionURL, { useNewUrlParser: true });
        console.log('Connected correctly!');
    } catch (error) {
        console.error('Unable to connect to database', error);
    }
}

connectToDB();
