import React from 'react'
import { Link } from 'react-router-dom'


const PythonStringFormatting = () => {
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>String Formatting
    </h1> 
    </div>
    
    <div>
      <p className='text-justify wid'>String formatting in Python allows you to build strings dynamically by embedding variables or expressions directly into a string. Python provides several ways to format strings, and each method offers unique features suited for different use cases. In this tutorial, we'll explore the most commonly used string formatting techniques.

    
    
    </p>  
    </div>
    <div className='wid text-justify pt-4'>
      <h4><b>1. Old-Style String Formatting (Percent Formatting)</b>
       </h4>
    
    
    
    
    
    
    </div>
    <div className='wid text-justify'>
      <p>
      
    
      This was the first method used in Python for formatting strings. It uses the percent (%) operator, which is similar to the printf-style formatting used in C
    </p>

    <p><b>Syntax:</b> 
    
    
    </p>  
    </div>
    
    <div className='wid text-justify'>
  

    <p>"string % (value1, value2, ...)"
    
    </p>  
    </div>
    
    
       <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0">Example</h5>
       </div>
    
     
       <div class=" text-white p-3 ">
         <pre class="mb-0">
        
                 <p className=''>name = "Alice"</p>
                 <p className=''>age = 30
                 </p>
                 <p className=' '>greeting = "Hello, %s! You are %d years old." % (name, age)
                 </p>
                 <p className=''><span className='text-warning'>print</span>(greeting)
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
      <h4><b>Common Format Specifiers</b>
       </h4>
    </div>
    
    <div className='wid text-justify'>
      <p>
      
    
      <b>%s:</b>  String</p>
    <p><b>%d:</b> Integer</p>
    <p><b>%f:</b> Integer
    </p>
    <p>To use a module, you import it into your program using the import statement.
    
    
    </p>  
    </div>


    
    <div className='wid text-justify pt-4'>
      <h4><b>2. str.format() Method (Python 2.7+ and 3.x)</b>
       </h4>
    </div>


    <div>
      <p className='text-justify wid'>Introduced in Python 2.7 and available in all Python 3.x versions, the str.format() method offers more flexibility compared to percent formatting. It uses curly braces {} as placeholders, which can be filled with values provided as arguments to the .format() method.

    
    
    </p>  
    </div>
    
     
    <div className='wid text-justify'>
      <p>
      
    
      <b>Syntax:</b></p>
  </div>
  
  <div>
      <p className='text-justify wid'>"string {}".format(value)
    
    
    </p>  
    </div>


    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
    
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>name = "Bob"</p>
                <p className=''>age = <span className='text-danger'> 25</span>
                </p>
                <p className=''>greeting = "Hello, {}! You are {} years old.".format(name, age)</p>
                <p className=''><span className='text-warning'>print</span>(greeting)  <span className='text-primary'> # Output: Hello, Bob! You are 25 years old</span> 
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
      <h4><b>
      Positional and Keyword Arguments</b>
       </h4>
    </div>

    <div>
      <p className='text-justify wid'>You can specify the order of arguments by using positional indices or by referring to named arguments
    
    
    </p>  
    </div>
    
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
    
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className='text-primary'># Positional arguments</p>
                <p className=''>greeting = "Hello, {0}! You are {1} years old.".format(name, age)
                </p>
                <p className='text-primary'><span className='text-warning'>print</span>(greeting)</p>
                
               
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
    
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
    
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className='text-primary'># Keyword arguments</p>
                <p className=''>{`greeting = "Hello, {name}! You are {age} years old.".format(name="Charlie", age=40)`}
                </p>
                <p className='text-primary'><span className='text-warning'>print</span>(greeting)</p>
                
               
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
      <h4><b>3. f-Strings (Formatted String Literals) - Python 3.6+</b>
       </h4>
    </div>

    <div>
      <p className='text-justify wid'>f-Strings, introduced in Python 3.6, are the most modern and efficient way to format strings. They are prefixed with the letter f and allow expressions to be embedded directly within the string using curly braces {}.

    
    </p>  
    </div>

    <div className='wid text-justify'>
      <p>
      
    
      <b>Syntax:</b></p>
  </div>
  
  <div>
      <p className='text-justify wid'>{`f"string {expression}"`}
    
    
    </p>  
    </div>

    
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
    
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>name = "Charlie"</p>
                <p>age = <span className='text-danger'>28</span></p>
                <p>greeting = f"Hello, {`{name}! You are {age} years old`}."</p>
                <p className=''><span className='text-warning'>print</span>(greeting) <span className='text-primary'>Hello, Charlie! You are 28 years old.</span>
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
      <h4><b>Expressions inside f-Strings:</b>
       </h4>
    </div>

    <div>
      <p className='text-justify wid'>You can also perform operations directly inside the curly braces
    
    </p>  
    </div>

    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
    
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                
                <p>x = <span className='text-danger'>5</span></p>
                <p>{`greeting = f"The value of 5 squared is {x**2}."`}</p>
                <p className=''><span className='text-warning'>print</span>(greeting) <span className='text-primary'> # The value of 5 squared is 25</span>
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
      <h4><b>4. Template Strings (For Simpler Substitution)</b>
       </h4>
    </div>
     
    <div>
      <p className='text-justify wid'>For simpler, less error-prone string formatting, Python provides the string.Template class. Template strings use $ to indicate placeholders and provide a simpler syntax than other formatting methods, especially when dealing with user inputs.

    
    </p>  
    </div>

    
   
    
    
    
 
    
    

 
    
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
    
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className='text-primary'>from string import Template</p>
                <p>template = Template("Hello, $name! You are $age years old.")</p>
                <p>greeting = template.substitute(name="Eva", age=30)</p>
                <p><span className='text-warning'>print</span>(greeting) <span className='text-primary'> # Hello, Eva! You are 30 years old.</span></p>
               
                
               
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

    
    <div className='wid text-justify pt-3'>
      <h4><b>Why Use Template Strings?</b>
       </h4>
    </div>
    
    <div className='wid text-justify pt-3'>
      <p>Template strings are especially useful when working with external data or user inputs, as they prevent some common pitfalls associated with more complex string formatting.

       </p>
    </div>
 
       
    
    <div className="d-flex justify-content-end">
     <Link to={"/python/intro"}  className="button-link m-1">
         <button className="button bg-primary text-white "   onClick={(e) => e.preventDefault()}>Prev</button>
     </Link>
       <Link to={"/python/hello "} className="button-link m-1">
         <button className="button bg-primary text-white ">Next</button>
       </Link>
     </div>
    
    </>
    
        </div>
  )
}

export default PythonStringFormatting