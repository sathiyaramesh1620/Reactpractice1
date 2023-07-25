import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProductList from './Products/ProductList'
import Createproduct from './Products/Createproduct'
const App = () => {
  return (

    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route  path="/products" element={<ProductList/>}/>
          <Route path="/createproduct" element={<Createproduct/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App