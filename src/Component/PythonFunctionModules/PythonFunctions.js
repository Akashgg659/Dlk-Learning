import React from 'react'
import { Link } from 'react-router-dom'



const PythonFunctions = () => {
  return (
      <div className='paddownforcol'>
   
    <div>
   <h1>Functions
 </h1> 
 </div>
 
 <div>
   <p className='text-justify wid'>Functions are an essential building block in Python, enabling you to encapsulate reusable pieces of code. They enhance modularity, reduce redundancy, and improve readability in programming.











</p>  
 </div>
 <div className='wid text-justify pt-4'>
   <h2>


   What is a Function?


</h2>  
 </div>
 
 <div className='wid text-justify'>
   <p>


   A function is a block of organized, reusable code that performs a specific task. Python provides both built-in functions (e.g., print(), len()) and allows users to define their own user-defined functions.






</p>  
 </div>
 <div className='wid text-justify pt-4'>
   <h2>Why Use Functions?






</h2>  
 </div>
 <div className='wid text-justify pt-4'>
   <p> <b>Code Reusability:</b>Write once, use multiple times.

                        






</p>  
 </div>
 <div className='wid text-justify '>
   <p>                  
  


 <b>Modularity:</b>Divide complex problems into smaller, manageable pieces.




</p>  
 </div>
 
<div className='wid text-justify'>
   <p>                  
 
<b>Readability:</b>
Simplifies understanding of code by abstracting functionality.





</p>  
 </div>
 <div className='wid text-justify'>
   <p>                  
 
<b>Maintainability:</b>
Easier to debug and update.





</p>  
 </div>
 <div className='wid text-justify pt-4'>
   <h2>                  
 

   Defining a Function




</h2>  
 </div>
 <div className='wid text-justify'>
   <p>                  
 
   In Python, you use the def keyword to define a function.
</p>  
 </div>
 <div className='wid text-justify'>
   <p>                  
 
   <b>Syntax:</b>
</p>  
 </div>
 <div className='wid text-justify'>
   <p>                  
 
   def function_name(parameters):

</p>  
 </div>
 <div className='wid text-justify'>
   <p>                  
 
   # Code block

</p>  
 </div>
 <div className='wid text-justify'>
   <p>                  
 
   return value

</p>  
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>def add_numbers(a, b):




             </p>
             <p className=' '>return a + b




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
   <h2>



   Calling a Function




</h2>  
 </div>
 <div className='wid text-justify'>
   <p> 


   You call a function by its name followed by parentheses, passing arguments if required.



</p>  
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>def square(number):





             </p>
             <p className=' '>return number * number







             </p>
             <p className=''>result = square(4)






             </p>
             <p className=''>print(result);







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
   <h2>

   Types of Functions




</h2>  
 </div>
 <div className='wid text-justify pt-4'>
   <p>

<b> 1. Built-in Functions</b>
  


</p>  
 </div>
 <div className='wid text-justify'>
   <p>


   Examples: print(), len(), type()


</p>  
 </div>
 <div className='wid text-justify'>
   <p>

<b>2. User-defined Functions

</b>
   


</p  >
 </div>
 <div className='wid text-justify '>
   <p>Defined by the user for specific tasks.





</p  >
 </div>
 <div className='wid text-justify '>
   <p>
<b> 3. Anonymous (Lambda) Functions</b>

  


</p  >
 </div>
 <div className='wid text-justify'>
   <p>Functions without a name, typically used for short, simple operations.


</p  >
 </div>
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>square = lambda x: x ** 2






             </p>
             <p className=' '>print(square(5))  # Output: 25







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
   <p>Functions in Python enable code reusability, modular design, and efficient problem-solving, making them a cornerstone of clean and scalable programming.

</p  >
 </div>
    
   
 <div className="d-flex justify-content-end pt-4">
 <Link to={'/python/hello'} className="button-link m-1">
     <button className="button bg-primary text-white ">Prev</button>
   </Link>
   <Link to={'/python/variable'}  className="button-link m-1">
     <button className="button bg-primary text-white ">Next</button>
     </Link>
 </div>
 
 </div>
  )
}

export default PythonFunctions