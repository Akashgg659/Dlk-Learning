import React from 'react'
import { Link } from 'react-router-dom'


const PythonExceptionpage = () => {
  return (
    <div class="container my-4">
    <h1 class="text-left mb-4">Understanding Exceptions</h1>
    <p className='fs-5'>Python provides robust support for handling exceptions, which are errors detected during execution. Learning how to handle exceptions is crucial for building reliable and user-friendly applications. Here is an overview of exception handling concepts in Python:</p>

    <section>
        <h2>What are Exceptions?</h2>
        <p className='fs-5'>An exception is an event that disrupts the normal flow of a program. In Python, exceptions are objects representing errors.</p>
    </section>

    <section >
        <h2>Common Built-in Exceptions</h2>
        <ul className='pt-3 pb-3'>
            <li className='fs-5'><strong>ValueError:</strong> Raised when a function gets an argument of the correct type but an inappropriate value.</li>
            <li className='fs-5'><strong>TypeError:</strong> Raised when an operation is performed on an incorrect data type.</li>
            <li className='fs-5'><strong>IndexError:</strong> Raised when a sequence index is out of range.</li>
            <li className='fs-5'><strong>KeyError:</strong> Raised when a dictionary key is not found.</li>
            <li className='fs-5'><strong>ZeroDivisionError:</strong> Raised when dividing by zero.</li>
            <li className='fs-5'><strong>FileNotFoundError:</strong> Raised when an attempt is made to access a file that does not exist.</li>
        </ul>
    </section>

    <section>
        <h2>Handling Exceptions</h2>
        <p className='fs-5'>You can handle exceptions in Python using a <code>try...except</code> block:</p>
        <pre>

                        
 <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
                <p><span class="">try</span>:</p>
                <p><span class="text-primary">#Code that may raise an exception</span></p>
                result = <span class="text-danger">10</span> / <span class="text-danger">0</span>
               
<span class="">except</span> ZeroDivisionError as e:
<span class="text-warning">print</span><span class="text-success">(f"Error occurred: {`{e}`}")</span>
                
                

                
               
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
      
      
 

        </pre>
    </section>

    <section>
        <h2>Multiple Exception Handling</h2>
        <p className='fs-5'>You can handle multiple exceptions in a single try block:</p>
        <pre>
        <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
                <p><span class="">try</span>:</p>
                <p className=''>value = <span class="">int</span>(<span class="">input</span>(<span class="text-success">"Enter a number: "</span>))</p>
                <p> <span class="">except</span> Exception as e:</p>
                <p className=''><span class="text-warning">print</span><span class="text-success">(f"An error occurred: {`{e}`}")</span></p>
                
<p>result = <span class="text-danger">10</span> / value</p>
<p><span class="">except</span> ValueError:</p>
<p><span class="text-warning">print</span><span class="text-success">("Invalid input! Please enter a number.")</span></p>
<p><span class="">except</span> ZeroDivisionError:</p>
<p><span class="text-warning">print</span><span class="text-success">("Cannot divide by zero.")</span></p>
                
                

                
               
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



        </pre>
    </section>

    <section>
        <h2>Catch-All Exceptions</h2>
        <p className='fs-5'>Use a bare <code>except</code> to catch all exceptions, though this is generally discouraged unless you re-raise or log the exception properly:</p>
        <pre>

            
 <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
                <p><span class="">try</span>:</p>
                <p className=''>result = <span class="text-danger">10</span> / <span class="text-danger">2</span></p>
                <p> <span class="">except</span> Exception as e:</p>
                <p className=''><span class="text-warning">print</span><span class="text-success">(f"An error occurred: {`{e}`}")</span></p>
                
                
                

                
               
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



        </pre>
    </section>

    <section>
        <h2>The else Clause</h2>
        <p className='fs-5'>The <code>else</code> block executes if no exceptions are raised in the try block:</p>
        <pre>

        <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
   
<p><span class="">try</span>:</p>

<p><span class="">except</span> ZeroDivisionError:</p>
<p><span class="text-warning">print</span><span class="text-success">("Cannot divide by zero.")</span></p>
<p><span class="">else</span>:</p>
<p><span class="text-warning">print</span><span class="text-success">(f"Result is {`{result}`}")</span></p>
                
                

                
               
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
  
        </pre>
    </section>

    <section>
        <h2>Raising Exceptions</h2>
        <p className='fs-5'>You can raise exceptions explicitly using the <code>raise</code> keyword:</p>
        <pre>

        <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
                <p>value = <span class="text-danger">-1</span></p>
                <p className=''><span class="">if</span> value &lt; <span class="text-danger">0</span>:</p>
                <p> <span class="">except</span> Exception as e:</p>
                <span class="">raise</span> ValueError(<span class="text-success">"Value cannot be negative!"</span>)
                
                
                

                
               
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




        </pre>
    </section>

    <section>
        <h2>Custom Exceptions</h2>
        <p className='fs-5'>Define custom exceptions by subclassing the <code>Exception</code> class:</p>
        <pre>
        <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
                     
<p><span class="">class</span> CustomError(Exception):</p>
<p><span class="">pass</span></p>

<p><span class="">try</span>:</p>
<p><span class="">raise</span> CustomError(<span class="text-success">"This is a custom exception."</span>)</p>
<p><span class="">except</span> CustomError as e:</p>
<p><span class="text-warning">print</span>(e)</p>
                
                

                
               
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

        </pre>
    </section>

    <section>
        <h2>Best Practices</h2>
        <ol>
            <li className='fs-5'>Handle exceptions explicitly and narrowly.</li>
            <li className='fs-5'>Avoid catching all exceptions unless necessary.</li>
            <li className='fs-5'>Use <code>finally</code> to clean up resources like files or connections.</li>
            <li className='fs-5'>Log exceptions for debugging and monitoring.</li>
            <li className='fs-5'>Use custom exceptions to represent domain-specific errors.</li>
        </ol>
    </section>

    <section>
       
        <p className='fs-5'>Understanding and properly handling exceptions will make your Python programs more robust and maintainable.</p>
    </section>

    
    <div className="d-flex justify-content-end pt-4">
     <Link to={"/python/intro"}  className="button-link m-1">
         <button className="button bg-primary text-white "   onClick={(e) => e.preventDefault()}>Prev</button>
     </Link>
       <Link to={"/python/hello "} className="button-link m-1">
         <button className="button bg-primary text-white ">Next</button>
       </Link>
     </div>
</div>


  )
}

export default PythonExceptionpage