// const config = require('./config'); 
// const connectionURL = config.db.connectionURL;
// const databaseName = config.db.databaseName;
// const mongodb = require('mongodb');
// const ObjectID = mongodb.ObjectId; 
// const MongoClient = mongodb.MongoClient; 

const { db: { connectionURL, databaseName } } = require('./config');
const { MongoClient, ObjectId } = require('mongodb'); 

const id = new ObjectId(); // Mongo Constructor function for GUID's
console.log(id); 
console.log(id.getTimestamp()); 

async function connectToDB() {
    try {
        const client = await MongoClient.connect(connectionURL, { useNewUrlParser: true });
        const db = client.db(databaseName);   
       
        // insert one collection with 3 fields id, name, age
        db.collection('users').insertOne({
            _id: id, 
            name: 'Christian', 
            age: 30
        }); 


        // // Creating task
        // const result = await db.collection('task').insertMany([
        //     { description: 'code', completed: false },
        //     { description: 'work-out', completed: true },
        //     { description: 'sleep', completed: false }
        // ]);
        // console.log(result.insertedIds);
        
    } catch (error) {
        console.error('Unable to connect to database', error);
    }
}
connectToDB(); 
