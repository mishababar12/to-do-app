"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let todoList = [];
let conditions = true;
console.log(chalk_1.default.black.greenBright("\n\tWelcome to Mrs Babar - Todo-List Application\n"));
let main = () => __awaiter(void 0, void 0, void 0, function* () {
    while (conditions) {
        let option = yield inquirer_1.default.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk_1.default.yellow("Select an option you want to do :"),
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            yield addTask();
        }
        else if (option.choice === "Delete Task") {
            yield deleteTask();
        }
        else if (option.choice === "Update Task") {
            yield updateTask();
        }
        else if (option.choice === "View Todo-List") {
            yield viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
});
//function to add new task to list
let addTask = () => __awaiter(void 0, void 0, void 0, function* () {
    let newTask = yield inquirer_1.default.prompt([
        {
            name: "task",
            type: "input",
            message: chalk_1.default.black.red("Enter your new task :")
        }
    ]);
    todoList.push(newTask.task);
    console.log(chalk_1.default.black.cyanBright(`\n ${newTask.task}task added successfully in Todo-List`));
});
//function to view all todo-list task
let viewTask = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(chalk_1.default.black.bgRedBright("\n Your Todo-List: \n"));
    todoList.forEach((task, index) => {
        console.log(chalk_1.default.black.blueBright(`${index + 1}: ${task}`));
    });
});
//function to del a task from list
let deleteTask = () => __awaiter(void 0, void 0, void 0, function* () {
    yield viewTask();
    let taskIndex = yield inquirer_1.default.prompt([
        {
            name: "index",
            type: "number",
            message: chalk_1.default.black.red("Enter index no. of the task you want to delete :")
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(chalk_1.default.black.cyanBright(`\n ${deletedTask} ===> task is deleted successfully from your Todo-List`));
});
//function to update task 
let updateTask = () => __awaiter(void 0, void 0, void 0, function* () {
    yield viewTask();
    let update_task_index = yield inquirer_1.default.prompt([
        {
            name: "index",
            type: "number",
            message: chalk_1.default.black.red("Enter 'index no' of task you want to update :")
        },
        {
            name: "new_task",
            type: "input",
            message: chalk_1.default.black.red("Now enter new task name :")
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(chalk_1.default.black.cyanBright(`\n Task at index no. ${update_task_index.index - 1} 
        updated successfully! [For updated list check ==> "View Todo-List"]`));
});
main();
