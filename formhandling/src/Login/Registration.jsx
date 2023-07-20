import React, { useState } from 'react'

const Registration = () => {
    let[employe,setEmployee]=useState({
        username:"",
        email:"",
        password:"",
        mobile:""
    })
   let updateHandler=(event)=>{
setEmployee({
    [event.target.name]:event.target.value
    
})
    }
   let submitHandler=(event)=>{
    event.preventDefault()
    console.log(employe)
   }
  return (
    <div>
        <div className="container mt-5">
            <div className="row">
                <pre>{JSON.stringify(employe)}</pre>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <form onSubmit={submitHandler}>
                                <div className="form-group">
                                    <input type="text" className='form-control' name="name" placeholder='User Name' onChange={updateHandler}  />
                                </div>
                                <div className="form-group">
                                    <input type="Email" className='form-control' name="Email" placeholder='Email'
                                    onChange={updateHandler} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className='form-control' name="password" placeholder='Password'
                                    onChange={updateHandler} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className='form-control'  name="mobile"placeholder='mobile' onChange={updateHandler} />
                                </div>
                                <div>
                                    <input type="checkbox" /> Please Accept Terms&Conditions
                                </div>
                                <div className="form-group">
                                    <input type="submit" className='btn btn-success' onClick={submitHandler} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registration