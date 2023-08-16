//importing inqurier
const inquirer = require("inquirer");
//importing sql queries
const Emp = require("./sql/sql");

// function for viewing department after inquirer selects
function viewDepartments() {
  let sql = new Emp();
  sql.viewDep();
  setTimeout(() => {
    main();
  }, 100);
}
// viewing all roles
function viewAllRoles() {
  let sql = new Emp();
  sql.viewRol();
  setTimeout(() => {
    main();
  }, 100);
}
// viewing employees
function viewAllEmployees() {
  let sql = new Emp();
  sql.viewEmp();
  setTimeout(() => {
    main();
  }, 100);
}
// adding department
function addDep() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addDepart",
        message: "Enter a valid department name",
        validate: (addDepart) => {
          if (!addDepart) {
            console.log("Must take input");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((data) => {
      let sql = new Emp();
      sql.addDep(data);
    })
    .then(() => {
      main();
    });
}
// adding role
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Enter a title name",
        validate: (title) => {
          if (!title) {
            console.log("Must take input");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "salary",
        message: "Enter a salary",
        validate: (salary) => {
          if (!salary) {
            console.log("Must take input");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "department_id",
        message: "Enter a department id",
        validate: (department_id) => {
          if (!department_id) {
            console.log("Must take input");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((data) => {
      let sql = new Emp();
      sql.addRoll(data);
    })
    .then(() => {
      main();
    });
}
//adding employee
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "Enter a firstName",
        validate: (firstName) => {
          if (!firstName) {
            console.log("Must take input");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "lastName",
        message: "Enter a lastName",
        validate: (lastName) => {
          if (!lastName) {
            console.log("Must take input");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "role_id",
        message: "Enter a role id",
        validate: (role_id) => {
          if (!role_id) {
            console.log("Must take input");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "manager_id",
        message: "Enter a Manager id",
        validate: (manager_id) => {
          if (!manager_id) {
            console.log("Must take input");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((data) => {
      let sql = new Emp();
      sql.addEmployee(data);
    })
    .then(() => {
      main();
    });
}
//updating employee
function updateEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "employeeID",
        message: "Enter a EmployeeID",
        validate: (employeeID) => {
          if (!employeeID) {
            console.log("Must take input");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "updatedRole",
        message: "Enter a updatedRole_id",
        validate: (updatedRole) => {
          if (!updatedRole) {
            console.log("Must take input");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((data) => {
      let sql = new Emp();
      sql.updateRole(data);
    })
    .then(() => main());
}

// Main of employee tracker.
async function main() {
  console.log("Employee Tracker Main Menu");
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Choose one of the following options:",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
        ],
        default: "View All Employees",
      },
    ])
    // if name variable matches an answer run certain function.
    .then((answers) => {
      switch (answers.menu) {
        case "view all departments":
          viewDepartments();
          break;
        case "view all roles":
          viewAllRoles();
          break;
        case "view all employees":
          viewAllEmployees();
          break;
        case "add a department":
          addDep();
          break;
        case "add a role":
          addRole();
          break;
        case "add an employee":
          addEmployee();
          break;
        case "update an employee role":
          updateEmployee();
          break;
        default:
          console.log("You must choose one of the options");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

//starting application
main();
