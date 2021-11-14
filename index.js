const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config();


const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    console.log('Connected to the employeetracker_db database.')
);

    db.connect( (err) => {
    if (err){
        throw error;
    }
});


userOptions();

function userOptions() {
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
    db.query('SELECT * FROM company_db.department;', function (err, results) {
        console.table(results);
        userOptions();
    })
};


function viewRoles() {
    db.query('SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;', function (err, results) {
        console.table(results);
        userOptions();
    })
};


function viewEmployees() {
    db.query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id', function (err, results) {
        console.table(results);
        userOptions();
    })
};


function addDepartment() {
    return inquirer.prompt([
        {
            type: "input",
            name: "departmentName",
            message: "What is the name of the department you would like to add?"
        },
    ])
    .then(function (answer) {
        console.log(answer.departmentName);
        db.query("INSERT INTO department (name) VALUES (?)", [answer.departmentName], function (err, results) {

        })
        userOptions();
    })
};


function addRole() {
    console.log("errors suck");
    userOptions();
};


function addEmployee() {
    console.log("errors suck");
    userOptions();

};


function updateEmployeeRole() {
    console.log("errors suck");
    userOptions();
};