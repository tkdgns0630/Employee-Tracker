const db = require("../connection");
// using connection to call data from server

//creating class to use functions from another file.
class EmpTrack {
  // show all table content for departments
  viewDep() {
    const qry = "SELECT * FROM DEPARTMENT";
    db.query(qry, (error, result) => {
      console.log("\n");
      console.table(result);
    });
  }

  // show all table content for roles
  viewRol() {
    const qry = "SELECT * FROM role";
    db.query(qry, (error, result) => {
      console.log("\n");
      console.table(result);
    });
  }

  // show all table content for employees
  viewEmp() {
    const qry = "SELECT * FROM employee";
    db.query(qry, (error, result) => {
      console.log("\n");
      console.table(result);
    });
  }

  // adding department to department table
  addDep(params) {
    const qry = "INSERT INTO department (name) VALUES(?)";
    db.query(qry, params.addDepart, (error, result) => {});
  }

  // adding role to role table
  addRoll(params) {
    const params1 = [params.title, params.salary, params.department_id];
    console.log(params1);
    const qry = "INSERT INTO role (title,salary,department_id) VALUES(?,?,?)";
    db.query(qry, params1, (error, result) => {});
  }
  // adding employee to employee table
  addEmployee(params) {
    const params2 = [
      params.firstName,
      params.lastName,
      params.role_id,
      params.manager_id,
    ];
    const qry =
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)";
    db.query(qry, params2, (error, result) => {});
  }
  // updating role in employee table
  updateRole(params) {
    const params3 = [params.updatedRole, params.employeeID];
    const qry = "UPDATE employee SET role_id = ? WHERE id = ?";
    db.query(qry, params3, (error, result) => {});
  }
}
module.exports = EmpTrack;
