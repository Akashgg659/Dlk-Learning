import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CodeContext } from '../CodeContext/CodeContext'




const PythonInterfacesPage = () => {

  const {setSelectedCode} = useContext(CodeContext)
  const navigate = useNavigate()
  const example = [
   {

    id: 1,
    title: "interfaces",
    code:  `from abc import ABC, abstractmethod

    class Animal(ABC):
        @abstractmethod
        def sound(self):
            """Define the sound the animal makes."""
            pass
    
    
    class Dog(Animal):
        def sound(self):
            return "Woof!"
    
    
    class Cat(Animal):
        def sound(self):
            return "Meow!"
    
    
    dog = Dog()
    cat = Cat()
    
    print("Dog sound:", dog.sound())  
    print("Cat sound:", cat.sound())  `
    
    

   }
    

  ]


  const handleRun = (code) =>{
    setSelectedCode(code)
    navigate('/compiler')
  }
 




  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>
      Python Interfaces                                                                                                               
    </h1> 
    </div>

   
  
    
    <div className='pt-2'>
      <p className='text-justify wid'>In Python, interfaces can be implemented using abstract base classes (ABCs) from the abc module. An interface is a blueprint for classes; it defines methods that must be implemented in any class that inherits from it. Python does not have a built-in interface keyword like some other languages, but abstract base classes provide similar functionality.


    </p>  
    
    </div>

    <div>
        <h3>Key Features of Interfaces in Python</h3>
    </div>

    <div className='pt-2'>
      <h5 className='text-justify wid pt-2'>Defines methods that derived classes must implement.
    </h5>  
    <h5 className='text-justify wid pt-2'>Prevents instantiation of the abstract class itself.
    </h5>  
    <h5 className='text-justify wid pt-2'>Prevents instantiation of the abstract class itself.
    </h5>  
    
   
</div>


<div className='pt-4'>
        <h3>How to Define and Use an Interface in Python</h3>
    </div>

    <div className='pt-2'>
        <h5><b>Step 1: Import the abc Module</b></h5>
      <h5 className='text-justify wid pt-2'>Use the ABC class and the @abstractmethod decorator.
    </h5>  
    <h5><b>Step 1: Import the abc Module</b></h5>
      <h5 className='text-justify wid pt-2'>Define a class that inherits from ABC and contains abstract methods.
    </h5> 
    <h5><b>Step 1: Import the abc Module</b></h5>
      <h5 className='text-justify wid pt-2'>Subclasses must implement all the abstract methods; otherwise, they cannot be instantiated.
    </h5>  
    
   
</div>

 





 <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
                <p>from abc import ABC, abstractmethod</p>
                 <p><span className='text-danger'>  class</span> Animal(ABC):</p>
                 <p className='text-danger'>    @abstractmethod</p>
                <p className=''><span className='text-danger'>    def</span> sound(self):</p>
                <p className='text-success'>        """Define the sound the animal makes."""</p>
                <p>        pass</p>

                <p><span className='text-danger'>  class</span> Dog(Animal):</p>
                
                <p className=''><span className='text-danger'>    def</span> sound(self):</p>
               
                <p>       return <span className='text-success'>"Woof!"</span></p>

                <p><span className='text-danger'>  class</span> cow(Animal):</p>
                
                <p className=''><span className='text-danger'>    def</span> sound(self):</p>
               
                <p>       return <span className='text-success'>"Meow!"</span></p>



                <p>  dog = Dog()</p>
                <p className=''>  cat = Cat()</p>
                <p>  self.__balance = initial_balance </p>
                
                <p className=''>  print("Dog sound:", dog.sound())</p>
                
                <p className=''>  print("Cat sound:", cat.sound())</p>
                
                
               
        </pre>
      </div>
      
     

      

   
     
      <div class="text-start bg-light">
        <div className='p-2'>
          {example.map((example) =>(
           <button 
           class="btn btn-primary px-2 py-2" 
           onClick={() => handleRun(example.code)}
         >
           Try it Yourself
         </button>

          )

          )}
       
        </div>
        
      </div>
    </div>
   
   
   
   </div>


   

    <div className='pt-2'>
      <h5 className='text-justify wid pt-2'>This example is concise and demonstrates the concept of enforcing a design contract using an interface-like approach.
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

export default PythonInterfacesPage