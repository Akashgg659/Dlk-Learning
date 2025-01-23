import React from 'react'
import { Link } from 'react-router-dom'


const PythonMembershipOperatorsPage = () => {
  return (
  

 <div className='paddownforcol'>
  
  <>
   
   <div>
  <h1>Membership Operators
</h1> 
</div>

<div>
  <p className='text-justify wid'>
  Membership operators in Python are used to test if a value or variable exists in a sequence (like a list, tuple, string, or dictionary). These operators help in checking the membership or presence of an element within a collection.


</p>  
</div>





<div className='wid text-justify pt-4'>
  <h2>

  Types of Membership Operators 





</h2>  
</div>
<div className='wid text-justify '>
 <ul>
   <li>in</li>
   <li>not in</li>
 </ul>
</div>
<div className='wid text-justify pt-4'>
  <h2>
  1. in Operator


</h2>  
</div>

<div className='wid text-justify'>
  <p>The in operator checks if a value is present in a sequence. It returns True if the value is found in the sequence and False otherwise.



</p>  
  </div>
  <div className='wid text-justify'>
  <p ># Example with a list








</p>  
  </div>
  <div class="container py-4 p-2">

 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
             <p className=''>fruits = ["apple", "banana", "cherry"]



             </p>
             <p className=' '>result = "banana" in fruits


             </p>
             <p className=' '>print(result)  # Output: True


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
  <p className=''> # Example with a string




</p>  
  </div>
  <div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''>name = "Python"




            </p>
            <p className=' '>result = "P" in name



            </p>
            <p className=' '>print(result)  # Output: True



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
  <p > In the first example, the in operator checks if "banana" is present in the list fruits. Since it is, the result is True.





</p>  
  </div>
  <div className='wid text-justify '>
  <p >In the second example, the in operator checks if the character "P" is in the string "Python", and the result is also True.







</p>  
  </div>
  <div className='wid text-justify pt-4'>
  <h2 >2. not in Operator







</h2>  
  </div>
  <div className='wid text-justify'>
  <p >The not in operator checks if a value is not present in a sequence. It returns True if the value is not found in the sequence and False if the value is present.








</p>  
  </div>
  <div className='wid text-justify'>
  <p ># Example with a list








</p>  
  </div>
  <div class="container py-4 p-2">

 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
             <p className=''>fruits = ["apple", "banana", "cherry"]

             </p>
             <p className=' '>result = "orange" not in fruits

             </p>
             <p className=' '>print(result)  # Output: True

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
  <p className=''> # Example with a string




</p>  
  </div>
  <div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''>name = "Python"


            </p>
            <p className=' '>result = "p" not in name


            </p>
            <p className=' '>print(result)  # Output: True

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
  <p >In the first example, the not in operator checks if "orange" is not present in the list fruits. Since it is not present, the result is True.





</p>  
  </div>
  <div className='wid text-justify '>
  <p >In the second example, the not in operator checks if the lowercase "p" is not in the string "Python". Since "p" does not match the uppercase "P" in the string, the result is True.







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
     <td>in</td>
     <td>Returns True if the value exists in the sequence.
     </td>
     <td>"apple" in fruits	
     </td>
     <td>True 
     </td>
     
     
   </tr>
   <tr>
   <td>not in</td>
     <td>Returns True if the value does not exist in the sequence.
     </td>
     <td>"orange" not in fruits
     </td>
     <td>True
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
<div></div>
</>
 </div>
  )
}

export default PythonMembershipOperatorsPage
