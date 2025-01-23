import React from 'react'
import { Link } from 'react-router-dom'


const PythonContinue = () => {
  return (
 
 <div className='paddownforcol'>
     <>
   
   <div>
  <h1>Continue Statement
</h1> 
</div>

<div>
  <p className='text-justify wid'>The continue statement is used to skip the current iteration of a loop and move to the next iteration, without terminating the loop. When the continue statement is encountered, the rest of the code inside the loop for the current iteration is skipped, and the loop proceeds to the next cycle.









</p>  
</div>
<div className='wid text-justify pt-4'>
  <p>
<b>Syntax:</b>



</p>  
</div>

<div className='wid text-justify'>
  <p>for variable in sequence:







</p>  
</div>
<div className='wid text-justify'>
  <p>if condition:





</p>  
</div>
<div className='wid text-justify'>
  <p>                           continue  # Skips the rest of the loop for this iteration






</p>  
</div>
<div className='wid text-justify'>
  <p>                  
  #  code to execute 





</p>  
</div>
<div className='wid text-justify pt-4'>
  <h2>          Or





</h2> 
</div> 
<div className='wid text-justify'>
  <p>                  
  while condition:






</p>  
</div>
<div className='wid text-justify'>
  <p>                  
  if condition:





</p>  
</div>
<div className='wid text-justify'>
  <p>                  
  continue  # Skips the rest of the loop for this iteration





</p>  
</div>
<div className='wid text-justify'>
  <p>                  
  #code to execute 





</p>  
</div>
<div className='wid text-justify'>
  <p>                  
  condition: An expression evaluated during each iteration. When this condition becomes True, the current iteration is skipped and the loop moves to the next iteration.







</p>  
</div>
<div className='wid text-justify pt-4'>
  <h2>                  
  Example 1: Using continue in a for Loop







</h2>  
</div>
<div className='wid text-justify '>
  <p>                  
  Let’s look at a basic example where we skip a specific value in a list while iterating through it:








</p>  
</div>


<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
   

    <p className=''>numbers = [<span className='text-danger'>1</span>, <span className='text-danger'>2</span>, <span className='text-danger'>3</span>, <span className='text-danger'>4</span>, <span className='text-danger'>5</span>]




            </p>
            <p className=' '>for num in numbers:




            </p>
            <p className=''>if num == <span className='text-danger'>3</span>:




            </p>
            <p className='text-primary'>continue  # Skip the number 3





            </p>
            <p className=''><span className='text-warning'>print</span>(num)







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
<div className='wid text-justify'>
  <p> In this case, when the loop encounters 3, it skips the print statement and continues with the next iteration (printing 4 and 5).






</p>  
</div>
<div className='wid text-justify pt-4'>
  <h2>  Example 2: Using continue in a while Loop





</h2>  
</div>
<div className='wid text-justify'>
  <p>Similarly, continue works in a while loop as well:




</p>  
</div>
<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
   

            <p className=''>counter = <span className='text-danger'>0</span>




            </p>
            <p className=' '>while counter {'<'} <span className='text-danger'>5</span>:






            </p>
            <p className=''>counter += <span className='text-danger'>1</span>





            </p>
            <p className=''>if counter == <span className='text-danger'>3</span>:






            </p>
            <p className='text-primary'>continue  # Skip when counter equals 3






            </p>
            <p className=''><span className='text-warning'>print</span>(counter)






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
<div className='wid text-justify'>
  <p>

  Again, the loop skips printing when the counter is equal to 3 and moves to the next iteration.



</p>  
</div>
<div className='wid text-justify pt-4'>
  <h2>Practical Use Cases of continue




</h2>  
</div>
<div className='wid text-justify'>
  <p><b>Skipping Unwanted Iterations:

  </b>




</p>  
</div>
<div className='wid text-justify'>
  <p>You might want to skip over specific elements that meet a certain condition (like filtering out specific values from a sequence).





</p  >
</div>
<div className='wid text-justify'>
  <p><b>Handling Invalid Inputs:

  </b>




</p  >
</div>
<div className='wid text-justify'>
  <p>In loops where you process inputs, you can use continue to skip invalid data without terminating the loop. The continue statement is useful for skipping certain iterations without terminating the entire loop, allowing for cleaner, more efficient code when filtering or handling conditions within loops.





</p  >
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

export default PythonContinue