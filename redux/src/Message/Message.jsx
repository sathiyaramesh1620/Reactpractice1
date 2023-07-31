import React from 'react'
import {useDispatch,useSelector}from 'react-redux'
import {gmAction,gnAction} from '../redux/message/message.action'
const Message = () => {
    let dispatch= useDispatch()
   let message =useSelector((state)=>{
    return state.message
   })
    let gmHandler=()=>{
        dispatch(gmAction())
    }
    let gnHandler=()=>{
        dispatch(gnAction())
    }
  return (
    <div>
        <pre>{JSON.stringify(message)}</pre>
        <h1>Message:{message.message}</h1>
        {/* <h1>Message:{msg}</h1> */}
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>
  )
}

export default Message