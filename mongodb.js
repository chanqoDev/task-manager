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
        // insert a collection user  with .insertOne method & insert fields
         /**
         const result = await db.collection('users').insertOne({ name: 'Christian',  age: 30 }); 
         - console.log(results.insertedId) for insertOne
        const insertedDocument = await db.collection('users').findOne({ _id: result.insertedId });
        console.log(insertedDocument);
        */
        
        // call the insertMany method on our user collection to insert many users fields into the collection at once, log the _id values of the inserted documents
         const result = await db.collection('users').insertMany([
            {
            name: 'jasibe', 
            age: 28
            },
            {
                name: 'christian',
                age: 5
            }
        ]); 
          console.log(result.insertedIds);
 
    } catch (error) {
        console.error('Unable to connect to database', error);
    }
}
connectToDB(); 
