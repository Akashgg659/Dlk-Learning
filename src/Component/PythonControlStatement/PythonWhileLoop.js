import React from 'react'
import { Link } from 'react-router-dom'


const PythonWhileLoop = () => {
  return (
  
 <div className='paddownforcol'>
       <>
   
   <div>
  <h1>While Loop
</h1> 
</div>

<div>
  <p className='text-justify wid'>A while loop in Python repeatedly executes a block of code as long as a given condition remains True. Once the condition becomes False, the loop stops.






</p>  
</div>
<div className='wid text-justify pt-4'>
  <p>
<b>Syntax:</b>



</p>  
</div>

<div className='wid text-justify'>
  <p>while condition:






</p>  
</div>
<div className='wid text-justify'>
  <p># code to execute




</p>  
</div>
<div className='wid text-justify'>
  <p>           condition: An expression evaluated before each iteration. The loop continues as long as the condition is True.




</p>  
</div>
<div className='wid text-justify'>
  <p>                  code: A block of code that gets executed each time the condition is True.





</p>  
</div>
<div className='wid text-justify pt-4'>
  <h2>            Basic Example






</h2>  
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
            <p className=''><span className='text-warning'>print</span>(counter)



            </p>
            <p className=''> counter += <span className='text-danger'>1</span>




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
  <p> In this example, the loop runs until counter is no longer less than 5, and the counter increments by 1 after each iteration.
               





</p>  
</div>
<div className='wid text-justify pt-4'>
  <h2>    Infinite Loops



</h2>  
</div>
<div className='wid text-justify'>
  <p>A while loop can potentially run forever if the condition never becomes False. This is known as an infinite loop.



</p>  
</div>
<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
   

            <p className=''>while True:




            </p>
            <p className=' '><span className='text-warning'>print</span>(<span className='text-success'>"This loop will run forever!"</span>)




            </p>
            <p className='text-primary'># To stop, you need to manually interrupt or use a break statement




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
  <p>To avoid infinite loops, make sure the condition eventually becomes False, or use a break statement.



</p>  
</div>
<div className='wid text-justify pt-4'>
  <h2>Using break in a while Loop




</h2>  
</div>
<div className='wid text-justify'>
  <p>You can exit a while loop prematurely using the break statement. This is useful when a specific condition inside the loop triggers the need to stop.



</p  >
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
             <p className=' '>while counter {'<'} <span className='text-danger'>10</span>:



             </p>
             <p className=''>if counter == <span className='text-danger'>5</span>:



             </p>
             <p className='text-primary'>break  # Exit the loop when counter equals 5




             </p>
             <p className=''><span className='text-warning'>print</span>(counter)





             </p>
             <p className=''>counter += <span className='text-danger'>1</span>



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
  <h2 className=''>Using continue in a while Loop

  




</h2>  
  </div>
  <div className='wid text-justify'>
  <p className=''>The continue statement skips the current iteration of the loop and moves to the next iteration, without stopping the loop entirely.

  




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
             <p className=' '>counter += <span className='text-danger'>1</span>

             </p>
             <p className=' '>if counter == <span className='text-danger'>3</span>:

             </p>
             <p className='text-primary '>continue  # Skip the print statement when counter is 3

             </p>
             <p className=' '><span className='text-warning'>print</span>(counter)

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
  <p >
  Here, when counter equals 3, the loop skips the print(counter) statement.



</p>  
  </div>
  <div className='wid text-justify pt-4'>
  <h2 className=''> Practical Examples






</h2>  
  </div>
 
  
  
 
<div className='text-justify wid pt-4'>
  <p><b>Example 1: Simple Counter
  </b>

 








</p>  
</div>
<div className='text-justify wid'>
  <p>
  You can use a while loop to perform repetitive tasks like counting.


 

</p>  
</div>
<div class="container py-4 p-2">

 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>num = <span className='text-danger'>1</span>





             </p>
             <p className=' '>while num {'<'}= <span className='text-danger'>5</span>:


             </p>
             <p className=' '><span className='text-warning'>print</span>(<span className='text-success'>"This is iteration"</span>, num)


             </p>
             <p className=' '>    num += <span className='text-danger'>1</span>


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
   
<div className='text-justify wid pt-4'>
  <b>
  
  Example 2: User Input Validation

 

</b>  
</div>
<div className='text-justify wid'>
  <p>
   
  A common use for a while loop is repeatedly asking for user input until valid input is received.

 

</p>  
</div>
<div class="container py-4 p-2">

 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>password = ""






             </p>
             <p className=' '>while password != "secret":



             </p>
             <p className=' '>password = input(<span className='text-success'>"Enter the password: "</span>)



             </p>
             <p className=' '>if password != "secret":



             </p>
             <p className=' '><span className='text-warning'>print</span>(<span className='text-success'>"Incorrect password. Try again."</span>)




             </p>
             <p className=' '><span className='text-warning'>print</span>(<span className='text-success'>"Access granted!"</span>)




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
   
<div className='text-justify wid pt-4'>
  <h2>
  
  Combining while with else



 

</h2>  
</div>
<div className='text-justify wid'>
  <p>
  
  Just like for-else, a while loop can also have an else block. The else block runs only if the loop terminates normally, meaning without a break.




 

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
            <p className=' '><span className='text-warning'>print</span>(counter)




            </p>
            <p className=' '>counter += <span className='text-danger'>1</span>




            </p>
            <p className=' '>else:





            </p>
            <p className=' '><span className='text-warning'>print</span>(<span className='text-primary'>"Loop finished without break."</span>)





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
<div className='text-justify wid'>
  <p>
  
  By mastering the while loop, you can create more dynamic and flexible programs that handle repetitive tasks efficiently.





 

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

export default PythonWhileLoop
