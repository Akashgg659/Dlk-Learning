import React from 'react'
import { Link } from 'react-router-dom'


const PythonFunctionAnnotations = () => {
  return (
      <div className='paddownforcol'>
   
    <div>
   <h1>Function Annotations
 </h1> 
 </div>
 
 <div>
   <p className='text-justify wid'>Function annotations in Python are a way to attach metadata to the parameters and return values of a function. Introduced in Python 3, they are primarily used for documentation and type hinting, helping developers understand what types of arguments a function expects and what type it returns. However, Python does not enforce these annotations; they are purely informational.



</p>  
 </div>
 <div className='wid text-justify pt-4'>
<h2><b>Syntax:</b>




</h2>
 </div>
 
 <div className='wid text-justify pt-4'>
   <p>


   def function_name(param1: type, param2: type) {'->'} return_type:





</p>  
 </div>
 <div className='wid text-justify pt-4'>
   <p>


   pass






</p>  
 </div>


 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>def greet(name: str) {'->'} str:






             </p>
             <p className=' '>return "Hello, " + name + "!"


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
 
  Key Features of Function Annotations


  </h2>
 </div>
 <div className='wid text-justify pt-4 bglights'>
    <ul>
        <li>Optional: Annotations are not mandatory. Functions can work without them.
        </li>
        <li>Informational: They do not affect the function's execution or behavior.
        </li>
        <li>Flexible: Any expression can be used as an annotation, not just types.
        </li>
       
        </ul> 
 </div>
 <div className='wid text-justify pt-4 '>
   <h2>                  
  

   Examples of Function Annotations



  




</h2>  
 </div>
 <div className='wid text-justify pt-4'>
   <p>                  
  

  <b>1. Annotating Function Parameters</b>

  




</p>  
 </div>
 <div className='wid text-justify pt-4'>
   <p>                  
  

   Annotations specify the expected types of arguments.

  




</p>  
 </div>
 

 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>def add(a: int, b: int) {'->'} int:






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
2. Annotating Return Values


</h2>


  
 </div>
 
 <div className='wid text-justify pt-4'>
<p>
Annotations specify the type of value the function will return.


</p>


  
 </div>

 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>def square(num: float) {'->'} float:




             </p>
             <p className=' '>return num * num






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
<div className='wid text-justify pt-4 '>
<h2>3. Using Arbitrary Expressions
</h2>

  
 </div>
 <div className='wid text-justify pt-4'>
    <p>


Annotations can include any valid expression, such as custom types or mathematical operations.
</p>
  
 </div>
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>def calculate_area(radius: 'float {'>'}0') {'-> '}'Area in square meters':




             </p>
             <p className=' '>return 3.14 * radius * radius





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
4. Using None as a Return Type


</h2>


  
 </div>
 <div className='wid text-justify pt-4'>
    <p>
    When a function does not return anything, use None as the return annotation.






</p>
  
 </div>
 
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>def log_message(message: str) {'->'} None:





             </p>
             <p className=' '>print(message)






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
<h2>Accessing Annotations
</h2>


  
 </div>
 <div className='wid text-justify pt-4'>
    <p>
    Annotations are stored in a dictionary in the function’s __annotations__ attribute.






</p>
  
 </div>
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>def greet(name: str) {'->'} str:






             </p>
             <p className=' '>return f"Hello, + name !"








             </p>
             <p className=' '>print(greet.__annotations__)










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
<h2>Common Use Cases




</h2>


  
 </div>
 
<div className='wid text-justify pt-4'>
    <p>
   <b>Type Hinting for Readability:
   </b>


   Makes the function’s purpose and expected arguments clear.


</p>
</div>
<div className='wid text-justify'>
    <p>
   <b>Static Type Checking:

   </b>


   Tools like mypy use annotations to check for type correctness before runtime.



</p>
  
  
 </div>
 <div className='wid text-justify'>
    <p>
   <b>Documentation and IDE Support:

   </b>


   Many IDEs use annotations to provide better autocomplete and inline documentation.



</p>
</div>
  
 





<div className='wid text-justify pt-4'>
<h2>Best Practices for Function Annotations




</h2>


  
 </div>
 <div className='wid text-justify pt-4'>
    <p>
   <b>Keep Annotations Simple:
   </b>

   Use annotations to improve readability, not to complicate it with complex expressions.


</p>
</div>
<div className='wid text-justify'>
    <p>
   <b>Be Consistent:
   </b>

   Use annotations consistently across the codebase to maintain clarity.


</p>
</div><div className='wid text-justify'>
    <p>
   <b>Leverage Tools:
   </b>

   Use static type checkers (e.g., mypy) to validate annotations during development.


</p>
</div>
<div className='wid text-justify'>
    <p>
   <b>Don’t Overuse:
   </b>

   Avoid adding annotations where they don't provide additional clarity.


</p>
</div>

 

<div className='wid text-justify pt-4'>
    <p>
    Function annotations are a powerful feature for improving code readability, providing type hints, and assisting with static type checking. While Python doesn't enforce them, they play a crucial role in modern development practices by making code more maintainable and self-documenting.
    



</p>
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

export default PythonFunctionAnnotations