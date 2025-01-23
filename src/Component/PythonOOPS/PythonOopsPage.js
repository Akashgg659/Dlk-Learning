import React from 'react'
import { Link } from 'react-router-dom'


const PythonOopsPage = () => {
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>Object-Oriented Programming                                                                                                                        
    </h1> 
    </div>
    
    <div>
      <p className='text-justify wid'>Object-Oriented Programming (OOP) is an essential paradigm that uses the concept of objects, which represent real-world entities with both state and behavior. OOP allows you to model complex systems by combining data and behavior into single entities known as classes and objects. Python, a versatile programming language, fully supports OOP, making it easier to implement and understand these concepts.
    
    </p>  
    </div>

    <div className='wid text-justify pt-4'>
      <h4><b>Procedural-Oriented Programming vs. OOP</b>
       </h4> 
    </div>
    <div className='wid text-justify pt-4'>
      <h4>Procedural-Oriented Approach:
       </h4> 
    </div>

    <div className='wid text-justify pt-4'>
  <p>
  

  <b>Definition:</b>  Early programming languages (from the 1950s and 60s) follow a procedural approach, where a program is a collection of procedures or functions that execute one after the other. Data is manipulated by various functions.</p>
 
  <p>
  

  <b>Top-down approach:</b>  This approach makes code harder to maintain and scale.</p>

  <p>
  

  <b>Excessive use of global data:</b>  Multiple functions access and modify global data, leading to increased memory usage and unintended side effects.</p>

  <p>
  

  <b>Lack of focus on data:</b>   Procedural programming does not treat data as a first-class citizen and does not inherently associate data with the functions that modify it</p>



 
</div>

<div className='wid text-justify pt-4'>
      <h4>OOP Approach:
       </h4> 
    </div>

    <div className='wid text-justify pt-4'>
  <p>
  

  <b>Definition:</b>  OOP uses classes and objects to bundle data (attributes) and behavior (methods) together. In OOP, real-world entities like "student", "employee", or "car" are modeled as objects that combine attributes (data) and behaviors (functions).
</p>

 
</div>
<div className='d-flex justify-content-center'>
<img src='/images/op4.jpg' alt='img' className='img-fluid' ></img>

</div>

<div className='wid text-justify pt-4'>
      <h4><b>Key Concepts of OOP in Python</b>
       </h4> 

</div>
<div className='wid text-justify pt-2'>
      <h4><b>class</b>
       </h4> 

</div>
    <div className='wid text-justify pt-2'>
     


    <p>A class is a blueprint for creating objects (instances). It defines the attributes (state) and methods (behavior) that the objects of that class will have.</p>



   
    </div>
    
    
  
       <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0">Example</h5>
       </div>
    
     
       <div class=" text-white p-3 ">
         <pre class="mb-0">
        
                 <p className=''><span className='text-danger'>class</span> Car:</p>
                 <p className=''> def __init__(self, make, model, year):
                 </p>
                 <p className=' '>   self.make = make  <span className='text-primary'># Attribute </span>
                 </p>
                 <p>   self.model = model</p>
                 <p>   self.year = year  <span className='text-primary'># Attribute </span></p>
                 <p>  <span className='text-danger'>def</span> drive(self):  <span className='text-primary'># Method (Behavior)</span></p>
                 <p>    <span className='text-warning'>{`print`}</span>{`(f"The {self.year} {self.make} {self.model} is driving.")`}</p>
              
                
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
      <h4><b>Object:</b>
       </h4> 

</div>
    <div className='wid text-justify pt-1'>
     


    <p>An object is an instance of a class. Once a class is defined, you can create objects based on that class.</p>


   
    </div>
    
    
  
       <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0">Example</h5>
       </div>
    
     
       <div class=" text-white p-3 ">
         <pre class="mb-0">
        
                 <p className=''>my_car = Car("Toyota", "Camry", 2020)</p>
                 <p className=''>my_car.<span className='text-danger'>drive()</span>  <span className='text-primary'># Output: The 2020 Toyota Camry is driving</span>
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




    <div className='wid text-justify pt-2'>
      <h4><b>Attributes:</b>
       </h4> 

</div>
    <div className='wid text-justify pt-2'>
     


    <p>Attributes are variables that belong to an object and store the object's state or data. These are typically defined inside the class using the <span className='text-danger'>__init__()</span> method.</p>

    <p>Example attributes: name, age, salary, etc
    </p>

   
    </div>
    

    <div className='wid text-justify pt-2'>
      <h4><b>Methods:</b>
       </h4> 

</div>
    <div className='wid text-justify pt-2'>
     


    <p><b>Methods</b> are functions defined inside a class. They represent the behavior of objects. They can access and modify object attributes.</p>
    <p>Example methods: <span className='text-danger'>speak()</span>, <span className='text-danger'>drive()</span>, <span className='text-danger'>calculate_salary()</span>.
    </p>

   
    </div>


    <div className='wid text-justify pt-2'>
      <h4><b>Encapsulation:</b>
       </h4> 

</div>
    <div className='wid text-justify pt-2'>
     


    <p><b>Encapsulation</b> is the concept of bundling the data (attributes) and methods (functions) that operate on the data into a single unit (class).</p>
    <p>It also restricts direct access to some of the object's components, which is done through the use of private attributes or methods (using <span className='text-danger'>__</span> before the variable or method name).
    </p>

   
    </div>


    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''><span className='text-danger'>class</span> Employee:</p>
                <p className=''> <span className='text-danger'>def</span> __init__(self, name, salary):
                </p>
                <p className=' '>  self.__salary = salary  <span className='text-primary'># Private attribute </span>
                </p>
               
         
                <p>  <span className='text-danger'>def</span> get_salary(self):  </p>
                <p>    {` return self.__salary`}  <span className='text-primary'># Method to access the private attribute</span></p>
             
               
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
      <h4><b>Inheritance:</b>
       </h4> 

</div>
    <div className='wid text-justify pt-2'>
     


    <p><b>Inheritance</b> allows one class to inherit the attributes and methods of another class. The new class (child class) can extend or modify the functionality of the existing class (parent class).
    </p>
    

   
    </div>


    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''><span className='text-danger'>class</span> Animal:</p>
                <p className=''> <span className='text-danger'>def</span> speak(self):
                </p>
                <p> <span className='text-warning'>   print</span>(<span className='text-success'>"Animal speaks"</span>)</p>
                <p className=''><span className='text-danger'>class</span> Dog(Animal):</p>
                <p className=''> <span className='text-danger'>def</span> speak(self):
                </p>
                <p> <span className='text-warning'>   print</span>(<span className='text-success'>"Dog barks"</span>)</p>
                

                <p className=' '>dog = <span className=''>Dog()</span>
                </p>
                <p>dog.speak()</p>
               
         
             
               
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
      <h4><b>Polymorphism:</b>
       </h4> 

</div>
    <div className='wid text-justify pt-2'>
     


    <p><b>Polymorphism</b>  allows objects of different classes to be treated as objects of a common base class. It also allows methods to have the same name but behave differently based on the object calling them.</p>
  
   
    </div>


    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''><span className='text-danger'>class</span> Bird:</p>
                <p className=''> <span className='text-danger'>def</span> speak(self):
                </p>
                <p> <span className='text-warning'>   print</span>(<span className='text-success'>"Bird chirps"</span>)</p>
                <p className=''><span className='text-danger'>class</span> Dog:</p>
                <p className=''> <span className='text-danger'>def</span> speak(self):
                </p>
                <p> <span className='text-warning'>   print</span>(<span className='text-success'>"Dog barks"</span>)</p>
                <p className=''> <span className='text-danger'>def</span> animal_sound(animal):
                </p>
                <p>  animal.speak()</p>
                <p className=' '>dog = <span className=''>Dog()</span>
                </p>
                <p>bird = Bird()</p>
                <p>animal_sound(dog)</p>
                <p>animal_sound(bird)</p>
               
         
             
               
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
      <h4><b>Principles of OOP</b>
       </h4> 

</div>
    <div className='wid text-justify pt-2'>
     


    
    <p><b>Class:</b>Defines the structure of the objects. It includes both data (attributes) and functions (methods).
    </p>
    <p><b>Object:</b>An instance of a class that holds data and can call its methods.
    </p>
    <p><b>Encapsulation:</b>Bundling data and methods in a class and restricting access to some components.
    </p>
    <p><b>Inheritance:</b>A class can inherit attributes and methods from another class.
    </p>
    <p><b>Polymorphism:</b>Methods can behave differently based on the object calling them.

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

export default PythonOopsPage