import React from 'react'
import { Link } from 'react-router-dom'


const PythonAddListItems = () => {
  return (
      <div className='paddownforcol'>
   
    <div>
   <h1>Adding List Items
 </h1> 
 </div>
 

 <div>
   <p className='text-justify wid pt-4'>
   
<h2>Append Items
</h2>


</p>  
 </div>
 <div>
   <p className='text-justify wid pt-4'>
   To add an item to the end of the list, use the append() method:




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
   list_name.append(item)






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
             <p className=' '>fruits.append("cherry")










             </p>
             <p className=' '>print(fruits)  # Output: ['apple', 'banana', 'cherry']










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
<p>
Only one item can be added at a time.


</p>
 </div>
 <div className='wid text-justify'>
<p>
The item can be of any data type, including another list or an object.



</p>
 </div>
 <div className='wid text-justify pt-4'>
<p>Example with Different Data Types:



</p>
 </div>


 
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>items = [1, 2, 3]










             </p>
             <p className=' '>items.append([4, 5])  # Appends a list as a single item










             </p>
             <p className=' '>
             print(items)  # Output: [1, 2, 3, [4, 5]]











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
 <h2>2. Insert Items at a Specific Index



 </h2>
 </div>
 <div className='wid text-justify pt-4'>
<p>To insert a list item at a specified index, use the insert() method.

</p>
 </div>
 <div className='wid text-justify pt-4'>
<p>
<b>Syntax:</b>

</p>
 </div>
 <div className='wid text-justify pt-4'>
<p>
list_name.insert(index, item)


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
<div className='wid text-justify pt-4 '>
 <h2>Key Points:


 </h2>
 </div>
 <div className='wid text-justify pt-4 '>
<p>If the specified index is out of range:




</p>
 </div>
 <div className='wid text-justify  '>
<p>A positive index greater than the list length appends the item to the end.




</p>
 </div>
 <div className='wid text-justify  '>
<p>A negative index less than -len(list) inserts the item at the start.




</p>
 </div>
 
<div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>numbers = [1, 2, 3]










             </p>
             <p className=' '>numbers.insert(10, 4)  # Appends 4 to the end











             </p>
             <p className=' '>print(numbers)  # Output: [1, 2, 3, 4]

 </p>
 <p className=' '>numbers.insert(-10, 0)  # Inserts 0 at the start

</p>
<p className=' '>print(numbers)  # Output: [0, 1, 2, 3, 4]


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
<h2>Extend List</h2>
 </div>
 <div className='wid text-justify pt-4 '>
<p>To append elements from another list to the current list, use the extend() method.</p>
 </div>
 <div className='wid text-justify pt-4 '>
<p><b>Syntax:</b></p>
 </div>
 <div className='wid text-justify pt-4 '>
<p>list_name.extend(another_list)
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
             <p className=' '>
             more_fruits = ["cherry", "date"]











             </p>
             <p className=' '>fruits.extend(more_fruits)


 </p>
 <p className=' '>print(fruits)  # Output: ['apple', 'banana', 'cherry', 'date']


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
<h2>Add any Iterable</h2>
 </div>
 <div className='wid text-justify pt-4 '>
<p>The extend() method does not have to append lists, you can add any iterable object (tuples, sets, dictionaries etc.).</p>
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
             <p className=' '>
             tuple = ("kiwi", "orange")










             </p>
             <p className=' '>fruits.extend(tuple)


 </p>
 <p className=' '>print(fruits) # output:[apple,banana,kiwi,orange] 


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

export default PythonAddListItems