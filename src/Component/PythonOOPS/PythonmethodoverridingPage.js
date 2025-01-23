import React from 'react'
import { Link } from 'react-router-dom'

const PythonmethodoverridingPage = () => {
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>
      
    Python Method Overriding                                                                                                              
    </h1> 
    </div>

   
  
    
    <div className='pt-2'>
      <p className='text-justify wid'>Method overriding in Python is a concept in object-oriented programming that allows a subclass to provide a specific implementation of a method that is already defined in its parent class. The subclass's implementation of the method overrides the implementation in the parent class.

    </p>  
    
    </div>

    <div className='pt-4'>
    <h3>Key Features of Method Overriding</h3>
    </div>

   

    <div className='pt-2'>
      <h5 className='text-justify wid'> <b>Dynamic Behavior:</b> The method to be called is determined at runtime based on the object's type.


    </h5> 
    </div>

    <div className='pt-2'>
      <h5 className='text-justify wid'><b>Inheritance:</b> Overriding requires the subclass to inherit from the parent class.

    </h5>
     
    
   
</div>

<div className='pt-2'>
      <h5 className='text-justify wid'> <b>Same Method Name:</b> The overridden method in the subclass must have the same name and parameters as in the parent class.

    </h5>
     
    
   
</div>
<div className='pt-2'>
      <h5 className='text-justify wid'><b>Super Keyword:</b> The super() function can be used to call the parent class's method in the overridden method.


    </h5>
     
    
   
</div>


<div className='pt-4'>
    <h4><b>Example of Method Overriding</b></h4>
    </div>



 <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
       
                <p className=''><span className='text-danger'>class</span> Parent:</p>
                <p className=''>   <span className='text-danger'>def</span> greet(self):</p>
               
                <p>     <span className='text-warning'>{`print`}</span>("<span className='text-success'>Hello from Parent!</span>")</p>
                <p className=''><span className='text-danger'>class</span> Child(Parent):</p>
                <p className=''>   <span className='text-danger'>def</span> greet(self):</p>
               
                <p>    <span className='text-warning'>{`print`}</span>("<span className='text-success'>Hello from Child!</span>")</p>
              
                 <p>p = Parent()</p>
                 <p>c = Child()</p>
                 <p>p.greet()</p>
                 <p>c.greet()</p>
                
               
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

  

   

    <div className=''>
      <h5 className='text-justify wid'>In the above example, the greet() method in the Child class overrides the greet() method in the Parent class.


    </h5>  
    
   
</div>


<div className='pt-4'>
    <h4><b>Using super() in Overriding</b></h4>
    </div>

<div className='pt-2'>
      <h5 className='text-justify wid'>The super() function allows you to call the parent class's method from the overridden method in the subclass
    </h5>  
    
   
</div>

<div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
       
                <p className=''><span className='text-danger'>class</span> Parent:</p>
                <p className=''>   <span className='text-danger'>def</span> greet(self):</p>
               
                <p>     <span className='text-warning'>{`print`}</span>("<span className='text-success'>Hello from Parent!</span>")</p>
                <p className=''><span className='text-danger'>class</span> Child(Parent):</p>
                
                <p className=''>   <span className='text-danger'>def</span> greet(self):</p>
                <p className='text-primary'>    # Call the parent method</p>
                <p>    <span className='text-danger'>super()</span>.greet()</p>
               
                <p>    <span className='text-warning'>{`print`}</span>("<span className='text-success'>Hello from Child!</span>")</p>
              
                 <p className='text-primary'># Creating an instance of Child</p>
                 <p>c = Child()</p>
                 <p>c.greet()</p>
                
                
               
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
    <h3><b>Rules for Method Overriding</b></h3>
    </div>

   


    

   

    <div className='pt-2'>
      <h5 className='text-justify wid'>The method name and signature in the subclass must match the method in the parent class.
    </h5>  
    
   
</div>



<div className='pt-2'>
      <h5 className='text-justify wid'>The subclass method can have additional functionality but should retain the base functionality if needed.
    </h5>  
    
   
</div>


<div className='pt-2'>
      <h5 className='text-justify wid'>Use super( ) to include parent class behavior if necessary.
      
    </h5>  
    
   
</div>

<div className='pt-4'>
    <h3><b>Method Overriding vs Method Overloading</b></h3>
    </div>

    <div className="container mt-4">
  <div className="">
   
    <table className="table table-bordered table-hover table-striped text-center shadow">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Feature</th>
          <th scope="col">Method Overriding</th>
          <th scope="col">Method Overloading (Simulated in Python)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Definition</td>
          <td>Redefining a parent class's method in the subclass</td>
          <td>Defining multiple methods with the same name but different arguments.</td>
        </tr>
        <tr>
          <td>Runtime/Compile-Time</td>
          <td>Resolved at runtime.</td>
          <td>Resolved at compile-time (Python supports only through default or variable-length arguments).</td>
        </tr>
        <tr>
          <td>Inheritance Required	</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
       
      </tbody>
    </table>
  </div>
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

export default PythonmethodoverridingPage