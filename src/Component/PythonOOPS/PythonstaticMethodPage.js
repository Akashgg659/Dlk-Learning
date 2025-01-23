import React from 'react'
import { Link } from 'react-router-dom'

const PythonstaticMethodPage = () => {
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>
      Static Methods in Python                                                                                                                      
    </h1> 
    </div>

   
  
    
    <div className='pt-2'>
      <p className='text-justify wid'>A static method in Python is a method that belongs to a class but does not have access to either class attributes (cls) or instance attributes (self). It behaves like a regular function but resides inside the class's namespace and is called using the class or its objects.
    </p>  
    <p className='text-justify wid'>Static methods are defined using the @staticmethod decorator.</p>
    </div>

    <div className='pt-4'>
    <h3>Defining a Static Method</h3>
    </div>

   

    <div className='text-justify wid pt-4 bglights pt-4'>


   

<div className='text-dark'>
  <h5> { `class ClassName:`}
  </h5> 
  <h5>    { ` @staticmethod`}
  </h5> 
  <h5>  def method_name(args):</h5>
</div>


 
</div>

    
<div className='pt-4'>
    <h3>Characteristics of Static Methods</h3>
    </div>

     
    <div className='pt-2'>
      <p className='text-justify wid'><b>No Access to Class or Instance Data:</b> Static methods cannot access or modify instance (self) or class (cls) attributes.
    </p>  
    <p className='text-justify wid'><b>Utility Functions:</b>They are often used as utility functions that logically belong to a class but do not depend on class-specific or instance-specific data</p>
    <p className='text-justify wid'><b>Callable by Class or Object:</b> Static methods can be called directly by the class or by an instance of the class.</p>

</div>
  
       <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow ">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0 text-dark">Example</h5>
       </div>
    
     
       <div class=" p-3 bg-white ">
         <pre class="mb-0 ">
        
                 <p className=''><span className='text-danger'>class</span> Calculator:</p>
                 <p className='text-danger'>  @staticmethod</p>
                 <p>    def add(a, b):</p>
                 <p>     return a + b</p>
                 <p className=''><span className='text-warning'>{`print`}</span>(Calculator.add(10, 5))
                 </p>
                 <p className=' '><span className='text-warning'>{`print`}</span>(Calculator.subtract(10, 5)) 
                 </p>
                 <p>calc = Calculator()</p>
                 <p><span className='text-warning'>{`print`}</span>(calc.add(20, 10)) </p>

                 
                
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

    

    <div className='pt-4'>
    <h4><b>Use Cases for Static Methods</b>

</h4>
  </div>
  <div className='pt-2'>
      <p className='text-justify wid'><b>Utility Functions:</b> When a function provides utility or helper functionality and does not depend on class-specific or instance-specific data, it can be defined as a static method.
    </p>  
   
    </div>

    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
       
                <p className=''><span className='text-danger'>class</span> MathUtils:</p>
                <p className='text-danger'>  @staticmethod</p>
                <p>     def is_even(number):</p>
                <p>     return number % 2 == 0</p>
                <p className=''><span className='text-warning'>{`print`}</span>(MathUtils.is_even(10))
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

  
  <div className='pt-2'>
       
    <p className='text-justify wid'><b>Grouping Related Functions: </b> Static methods help group functions that belong together logically within a class for better organization.
    </p>
    <p className='text-justify wid'><b>Factory-like Behavior Without Class Dependency:</b>   Static methods can provide factory-like behavior that does not rely on class or instance attributes.
    </p> 
    </div>

    <div className='pt-4'>
    <h4><b> Static Method vs Class Method vs Instance Method</b>

</h4>
  </div>


  <div className="container mt-4">
  <div className="p-2">
   
    <table className="table table-bordered table-hover table-striped text-center shadow">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Aspect</th>
          <th scope="col">Static Method</th>
          <th scope="col">Class Method</th>
          <th scope='col'>Instance Method</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Decorator</td>
          <td className='text-danger'>@staticmethod</td>
          <td className='text-danger'>@classmethod</td>
          <td>None</td>
        </tr>
        <tr>
          <td>First Parameter</td>
          <td>None</td>
          <td><spam className='text-danger'>self</spam> cls (class reference)</td>
          <td>self (instance reference)</td>
        </tr>
        <tr>
          <td>Access to Class Data</td>
          <td>No</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Access to Instance Data</td>
          <td>No</td>
          <td>No</td>
          <td>No</td>
        </tr>

        <tr>
          <td>Purpose</td>
          <td>Utility or helper function</td>
          <td>Modify or access class attributes</td>
          <td>Operates on instance data</td>
        </tr>

       
      </tbody>
    </table>
  </div>
</div>

<div className='pt-4'>
    <h4><b> When to Use Static Methods</b>

</h4>
  </div>

  
  <div className='pt-2'>
       
       <p className='text-justify wid'>Use static methods for operations that do not modify or depend on class or instance attributes.
       </p>
       <p className='text-justify wid'>They are ideal for utility functions, validation functions, or calculations related to the class context but independent of its state.

       </p> 
       </div>

   
  



    
    
    <div className="d-flex justify-content-end pt-4">
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

export default PythonstaticMethodPage