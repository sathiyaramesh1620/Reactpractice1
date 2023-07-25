import React, { useRef, useState } from 'react'

const SignUp = () => {
    let buttonEl = useRef(null);
    let passwordE1=useRef(null)
    // let [terms, setTerms] = useState(false)
    let acceptTermsHandler = (event) => {

// setTerms(event.target.checked)
buttonEl.current.disabled=!event.target.checked
    }
   let ihandler=(event)=>{
passwordE1.current.type="text"
    }

    return (
        <div className='container mt-5'>
            <div className="row">   
                <div className="col">
                    {/* <pre>{JSON.stringify(terms)}</pre> */}
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
                                <div className="form-group">
                                    <input type="password"  ref={passwordE1}className='form-control' placeholder='password'  />
                                    <i className="fa fa-eye" onClick={ihandler}></i>
                                </div>
                                <div className='form-check'>
                                    <input type="checkbox" className='form-check-input' onChange={acceptTermsHandler}/>
                                    <label className='form-check-label'>Accept Terms and Conditions</label>
                                </div>
                                <div>
                                    <input ref={buttonEl} type="submit" value="signup" className='btn btn-success' disabled />
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