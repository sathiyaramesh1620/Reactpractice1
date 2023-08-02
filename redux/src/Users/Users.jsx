import React from 'react'
import {useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { fetchUserAction } from '../redux/user.action'
const Users = () => {
    let dispatch=useDispatch()
    let users= useSelector((state)=>{
        return state
    })
    useEffect(()=>{
        dispatch(fetchUserAction())
    },[])
  return (
    <div className="container">
        <h1>Users Comp</h1>
        <div className="row">
            <pre>{JSON.stringify(users)}</pre>
            <div className="col">
                <table className='table'>
                    <thead bg-dark text-white>
<tr>
    <th>ID</th>
    <th>NAME</th>
    <th>Email</th>
    <th>Phone</th>
</tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(users).length>0?<>
                            {
                                users.users.map((user)=>{
                                    return<tr>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                    </tr>
                                })
                            }
                            </>:<><h1>NO Data</h1></>
                        }
                    </tbody>
                </table>

            </div>
        </div>
    </div>
  )
}

export default Users