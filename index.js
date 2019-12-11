const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//db connection
const db = mongoose.connect('mongodb://localhost:27017/prahem' , { useNewUrlParser: true ,useUnifiedTopology: true  });

//import model
const Task = require('./models/task');

//Add the task
const addTask = (task) => {
    Task.create(task).then(task => {
        console.info('Task has been created');
        db.close();
    });
}

//Export the methods
module.exports = {
    addTask
}