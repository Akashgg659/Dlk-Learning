import React from 'react'
import { Link } from 'react-router-dom'


const PythonPositionalArgument = () => {
  return (
      < div className='paddownforcol'>
   
    <div>
   <h1>Positional Arguments
 </h1> 
 </div>
 
 <div>
   <p className='text-justify wid'>In Python, positional arguments are the most basic way of passing values to a function. When a function is called, the arguments are matched to the parameters in the order they are defined. This means that the position of the arguments in the function call determines which parameter they are assigned to.

</p>  
 </div>
 <div className='wid text-justify pt-4'>
<h2>Key Characteristics of Positional Arguments

</h2>
 </div>
 
 <div className='wid text-justify pt-4'>
   <p>


   <b>Order Matters:</b> The values must be provided in the exact sequence in which the parameters are defined in the function.





</p>  
 </div>
 <div className='wid text-justify'>
  <p>
 <b>No Need for Argument Names:</b>Positional arguments are passed without explicitly specifying the parameter name.

  </p>
 </div>
 <div className='wid text-justify'>
   <p><b>Flexible and Simple:</b>Easy to use for functions with a small number of parameters.


    </p>  
 </div>
 <div className='wid text-justify '>
   <h2>                  
  


   Defining and Using Positional Arguments




</h2>  
 </div>
 
<div className='wid text-justify pt-4'>
  <p><b>Syntax:</b></p>
 </div>
 <div className='wid text-justify pt-4'>
   <p>                  
 
 
   def function_name(param1, param2, param3):





</p>  
 </div>
 <div className='wid text-justify '>
   <p>                  
 
 
   # Function body




</p>  
 </div>
 <div className='wid text-justify '>
   <p>                  
 
pass




</p>  
 </div>
 <div className='wid text-justify '>
   <p>                  
 
 
   # Calling the function with positional arguments






</p>  
 </div>
 <div className='wid text-justify '>
   <p>                  
 
 
   function_name(arg1, arg2, arg3)




</p>  
 </div>
 <div className='wid text-justify pt-4 '>
   <h2>                  
 
   Examples of Positional Arguments






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
    

             <p className=''>def greet(first_name, last_name):




             </p>
             <p className=' '>print(Hello, + first_name + lastname !")



             </p>
             <p className=' '># Function call with positional arguments





</p>
<p className=' '>greet("John", "Doe")





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
   <b>2. Using Positional Arguments with Multiple Parameters
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
    

             <p className=''>def calculate_volume(length, width,height):




             </p>
             <p className=' '>volume = length * width * height




             </p>
             <p className=' '>    print(f"The volume is + volume cubic units.")






</p>
<p className=' '># Calling the function






</p>
<p className=' '>calculate_volume(5, 3)






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
<h2>Rules for Positional Arguments
</h2>


  
 </div>
 <div className='wid text-justify pt-4'>
<b>Number of Arguments Must Match Parameters: You must provide exactly as many arguments as there are parameters in the function.

</b>


  
 </div>
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>def add(a, b):






             </p>
             <p className=' '>return a + b




             </p>
             <p className=' '># Correct usage
</p>
<p className=' '>print(add(5, 3))  # Output: 8

</p>
<p className=' '># Incorrect usage (raises TypeError)

</p>
<p className=' '># print(add(5))  # Missing one argument

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

<b>Order Is Important: The first argument corresponds to the first parameter, the second to the second parameter, and so on.
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
    

             <p className=''>def display_person(name, age):







             </p>
             <p className=' '>print(+name is + age years old.")





             </p>
             <p className=' '># Correct order







</p>
<p className=' '>display_person("Alice", 25)  # Output: Alice is 25 years old.



</p>
<p className=' '># Incorrect order

</p>
<p className=' '>display_person(25, "Alice")  # Output: 25 is Alice years old.

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


  Advantages of Positional Arguments



  </h2>
 </div>
 <div className='wid text-justify pt-4'>
   <p><b>Concise and Easy to Use:</b>Simple syntax for quick function calls.


    </p>


  
 </div>
 <div className='wid text-justify pt-4'>
   <p><b>Great for Short Parameter Lists: </b>Useful for functions with fewer arguments where order is intuitive.
    </p>


  
 </div>
 <div className='wid text-justify pt-4'>
  <h2>
  Limitations of Positional Arguments

  </h2>

  
 </div>
 <div className='wid text-justify pt-4'>
   <p><b>Order Dependency:</b>
    
    Errors can arise if arguments are passed in the wrong order.
</p>

  
 </div>
 <div className='wid text-justify pt-4'>
   <p><b>Hard to Read:</b>
    
   For functions with many parameters, it can be unclear what each argument represents without referring to the function definition.
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

export default PythonPositionalArgument