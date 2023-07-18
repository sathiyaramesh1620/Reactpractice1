import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UsersApp from './Users/UsersApp'
import UserList from './Users/UserList'
const App = () => {
  return (
    <Router>
<Navbar/>
<Routes>
  <Route path="/user" element={<UsersApp/>}/>
  <Route path="/userlist" element={<UserList/>}/>
</Routes>
 
    </Router>
  )
}

export default App