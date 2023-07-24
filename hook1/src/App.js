import React from 'react'
import UseRef from './UseRef/UseRef'
import Navbar from './Navbar/Navbar'
import SignUp from './SignUp/SignUp'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route  path="/useRef" element={<UseRef/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      
    </Router>
  )
}

export default App