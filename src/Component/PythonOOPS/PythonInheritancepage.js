import React from 'react'
import { Link } from 'react-router-dom'


const PythonInheritancepage = () => {
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>
      
      Python Inheritance                                                                                                                  
    </h1> 
    </div>

   
  
    
    <div className='pt-2'>
      <p className='text-justify wid'>Inheritance is an essential feature of object-oriented programming that enables one class (child class) to inherit the attributes and methods of another class (parent class). This provides a powerful way to reuse existing code, reduce redundancy, and establish logical relationships between classes.


    </p>  
    
    </div>

    <div className='pt-4'>
    <h3><b>Creating a Parent Class</b></h3>
    </div>

   

    <div className='pt-2'>
      <h5 className='text-justify wid'>A <b>parent class</b> defines the general structure and behavior, which other classes can inherit. It is defined using the standard Python class keyword.
    </h5>  
    
   
</div>

<div className='pt-2'>
      <h5 className='text-justify wid'>syntax
    </h5>  
    
   
</div>

<div className='text-justify wid pt-4 bglights pt-4 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  class ParentClass:`}
 </h5> 
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
       
                <p className=''><span className='text-danger'>class</span> Animal:</p>
                <p className=''>   <span className='text-danger'>def</span> sound(self):</p>
               
                <p><span className='text-warning'>{`print`}</span>("<span className='text-success'>This animal makes a sound.</span>")</p>
               
              

                
               
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
    <h3><b>Creating a Child Class</b></h3>
    </div>

   

    <div className='pt-2'>
      <h5 className='text-justify wid'>A <b>child class</b> inherits from a parent class. The parent class name is passed in parentheses when defining the child class.
    </h5>  
    
   
</div>


<div className='pt-2'>
      <h5 className='text-justify wid'>syntax
    </h5>  
    
   
</div>


<div className='text-justify wid pt-4 bglights pt-4 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  class ParentClass: `}
 </h5> 
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
       
                <p className=''><span className='text-danger'>class</span> class ParentClass:</p>
                <p className=''>   <span className='text-danger'>def</span> sound(self):</p>
               
                <p><span className='text-warning'>{`print`}</span>("<span className='text-success'>The dog barks</span>")</p>
               
              

                
               
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
    <h3><b>Types of Inheritance in Python</b></h3>
    </div>

    <div className='m-3 justify-content-start'>
    <img className="img-fluid " src='/images/in1.webp' alt=""  />
    </div>



    <div className='pt-4'>
    <h3><b>Single Inheritance:</b></h3>
    </div>

   

    <div className='pt-2'>
      <h5 className='text-justify wid'>A child class inherits from one parent class.
    </h5>  
    
   
</div>






 <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
       
                <p className=''><span className='text-danger'>class</span>  Parent:</p>
                <p className=''>   <span className='text-danger'>def</span>  greet(self):</p>
               
                <p><span className='text-warning'>{`print`}</span>("<span className='text-success'>Hello from the parent!</span>")</p>
               
                
                <p className=''><span className='text-danger'>class</span>  Child(Parent):</p>
                <p className=''>   <span className='text-danger'>def</span>  greet_child(self):</p>
               
                <p><span className='text-warning'>{`print`}</span>("<span className='text-success'>Hello from the child!</span>")</p>

                
               
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
    <h3><b>Multiple Inheritance:</b></h3>
    </div>

   

    <div className='pt-2'>
      <h5 className='text-justify wid'>A child class inherits from more than one parent class
    </h5>  
    
   
</div>






<div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
       
                <p className=''><span className='text-danger'>class</span>  Parent1:</p>
                <p className=''>   <span className='text-danger'>def</span>  greet1(self):</p>
               
                <p><span className='text-warning'>{`print`}</span>("<span className='text-success'>Hello from the parent!</span>")</p>
                <p className=''><span className='text-danger'>class</span>  Parent2:</p>
                <p className=''>   <span className='text-danger'>def</span>  greet2(self):</p>
               
                <p><span className='text-warning'>{`print`}</span>("<span className='text-success'>Hello from the parent2!</span>")</p>
                
                <p className=''><span className='text-danger'>class</span>  Child(Parent1, Parent2):</p>
                <p className=''>   <span className='text-danger'>def</span>  greet_child(self):</p>
               
                <p><span className='text-warning'>{`print`}</span>("<span className='text-success'>Hello from the child!</span>")</p>

                
               
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
    <h3><b>Multilevel Inheritance:</b></h3>
    </div>

   

    <div className='pt-2'>
      <h5 className='text-justify wid'>A child class inherits from a parent class, which in turn inherits from another class.
    </h5>  
    
   
</div>






<div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
       
                <p className=''><span className='text-danger'>class</span>  Grandparent:</p>
                <p className=''>   <span className='text-danger'>def</span>  greet_grandparent(self):</p>
               
                <p><span className='text-warning'>{`print`}</span>("<span className='text-success'>Hello from the grandparent!</span>")</p>
                <p className=''><span className='text-danger'>class</span>  Parent(Grandparent):</p>
                <p className=''>   <span className='text-danger'>def</span>   def greet_parent(self):</p>
               
                <p><span className='text-warning'>{`print`}</span>("<span className='text-success'>Hello from the parent!</span>")</p>
                
                <p className=''><span className='text-danger'>class</span>  Child(Parent):</p>
                <p className=''>   <span className='text-danger'>def</span>  greet_child(self):</p>
               
                <p><span className='text-warning'>{`print`}</span>("<span className='text-success'>Hello from the child!</span>")</p>

                
               
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
    <h3><b>Hierarchical Inheritance:</b></h3>
    </div>

   

    <div className='pt-2'>
      <h5 className='text-justify wid'>Multiple child classes inherit from a single parent class.
    </h5>  
    
   
</div>






 <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
       
                <p className=''><span className='text-danger'>class</span> class Parent:</p>
                <p className=''>   <span className='text-danger'>def</span> greet(self):</p>
               
                <p><span className='text-warning'>{`print`}</span>("<span className='text-success'>Hello from the parent!</span>")</p>
                <p className=''><span className='text-danger'>class</span> Child1(Parent):
                </p>
                <p className=''>    pass</p>
                <p className=''><span className='text-danger'>class</span> Child2(Parent)</p>
                <p className=''>    pass</p>

                
               
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
    <h3><b>Hybrid Inheritance:</b></h3>
    </div>

   

    <div className='pt-2'>
      <h5 className='text-justify wid'>A combination of two or more types of inheritance.
    </h5>  
    
   
</div>






<div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark"><b>Example:</b> Single Inheritance:</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
       
                <p className=''><span className='text-danger'>class</span>  Vehicle:</p>
                <p className=''>   <span className='text-danger'>def</span>  drive(self):</p>
               
                <p><span className='text-warning'>{`print`}</span>("<span className='text-success'>The vehicle is driving.</span>")</p>
                <p className=''><span className='text-danger'>class</span>  Car(Vehicle):</p>
                <p className=''>   <span className='text-danger'>def</span>   drive(self):</p>
               
                <p><span className='text-warning'>{`print`}</span>("<span className='text-success'>The car is driving</span>")</p>
                
                <p className=''>my_car = Car()</p>
                <p className=''>my_car.drive()</p>
               
                <p><span className='text-warning'>{`print`}</span>("<span className='text-success'>Hello from the child!</span>")</p>

                
               
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


   <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark"><b>Example:</b> Multiple Inheritance:</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
       
                <p className=''><span className='text-danger'>class</span>  A:</p>
                <p className=''>   <span className='text-danger'>def</span>  method_a(self):</p>
               
                <p><span className='text-warning'>{`print`}</span>("<span className='text-success'>Method from class A.</span>")</p>
                <p className=''><span className='text-danger'>class</span>  B:</p>
                <p className=''>   <span className='text-danger'>def</span>  method_b(self):</p>
               
                <p><span className='text-warning'>{`print`}</span>("<span className='text-success'>Method from class B.</span>")</p>
                <p className=''><span className='text-danger'>class</span>  C:</p>
                <p className=''>   <span className='text-danger'>def</span>  method_c(self):</p>
               
                <p><span className='text-warning'>{`print`}</span>("<span className='text-success'>Method from class C.</span>")</p>
               
                <p><span className='text-warning'>{`print`}</span>("<span className='text-success'>The car is driving</span>")</p>
                
                <p className=''>obj = C()</p>
                <p className=''>obj.method_a()</p>
                <p>obj.method_b() </p>
               
                <p>{`obj.method_c()`}</p>

                
               
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
    <h3><b>Method Resolution Order (MRO)</b></h3>
    </div>

   

    <div className='pt-2'>
      <h5 className='text-justify wid'>When a class inherits from multiple classes, Python determines the method to call using the MRO. It follows the Depth-First, Left-to-Right approach.
    </h5>  
    
   
</div>

<div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark"><b>Example:</b> Single Inheritance:</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
       
                
               
                <p><span className='text-warning'>{`print`}</span>(ClassName.mro())</p>

                
               
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
    <h3><b>Advantages of Inheritance</b></h3>
    </div>

   

     


<div className='pt-2'>
      <p className='text-justify wid'>Promotes code reuse.
    </p>  
    <p className='text-justify wid'>Establishes relationships between classes.
    </p> 
    <p className='text-justify wid'>Simplifies code maintenance.
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

export default PythonInheritancepage