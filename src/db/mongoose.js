const mongoose = require("mongoose"); 
const { db: { connectionURL } } = require('../../config');
const validator = require('validator'); 

mongoose.connect(`${connectionURL}/task-manager-api`, {
    useNewUrlParser: true
}); 

 // 1. Task model with description and completed fields
// const Tasks = mongoose.model("Tasks", {
//     description: {
//         type: String,
//     }, 
//     completed: {
//         type: Boolean
//     }
// })
//  // 2. Create a new Instance of the Model
// const task = new Tasks({
//     description: "Reading a Book",
//     completed: true
// })
//  // 3. Save the Model to the db
// task.save().then(() => {
//      console.log(task)
//  }).catch((err) => {console.log('error:', err)})
 




// user model 

const User = mongoose.model('User', {
    name: { type: String, required: true, trim: true },
     age: { type: Number, default: 0, 
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number'); 
            }
        }
    },
    email: { type: String, required: true, trim: true, lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');  
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if ( value.toLowerCase().includes('password')) {
                 throw new Error('Password cannot contain Password')
             }  
        }
   }, 
}); 

const me = new User(
    {
        name: '   Joe Tortilla   ',
        email: ' franchesco@gmail.com',
        password: '  meowPasswerd  '
    }); 

me.save().then(() => {
    console.log(me);
}).catch((error) => {
    console.log("Error!", error);
});

