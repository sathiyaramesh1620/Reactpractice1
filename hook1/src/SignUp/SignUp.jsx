import React, { useRef } from 'react'

const SignUp = () => {
   let buttonEl= useRef(null)

  return (
    <div className='container'>
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <input type="text" className='form-control' placeholder='Email' />
                            </div>
                            <div className="form-group">
                                <input type="text" className='form-control' placeholder='Mobile number' />
                            </div>
<div className='form-check'>
    <input type="checkbox"  className='form-check-input'/>
    <label className='form-check-label'>Accept Terms and Conditions</label>
</div>
        <div>
            <input ref={buttonEl} type="submit" value="signup" className='btn btn-success'  disabled/>
        </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default SignUp