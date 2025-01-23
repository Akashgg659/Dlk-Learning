import React from 'react'
import { Link } from 'react-router-dom'


const PythonScope = () => {
  return (
      < div className='paddownforcol'>
   
    <div>
   <h1>Variables Scope
 </h1> 
 </div>
 
 <div>
   <p className='text-justify wid'>In Python, the scope of a variable refers to the region of the program where the variable is accessible. Scope determines whether a variable can be used in a specific part of the program. Understanding scope is essential for writing efficient and bug-free code.


</p>  
 </div>
 <div className='wid text-justify pt-4'>
<h2>Types of Scope in Python



</h2>
 </div>
 
 <div className='wid text-justify pt-4'>
   <p>


   Python has four types of scope, following the LEGB Rule:





</p>  
 </div>
 <div className='wid text-justify'>
  <p>
  Local, Enclosing, Global, and Built-in.


  </p>
 </div>
 <div className='wid text-justify pt-4'><h2>

 1. Local Scope


    </h2>  
 </div>
 <div className='wid text-justify pt-4 '>
   <p>                  
  

   A variable declared inside a function is said to have local scope.


  




</p>  
 </div>
 <div className='wid text-justify '>
   <p>                  
  

   It is accessible only within the function and not outside it.

  




</p>  
 </div>
 

 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>def my_function():





             </p>
             <p className=' '>x = 10  # Local variable




             </p>
             <p className=' '>print(x)






</p>
<p className=' '>my_function()


</p>
<p className=' '># print(x)  # This will raise a NameError because x is not defined globally


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
2. Enclosing Scope

</h2>


  
 </div>
 
 <div className='wid text-justify pt-4'>
<p>
Enclosing scope comes into play with nested functions.


</p>


  
 </div>
 <div className='wid text-justify'>
<p>
A variable in an outer function, but not global, can be accessed by the inner (nested) function.



</p>


  
 </div>
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>def outer_function():




             </p>
             <p className=' '>y = 20  # Enclosing variable





             </p>
             <p className=' '>def inner_function():






</p>
<p className=' '>print(y)  # Accessing enclosing variable









</p>
<p className=' '>inner_function()


</p>
<p className=' '>outer_function()


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
<div className='wid text-justify '>
<p>Enclosing scope variables cannot be modified directly in the inner function unless declared using nonlocal.

</p>


  
 </div>
 <div className='wid text-justify'>
    <p>
<b>Using nonlocal:
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
    

             <p className=''>def outer_function():



             </p>
             <p className=' '>y = 20





             </p>
             <p className=' '>def inner_function():







</p>
<p className=' '>nonlocal y









</p>
<p className=' '>y += 10


</p>
<p className=' '>print(y)



</p>
<p className=' '>inner_function()



</p>
<p className=' '>print(y)



</p>
<p className=' '>outer_function()




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
<h2>3. Global Scope


</h2>


  
 </div>
 <div className='wid text-justify pt-4'>
    <p>
A variable declared outside of any function or class is in the global scope.





</p>
  
 </div>
 <div className='wid text-justify '>
    <p>

    It is accessible throughout the program unless shadowed by a local variable.


</p>
  
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>z = 50  # Global variable




             </p>
             <p className=' '>def my_function():






             </p>
             <p className=' '>print(z)  # Accessing global variable








</p>
<p className=' '>my_function()










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
<p><b>Modifying Global Variables:
</b>


</p>


  
 </div>
 <div className='wid text-justify pt-4'>
    <p>
    To modify a global variable inside a function, use the <b>global </b>keyword.






</p>
  
 </div>
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>x = 100





             </p>
             <p className=' '>def modify_global():







             </p>
             <p className=' '>global x









</p>
<p className=' '>x += 50

</p>
<p className=' '>modify_global()


</p>
<p className=' '>print(x)  # Output: 150


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
<h2>4. Built-in Scope



</h2>


  
 </div>
 <div className='wid text-justify pt-4'>
    <p>
    Python has a built-in scope that contains all the names predefined in Python, such as len, print, and range.






</p>
</div>
<div className='wid text-justify'>
    <p>
    These are always available unless overridden by local or global variables.






</p>
  
 </div>
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>print(len("Python"))  # Built-in function






             </p>
             <p className=' '>len = 5  # Overriding built-in name








             </p>
             <p className=' '># print(len("Python"))  # This will raise a TypeError










</p>
<p className=' '>del len  # Restore built-in functionality


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
<h2>The LEGB Rule:



</h2>


  
 </div>
 <div className='wid text-justify pt-4'>
    <p>
    Python resolves variable names in the following order of scope:





</p>
</div>
<div className='wid text-justify'>
  <ul>
    <li>Local Scope – Variables inside the current function.
    </li>
    <li>Enclosing Scope – Variables in the enclosing (outer) function, if any.
    </li>
    <li>Global Scope – Variables defined at the top level of the script or module.
    </li>
    <li>Built-in Scope – Predefined names in Python.
    </li>
  </ul>
  
 </div>
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>x = "global"







             </p>
             <p className=' '>def outer_function():








             </p>
             <p className=' '>x = "enclosing"











</p>
<p className=' '>def inner_function():
</p>
<p className=' '>x = "local"</p>


<p className=' '>print(x)  # Refers to the innermost variable: "local"

</p>

<p className=' '>inner_function()

</p>

<p className=' '>outer_function()

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
    Understanding scope and its types—local, enclosing, global, and built-in—helps you write more organized and efficient Python code. By mastering concepts like the LEGB rule and special keywords (global and nonlocal), you can confidently manage variable accessibility and ensure your programs behave as intended.





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

export default PythonScope