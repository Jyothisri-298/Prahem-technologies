const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//db connection
const db = mongoose.connect('mongodb://localhost:27017/prahem' , { useNewUrlParser: true ,useUnifiedTopology: true  });

//import model
const Task = require('./models/task');


//Add the task
const addTask = (task) => {
    Task.create(task).then(task => {
        console.info('Task has been created. ');
        mongoose.connection.close();
    });
}

//Edit the task
const editTask = (taskname,taskInfo) => { 
    Task.updateOne({taskname:taskname},{$set : taskInfo})
    .then(task => {
        console.info('Task has been modified.');
        mongoose.connection.close();
    });
}

//Delete the task
const deleteTask = (taskname) => {
    Task.deleteOne({taskname:taskname}).then(task => {
        console.info('Task has been deleted.');
        mongoose.connection.close();
    });
}

//Export the methods
module.exports = {
    addTask,
    deleteTask,
    editTask
}