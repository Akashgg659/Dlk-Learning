import React from 'react'
import { Link } from 'react-router-dom'


const PythonIfElsePage = () => {
  return (
   
 <div className='paddownforcol '>
     <>
   
   <div>
  <h1>If Else Statement
</h1> 
</div>

<div>
  <p className='text-justify wid'>The if-else statement in Python provides a way to execute one block of code if a condition is True and a different block of code if the condition is False.



</p>  
</div>
<div className='wid text-justify'>
  <p>The if-else statement is used when there are two possibilities for a given condition. If the condition evaluates to True, the program executes the code inside the if block. Otherwise, it executes the code inside the else block.






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
<div className='wid text-justify'>
  <p>    else:

</p>  
</div>
<div className='wid text-justify'>
  <p >   # code to execute if the condition is false

</p>  
</div>
<div className='wid text-justify pt-4'>
  <h2>
Flowchart of If Else statement
</h2>  
  </div>
  <div className='wid text-justify'>
  

<p>The below diagram shows flowchart of the if else statement −
</p>

  </div>
  <div>
   <img className="img-fluid " src='/images/ifelseflowchart.png' alt="If flowchart" width={500}   />
   </div>
   <div class="container py-4 p-2">

 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
             <p className=''><span className=''>number</span> = <span className='text-danger'>-5</span>
             </p>
             <p className=' '>if number {'>'} <span className='text-danger'>0</span>:
             </p>
             <p className=''><span className='text-warning'>print</span>( <span className='text-success'>"The number is positive."</span>)  
              <span className='text-primary'># Executes if the condition is True</span>
             </p>
             <p className=''>else:
             </p>
             <p className=''><span className='text-warning'>print</span>(<span className='text-success'>"The number is negative or zero."</span>) <span className='text-primary'># Executes if the condition is False</span> 

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
  <p >1.Evaluate the condition





</p>  
  </div>
  <div className='wid text-justify'>
  <p className=''>       2.If True, execute the block of code inside the if statement.




</p>  
  </div>


<div className='text-justify wid'>
  <p>

  3.If False, execute the else block.







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

export default PythonIfElsePage
