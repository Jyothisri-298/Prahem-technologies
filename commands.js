const program = require('commander');
const { addTask } = require('./index');
const { prompt } = require('inquirer');


//Task deatils
const taskDetails = [
    {
        type:'input',
        name: 'taskname',
        message:'Enter the Task name'
    },
    {
        type:'input',
        name: 'taskdescription',
        message:'Enter the Task description'
    },
];

program
      .command('addtask')
      .alias('a')
      .description('Add a new task')
      .action(() => {
          prompt(taskDetails).then(answers => addTask(answers));
      });
program
.version('1.1.0')
.description('Managing the tasks');

program.parse(process.argv);