import React from 'react'
import { Link } from 'react-router-dom'


const PythonDynamicBindingPage = () => {
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>
      
      Python Dynamic Binding                                                                                                                 
    </h1> 
    </div>

   
  
    
    <div className='pt-2'>
      <p className='text-justify wid'>Dynamic binding (also known as late binding) refers to the process of linking a method call to its implementation at runtime rather than compile-time. In Python, dynamic binding is a key feature of its object-oriented programming (OOP) model, and it allows the program to decide which method or function to invoke based on the object at runtime.

    </p>  
    
    </div>


    
    <div className='pt-4'>
    <h3>Key Features of Dynamic Binding in Python</h3>
    </div>

    <div className='pt-4'>
    <h4><b>Polymorphism</b></h4>
    </div>

    <div className='pt-2'>
      <h5 className='text-justify wid'>Dynamic binding is closely related to polymorphism, where the method to be executed depends on the runtime type of the object.
    </h5>  
    
    
   
</div>

<div className='pt-4'>
    <h4><b>Method Overriding:</b></h4>
    </div>

    <div className='pt-2'>
      <h5 className='text-justify wid'>It supports method overriding, where a child class provides a specific implementation for a method already defined in its parent class. The overridden method is invoked at runtime
    </h5>  
    
    
   
</div>
<div className='pt-4'>
    <h4><b>Flexibility and Extensibility</b></h4>
    </div>

    <div className='pt-2'>
      <h5 className='text-justify wid'>Dynamic binding allows programs to be more flexible and extensible by enabling late decision-making regarding method execution.
    </h5>  
    
    
   
</div>

<div className='pt-4'>
    <h3>How Dynamic Binding Works in Python</h3>
    </div>

    <div className='pt-2'>
      <h5 className='text-justify wid'>1. Looks for the method in the class of the object. </h5>  
      <h5 className='text-justify wid'>2. If not found, it searches in the parent classes (following the method resolution order (MRO)).
    </h5>  
    
    <h5 className='text-justify wid'>3. Executes the method found during this process. </h5> 
   

    <h5 className='text-justify wid'>This decision is made at runtime, not at compile time.. </h5>
    
    
   
</div>
   
<div className='pt-4'>
    <h4><b>Example: Dynamic Binding in Method Overriding</b></h4>
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
               
                 <p><span className='text-warning'>    {`print`}</span>("<span className='text-success'>Hello from Parent!</span>")</p>
               
              
                <p className=''><span className='text-danger'>class</span> Child(Parent):</p>
                <p className=''>   <span className='text-danger'>def</span> greet(self):</p>
               
                <p><span className='text-warning'>    {`print`}</span>("<span className='text-success'>Hello from Child!</span>")</p>
               
                <p>obj1 = Parent()</p>
                <p>obj2 = Child()</p>
                <p>obj1.greet() </p>
                <p>obj2.greet()</p>
                
               
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
      <h5 className='text-justify wid'>obj1.greet() binds to the greet method in the Parent class.
    </h5>  
    <h5 className='text-justify wid'>obj2.greet() binds to the overridden greet method in the Child class at runtime.
    </h5> 
    
   
</div>

<div className='pt-4'>
    <h4><b>Polymorphism with Dynamic Binding</b></h4>
    </div>
    

   
   

    <div className='pt-2'>
      <h5 className='text-justify wid'>Dynamic binding enables polymorphism, where the same method name can behave differently based on the object.
    </h5>  
    
   
</div>


<div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
       
                <p className=''><span className='text-danger'>class</span> Animal:</p>
                <p className=''>   <span className='text-danger'>def</span> speak(self):</p>
               
                 <p><span className='text-warning'>    {`print`}</span>("<span className='text-success'>Animal speaks!</span>")</p>
               
              
                <p className=''><span className='text-danger'>class</span> Dog(Animal):</p>
                <p className=''>   <span className='text-danger'>def</span> greet(self):</p>
               
                <p><span className='text-warning'>    {`print`}</span>("<span className='text-success'>Bark!</span>")</p>
                <p className=''><span className='text-danger'>class</span> Cat(Animal):</p>
                <p className=''>   <span className='text-danger'>def</span> greet(self):</p>
               
                <p><span className='text-warning'>    {`print`}</span>("<span className='text-success'>Meow!</span>")</p>
               
               
                <p>animals = [Dog(), Cat(), Animal()]</p>
                <p>for animal in animals:</p>
                <p>   animal.speak() </p>
                
                
               
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
      <h5 className='text-justify wid'>The speak method is dynamically bound to the implementation in the respective class of each object (Dog, Cat, Animal) at runtime.
    </h5>  
    
   
</div>



<div className='pt-4'>
    <h4><b>Dynamic Binding in Functions</b></h4>
    </div>
    

   
   

    <div className='pt-2'>
      <h5 className='text-justify wid'>Dynamic binding is not limited to methods in classes but can also apply to functions passed as arguments
    </h5>  
    
   
</div>


<div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
       
                <p className=''>   <span className='text-danger'>def</span> execute(func)</p>
                <p>    func()</p>
               
                 <p><span className='text-warning'>    {`print`}</span>("<span className='text-success'>Animal speaks!</span>")</p>
               
              
                <p className=''><span className='text-danger'>class</span> say_hello()</p>
               
               
                <p><span className='text-warning'>    {`print`}</span>("<span className='text-success'>Hello!</span>")</p>
                <p className=''><span className='text-danger'>class</span> say_goodbye():</p>
                
               
                <p><span className='text-warning'>    {`print`}</span>("<span className='text-success'>Goodbye!</span>")</p>
               
               
                <p>execute(say_hello) </p>
                <p>execute(say_goodbye)</p>
                
                
                
               
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
      <h5 className='text-justify wid'>The execute function dynamically binds to the function passed as an argument at runtime.
    </h5>  
    
   
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

export default PythonDynamicBindingPage