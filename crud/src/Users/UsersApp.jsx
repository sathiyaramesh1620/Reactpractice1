import React, { useEffect, useState } from 'react'
import UserList from './UserList'
import UserDetails from './UserDetails'
import Axios from 'axios'
const UsersApp = () => {
    let [users, setUsers] = useState({})
    let [errmessage, setErrMessage] = useState("")
    let[selectedUser,setSelectedUser]=useState({})
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            setUsers(response.data)

        }).catch(() => {

        })
    }, [])
  let  selecteduserHandler=(user)=>{
setSelectedUser(user)
    }
    return (
        <div className='container'>
            <h2>User App</h2>
            <pre>{JSON.stringify(users)}</pre>
            <div className="row">
                <div className="col-md-8">
                    {
                        users.length > 0 ? <>
                            <UserList users={users} selectedUser={selecteduserHandler} />

                        </> : null
                    }

                </div>
                <div className="col-md-4">
                    {
                        Object.keys(selectedUser).length>0?<>
 <UserDetails  selectedUser={selectedUser}/>
                        </>:<><h1>no data</h1></>
                    }
                   
                </div>
            </div>
        </div>
    )
}

export default UsersApp