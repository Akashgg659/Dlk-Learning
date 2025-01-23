import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const PythonArithmeticOperatorPage = () => {

  const navigate = useNavigate()


  const Tryityourself = () => {
    const examplecode = `
a = 10
b = 5
result = a + b
print(result)`;

navigate("/python/pythonArithmetic/compiler", {state:{code: examplecode.trim()}})

  }





  return (

    <div className='paddownforcol'>

      <div id='' className='p-2' >
        <h1>Python Arithmetic Operator</h1>
        <div>
          <p className='text-justify wid '>
            Arithmetic operators in Python are used to perform mathematical calculations such as addition, subtraction, multiplication, and division. These operators are fundamental in any programming language and are essential for performing mathematical operations on numbers.
          </p>

        </div>
      </div>



      <div>
        <h4 className=''><b>Types of Arithmetic Operators in Python</b></h4>
      </div>


    

      <div className="container mt-4">
  <div className="p-2">
   
    <table className="table table-bordered table-hover table-striped text-center shadow">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Operators</th>
          <th scope="col">Names</th>
          <th scope="col">Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>(+)</td>
          <td>Addition</td>
          <td>a + b</td>
        </tr>
        <tr>
          <td>(-)</td>
          <td>Subtraction</td>
          <td>a - b</td>
        </tr>
        <tr>
          <td>(*)</td>
          <td>Multiplication</td>
          <td>a * b</td>
        </tr>
        <tr>
          <td>(/)</td>
          <td>Division</td>
          <td>a / b</td>
        </tr>
        <tr>
          <td>(//)</td>
          <td>Floor Division</td>
          <td>a // b</td>
        </tr>
        <tr>
          <td>(%)</td>
          <td>Modulus</td>
          <td>a % b</td>
        </tr>
        <tr>
          <td>(**)</td>
          <td>Exponentiation</td>
          <td>a ** b</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


      <div className='p-2'>
        <h3><b>Addition (+)</b></h3>
        <h5>The addition operator (+) is used to add two numbers or concatenate strings.</h5>
      </div>



  <div class="container py-4 p-2 ">
 
  <div class=" mb-4 shadow-sm shadow  bg-white">
    
    <div class=" bg-light text-dark p-3">
      <h5 class="mb-0">Example</h5>
    </div>

  
    <div class=" text-white p-3 ">
      <pre class="mb-0">
              <p className=''> a = 10</p>
              <p className=' '> b = 5</p>
              <p className=''> result = a + b</p>
              <p className=''> print(result)</p>
      </pre>
    </div>

   
    <div class="text-start bg-light">
      <div className='p-2'>
      <button 
        class="btn btn-primary px-2 py-2" 
        onClick={ Tryityourself}
      >
        Try it Yourself
      </button>
      </div>
      
    </div>
  </div>


 
</div>


     
<div class="container py-4 p-2">
 
  <div class=" mb-4 shadow-sm shadow bg-white">
    
    <div class=" bg-light text-dark p-3">
      <h5 class="mb-0">Example</h5>
    </div>

  
    <div class=" text-white p-3 ">
      <pre class="mb-0">
              <p className=''> greeting = "Hello"</p>
              <p className=' '> name = "Alice"</p>
              <p className=''> message = greeting + " " + name</p>
              <p className=''> print(message)</p>
      </pre>
    </div>

   
    <div class="text-start bg-light">
      <div className='p-2'>
      <button 
        class="btn btn-primary px-2 py-2" 
        onclick="Tryityourself()"
      >
        Try it Yourself
      </button>
      </div>
      
    </div>
  </div>


 
</div>
   


      
      <div className='p-2'>
        <h3><b>Subtraction (-)</b></h3>
        <h5>
        The subtraction operator (-) is used to subtract one number from another.</h5>
      </div>


      <div class="container py-4 p-2">
 
  <div class=" mb-4 shadow-sm shadow bg-white">
    
    <div class=" bg-light text-dark p-3">
      <h5 class="mb-0">Example</h5>
    </div>

  
    <div class=" text-white p-3 ">
      <pre class="mb-0">
              <p className=''> a = 10</p>
              <p className=' '> b = 5</p>
              <p className=''> result = a - b</p>
              <p className=''> print(result)</p>
      </pre>
    </div>

   
    <div class="text-start bg-light">
      <div className='p-2'>
      <button 
        class="btn btn-primary px-2 py-2" 
        onclick="Tryityourself()"
      >
        Try it Yourself
      </button>
      </div>
      
    </div>
  </div>


 
</div>

      

      

      <div className='p-2'>
        <h3><b>Multiplication (*)</b></h3>
        <h5>
        The multiplication operator (*) is used to multiply two numbers.</h5>
      </div>


     

  <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow bg-white">
   
   <div class=" bg-light text-dark p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
     <p className=''>word = "Hello"</p>
              <p className=''>repeated = word * 3</p>
              
              <p className=''>print(repeated)  
              </p>
     </pre>
   </div>

  
   <div class="text-start bg-light">
     <div className='p-2'>
     <button 
       class="btn btn-primary px-2 py-2" 
       onclick="Tryityourself()"
     >
       Try it Yourself
     </button>
     </div>
     
   </div>
 </div>



</div>





      <div className='p-2'>
        <h3><b> Division (/)</b></h3>
        <h5>
        The division operator (/) is used to divide one number by another. The result is always a floating-point number (even if the numbers are integers).
      </h5>
      </div>

      <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow bg-white">
   
   <div class=" bg-light text-dark p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
     
              <p className=''> a = 10</p>
              <p className=''> b = 3</p>
              <p className=''> result = a / b</p>
              <p className=''> print(result)   
              </p>
     </pre>
   </div>

  
   <div class="text-start bg-light">
     <div className='p-2'>
     <button 
       class="btn btn-primary px-2 py-2" 
       onclick="Tryityourself()"
     >
       Try it Yourself
     </button>
     </div>
     
   </div>
 </div>



      </div>


      

      <div className='p-2'>
        <h3><b> Floor Division (//)</b></h3>
        <h5>
        The floor division operator (//) divides one number by another and returns the largest integer less than or equal to the result. Essentially, it truncates the decimal part of the division result.

      </h5>
      </div>

      <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow bg-white">
   
   <div class=" bg-light text-dark p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
     
     <p className=''> a = 10</p>
              <p className=' '> b = 3</p>
              <p className=''> result = a // b</p>
              <p className=''> print(result)   
              </p>
     </pre>
   </div>

  
   <div class="text-start bg-light">
     <div className='p-2'>
     <button 
       class="btn btn-primary px-2 py-2" 
       onclick="Tryityourself()"
     >
       Try it Yourself
     </button>
     </div>
     
   </div>
 </div>



      </div>


      

      
      <div className='p-2'>
        <h3><b> Modulus (%)</b></h3>
        <h5>
        The modulus operator (%) returns the remainder when one number is divided by another. It gives you the "leftover" part after division.

      </h5>
      </div>

      <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow bg-white">
   
   <div class=" bg-light text-dark p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
     
    
     <p className=' '> a = 10</p>
              <p className=' '> b = 3</p>
              <p className=''> result = a % b</p>
              <p className=''> print(result)   
              </p>
     </pre>
   </div>

  
   <div class="text-start bg-light">
     <div className='p-2'>
     <button 
       class="btn btn-primary px-2 py-2" 
       onclick="Tryityourself()"
     >
       Try it Yourself
     </button>
     </div>
     
   </div>
 </div>



      </div>
      

      

      <div className='p-2'>
        <h3><b>  Exponentiation (**)</b></h3>
        <h5>
        The exponentiation operator (**) is used to raise one number to the power of another. It calculates the result of the first number raised to the power of the second number.

      </h5>
      </div>

  <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow bg-white">
   
   <div class=" bg-light text-dark p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
     
     <p className=' '> a = 10</p>
              <p className=''> b = 3</p>
              <p className=' '> result = a ** b</p>
              <p className=''> print(result)   
              </p>
     </pre>
   </div>

  
   <div class="text-start bg-light">
     <div className='p-2'>
     <button 
       class="btn btn-primary px-2 py-2" 
       onclick="Tryityourself()"
     >
       Try it Yourself
     </button>
     </div>
     
   </div>
 </div>



      </div>
      

     

      <div className='p-2'>
        <h3><b> Square root</b></h3>
        <h5>
        The Python square root function, sqrt() , is part of the math module and is used to calculate the square root of a given number.
      </h5>
      </div>

      <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow bg-white">
   
   <div class=" bg-light text-dark p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
     
     <p className=' '> number = 16</p>
              <p className=' '> result = number ** 0.5</p>
              <p className=' '> print(result)</p>
     </pre>
   </div>

  
   <div class="text-start bg-light">
     <div className='p-2'>
     <button 
       class="btn btn-primary px-2 py-2" 
       onclick="Tryityourself()"
     >
       Try it Yourself
     </button>
     </div>
     
   </div>
 </div>



      </div>
      

      

      <div className='p-2'>
        <h3><b> Square root</b></h3>
        <h5>
        cbrt() Method. The Python math. cbrt() method is used to calculate the cube root of a given number.
      </h5>
      </div>


      <div class="container py-4 p-2">
 
 <div class=" mb-4 shadow-sm shadow bg-white">
   
   <div class=" bg-light text-dark p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
     
     
     <p className=' '> result = number ** (1/3)</p>
     <p className=' '> print(result) </p>
     </pre>
   </div>

  
   <div class="text-start bg-light">
     <div className='p-2'>
     <button 
       class="btn btn-primary px-2 py-2" 
       onclick="Tryityourself()"
     >
       Try it Yourself
     </button>
     </div>
     
   </div>
 </div>



      </div>
      


     <div>

     </div>
      
      <div className="d-flex justify-content-end">
        <Link to={"/python/intro"} className="button-link m-1">
          <button className="button bg-primary text-white " onClick={(e) => e.preventDefault()}>Prev</button>
        </Link>
        <Link to={"/python/hello "} className="button-link m-1">
          <button className="button bg-primary text-white ">Next</button>
        </Link>
      </div>

    </div>
  )
}

export default PythonArithmeticOperatorPage
