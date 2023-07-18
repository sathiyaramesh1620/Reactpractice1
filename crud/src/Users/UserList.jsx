import React from 'react'

const UserList = (props) => {
 let selectedUser=(user)=>{
console.log(user);
props.selectedUser(user)
    }
  return (
    <div>
        <h1>User List</h1>
        <pre>{JSON.stringify(props)}</pre>
        <div className="row">
            <div className="col">
                <table className='table'>
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            props.users.map((user)=>{
                                return<tr key={user.id} onClick={selectedUser.bind(this,user)}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default UserList