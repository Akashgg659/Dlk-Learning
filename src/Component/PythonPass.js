import React from 'react'
import { Link } from 'react-router-dom'


const PythonPass = () => {
  return (
  
 <div className='paddownforcol'>
    <>
   
   <div>
  <h1>Pass Statement
</h1> 
</div>

<div>
  <p className='text-justify wid'>The pass statement in Python is a null operation. When the Python interpreter encounters a pass statement, it does nothing and moves on to the next line of code. It’s often used as a placeholder in code blocks where some functionality is required syntactically, but you haven’t yet implemented the logic.









</p>  
</div>
<div className='wid text-justify pt-4'>
  <p>
<b>Syntax:</b>



</p>  
</div>

<div className='wid text-justify'>
  <p>if condition:








</p>  
</div>
<div className='wid text-justify'>
  <p>pass  # Placeholder for future code






</p>  
</div>
<div className='wid text-justify'>
  <p> The pass statement is often used in loops, functions, classes, and exception handling where a code block is syntactically required but you don’t want it to perform any operation.
                       






</p>  
</div>
<div className='wid text-justify pt-4'>
  <h2>                  
 


  Example 1: Using pass in a Function



</h2>  
</div>

<div className='wid text-justify'>
  <p>                  
  In the following example, the pass statement is used in a function to indicate that the function is defined but not yet implemented:






</p>  
</div>

<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
   

            <p className=''>def placeholder_function():




            </p>
            <p >pass <span className=' text-primary'># Function implementation pending</span> 




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
  <p>In this case, calling placeholder_function() will do nothing, and you can leave the function body empty for now, while ensuring that the program doesn't throw an error.







</p>  
</div>
<div className='wid text-justify pt-4'>
  <h2>  Example 2: Using pass in a Loop





</h2>  
</div>
<div className='wid text-justify'>
  <p>Sometimes, you may want to create a loop that doesn’t perform any action but still needs to be syntactically correct. Here’s how you can use pass in that scenario:





</p>  
</div>
<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
   

            <p className=''>for num in range(<span className='text-danger'>5</span>):





            </p>
            <p className=' '>if num == <span className='text-danger'>3</span>:







            </p>
            <p className=''>pass  <span className='text-success'># Do nothing when num is 3</span>






            </p>
            <p className=''>else:







            </p>
            <p className=''><span className='text-warning'>print</span>(num)







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
  <p>

  In this example, when num equals 3, the pass statement is encountered, and no action is taken. For other values of num, the loop continues and prints the number.




</p>  
</div>
<div className='wid text-justify pt-4'>
  <h2>Practical Use Cases of pass




</h2>  
</div>
<div className='wid text-justify pt-4'>
  <p><b>Stubbing Functions or Methods:


  </b>




</p>  
</div>
<div className='wid text-justify'>
  <p>You can use pass to define functions or methods that you plan to implement later. It’s helpful when setting up a project with placeholders for future code.






</p  >
</div>
<div className='wid text-justify pt-4'>
  <p><b>Empty Class Definitions:


  </b>




</p  >
</div>
<div className='wid text-justify '>
  <p>


  Sometimes, you may need to define a class but don't have its implementation yet. The pass statement can be used to avoid syntax errors while leaving the class body empty.


</p  >
</div>
<div className='wid text-justify'>
  <p>class MyClass:

</p  >
</div>
<div className='wid text-justify'>
  <p>    pass  # Empty class definition

</p  >
</div>
<div className='wid text-justify pt-4'>
  <p><b>Handling Exceptions Gracefully:
  </b>
</p  >
</div>
<div className='wid text-justify'>
  <p>In cases where you expect certain exceptions but don’t need to handle them, you can use pass in the except block to avoid program crashes.

</p  >
</div>
<div className='wid text-justify pt-4'>
  <p><b>Conditionally Ignoring Parts of Code:
  </b>
</p  >
</div>
<div className='wid text-justify'>
  <p>If you want to conditionally ignore parts of your code but still maintain structure, pass is a simple way to implement that.

</p  >
</div>
<div className='wid text-justify'>
  <p>The pass statement is a helpful tool in Python for creating placeholder code, handling exceptions without any action, or maintaining valid structure in loops and conditionals. However, it's important to implement the intended functionality eventually.

</p  >
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

export default PythonPass