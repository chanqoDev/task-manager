const mongodb = require('mongodb');
// Initilize mongo client to the connection MongoClient will allow us to connect and enable us to perform 
// CRUD Create. Read. Update. Delete operations
const MongoClient = mongodb.MongoClient;
const connectionURL = 'mongodb://127.0.0.1:27017'; // local host db
const databaseName = 'task-manager'; // dbName

async function connectToDB() {
    try {
        const client = await MongoClient.connect(connectionURL, { useNewUrlParser: true });
        const db = client.db(databaseName); 
        // insert a collection users
        db.collection('users').insertOne({
            // inserting fields
            name: 'Christian', 
            age: 30
        }); 

        // console.log('Connected correctly!');
    } catch (error) {
        console.error('Unable to connect to database', error);
    }
}
connectToDB(); 
