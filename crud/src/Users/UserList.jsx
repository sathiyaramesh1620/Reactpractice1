import React from 'react'

const UserList = (props) => {
 let selectedUser=(user)=>{
console.log(user)
 props.selectedUser(user)
}
  return (
    <div><h1>UserList</h1>
<pre>{JSON.stringify(props)}</pre>
<div className="container">
    <div className="row">
        <div className="col">
<table className='table'>
    <thead className='bg-primary text-white'>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
        </tr>
    </thead>
    <tbody>
        {
          props.users.map((user)=>{
            return<tr key={user.id} onClick={selectedUser.bind(this,user) }>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
           })
        }
    </tbody>
</table>
        </div>
    </div>
</div>



    </div>
  )
}

export default UserList