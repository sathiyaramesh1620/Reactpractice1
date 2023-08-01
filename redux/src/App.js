import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router,Routes,Route, } from 'react-router-dom'
import Product from './Product/Product'
import { Provider } from 'react-redux'
import {store} from './redux/store'
const App = () => {
  return (
    <Provider store={store}>
<Router>
  <Navbar/>
  <Routes>
    <Route path="/message" element={<Product/>}/>
  </Routes>
</Router> 
</Provider> )
}

export default App