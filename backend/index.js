import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "abdelaziz_a1",
    database: "hrms_database"
})

app.use(express.json()) // allow sending json usign post method
app.use(cors())

// validate good connection
app.get("/", (req, res) => {
    res.json("Hello, This Is The Backend!")
})

// get employee data
app.get("/employee", (req, res) => {
    const query = "SELECT * FROM employee"
    db.query(query, (err, data) => {
        if (err) {
            return res.json(err)
        } else {
            res.json(data)
        }
    })
})

// insert new employee
app.post("/employee", (req, res) => {
    const query = "INSERT INTO employee VALUES (?)"
    const values = [
        req.body.id,
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.phone_number,
        req.body.hire_date,
        req.body.job_title,
        req.body.dept_id,
        req.body.salary,
        req.body.mgr_id
    ]
    db.query(query, [values], (err, data) => {
        if (err) {
            return res.json(err)
        } else {
            res.json("Employee has been inserted successfully!")
        }
    })
})

// Get employee by ID
app.get("/employee/:id", (req, res) => {
    const employeeId = req.params.id;
    const query = "SELECT * FROM employee WHERE id = ?";
    db.query(query, [employeeId], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }
        if (data.length === 0) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.json(data[0]);
    });
});

// delete employee
app.delete("/employee/:id", (req, res) => {
    const employeeId = req.params.id
    const query = "DELETE FROM employee WHERE id = ?"
    db.query(query, [employeeId], (err, data) => {
        if (err) {
            return res.json(err)
        } else {
            res.json({ message: "Employee deleted successfully" })
        }
    })
})

// update employee
app.put("/employee/:id", (req, res) => {
    const employeeId = req.params.id
    const updatedData = req.body
    const query = "UPDATE employee SET first_name = ?, last_name = ?, email = ?, phone_number = ?, hire_date = ?, job_title = ?, dept_id = ?, salary = ?, mgr_id = ? WHERE id = ?"
    const values = [
        updatedData.first_name,
        updatedData.last_name,
        updatedData.email,
        updatedData.phone_number,
        updatedData.hire_date,
        updatedData.job_title,
        updatedData.dept_id,
        updatedData.salary,
        updatedData.mgr_id,
        employeeId
    ]
    db.query(query, values, (err, data) => {
        if (err) {
            return res.json(err)
        }
        else {
            res.json({ message: "Employee updated successfully" })
        }
    })
})

app.listen(8000, () => {
    console.log("Connected To Backend!")
})
