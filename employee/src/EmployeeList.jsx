import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const EmployeeList = () => {
    const [empdata, empdatachange] = useState(null)
    useEffect(() => {
        fetch("http://localhost:8000/emp").then((res) => {
            return res.json();

        }).then((resp) => {
            empdatachange(resp)
            console.log(resp)

        })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])
    return (
        <div className='container'>
            <div className="card">
                <div className="card-header">
                    <h2>Employee List</h2>
                </div>
                <div className="card-body">
                    <div className='divbtn'>
                        <Link to ="employee/create"className="btn btn-success">Add New(+)</Link>
                    </div>
                    <table className='table table-bordered'>
                        <thead className='bg-primary text-white'>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {
                                empdata &&
                                empdata.map((item =>
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.Email}</td>
                                        <td>{item.phone}</td>
                                        <td><a className='btn btn-success'>Edit</a>
                                        <a className='btn btn-danger'>Remove</a>
                                        <a className='btn btn-primary'>Details</a></td>
                                    </tr>

                                ))
                            }                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmployeeList