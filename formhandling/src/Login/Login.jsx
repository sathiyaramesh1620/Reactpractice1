import React from 'react'
import { useState } from 'react'

const Login = () => {
    let [login, setLogin] = useState({
        "email":"",
        "password":""
    })
//    let emailHandler = (event) => {
//     console.log(event)
//     console.log(event.target)
//     console.log(event.target.value)
// setLogin({email:event.target.value})
//     }
//    let passwordHandler = (event) => {
// setLogin({password:event.target.value})
//     }
let updateHandler=(event)=>{
    setLogin({
[event.target.name]:event.target.value
    })
}
   let submitHandler=(event)=>{
    event.preventDefault()
console.log(login)
    }
    return (
        <div>
            <h2>Login Page</h2>
            <pre>{JSON.stringify(login)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <form action="">
                                    <div className="form-group">
                                        <input type="text" className='form-control' placeholder="Email Id"
                                        name="email"
                                        onChange={updateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className='form-control' placeholder="password"
                                        name="password"
                                        onChange={updateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" 
                                        value="Login"
                                        onClick={submitHandler}
                                        className='btn btn-primary' />
                                    </div>
                                </form>
                            </div>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login