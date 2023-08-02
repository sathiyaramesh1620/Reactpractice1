import React from 'react'
import Product from './Product/Product'
import Navbar from './Navbar/Navbar'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Provider} from "react-redux"
import { store } from './redux/store'
const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </Router>
    </Provider>
  )
}

export default App