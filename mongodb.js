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
        

        // Creating task
        const result = await db.collection('task').insertMany([
            { description: 'code', completed: false },
            { description: 'work-out', completed: true },
            { description: 'sleep', completed: false }
        ]);
        console.log(result.insertedIds);
        
    } catch (error) {
        console.error('Unable to connect to database', error);
    }
}
connectToDB(); 
