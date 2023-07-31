import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Message from './Message/Message'
import { Provider } from 'react-redux'
import{store}from './redux/store'
const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/message"  element={<Message/>}/>
      </Routes>
    </Router>
    </Provider>
  )
}

export default App