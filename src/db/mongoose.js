const mongoose = require("mongoose"); 
const { db: { connectionURL } } = require('../../config');

mongoose.connect(`${connectionURL}/task-manager-api`, {
    useNewUrlParser: true
}); 


 // 1. Task model with description and completed fields
const Tasks = mongoose.model("Tasks", {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    }
}); 