const { db: { connectionURL, databaseName } } = require('./config');
const { MongoClient, ObjectId } = require('mongodb'); 

async function connectToDB() {
    try {
        const client = await MongoClient.connect(connectionURL, { useNewUrlParser: true });
        const db = client.db(databaseName);   
       // C. Create 
        // const tasks = await db.collection('tasks').insertMany([{ description: 'code', completed: true }, { description: 'exercise', completed: false }, {description: 'sleep', completed: false }])\
        
        // R.  READING DATA | QUERYING DOCUMENTS
        // let lastTask = await db.collection('tasks').findOne({ _id: new ObjectId('64d5058b6dfea63fd728f2bd') });
        
        // U.  UPDATE Documents | $set: {} , $inc: 1  
        db.collection('users').updateOne({
            _id: new ObjectId('64d498d6487bf74d6a7cc9fc')
        }, {
            $inc: {
                age: 100
            }
        }).then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        }); 

    } catch (error) {
        console.error('Unable to connect to database', error);
    }
}
connectToDB(); 
