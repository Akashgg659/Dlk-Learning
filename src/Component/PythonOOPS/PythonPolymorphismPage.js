import React from 'react'
import { Link } from 'react-router-dom'


const PythonPolymorphismPage = () => {
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>
      
      Python Polymorphism                                                                                                                 
    </h1> 
    </div>

   
  
    
    <div className='pt-2'>
      <p className='text-justify wid'>Polymorphism is one of the core principles of object-oriented programming (OOP) and refers to the ability of objects to take on multiple forms. In Python, polymorphism allows methods to be shared between different classes, even when the implementations of these methods are unique to each class.


    </p>  
    <p className='text-justify wid'>This concept enables a single function or method to work with objects of different classes, enhancing code flexibility and reuse.

    </p>
    
    </div>

    <div className='pt-4'>
    <h3><b>Key Features of Polymorphism</b></h3>
    </div>

   

    <div className='pt-2'>
      <h4 className='text-justify wid'><b>Dynamic Method Binding:</b></h4> 
      <p className='text-justify wid'>The method called is determined at runtime based on the object type.


</p>


   
</div>

<div className='pt-2'>
      <h4 className='text-justify wid'><b>Method Overriding:</b></h4> 
      <p className='text-justify wid'>A subclass can provide its own specific implementation of a method defined in the parent class.

</p>


   
</div>

<div className='pt-2'>
      <h4 className='text-justify wid'><b>Diverse Functionality with a Common Interface:</b></h4> 
      <p className='text-justify wid'>Methods with the same name across different classes can perform tasks based on the class they belong to.



</p>


   
</div>



<div className='m-3 '>
    <img className="img-fluid " src='/images/poly.webp' alt=""  />
    </div>

    <div className='pt-4'>
    <h3><b>Types of Polymorphism in Python</b></h3>
    </div>


    <div className='pt-2'>
      <h4 className='text-justify wid'><b>1. Compile-Time Polymorphism (Method Overloading)</b></h4> 
      <p className='text-justify wid'>Python does not support method overloading like some other programming languages (e.g., Java). Instead, it allows default arguments or variable-length arguments to achieve similar behavior.

</p>


   
</div>



 <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
       
                <p className=''><span className='text-danger'>class</span> MathOperations:</p>
                <p className=''>   <span className='text-danger'>def</span> add(self, a, b=0, c=0):</p>
               
                <p>     return a + b + c</p>
                <p>obj = MathOperations()</p>
                <p><span className='text-warning'>     print</span>(obj.add(5))  </p>
                <p><span className='text-warning'>     print</span>(obj.add(5, 10))</p>
               <p><span className='text-warning'>     print</span>(obj.add(5, 10, 15))</p>
              

                
               
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
      <h4 className='text-justify wid'><b>2. Runtime Polymorphism (Method Overriding)</b></h4> 
      <p className='text-justify wid'>Subclasses override a method from the parent class to provide specific functionality.

</p>


   
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
               
                <p><span className='text-warning'>    {`print`}</span>("<span className='text-success'>Animal makes a sound</span>")</p>
                <p className=''><span className='text-danger'>class</span> Dog(Animal):</p>
                <p className=''>   <span className='text-danger'>def</span> speak(self):</p>
               
                <p><span className='text-warning'>    {`print`}</span>("<span className='text-success'>Dog barks</span>")</p>
                <p className=''><span className='text-danger'>class</span> Cat(Animal):</p>
                <p className=''>   <span className='text-danger'>def</span> speak(self):</p>
               
                <p><span className='text-warning'>    {`print`}</span>("<span className='text-success'>Cat meows</span>")</p>

                
                <p className=''>   <span className='text-danger'>def</span> animal_sound(animal):</p>
               
                <p>    animal.speak()</p>
                <p>dog = Dog()</p>
                <p>cat = Cat()</p>
                <p>animal_sound(dog)</p>
                <p>animal_sound(cat)</p>

               
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
      <h4 className='text-justify wid'><b>Polymorphism with Functions and Objects</b></h4> 
      <p className='text-justify wid'>Python functions can accept objects of different classes and invoke methods dynamically, without needing to know the object's specific type.
</p>


   
</div>
   


 <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
       
                <p className=''><span className='text-danger'>class</span> Bird:</p>
                <p className=''>   <span className='text-danger'>def</span> fly(self):</p>
               
                <p><span className='text-warning'>    {`print`}</span>("<span className='text-success'>Bird can fly</span>")</p>
                <p className=''><span className='text-danger'>class</span> Fish:</p>
                <p className=''>   <span className='text-danger'>def</span> speak(self):</p>
               
                <p><span className='text-warning'>    {`print`}</span>("<span className='text-success'>Fish cannot fly</span>")</p>
               
                <p className=''>   <span className='text-danger'>def</span> flying_ability(creature):</p>
               
                  <p>     creature.fly()</p>

                
                
               
                <p>sparrow = Bird()</p>
                <p>salmon = Fish()</p>
                <p>flying_ability(sparrow)</p>
                <p>flying_ability(salmon)</p>
               

               
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
    <h3><b>Benefits of Polymorphism</b></h3>
    </div>




    

   

    <div className='pt-2'>
      <h5 className='text-justify wid'><b>Flexibility: </b> Code can work with objects of different types seamlessly
    </h5>  
    <h5 className='text-justify wid'><b>Extensibility: </b> New functionality can be added without modifying existing code.
    </h5> 
    <h5 className='text-justify wid'><b>Code Reusability: </b> Promotes code that is easier to read, manage, and extend.


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

export default PythonPolymorphismPage