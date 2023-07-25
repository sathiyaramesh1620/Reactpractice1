import React, { useState } from 'react'
import ChatMessage from './ChatMessage'

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const handleSubmit = () => { }
  return (
    <div>
    <div className='d-flex align-item-center justify-content-center '>
      <h2 className='text-primary'>Chat App</h2>
    </div>
<div className="row mt-4">
  <div className="col-xl-4 col-lg-4 col-sm-3 col-2"></div>
  <div className="col-xl-4 col-lg-4 col-sm-6 col-8 chat-message">
{
  messages.map((message)=>(
    <ChatMessage {...message} user={user} />
  ))
}
<div className='d-flex mt-2'>
  <input type="text" className='form-control' value={text} onChange={(e)=>setText(e.target.value)}  />
 <button  className='btn btn-success ms-3' onClick={handleSubmit}> send </button>

</div>
<div id='copyright' className='mt-3'>
copyrights reserved tamil skill
</div>
  </div>
</div>

</div>

  )
}

export default Chat