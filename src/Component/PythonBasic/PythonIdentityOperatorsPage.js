import React from 'react'
import { Link } from 'react-router-dom'

const PythonIdentityOperatorsPage = () => {
  return (

 <div className='paddownforcol'>
        <>
   
   <div>
  <h1>Identity Operators
</h1> 
</div>

<div>
  <p className='text-justify wid'>
Identity operators in Python are used to compare the memory locations of two objects. They check whether two variables point to the same object in memory, not just whether their values are equal.

</p>  
</div>





<div className='wid text-justify pt-4'>
  <h2>

Types of Identity Operators




</h2>  
</div>
<div className='wid text-justify '>
 <ul>
   <li>is</li>
   <li>is not</li>
 </ul>
</div>
<div className='wid text-justify pt-4'>
  <h2>
  1. is Operator


</h2>  
</div>

<div className='wid text-justify'>
  <p>The is operator evaluates to True if two variables point to the same object (i.e., they have the same identity in memory). If the objects are different, it returns False.



</p>  
  </div>
  <div class="container py-4 p-2">

 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
     <p className=''>a = [<span className='text-danger'>1</span>, <span className='text-danger'>2</span>, <span className='text-danger'>3</span>]


             </p>
             <p className=' '>b = a  <span className='text-primary'># Both variables refer to the same object in memory</span>

             </p>
             <p className=' '>c = [<span className='text-danger'>1</span>, <span className='text-danger'>2</span>, <span className='text-danger'>3</span>]  # A new object with the same value as `a`

</p>
<p className=' '><span className='text-warning'>print</span>(a is b)  <span className='text-primary'># Output: True (both refer to the same object)</span>

</p>
<p className=' '><span className='text-warning'>print</span>(a is c) <span className='text-primary'># Output: False (different objects with the same value)</span> 


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
  <p className=''> In this example:




</p>  
  </div>
  <div className='wid text-justify sp'>
  <p > a and b point to the same object, so a is b returns True.





</p>  
  </div>
  <div className='wid text-justify sp'>
  <p >a and c have the same value, but they are stored in different memory locations, so a is c returns False.






</p>  
  </div>
  <div className='wid text-justify pt-4'>
  <h2 >2. is not Operator







</h2>  
  </div>
  <div className='wid text-justify'>
  <p >The is not operator evaluates to True if two variables do not point to the same object in memory. If they point to the same object, it returns False.







</p>  
  </div>
  <div class="container py-4 p-2">

 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
             <p className=''>x=<span className='text-danger'>10</span>
             </p>
             <p className=' '>y=<span className='text-danger'>10</span>
             </p>
             <p className=' '>z=<span className='text-danger'>20</span>
             </p>
             <p>print(x is not y)  <span className='text-success'># Output: False (both refer to the same object)</span>
            
             </p>
             <p className=' '><span className='text-warning'>print</span>(x is not z) <span></span> <span className='text-success'># Output: True (different objects)</span> 

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
  <p className=''> In this example:



</p>  
  </div>
  <div className='wid text-justify sp'>
  <p >x and y refer to the same object (since Python optimizes small integers), so x is not y returns False.





</p>  
  </div>
  <div className='wid text-justify sp'>
  <p >x and z refer to different objects, so x is not z returns True.






</p>  
  </div>
  <div className='wid text-justify pt-4'>
  <h2>Summary Table






</h2>  
  </div>
  <div>
 <table className="table table-striped">
 <thead>
   <tr>
     <th>Operator</th>
     <th>Description</th>
     <th>Example</th>
     <th>Result</th>
     

     
   
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>is</td>
     <td>Returns True if two variables point to the same object.
     </td>
     <td>a is b
     </td>
     <td>True or False
     </td>
     
     
   </tr>
   <tr>
   <td>is not</td>
     <td>Returns True if two variables point to different objects.
     </td>
     <td>a is not b
     </td>
     <td>True or False
     </td>
    
   </tr>
   
 </tbody>
</table>
</div>


<div className="d-flex justify-content-end">
< Link to={"/python"} className="button-link m-1">
    <button className="button bg-primary text-white "
     
    >Prev</button>
  </Link>
  <Link to={"/python/installation "}  className="button-link m-1">
    <button className="button bg-primary text-white ">Next</button>
 </Link>
</div>
</>

 </div>
  )
}

export default PythonIdentityOperatorsPage
