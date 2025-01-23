import React from 'react'
import { Link } from 'react-router-dom'


const PythonKeywordOnlyArguments = () => {
  return (
      <div className='paddownforcol'>
   
    <div>
   <h1>Keyword-Only Arguments
 </h1> 
 </div>
 
 <div>
   <p className='text-justify wid'>Keyword-only arguments are function arguments that can only be passed using their names (i.e., as keywords) and not as positional arguments. These help create more readable and explicit code.
</p>  
 </div>
 <div className='wid text-justify pt-4'>
<h2>What Are Keyword-Only Arguments?
</h2>
 </div>
 
 <div className='wid text-justify pt-4'>
   <p>


   These are arguments that must be passed as keyword arguments during a function call.





</p>  
 </div>
 <div className='wid text-justify'>
  <p>
  Positional passing for these arguments is not allowed.


  </p>
 </div>
 <div className='wid text-justify'>
   <p> They enhance code readability and reduce potential errors by making the intent of the arguments explicit.



    </p>  
 </div>
 <div className='wid text-justify bgyellow'>
   <p>                  
  


   <b>Note:</b>You can define keyword-only arguments in a function using the * operator. Any parameter listed after * in the function signature will be treated as keyword-only.






</p>  
 </div>
 
<div className='wid text-justify pt-4'>
  <p><b>Syntax:</b></p>
 </div>
 <div className='wid text-justify pt-4'>
   <p>                  
 
 
   def function_name(positional_arg, *, keyword_only_arg1, keyword_only_arg2):




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
 
 
<b>positional_arg:</b> Must be passed positionally.





</p>  
 </div>
 <div className='wid text-justify '>
   <p>                  
 
 
<b>keyword_only_arg1 and keyword_only_arg2:</b> Must be passed as keywords.





</p>  
 </div>
 <div className='wid text-justify pt-4 '>
   <h2>                  
 
   Example of Keyword-Only Arguments





</h2>  
 </div>
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>def book_ticket(destination, *, travel_class="economy", meal="standard"):




             </p>
             <p className=' '>print(a +travel_class class ticket to +destination with +meal meal)



             </p>
             <p className=' '># Correct usage




</p>
<p className=' '>book_ticket("Paris", travel_class="business", meal="vegetarian")

</p>
<p className=' '># Incorrect usage (raises TypeError)</p>

<p className=' '># book_ticket("Paris", "business", "vegetarian")

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
   Enforcing Keyword-Only Arguments with *

   </h2>



  
 </div>
 <div className='wid text-justify pt-4'>
<p>The * operator in the function signature explicitly marks all parameters after it as keyword-only.

</p>


  
 </div>
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>def update_profile(*, username, email):





             </p>
             <p className=' '>print(Updating profile for +username with email +email.")



             </p>
             <p className=' '># Must use keyword arguments





</p>
<p className=' '>update_profile(username="john_doe", email="john@example.com")


</p>
<p className=' '># Positional arguments are not allowed (raises TypeError)
</p>

<p className=' '># update_profile("john_doe", "john@example.com")


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


  Using **kwargs for Flexible Keyword-Only Arguments

  </h2>
 </div>
 <div className='wid text-justify pt-4'>
   <p>Keyword-only arguments can be combined with **kwargs to accept additional unspecified keyword arguments.

    </p>


  
 </div>
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>def display_info(*, name, age, **kwargs):






             </p>
             <p className=' '>print(Name: +name, Age: +age")




             </p>
             <p className=' '>for key, value in kwargs.items():






</p>
<p className=' '>print(+key: +value")



</p>
<p className=' '>display_info(name="Alice", age=30, city="New York", profession="Engineer")

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


  Why Use Keyword-Only Arguments?


  </h2>
 </div>
 <div className='wid text-justify pt-4'>
   <p><b>Improved Readability:</b>Ensures that the purpose of each argument is clear at the call site.

    </p>


  
 </div>
 <div className='wid text-justify pt-4'>
   <p><b>Avoids Ambiguity: </b>Prevents confusion about the order of arguments in the function call.

    </p>


  
 </div>
 <div className='wid text-justify pt-4'>
   <p><b>Flexibility: </b>Allows optional parameters to be omitted without positional constraints.

    </p>


  
 </div>
 <div className='wid text-justify pt-4'>
   <p><b>Error Prevention:</b>Reduces bugs caused by incorrectly ordered arguments.
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

export default PythonKeywordOnlyArguments