import logo from './logo.svg';
import './App.css';
import EmployeeList from './EmployeeList';
import {BrowserRouter as Router, Routes,Route}from 'react-router-dom'
import EmpCreate from './EmpCreate';
import EmpDetails from './EmpDetails';
import EmpEdit from './EmpEdit';
function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Operations</h1>
<Router>
  <Routes>
    <Route path="/" element={<EmployeeList/>}/>
    <Route path="/employee/create"element={<EmpCreate/>}/>
    <Route path="/" element={<EmpDetails/>}/>
    <Route path="/" element={<EmpEdit/>}/>
    <Route/>
  </Routes>
</Router>
    </div>
  );
}

export default App;
