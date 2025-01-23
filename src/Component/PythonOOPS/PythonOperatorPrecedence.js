import React from 'react'
import { Link } from 'react-router-dom'

const PythonOperatorPrecedencePage = () => {
  return (
  
 <div className='paddownforcol'>
      <>
   
   <div>
  <h1>OPERATOR PRECEDENCE

</h1> 
</div>

<div>
  <p className='text-justify wid'>
  Operator precedence determines the order in which Python evaluates expressions. Operators with higher precedence are executed before operators with lower precedence, ensuring the correct interpretation of complex expressions.


</p>  
</div>
<div class="container py-4 p-2">

 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
             <p className=''>result = 10 + 5 * 2
             </p>
             <p className=' '>print(result)  # Output: 20 (Multiplication is performed before addition)
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




<div className='wid text-justify'>
  <p>

  Here, multiplication (*) has a higher precedence than addition (+), so the multiplication is performed first.



</p>  
</div>
<div className='wid text-justify pt-4'>
  <h4>
  Operator Precedence Table




</h4>  
</div>
<div className='wid text-justify'>
  <p>
  The following table lists Python operators from the highest to the lowest precedence:

</p>  
</div>
<div>
 <table className="table table-striped">
 <thead>
   <tr>
     <th>Operator</th>
     <th>Description</th>
     

     
   
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>()</td>
     <td>Parentheses: Used to group expressions
     </td>
     
     
   </tr>
   <tr>
     <td>**</td>
     <td>Exponentiation
     </td>
     
    
   </tr>
   <tr>
     <td>+x, -x, ~x</td>
     <td>Unary plus, minus, and bitwise NOT
     </td>
    
     
   </tr>
   <tr>
     <td>*, /, //, %</td>
     <td>Multiplication, division, floor division, modulus
     </td>
    
     
   </tr>
   <tr>
     <td>+, -</td>
     <td>Addition, subtraction
     </td>
    
     
   </tr>
   <tr>
     <td>{'<<, >>'}</td>
     <td>Bitwise shift operators
     </td>
     
   </tr>
   <tr>
     <td>&</td>
     <td>Bitwise AND

     </td>
     
   </tr>
   <tr>
     <td>^</td>
     <td>Bitwise XOR

     </td>
     
   </tr>
   <tr>
     <td>`</td>
     <td>`
     </td>
     
   </tr>
   <tr>
     <td>in, not in, is, is not, {'<, <=, >, >=, !=, =='}</td>
     <td>Comparison, membership, and identity operators

     </td>
     
   </tr>
   <tr>
     <td>not</td>
     <td>Logical NOT

     </td>
     
   </tr>
   <tr>
     <td>and</td>
     <td>Logical AND

     </td>
     
   </tr>
   <tr>
     <td>or</td>
     <td>Logical OR

     </td>
     
   </tr>
 </tbody>
</table>
</div>
<div className='wid text-justify'>
  <p>Rules of Operator Precedence


</p>  
  </div>
  <div className='wid text-justify pt-4'>
  <p className=''> <b>1.Parentheses Have the Highest Precedence</b>



</p>  
  </div>
  <div className='wid text-justify'>
  <p > Use parentheses to override the default precedence and specify the order of operations explicitly.




</p>  
  </div>
  <div class="container py-4 p-2">

 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
             <p className=''>result = (10 + 5) * 2  # Parentheses cause addition to be performed first

             </p>
             <p className=' '>print(result)  # Output: 30
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
  <p className=''>  <b> 2.Associativity</b>




</p>  
  </div>
  <div className='wid text-justify'>
  <p >Most operators in Python are left-associative, meaning they are evaluated from left to right.





</p>  
  </div>
  <div class="container py-4 p-2">

 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
             <p className=''>result = 10 - 5 - 2
             </p>
             <p className=' '>print(result)  # Output: 3 (evaluated as (10 - 5) - 2)
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
  <p className=''>       

<b>3.Some operators like exponentiation (**) are right-associative, meaning they are evaluated from right to left.
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
             <p className=''>result = 2 ** 3 ** 2
             </p>
             <p className=' '> print(result)  # Output: 512 (evaluated as 2 ** (3 ** 2))
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


<div className='text-justify wid'>
  <p><b>4. Operators within the same group (e.g., multiplication and division) have the same precedence and are evaluated left to right.
  </b>

 





</p>  
</div>
<div className='text-justify wid'>
  <h4>
  Examples of Operator Precedence






</h4>  
</div>
<div className='text-justify wid pt-4'>
  <p>
 <b>Example 1: Mixed Operators
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
             <p className=''> result = 5 + 3 * 2
             </p>
             <p className=' '>print(result)  # Output: 11 (multiplication is performed first)
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
<div className='text-justify wid pt-4'>
  <p>
 <b>Example 2: Parentheses
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
             <p className=''>result = (5 + 3) * 2
             </p>
             <p className=' '>print(result)  # Output: 16 (parentheses override precedence)
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
<div className='text-justify wid'>
  <p className=''>
<b>Example 3: Logical Operators</b>  




</p>  
</div>
<div class="container py-4 p-2">

 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
             <p className=''> result = True or False and False
             </p>
             <p className=' '> print(result)  # Output: True (AND is evaluated before OR)
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
<div className='text-justify wid pt-4'>
  <p className=''>
<b>Example 4: Exponentiation
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
             <p className=''> result = 2 ** 3 ** 2
             </p>
             <p className=' '> print(result)  # Output: 512 (evaluated as 2 ** (3 ** 2))
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
<div className='text-justify wid pt-4'>
  <h4 className=''>
  Why Operator Precedence is Important
 




</h4>  
</div>
<div className='text-justify wid'>
  <p className=''>
  Understanding operator precedence helps you:

 




</p>  
</div>
<div className='text-justify wid'>
  
<ul className='bglight'>
   <li>Write clean and unambiguous code.
   </li>
   <li>Avoid logical errors in complex expressions.
   </li>
   <li>Use parentheses effectively for clarity and control.
   </li>
   <li>Tips for Writing Expressions
   </li>
   <li>Even if you know the precedence rules, parentheses make the code easier to read and maintain.
   </li>
   </ul>  
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

export default PythonOperatorPrecedencePage
