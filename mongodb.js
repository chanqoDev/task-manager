const { db: { connectionURL, databaseName } } = require('./config');
const { MongoClient, ObjectId } = require('mongodb'); 

async function connectToDB() {
    try {
        const client = await MongoClient.connect(connectionURL, { useNewUrlParser: true });
        const db = client.db(databaseName);
        // C. Create  .insertOne()  .insertMany()
        // const tasks = await db.collection('tasks').insertMany([
        //     { description: 'code', completed: true },
        //     { description: 'exercise', completed: false },
        //     { description: 'sleep', completed: false }
        // ])
        
        // R.  READING DATA | QUERYING DOCUMENTS .findOne() || .findMany()
        // let lastTask = await db.collection('tasks').findOne({ _id: new ObjectId('64d5058b6dfea63fd728f2bd') });
        
        // U.  UPDATE DOCUMENTS & Fields : update Documents.udpateOne().udpateMany() || date Fields => $set: { } , $inc: 1
        /**
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

        db.collection('tasks').updateMany({ completed: false }, { $set: { completed: true } }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log('Updating document error failed', error)
        })
        */



        // D. DELETE DOCUMENTS & FIELDS : deleteMany({}) || .deleteOne({})
        
        // db.collection('users').deleteMany({
        //     age: 28
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) =>
        // { console.log('error:', error) });

        // Delete using .deleteOne() 
    
        // delete one document from task using .deleteOne
        // db.collection('tasks').deleteOne({
        //     _id: new ObjectId('64d50ac949d739de7da6d6d0')
        // }).then(result => {
        //     console.log(result)
        // }).catch(err => console.error(err)); 

    } catch (error) {
        console.error('Unable to connect to database', error);
    }
}
connectToDB(); 
