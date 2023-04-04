import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import Employeedetailslist from './Employeelist'

function App() {
  const [employees, setEmployees] = useState([
    {"name":"Shyam", "email":"shyamjaiswal@gmail.com", "id":1},  
    {"name":"Bob", "email":"bob32@gmail.com", "id":2},  
    {"name":"Jai", "email":"jai87@gmail.com", "id":3}  
  ])
  const handleDelEmp=(id)=>{
    const newEmployees = employees.filter( employee => employee.id !== id);
    setEmployees(newEmployees);
  }
  const handleAddEmp=()=>{
    const newEmployees = employees.filter(employee=>{employee.id==="4", employee.name==="luther"});
    setEmployees(newEmployees);
  }

  return (
    <div className="Employeedetails">
      <Employeedetailslist employees={employees} handleDelEmp={handleDelEmp} handleAddEmp={handleAddEmp}/>
    </div>
  )
}

export default App
