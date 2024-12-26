import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Add = () => {
    const [employee, setEmployee] = useState({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_numbe: "",
        hire_date: "",
        job_title: "",
        dept_id: "",
        salary: "",
        mgr_id: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setEmployee((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8000/employee", employee)
            navigate("/")
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center mb-4">Add New Employee</h1>
                <div className="row justify-content-center mb-4">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow-sm p-4">
                            <form>
                                <div className="mb-3">
                                    <input
                                        type="number"
                                        name="id"
                                        className="form-control"
                                        onChange={handleChange}
                                        placeholder="Enter ID"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="first_name"
                                        className="form-control"
                                        onChange={handleChange}
                                        placeholder="Enter First Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="last_name"
                                        className="form-control"
                                        onChange={handleChange}
                                        placeholder="Enter Last Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        onChange={handleChange}
                                        placeholder="Enter Email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="number"
                                        name="phone_number"
                                        className="form-control"
                                        onChange={handleChange}
                                        placeholder="Enter Phone Number"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="date"
                                        name="hire_date"
                                        className="form-control"
                                        onChange={handleChange}
                                        placeholder="Enter Hire Date"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="job_title"
                                        className="form-control"
                                        onChange={handleChange}
                                        placeholder="Enter Job Title"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="number"
                                        name="dept_id"
                                        className="form-control"
                                        onChange={handleChange}
                                        placeholder="Enter Department ID"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="number"
                                        name="salary"
                                        className="form-control"
                                        onChange={handleChange}
                                        placeholder="Enter Salary"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="number"
                                        name="mgr_id"
                                        className="form-control"
                                        onChange={handleChange}
                                        placeholder="Enter Manager ID"
                                    />
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                        onClick={handleClick}
                                    >
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add
