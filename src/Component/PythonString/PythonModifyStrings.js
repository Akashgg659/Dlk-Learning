import React from 'react'
import { Link } from 'react-router-dom'


const PythonModifyStrings = () => {
  return (
      <div className='paddownforcol'>
   
    <div>
   <h1>Modify Strings
 </h1> 
 </div>
 
 <div>
   <p className='text-justify wid'>
Python provides various built-in methods to modify and manipulate strings. Since strings in Python are immutable (cannot be changed directly), these methods create and return new strings with the desired modifications.

</p>  
 </div>
 <div className='wid text-justify pt-4'>
<h2>1. Changing String Case
</h2>
 </div>
 
 <div className='wid text-justify pt-4'>
   <p>


   <b>Convert to Lowercase
   </b>



</p>  
 </div>

 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>text = "Hello, PYTHON!"





             </p>
             <p className=' '>print(text.lower())  # Output: hello, python!






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
<p><b>Convert to Uppercase
</b></p>
 </div>
 
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>text = "Hello, Python!"






             </p>
             <p className=' '>print(text.upper())  # Output: HELLO, PYTHON!







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
 <p><b>Convert to Title Case (First Letter Capitalized in Each Word)
 </b></p> 
 </div>

 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>text = "hello, python programming!"







             </p>
             <p className=' '>print(text.title())  # Output: Hello, Python Programming!








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
<p>Capitalize the First Character
</p> 
 </div>
 
<div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>text = "python programming"






             </p>
             <p className=' '>print(text.capitalize())  # Output: Python programming








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
 <p><b>Swap Case (Switch Between Upper and Lower Case)
 </b></p>
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>text = "Hello, Python!"






             </p>
             <p className=' '>print(text.swapcase())  # Output: hELLO, pYTHON!







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
   
<h2>
2. Removing Whitespaces


</h2>



 
 </div>
 <div className='wid text-justify pt-4'>
   
<p><b>Strip Leading and Trailing Whitespaces
</b></p>



 
 </div>

 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>text = "   Hello, Python!   "





             </p>
             <p className=' '>print(text.strip())  # Output: "Hello, Python!"







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
<p><b>Remove Leading Whitespaces
</b></p>



  
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>text = "   Hello, Python!   "







             </p>
             <p className=' '>print(text.lstrip())  # Output: "Hello, Python!   "







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
<p><b>Remove Trailing Whitespaces

</b></p>

  
 </div>


 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>text = "   Hello, Python!   "







             </p>
             <p className=' '>print(text.rstrip())  # Output: "   Hello, Python!"








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
 <h2>3. Replacing Substrings
 </h2>


  
 </div>
 <div className='wid text-justify pt-4'>
 <p><b>Replace specific substrings within a string with another substring.
 </b></p>


  
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>text = "I love Java."








             </p>
             <p className=' '>print(text.replace("Java", "Python"))  # Output: I love Python.









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
  <p><b>Replace Only a Specific Number of Occurrences

  </b></p>
  
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>text = "apple apple apple"










             </p>
             <p className=' '>print(text.replace("apple", "orange", 2))  # Output: orange orange apple









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
 <h2>4. Splitting and Joining Strings
 </h2>
 </div>
 <div className='wid text-justify pt-4'>
<p><b>Splitting a String into a List
</b></p>
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>text = "Python is fun"











             </p>
             <p className=' '>words = text.split()
 </p>
 <p className=' '>print(words)  # Output: ['Python', 'is', 'fun']

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
<p><b>Splitting by a Specific Delimiter
</b></p>
  
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>csv_data = "name,age,city"












             </p>
             <p className=' '>fields = csv_data.split(",")

 </p>
 <p className=' '>print(fields)  # Output: ['name', 'age', 'city']


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
<p><b>Joining a List into a String

</b></p>
  
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>words = ['Python', 'is', 'fun']












             </p>
             <p className=' '>sentence = " ".join(words)


 </p>
 <p className=' '>print(sentence)  # Output: Python is fun



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
<h2>5. Padding and Aligning Strings
</h2>
 </div>
 <div className='wid text-justify pt-4'>
<p><b>Add Padding with center()
</b></p>
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>text = "Python"













             </p>
             <p className=' '>print(text.center(10, '-'))  # Output: --Python--



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
<p><b>Left-align a String with ljust()

</b></p>
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>text = "Python"













             </p>
             <p className=' '>print(text.ljust(10, '-'))  # Output: Python----




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
<p><b>Right-align a String with rjust()

</b></p>
 </div>
 
 <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    

             <p className=''>text = "Python"













             </p>
             <p className=' '>print(text.rjust(10, '-'))  # Output: ----Python



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

export default PythonModifyStrings