import React from 'react'
import { Link } from 'react-router-dom'


const PythonListComprehensions = () => {
  return (
      <div className='paddownforcol'>
   
    <div>
   <h1>List Comprehensions
 </h1> 
 </div>
 


 <div>
   <p className='text-justify wid pt-4'>
   List comprehension is a concise and Pythonic way to create, filter, and transform lists. It combines the functionality of a for loop and optional conditions into a single, readable line of code.



</p>  
 </div>
 
 <div>
   <p className='text-justify wid pt-4'>
   <b>Syntax:</b>




</p>  
 </div>
 <div>
   <p className='text-justify wid pt-4'>
   new_list = [expression for item in iterable if condition]





</p>  
 </div>
 <div>
   <ul className='text-justify wid pt-4'>
  <li><b>expression:</b> The operation or transformation to apply to each item.</li>
  <li><b>item:</b> Represents the current element in the iteration.</li>
  <li><b>iterable:</b> Any Python iterable (like a list, range, string, etc.).</li>
  <li><b>condition (optional):</b> A filter to include only specific items.</li>



</ul>  
 </div>
 <div>
   <h2 className='text-justify wid pt-4'>
   

   1. Simple List Comprehension


</h2>  
 </div>
 <div>
 <p>Transform elements of a list and create a new list.</p> 
 </div>

 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>numbers = [1, 2, 3, 4]







             </p>
             <p className=' '>squares = [num**2 for num in numbers]









             </p>
             <p className=' '>print(squares)  # Output: [1, 4, 9, 16]









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
<h2>2. Using a Conditional (Filtering)
</h2>
 </div>
 <div className='wid text-justify pt-4'>
    <p>Include only elements that meet a condition.</p>

 </div>


 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>numbers = [1, 2, 3, 4, 5, 6]









             </p>
             <p className=' '>even_numbers = [num for num in numbers if num % 2 == 0]









             </p>
             <p className=' '>
             print(even_numbers)  # Output: [2, 4, 6]











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
 <h2>3. Nested Loops in List Comprehension



 </h2>
 </div>
 <div className='wid text-justify pt-4'>
    <p>List comprehensions can include multiple for loops to handle nested iterables.</p>
 </div>
 
 

 

 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>matrix = [[1, 2], [3, 4], [5, 6]]










             </p>
             <p className=' '>flattened = [num for row in matrix for num in row]

 </p>
 <p className=' '>print(flattened)  # Output: [1, 2, 3, 4, 5, 6]


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
 <h2>4. Conditional Expressions in List Comprehension


 </h2>
 </div>
 <div className='wid text-justify pt-4 '>
<p>Include an if-else condition to modify elements based on a condition.</p>
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
             <p className=' '>results = ['Even' if num % 2 == 0 else 'Odd' for num in numbers]











             </p>
             <p className=' '>print(results)  # Output: ['Odd', 'Even', 'Odd', 'Even', 'Odd']
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
<h2>5. Working with Strings</h2>
 </div>
 <div className='wid text-justify pt-4 '>
<p>List comprehension works seamlessly with strings.</p>
 </div>
 <div className='wid text-justify pt-4 '>
<p>Character Extraction</p>
 </div>
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>word = "Python"










             </p>
             <p className=' '>letters = [char for char in word]











             </p>
             <p className=' '>print(letters)  # Output: ['P', 'y', 't', 'h', 'o', 'n']
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
<p>Filtering Letters</p>
 </div>
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>word = "Python3.9"










             </p>
             <p className=' '>alphabets = [char for char in word if char.isalpha()]












             </p>
             <p className=' '>print(alphabets)  # Output: ['P', 'y', 't', 'h', 'o', 'n']
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
<h2>6. Using Built-in Functions</h2>
 </div>
 <div className='wid text-justify pt-4 '>
<p>Combine list comprehensions with Python's built-in functions.</p>
 </div>
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>numbers = [1, -2, 3, -4]










             </p>
             <p className=' '>aabs_values = [abs(num) for num in numbers]












             </p>
             <p className=' '>print(abs_values) # Output: [1, 2, 3, 4]
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
<h2>Advantages of List Comprehensions</h2>
 </div>
 <div className='wid text-justify pt-4 '>
<ul>
    <li><b>Conciseness:</b> Reduces the number of lines of code.</li>
    <li><b>Readability: </b>Easier to understand for simple transformations.</li>
    <li><b>Performance:</b> Slightly faster than traditional loops in most cases.</li>
</ul>
 </div>
 <div className='wid text-justify pt-4 '>
<h2>Disadvantages of List Comprehensions</h2>
 </div>
 <div className='wid text-justify pt-4 '>
<ul>
    <li><b>Complexity:</b>Can become hard to read if too complex.</li>
    <li><b>Memory Usage: </b>Stores the entire list in memory; consider using generators for large data.</li>
    
</ul>
 </div>
 <div className='wid text-justify pt-4 '>
<p>List comprehension is a powerful tool for creating and transforming lists in Python. While it offers concise and expressive syntax, it's important to use it judiciously to maintain code readability and efficiency. For complex logic, consider using traditional loops instead.</p>
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

export default PythonListComprehensions