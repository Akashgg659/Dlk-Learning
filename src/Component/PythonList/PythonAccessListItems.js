import React from 'react'
import { Link } from 'react-router-dom'


const PythonAccessListItems = () => {
  return (
      <div className='paddownforcol'>
   
    <div>
   <h1>Accessing List Items
 </h1> 
 </div>
 
 <div>
   <p className='text-justify wid'>
   Lists in Python allow us to store multiple values in an ordered sequence. Accessing these items is an essential operation when working with lists. Here’s a detailed guide to accessing list items:



</p>  
 </div>
 <div>
   <p className='text-justify wid pt-4'>
   
<h2>1. Accessing Items by Index
</h2>


</p>  
 </div>
 <div>
   <p className='text-justify wid pt-4'>
   Each element in a list is assigned an index starting from 0. You can access elements using square brackets [] followed by the index.




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
             <p className=' '>print(fruits[0])  # Output: apple








             </p>
             <p className=' '>print(fruits[1])  # Output: banana









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
<p><b>Negative Indexing:
</b></p>
 </div>
 <div className='wid text-justify pt-4'>
<p>
Use negative indices to access elements from the end of the list. The index -1 refers to the last item, -2 to the second last, and so on.


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
             <p className=' '>print(fruits[-1])  # Output: cherry









             </p>
             <p className=' '>print(fruits[-2])  # Output: banana










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
 <h2>2. Accessing Multiple Items (Slicing)

 </h2>
 </div>
 <div className='wid text-justify pt-4'>
<p>You can use slicing to access a range of items from a list.

</p>
 </div>
 <div className='wid text-justify pt-4'>
<p><b>Syntax:</b>

</p>
 </div>
 <div className='wid text-justify pt-4'>
<p>list_name[start:end:step]

</p>
 </div>
 <div className='wid text-justify'>
<p>start: The starting index (inclusive).

</p>
 </div>
 <div className='wid text-justify '>
<p>end: The ending index (exclusive).

</p>
 </div>
 <div className='wid text-justify '>
<p>step: The step size (optional, default is 1).


</p>
 </div>

 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>numbers = [0, 1, 2, 3, 4, 5]









             </p>
             <p className=' '># Access elements from index 1 to 3 (exclusive)
 </p>
 <p className=' '>print(numbers[1:4])  # Output: [1, 2, 3]

 </p>
 <p className=' '># Access elements from the start to index 2

 </p>
 <p className=' '>print(numbers[:3])  # Output: [0, 1, 2]

 </p>
 <p className=' '># Access elements from index 2 to the end

 </p>
 <p className=' '>print(numbers[2:])  # Output: [2, 3, 4, 5]

 </p>
 <p className=' '># Access every second element

 </p>
 <p className=' '>print(numbers[::2])  # Output: [0, 2, 4]

 </p>
 <p className=' '># Access elements in reverse order

 </p>
 <p className=' '>print(numbers[::-1])  # Output: [5, 4, 3, 2, 1, 0]

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
 <h2>3. Iterating Through a List

 </h2>
 </div>
 <div className='wid text-justify pt-4 '>
<p>You can access each element in a list using a loop, such as a for loop.


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
<h2>4. Checking for Element Existence


</h2>
 </div>
 <div className='wid text-justify pt-4'>
<p>Use the in operator to check if an item exists in a list.

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
             <p className=' '>print("banana" in fruits)  # Output: True









             </p>
             <p className=' '>print("grape" in fruits)   # Output: False










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
   
<h2>Common Errors When Accessing List Items
</h2>


 
 </div>
 <div className='wid text-justify pt-4'>
   
   <p><b>IndexError:
   </b></p>
   
   
    
    </div>
    <div className='wid text-justify pt-4'>
   
   <p>Occurs when trying to access an index that is out of range.
   </p>
   
   
    
    </div>


 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>fruits = ["apple", "banana"]








             </p>
             <p className=' '>print(fruits[3])  # Error: IndexError: list index out of range









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
<p><b>TypeError:
</b>
</p>



  
 </div>
 <div className='wid text-justify pt-4'>
<p>Happens when trying to access a list item using a non-integer index.

</p>



  
 </div>

 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>fruits = ["apple", "banana"]








             </p>
             <p className=' '>print(fruits["1"])  # Error: TypeError: list indices must be integers or slices








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

export default PythonAccessListItems