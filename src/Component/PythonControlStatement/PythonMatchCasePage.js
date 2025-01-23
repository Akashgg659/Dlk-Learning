import React from 'react'
import { Link } from 'react-router-dom'

const PythonMatchCasePage = () => {
  return (
 
 <div className='paddownforcol'>
       <>
   
   <div>
  <h1>Match Case
</h1> 
</div>

<div>
  <p className='text-justify wid'>match case is a feature introduced in Python 3.10 as part of structural pattern matching. It allows you to match values against patterns and execute code based on the matched pattern. This feature simplifies conditional logic and is especially helpful when dealing with complex scenarios.


</p>  
</div>
<div className='wid text-justify pt-4'>
  <h4>Description
   </h4>






</div>
<div className='wid text-justify'>
  <p>
  

 <b>match:</b>  Starts a pattern matching block.


</p>  
</div>
<div className='wid text-justify'>
  <p><b>case:</b> Defines individual patterns to match against.




</p>  
</div>
<div className='wid text-justify'>
  <p>   <b>Patterns:</b>Can be literals, variables, wildcards (_), or complex structures.

</p>  
</div>
<div className='wid text-justify'>
  <p>    <b>Default Case:</b>  Use _ as a wildcard to catch all unmatched cases (similar to default in switch statements).
 

</p>  
</div>
<div className='wid text-justify pt-4'>
  <p><b>Syntax:</b>
</p>  
</div>
<div className='wid text-justify'>
  <p>match value:
</p>  
</div>
<div className='wid text-justify'>
  <p>   case pattern1:

</p>  
</div>
<div className='wid text-justify'>
  <p>  # Action for pattern1

</p>  
</div>
<div className='wid text-justify'>
  <p>  case pattern2:

</p>  
</div>
<div className='wid text-justify'>
  <p> # Action for pattern2
</p>  
</div>
<div className='wid text-justify'>
  <p>  case _:
</p>  
</div>
<div className='wid text-justify'>
  <p>   # Default action if no patterns match</p>
</div>
<div className='wid text-justify pt-4'>
  <h2>
Flowchart of match case
</h2>  
  </div>
  <div className='wid text-justify'>
  

<p>The below diagram shows flowchart of the Nested match case −
</p>

  </div>
  <div>
   <img className="img-fluid " src='/images/matchcaseflowchart.png' alt="If flowchart" width={500}   />
   </div>

   <div class="container py-4 p-2">

 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>def match_example(value):
             </p>
             <p className=' '>match value:
             </p>
             <p className=''>case <span className='text-danger'>1</span>:
             </p>
             <p className=''> return  <span className='text-success'>"One"</span>
             </p>
             <p className=''>case <span className='text-danger'>2</span>:
             </p>
             <p className=''> return <span className='text-success'>"Two"</span>
             </p>
             <p className=''>case <span className='text-danger'>3</span>:
             </p>
             <p className=''> return <span className='text-success'>"Three"</span>
             </p>
             <p className=''>case <span className='text-danger'>_</span>:
             </p>
             <p className=''> return <span className='text-success'>"Unknown number"</span>
             </p>
             <p className='text-primary'># Test the function
             </p>
             <p className=''> <span className='text-warning'>print</span>(match_example(1)) <span className='text-primary'> # Output: One</span>
             </p>
             <p className=''> <span className='text-warning'>print</span>(match_example(4))  <span className='text-primary'></span>
             <span className='text-primary'># Output: Unknown number</span>
             e
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
  <p>With the match case feature, Python brings a powerful and expressive way to simplify complex conditional logic, making your code cleaner, more readable, and efficient.
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

export default PythonMatchCasePage
