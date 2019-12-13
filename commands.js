#!/usr/bin/env node

const program = require('commander');
const { addTask , deleteTask , editTask } = require('./index');
const { prompt } = require('inquirer');


//Add task options
const taskDetails = [
    {
        type:'input',
        name: 'taskname',
        message:'Enter the Task name: '
    },
    {
        type:'input',
        name: 'taskdescription',
        message:'Enter the Task description: '
    },

];

//Edit task options
 const editTaskDetails = [
     {
         type:'input',
         name:'taskname',
         message:'Enter the task name'
     },
    {
        type:'checkbox',
        name : "options",
        message: "Please select the anyone of the option",
        choices : ['Mark it as processed','Edit the description']
    }
];

//Edit description option
const editDescription = [
    {
        type:'input',
        name:'description',
        message:'Enter the task description:',
    }
];
//Delete task option
const taskDelete = [
    {
        type:'input',
        name:'name',
        message:'Enter the task name:',
    } 
];

//Actions for Addtask
program
      .command('addtask')
      .alias('a')
      .description('Add the task')
      .action(() => {
          prompt(taskDetails).then(answers => 
            {
                answers['taskstatus'] = "in process";
                addTask(answers);
            }); 
      });

//Actions for Edittask
program
      .command('edittask')
      .alias('e')
      .description('edit the task')
      .action( () => {
          prompt(editTaskDetails).then(answers => {
              let taskname=answers['taskname'];
              let editInfo = ''
              if(answers.options[0] === 'Mark it as processed' && answers.options.length == 1){
                  let status = 'processed';
                  editInfo = {"taskstatus": status};
                  editTask(taskname, editInfo)
              }else if(answers.options[0] === 'Edit the description'){
                   prompt(editDescription).then(answers => 
                    {
                        editInfo = {"taskdescription": answers['description']};
                        editTask(taskname, editInfo);
                    });
              }else{
                  console.log("Select only one option.");
                  process.exit();
              }
            })
      });

//Actions for Deletetask
program
      .command('deletetask')
      .alias('d')
      .description('delete the task')
      .action(() => {
        prompt(taskDelete).then(answers => {
            let name = answers['name'];
            deleteTask(name);
        });
    });


program
.version('1.1.0')
.description('Managing the tasks');

program.parse(process.argv);