import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CodeContext } from '../CodeContext/CodeContext'



const PythonObjectIdentityPage = () => {
  const{setSelectedCode} = useContext(CodeContext)
  const navigate = useNavigate()

  const examples = [
 
    {
    id:1,
    title: "Equality vs. Identity",
    code: `# Example with small integers

a = 10

b=10

print("ID of a:", id(a))

print("ID of b:", id(b))

print("a is b:", a is b) # True, as Python optimizes memory for small integers( small integers between -5 and 256 have same id)`
  
  },
  {
  
    id:2,
    title: "(Immutable Objects)",
    code: `# Example with strings

str1 = "hello"

str2 = "hello"

print("ID of str1:", id(str1))

print("ID of str2:", id(str2))

print("str1 is str2:", str1 is str2) # True, as Python optimizes memory for identical strings`
  
  },
  {
    id:3,
    title: "(Mutable Objects)",
    code: `# Example with lists

list1 = [1, 2, 3]

list2 = [1, 2, 3]

print("ID of list1:", id(list1))

print("ID of list2:", id(list2))

print("list1 is list2:", list1 is list2) # False, as lists are stored in different memory locations

print("list1 == list2:", list1 == list2) # True, as their values are equal`
  
  },
  {
    id:4,
    title: " Using is vs ==",
    code: `# Difference between 'is' and '=='

x = [10, 20, 30]

y = [10, 20, 30]

print("x == y:", x == y) # True, as their values are equal

print("x is y:", x is y) # False, as they are stored in different memory locations`
  
  },
  
  
  
  
  
  ]
  
  const handleRun = (code) =>{
    setSelectedCode(code)
    navigate('/compiler')
  
  }
  
  const targetId = 1; 
  const targetId2 = 2; 
  const targetId3 = 3; 
  const targetId4 = 4;
  const targetId5 = 5;


 
  return (
      <div className='paddownforcol'>
   
    
  <div className='text-justify wid pt-4' >
   <h1>Object Identity
</h1>  
 </div>
 <div className='text-justify wid'>
   <p>Key Concepts of Object Identity
</p>  
 </div>
  
 <div className='text-justify wid'>
   <p>
Each object in Python is assigned a unique identifier when it is created.</p>  
 </div>

    <div className='text-justify wid'>
   <p>The identity remains constant for the lifetime of the object.
</p>  
 </div>
 <div className='text-justify wid'>
   <p>id() Function:
</p>  
 </div>
 <div className='text-justify wid'>
   <p>The id() function returns the identity of an object as an integer. This integer typically corresponds to the object’s memory address.
</p>  
 </div>
 <div className=" mt-4 mb-4">
  
  <h5 className='text-danger'>id(object) </h5>
    
  </div> 
  <div className='text-justify wid'>
   <p>Equality vs. Identity:

</p>  
 </div>
 <div className='text-justify wid'>
   <p>Equality (==) checks if two objects have the same value.


</p>  
 </div>
 <div className='text-justify wid'>
   <p>Identity (is) checks if two objects refer to the same memory location.
</p>  
 </div>
 <div className='text-justify wid'>
   <p>1. Object Identity with Integers (Immutable Objects)
</p>  
 </div>
 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariabledynamic3">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'># Example with small integers

</p>
<p className='text-justify fnt wid mgn whitevariablep1'>a = 10

</p>
<p className='text-justify fnt wid mgn whitevariablep1'>b=10
</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print("ID of a:", id(a))

</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print("ID of b:", id(b))

</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print("a is b:", a is b)  # True, as Python optimizes memory for small integers( small integers between -5 and 256 have same id)

</p>
 
     
  
    </div>
    </div>
    {
      examples.map((example) =>(
        targetId === example.id &&(
        <div class="section grey">
        <button className="try" onClick={() => handleRun(example.code)}>Try it Yourself</button>
      </div>
        )
      ))
    }
    
  </div> 
  <div className='text-justify wid'>
   <p>2. Object Identity with Strings (Immutable Objects)

</p>  
 </div>
 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariabledynamic3">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'># Example with strings
</p>
<p className='text-justify fnt wid mgn whitevariablep1'>str1 = "hello"
</p>
<p className='text-justify fnt wid mgn whitevariablep1'>str2 = "hello"
</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print("ID of str1:", id(str1))
</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print("ID of str2:", id(str2))
</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print("str1 is str2:", str1 is str2)  # True, as Python optimizes memory for identical strings
</p>
    </div>
    </div>
    {
      examples.map((example) =>(
        targetId2 === example.id &&(
        <div class="section grey">
        <button className="try" onClick={() => handleRun(example.code)}>Try it Yourself</button>
      </div>
        )
      ))
    }
  </div> 
  <div className='text-justify wid'>
   <p>3. Object Identity with Lists (Mutable Objects)
</p>  
 </div>
 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariabledynamic4">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'># Example with lists

</p>
<p className='text-justify fnt wid mgn whitevariablep1'>list1 = [1, 2, 3]

</p>
<p className='text-justify fnt wid mgn whitevariablep1'>list2 = [1, 2, 3]

</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print("ID of list1:", id(list1))

</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print("ID of list2:", id(list2))

</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print("list1 is list2:", list1 is list2)  # False, as lists are stored in different memory locations

</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print("list1 == list2:", list1 == list2)  # True, as their values are equal


</p>
    </div>
    </div>
    {
      examples.map((example) =>(
        targetId3 === example.id &&(
        <div class="section grey">
        <button className="try" onClick={() => handleRun(example.code)}>Try it Yourself</button>
      </div>
        )
      ))
    }
  </div> 
  <div className='text-justify wid'>
   <p>4. Using is vs ==

</p>  
 </div>
 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariabledynamic5">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'># Difference between 'is' and '=='

</p>
<p className='text-justify fnt wid mgn whitevariablep1'>x = [10, 20, 30]


</p>
<p className='text-justify fnt wid mgn whitevariablep1'>y = [10, 20, 30]


</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print("x == y:", x == y)  # True, as their values are equal


</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print("x is y:", x is y)  # False, as they are stored in different memory locations


</p>

    </div>
    </div>
    {
      examples.map((example) =>(
        targetId4 === example.id &&(
        <div class="section grey">
        <button className="try" onClick={() => handleRun(example.code)}>Try it Yourself</button>
      </div>
        )
      ))
    }
  </div>

    
 <div className="d-flex justify-content-end">
 <Link to={'/python/variable'} className="button-link m-1">
     <button className="button bg-primary text-white ">Prev</button>
   </Link>
   <Link to={'/python/datatypes'}  className="button-link m-1">
     <button className="button bg-primary text-white ">Next</button>
     </Link>
 </div>
 

 </div>
  )
}

export default PythonObjectIdentityPage
