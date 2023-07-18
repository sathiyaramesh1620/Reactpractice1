import React from 'react'

const UserDetails = (props) => {
    return (
        <div>
            <h1>User Details</h1>
            <pre>{JSON.stringify(props)}</pre>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header"></div>
                        <div className="card-body">
                            <ul className='list-group'>
                                <li className='list-group-item'>
{props.selectedUser.name}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails