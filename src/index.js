const express = require('express'); 
require('../src/db/mongoose');
const User = require('./models/user'); 
const Tasks = require("./models/tasks"); 

const app = express(); 
const port = process.env.PORT || 3000; 
app.use(express.json());

app.post('/tasks', (req, res) => {
    const tasks = new Tasks(req.body); 
    tasks.save().then(() => {
        res.status(201).res().send(tasks); 
    }).catch((error) => {
        res.status(400).send(error); 
    })
}); 

// app.post('/users', (req, res) => {
//     const user = new User(req.body); 
//     user.save().then(() => {
//          res.status(201).send(user); 
//     }).catch((error) => {
//         res.status(400).send(error)
//     })
// });

 
app.listen(port, () => {
    console.log('server is up on port' + port); 
})