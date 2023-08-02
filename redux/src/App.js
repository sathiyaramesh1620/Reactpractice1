import React from 'react'

import Navbar from './Navbar/Navbar'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Users from './Users/Users'
import {Provider} from "react-redux"
import { store } from './redux/store'
const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/user' element={<Users/>}/>
      </Routes>
    </Router>
     </Provider>
  )
}

export default App