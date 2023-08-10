const mongoose = require("mongoose"); 
const { db: { connectionURL } } = require('../../config');
// connect Mongoose to the Database 
mongoose.connect(`${connectionURL}/task-manager-api`, {
    useNewUrlParser: true
}); 

 // 1. Define a model with description and completed fields
const Tasks = mongoose.model("Tasks", {
    description: {
        type: String
    }, 
    completed: {
        type: Boolean
    }
})
 // 2. Create a new Instance of the Model
const task = new Tasks({
    description: "Reading a Book",
    completed: true
})
 // 3. Save the Model to the db
task.save().then(() => {
     console.log(task)
 }).catch((err) => {console.log('error:', err)})
 





// we define our model User
// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// }); 

// const me = new User({
//     name: 'Chris',
//     age: 18
// }); 

// save it to the database or trow an errow
// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log("Error!", error);
// });

