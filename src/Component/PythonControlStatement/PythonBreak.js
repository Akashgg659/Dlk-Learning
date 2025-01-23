import React from 'react'
import { Link } from 'react-router-dom'


const PythonBreak = () => {
  return (
  
 <div className='paddownforcol'>
    <>
   
   <div>
  <h1>Break Statement
</h1> 
</div>

<div>
  <p className='text-justify wid'>The break statement is used to exit a loop prematurely, meaning the loop will stop executing as soon as the break statement is encountered, even if the loop's condition hasn’t yet become False. The break statement is typically used in both for loops and while loops to interrupt the loop based on some condition.







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
  <p>                   break  # Exits the loop





</p>  
</div>
<div className='wid text-justify'>
  <p>                  
  # More code to execute in the loop





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
  break  # Exits the loop





</p>  
</div>
<div className='wid text-justify'>
  <p>                  
  # More code to execute in the loop





</p>  
</div>
<div className='wid text-justify'>
  <p>                  
  condition: An expression that evaluates to True or False. When this condition becomes True, the loop terminates.






</p>  
</div>
<div className='wid text-justify pt-4'>
  <h2>                  
  Example 1: Breaking Out of a for Loop







</h2>  
</div>
<div className='wid text-justify '>
  <p>                  
  Let's start with a simple example where we exit a loop when we find a certain value:







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
            <p className=''><span className='text-warning'>print</span>(<span className='text-success'>"Found 3, exiting the loop."</span>)





            </p>
            <p className=''>break






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
  <p> Here, the loop stops when it reaches the number 3, and the remaining numbers (4 and 5) are not printed.






</p>  
</div>
<div className='wid text-justify pt-4'>
  <h2>  Example 2: Breaking Out of a while Loop




</h2>  
</div>
<div className='wid text-justify'>
  <p>The break statement can also be used in a while loop to exit based on a certain condition:




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
            <p className=' '>while True:





            </p>
            <p className=''><span className='text-warning'>print</span>(counter)




            </p>
            <p className=''>counter += <span className='text-danger'>1</span>





            </p>
            <p className=''>if counter == <span className='text-danger'>5</span>:





            </p>
            <p className='text-primary'>break  # Exits the loop when counter equals 5





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
  <h2>Practical Use Cases of break




</h2>  
</div>
<div className='wid text-justify'>
  <p><b>Exiting Loops Based on Condition:
  </b>




</p>  
</div>
<div className='wid text-justify'>
  <p>The break statement is used to exit loops when a certain condition is met, such as finding an element, reaching a specific count, or meeting any other criteria.




</p  >
</div>
<div className='wid text-justify'>
  <p><b>Looping Until Valid Input:
  </b>




</p  >
</div>
<div className='wid text-justify'>
  <p>In situations where user input is required, you can use the break statement to exit a loop once the input meets the desired condition. The break statement is a powerful tool in controlling the flow of loops, helping you exit early when certain conditions are met, making your code more efficient and readable. In this case, the loop continues indefinitely until counter reaches 5, at which point the break statement terminates the loop.




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

export default PythonBreak