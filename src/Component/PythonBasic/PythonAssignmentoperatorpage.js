import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const PythonAssignmentoperatorpage = () => {
  return (
    <div className='paddownforcol'
    id="content-container" style={{ minHeight: "100vh" }} 
    >        
  <div >
 <h1>Python Assignment Operator</h1>  {/* This will display the "Python Tutorial" text as a heading */}
</div>

<div>
 <p className='text-justify wid'>
 Assignment operators in Python are used to assign values to variables. These operators allow you to assign a value to a variable, and in some cases, modify the variable by combining it with an operation. The basic assignment operator is =, but there are several other assignment operators that perform operations and assign the result to the variable in one step.
</p>  
</div>



<div className='pt-3 '>
 <h3>Types of Assignment Operators in Python

   </h3>  
</div>


<div className='text-justify  wid p-2'>
<ul className='row p-3 text-dark'>
  <li> Simple Assignment (=)</li>
  <li>Add and Assign (+=)</li>
  <li> Subtract and Assign (-=)</li>
  <li>Multiply and Assign (*=)</li>
  <li>Divide and Assign (/=)</li>
  <li>Floor Division and Assign (//=)</li>
  <li>Modulus and Assign (%=)</li>
  <li>Exponentiate and Assign (**=)</li>
  <li>Bitwise AND and Assign (&=)</li>
  <li>Bitwise OR and Assign (|=)</li>
  <li>Bitwise XOR and Assign (^=)</li>
  <li>Bitwise Left Shift and Assign ({`<<=`})</li>
  <li>Bitwise Right Shift and Assign ({`>>=`})</li>

  
</ul>
</div>



      <h4><b>1. Simple Assignment (=)</b></h4>
      <div className='text-start'>
 <h5>The simple assignment operator (=) is used to assign the value of the right-hand side expression to the variable on the left-hand side.
 </h5>


      
    </div>


    <div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow bg-white">
  
  <div class=" bg-light text-dark p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = <span className='text-danger'>10</span> 
            <span className='text-primary'>  # Assigns 10 to the variable a</span></p>
            <p className=' '> b = <span className='text-danger'>20</span>
            <span className='text-primary'>   # Assigns 20 to the variable b</span>
            </p>
           
           
           
           <p> <span className='text-warning'>print</span>(a)
            <span className='text-primary'>    # Output: 10 (In binary: 0000)</span></p>
            <p> <span className='text-warning'>print</span>(b)
            <span className='text-primary'>    # Output: 20 (In binary: 0000)</span></p>

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
2. Add and Assign ( + =) (|) </b></h4>

 <div>
    <h5>
    The += operator adds the right-hand operand to the left-hand variable and assigns the result to the left-hand variable. This is shorthand for a = a + b.

    </h5>
 </div>



 <div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow bg-white">
  
  <div class=" bg-light text-dark p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = <span className='text-danger'>5</span> 
            <span className='text-primary'>  </span></p>
            <p className=' '> a += <span className='text-danger'>3</span>
            <span className='text-primary'>    # Equivalent to a = a + 3</span>
            </p>
           
           
          
           <p> <span className='text-warning'>print</span>(a) <span className='text-primary'>     # Output: 8</span></p>
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
3. Subtract and Assign ( - = ) (^)</b></h4>

<div>
    <h5>
    The  - = operator subtracts the right-hand operand from the left-hand variable and assigns the result to the left-hand variable. This is shorthand for a = a - b.
    </h5>
</div>



<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow bg-white">
  
  <div class=" bg-light text-dark p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = <span className='text-danger'>10</span> 
            <span className='text-primary'>  </span></p>
            <p className=' '> a -= <span className='text-danger'>4</span>
            <span className='text-primary'>    # Equivalent to a = a - 4</span>
            </p>
           
           
          
           <p> <span className='text-warning'>print</span>(a) <span className='text-primary'>   # Output: 6</span></p>
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
4. Multiply and Assign ( * = ) (~)</b></h4>
  <div>
    <h5>
    The * = operator multiplies the left-hand variable by the right-hand operand and assigns the result to the left-hand variable. This is shorthand for a = a * b.
    </h5>
  </div>


  <div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow bg-white">
  
  <div class=" bg-light text-dark p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = <span className='text-danger'>4</span> 
            <span className='text-primary'>  </span></p>
            <p className=' '> a *= <span className='text-danger'>4</span>
            <span className='text-primary'>    # Equivalent to a = a * 2</span>
            </p>
           
           
          
           <p> <span className='text-warning'>print</span>(a) <span className='text-primary'> # Output: 8</span></p>
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
5. Divide and Assign ( / = )</b></h4>
<div>
<h5>
The / = operator divides the left-hand variable by the right-hand operand and assigns the result to the left-hand variable. The result is always a floating-point number. This is shorthand for a = a / b.
</h5>
</div>


<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow bg-white">
  
  <div class=" bg-light text-dark p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = <span className='text-danger'>10</span> 
            <span className='text-primary'>  </span></p>
            <p className=' '> a /= <span className='text-danger'>2 </span>
            <span className='text-primary'>    # Equivalent to a = a / 2</span>
            </p>
           
           
          
           <p> <span className='text-warning'>print</span>(a) <span className='text-primary'> # Output: 5.0</span></p>
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
6. Floor Division and Assign ( // = )</b></h4>
<div><h5>
The // = operator performs floor division on the left-hand variable with the right-hand operand and assigns the result to the left-hand variable. This is shorthand for a = a // b.

    </h5></div>
    <div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow bg-white">
  
  <div class=" bg-light text-dark p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = <span className='text-danger'>11</span> 
            <span className='text-primary'>  </span></p>
            <p className=' '> a //= <span className='text-danger'>3 </span>
            <span className='text-primary'>   # Equivalent to a = a // 3</span>
            </p>
           
           
          
           <p> <span className='text-warning'>print</span>(a) <span className='text-primary'> # Output: 3</span></p>
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
7. Modulus and Assign ( % = )</b></h4>
<div>
    <h5>
    The % = operator calculates the modulus (remainder) when the left-hand variable is divided by the right-hand operand and assigns the result to the left-hand variable. This is shorthand for a = a % b.

    </h5>
</div>
   
<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow bg-white">
  
  <div class=" bg-light text-dark p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = <span className='text-danger'>10</span> 
            <span className='text-primary'>  </span></p>
            <p className=' '> a %= <span className='text-danger'>3 </span>
            <span className='text-primary'>   # Equivalent to a = a % 3</span>
            </p>
           <p> <span className='text-warning'>print</span>(a) <span className='text-primary'> # Output: 1</span></p>
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
8. Exponentiate and Assign ( ** = )
    </b></h4>
<div>
    <h5>
    The ** =  operator raises the left-hand variable to the power of the right-hand operand and assigns the result to the left-hand variable. This is shorthand for a = a ** b.

    </h5>
</div>

<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow bg-white">
  
  <div class=" bg-light text-dark p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = <span className='text-danger'>2</span> 
            <span className='text-primary'>  </span></p>
            <p className=' '> a **= <span className='text-danger'>3 </span>
            <span className='text-primary'>   # Equivalent to a = a ** 3</span>
            </p>
           <p> <span className='text-warning'>print</span>(a) <span className='text-primary'> # Output: 8</span></p>
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

<h4>
    <b>
    9. Bitwise AND and Assign ( & = )
    </b>
</h4>
<div>
    <h5>
    The &= operator performs a bitwise AND operation between the left-hand variable and the right-hand operand, then assigns the result to the left-hand variable. This is shorthand for a = a & b.
    </h5>
</div>

<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow bg-white">
  
  <div class=" bg-light text-dark p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = <span className='text-danger'>10</span> 
            <span className='text-primary'>  In binary: 1010 </span></p>
            <p className=' '> b = <span className='text-danger'>4 </span>
            <span className='text-primary'>   # In binary: 0100</span>
            </p>
            <p className=''> a &= b (a) <span className='text-primary'> # Performs bitwise AND: 1010 & 0100 = 0000</span></p>
           <p> <span className='text-warning'>print</span>(a) <span className='text-primary'>  # Output: 0</span></p>
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


<h4><b>10. Bitwise OR and Assign ( | = )</b></h4>
<div>
    <h5>
    The | = operator performs a bitwise OR operation between the left-hand variable and the right-hand operand, then assigns the result to the left-hand variable. This is shorthand for a = a | b.
    </h5>
</div>
<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow bg-white">
  
  <div class=" bg-light text-dark p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = <span className='text-danger'>10</span> 
            <span className='text-primary'>  In binary: 1010 </span></p>
            <p className=' '> b = <span className='text-danger'>4 </span>
            <span className='text-primary'>   # In binary: 0100</span>
            </p>
            <p className=''> a |= b(a) <span className='text-primary'> # Performs bitwise OR: 1010 | 0100 = 1110</span></p>
           <p> <span className='text-warning'>print</span>(a) <span className='text-primary'>   # Output: 14</span></p>
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

<h4>
    <b>11. Bitwise XOR and Assign ( ^ = )</b>
</h4>
<div>
    <h5>
    The ^ = operator performs a bitwise XOR operation between the left-hand variable and the right-hand operand, then assigns the result to the left-hand variable. This is shorthand for a = a ^ b.

    </h5>
</div>


<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow bg-white">
  
  <div class=" bg-light text-dark p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = <span className='text-danger'>10</span> 
            <span className='text-primary'>  In binary: 1010 </span></p>
            <p className=' '> b = <span className='text-danger'>4 </span>
            <span className='text-primary'>   # In binary: 0100</span>
            </p>
            <p className=''> a ^= b  <span className='text-primary'> # Performs bitwise XOR: 1010 ^ 0100 = 1110</span></p>
           <p> <span className='text-warning'>print</span>(a) <span className='text-primary'>   # Output: 14</span></p>
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



<h4>
    <b>
    12. Bitwise Left Shift and Assign ({`<<=`})
    </b>
</h4>
<div>
    <h5>
    The {`<< =`} operator shifts the bits of the left-hand variable to the left by 
    the number of positions specified by the right-hand operand, then assigns the result to the left-
    hand variable. This is shorthand for a = a {`<<`} b.

    </h5>
</div>


<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow bg-white">
  
  <div class=" bg-light text-dark p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = <span className='text-danger'>5</span> 
            <span className='text-primary'>  # In binary: 0101</span></p>
            <p className=' '> b = <span className='text-danger'>1 </span>
            <span className='text-primary'>  </span>
            </p>
            <p className=''> {`a <<= b`}  <span className='text-primary'> 
                {`# Shifts bits to the left by 1: 0101 << 1 = 1010 (10 in decimal)`}</span></p>
           <p> <span className='text-warning'>print</span>(a) <span className='text-primary'>   # Output: 10</span></p>
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



<h4>
    <b>
    {`13. Bitwise Right Shift and Assign ( >> = )`}
    </b>
</h4>
<div>
    <h5>
    {`The >> = operator shifts the bits of the left-hand variable to the right by the number of positions 
    specified by the right-hand operand, then assigns the result to the left-hand variable. This is shorthand 
    for a = a >> b.`}

    </h5>
</div>


<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow bg-white">
  
  <div class=" bg-light text-dark p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
            <p className=''> a = <span className='text-danger'>20</span> 
            <span className='text-primary'>  # In binary: 0101</span></p>
            <p className=' '> b = <span className='text-danger'>2 </span>
            <span className='text-primary'>  </span>
            </p>
            <p className=''> {`a >>= b  `}  <span className='text-primary'> 
                {`# Shifts bits to the right by 2: 10100 >> 2 = 00101 (5 in decimal)`}</span></p>
           <p> <span className='text-warning'>print</span>(a) <span className='text-primary'>   # Output: 5</span></p>
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
 <h3>Summary of Assignment Operators:

   </h3>  
</div>

    
    
<div className="container mt-4">
  <div className="p-2">
   
    <table className="table table-bordered table-hover table-striped text-center shadow">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Operator</th>
          <th scope="col">Description</th>
          <th scope="col">Example</th>
          
        

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>=</td>
          <td>Assigns the right-hand value to the left-hand variable.</td>
          <td>a = 1  </td>
        
        

        </tr>
        <tr>
        <td>+=</td>
        <td>Adds and assigns</td>
          <td>a += 5  </td>
       
       
          
        </tr>
        <tr>
        <td>-=</td>
        <td>Subtracts and assign</td>
          <td>a -= 3</td>
         
         
        </tr>
        <tr>
        <td>*=</td>
        <td>Multiplies and assign</td>
          <td>a *= 2</td>    
        </tr>

        <tr>
        <td>/=</td>
        <td>Divides and assigns</td>
          <td>a /= 2</td>
        </tr>


        <tr>
        <td>//=</td>
        <td>Floor divides and assigns</td>
          <td>a //= 3</td>
        </tr>

        <tr>
        <td>%=</td>
        <td>Modulus and assigns</td>
          <td>a %= 4</td>
        </tr>

        <tr>
        <td>**=</td>
        <td>Exponentiates and assigns</td>
          <td>a **= 2	</td>
        </tr>

        <tr>
        <td>&=	</td>
        <td>Bitwise AND and assigns</td>
          <td>a &= 3	</td>
        </tr>

        <tr>
        <td>`	</td>
        <td>Bitwise OR and assigns</td>
          <td>`a	</td>
        </tr>

        <tr>
        <td>^=</td>
        <td>Bitwise XOR and assigns</td>
          <td>a ^= 1</td>
        </tr>

        <tr>
        <td>{`<<=`}</td>
        <td>Bitwise left shift and assigns		</td>
          <td>{`a <<= 1`}</td>
         
         
        </tr>


        <tr>
        <td>{`>>=`}</td>
        <td>Bitwise right shift and assigns		</td>
          <td>{`a >>= 1`}</td>
         
         
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

export default PythonAssignmentoperatorpage