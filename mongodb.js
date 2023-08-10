const { db: { connectionURL, databaseName } } = require('./config');
const { MongoClient, ObjectId } = require('mongodb'); 

async function connectToDB() {
    try {
        const client = await MongoClient.connect(connectionURL, { useNewUrlParser: true });
        const db = client.db(databaseName);   
       // C. Create 
        const tasks = await db.collection('tasks').insertMany([{ description: 'code', completed: true }, { description: 'exercise', completed: false }, {description: 'sleep', completed: false }])
        console.log(tasks);         
/**
 *     // READ  - Querying Documents 

db.collection('users').findOne({ name: 'jasibe' }, (error, user) => {
    if (error) {
        return console.log('unable error')
    }
    console.log(user);
})

        const insertedDocument = await db.collection('users').findOne({ _id: new ObjectId('64d4701366b1114c9ba6f54d') });
        console.log(insertedDocument);

// we get a cursor with find (its a pointer to (data) mongodb database or other forms of aggrigations)
        
let d = await db.collection('users').find({ age: 30 }).toArray((error, users) => {
    if (error) {
        console.error('Error while finding documents:', error);
    } else {
        console.log(users);
    }
});
        
let x = db.collection('users').find({ age: 30 }).count((error, count) => {
    if (error) {
        console.error('Error while finding documents:', error);
    } else {
        console.log('count:', count);
    }
});   
        console.log(x); 
 **/
 
    // R. QUERYING DOCUMENTS / READING DATA
        let lastTask = await db.collection('tasks').findOne({ _id: new ObjectId('64d5058b6dfea63fd728f2bd') });
        let completedTask = await db.collection('tasks').find({ completed: false }).toArray((error, collections) => console.log(collections)); 
        let count = await db.collection('tasks').find({ completed: true }).count((err, countCollections) => console.log(countCollections));

        console.log(count); 
    } catch (error) {
        console.error('Unable to connect to database', error);
    }
}
connectToDB(); 
