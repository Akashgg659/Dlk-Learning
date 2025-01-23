import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const PythonBitwiseOperatorPage = () => {


  return (
    <div className='paddownforcol'
    id="content-container" style={{ minHeight: "100vh" }} 
    >        
  <div >
 <h1>Python Bitwise Operator</h1>  {/* This will display the "Python Tutorial" text as a heading */}
</div>

<div>
 <p className='text-justify wid'>
 Bitwise operators in Python are used to perform bit-level operations on integers. These operators work directly with the binary representation of numbers. Bitwise operators are essential when working with low-level data processing, cryptography, networking, and performing efficient manipulations of integer values.
</p>  
</div>



<div className='pt-3 '>
 <h3>Types of Bitwise Operators in Python

   </h3>  
</div>


<div className='text-justify wid p-2'>
<ul>
  <li> AND (&)</li>
  <li> OR (|)</li>
  <li> XOR (^)</li>
  <li>NOT (~)</li>
  <li>{`Left Shift (<<)`}</li>
  <li>{`Right Shift (>>)`}</li>

  
</ul>
</div>



      <h4><b>1. AND (&)</b></h4>
      <div className='text-start'>
     <h5>The bitwise AND operator (&) compares each bit of the first operand with the corresponding bit of the second operand.
         If both bits are 1, the resulting bit is 1. Otherwise, the resulting bit is 0.</h5>


      
    </div>


    <div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = <span className='text-danger'>10</span> 
            <span className='text-primary'> # In binary: 1010</span></p>
            <p className=' '> b = <span className='text-danger'>4</span>
            <span className='text-primary'>   # In binary: 0100</span>
            </p>
           
           
           <p> result = a <span className='text-danger'>&</span> b  <span className='text-primary'>  # Performs bitwise AND</span></p>
           <p> <span className='text-warning'>print</span>(result) <span className='text-primary'>    # Output: 0 (In binary: 0000)</span></p>
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



<h4><b>
2. OR (|)</b></h4>

 <div>
    <h5>The bitwise OR operator (|) compares each bit of the first operand with the corresponding bit of the second operand. If either of the bits is 1, the resulting bit is 1. If both bits are 0, the resulting bit is 0.</h5>
 </div>



 <div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = <span className='text-danger'>10</span> 
            <span className='text-primary'>  # In binary: 1010</span></p>
            <p className=' '> b = <span className='text-danger'>4</span>
            <span className='text-primary'>   # In binary: 0100</span>
            </p>
           
           
           <p> result =  a <span className='text-danger'>|</span> b  <span className='text-primary'>  # Performs bitwise OR</span></p>
           <p> <span className='text-warning'>print</span>(result) <span className='text-primary'>     # Output: 14 (In binary: 1110)</span></p>
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


<h4><b>
3. XOR (^)</b></h4>

<div>
    <h5>The bitwise XOR (exclusive OR) operator (^) compares each bit of the operands. The result is 1 if the bits are different, and 0 if they are the same.</h5>
</div>



<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = <span className='text-danger'>10</span> 
            <span className='text-primary'>  # In binary: 1010</span></p>
            <p className=' '> b = <span className='text-danger'>4</span>
            <span className='text-primary'>   # In binary: 0100</span>
            </p>
           
           
           <p> result =  a <span className='text-danger'>^</span> b  <span className='text-primary'>  # Performs bitwise XOR</span></p>
           <p> <span className='text-warning'>print</span>(result) <span className='text-primary'>     # Output: 14 (In binary: 1110)</span></p>
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


 
<h4><b>
  4. NOT (~)</b></h4>
  <div>
    <h5>
    The bitwise NOT operator (~) inverts the bits of its operand. This operator flips all the bits 
    of the number, converting 0s to 1s and 1s to 0s. The result is the two's complement of the number.

    </h5>
  </div>


  <div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = <span className='text-danger'>10</span> 
            <span className='text-primary'>  # In binary: 1010</span></p>
           
           
           
           <p> result = <span className='text-danger'>~</span> a  <span className='text-primary'> # Performs bitwise NOT</span></p>
           <p> <span className='text-warning'>print</span>(result) <span className='text-primary'> # Output: -11</span></p>
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


<h4><b>
{`5. Left Shift (<<)`}</b></h4>
<div>
<h5>
The left shift operator {`(<<)`} shifts the bits of the left operand to the left by the number of positions specified by the right operand. The vacant positions on the right are filled with 0s.
</h5>
</div>



<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = <span className='text-danger'>5</span> 
            <span className='text-primary'> # In binary: 0101</span></p>
           
           
           
           <p> result = a<span className='text-danger'>
            {  ` <<`}</span> 1  <span className='text-primary'>  # Shifts bits left by 1</span></p>
           <p> <span className='text-warning'>print</span>(result) 
           <span className='text-primary'> # Output: 10 (In binary: 1010)</span></p>
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


<h4><b>
{`
6. Right Shift (>>)`}</b></h4>
<div><h5>
The right shift operator {`(>>)`} shifts the bits of the left operand to the right by the number of positions specified by the right operand. The vacant positions on the left are filled with the sign bit (for signed numbers) or 0 (for unsigned numbers).

    </h5></div>

    <div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = <span className='text-danger'>10</span> 
            <span className='text-primary'> # In binary: 1010</span></p>
           
           
           
           <p> result = a<span className='text-danger'>
            {  ` >>`}</span> 1  <span className='text-primary'># Shifts bits left by 1</span></p>
           <p> <span className='text-warning'>print</span>(result) 
           <span className='text-primary'> # Output: 5 (In binary: 0101)</span></p>
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

<div className='pt-3 '>
 <h3>Summary of Bitwise Operators:

   </h3>  
</div>

    
    
<div className="container mt-4">
  <div className="p-2">
   
    <table className="table table-bordered table-hover table-striped text-center shadow">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Operator</th>
          <th scope="col">Description</th>
          <th scope="col">Example	</th>
          
        

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>&</td>
          <td>Bitwise AND: Returns 1 if both bits are 1, else 0.</td>
          <td>a & b</td>
        
        

        </tr>
        <tr>
        <td>`</td>
        <td>Bitwise OR: Returns 1 if at least one bit is 1</td>
          <td>`a</td>
       
       
          
        </tr>
        <tr>
        <td>^</td>
        <td>Bitwise XOR: Returns 1 if bits are different		</td>
          <td>a ^ b</td>
         
         
        </tr>
        <tr>
        <td>~</td>
        <td>Bitwise NOT: Inverts all the bits of the operand		</td>
          <td>~a	</td>
         
         
        </tr>
        <tr>
        <td>{`<<`}</td>
        <td>Left Shift: Shifts bits of a to the left by b positions			</td>
          <td>{`a<<b`}</td>
         
         
        </tr>


        <tr>
        <td>{`>>`}</td>
        <td>Right Shift: Shifts bits of a to the right by b positions		</td>
          <td>{`a >> b`}</td>
         
         
        </tr>

        
      </tbody>
    </table>
  </div>
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
            
 


   </div>
  )
}

export default PythonBitwiseOperatorPage