import React from 'react'
import { Link } from 'react-router-dom'


const PythonNestedIfPage = () => {
  return (
 
 <div className='paddownforcol'>
       <>
   
   <div>
  <h1>Nested If Statement
</h1> 
</div>

<div>
  <p className='text-justify wid'>A nested if statement is an if statement placed inside another if statement. This allows you to evaluate multiple conditions in sequence, with the ability to check more complex conditions by combining multiple logical checks.



</p>  
</div>
<div className='wid text-justify'>
  <p>In Python, a nested if statement is used when you need to make a decision within another decision. It helps you refine your logic by evaluating additional conditions if the first condition is True or False.





</p>  
</div>
<div className='wid text-justify pt-4'>
  <p><b>Syntax:
  </b>




</p>  
</div>
<div className='wid text-justify'>
  <p>if condition1:





</p>  
</div>
<div className='wid text-justify'>
  <p>   # code to execute if condition1 is true

</p>  
</div>
<div className='wid text-justify'>
  <p>       if condition2:
 

</p>  
</div>
<div className='wid text-justify'>
  <p>  # code to execute if condition2 is true

</p>  
</div>
<div className='wid text-justify'>
  <p>else:
</p>  
</div>
<div className='wid text-justify'>
  <p>  # code to execute if condition2 is false

</p>  
</div>
<div className='wid text-justify'>
  <p>  else:

</p>  
</div>
<div className='wid text-justify'>
  <p>  # code to execute if condition1 is false

</p>  
</div>
<div className='wid text-justify pt-4'>
  <h2>
Flowchart of Nested If statement
</h2>  
  </div>
  <div className='wid text-justify'>
  

<p>The below diagram shows flowchart of the Nested If statement −
</p>

  </div>
  <div>
   <img className="img-fluid " src='/images/nestedifflowchart.png' alt="If flowchart" width={500}   />
   </div>
   <div class="container py-4 p-2">

 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
             <p className=''>if number {'>'} <span className='text-danger'>0</span>:
             </p>
             <p className=' '><span className='text-warning'>print</span>(<span className='text-success'>"The number is positive."</span>)
             </p>
             <p className=''>if number % <span className='text-danger'>2</span> == <span className='text-danger'>0</span>:
             </p>
             <p className=''> <span className='text-warning'>print</span>(<span className='text-success'>"The number is also even"</span>) <span className='text-primary'># Nested if: checks if the number is even</span> 
             </p>
             <p className=''>else:
             </p>
             <p className=''><span className='text-warning'>print</span>(<span className='text-success'>"The number is odd"</span>) <span className='text-primary'># Nested else: executes if the number is odd</span> 
             </p>
             <p className=''>elif number {'<'} <span className='text-danger'>0</span>:
             </p>
             <p className=''><span className='text-warning'>print</span>(<span className='text-success'>"The number is negative."</span>)
             </p>
             <p className=''>else:
             </p>
             <p className=''><span className='text-warning'>print</span>(<span className='text-success'>"The number is zero."</span>)
             </p>
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
  <p >1.Evaluate first condition 




</p>  
  </div>
  <div className='wid text-justify'>
  <p className=''>       2.If True, execute the block of code inside the if statement.




</p>  
  </div>


<div className='text-justify wid'>
  <p>

  3.If False, execute the nested if block.







</p>  
</div>
<div className='text-justify wid'>
  <p>

 4.check the second if
</p>  
</div>

<div className='text-justify wid'>
  <p>

  5.Execute the if block if second if condition is true






</p>  
</div>
<div className='text-justify wid'>
  <p>

  6.Execute the else block if second if condition is false






</p>  
</div>
<div className='text-justify wid'>
  <p>

  7.Execute the else block if first if condition is false






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

export default PythonNestedIfPage
