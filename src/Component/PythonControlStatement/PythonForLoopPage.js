import React from 'react'
import { Link } from 'react-router-dom'


const PythonForLoopPage = () => {
  return (
  
 <div className='paddownforcol'> 
    <>
   
   <div>
  <h1>For Loop
</h1> 
</div>

<div>
  <p className='text-justify wid'>A for loop in Python is used to iterate over a sequence (like a list, tuple, string, or range) and execute a block of code for each element in the sequence.



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
  <p>       # code to execute


</p>  
</div>
<div className='wid text-justify'>
  <p>     variable: A temporary placeholder for each element of the sequence during the iteration.


</p>  
</div>
<div className='wid text-justify'>
  <p>sequence: The collection (list, string, etc.) to iterate over.


</p>  
</div>
<div className='wid text-justify pt-4'>
  <h2>Iterating Over Different Data Types

</h2  >
</div>
<div className='wid text-justify pt-4'>
  <p><b>1. Iterating Over a List</b> 


</p>  
</div>

   <div class="container py-4 p-2">

 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>fruits = <span className='text-danger'>[</span>'apple', 'banana', 'cherry'<span className='text-danger'>]</span>

             </p>
             <p className=' '>for fruit in fruits:

             </p>
             <p className=''><span className='text-warning'>print</span>(fruit)

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
  <p className=''><b>2. Iterating Over a String</b>




</p>  
  </div>
  <div class="container py-4 p-2">

 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>for char in <span className='text-success'>"Python"</span>:


             </p>
             <p className=' '>    <span className='text-warning'>print</span>(char)


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
  <p ><b>3. Using range() in a for Loop
  </b>



</p>  
  </div>
  <div className='wid text-justify'>
  <p className=''>    The range() function generates a sequence of numbers.




</p>  
  </div>
  <div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
   

            <p className=''>for num in range(2, 10, 2):  <span className='text-primary'># Start=2, End=10, Step=2</span> 



            </p>
            <p className=' '>       <span className='text-warning'>print</span>(num)



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

  Practical Examples







</h2>  
</div>
<div className='text-justify wid pt-4'>
  <p>
   <b> Example 1: Summing Numbers</b>

 

</p>  
</div>
<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
   

            <p className=''>numbers = <span className='text-danger'>[</span><span className='text-danger'>1</span>, <span className='text-danger'>2</span>, <span className='text-danger'>3</span>, <span className='text-danger'>4</span>, <span className='text-danger'>5</span><span className='text-danger'>]</span>




            </p>
            <p className=' '>       total = <span className='text-danger'>0</span></p>
            <p className=' '>      for num in numbers:
            </p>

            <p className=' '>          total += num
            </p>

            <p className=' '>     <span className='text-warning'>print</span>("Total:", total)
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
  Nested for Loops

 

</h2>  
</div>
<div className='text-justify wid'>
  <p>
  You can use for loops inside another for loop for multidimensional operations.

 

</p>  
</div>
<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
   

            <p className=''>matrix = [[<span className='text-danger'>1</span>, <span className='text-danger'>2</span>, <span className='text-danger'>3</span>], [<span className='text-danger'>4</span>, <span className='text-danger'>5</span>, <span className='text-danger'>6</span>], [<span className='text-danger'>7</span>, <span className='text-danger'>8</span>, <span className='text-danger'>9</span>]]




            </p>
            <p className=' '>      for row in matrix:
            </p>
            <p className=' '>          for value in row:

            </p>

            <p className=' '>                <span className='text-warning'>print</span>(value, end=" ") <span className='text-primary'># Print each value in the row with a space</span> 

            </p>

            <p className=' '>     <span className='text-warning'>print</span>()  <span className='text-primary'># Move to the next line after printing the row</span> 
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
  Breaking Out of Loops

 

</h2>  
</div>
<div className='text-justify wid'>
  <p>
  <b>break:</b> Stops the loop.


 

</p>  
</div>
<div className='text-justify wid'>
  <p>
  <b>continue:</b> Skips the current iteration.



 

</p>  
</div>
<div className='text-justify wid'>
  <p>
  Example: Breaking a Loop


 

</p>  
</div>
<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
   

            <p className=''>for num in range(<span className='text-danger'>10</span>):




            </p>
            <p className=' '>if num == <span className='text-danger'>5</span>:

            </p>
            <p className=' '>break


            </p>

            <p className=' '><span className='text-warning'>print</span>(num)


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
  By mastering the for loop, you can handle a variety of tasks efficiently, from data processing to repetitive operations in your code.

 

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

export default PythonForLoopPage
