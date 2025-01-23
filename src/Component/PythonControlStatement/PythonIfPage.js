import React from 'react'
import { Link } from 'react-router-dom'


const PythonIfPage = () => {
  return (
   
 <div className='paddownforcol '>
     <>
  
  <div>
 <h1>If Statement
</h1> 
</div>

<div>
 <p className='text-justify wid'>The if statement in Python is a fundamental building block of decision-making in programming. It allows you to execute certain blocks of code only when a specified condition is true.


</p>  
</div>
<div className='wid text-justify'>
 <p>An if statement evaluates a condition (a boolean expression). If the condition evaluates to True, the code inside the if block runs. If the condition evaluates to False, the program skips the if block and moves to the next part of the code.





</p>  
</div>
<div className='wid text-justify pt-4'>
 <p><b>Syntax:
 </b>




</p>  
</div>
<div className='wid text-justify'>
 <p>if condition:





</p>  
</div>
<div className='wid text-justify'>
 <p>    # code to execute if the condition is true

</p>  
</div>
<div className='wid text-justify pt-4'>
 <h2>
Flowchart of If statement
</h2>  
 </div>
 <div className='wid text-justify'>
 

<p>The below diagram shows flowchart of the if statement −
</p>

 </div>
 <div>
  <img className="img-fluid " src='/images/ifflowchart.png' alt="If flowchart" width={500}   />
  </div>
  <div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">

<div class=" bg-light p-3">
  <h5 class="mb-0">Example</h5>
</div>


<div class=" text-white p-3 ">
  <pre class="mb-0">
  <p className='text-primary'># Check if a number is positive
  </p>
          <p className=''>number =
          <span className='text-danger'> 10</span></p>
         
         
          <p className=''>if number {'>'}
          <span className='text-danger'> 0</span>:
          </p>
          <p>  <span className='text-warning'>print</span> ( <span className='text-success'>"The number is positive."
          </span>)# <span className='text-primary'>This will execute because the condition is True</span></p>
          <p className='text-primary'># Example with a False condition

  </p>
  <p className=''>number =
          <span className='text-danger'> -5</span></p>
         
  <p className=''>if number {'>'}
          <span className='text-danger'> 0</span>:
          </p>
          <p>  <span className='text-warning'>print</span> ( <span className='text-success'>"The number is positive."
          </span>)# <span className='text-primary'>This will not execute
          </span></p>
          
  </pre>
</div>


<div class="text-start bg-light">
  <div className='p-2'>
  <button 
    class="btn btn-primary px-2 py-2" 
    
  >
    Try it Yourself
  </button>
  </div>
  
</div>



</div>



</div>


 <div className='wid text-justify pt-4'>
 <h2 className=''>Explanation



</h2>  
 </div>
 <div className='wid text-justify'>
 <p >1.Evaluate the condition





</p>  
 </div>
 <div className='wid text-justify'>
 <p className=''>       2.If True, execute the block of code inside the if statement.




</p>  
 </div>


<div className='text-justify wid'>
 <p>

 3.If False, skip the if block.






</p>  
</div>
<div className='text-justify wid'>
 <p>

 4.Continue with the rest of the program.






</p>  
</div>

<div className="d-flex justify-content-end">
 <Link to={"/python/intro"}  className="button-link m-1">
     <button className="button bg-primary text-white "   onClick={(e) => e.preventDefault()}>Prev</button>
 </Link>
   <Link to={"/python/hello "} className="button-link m-1">
     <button className="button bg-primary text-white ">Next</button>
   </Link>
 </div>

</>

 </div>
  )
}

export default PythonIfPage
