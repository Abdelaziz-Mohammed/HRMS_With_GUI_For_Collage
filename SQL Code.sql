-- $-$-$-$-$-$-$-$-$-$-$-$-$-$-$-$-$ --
-- HRMS Database Creation And Deletion --

CREATE DATABASE hrms_database;

-- DROP DATABASE hrms_database;

-- $-$-$-$-$-$-$-$-$-$-$-$-$-$-$-$-$ --
-- Displaying All Database Tables --

SELECT * FROM employee;
SELECT * FROM department;
SELECT * FROM payroll;
SELECT * FROM performance_evaluation;
SELECT * FROM recruitment;

-- Describe All Database Tables --
DESCRIBE employee;
DESCRIBE department;
DESCRIBE payroll;
DESCRIBE performance_evaluation;
DESCRIBE recruitment;

-- $-$-$-$-$-$-$-$-$-$-$-$-$-$-$-$-$ --
-- Creating All Tables --

USE hrms_database;

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50),
    phone_number VARCHAR(15),
    hire_date DATE NOT NULL,
    job_title VARCHAR(50) NOT NULL,
    dept_id INT,
    salary DECIMAL(10, 2),
    mgr_id INT,
    FOREIGN KEY(mgr_id) REFERENCES employee(id) ON DELETE SET NULL
);

CREATE TABLE department (
    id  INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(100),
    mgr_id INT,
    mgr_start_date DATE,
    FOREIGN KEY(mgr_id) REFERENCES employee(id) ON DELETE SET NULL
);

ALTER TABLE employee
ADD FOREIGN KEY(dept_id) REFERENCES department(id) ON DELETE SET NULL;

CREATE TABLE payroll (
    id INT PRIMARY KEY,
    emp_id INT,
    pay_date DATE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    bonus DECIMAL(10, 2) NOT NULL,
    deductions DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY(emp_id) REFERENCES employee(id) ON DELETE SET NULL
);

CREATE TABLE performance_evaluation (
    id INT PRIMARY KEY,
    emp_id INT,
    evaluation_date DATE NOT NULL,
    score INT NOT NULL,
    FOREIGN KEY(emp_id) REFERENCES Employee(id) ON DELETE SET NULL
);

CREATE TABLE recruitment (
    id INT PRIMARY KEY,
    job_title VARCHAR(50) NOT NULL,
    dept_id INT,
    posting_date DATE NOT NULL,
    closing_date DATE NOT NULL,
    status VARCHAR(50),
    FOREIGN KEY(dept_id) REFERENCES department(id) ON DELETE SET NULL
);

-- $-$-$-$-$-$-$-$-$-$-$-$-$-$-$-$-$ --
-- Inserting Data Into Database --
-- employee table --
INSERT INTO employee
VALUES
(3, 'Emily', 'Johnson', 'emily.johnson@example.com', '1231231234', '2018-03-01', 'Manager', NULL, 90000, NULL),
(1, 'John', 'Doe', 'john.doe@example.com', '1234567890', '2020-01-15', 'Software Engineer', NULL, 75000, 3),
(2, 'Jane', 'Smith', 'jane.smith@example.com', '9876543210', '2019-05-10', 'Data Analyst', NULL, 68000, 3),
(5, 'Sarah', 'Davis', 'sarah.davis@example.com', '7897897891', '2020-09-30', 'HR Manager', NULL, 80000, NULL),
(4, 'Michael', 'Brown', 'michael.brown@example.com', '4564564567', '2021-06-20', 'HR Specialist', NULL, 60000, 5);

-- department table --
INSERT INTO department
VALUES
(101, 'IT', 'New York', 3, '2018-03-01'),
(102, 'Analytics', 'Chicago', NULL, NULL),
(103, 'Human Resources', 'San Francisco', 5, '2020-09-30');

-- updating dept_id for employees --
UPDATE employee
SET dept_id = 101
WHERE id IN(1, 3);

UPDATE employee
SET dept_id = 102
WHERE id = 2;

UPDATE employee
SET dept_id = 103
WHERE id IN(4, 5);

-- payroll table --
INSERT INTO payroll
VALUES
(1, 1, '2024-12-01', 7500, 500, 50),
(2, 2, '2024-12-01', 6800, 400, 60),
(3, 3, '2024-12-01', 9000, 700, 70),
(4, 4, '2024-12-01', 6000, 300, 40),
(5, 5, '2024-12-01', 8000, 600, 30);

-- performance_evaluation table --
INSERT INTO performance_evaluation
VALUES
(1, 1, '2024-11-15', 85),
(2, 2, '2024-11-15', 90),
(3, 3, '2024-11-15', 88),
(4, 4, '2024-11-15', 80),
(5, 5, '2024-11-15', 92);

-- recruitment table --
INSERT INTO recruitment
VALUES
(1, 'Junior Software Engineer', 101, '2024-10-01', '2024-10-31', 'Closed'),
(2, 'Data Scientist', 102, '2024-11-01', '2024-11-30', 'Open'),
(3, 'HR Assistant', 103, '2024-11-15', '2024-12-15', 'Open'),
(4, 'IT Support Specialist', 101, '2024-12-01', '2024-12-31', 'Open'),
(5, 'Marketing Analyst', 102, '2024-10-15', '2024-11-15', 'Closed');



-- $-$-$-$-$-$-$-$-$-$-$-$-$-$-$-$-$ --
-- Eng: Abdelaziz Mohamed
-- $-$-$-$-$-$-$-$-$-$-$-$-$-$-$-$-$ --


