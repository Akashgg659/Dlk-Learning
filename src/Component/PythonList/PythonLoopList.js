import React from 'react'
import { Link } from 'react-router-dom'


const PythonLoopList = () => {
  return (
      <div className='paddownforcol'>
   
    <div>
   <h1>Looping List
 </h1> 
 </div>
 


 <div>
   <p className='text-justify wid pt-4'>
   In Python, lists are a fundamental data structure, and iterating through them is a common operation. Python provides several ways to loop through a list, each suited to different scenarios. Let's explore them.




</p>  
 </div>
 <div>
   <p className='text-justify wid pt-4'>
 <h2>1. Using a for Loop</h2>



</p>  
 </div>
 <div>
   <p className='text-justify wid pt-4'>
   The most straightforward way to loop through a list is with a for loop.






</p>  
 </div>
 <div>
   <p className='text-justify wid pt-4'>
   <b>Syntax:</b>




</p>  
 </div>
 <div>
   <p className='text-justify wid pt-4'>
   for item in list:




</p>  
 </div>
 <div>
   <p className='text-justify wid pt-4'>
   # Perform actions with item




</p>  
 </div>

 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>fruits = ['apple', 'banana', 'cherry']







             </p>
             <p className=' '>for fruit in fruits:









             </p>
             <p className=' '>print(fruit)









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
<h2>Key points
</h2>
 </div>
 <div className='wid text-justify pt-4'>
    <ul><li>The loop iterates through each element in the list.</li>
    <li>The item variable takes the value of each list element sequentially.</li>
    
    </ul>

 </div>

 <div className='wid text-justify pt-4'>
    <h2>
    2. Using the range() and len() Functions
 </h2>
 </div>
 <div className='wid text-justify pt-4'>
   <p>To loop through a list by index, combine range() with len().

   </p>
 </div>

 <div className='wid text-justify pt-4'>
   <p><b>Syntax:</b></p>
 </div>
 <div className='wid text-justify pt-4'>
   <p>for i in range(len(list)):
   </p>
 </div>
 <div className='wid text-justify pt-4'>
   <p># Use list[i]
   </p>
 </div>
 
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>fruits = ['apple', 'banana', 'cherry']









             </p>
             <p className=' '>for i in range(len(fruits)):









             </p>
             <p className=' '>
             print(numbers)  print(f"Index {'{i}: {fruits[i]}'}")











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
 <h2>Key Points:



 </h2>
 </div>
 <div className='wid text-justify pt-4'>
    <ul><li>Useful when the index is required for additional operations.
        </li>
        <li>Allows access to both the index and the item.</li></ul>

 </div>
 
 <div className='wid text-justify pt-4'>
<h2>3. Using a while Loop</h2>
 </div>
 <div className='wid text-justify pt-4'>
<p>
A while loop can iterate through a list using an index variable.


</p>
 </div>
 <div className='wid text-justify pt-4'>
<p>
<b>Syntax:</b>


</p>
 </div>
 <div className='wid text-justify pt-4'>
<p>
i = 0


</p>
 </div>
 <div className='wid text-justify '>
<p>

while i {'<'} len(list):
</p>
 </div>
 <div className='wid text-justify '>
<p>
# Use list[i]
</p>
 </div>
 <div className='wid text-justify '>
<p>

i += 1
</p>
 </div>
 

 

 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>fruits = ['apple', 'banana', 'cherry']










             </p>
             <p className=' '>i = 0

 </p>
 <p className=' '>while i {'<'} len(fruits):



 </p>
 <p className=' '>print(fruits[i])



 </p>
 <p className=' '>i += 1



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
<div className='wid text-justify pt-4 '>
 <h2>Key Points:


 </h2>
 </div>
 <div className='wid text-justify pt-4 '>
<ul>
    <li>Provides more control over the loop condition.</li>
    <li>Requires manual management of the index variable.</li>
</ul>
 </div>

 
 <div className='wid text-justify pt-4 '>
<h2>4. Looping with List Comprehensions</h2>
 </div>
 <div className='wid text-justify pt-4 '>
<p>List comprehensions provide a compact way to loop through a list and optionally transform or filter items.</p>
 </div>
 <div className='wid text-justify pt-4 '>
<p><b>Syntax:</b></p>
 </div>
 <div className='wid text-justify pt-4 '>
<p>[expression for item in list]

</p>
 </div>
 
<div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>fruits = ['apple', 'banana', 'cherry']










             </p>
             <p className=' '>uppercase_fruits = [fruit.upper() for fruit in fruits]











             </p>
             <p className=' '>print(uppercase_fruits) # Output: ['APPLE', 'BANANA', 'CHERRY']
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

 <div className='wid text-justify pt-4 '>
<h2>Key Points:</h2>
 </div>
 <div className='wid text-justify pt-4 '>
<ul>
    <li>Great for creating new lists based on transformations or conditions.</li>
    <li>Concise and expressive.</li>
</ul>
 </div>
 <div className='wid text-justify pt-4 '>
<p>By mastering these looping techniques, you can efficiently process and manipulate lists in Python to suit a wide variety of tasks.</p>
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

export default PythonLoopList