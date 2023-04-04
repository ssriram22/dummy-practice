const  Employeedetailslist= ({employees, handleDelEmp, handleAddEmp}) => {
    // let employees = props.employees;
    return ( 
        <div>
            {employees.map((employee)=>(
        <div className='detailsdiv' key={employee.id}>
          <h1>{employee.name}</h1>
          <h2>{employee.email}</h2>
          <button onClick={()=>handleDelEmp(employee.id)}>Delete</button>
          <button onClick={()=>handleAddEmp()}>Add</button>
        </div>
      ))}
        </div>
     );
}
 
export default Employeedetailslist;