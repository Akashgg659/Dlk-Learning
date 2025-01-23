import React from 'react'
import { Link } from 'react-router-dom'


const PythonList = () => {
  return (
      <div className='paddownforcol'>
   
    <div>
   <h1>List
 </h1> 
 </div>
 
 <div>
   <p className='text-justify wid'>
   A list in Python is a collection of elements enclosed in square brackets []. These elements can be of any data type, such as integers, strings, floats, or even other lists.


</p>  
 </div>
 

 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>my_list = [1, "Python", 3.14, True]







             </p>
             <p className=' '>print(my_list)  # Output: [1, 'Python', 3.14, True]








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
<h2>Type:
</h2>
 </div>
 <div className='wid text-justify pt-4'>
<p>
You can verify the type of a list using the type() function.

</p>
 </div>
 
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>my_list = [1, 2, 3]








             </p>
             <p className=' '>print(type(my_list))  








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
 <h2>Heterogeneous:
 </h2>
 </div>
 <div className='wid text-justify pt-4'>
<p>Lists can store elements of different data types, including numbers, strings, booleans, and even other lists or objects.

</p>
 </div>

 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>my_list = [10, "Python", 3.14, True]









             </p>
             <p className=' '>print(my_list)  # Output: [10, 'Python', 3.14, True]










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
 <h2> Lists are Ordered

 </h2>
 </div>
 <div className='wid text-justify pt-4 '>
<p>Lists maintain the order of their elements.
Each element has a specific position, starting from index 0.

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
             <p className=' '>print(fruits[2])  # Output: cherry











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
<p>Even if you modify the list, the relative order remains intact unless explicitly changed.

</p>
 </div>
 
<div className='wid text-justify pt-4'>
<h2>Lists are Changeable

</h2>
 </div>
 <div className='wid text-justify pt-4'>
<p>Lists are mutable, meaning you can add, remove, or modify elements after the list is created.

</p>
 </div>
 <div className='wid text-justify pt-4'>
<p>Modify an Element:


</p>
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>numbers = [10, 20, 30]








             </p>
             <p className=' '>numbers[1] = 25








             </p>
             <p className=' '>print(numbers)  # Output: [10, 25, 30]









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
   
<p>Add Elements:
</p>



 
 </div>


 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>numbers.append(40)







             </p>
             <p className=' '>print(numbers)  # Output: [10, 25, 30, 40]








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
<p>Remove Elements:
</p>



  
 </div>

 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>numbers.remove(25)








             </p>
             <p className=' '>print(numbers)  # Output: [10, 30, 40]








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
<h2>Lists Can Contain Duplicate Values

</h2>

  
 </div>
 <div className='wid text-justify pt-4'>
<p>Lists allow duplicate values, meaning the same value can appear multiple times.

</p>

  
 </div>


 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>my_list = [1, 2, 2, 3, 4, 4, 4]









             </p>
             <p className=' '>print(my_list)  # Output: [1, 2, 2, 3, 4, 4, 4]

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
 <p>This is useful when working with datasets that may naturally have repeated entries.
 </p>

  
 </div>
 <div className='wid text-justify pt-4'>
 <h2>List Length</h2>

  
 </div>
 <div className='wid text-justify pt-4'>
 <p>The length of a list refers to the number of elements it contains. Use the len() function to determine the length of a list.

 </p>


  
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>my_list = ["Python", "is", "fun"]










             </p>
             <p className=' '>print(len(my_list))  # Output: 3










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
 <h2>List Constructor

 </h2>
 </div>
 <div className='wid text-justify pt-4'>
<p>You can also create lists using the list() constructor. It is particularly useful when converting other iterable objects (like tuples, strings, or sets) into lists.

</p>
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>string = "hello"













             </p>
             <p className=' '>my_list = list(string)


 </p>
 <p className=' '>print(my_list)  # Output: ['h', 'e', 'l', 'l', 'o']



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

export default PythonList