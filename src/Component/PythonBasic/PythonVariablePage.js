import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CodeContext } from '../CodeContext/CodeContext'

const PythonVariablePage = () => {

  const {setSelectedCode} = useContext(CodeContext)
  const navigate = useNavigate()
  const elements = [
    {
      id: 1,
      title: "Declaring Variables",
      code :`name = "Alice" # String

age = 25 # Integer

height = 5.8 # Float

is_student = True # Boolean

print(name)

print(age)

print(height)

print(is_student)`
    },
    {
      id: 2,
      title: "Dynamic Typing",
      code :`x = 10 # x is an integer

print(x)

x = "Hello" # Now x is a string

print(x)`
    },
    {
      id: 3,
      title: "Multiple Assignment",
      code :`x,y,z=10,20,30

print(x)

print(y)

print(z)`
    },
    {
      id: 4,
      title: "Reassigning Variables",
      code :`counter = 1

print(counter)

counter=counter+1

print(counter)`
    },
    {
      id: 5,
      title: "underscore _",
      code :`_my_variable = 10

print(my_variable)

age = 25

print(age)`
    },
    {
      id: 6,
      title: "digits",
      code :`1name = "John" #throws error invalid

print(1name)

name1 = "John" #valid

print(name1)`
    },
    {
      id: 7,
      title: "@, #, or $.",
      code :`total_1 = 100

first_name = "Alice"

print(total_1)

print(first_name)`
    },
    {
      id: 8,
      title: "different.",
      code :`Name = "Alice"

name = "Bob"

print(Name) # Outputs: Alice

print(name) # Outputs: Bob`
    },
    {
      id: 9,
      title: "names cannot be any of Python's reserved keywords",
      code :`if = 10 # SyntaxError

print(if) # SyntaxError

if_condition = 10 #valid

print(if_condition)`
    },
    {
      id: 10,
      title: "Use descriptive names",
      code :`age=25 #Good

print(age)

a=25 #Not Recommended

print(a)`
    },
    {
      id: 11,
      title: "Use snake_case",
      code :`first_name = "Alice"

print(first_name )`
    },
    {
      id: 12,
      title: "Storing User Information",
      code :`# Storing and displaying user information

name = "Alice"

age = 30

city = "New York"

print("User Details:")

print("Name:", name)

print("Age:", age)

print("City:", city)`
    },
    
    {
      id: 13,
      title: "Get the Type",
      code :`x = 10

print(type(x))

name = "Alice"

print(type(name))

numbers = [1, 2, 3, 4]

print(type(numbers))

pi = 3.14

print(type(pi))

is_active = True

print(type(is_active))`
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
const targetId6 = 6; 
const targetId7 = 7; 
const targetId8 = 8; 
const targetId9 = 9;
const targetId10 = 10;
const targetId11 = 11; 
const targetId12 = 12; 
const targetId13 = 13; 


  
  return (
      <div className='paddownforcol'>
   
    <div >
   <h1>PYTHON VARIABLES
   </h1> 
 </div>

 <div>
   <p className='text-justify wid'>In Python, a variable is a name that is used to store data. Variables allow you to assign, manipulate, and retrieve values during the execution of a program. Python is dynamically typed, meaning you don’t need to explicitly declare the type of a variable; the type is inferred based on the value assigned.

</p>  
 </div>
 <div className='wid pt-4'>
   <h4>Declaring Variables
</h4>  
 </div>

 <div className='text-justify wid pt-4'>
   <p>In Python, you can create a variable by simply assigning a value to it using the = operator:
</p>  
 </div>


 <div className=" text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariable">
    <div className="lop gy">
      <p className='text-justify wid mgn'># Examples of variables
      </p>
      <p className='fnt mgn'>name = "Alice"       # String
      </p>
      <p className='fnt mgn whitevariablep1'>age = 25             # Integer

      </p>
      <p className='fnt mgn whitevariablep1'>height = 5.8         # Float

      </p>
      <p className='fnt mgn whitevariablep1'>is_student = True    # Boolean

      </p>
      <p className='fnt mgn whitevariablep1'>print(name)
      </p>
      <p className='fnt mgn whitevariablep1'>print(age)

      </p>
      <p className='fnt mgn whitevariablep1'>print(height)

      </p>
      <p className='fnt mgn whitevariablep1'>print(is_student)

      </p>
    </div>
    </div>
   {
    elements.map((example) =>(
      targetId === example.id && (
      
      <div class="section grey">
      <button className="try" onClick={() => handleRun(example.code)}>Try it Yourself</button>
    </div>)
    ))
   }
  
  </div> 

 

 
 
 
 <div className='text-justify wid'>
<p>Dynamic Typing
</p>

 </div>
 
 <div className='text-justify wid pt-4'>
   <p>Variables in Python can change their type dynamically:
</p>  
 </div>
 <div className=" text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariabledynamic">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>x = 10       # x is an integer

      </p>
      <p className='fnt mgn whitevariablep1'>print(x)
      </p>
      <p className='fnt mgn whitevariablep1'>x = "Hello"  # Now x is a string


      </p>
      <p className='fnt mgn whitevariablep1'>print(x)

      </p>
    </div>
    </div>
    {
    elements.map((example) =>(
      targetId2 === example.id && (
      
      <div class="section grey">
      <button className="try" onClick={() => handleRun(example.code)}>Try it Yourself</button>
    </div>)
    ))
   }
  </div> 
 <div className='text-justify wid'>
  <p>Multiple Assignments
  </p> 
 </div>


 <div className='text-justify wid'>
   <p>
  You can assign values to multiple variables in a single line:

</p>  
 </div>
 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariabledynamic">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>x,y,z=10,20,30

      </p>
      <p className='fnt mgn whitevariablep1'>print(x)
      </p>
      <p className='fnt mgn whitevariablep1'>print(y)
      </p>
      <p className='fnt mgn whitevariablep1'>print(z)
      </p>
  
    </div>
    </div>
    {
    elements.map((example) =>(
      targetId3 === example.id && (
      
      <div class="section grey">
      <button className="try" onClick={() => handleRun(example.code)}>Try it Yourself</button>
    </div>)
    ))
   }
  </div> 
 
 <div className='text-justify wid pt-3'>
   <p>
   Reassigning Variables
</p>  
 </div>
 <div className='text-justify wid '>
   <p>
   Variables can be updated or reassigned with new values:

</p>  
 </div>
 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariabledynamic">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>counter = 1

      </p>
      <p className='fnt mgn whitevariablep1'>print(counter)
      </p>
      <p className='fnt mgn whitevariablep1'>counter=counter+1
      </p>
      <p className='fnt mgn whitevariablep1'>print(counter)
      </p>
  
    </div>
    </div>
    {
    elements.map((example) =>(
      targetId4 === example.id && (
      
      <div class="section grey">
      <button className="try" onClick={() => handleRun(example.code)}>Try it Yourself</button>
    </div>)
    ))
   }
  </div> 
 
 <div className='text-justify wid pt-4'>
   <h4>Identifier Naming
</h4>  
 </div>
 <div className='text-justify wid'>
  <p>1.Must Start with a Letter or Underscore
  </p>  
</div>
<div className='text-justify wid'>
   <p>A variable name must begin with a letter (a-z, A-Z) or an underscore _.

</p>  
 </div>
 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariabledynamic">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>_my_variable = 10  


      </p>
      <p className='fnt mgn whitevariablep1'>print(my_variable)
      </p>
      <p className='fnt mgn whitevariablep1'>age = 25  

      </p>
      <p className='fnt mgn whitevariablep1'>print(age)
      </p>
  
    </div>
    </div>
    {
    elements.map((example) =>(
      targetId5 === example.id && (
      
      <div class="section grey">
      <button className="try" onClick={() => handleRun(example.code)}>Try it Yourself</button>
    </div>)
    ))
   }
  </div> 
 
 <div className='text-justify wid'>
  <p>2.Variable names cannot begin with digits.

  </p>  
</div>
<div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariabledynamic">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>1name = "John" #throws error invalid 


      </p>
      <p className='fnt mgn whitevariablep1'>print(1name)
      </p>
      <p className='fnt mgn whitevariablep1'> name1 = "John" #valid


      </p>
      <p className='fnt mgn whitevariablep1'>print(name1)
      </p>
  
    </div>
    </div>
    {
    elements.map((example) =>(
      targetId6 === example.id && (
      
      <div class="section grey">
      <button className="try" onClick={() => handleRun(example.code)}>Try it Yourself</button>
    </div>)
    ))
   }
  </div> 
<div className='text-justify wid'>
   <p>3.Variable names can include letters, numbers, and underscores but cannot contain special characters like @, #, or $.
</p>  
 </div>
 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariabledynamic">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>total_1 = 100  



      </p>
      <p className='fnt mgn whitevariablep1'>first_name = "Alice"  

      </p>
      <p className='fnt mgn whitevariablep1'> print(total_1)


      </p>
      <p className='fnt mgn whitevariablep1'>print(first_name)
      </p>
  
    </div>
    </div>
    {
    elements.map((example) =>(
      targetId7 === example.id && (
      
      <div class="section grey">
      <button className="try" onClick={() => handleRun(example.code)}>Try it Yourself</button>
    </div>)
    ))
   }
  </div> 
 <div className='text-justify wid'>
  <p>4.Python treats uppercase and lowercase letters as different.
  </p>  
</div>
<div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariabledynamic">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>Name = "Alice"  
 



      </p>
      <p className='fnt mgn whitevariablep1'>name = "Bob"  


      </p>
      <p className='fnt mgn whitevariablep1'> print(Name)  # Outputs: Alice  



      </p>
      <p className='fnt mgn whitevariablep1'>print(name)  # Outputs: Bob  

      </p>
  
    </div>
    </div>
    {
    elements.map((example) =>(
      targetId8 === example.id && (
      
      <div class="section grey">
      <button className="try" onClick={() => handleRun(example.code)}>Try it Yourself</button>
    </div>)
    ))
   }
  </div> 
<div className='text-justify wid'>
   <p>5.Variable names cannot be any of Python's reserved keywords, such as if, else, for, while, True, False, etc.

</p>  
 </div>
 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariabledynamic">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>if = 10   # SyntaxError  

 </p>
      <p className='fnt mgn whitevariablep1'>print(if)  # SyntaxError  
</p>
      <p className='fnt mgn whitevariablep1'> if_condition = 10  #valid
  </p>
      <p className='fnt mgn whitevariablep1'>print(if_condition)  

      </p>
  
    </div>
    </div>
    {
    elements.map((example) =>(
      targetId9 === example.id && (
      
      <div class="section grey">
      <button className="try" onClick={() => handleRun(example.code)}>Try it Yourself</button>
    </div>)
    ))
   }
  </div> 
  <div className='text-justify wid pt-4'>
   <h4>Best Practices for Naming Variables

</h4>  
 </div>
 <div className='text-justify wid'>
  <p>1.Use descriptive names that reflect the purpose of the variable.
  </p>  
</div>
<div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariabledynamic">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>age=25  #Good  

 </p>
      <p className='fnt mgn whitevariablep1'>print(age)
</p>
      <p className='fnt mgn whitevariablep1'> a=25     #Not Recommended
  </p>
      <p className='fnt mgn whitevariablep1'>print(a)  

      </p>
  
    </div>
    </div>
    {
    elements.map((example) =>(
      targetId10 === example.id && (
      
      <div class="section grey">
      <button className="try" onClick={() => handleRun(example.code)}>Try it Yourself</button>
    </div>)
    ))
   }
  </div> 
<div className='wid'>
   <p>2.Use snake_case for multi-word variable names:
</p>  
 </div>
 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariabledynamic1">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>first_name = "Alice"  


 </p>
      <p className='fnt mgn whitevariablep1'>print(first_name )
</p>
     
  
    </div>
    </div>
    {
    elements.map((example) =>(
      targetId11 === example.id && (
      
      <div class="section grey">
      <button className="try" onClick={() => handleRun(example.code)}>Try it Yourself</button>
    </div>)
    ))
   }
  </div> 
  <div className='text-justify wid'>
  <h4>Example Program: Storing User Information

  </h4>  
</div>
  
 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariabledynamic6">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'># Storing and displaying user information


</p>
<p className='text-justify fnt wid mgn whitevariablep1'>name = "Alice"



</p>
<p className='text-justify fnt wid mgn whitevariablep1'>age = 30



</p>
<p className='text-justify fnt wid mgn whitevariablep1'>city = "New York"



</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print("User Details:")


</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print("Name:", name)


</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print("Age:", age)



</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print("City:", city)



</p>

    </div>
    </div>
    {
    elements.map((example) =>(
      targetId12 === example.id && (
      
      <div class="section grey">
      <button className="try" onClick={() => handleRun(example.code)}>Try it Yourself</button>
    </div>)
    ))
   }
  </div> 
  <div className='text-justify wid'>
  <h4>Get the Type

  </h4>  
</div>
<div className='text-justify wid'>
  <p>In Python, the type of a variable refers to the type of data it holds (such as an integer, string, list, etc.). You can use the built-in type() function to determine the type of a variable at runtime.


  </p>  
</div>
<div className='text-justify wid'>
  <p>The type() function returns the type of the object passed to it, which helps in understanding the data type and performing type-specific operations.



  </p>  
</div>
<div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariabledynamic7">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>x = 10



</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(type(x)) 




</p>
<p className='text-justify fnt wid mgn whitevariablep1'>name = "Alice"




</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(type(name)) 




</p>
<p className='text-justify fnt wid mgn whitevariablep1'>numbers = [1, 2, 3, 4]



</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(type(numbers))  



</p>
<p className='text-justify fnt wid mgn whitevariablep1'>pi = 3.14




</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(type(pi))  




</p>
<p className='text-justify fnt wid mgn whitevariablep1'>is_active = True





</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print(type(is_active))





</p>

    </div>
    </div>
    {
    elements.map((example) =>(
      targetId13 === example.id && (
      
      <div class="section grey">
      <button className="try" onClick={() => handleRun(example.code)}>Try it Yourself</button>
    </div>)
    ))
   }
  </div> 


   
 <div className="d-flex justify-content-end">
 <Link to={'/python/comments'} className="button-link m-1">
     <button className="button bg-primary text-white ">Prev</button>
   </Link>
   <Link to={'/python/objectidentity'}  className="button-link m-1">
     <button className="button bg-primary text-white ">Next</button>
     </Link>
 </div>
 </div>
  )
}

export default PythonVariablePage
