import React from 'react'
import { Link } from 'react-router-dom'


const PythonKeywordArguments = () => {
  return (
      < div className='paddownforcol'>
   
    <div>
   <h1>Keyword Arguments
 </h1> 
 </div>
 
 <div>
   <p className='text-justify wid'>In Python, keyword arguments allow you to pass arguments to a function by explicitly specifying the parameter names along with their values. This makes function calls more readable and flexible, especially when dealing with functions that have many parameters.

</p>  
 </div>
 <div className='wid text-justify pt-4'>
  <p>
    <b>Syntax:</b>
  </p>
 </div>
 
 <div className='wid text-justify pt-4'>
   <p>


   def function_name(param1, param2):




</p>  
 </div>
 <div className='wid text-justify'>
  <p>
  # Function body

  </p>
 </div>
 <div className='wid text-justify'>
   <p> # Call using keyword arguments



    </p>  
 </div>
 <div className='wid text-justify '>
   <p>                  
  


   function_name(param1=value1, param2=value2)





</p>  
 </div>
 
<div className='wid text-justify pt-4'>
   <h2>                  
 

   Examples of Keyword Arguments

  


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
    

             <p className=''>def describe_pet(name, species="dog"):




             </p>
             <p className=' '>print("Name: " + name)




             </p>
             <p className=' '>print("Species: " + species)



</p>
<p className=' '># Using keyword arguments
</p>
<p className=' '>describe_pet(name="Buddy", species="cat")  # Explicitly setting both arguments
</p>
<p className=' '>describe_pet(species="parrot", name="Polly")  # Order doesn't matter with keywords
</p>
<p className=' '>describe_pet(name="Rex")  # Default value is used for species
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
   Benefits of Keyword Arguments

   </h2>



  
 </div>
 <div className='wid text-justify pt-4'>
<p><b>Improved Code Readability:</b></p>Makes the purpose of each argument clear in the function call.



  
 </div>
 <div className='wid text-justify pt-4'>
  <p><b>Flexibility:</b></p>
  Allows skipping of optional parameters or changing the order of arguments.



  
 </div>
 <div className='wid text-justify pt-4'>
   <p><b>Useful for Functions with Many Parameters:</b></p>Prevents confusion when there are multiple optional parameters.



  
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

export default PythonKeywordArguments