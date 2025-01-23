import React from 'react'
import { Link } from 'react-router-dom'


const PythonConstructorspage = () => {
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>
      
Python Constructors                                                                                                                     
    </h1> 
    </div>

   
  
    
    <div className='pt-2'>
      <p className='text-justify wid'>In Python, a constructor is a special method that is automatically called when an object of a class is created. The primary purpose of a constructor is to initialize the instance variables (attributes) of a class.
    </p>  
    
    </div>

    <div className='pt-4'>
    <h3>Types of Constructors in Python</h3>
    </div>

    <div className='pt-2'>
      <p className='text-justify wid'><b>Default Constructor:</b>A constructor without any parameters other than self.
    </p>  
    
    <p className='text-justify wid'><b>Parameterized Constructor:</b> A constructor with parameters to initialize instance variables with user-defined values.</p>

</div>


<div className='pt-4'>
    <h4><b>Constructor Syntax</b></h4>
    </div>

    <div className='pt-2'>
      <p className='text-justify wid'>Constructors in Python are defined using the __init__() method. The method name __init__ is predefined in Python and is called automatically during object creation.
    </p>  
    
    
</div>

    <div className='text-justify wid pt-4 bglights pt-4'>


   

<div className='text-dark'>
  <h5> { `class ClassName:`}
  </h5> 
  <h5>    { `  def __init__(self, parameters):`}
  </h5> 
  
</div>


 
</div>

<div className='pt-4'>
    <h4><b>1. Default Constructor</b></h4>
    </div>
    
  
       <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow ">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0 text-dark">Example</h5>
       </div>
    
     
       <div class=" p-3 bg-white ">
         <pre class="mb-0 ">
        
                 <p className=''><span className='text-danger'>class</span> Person:</p>
                 <p className=''>  def __init__(self):</p>
                 <p>      self.name = "John Doe"</p>
                 <p>      self.age = <span className='text-danger'>30</span></p>
                 <p>   def display(self):</p>
                 <p className=''>      <span className='text-warning'>{`print`}</span>{`(f"Name: {self.name}, Age: {self.age}")`}
                 </p>
                 <p className=' '>person = Person()
                 </p>
                 <p>person.display()</p>
               

                 
                
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
    <h4><b>2. Parameterized Constructor</b></h4>
    </div>
    
  
       <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow ">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0 text-dark">Example</h5>
       </div>
    
     
       <div class=" p-3 bg-white ">
         <pre class="mb-0 ">
        
                 <p className=''><span className='text-danger'>class</span> Person:</p>
                 <p className=''>  def __init__(self, name, age):</p>
                 <p>      self.name = name</p>
                 <p>      self.age = age</p>
                 <p>   def display(self):</p>
                 <p className=''>      <span className='text-warning'>{`print`}</span>{`(f"Name: {self.name}, Age: {self.age}")`}
                 </p>
                 <p className=' '>person = Person(<span className='text-success'>"Alice"</span>, <span className='text-danger'>25</span>)
                 </p>
                 <p>person.display()</p>
               

                 
                
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
    <h4><b>Multiple Constructors in Python</b></h4>
    </div>

    <div className='pt-2'>
      <p className='text-justify wid'>Python does not support multiple constructors directly. However, you can achieve similar functionality by using default arguments or conditionally handling parameters.
    </p>  
    
    <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow ">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0 text-dark">Example</h5>
       </div>
    
     
       <div class=" p-3 bg-white ">
         <pre class="mb-0 ">
        
                 <p className=''><span className='text-danger'>class</span> Person:</p>
                 <p className=''>  def __init__(self, name=None, age=None):</p>
                 <p>      self.name = name if name else "Unknown"</p>
                 <p>      self.age = age if age else <span className='text-danger'>0</span></p>
                 <p>   def display(self):</p>
                 <p className=''>      <span className='text-warning'>{`print`}</span>{`(f"Name: {self.name}, Age: {self.age}")`}
                 </p>
                 <p>person.display()</p>
                 <p className=' '>person = Person(<span className='text-success'>"Charlie"</span>, <span className='text-danger'>35</span>)
                 </p>
                <p>person1.display()</p>
                <p>person2.display()</p>
               

                 
                
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

export default PythonConstructorspage