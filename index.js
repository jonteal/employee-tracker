const inquirer = require('inquirer');
const mysql = require('mysql2');

// require('dotenv').config();

// const db = mysql.createConnection(
//     {
//     }
// );




initialPrompt();

function initialPrompt() {
    return inquirer.prompt([
        {
            type: "list",
            name: "displayOptions",
            message: "What would you like to do?",
            choices: ["View All Departments", "View All Roles", "View All Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role"]
        }
    ])

    .then((answers) => {
        if (answers.displayOptions === "View All Departments") {
            viewDepartments();
        }
        if (answers.displayOptions === "View All Roles") {
            viewRoles();
        }
        if (answers.displayOptions === "View All Employees") {
            viewEmployees();
        }
        if (answers.displayOptions === "Add Department") {
            addDepartment();
        }
        if (answers.displayOptions === "Add Role") {
            addRole();
        }
        if (answers.displayOptions === "Add Employee") {
            addEmployee();
        }
        if (answers.displayOptions === "Update Employee Role") {
            updateEmployeeRole();
        }
    })
};


function viewDepartments() {

};


function viewRoles() {

};


function viewEmployees() {

};


function addDepartment() {

};


function addRole() {

};


function addEmployee() {

};


function updateEmployeeRole() {

};