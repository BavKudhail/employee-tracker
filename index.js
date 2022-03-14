// node modules
const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");
const figlet = require("figlet");

const PORT = process.env.PORT || 3000;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const connection = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: "",
    database: "eTracker_db",
  },
  console.log(`Connected to eTracker_db database`)
);

connection.connect((err) => {
  if (err) throw err;
  //   show logo
  logo();
});

function logo() {
  figlet("Employee Database!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
    runPrompt();
  });
}

const runPrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do today?",
        choices: [
          "View All Employees",
          "View All Departments",
          "View All Roles",
          "View All Employees By Department",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
          "Update Employee Manager",
          "Delete Department",
          "Delete Role",
          "Delete Employee",
          "None",
        ],
      },
    ])
    .then(function (answers) {
      switch (answers.action) {
        //   cases
        case "View All Employees":
          viewAllEmployees();
          break;

        case "View All Departments":
          viewAllDepartments();
          break;

        case "View All Roles":
          viewAllRoles();
          break;

        case "View All Employees By Department":
          viewEmployeesByDept();
          break;

        case "Add Department":
          addDept();
          break;

        case "Add Role":
          addRole();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Update Employee Role":
          updateEmployeeRole();
          break;

        case "Update Employee Manager":
          updateEmployeeManager();
          break;

        case "Delete Department":
          deleteDept();
          break;

        case "Delete Role":
          deleteRole();
          break;

        case "Delete Employee":
          deleteEmployee();
          break;

        case "None":
          connection.end();
      }
    });
};

// FUNCTIONS

// Function to view all employees
function viewAllEmployees() {
  const sql = `SELECT 
    employee.id,
    employee.first_name,
    employee.last_name,
    employee.role_id,
    employee.manager_id
    FROM 
    employee
    `;

  connection.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    runPrompt();
  });
}

// Function to view all departments
function viewAllDepartments() {
  console.log("Execute View All Departments");
}

// Function to view all roles
function viewAllRoles() {
  console.log("Execute View All Roles");
}

// Function to view employees by department
function viewEmployeesByDept() {
  console.log("Execute View Employees By Department");
}

// Function to add department
function addDept() {
  console.log("Execute Add Department");
}

// Function to add role
function addRole() {
  console.log("Execute Add Role");
}

// Function to view add an employee
function addEmployee() {
  console.log("Execute Add Employee");
}

// Function to update employee role
function updateEmployeeRole() {
  console.log("Execute Update Employee Role");
}

// Function to update employee manager
function updateEmployeeManager() {
  console.log("Execute Update Employee Manager");
}

// Function to delete department
function deleteDept() {
  console.log("Execute Delete Department");
}

// Function to delete role
function deleteRole() {
  console.log("Execute Delete Role");
}

// Function to delete an employee
function deleteEmployee() {
  console.log("Execute Delete Employee");
}
