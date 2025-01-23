import React from 'react'
import { Link } from 'react-router-dom'

const PythonModules = () => {
  return (
    <div className='paddownforcol'>

<>
   
   <div>
  <h1>Modules
</h1> 
</div>

<div>
  <p className='text-justify wid'>A module in Python is a file containing Python code (functions, classes, variables) that can be imported and reused in other Python programs. Modules are an essential feature of Python, allowing developers to organize code into manageable, reusable components.



</p>  
</div>
<div className='wid text-justify pt-4'>
  <h4><b>What is a Module  ?</b>
   </h4>






</div>
<div className='wid text-justify'>
  <p>
  

  A module is simply a Python file with a .py extension.
It can define functions, classes, and variables, and may also include runnable code
</p>
<p><b>Example:</b> A file named math_utils.py with the following content is a module:


</p>  
</div>



   <div class="container py-4 p-2">

 <div class=" mb-4 shadow-sm shadow">
   
   <div class=" bg-light p-3">
     <h5 class="mb-0">Example</h5>
   </div>

 
   <div class=" text-white p-3 ">
     <pre class="mb-0">
    
             <p className='text-primary'># math_utils.py</p>
             <p className=''>def add(a, b):
             </p>
             <p className=' '>   return a + b
             </p>
             <p className=''>def subtract(a, b):
             </p>
             <p className=''>   return a - b
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
  <h4><b>Why Use Modules ?</b>
   </h4>
</div>

<div className='wid text-justify'>
  <p>
  

  <b>Code Reusability:</b> Write once and reuse across multiple programs.</p>
<p><b>Better Organization:</b> Break large programs into smaller, manageable files.</p>
<p><b>Namespace Management:</b> Avoid name conflicts by encapsulating variables and functions within a module.
</p>
<p>To use a module, you import it into your program using the import statement.


</p>  
</div>

<div className='wid text-justify pt-4'>
  <h4><b>1. Importing a Module</b>
   </h4>
</div>

<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
   
            <p className=''>import math_utils</p>
            <p className=''><span className='text-warning'>print</span>(math_utils.add(<span className='text-danger'>5</span>, <span className='text-danger'>3</span>))  <span className='text-primary'> # Output: 8</span> 
            </p>
            <p className=''><span className='text-warning'>print</span>(math_utils.subtract(<span className='text-danger'>5</span>, <span className='text-danger'>3</span>))  <span className='text-primary'> # Output: 2</span> 
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
  <h4><b>2. Importing Specific Functions or Variables</b>
   </h4>
</div>

<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
   
            <p className=''>from math_utils import add</p>
            <p className=''><span className='text-warning'>print</span>(add(<span className='text-danger'>5</span>, <span className='text-danger'>3</span>))  <span className='text-primary'> # Output: 8</span> 
            </p>
            <p className='text-primary'># subtract is not accessible here</p>
            
           
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
  <h4><b>3. Renaming a Module (Alias)</b>
   </h4>
</div>

<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
   
            <p className=''>import math_utils as mu</p>
            <p className=''><span className='text-warning'>print</span>(mu.add(<span className='text-danger'>5</span>, <span className='text-danger'>3</span>))  <span className='text-primary'> # Output: 8</span> 
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
  <h4><b>4. Importing All Contents of a Module</b>
   </h4>
</div>

<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
   
            <p className=''>from math_utils import *</p>
            <p className=''><span className='text-warning'>print</span>(add(<span className='text-danger'>5</span>, <span className='text-danger'>3</span>))  <span className='text-primary'> # Output: 8</span> 
            </p>
            <p className=''><span className='text-warning'>print</span>(subtract(<span className='text-danger'>5</span>, <span className='text-danger'>3</span>))  <span className='text-primary'> # Output: 2</span> 
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
  <p><b>Caution:</b> This can lead to conflicts if multiple imported modules have functions with the same name.
   </p>
</div>

<div className='wid text-justify pt-4'>
  <h4><b>Variables in Modules</b>
   </h4>
</div>


<div className='wid text-justify pt-4'>
  <h4><b>What are Module Variables?</b>
   </h4>
</div>


<div className='wid text-justify pt-2'>
  <p>Variables defined in a module are accessible to any program that imports the module. These variables can store data, and their values remain constant unless explicitly changed.
  </p>
</div>

<div className='wid text-justify pt-4'>
  <h4><b>Defining Variables in a Module</b>
   </h4>
</div>

<div className='wid text-justify pt-4'>
  <p><b>Example: </b>Let's create a module called math_utils
   </p>
</div>

<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
   
            <p className='text-primary'># math_utils.py</p>
            <p>pi = <span className='text-danger'>3.14159</span></p>
            <p>gravity = <span className='text-danger'>9.8</span></p>
           
            
           
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
  <h4><b>Accessing Variables in a Module</b>
   </h4>
</div>

<div className='wid text-justify pt-3'>
  <p>To access module variables, you need to import the module
   </p>
</div>

<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
   
            <p className=''>import math_utils</p>
            <p className=''><span className='text-warning'>print</span>((math_utils.pi))  <span className='text-primary'>  # Output: 3.14159</span> 
            </p>
            <p className=''><span className='text-warning'>print</span>(math_utils.gravity)  <span className='text-primary'>  # Output: 9.8</span> 
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

<div className='wid text-justify pt-3'>
  <h4><b>Modifying Variables in a Module</b>
   </h4>
</div>

<div className='wid text-justify pt-3'>
  <p>Although module variables can be accessed in your program, modifying them directly is not recommended as it can lead to unexpected behaviors.

   </p>
</div>

<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
   
            <p className=''>import math_utils</p>
            <p> math_utils.gravity = <span className='text-danger'>10</span> <span className='text-primary'># Modifies the gravity variable in the module</span></p> 
            
            
            <p className=''><span className='text-warning'>print</span>(math_utils.gravity)  <span className='text-primary'>  # Output: 10</span> 
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

<div className='wid text-justify pt-1'>
  <p>It’s better to use module variables as constants (avoid modification) to maintain consistency.

   </p>
</div>


<div className='wid text-justify pt-3'>
  <h4><b>Types of Modules</b>
   </h4>
</div>

<div className='wid text-justify pt-3'>
  <p>
  

   <b> Built-in Modules:</b> Pre-installed with Python</p>
<p><b> Standard Library Modules:</b> Part of Python's extensive standard library.</p>
<p><b> User-Defined Modules:</b> Created by the developer
</p>
<p><b> Third-Party Modules:</b> Installed using package managers like pip.
</p>
<p>To use a module, you import it into your program using the import statement.


</p>  
</div>

<div className='wid text-justify pt-3'>
  <h4><b>1. Built-in Modules</b>
   </h4>
</div>

<div className='wid text-justify pt-3'>
  <p>Python includes many built-in modules that you can use without installation.

   </p>
</div>

<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
   
            <p className=''>import math</p>
            
            
            <p className=''><span className='text-warning'>print</span>(math.sqrt(16))  <span className='text-primary'>  # Output: 4.0</span> 
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

<div className='wid text-justify pt-3'>
  <h4><b>2. Standard Library Modules</b>
   </h4>
</div>

<div className='wid text-justify pt-3'>
  <p>The Python Standard Library contains many modules that provide additional functionality.
 </p>
</div>

<div className='wid text-justify pt-3'>
  <p>
  

   <b> datetime:</b>  Working with dates and times</p>
<p><b> os:</b> Interacting with the operating system.</p>
<p><b> random:</b> Generating random numbers
</p>
  
</div>



<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
   
            <p className=''>import datetime</p>
            
            
            <p className=''><span className='text-warning'>print</span>(datetime.datetime.now())  <span className='text-primary'>   # Outputs the current date and time</span> 
            </p>
            <p className=''>import os</p>
            
            <p className=''><span className='text-warning'>print</span>(os.getcwd())  <span className='text-primary'>   # Prints the current working directory</span> 
            </p>
            <p className=''>import random</p>
            <p className=''><span className='text-warning'>print</span>print(random.randint(1, 10))   <span className='text-primary'>   # Outputs a random number between 1 and 10</span> 
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

<div className='wid text-justify pt-3'>
  <h4><b>3. User-Defined Modules</b>
   </h4>
</div>
<div className='wid text-justify pt-3'>
  <p>You can create your own modules by writing Python code in a .py file and importing it into another script.
 </p>
</div>

<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
   
            <p className=''>def hello(name):</p>
            
            
            
            <p className=''>{`return f"Hello, {name} ! "`}</p>
            
           
            <p className=''>File: main.py</p>
           <p>import greetings</p>
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
   
        
            
           
            
           <p>import greetings</p>
           <p><span className='text-warning'>  print</span>(greetings.hello(<span className='text-success'>"Alice"</span>)) <span className='text-primary'># Output: Hello, Alice!</span> </p> 
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
   
            <p className=''>import datetime</p>
            
            
            <p className=''><span className='text-warning'>print</span>(datetime.datetime.now())  <span className='text-primary'>   # Outputs the current date and time</span> 
            </p>
            <p className=''>import os</p>
            
            <p className=''><span className='text-warning'>print</span>(os.getcwd())  <span className='text-primary'>   # Prints the current working directory</span> 
            </p>
            <p className=''>import random</p>
            <p className=''><span className='text-warning'>print</span>(random.randint(1, 10))   <span className='text-primary'>   # Outputs a random number between 1 and 10</span> 
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

<div className='wid text-justify pt-3'>
  <h4><b>4. Third-Party Modules</b>
   </h4>
</div>
<div className='wid text-justify pt-3'>
  <p>These are modules not included in Python's standard library. You can install them using a package manager like pip.
 </p>
</div>
<div className='wid text-justify pt-3'>
  <p><b>Example:</b> Installing and Using requests Module.
  <p>bash</p>
  <p className=''><b>pip install requests</b></p>
 </p>

</div>




<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
   
            <p className=''>pip install requests</p>
            
            
            
            <p className=''>response = requests.get("https://api.github.com")</p>
            
           
            <p className=''><span className='text-warning'>print</span>(response.status_code) <span className='text-primary'># Outputs the status code of the response</span> </p>
       
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
  <h4><b> Using the dir() Function in Modules</b>
   </h4>
</div>

<div className='wid text-justify pt-3'>
  <p>The <b>dir()</b> function is a built-in Python function that returns a list of all the attributes (variables, functions, classes, etc.) defined in a module.
</p>
</div>
<div className='wid text-justify pt-3'>
  <h4><b> Basic Usage of dir()</b>
   </h4>
</div>
<div className='wid text-justify pt-3'>
  <p>When used on a module, <b>dir()</b> lists all the attributes of that module, including its functions, variables, and built-in attributes.
</p>
</div>


<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
   
            <p className=''>import math_utils</p>
            
          <p className=''><span className='text-warning'>print</span>(dir(math_utils)) <span className='text-primary'># Outputs the status code of the response</span> </p>
       
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
   
            <p className=''>['__doc__', '__file__', '__name__', 'gravity', 'pi']</p>
            
            
            
         
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
  <h4><b> Using dir() Without Arguments</b>
   </h4>
</div>

<div className='wid text-justify pt-3'>
  <p>When used without arguments, <b>dir()</b> lists the names in the current scope (variables, functions, etc.).
</p>
</div>



<div class="container py-4 p-2">

<div class=" mb-4 shadow-sm shadow">
  
  <div class=" bg-light p-3">
    <h5 class="mb-0">Example</h5>
  </div>


  <div class=" text-white p-3 ">
    <pre class="mb-0">
             <p>x = <span className='text-danger'>10</span></p>
             <p>def greet():</p>
             <p><span className='text-warning'>  print</span>(<span className='text-success'>"Hello!"</span>)</p>
             <p><span className='text-warning'>  print</span>(dir())</p>
            
            
         
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

export default PythonModules