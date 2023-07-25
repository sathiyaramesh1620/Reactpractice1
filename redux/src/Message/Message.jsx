import React from 'react'
import{useDispatch} from 'react-redux'
import { gmaction,gnaction } from '../redux/message/messege.action'
const Message = () => {
 let msg="hello"
 let dispatch=useDispatch()
 let gmHandler=()=>{
  dispatch(gmaction)
 }
 let gnHandler=()=>{
  dispatch(gnaction)
 }
  return (
    <div>
<h1>Message:{msg}</h1>
      <button onClick={gmHandler}>GM</button>
      <button onClick={gnHandler}>GN</button>
    </div>
    
  )
}

export default Message