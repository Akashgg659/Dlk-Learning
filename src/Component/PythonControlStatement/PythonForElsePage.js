import React from 'react'
import { Link } from 'react-router-dom'


const PythonForElsePage = () => {
  return (
<div className='paddownforcol'>
<>
   
   <div>
  <h1>For Else Loop
</h1> 
</div>

<div>
  <p className='text-justify wid'>The for-else loop in Python is a special construct where the else block executes only if the loop completes without hitting a break statement. This unique feature is often used for tasks like searching, where you want to execute some code when no match is found.





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
  <p>           # Code block to execute in the loop



</p>  
</div>
<div className='wid text-justify'>
  <p>               if condition:



</p>  
</div>
<div className='wid text-justify'>
  <p>                   break  # Exit the loop early




</p>  
</div>
<div className='wid text-justify'>
  <p>                  else:





</p>  
</div>
<div className='wid text-justify'>
  <p>                     # Code block to execute if the loop runs fully





</p>  
</div>
<div className='wid text-justify pt-4'>
  <h2>    Key Points


</h2>  
</div>
<div className='wid text-justify'>
  <p>else executes when the loop completes all iterations.


</p>  
</div>
<div className='wid text-justify'>
  <p>If the loop ends prematurely with a break, the else block will not run.



</p>  
</div>
<div className='wid text-justify'>
  <p>This construct is commonly used in searching or checking conditions within sequences.



</p>  
</div>
<div className='wid text-justify pt-4'>
  <h2>Examples


</h2  >
</div>
<div className='wid text-justify pt-4'>
  <p><b>Example 1: Searching in a List
  </b> 


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
             <p className=' '>target = <span className='text-danger'>6</span>


             </p>
             <p className=''>for num in numbers:


             </p>
             <p className=''>if num == target:



             </p>
             <p className=''><span className='text-warning'>print</span>(<span className='text-success'>"found"</span>)




             </p>
             <p className=''>break


             </p>
             <p className=''>else:



             </p>
             <p className=''><span className='text-warning'>print</span>(<span className='text-success'>"not found"</span>)



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
  <p className=''><b>Example 2: Checking for Primes
  </b>




</p>  
  </div>
  <div class="container py-4 p-2">

 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>number = <span className='text-danger'>17</span>



             </p>
             <p className=' '>for i in range(<span className='text-danger'>2</span>, int(number ** <span className='text-danger'>0.5</span>) + <span className='text-danger'>1</span>):
             </p>
             <p className=' '>if number % i == <span className='text-danger'>0</span>:
             </p>
             <p className=' '><span className='text-warning'>print</span>(<span className='text-success'>"It is not a prime number."</span>)
             </p>
             <p className=' '>break
             </p>
             <p className=' '>else:
             </p>
             <p className=' '><span className='text-warning'>print</span>(<span className='text-success'>"It is a prime number"</span>)
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
  <p ><b>How for-else Works

  </b>



</p>  
  </div>
  <div className='wid text-justify'>
  <p className=''> Let’s break it down step by step:





</p>  
  </div>
 
  
  <div className='wid text-justify'>
 <ul>
   <li>The for loop starts and iterates through the sequence.
   </li>
   <li>If a break is encountered, the loop ends, and the else block is skipped.
   </li>
   <li>If the for loop completes all iterations without a break, the else block runs.
   </li>
 </ul>
  </div>
 
<div className='text-justify wid pt-4'>
  <h2>

  Practical Use Cases








</h2>  
</div>
<div className='text-justify wid pt-4'>
  <p>
   <b> 1.Searching for an Element
   </b>

 

</p>  
</div>
<div className='text-justify wid'>
  <p>
  
  Use for-else to handle situations where you need to find an element and take specific actions if it’s missing.

 

</p>  
</div>
<div className='text-justify wid pt-4'>
  <p>
   <b> 2.Validations

   </b>

 

</p>  
</div>
<div className='text-justify wid'>
  <p>
  
  Use it for scenarios like ensuring all elements meet a condition. The for-else loop is a powerful yet underused feature of Python. With practice, it can make your code cleaner and more intuitive for specific scenarios.



 

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

export default PythonForElsePage
