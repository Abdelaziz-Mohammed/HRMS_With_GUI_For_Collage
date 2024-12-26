import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Employee = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        const fetchAllEmployees = async () => {
            try {
                const res = await axios.get("http://localhost:8000/employee")
                setEmployees(res.data)
            }
            catch(err) {
                console.log(err)
            }
        }
        fetchAllEmployees()
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/employee/${id}`)
            setEmployees(employees.filter(employee => employee.id !== id))
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="container mt-4">
                <h1 className="text-center mb-4">Employee Page</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 employees">
                    {
                        employees.map((employee, index) => {
                            return (
                                <div className="col" key={index}>
                                    <div className="card h-100 shadow-sm">
                                        <div className="card-body">
                                            <h5 className="card-title">Employee ID: {employee.id}</h5>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">
                                                    <strong>First Name:</strong> {employee.first_name}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Last Name:</strong> {employee.last_name}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Email:</strong> {employee.email}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Phone:</strong> {employee.phone_number}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Hire Date:</strong> {employee.hire_date}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Job Title:</strong> {employee.job_title}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Department ID:</strong> {employee.dept_id}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Salary:</strong> ${employee.salary}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Manager ID:</strong> {employee.mgr_id}
                                                </li>
                                                <div className="d-flex justify-content-evenly mt-3">
                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => handleDelete(employee.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                    <button className="btn btn-primary btn-sm">
                                                        <Link to={`/update/${employee.id}`} className="text-white text-decoration-none">
                                                            Update
                                                        </Link>
                                                    </button>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="text-center mt-4 mb-4">
                    <button className="btn btn-primary">
                        <Link to="/add" className="text-white text-decoration-none">
                            Add New Employee
                        </Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Employee
