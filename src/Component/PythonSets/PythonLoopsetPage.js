import React from 'react'
import { Link } from 'react-router-dom'


const PythonLoopsetPage = () => {
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>Python Loop Sets                                                                                                                       
    </h1> 
    </div>
    
    <div>
      <p className='text-justify wid'>In Python, sets are unordered collections of unique elements. Looping through a set allows you to access and process its elements. Since sets are unordered, the order of elements during iteration is not guaranteed.
    </p>
    </div>

    <div className='wid text-justify pt-4'>
      <h4>1. Looping Through a Set with <b>for Loop</b>
       </h4> 
    </div>

    <div className='wid text-justify pt-2'>
  <p>
  

  The most common way to iterate through a set is by using a for loop.

</p>
  
</div>

<div className='wid text-justify pt-2'>
  <p>
  

  <b>Syntax</b>

</p>
  
</div>
<div className='text-justify wid pt-4 bglights pt-3 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  for item in set_name:`}
 </h5> 
</div>




</div>
   

  
 </div>

    

    
       <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0">Example</h5>
       </div>
    
     
       <div class=" text-white p-3 ">
         <pre class="mb-0">
        
                 <p className=''>{`fruits = {"apple", "banana", "cherry"}`}</p>
                 
                 <p><span className='text-danger'>for</span> fruit <span className='text-danger'>in</span> fruits:</p>
                 
                 <p className=''>  <span className='text-warning'>print</span>(fruit)
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
    
    <div className='wid text-justify pt-2'>
  <p>
  

  <b>Use case:</b> Simple iteration over all items in the set.
    </p> </div>


  
    <div className='wid text-justify pt-4'>
      <h4> Looping Through a Set with <b>enumerate()</b>
       </h4> 
    </div>

    <div className='wid text-justify pt-2'>
  <p>
  

  If you want to keep track of the index while iterating through a set, you can use the enumerate() function. However, remember that sets are unordered, so the indices are based on the iteration order, not the insertion order.
</p>
  
</div>

<div className='wid text-justify pt-2'>
  <p>
  

  <b>Syntax</b>

</p>
  
</div>
<div className='text-justify wid pt-4 bglights pt-3 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  for index, item in enumerate(set_name):
`}
 </h5> 
</div>




</div>
   

  
 </div>

    
    
    
       <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0">Example</h5>
       </div>
    
     
       <div class=" text-white p-3 ">
         <pre class="mb-0">
        
                 <p className=''>{`fruits = {"apple", "banana", "cherry"}`}</p>
                 
                 <p><span className='text-danger'>for</span> index, fruit <span className='text-danger'>in</span> enumerate(fruits)</p>
                 
                 <p className=''>  <span className='text-warning'>print</span>{`(f"Index {index}: {fruit}")`}
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


    


    
   
   <div className='wid text-justify pt-2'>
 <p>
 

 <b>Use case:</b> Simple iteration over all items in the set.
   </p> </div>


 
   <div className='wid text-justify pt-4'>
     <h4> Converting Set to List for Indexed Access
      </h4> 
   </div>

   <div className='wid text-justify pt-2'>
 <p>
 

 Since sets don’t support indexing directly, you can convert them to a list to access elements by index
</p>
 
</div>



   
   
   
      <div class="container py-4 p-2">
   
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`fruits = {"apple", "banana", "cherry"}`}</p>
                <p>fruits_list = list(fruits)</p>
                
                <p><span className='text-danger'>for</span> i <span className='text-danger'>in</span> range(len(fruits_list)):</p>
                
                <p className=''>  <span className='text-warning'>print</span>{`(f"Index {i}: {fruits_list[i]}")`}
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
     <h4><b> Using List Comprehension on Sets</b>
      </h4> 
   </div>

   <div className='wid text-justify pt-2'>
 <p>
 
 You can use set comprehensions to loop and apply transformations or filters on a set
 
</p>
 
</div>

<div className='wid text-justify pt-2'>
 <p>
 

 <b>Syntax</b>

</p>
 
</div>
<div className='text-justify wid pt-4 bglights pt-3 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>

</div>
<h5>{` new_set = {expression for item in set_name}
`}
</h5> 
</div>




</div>
  

 
</div>

   
   
   
      <div class="container py-4 p-2">
   
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`numbers = {1, 2, 3, 4, 5}`}</p>
                
                <p>squared_numbers = {`{num ** 2 for num in numbers}`}</p>
                
                <p className=''>  <span className='text-warning'>print</span>{`(squared_numbers)`}
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

    <div className='wid text-justify pt-2'>
  <p>
  

  Python makes it easy to loop through sets with a variety of techniques, from basic for loops to comprehensions and functional programming. Choose the method that suits your task, keeping in mind that sets are unordered, so iteration order is not guaranteed.

</p>


  
</div>
    

   
    
    <div className="d-flex justify-content-end pt-4">
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

export default PythonLoopsetPage