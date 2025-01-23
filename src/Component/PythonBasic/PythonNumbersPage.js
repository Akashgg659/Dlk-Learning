import React from 'react'
import { Link } from 'react-router-dom'

const PythonNumbersPage = () => {
  return (
  
 <div className='paddownforcol'>
      <>
   
   <div>
  <h1>Python Numbers

  </h1> 
</div>

<div>
  <p className='text-justify wid'>Python supports multiple types of numbers for performing mathematical and logical operations. The primary numeric types in Python are:


</p>  
</div>
<div className='wid'>
  <p><b>Integer (int):</b> Whole numbers, positive or negative, without a decimal point.

</p>  
</div>
<div className='wid'>
  <p><b>Floating-Point (float):</b>  Numbers with a decimal point or written in exponential (scientific) notation.


</p>  
</div>
<div className='wid'>
  <p><b>Complex Numbers (complex):</b>  Numbers with a real and imaginary part.

</p>  
</div>


<div className='text-justify wid pt-4'>
  <h4>1. Integer (int)

</h4>  
</div>
<div className='text-justify wid'>
  <p>Integers are whole numbers and can be positive, negative, or zero.



</p>  
</div>
<div className="text-dark mt-4 mb-4">
 <div className="section grey">
   <p className='text-justify wid mgn'>Example</p>
 </div>
 <div className="section whitevariable4">
   <div className="lop gy">
     <p className='text-justify fnt wid mgn whitevariablep1'>x = 10      # Positive integer




</p>
<p className='text-justify fnt wid mgn whitevariablep1'>y = -5      # Negative integer




</p>
<p className='text-justify fnt wid mgn whitevariablep1'>z = 0       # Zero





</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(x, y, z)






</p>


   </div>
   </div>
   <div class="section grey">
     <button className="try">Try it Yourself</button>
   </div>
 </div>





<div className='text-justify wid'>
<p>Operations with Integers:


</p>

</div>


<div className="text-dark mt-4 mb-4">
 <div className="section grey">
   <p className='text-justify wid mgn'>Example</p>
 </div>
 <div className="section whitevariable5">
   <div className="lop gy">
     <p className='text-justify fnt wid mgn whitevariablep1'>a = 7





</p>
<p className='text-justify fnt wid mgn whitevariablep1'>b = 3





</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(a + b)  # Addition: 10






</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(a - b)  # Subtraction: 4






</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(a * b)  # Multiplication: 21

</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(a // b) # Integer division (quotient): 2


</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(a % b)  # Modulus (remainder): 1


</p><p className='text-justify fnt wid mgn whitevariablep1'>print(a ** b) # Exponentiation: 343 (7^3)


</p>


   </div>
   </div>
   <div class="section grey">
     <button className="try">Try it Yourself</button>
   </div>
 </div>


<div className='text-justify wid pt-4'>
 <h4>2. Floating-Point Numbers (float)
</h4>
</div>


<div className='text-justify wid'>
  <p>
 
  Floats are numbers that have a decimal point. They can also represent scientific notation.



</p>  
</div>
<div className="text-dark mt-4 mb-4">
 <div className="section grey">
   <p className='text-justify wid mgn'>Example</p>
 </div>
 <div className="section whitevariable6">
   <div className="lop gy">
     <p className='text-justify fnt wid mgn whitevariablep1'>pi = 3.14         # Regular float






</p>
<p className='text-justify fnt wid mgn whitevariablep1'>e = 2.718         # Another float





</p>
<p className='text-justify fnt wid mgn whitevariablep1'>scientific = 1.2e3 # Scientific notation (1.2 * 10^3 = 1200)






</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(pi, e, scientific)





</p>


   </div>
   </div>
   <div class="section grey">
     <button className="try">Try it Yourself</button>
   </div>
 </div>




<div className='text-justify wid'>
  <p>
  Operations with Floats:



</p>  
</div>

<div className="text-dark mt-4 mb-4">
 <div className="section grey">
   <p className='text-justify wid mgn'>Example</p>
 </div>
 <div className="section whitevariable7">
   <div className="lop gy">
     <p className='text-justify fnt wid mgn whitevariablep1'>a = 5.5






</p>
<p className='text-justify fnt wid mgn whitevariablep1'>b = 2.0
</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(a + b)  # 7.5

</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(a / b)  # 2.75 (true division)

</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(a ** b) # 30.25 (5.5^2.0)
</p>


   </div>
   </div>
   <div class="section grey">
     <button className="try">Try it Yourself</button>
   </div>
 </div>



 <div className='text-justify wid pt-4'>
  <h4>
  3. Complex Numbers (complex)



</h4>  
</div>
<div className='text-justify wid'>
  <p>
  Complex numbers have a real part and an imaginary part. They are written as a + bj, where j is the imaginary unit.



</p>  
</div>



<div className="text-dark mt-4 mb-4">
 <div className="section grey">
   <p className='text-justify wid mgn'>Example</p>
 </div>
 <div className="section whitevariable9">
   <div className="lop gy">
     <p className='text-justify fnt wid mgn whitevariablep1'>c1 = 3 + 4j   # Complex number






</p>
<p className='text-justify fnt wid mgn whitevariablep1'>c2 = 1 - 2j
</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(c1 + c2)  # Addition: (4+2j)

</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(c1 * c2)  # Multiplication: (11-2j)

</p>


   </div>
   </div>
   <div class="section grey">
     <button className="try">Try it Yourself</button>
   </div>
 </div>

 <div className='text-justify wid pt-4'>
  <h4>
  Type Conversion



</h4>  
</div>
<div className='text-justify wid'>
  <p>
  Python allows you to convert between numeric types using functions like int(), float(), and complex().




</p>  
</div>
<div className="text-dark mt-4 mb-4">
 <div className="section grey">
   <p className='text-justify wid mgn'>Example</p>
 </div>
 <div className="section whitevariable8">
   <div className="lop gy">
     <p className='text-justify fnt wid mgn whitevariablep1'>x = 10






</p>
<p className='text-justify fnt wid mgn whitevariablep1'>y = 3.5

</p>
<p className='text-justify fnt wid mgn whitevariablep1'>z = "15"


</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(float(x))  # Convert int to float: 10.0


</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(int(y))    # Convert float to int: 3



</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(int(z))    # Convert string to int: 15



</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(complex(x)) # Convert int to complex: (10+0j)




</p>


   </div>
   </div>
   <div class="section grey">
     <button className="try">Try it Yourself</button>
   </div>
 </div>
 <div className='text-justify wid pt-4'>
  <h4>
  Checking the Type of a Number




</h4>  
</div>
<div className='text-justify wid'>
  <p>
  Use the type() function to determine the type of a number.
</p>  
</div>
<div className="text-dark mt-4 mb-4">
 <div className="section grey">
   <p className='text-justify wid mgn'>Example</p>
 </div>
 <div className="section whitevariable10">
   <div className="lop gy">
     <p className='text-justify fnt wid mgn whitevariablep1'>a = 5







</p>
<p className='text-justify fnt wid mgn whitevariablep1'>b = 3.14


</p>
<p className='text-justify fnt wid mgn whitevariablep1'>c = 1 + 2j



</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(type(a))  



</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(type(b)) 



</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(type(c)) 



</p>



   </div>
   </div>
   <div class="section grey">
     <button className="try">Try it Yourself</button>
   </div>
 </div>
 <div className='text-justify wid pt-4'>
  <h4>
  Summary Table





</h4>  
</div>
<div>
 <table className="table">
 <thead>
   <tr>
     <th>Type</th>
     <th>Example</th>
     <th>Description</th>
   
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>int</td>
     <td>10,-5,1000</td>
     <td>whole numbers</td>
     
   </tr>
   <tr>
     <td>float</td>
     <td>3.14,8.97,-2.5</td>
     <td>Numbers with decimals</td>
    
   </tr>
   <tr>
     <td>complex</td>
     <td>1+2j,5-7j</td>
     <td>Numbers with real and imaginary parts</td>
     
   </tr>
  
 </tbody>
</table>
 </div>
 <div className='text-justify wid'>
  <p>
  By understanding Python's numeric types and their operations, you can handle a wide variety of mathematical problems efficiently!
</p>  
</div>


<div className="d-flex justify-content-end">
 < Link to={"/python/userinput"} className="button-link m-1">
     <button className="button bg-primary text-white "
      
     >Prev</button>
   </Link>
   <Link to={"/python/boolean"}  className="button-link m-1">
     <button className="button bg-primary text-white ">Next</button>
  </Link>
 </div>
          


</>

 </div>
  )
}

export default PythonNumbersPage
