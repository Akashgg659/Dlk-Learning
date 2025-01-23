import React from 'react'
import { Link } from 'react-router-dom'


const PythonPositionalOnlyArguments = () => {
  return (
      <div className='paddownforcol'>
   
    <div>
   <h1>Positional-Only Arguments
 </h1> 
 </div>
 
 <div>
   <p className='text-justify wid'>In Python, positional-only arguments are function parameters that can only be specified by their position in the function call, not by their name. This feature is useful when you want to enforce strict rules about how arguments are passed to your function, ensuring clarity and consistency.

</p>  
 </div>
 <div className='wid text-justify pt-4'>
<h2>What Are Positional-Only Arguments?


</h2>
 </div>
 
 <div className='wid text-justify pt-4'>
   <p>


   Positional-only arguments are defined using a / marker in the function signature.





</p>  
 </div>
 <div className='wid text-justify'>
  <p>
  Any parameter before the / in the function definition must be passed positionally.


  </p>
 </div>
 <div className='wid text-justify'><p>
 This prevents those arguments from being passed as keyword arguments in the function call.


    </p>  
 </div>
 <div className='wid text-justify pt-4 '>
   <h2>                  
  

   Defining Positional-Only Arguments

  




</h2>  
 </div>
 <div className='wid text-justify pt-4 '>
   <p>                  
  

   To create positional-only arguments, include the / symbol in the function signature. The / acts as a separator between positional-only arguments and the rest of the arguments.


  




</p>  
 </div>
 
<div className='wid text-justify pt-4'>
  <p><b>Syntax:</b></p>
 </div>
 <div className='wid text-justify pt-4'>
   <p>                  
 
 
   def function_name(positional_arg1, positional_arg2, /, other_arg1, *, keyword_only_arg):






</p>  
 </div>
 <div className='wid text-justify '>
   <p>                  
 
 
   # Function body




</p>  
 </div>
 <div className='wid text-justify '>
   <p>                  
 
Here:




</p>  
 </div>
 <div className='wid text-justify '>
   <p>                  
 
 
   positional_arg1 and positional_arg2: Must be passed positionally.






</p>  
 </div>
 <div className='wid text-justify '>
   <p>                  
 
 
   other_arg1: Can be passed either positionally or as a keyword.




</p>  
 </div>
 <div className='wid text-justify '>
   <p>                  
 
 
   keyword_only_arg: Must be passed as a keyword argument.




</p>  
 </div>
 <div className='wid text-justify pt-4 '>
   <h2>                  
 
   Examples of Positional-Only Arguments







</h2>  
 </div>
 <div className='wid text-justify pt-4 '>
   <p>  <b>  1. Basic Example


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
    

             <p className=''>def greet(name, /):





             </p>
             <p className=' '>print(f"Hello, + name!")




             </p>
             <p className=' '># Correct usage





</p>
<p className=' '>greet("Alice")

</p>
<p className=' '># Incorrect usage (raises TypeError)


</p>
<p className=' '># greet(name="Alice")


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
  <p>
    <b>2. Mixing Positional-Only and Regular Arguments
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
    

             <p className=''>def calculate_area(length, width, /, unit="cm"):




             </p>
             <p className=' '>area=length *width




             </p>
             <p className=' '>print(area is +area squarecm)






</p>
<p className=' '># Correct usage








</p>
<p className=' '>calculate_area(5, 3)

</p>
<p className=' '># Incorrect usage (raises TypeError)

</p>
<p className=' '># calculate_area(length=5, width=3)

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
<p>Arbitrary positional arguments allow a Python function to accept a variable number of positional arguments, meaning the function can be called with any number of arguments without explicitly specifying them in the function definition.

</p>


  
 </div>
 <div className='wid text-justify'>
<p>To define arbitrary positional arguments, use *args in the function definition. The *args parameter collects all additional positional arguments into a tuple.

</p>


  
 </div>
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>def add_numbers(*args):



             </p>
             <p className=' '>return sum(args)




             </p>
             <p className=' '>print(add_numbers(1, 2, 3))# Output: 6






</p>
<p className=' '>print(add_numbers(10, 20, 30, 40))# Output: 100








</p>
<p className=' '>print(add_numbers())# Output: 0

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
<h2>Why Use Positional-Only Arguments?

</h2>


  
 </div>
 <div className='wid text-justify pt-4'>
    <p>
<b>Simplifies API Design:

</b>
Helps you define clear, consistent interfaces for functions where the names of arguments are not relevant to the caller.

</p>
  
 </div>
 <div className='wid text-justify pt-4'>
    <p>
<b>Prevents Misuse:

</b>
Avoids potential issues where argument names might conflict or change in the future.


</p>
  
 </div>
 <div className='wid text-justify pt-4'>
    <p>
<b>Improves Performance: 

</b>
Positional-only arguments are slightly faster to process because the interpreter doesn’t need to handle keyword lookups.


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

export default PythonPositionalOnlyArguments