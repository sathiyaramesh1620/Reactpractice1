import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Chat from "./Components/Chat"

const App = () => {
  const[user,setUser]=useState('tamil')
  return (
    <div> 
      <Chat user={user}/>
    </div>
  )
}

export default App