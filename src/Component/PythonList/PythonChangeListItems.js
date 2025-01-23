import React from 'react'
import { Link } from 'react-router-dom'


const PythonChangeListItems = () => {
  return (
      <div className='paddownforcol'>
   
    <div>
   <h1>Changing List Items
 </h1> 
 </div>
 
 <div>
   <p className='text-justify wid'>
   In Python, lists are mutable, meaning you can modify their contents after creation. This flexibility allows you to update, add, or remove elements in a list. Below is a comprehensive guide to all the ways you can change list items in Python.




</p>  
 </div>
 <div>
   <p className='text-justify wid pt-4'>
   
<h2>1. Changing an Item by Index

</h2>


</p>  
 </div>
 <div>
   <p className='text-justify wid pt-4'>
   You can directly modify a specific element in a list by accessing it using its index and assigning a new value.





</p>  
 </div>
 <div>
   <p className='text-justify wid pt-4'>
  <b>Syntax:
  </b>



</p>  
 </div>
 <div>
   <p className='text-justify wid pt-4'>
   list_name[index] = new_value





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
             <p className=' '>fruits[1] = "blueberry"









             </p>
             <p className=' '>print(fruits)  # Output: ['apple', 'blueberry', 'cherry']









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
<h2>2. Changing a Range of Items
</h2>
 </div>
 <div className='wid text-justify pt-4'>
<p>
You can update multiple elements at once by assigning a new sequence to a slice of the list.

</p>
 </div>
 <div className='wid text-justify pt-4'>
<p>
<b>Syntax:</b>
</p>
 </div>
 <div className='wid text-justify pt-4'>
<p>
list_name[start:end] = new_sequence


</p>
 </div>
 
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>numbers = [1, 2, 3, 4, 5]










             </p>
             <p className=' '>numbers[1:4] = [20, 30, 40]










             </p>
             <p className=' '>print(numbers)  # Output: [1, 20, 30, 40, 5]











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
 <h2>Points to Note:


 </h2>
 </div>
 <div className='wid text-justify pt-4'>
<p>The length of the new sequence doesn’t need to match the length of the slice.

</p>
 </div>
 <div className='wid text-justify pt-4'>
<p>Adding more elements will expand the list, and fewer elements will reduce it.


</p>
 </div>
 

 

 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>numbers = [1, 2, 3, 4, 5]










             </p>
             <p className=' '>numbers[1:3] = [100]

 </p>
 <p className=' '>print(numbers)  # Output: [1, 100, 4, 5]


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
 <h2>3. Inserting an Item


 </h2>
 </div>
 <div className='wid text-justify pt-4 '>
<p>Use the insert() method to add a new item at a specific position without overwriting existing items.



</p>
 </div>
 <div className='wid text-justify pt-4 '>
<p><b>Syntax:</b>



</p>
 </div>
 <div className='wid text-justify pt-4 '>
<p>list_name.insert(index, value)



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
             <p className=' '>fruits.insert(1, "blueberry")











             </p>
             <p className=' '>print(fruits)  # Output: ['apple', 'blueberry', 'banana', 'cherry']












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

export default PythonChangeListItems