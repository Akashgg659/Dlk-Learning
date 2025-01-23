import React from 'react'
import { Link } from 'react-router-dom'


const PythonBooleanPage = () => {
  return (

   <div>
       <>
   
   <div>
  <h1>Python Boolean

  </h1> 
</div>

<div>
  <p className='text-justify wid'>In Python, Boolean is a data type that represents one of two values: True or False. It is commonly used in conditions and comparisons to control the flow of a program.
</p>  
</div>
<div className='wid text-justify pt-4'>
  <h4>1. Boolean Values


</h4>  
</div>
<div className='wid text-justify'>
  <p>A Boolean in Python can only have two possible values:


</p>  
</div>
<div className='wid'>
  <p>True (represents truth)


</p>  
</div>


<div className='text-justify wid'>
  <p>False (represents falsehood)


</p>  
</div>

<div className="text-dark mt-4 mb-4">
 <div className="section grey">
   <p className='text-justify wid mgn'>Example</p>
 </div>
 <div className="section whitevariable4">
   <div className="lop gy">
     <p className='text-justify fnt wid mgn whitevariablep1'>is_python_fun = True




</p>
<p className='text-justify fnt wid mgn whitevariablep1'>is_raining = False





</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(is_python_fun)  # Output: True






</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(is_raining)     # Output: False






</p>


   </div>
   </div>
   <div class="section grey">
     <button className="try">Try it Yourself</button>
   </div>
 </div>





<div className='text-justify wid pt-4'>
<h4>2. Boolean as a Result of Comparisons

</h4>

</div>
<div className='text-justify wid'>
<p>Boolean values are often the result of comparison or logical operations.


</p>

</div>


<div className="text-dark mt-4 mb-4">
 <div className="section grey">
   <p className='text-justify wid mgn'>Example</p>
 </div>
 <div className="section whitevariable11">
   <div className="lop gy">
     <p className='text-justify fnt wid mgn whitevariablep1'>a = 10






</p>
<p className='text-justify fnt wid mgn whitevariablep1'>b = 5






</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(a {'>'} b)   # True, because 10 is greater than 5







</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(a == b)  # False, because 10 is not equal to 5







</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(a {'<'} b)   # False, because 10 is not less than 5


</p>



   </div>
   </div>
   <div class="section grey">
     <button className="try">Try it Yourself</button>
   </div>
 </div>
 <div>
 <table className="table">
 <thead>
   <tr>
     <th>Operator</th>
     <th>Description</th>
     <th>Example</th>
   
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>==</td>
     <td>Equal to</td>
     <td>a==b -{'>'} False</td>
     
   </tr>
   <tr>
     <td>!=</td>
     <td>Not equal to </td>
     <td>a!=b -{'>'}True</td>
    
   </tr>
   <tr>
     <td>{'>'}</td>
     <td>Greater than</td>
     <td>a{'>'}b-{'>'}False</td>
     
   </tr>
   <tr>
     <td>{'<'}</td>
     <td>Lesser than</td>
     <td>a{'<'}b-{'>'}True</td>
     
   </tr>
   <tr>
     <td>{'>='}</td>
     <td>Greater than or equal to</td>
     <td>a{'>='}b-{'>'}False</td>
     
   </tr>
   <tr>
     <td>{'<='}</td>
     <td>Lesser than or equal to</td>
     <td>a{'<='}b-{'>'}True</td>
     
   </tr>
  
 </tbody>
</table>
 </div>

<div className='text-justify wid pt-4'>
 <h4>4. Boolean in Conditional Statements

</h4>
</div>


<div className='text-justify wid'>
  <p>
 
  Booleans are commonly used in conditional statements like if, elif, and else.




</p>  
</div>
<div className="text-dark mt-4 mb-4">
 <div className="section grey">
   <p className='text-justify wid mgn'>Example</p>
 </div>
 <div className="section whitevariable12">
   <div className="lop gy">
     <p className='text-justify fnt wid mgn whitevariablep1'>age = 20







</p>
<p className='text-justify fnt wid mgn whitevariablep1'>if age {'>'}= 18:






</p>
<p className='text-justify fnt wid mgn whitevariablep1 sp'>print("You are an adult.")







</p>
<p className='text-justify fnt wid mgn whitevariablep1'>else:






</p>
<p className='text-justify fnt wid mgn whitevariablep1 sp'> print("You are a minor.")







</p>


   </div>
   </div>
   <div class="section grey">
     <button className="try">Try it Yourself</button>
   </div>
 </div>




<div className='text-justify wid pt-4'>
  <h4>
  5. Truthy and Falsy Values




</h4>  
</div>
<div className='text-justify wid'>
  <p>
  Python considers some non-Boolean values as True or False in Boolean context:




</p>  
</div>
<div className='text-justify wid'>
  <p>
  Truthy Values: Any value that is not one of the falsy values below is considered True.




</p>  
</div>
<div className='text-justify wid'>
  <p>
  Falsy Values:





</p>  
</div>
<div className='text-justify wid'>
<ul className='row p-4'>
   <li>False
   </li>
   <li>None</li>
 
   <li>0 (integer or float)
   </li>
   <li>'' (empty string)
   </li>
   <li>[] (empty list)
   </li>
   <li>set() (empty set)
   </li>
   <li>{} (empty dictionary)
   </li>
   
   
   
   </ul> 
</div>

<div className="text-dark mt-4 mb-4">
 <div className="section grey">
   <p className='text-justify wid mgn'>Example</p>
 </div>
 <div className="section whitevariable13">
   <div className="lop gy">
     <p className='text-justify fnt wid mgn whitevariablep1'>print(bool(0))          # False







</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(bool(1))          # True

</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(bool(""))         # False


</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(bool("Python"))   # True


</p>

   </div>
   </div>
   <div class="section grey">
     <button className="try">Try it Yourself</button>
   </div>
 </div>



 <div className='text-justify wid pt-4'>
  <h4>
  6. Boolean Conversion



</h4>  
</div>
<div className='text-justify wid'>
  <p>
  You can explicitly convert a value to Boolean using the bool() function.




</p>  
</div>



<div className="text-dark mt-4 mb-4">
 <div className="section grey">
   <p className='text-justify wid mgn'>Example</p>
 </div>
 <div className="section whitevariable9">
   <div className="lop gy">
     <p className='text-justify fnt wid mgn whitevariablep1'>print(bool(10))       # True







</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(bool(0))        # False</p>

<p className='text-justify fnt wid mgn whitevariablep1'>print(bool("Hello"))  # True

</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(bool(""))       # False

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
     <th>Concept</th>
     <th>Example</th>
     <th>Result</th>
   
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>Boolean values</td>
     <td>True,False</td>
     <td>Boolean type</td>
     
   </tr>
   <tr>
     <td>Comparison</td>
     <td>5{'>'}3</td>
     <td>True</td>
    
   </tr>
   <tr>
     <td>Logical operators</td>
     <td>True and False</td>
     <td>False</td>
     
   </tr>
   <tr>
     <td>Truthy example</td>
     <td>bool("Python")</td>
     <td>True</td>
     
   </tr>
   <tr>
     <td>Falsy example</td>
     <td>bool(0)</td>
     <td>False</td>
     
   </tr>
  
 </tbody>
</table>
 </div>
 <div className='text-justify wid'>
  <p>
  Booleans are fundamental in Python programming, particularly for decision-making, comparisons, and controlling program logic.

</p>  
</div>


<div className="d-flex justify-content-end">
 < Link to={"/python/numberspage"} className="button-link m-1">
     <button className="button bg-primary text-white "
      
     >Prev</button>
   </Link>
   <Link to={"/python/literal"}  className="button-link m-1">
     <button className="button bg-primary text-white ">Next</button>
  </Link>
 </div>
         

</>

   </div>

   
  )
}

export default PythonBooleanPage
