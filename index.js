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
    db.query('SELECT * FROM company_db.department;', function (err, results) {
        let departmentArray = [];
    results.forEach(result => departmentArray.push({name: result.name, value: result.id}));
    
    return inquirer.prompt([
        {
            type: "input",
            name: "roleName",
            message: "What is the name of the role you would like to add?"
        },
        {
            type: "input",
            name: "roleSalary",
            message: "What is the salary of this role?"
        },
        {
            type: "list",
            name: "roleDepartment",
            message: "What department will this role work in?",
            choices: departmentArray
        }
    ])
    .then((answers) => {

        db.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answers.roleName, answers.roleSalary, answers.roleDepartment], function (err, results) {
            console.log(err);
        })
        userOptions();
    })

})
};


// Add employee function.
function addEmployee() {

    // Uses the db.query to grab all current roles that are available in the database
    db.query('SELECT * FROM company_db.role;', function (err, results) {
        
        // Creating array variable to hold available roles
        let roleArray = [];

        // Takes each result and pushes into the roleArray with it's title and id
    results.forEach(result => roleArray.push({ name: result.title, value: result.id}));
    
    // Inquire prompt to ask first name, last name, and role the employee will have
    return inquirer.prompt([
        {
            type: "input",
            name: "employeeFirstName",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "employeeLastName",
            message: "What is the employee's last name?"
        },
        {
            type: "list",
            name: "employeeRole",
            message: "What role will the employee have?",
            choices: roleArray // roleArray is the list of available roles gathered from the query above
        },

    ])

    // Puts all answers into new arrays to be inserted into the database below
    .then((answers) => {
        let newFirstName = answers.employeeFirstName;
        let newLastName = answers.employeeLastName;
        let newEmployeeRole = answers.employeeRole;

        db.query('SELECT * FROM company_db.employee;', function (err, results) {
            let employeeNameArray = [];
        results.forEach(result => employeeNameArray.push({ name: result.first_name + ' ' + result.last_name, value: result.id}));

        return inquirer.prompt([
            {
                type: "list",
                name: "employeeManager",
                message: "Who is the employee's manager",
                choices: employeeNameArray
            },
        ])
        .then((answers) => {
            console.log(newEmployeeRole);
        let managerOptions = answers.employeeManager;
            db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [newFirstName, newLastName, newEmployeeRole, managerOptions], function (err, results) {
                console.log(err);
            })
            userOptions();
        })
        })
        })
    })
};


function updateEmployeeRole() {
    db.query('SELECT * FROM company_db.employee;', function (err, results) {
        let employeeNameArray = [];
    results.forEach(result => employeeNameArray.push({ name: result.first_name + ' ' + result.last_name, value: result.id}));
        return inquirer.prompt([
            {
                type: "list",
                name: "updateEmployee",
                message: "Which employee are you updating today?",
                choices: employeeNameArray
            },
        ])

        .then((answer) => {
            let employeeID = answer.updateEmployee;
        db.query('SELECT * FROM company_db.role;', function (err, results) {
            let roleOptions = [];
        results.forEach(result => roleOptions.push({ name: result.title, value: result.id}));
            // console.log(roleOptions);

            return inquirer.prompt([
                {
                    type: "list",
                    name: "updateRole",
                    message: "What is the employee's new role?",
                    choices: roleOptions
                }
            ])

        .then((answer) => {
            let roleID = answer.updateRole;
            
            db.query('UPDATE company_db.employee SET role_id = ? WHERE id = ?', [roleID, employeeID], function (err, results) {
                userOptions();
            })
        })
        })
        })
    })
};