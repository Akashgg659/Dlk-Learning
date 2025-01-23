import React from 'react'
import { Link } from 'react-router-dom'


const PythonClassObjectPage = () => {
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>Class and Object in Python                                                                                                                       
    </h1> 
    </div>

    <div className='pt-4'>
    <h3>What is a Class?</h3>
    </div>
  
    
    <div className='pt-2'>
      <p className='text-justify wid'>A class is a blueprint or template for creating objects. It defines the properties (attributes) and behaviors (methods) that the objects created from the class will have. A class does not contain actual data; instead, it provides the structure for the data.


    
    </p>  
    </div>

    <div>
    <h5>Syntex :</h5>
  </div>


    <div className='text-justify wid pt-4 bglights pt-4'>


   

<div className=''>
  <h5> { `class ClassName:`}
  </h5> 
</div>


 
</div>

    
    
  
       <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0">Example</h5>
       </div>
    
     
       <div class=" text-white p-3 ">
         <pre class="mb-0">
        
                 <p className=''><span className='text-danger'>class</span> Car:</p>
                 <p>  wheels = 4</p>
                 <p className=''>  <span className='text-danger'>def</span>  __init__(self, make, model, year):
                 </p>
                 <p className=' '>     self.make = make 
                 </p>
                 <p>     self.model = model</p>
                 <p>     self.year = year  </p>
                 <p>  <span className='text-danger'>def</span> describe(self):  </p>
                 <p>     {`return f"{self.year} {self.make} {self.model}"`}</p>
                 <p>  <span className='text-danger'>def</span> drive(self):  </p>
                 <p>    <span className='text-warning'> {`print`}</span>{`(f"The {self.make} {self.model} is driving.")`}</p>
              
                
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
    <h3>What is an Object?</h3>
    </div>
  
    
    <div className='pt-2'>
      <p className='text-justify wid'>An object is an instance of a class. It represents a specific real-world entity with the properties and behaviors defined by the class. When you create an object, you provide actual data for its attributes, and it can execute methods defined in its class.

    
    </p>  
    </div>

    <div>
    <h5>Creating an Object:

</h5>
  </div>


    <div className='text-justify wid pt-4 bglights pt-4'>


   

<div className=''>
   
  <p className='text-justify wid'>{`my_car = Car("Toyota", "Camry", 2020)`}</p>
  <p className='text-justify wid'>{`print(my_car.describe())   # Output: 2020 Toyota Camry`}</p>
  <p className='text-justify wid'>{`my_car.drive()   # Output: The Toyota Camry is driving.`}</p>
  
</div>


 
</div>

    
    

<div className='pt-4'>
    <h4><b>Key Differences Between Class and Object</b>

</h4>
  </div>


  <div className="container mt-4">
  <div className="p-2">
   
    <table className="table table-bordered table-hover table-striped text-center shadow">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Aspect</th>
          <th scope="col">Class</th>
          <th scope="col">Object</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Definition</td>
          <td>A blueprint or template for creating objects</td>
          <td>A specific instance of a class.</td>
        </tr>
        <tr>
          <td>Attributes</td>
          <td>Defines attributes and methods but does not store actual data</td>
          <td>Stores actual data for the attributes.</td>
        </tr>
        <tr>
          <td>Creation</td>
          <td>Defined using the <span className='text-danger'>class</span> keyword</td>
          <td>Created by instantiating the class</td>
        </tr>
        <tr>
          <td>Example</td>
          <td>class Car:</td>
          <td>{`my_car = Car("Toyota", "Camry", 2020)`}</td>
        </tr>
       
      </tbody>
    </table>
  </div>
</div>
  
       <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0">Example</h5>
       </div>
    
     
       <div class=" text-white p-3 ">
         <pre class="mb-0">
        
                 <p className=''><span className='text-danger'>class</span> Student:</p>
                 <p>  wheels = 4</p>
                 <p className=''>  <span className='text-danger'>def</span> __init__(self, name, age, grade):
                 </p>
                 <p className=' '>    self.name = name  <span className='text-primary'># Instance attribute </span>
                 </p>
                 <p>    self.age = age</p>
                 <p>    self.grade = grade </p>
                 <p>   <span className='text-danger'>def</span> introduce(self): </p>
                 <p>     {`return f"Hi, I am {self.name}, {self.age} years old, and I am in grade {self.grade}."`}</p>
                 <p>  student1 = Student("Alice", 14, 9)</p>
                 <p>  student2 = Student("Bob", 15, 10)
                 </p>
                 <p>  <span className='text-warning'>{`print`}</span>{`(student1.introduce())`}</p>
                 <p>  <span className='text-warning'>{`print`}</span>{`(student2.introduce())`}</p>
              
                
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
      <h4><b>Key Points to Remember</b>
       </h4> 

</div>
    <div className='wid text-justify pt-2'>
     


    <p><b>Class: </b>Acts as a blueprint or template.</p>
    <p><b>Class: </b>Is an instance of a class.</p>
    <p><b>Class: </b>Variables that hold data (state) for an objec</p>
    <p><b>Class: </b>Functions that define the behavior of an object.</p>
    <p>By using classes and objects, you can design programs that mirror real-world entities, making your code more intuitive, organized, and reusable.</p>
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

export default PythonClassObjectPage