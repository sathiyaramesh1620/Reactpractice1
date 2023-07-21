import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import HooksEx from './HooksEX/HooksEX'
import Counter from './Couter/Counter'
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/hooksEX" element={<HooksEx/>}/>
        <Route path="/counter" element={<Counter/>}/>
      </Routes>
      
    </Router>
  )
}

export default App