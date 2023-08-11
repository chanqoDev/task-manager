const mongoose = require("mongoose"); 
const { db: { connectionURL } } = require('../../config');

mongoose.connect(`${connectionURL}/task-manager-api`, {
    useNewUrlParser: true
}); 