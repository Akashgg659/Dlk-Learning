import React from 'react'
import { Link } from 'react-router-dom'


const PythonDefaultArguments = () => {
  return (
      < div className='paddownforcol'>
   
    <div>
   <h1>Default Arguments
 </h1> 
 </div>
 
 <div>
   <p className='text-justify wid'>In Python, default arguments allow you to define a function with parameters that have default values. If no value is provided for these parameters during the function call, the default value will be used. This feature makes functions more flexible and reduces the need for overloading functions with multiple variations.

</p>  
 </div>
 <div className='wid text-justify pt-4'>
   <h2>


   Key Points About Default Arguments



</h2>  
 </div>
 
 <div className='wid text-justify pt-4'>
   <p>


  <b>Default Value:</b>

  If a value for a parameter is not provided, the function uses the default value.




</p>  
 </div>
 <div className='wid text-justify'>
  <p>
    <b>Order:</b> Parameters with default values must appear after those without default values in the function signature.

  </p>
 </div>
 <div className='wid text-justify'>
   <p> <b>Mutable Defaults Warning:</b>Be cautious when using mutable objects (like lists or dictionaries) as default values.


                        






</p>  
 </div>
 <div className='wid text-justify pt-4 '>
   <p>                  
  


 <b>Syntax</b>




</p>  
 </div>
 
<div className='wid text-justify'>
   <p>                  
 


   def function_name(param1, param2=default_value):



</p>  
 </div>
 <div className='wid text-justify'>
   <p>                  
 
   # Function body





</p>  
 </div>
 <div className='wid text-justify pt-4'>
   <h2>                  
 


   Examples of Default Arguments




</h2>  
 </div>
 <div className='wid text-justify pt-4'>
   <p>                  
 
   <b>1. Basic Example
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
    

             <p className=''>def greet(name, message="Hello"):




             </p>
             <p className=' '>print(message + ", " + name + "!")




             </p>
             <p className=' '>greet("Alice")# Uses the default message




</p>
<p className=' '>greet("Bob", "Welcome")  # Overrides the default message



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




<b>2. Multiple Default Arguments
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
    

             <p className=''>def introduce(name, age=25, city="New York"):




             </p>
             <p className=' '>print("Name: " + name)



             </p>
             <p className=' '>print("Age: " + str(age))



</p>
<p className=' '>print("City: " + city)




</p>
<p className=' '>introduce("Alice") 




</p>
<p className=' '>introduce("Bob", age=30)   




</p>
<p className=' '>introduce("Charlie", age=35, city="LA")




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


   Common Use Cases of Default Arguments




</h2>  
 </div>
 

<div className='wid text-justify pt-4'>
   <p><b> Simplify Function Calls: </b>

  Avoid passing common or default values repeatedly.





</p>  
 </div>
 <div className='wid text-justify'>
   <p><b>Optional Behavior:</b>

    Allow optional customization of function behavior.

  


</p>  
 </div>
 <div className='wid text-justify'>
   <p>
<b>   Flexible API Design:</b>
 Create functions with fewer mandatory parameters for ease of use.


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

export default PythonDefaultArguments