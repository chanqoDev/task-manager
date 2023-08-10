const mongodb = require('mongodb');
const config = require('./config'); 
// CRUD Create. Read. Update. Delete operations
const MongoClient = mongodb.MongoClient; 
const connectionURL = config.db.connectionURL;
const databaseName = config.db.databaseName;



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
