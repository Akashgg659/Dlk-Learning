import React from 'react'
import { Link } from 'react-router-dom'


const PythonAbstractionPage = () => {
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>
      
      Python Abstraction                                                                                                                  
    </h1> 
    </div>

   
  
    
    <div className='pt-2'>
      <p className='text-justify wid'>Abstraction is one of the key principles of Object-Oriented Programming (OOP). It is the process of hiding the implementation details of an object and exposing only the essential features to the users. Python uses abstract classes and interfaces to achieve abstraction.

    </p>  
    
    </div>

    <div className='pt-4'>
    <h3><b>Why Use Abstraction?</b></h3>
    </div>

    <div className='pt-4'>
    <h4><b>Hides Complexity</b></h4>
    </div>

    <div className='pt-2'>
      <h5 className='text-justify wid'>Users interact with objects without needing to understand the internal workings.
    </h5>  
    
   
</div>


    <div className='pt-4'>
    <h4><b>Increases Code Reusability:</b></h4>
    </div>

    <div className='pt-2'>
      <h5 className='text-justify wid'>Promotes the use of shared, abstracted behaviors across different classes..
    </h5>  
    
   
</div>



    <div className='pt-4'>
    <h4><b>Improves Code Maintenance:</b></h4>
    </div>

    <div className='pt-2'>
      <h5 className='text-justify wid'>Changes to implementation details do not affect the external interface of the class.
    </h5>  
    
   
</div>


    <div className='pt-4'>
    <h4><b>Supports Polymorphism</b></h4>
    </div>

    <div className='pt-2'>
      <h5 className='text-justify wid'>Abstract classes can define a common interface for derived classes to implement.
    </h5>  
    
   
</div>
<div className='pt-4'>
    <h3><b>Abstract Classes in Python</b></h3>
    </div>

 

    <div className='pt-2'>
      <h5 className='text-justify wid'>Python provides the abc (Abstract Base Classes) module to define abstract classes. An abstract class is a class that cannot be instantiated directly and may contain one or more abstract methods. These methods must be implemented by subclasses.
    </h5>  
    
   
</div>


<div className='pt-2'>
      <h5 className='text-justify wid'>Syntax of an Abstract Class
    </h5>  
    
   
</div>

<div className='text-justify wid pt-4 bglights pt-4 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{` from abc import ABC, abstractmethod`}
 </h5> 
 <h5>{` class AbstractClass(ABC):`}
 </h5> 
 <h5>{`  @abstractmethod`}
 </h5> 
 <h5>{` def abstract_method(self):`}

 </h5> 
 <h5>{` pass`}</h5>
</div>


</div>
   

  
 </div>

 <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
                <p>from abc import ABC, abstractmethod</p>
                <p className=''><span className='text-danger'>class</span> Animal(ABC):</p>
                <p className='text-danger'>  @abstractmethod</p>
                <p className=''>   <span className='text-danger'>def</span> make_sound(self):</p>
                <p>    pass</p>
                
                <p className=''><span className='text-danger'>class</span> Dog(Animal):</p>
                
                <p className=''>   <span className='text-danger'>def</span> make_sound(self):</p>
                <p>    return "Bark!"</p>

                <p className=''><span className='text-danger'>class</span> Cat(Animal):</p>
                
                <p className=''>   <span className='text-danger'>def</span> make_sound(self):</p>
                <p>    return "Meow!"</p>


                 <p>dog = Dog()</p>
                 <p>cat = Cat()</p>

               
                <p><span className='text-warning'>{`print`}</span>(dog.make_sound())</p>
                <p><span className='text-warning'>{`print`}</span>(cat.make_sound())</p>
               
              

                
               
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
      <h5 className='text-justify wid pt-2'>Animal is an abstract class and cannot be instantiated directly.
    </h5>  
    <h5 className='text-justify wid pt-2'>make_sound is an abstract method defined in the Animal class.
    </h5>  
    <h5 className='text-justify wid pt-2'>Subclasses Dog and Cat provide specific implementations for make_sound.
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

export default PythonAbstractionPage