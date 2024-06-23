import inquirer from "inquirer";
import chalk from "chalk";


let todoList : string [] = [];
let conditions = true;

console.log(chalk.black.greenBright("\n\tWelcome to Mrs Babar - Todo-List Application\n"))


let main = async () => {
    while(conditions){
        let option = await inquirer.prompt([
            {
                name : "choice",
                type : "list",
                message : chalk.yellow("Select an option you want to do :"),
                choices : ["Add Task","Delete Task","Update Task","View Todo-List","Exit"],
            }
        ]);
        if(option.choice === "Add Task"){
            await addTask()
        }
        else if(option.choice === "Delete Task"){
            await deleteTask()
        }
        else if(option.choice === "Update Task"){
            await updateTask()
        }
        else if(option.choice === "View Todo-List"){
            await viewTask()
        }
        else if(option.choice === "Exit"){
            conditions = false
        }
    }
}
//function to add new task to list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name : "task",
            type : "input",
            message : chalk.black.red("Enter your new task :")
        }
    ]);
    todoList.push(newTask.task);
    console.log(chalk.black.cyanBright(`\n ${newTask.task}task added successfully in Todo-List`))
}
//function to view all todo-list task
let viewTask = async () => {
    console.log(chalk.black.bgRedBright("\n Your Todo-List: \n"));
    todoList.forEach((task,index) => {
        console.log(chalk.black.blueBright(`${index + 1}: ${task}`))
    })
}

//function to del a task from list
let deleteTask = async () => {
    await viewTask()
    let taskIndex = await inquirer.prompt([
        {
            name : "index",
            type : "number",
            message : chalk.black.red("Enter index no. of the task you want to delete :")
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(chalk.black.cyanBright(`\n ${deletedTask} ===> task is deleted successfully from your Todo-List`))
}

//function to update task 
let updateTask = async () => {
    await viewTask()
    let update_task_index = await inquirer.prompt([
        {
            name : "index",
            type : "number",
            message : chalk.black.red("Enter 'index no' of task you want to update :")
        },
        {
            name : "new_task",
            type : "input",
            message : chalk.black.red("Now enter new task name :")
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task
    console.log(chalk.black.cyanBright(`\n Task at index no. ${update_task_index.index - 1} 
        updated successfully! [For updated list check ==> "View Todo-List"]`))
}

main()