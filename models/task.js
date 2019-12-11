const mongoose = require('mongoose');


//Task schema
const taskSchema = mongoose.Schema({
    taskname: { type : String},
    taskdescription: { type : String}
});


//Export model

module.exports = mongoose.model('task', taskSchema);
