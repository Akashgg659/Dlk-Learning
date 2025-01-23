
import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'



const PythonLogicalOperatorPage = () => {

 
  const navigate = useNavigate()




  const Tryityourself = () => {
    const examplecode = `
a = 10
b = 5
result = a + b
print(result)`;

navigate("/python/pythonArithmetic/compiler", {state:{code: examplecode.trim()}})

  }
  return (
<>
  


<div className='paddownforcol'
id="content-container" style={{ minHeight: "100vh" }} 
>



  
  




 

        
 <div >
<h1> <h1>Python Logical Operator</h1></h1>  {/* This will display the "Python Tutorial" text as a heading */}
</div>

<div>
<p className='text-justify wid'>
Logical operators in Python are used to combine conditional statements and perform logical operations on Boolean values (True or False). These operators are commonly used in if statements, while loops, and other control flow structures to evaluate multiple conditions.

</p>  
</div>


<div className=''>
      <h4 className='p-2'><b>Types of Logical Operators in Python</b></h4>
    </div>


 




<div className='text-justify wid '>
<ul className='row pt-3 pb-3 text-dark'>
  <li> AND  (and)</li>
  <li> OR  (or).</li>
  <li> NOT  (not)</li>
  
</ul>
</div>



      <h4><b>1. AND (and)</b></h4>
      <div className='text-start'>
      <h5 className='text-start'>The and operator returns True if both conditions on either side of the operator are True. 
        If any of the conditions is False, it returns False. It is commonly used when you want to check
         if both conditions are satisfied</h5>

      </div>
      
   



<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow bg-white">
  
  <div class=" bg-light text-dark p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = <span className='text-danger'>10</span></p>
            <p className=' '> b = <span className='text-danger'>5</span></p>
            <p className='text-primary'> # Check if both conditions are True</p>
           
            <p className=''> if a {`>`} <span className='text-danger'>0</span> 
            and b {`>`} <span className='text-danger'>0</span> :</p>
            <p>  <span className='text-warning'>print</span> ( <span className='text-success'>"Both conditions are True"</span>)</p>
            <p> else:</p>
            <p>  <span className='text-warning'>print</span>( <span className='text-success'>"At least one condition is False"</span>)</p>
    </pre>
  </div>

 
  <div class="text-start bg-light">
    <div className='p-2'>
    <button 
      class="btn btn-primary px-2 py-2" 
      onClick={ Tryityourself}
    >
      Try it Yourself
    </button>
    </div>
    
  </div>
</div>



</div>



 


    
    <div className='p-2'>
      <h4><b>2. OR (or)</b></h4>
      <h5>The or operator returns True if at least one of the conditions is True. If both conditions are False, it returns False. It is useful when you want to check if either one or both conditions are satisfied.</h5>
    </div>


    <div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow bg-white">
  
  <div class=" bg-light text-dark p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = <span className='text-danger'>5</span></p>
            <p className=' '> b = <span className='text-danger'> -3</span></p>
            <p className='text-primary'> # Check if at least one condition is True</p>
           
            <p className=''> {`if a > 0 or b > 0:`}</p>
            <p>   <span className='text-warning'>print</span>
            (<span className='text-success'>"At least one condition is True"</span>)</p>
            <p> else:</p>
            <p>  
               <span className='text-warning'>  print</span>
               (<span className='text-success'>"Both conditions are False"</span>)</p>
    </pre>
  </div>

 
  <div class="text-start bg-light">
    <div className='p-2'>
    <button 
      class="btn btn-primary px-2 py-2" 
      onClick={ Tryityourself}
    >
      Try it Yourself
    </button>
    </div>
    
  </div>
</div>



</div>


    

    

    <div className='p-2'>
      <h4><b>3. NOT (not)</b></h4>
      <h5>
      The not operator is used to reverse the Boolean value of a condition. If the condition is True, not will return False, and if the condition is False, not will return True. It is often used to negate a condition..</h5>
    </div>


   

    <div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow bg-white">
  
  <div class=" bg-light text-dark p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = True</p>
            <p className=' '> b = False</p>
            <p className='text-primary'> # Negate the condition</p>
           
            <p className=''> {`if not b:`}</p>
            <p className=''><span className='text-warning'>   print</span> (<span className='text-success'>"b is False"</span>)p</p>
            <p> else:</p>
            <p> <span className='text-warning'>  print</span>(<span className='text-success'>"b is True"</span>)</p>
    </pre>
  </div>

 
  <div class="text-start bg-light">
    <div className='p-2'>
    <button 
      class="btn btn-primary px-2 py-2" 
      onClick={ Tryityourself}
    >
      Try it Yourself
    </button>
    </div>
    
  </div>
</div>



</div>




<div className='p-3'>
        <h4 className=''><b>Logical Operator Truth Table</b></h4>
        <h5 className=''>Here’s a quick reference for the behavior of the logical operators:</h5>
      </div>

      <div className="container mt-4">
  <div className="p-2">
   
    <table className="table table-bordered table-hover table-striped text-center shadow">
      <thead className="thead-dark">
        <tr>
          <th scope="col">A</th>
          <th scope="col">B</th>
          <th scope="col">A and B</th>
          <th scope="col">A or B</th>
          <th scope="col">not A</th>


        </tr>
      </thead>
      <tbody>
        <tr>
          <td>True</td>
          <td>True</td>
          <td>True</td>
          <td>True</td>
          <td>False</td>

        </tr>
        <tr>
        <td>True</td>
        <td>False</td>
          <td>False</td>
          <td>True</td>
          <td>False</td>
          
        </tr>
        <tr>
        <td>True</td>
        <td>True</td>
          <td>True</td>
          <td>True</td>
          <td>False</td>
        </tr>
        <tr>
        <td>False</td>
        <td>False</td>
        <td>False</td>
        <td>False</td>
        <td>True</td>
        </tr>
        
      </tbody>
    </table>
  </div>
</div>



    



    

<div className='p-3'>
        <h4 className=''><b>Using Logical Operators in Python</b></h4>
        <h5 className=''>Logical operators are often used with comparison operators to form complex conditions.</h5>
      </div>
    

    
      <div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow bg-white">
  
  <div class=" bg-light text-dark p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> x = 10</p>
            <p className=' '> y = 5</p>
            <p className='text-primary'> # Check if x is greater than 0 and y is less than 10</p>
           
            <p className=''> {`if x > 0 and y < 10:`}</p>
            <p>   <span className='text-warning'>  print</span> (<span className='text-success'>"Both conditions are satisfied."</span>)</p>
            <p> else:</p>
            <p>  <span className='text-warning'>   print</span> (<span className='text-success'>"One or both conditions are not satisfied."</span>)</p>
    </pre>
  </div>

 
  <div class="text-start bg-light">
    <div className='p-2'>
    <button 
      class="btn btn-primary px-2 py-2" 
      onClick={ Tryityourself}
    >
      Try it Yourself
    </button>
    </div>
    
  </div>
</div>



</div>

   


<div className='p-3'>
        <h4 className=''><b>Summary of Logical Operators:</b></h4>
 
      </div>


      
    
      <div className="container mt-4">
  <div className="p-2">
   
    <table className="table table-bordered table-hover table-striped text-center shadow">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Operator</th>
          <th scope="col">Description</th>
          <th scope="col">Example	</th>
          <th>Result</th>
        

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>and	</td>
          <td>Returns True if both conditions are True. Otherwise False.</td>
          <td>{`a > 0 and b > 0	`}</td>
          <td>True or False</td>
        

        </tr>
        <tr>
        <td>or</td>
        <td>Returns True if at least one condition is True. Otherwise False.</td>
          <td>{`>a > 0 or b > 0	e`}</td>
         <td>True or False</td>
       
          
        </tr>
        <tr>
        <td>not</td>
        <td>Reverses the Boolean value of the condition.	</td>
          <td>{`not a	`}</td>
          <td>True or False</td>
         
        </tr>
       
        
      </tbody>
    </table>
  </div>
</div>

  
    

   


    

    


   <div>

   </div>
    
    <div className="d-flex justify-content-end">
      <Link to={"/python/intro"} className="button-link m-1">
        <button className="button bg-primary text-white " onClick={(e) => e.preventDefault()}>Prev</button>
      </Link>
      <Link to={"/python/hello "} className="button-link m-1">
        <button className="button bg-primary text-white ">Next</button>
      </Link>
    </div>


        











</div>
</>


  )
}

export default PythonLogicalOperatorPage