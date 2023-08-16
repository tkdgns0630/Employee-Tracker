-- Create database
DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;
-- Use employee tracker database
USE employee_tracker;
-- Drop if table exist
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;
-- Creating department table
CREATE TABLE department (
     id INTEGER AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(30)
);
-- Creating role table
CREATE TABLE role (
     id INTEGER AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(30),
     salary DECIMAL,
     department_id INTEGER,
     FOREIGN KEY (department_id)
     REFERENCES department(id)
     ON DELETE SET NULL
);

-- Creating employee table
CREATE TABLE employee (
     id INTEGER AUTO_INCREMENT PRIMARY KEY,
     first_name VARCHAR(30),
     last_name VARCHAR(30),
     role_id INTEGER,
     manager_id INTEGER,
     FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL,
     FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);