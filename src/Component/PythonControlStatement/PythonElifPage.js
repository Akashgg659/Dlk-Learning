import React from 'react'
import { Link } from 'react-router-dom'


const PythonElifPage = () => {
  return (
   
 <div className='paddownforcol'> 
    <>
   
   <div>
  <h1>Elif Statement
</h1> 
</div>

<div>
  <p className='text-justify wid'>The elif statement in Python stands for "else if" and allows you to check multiple conditions in a sequence. It is used when you need to evaluate multiple expressions for True and execute code blocks based on which condition is true. The elif statement helps avoid writing complex, nested if statements.


</p>  
</div>
<div className='wid text-justify'>
  <p>In Python, the elif statement provides a way to check several conditions in sequence. It is used after an if statement and allows you to check additional conditions if the initial if condition is false. The program will execute the first block of code that evaluates to True. If none of the conditions are true, the final else block (if defined) will be executed.





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
  <p>      elif condition2:
 

</p>  
</div>
<div className='wid text-justify'>
  <p> # code to execute if condition2 is true

</p>  
</div>
<div className='wid text-justify'>
  <p>elif condition3:
</p>  
</div>
<div className='wid text-justify'>
  <p>  # code to execute if condition3 is true

</p>  
</div>
<div className='wid text-justify'>
  <p>  else:

</p>  
</div>
<div className='wid text-justify'>
  <p>   # code to execute if none of the conditions are true

</p>  
</div>
<div className='wid text-justify pt-4'>
  <h2>
Flowchart of Elif statement
</h2>  
  </div>
  <div className='wid text-justify'>
  

<p>The below diagram shows flowchart of the Nested If statement −
</p>

  </div>
  <div>
   <img className="img-fluid " src='/images/elifflowchart.png' alt="If flowchart" width={500}   />
   </div>
   <div class="container py-4 p-2">

 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className='text-primary'> # Check the grade and assign a letter grade
             </p>
             <p className=' '>score = <span className='text-danger'>85</span>
             </p>
             <p className=''>if score {'>'}=  <span className='text-danger'>90</span>:
             </p>
             <p className=''>  <span className='text-warning'>print</span>(<span className='text-success'>"Grade: A"</span>)
             </p>
             <p className=''>elif score {'>'}= <span className='text-danger'>80</span>:
             </p>
             <p className=''>  <span className='text-warning'>print</span>(<span className='text-success'>"Grade: B"</span>)
             </p>
             <p className=''> score{'>'} = <span className='text-danger'>70</span>:
             </p>
             <p className=''>  <span className='text-warning'>print</span>(<span className='text-success'>"Grade: C"</span>)
             </p>
             <p className=''>elif score{'>'} = <span className='text-danger'>60</span>:
             </p>
             <p className=''>  <span className='text-warning'>print</span>(<span className='text-success'>"Grade: D"</span>)
             </p>
             <p className=''>else:
             </p>
             <p className=''>  <span className='text-warning'>print</span>(<span className='text-success'>"Grade: E"</span>)
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

  3.If False, execute the elif block.







</p>  
</div>
<div className='text-justify wid'>
  <p>

 4.If none of the condition true execute the else block
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


</></div>
  )
}

export default PythonElifPage
