import React from 'react'
import { Link } from 'react-router-dom'


const PythonLiteralsPage = () => {
  return (
  

 <div className='paddownforcol'>
      <>
   
   <div>
  <h1>PYTHON LITERALS



  </h1> 
</div>

<div>
  <p className='text-justify wid'>In Python, literals are the notations used to represent constant values in code. They are the basic building blocks for values and can represent data in different formats, such as numbers, text, or collections. Literals are directly written in the code and represent fixed values that are assigned to variables.

</p>  
</div>
<div className='wid text-justify pt-4'>
  <h4>Types of Python Literals:


</h4>  
</div>
<div className='wid text-justify'>
  <ul className='row p-4 text-dark'>
   <li>Numeric Literals
   </li>
   <li>String Literals
   </li>
   <li>Boolean Literals
   </li>
   <li>Special Literals
   </li>
   <li>Collection Literals
   </li>
  </ul>
</div>
<div className='wid'>
  <p>True (represents truth)


</p>  
</div>


<div className='text-justify wid pt-4'>
  <h4>1. Numeric Literals


</h4>  
</div>
<div className='text-justify wid pt-4'>
  <p>Numeric literals represent numbers and are the most straightforward form of literals in Python. These literals can be integers, floating-point numbers, or complex numbers.


</p>  
</div>
<div className='text-justify wid pt-4'>
  <p><b>Integer Literals:</b>


</p>  
</div>
<div className='text-justify wid'>
  <p>These are whole numbers, positive or negative, without a decimal point.
</p>  
</div>

<div className='text-justify wid '>
  <p>Examples:10,0xA(Hexadecimal),0b1010(Binary)
</p>  
</div>
<div className='text-justify wid pt-4 '>
  <p><b>Floating-Point Literals:</b>
</p>  
</div>
<div className='text-justify wid '>
  <p>These are numbers that include a decimal point.


</p>  
</div>
<div className='text-justify wid'>
  <p>Examples:3.14159,2e3( 2 * 10^3 = 2000.0 (Scientific notation))
</p>  
</div>
<div className='text-justify wid pt-4'>
  <p><b>Complex Number Literals:</b>
</p>  
</div>
<div className='text-justify wid'>
  <p>These represent numbers with a real and imaginary part.

</p>  
</div>
<div className='text-justify wid'>
  <p>Examples:1+2j,3-4j
</p>  
</div>
<div className='text-justify wid pt-4'>
  <h4>2. String Literals

</h4>  
</div>
<div className='text-justify wid bgyellow'>
  <p><b>Note:</b> A string can be enclosed in either single quotes (') or double quotes (").

</p>  
</div>
<div className='text-justify wid'>
  <p><b>Single-quoted Strings:</b> Enclosed in single quotes (').


</p>  
</div>
<div className='text-justify wid'>
  <p>Example: 'Hello DLK'


</p>  
</div>
<div className='text-justify wid'>
  <p><b>Double-quoted Strings:</b> Enclosed in double quotes (").



</p>  
</div>
<div className='text-justify wid'>
  <p>Example: "Python is awesome!"




</p>  
</div>
<div className='text-justify wid'>
  <p><b>Multiline String Literals:</b> Can be defined using triple quotes (''' or """) and can span multiple lines.





</p>  
</div>
<div className='text-justify wid'>
  <p> Example:multi_line = '''This is a
multiline string'''




</p>  
</div>
<div className='text-justify wid'>
  <p><b>String Literals with Escape Sequences:</b> Special characters can be included within a string using backslashes (\), such as newline (\n), tab (\t), or backslash itself (\\).





</p>  
</div>
<div className='text-justify wid'>
  <p> Example:escaped_str = "Hello\nWorld!"  # Output: Hello (newline) World!





</p>  
</div>
<div className='text-justify wid pt-4'>
  <h4>

  3. Boolean Literals



</h4>  
</div>
<div className='text-justify wid'>
  <p>

  Boolean literals represent truth values. There are only two Boolean values in Python: True and False. These are used in logical operations and conditional statements.




</p>  
</div>
<div className='text-justify wid'>
  <p>

  Boolean Literals: True or False




</p>  
</div>
<div className='text-justify wid'>
  <p>

 Example:is_active = True,is_done = False






</p>  
</div>
<div className='text-justify wid pt-4'>
  <h4>

  4. Special Literals





</h4>  
</div>
<div className='text-justify wid'>
  <p>

  In Python, the None literal represents the absence of a value or a null value. It is used to indicate that a variable has no value assigned or as a placeholder.






</p>  
</div>
<div className='text-justify wid'>
  <p>

  None Literal: None







</p>  
</div>
<div className='text-justify wid'>
  <p>

  Example:empty_value = None
</p>  
</div>
<div className='text-justify wid pt-4'>
  <h4>

  5. Collection Literals

</h4>  
</div>
<div className='text-justify wid'>
  <p>

  Python allows you to create collections like lists, tuples, sets, and dictionaries using literals.


</p>  
</div>
<div className='text-justify wid pt-4'>
  <p>

  <b>List Literals:</b>


</p>  
</div>
<div className='text-justify wid'>
  <p>
  Lists are ordered collections enclosed in square brackets ([]).

  

</p>  
</div>
<div className='text-justify wid'>
  <p>
 Example:fruits = ["apple", "banana", "cherry"]


  

</p>  
</div>
<div className='text-justify wid'>
  <p>
<b>Tuple Literals:</b>


  

</p>  
</div>
<div className='text-justify wid'>
  <p>
  Tuples are ordered, immutable collections enclosed in parentheses (()).



  

</p>  
</div>
<div className='text-justify wid'>
  <p>
 Example:coordinates = (10, 20, 30)




  

</p>  
</div>
<div className='text-justify wid'>
  <p>
<b>Set Literals:</b>




  

</p>  
</div>
<div className='text-justify wid'>
  <p>
  Sets are unordered collections of unique elements, created using curly braces ({})




  

</p>  
</div>
<div className='text-justify wid'>
  <p>
  Examples:numbers ={'{1, 2, 3, 4}'} 


  

</p>  
</div>
<div className='text-justify wid pt-4'>
  <p>
  <b>Dictionary Literals:</b>


  

</p>  
</div>
<div className='text-justify wid'>
  <p>
  Dictionaries are collections of key-value pairs enclosed in curly braces ({}). Each key-value pair is separated by a colon (:).



  

</p>  
</div>
<div className='text-justify wid'>
  <p>
  Example:person = {'{"name": "Alice", "age": 25}'}



  

</p>  
</div>
<div className='text-justify wid'>
  <p>
  Python literals are the basic representation of values in the code, and they help define the data that variables will hold. By understanding the different types of literals, you can efficiently represent various kinds of data in your programs, whether dealing with numbers, text, or collections.


  

</p>  
</div>


<div className="d-flex justify-content-end">
 < Link to={"/python/boolean"} className="button-link m-1">
     <button className="button bg-primary text-white "
      
     >Prev</button>
   </Link>
   <Link to={"/python/controlflow"}  className="button-link m-1">
     <button className="button bg-primary text-white ">Next</button>
  </Link>
 </div>
         

</>
 </div>
  )
}

export default PythonLiteralsPage
