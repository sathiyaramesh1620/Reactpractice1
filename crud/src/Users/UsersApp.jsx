import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import UserList from './UserList';
import UserDetails from './UserDetails';
const UsersApp = () => {
   let[users,setUsers]= useState([]);
   let[selectedUser,setSelectedUser]=useState({})
   useEffect(()=>{
    let url='https://jsonplaceholder.typicode.com/users'
Axios.get(url)
.then((response)=>{
    console.log(response.data)
    setUsers(response.data)

})
.catch(()=>{})
   },[])
   let selectedHandler=(user)=>{
    setSelectedUser(user)

   }
   
  return (
    <div className="container">
        <div className="row">
        <pre>{JSON.stringify(users)}</pre>
            <div className="col-md-8">
                {
                    users.length >0?<><UserList users={users} selectedUser={selectedHandler}/></>:<>****NO DATA****</>
                }

            </div>
            <div className="col-md-4">
                {
                 Object.keys(selectedUser).length>0?<>
                 <UserDetails selectedUser={selectedUser}/>
                 </> :<>****<h1>NO data</h1></> 
                }

            
               
            </div>
          

        </div>
    </div>
  )
}

export default UsersApp