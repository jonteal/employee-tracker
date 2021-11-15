# Employee Tracker

<a name="description"></a>

## Description
The purpose of this program was to create a tool where a user or administrator could easily view, add, and update departments, roles, and employees for their company. The user will execute all functions with a command-line interface with node.js that delivers a series of prompts to implement and track information regarding employees. Along with adding employees, the user is able to add roles, salaries, and assign managers to those employees.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Description](#description)
- [User Story](#userstory)
- [Acceptance Criteria](#acceptancecriteria)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#test)
- [Questions](#questions)
- [Video](#video)
- [Screenshots](#screenshots)
- [Links](#links)
- [Resources / Credits](#credits)


<a name="userstory"></a>

## User Story
```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

<a name="acceptancecriteria"></a>

## Acceptance Critera
```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

<a name="installation"></a>

## Installation
* Clone the repository using:

```
git clone https://github.com/jonteal/employee-tracker
```
* Be sure that you are in the current working directory
* Install the dependencies ( jest and inquirer) by opening the terminal and running
```
npm install
```
* Run the project by typing the following command in the terminal:
```
node index.js
```

<a name="usage"></a>

## Usage
* In order to access the user prompts, open the terminal and right click on the "db" folder, and select "Open in Integrated Terminal". Type in the command "mysql -u root -p", and then enter in the password and hit enter. Then enter in the command "SOURCE schema.sql;" and hit enter. 
* Then enter the command "SOURCE seeds.sql;" and hit enter. Without closing the terminal, right click on the index.js file, and select "open in integrated terminal". Enter the command "node index.js" and hit enter. The main menu prompt will then be displayed. 
* Select an option and follow the prompts as they are generated. 


<a name="license"></a>

## License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


<a name="contributing"></a>

## How to Contribute
1. [Fork the repo!](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
2. Create a feature branch:
```
git checkout -b yourname-branch
```
3. Commit changes:
```
git commit -m 'Your changes here'
```
4. Push to the branch:
```
git push origin yourname-branch
```
5. Submit a pull request and wait for it to be approved or denied.

<a name="tests"></a>

## Tests
No tests available at this time.


<a name="questions"></a>

## Questions
If you have any questions or comments, please feel free to contact me by email at jonjacksonvibes@gmail.com!


<a name="video"></a>

## Video
https://drive.google.com/file/d/1Atc3PQ_L5z0A5gesrnX-7wwA-5KB67cz/view

<a name="screenshots"></a>

## Screenshots

![Screenshot of Viewed Tables](/employee-tracker/Assets/myScreenshot1.png)
![Screenshot of Sample Added Dept, Role, and Employee](/employee-tracker/Assets/myScreenshot2.png)


<a name="links"></a>

## Links
Github Repository: https://github.com/jonteal/employee-tracker


<a name="credits"></a>

## Resources / Credits
This project was authored by Jon Jackson but was given guidance for implementation and logic by fellow cohort member Laurel Thornburn. 



## Bonus [In Progress]

Try to add some additional functionality to your application, such as the ability to do the following:

* Update employee managers.

* View employees by manager.

* View employees by department.

* Delete departments, roles, and employees.

* View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.