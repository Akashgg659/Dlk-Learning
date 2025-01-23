import React from 'react'
import { Link } from 'react-router-dom'


const PythonClassAttributePage = () => {
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>Class Attributes in Python                                                                                                                      
    </h1> 
    </div>

   
  
    
    <div className='pt-2'>
      <p className='text-justify wid'>Class attributes are variables that are shared among all instances of a class. These attributes are defined at the class level and are the same for every object created from the class, unless explicitly overridden

    
    </p>  
    </div>

    <div className='pt-4'>
    <h3>Defining Class Attributes</h3>
    </div>

    <div className='pt-2'>
      <p className='text-justify wid'>Class attributes are declared directly inside the class definition, outside of any methods. They are typically used to store data or settings that are common to all objects of the class.
    
    </p>  
    </div>

    <div>
    <h5>Syntex :</h5>
  </div>


    <div className='text-justify wid pt-4 bglights pt-4'>


   

<div className='text-dark'>
  <h5> { `class ClassName:`}
  </h5> 
  <h5>    { `class_attribute = value`}
  </h5> 
</div>


 
</div>

    
    
  
       <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow ">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0 text-dark">Example</h5>
       </div>
    
     
       <div class=" p-3 bg-white ">
         <pre class="mb-0 ">
        
                 <p className=''><span className='text-danger'>class</span> Car:</p>
                 <p>  wheels = 4</p>
                 <p className=''>  <span className='text-danger'>def</span>  __init__(self, make, model):
                 </p>
                 <p className=' '>     self.make = make 
                 </p>
                 <p>     self.model = model</p>
                 <p>car1 = Car(<span className='text-success'>"Toyota", "Camry"</span>)</p>
                 <p>car2 = Car(<span className='text-success'>"Honda", "Civic"</span>)</p>
                 <p><span className='text-warning'>{`print`}</span>(car1.wheels) <span className='text-primary'># Output: 4</span> </p>
                 <p><span className='text-warning'>{`print`}</span>(car2.wheels) <span className='text-primary'># Output: 4</span>  </p>
                 <p><span className='text-warning'>{`print`}</span>(car1.make)  <span className='text-primary'># Output: Toyota</span> </p>
                 <p><span className='text-warning'>{`print`}</span>(car2.model) <span className='text-primary'># Output: Civic</span> </p>
                 
                
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
    <h4><b>Difference Between Class Attributes and Instance Attributes</b>

</h4>
  </div>


  <div className="container mt-4">
  <div className="p-2">
   
    <table className="table table-bordered table-hover table-striped text-center shadow">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Aspect</th>
          <th scope="col">Class Attribute</th>
          <th scope="col">Class Attribute</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Scope</td>
          <td>Shared across all instances of the class.</td>
          <td>Specific to each object/instance.</td>
        </tr>
        <tr>
          <td>Definition</td>
          <td>Defined directly in the class body.</td>
          <td>Defined inside the __init__ or other methods.</td>
        </tr>
        <tr>
          <td>Access</td>
          <td>Accessed using the class name or an instance.</td>
          <td>Accessed only through a specific instance.</td>
        </tr>
        <tr>
          <td>Modification</td>
          <td>Changing the value affects all instances (if not overridden).</td>
          <td>Changing the value affects only the specific instance.</td>
        </tr>
       
      </tbody>
    </table>
  </div>
</div>



    <div className='pt-4'>
    <h3><b>Modifying Class Attributes</b></h3>
    </div>
  
    <div className='pt-4'>
    <h5><b>Accessing and Modifying via the Class</b>

</h5>
  </div>

    <div className='pt-2'>
      <p className='text-justify wid'>You can modify the class attribute using the class name. This change will reflect across all instances.

    
    </p>  
    </div>

   
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 bg-white">
        <pre class="mb-0">
       
                <p className=''><span className='text-danger'>class</span> Car:</p>
                <p>  wheels = 4</p>
               
                <p className=' '>Car.wheels = <span className='text-danger'>6</span>
                </p>
                <p><span className='text-warning'>{`print`}</span>(Car.wheels)  <span className='text-primary'># Output: 6</span></p>
               
               
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


   
  
    <div>
    <h5><b>Accessing and Modifying via an Instance</b>

</h5>
  </div>

    <div className='pt-2'>
      <p className='text-justify wid'>If you modify the attribute through an instance, it will create a new instance attribute for that object, leaving the class attribute unchanged.

    
    </p>  
    </div>

   
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 bg-white">
        <pre class="mb-0">
       
                <p className=''>car1 = Car()</p>
                <p>car2 = Car()</p>
                <p>car1.wheels = <span className='text-danger'>8</span></p>
                 <p><span className='text-warning'>{`print`}</span>(car1.wheels)   <span className='text-primary'># Output: 8</span></p>
                 <p><span className='text-warning'>{`print`}</span>(car2.wheels)   <span className='text-primary'># Output: 6</span></p>
               
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
    <h4><b>Use Cases for Class Attributes</b>

</h4>
  </div>

    <div className='wid text-justify pt-2'>
     


    <p><b>Default Values: </b> Use class attributes to set default values for properties that are common across all instances.</p>
    
    </div>
    
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 bg-white">
        <pre class="mb-0">
       
                <p className=''><span className='text-danger'>class</span> Person:</p>
                <p>   species = <span className='text-success'>"Human"</span></p>
                <p><span className='text-warning'>{`print`}</span>(Person.species)  <span className='text-primary'># Output: Human</span></p>
                
               
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

  

  


    <div className='wid text-justify pt-2'>
     


    <p><b>Counters or Trackers: </b>  Use class attributes to track the number of objects created.</p>
    </div>
    
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 bg-white">
        <pre class="mb-0">
       
                <p className=''><span className='text-danger'>class</span> Counter:</p>
                <p>   count = 0 <span className='text-primary'> # Class attribute to count objects</span></p>
                <p><span className='text-danger'>def</span> __init__(self):</p>
                <p>   Counter.count += 1</p>
                <p>obj1 = Counter()</p>
                <p>obj2 = Counter()</p>
                <p><span className='text-warning'>print</span>(Counter.count)  <span className='text-primary'># Output: 2</span></p>
               
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



  


    <div className='wid text-justify pt-2'>
     


    <p><b>Global Settings: </b> Use class attributes for settings or configuration shared by all instances.</p>
    </div>
    
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 bg-white">
        <pre class="mb-0">
       
                <p className=''><span className='text-danger'>class</span> AppConfig:</p>
                <p>   debug_mode = True
                </p>
                <p><span className='text-warning'>{`print`}</span>(AppConfig.debug_mode)  <span className='text-primary'># Output: True</span></p>
                
               
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
    <h4><b>Key Points</b>

</h4>
  </div>

  
  <div className='wid text-justify pt-2'>
     


     <p>Class attributes are shared across all instances.</p>
     <p>They are defined in the class body and are accessible through both the class name and instances.</p>
     <p>Modifying a class attribute through an instance creates a new instance-specific attribute, leaving the class attribute unchanged.</p>
     <p>Use class attributes for shared data or behaviors common to all instances.</p>
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

export default PythonClassAttributePage