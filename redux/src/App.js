import React from 'react'
import Navbar from './Navbar/Navbar'
import Message from './Message/Message'
import {BrowserRouter as Router, Routes,Route}  from 'react-router-dom' 
import { store } from './redux/store'
import {Provider} from 'react-redux'
const App = () => {
  return (
    <div>
      <Provider store={store}>
<Router>
      <Navbar/>
      <Routes>
        <Route path="/message" element={<Message/>}/>
      </Routes>
    </Router>
    </Provider>
    </div>
    
  )
}

export default App