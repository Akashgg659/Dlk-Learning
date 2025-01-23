import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const PythonDatatypesPage = () => {


  return (
      <div className='paddownforcol'>
      
   
    <div >
   <h1>PYTHON DATA TYPES

   </h1> 
 </div>
 
 <div>
   <p className='text-justify wid'>In Python, data types represent the type of value a variable can hold. They define the operations that can be performed on the data and how much space the data occupies in memory. Python has several built-in data types, including numeric types, sequences, mappings, sets, and more.
</p>  
 </div>
 <div className='wid pt-4'>
   <h4>1. Numeric Data Types

</h4>  
 </div>

 <div className='text-justify wid'>
   <p>Numeric types represent numbers and support mathematical operations.

</p>  
 </div>
 <div className='text-justify wid'>
   <p><b>a. Integer (int)</b>
</p>  
 </div>
 <div className='text-justify wid'>
   <p>Represents whole numbers, both positive and negative, without any decimal point.

</p>  
 </div>
 <div className='text-justify wid'>
   <p>Example: 5, -42, 1000

</p>  
 </div>

 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariable1">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>a = 10      # Integer


</p>
<p className='text-justify fnt wid mgn whitevariablep1'>b = -5      # Integer



</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(type(a))  



</p>

    </div>
    </div>
    <div class="section grey">
      <button className="try">Try it Yourself</button>
    </div>
  </div>
 

 
 
 
 <div className='text-justify wid'>
<p><b>b. Float (float)
</b>
</p>

 </div>
 
 <div className='text-justify wid'>
   <p>Represents real numbers with a decimal point.

</p>  
 </div>
 <div className='text-justify wid'>
   <p>Example: 3.14, -0.5, 2.0
</p>  
 </div>
 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariable2">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>pi = 3.14159    # Float



</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(type(pi))  



</p>


    </div>
    </div>
    <div class="section grey">
      <button className="try">Try it Yourself</button>
    </div>
  </div>
 

 <div className='text-justify wid'>
  <p><b>c. Complex (complex)
  </b>
  </p> 
 </div>


 <div className='text-justify wid'>
   <p>
   Represents complex numbers, written in the form a + bj, where a is the real part and b is the imaginary part.


</p>  
 </div>
 <div className='text-justify wid'>
   <p>
   Example: 1 + 2j



</p>  
 </div>
 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariable2">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>z = 1 + 2j    # Complex number




</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(type(z)) 




</p>


    </div>
    </div>
    <div class="section grey">
      <button className="try">Try it Yourself</button>
    </div>
  </div>
 

 
 
 <div className='text-justify wid pt-4'>
   <h4>
   2. Sequence Data Types

</h4>  
 </div>
 <div className='text-justify wid '>
   <p>
   Sequence types are ordered collections of elements. The most commonly used sequence types are list, tuple, and range.


</p>  
 </div>
 <div className='text-justify wid '>
   <p><b>   a. List (list)</b>


</p>  
 </div>
 <div className='text-justify wid '>
   <p>
   An ordered, mutable (changeable) collection of elements.


</p>  
 </div>
 <div className='text-justify wid '>
   <p>
 Can store different data types in a single list.



</p>  
 </div>
 <div className='text-justify wid '>
   <p>
   Example: [1, 2, 3, "apple", 5.5]



</p>  
 </div>
 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariable2">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>fruits = ["apple", "banana", "cherry"]





</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(type(fruits))  




</p>


    </div>
    </div>
    <div class="section grey">
      <button className="try">Try it Yourself</button>
    </div>
  </div>
 
 
 <div className='text-justify wid '>
   <p><b>b. Tuple (tuple)
   </b>
</p>  
 </div>
 <div className='text-justify wid'>
  <p>An ordered, immutable (unchangeable) collection of elements.

  </p>  
</div>
<div className='text-justify wid'>
   <p>Like lists but cannot be modified after creation.


</p>  
 </div>
 <div className='text-justify wid'>
   <p>Example: (1, 2, 3, "apple", 5.5)



</p>  
 </div>
 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariable2">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>coordinates = (10, 20, 30)






</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(type(coordinates))  





</p>


    </div>
    </div>
    <div class="section grey">
      <button className="try">Try it Yourself</button>
    </div>
  </div>
 
 
 
 <div className='text-justify wid'>
  <p><b>c. Range (range)
  </b>
  </p>  
</div>
<div className='text-justify wid'>
  <p>Represents a sequence of numbers, often used for looping a specific number of times in for loops.

  </p>  
</div>
<div className='text-justify wid'>
  <p>Example: range(5) produces numbers 0, 1, 2, 3, 4.


  </p>  
</div>
<div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariable2">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>numbers = range(5)







</p>
<p className='text-justify fnt wid mgn whitevariablep1'> print(type(numbers)) 






</p>


    </div>
    </div>
    <div class="section grey">
      <button className="try">Try it Yourself</button>
    </div>
  </div>
 

<div className='text-justify wid pt-4'>
   <h4>3. Text Data Type

</h4>  
 </div>
 
 
 <div className='text-justify wid'>
  <p>Text types handle characters or strings of characters.

  </p>  
</div>

<div className='text-justify wid'>
   <p><b>a. String (str)
   </b>

</p>  
 </div>
 <div className='text-justify wid'>
   <p>Represents a sequence of characters.


</p>  
 </div>
 <div className='text-justify wid'>
   <p>Strings are immutable, meaning they cannot be modified once created.



</p>  
 </div>
 <div className='text-justify wid'>
   <p>Example: "Hello, DLK!"




</p>  
 </div>
 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariable2">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>message = "Hello, Python!"








</p>
<p className='text-justify fnt wid mgn whitevariablep1'> print(type(message))  







</p>


    </div>
    </div>
    <div class="section grey">
      <button className="try">Try it Yourself</button>
    </div>
  </div>
 
  <div className='text-justify wid pt-4'>
   <h4>4. Set Data Types


</h4>  
 </div>
 <div className='text-justify wid'>
  <p>Sets are collections of unique elements. They are unordered, meaning the elements have no index, and they do not allow duplicates.

  </p>  
</div>
<div className='text-justify wid'>
  <p><b>a. Set (set)
  </b>

  </p>  
</div>
<div className='text-justify wid'>
  <p>A collection of unique, unordered elements.


  </p>  
</div>
<div className='text-justify wid'>
  <p>{`numbers = {1, 2, 3, 4}`}



  </p>  
</div>
<div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariable2">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>{`numbers = {1, 2, 3, 4}`}
</p>
<p className='text-justify fnt wid mgn whitevariablep1'> print(type(numbers)) 


</p>


    </div>
    </div>
    <div class="section grey">
      <button className="try">Try it Yourself</button>
    </div>
  </div>
 

    

  
  <div className='text-justify wid'>
  <p><b>b. Frozen Set (frozenset)
  </b>

  </p>  
</div>
<div className='text-justify wid'>
  <p>
  Like a set, but immutable. You cannot add or remove elements once the frozenset is created.

  </p>  
</div>
<div className='text-justify wid'>
  <p>
  Example: frozenset([1, 2, 3])

  </p>  
</div>
<div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariable2">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>immutable_numbers = frozenset([1, 2, 3])

</p>
<p className='text-justify fnt wid mgn whitevariablep1'> print(type(immutable_numbers)) 



</p>


    </div>
    </div>
    <div class="section grey">
      <button className="try">Try it Yourself</button>
    </div>
  </div>
 

  <div className='text-justify wid pt-4'>
  <h4>5. Mapping Data Types


  </h4>  
</div>
<div className='text-justify wid'>
  <p>Mapping types are unordered collections that store key-value pairs. The most common mapping type is the dictionary.



  </p>  
</div>
<div className='text-justify wid'>
  <p><b>a. Dictionary (dict)
  </b>



  </p>  
</div>
<div className='text-justify wid'>
  <p>A collection of key-value pairs. Keys are unique, and each key maps to a value.



  </p>  
</div>
<div className='text-justify wid'>
  <p>Example: {'{"name": "Alice", "age": 25}'}




  </p>  
</div>
<div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariable2">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>person = {'{"name": "Alice", "age": 25}'}


</p>
<p className='text-justify fnt wid mgn whitevariablep1'> print(type(person)) 




</p>


    </div>
    </div>
    <div class="section grey">
      <button className="try">Try it Yourself</button>
    </div>
  </div>
  <div className='text-justify wid pt-4'>
  <h4>6. Boolean Data Type




  </h4>  
</div>
<div className='text-justify wid pt-4'>
  <p>Booleans represent truth values: either True or False.





  </p>  
</div>
<div className='text-justify wid pt-4'>
  <p><b>a. Boolean (bool)
  </b>





  </p>  
</div>


<div className='text-justify wid pt-4'>
  <p>Represents a value of True or False.





  </p>  
</div>
<div className='text-justify wid pt-4'>
  <p>Example: True, False





  </p>  
</div>
<div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariable2">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>is_active = True



</p>
<p className='text-justify fnt wid mgn whitevariablep1'> print(type(is_active))  




</p>


    </div>
    </div>
    <div class="section grey">
      <button className="try">Try it Yourself</button>
    </div>
  </div>
  <div className='text-justify wid pt-4'>
  <h4>7. None Type





  </h4>  
</div>
<div className='text-justify wid pt-4'>
  <p>The None type is used to represent the absence of a value or a null value. It is often used to signify that a variable does not have a value assigned yet.






  </p>  
</div>

<div className='text-justify wid pt-4'>
  <p><b>a. None (NoneType)
  </b>




  </p>  
</div>
<div className='text-justify wid pt-4'>
  <p>Example: None





  </p>  
</div>
<div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariable2">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>empty = None



</p>
<p className='text-justify fnt wid mgn whitevariablep1'> print(type(empty))  




</p>


    </div>
    </div>
    <div class="section grey">
      <button className="try">Try it Yourself</button>
    </div>
  </div>
  <div>
    <h4>Summary of Python Data Types
    </h4>
  </div>
  <div>
  <table className="table">
  <thead>
    <tr>
      <th>Data Type</th>
      <th>Example</th>
      <th>Mutable</th>
      <th>Ordered</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>int</td>
      <td>10,-5,1000</td>
      <td>No</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>float</td>
      <td>3.14,8.97,-2.5</td>
      <td>No</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>complex</td>
      <td>1+2j</td>
      <td>No</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>str</td>
      <td>"Hello","python"</td>
      <td>No</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>list</td>
      <td>[1,2,3],["apple",5.5]</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>tuple</td>
      <td>(1,2,3),("a","b")</td>
      <td>No</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>range</td>
      <td>range(5),range(1,10)</td>
      <td>No</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Set</td>
      <td>{'{1,2,3}'},{'{10,20}'}</td>
      <td>Yes</td>
      <td>No</td>
    </tr>
    <tr>
      <td>frozenset</td>
      <td>{'frozenset([1,2,3})'}</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>dict</td>
      <td>{'{"Name":"Alice","age":5}'}</td>
      <td>Yes</td>
      <td>No</td>
    </tr>
    <tr>
      <td>bool</td>
      <td>true,false</td>
      <td>No</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Nonetype</td>
      <td>None</td>
      <td>No</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>
  </div>


  <div className="d-flex justify-content-end">
 <Link to={'/python/objectidentity'} className="button-link m-1">
     <button className="button bg-primary text-white ">Prev</button>
   </Link>
   <Link to={'/python/datatypes'}  className="button-link m-1">
     <button className="button bg-primary text-white ">Next</button>
     </Link>
 </div>
 </ div>
  )
}

export default PythonDatatypesPage
