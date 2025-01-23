import React from 'react'
import { Link } from 'react-router-dom'

const PythonClassMethodPage = () => {
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>
      Class Methods in Python                                                                                                                      
    </h1> 
    </div>

   
  
    
    <div className='pt-2'>
      <p className='text-justify wid'>A class method in Python is a method that is bound to the class rather than its objects. It can access and modify class-level data but cannot directly modify or access instance-level data unless explicitly passed.
    </p>  
    <p className='text-justify wid'>Class methods are defined using the <span className='text-danger'>@classmethod</span> decorator and take <span className='text-danger'>cls</span> (short for class) as their first parameter, which refers to the class itself.
    </p>  
    </div>

    <div className='pt-4'>
    <h3>Defining a Class Method</h3>
    </div>

   

    <div className='text-justify wid pt-4 bglights pt-4'>


   

<div className='text-dark'>
  <h5> { `class ClassName:`}
  </h5> 
  <h5>    { `@classmethod`}
  </h5> 
  <h5> def method_name(cls, args):</h5>
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
                 <p>    number_of_wheels = 4</p>
                 <p className=''>  <span className='text-danger'>  def</span>  __init__(self, make, model):
                 </p>
                 <p className=' '>     self.make = make 
                 </p>
                 <p>     self.model = model</p>
                 <p className='text-danger'>   @classmethod</p>

                 <p><span className='text-danger'>   def</span>  change_wheels(cls, new_count):</p>
                 <p>     cls.number_of_wheels = new_count  </p>

                 <p className=''>  <span className='text-danger'> def</span>  create_from_string(cls, car_string):
                 </p>
                 <p className=' '>     make, model = car_string.split("-") 
                 </p>
                 <p>     return cls(make, model)</p>
                 <p className='text-danger'>  @classmethod</p>

                 <p>Car.change_wheels(6)</p>
                 <p>print(Car.number_of_wheels) </p>



                 <p>car = Car.create_from_string("Toyota-Camry") </p>
                 <p><span className='text-warning'>{`print`}</span>(car.make)<span className='text-primary'># Output: Toyota</span>  </p>
                 <p><span className='text-warning'>{`print`}</span>(car.model)  <span className='text-primary'># Output: Camry</span> </p>
                 
                
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
    <h4><b>Characteristics of Class Methods</b>

</h4>
  </div>
  <div className='pt-2'>
      <p className='text-justify wid'><b>Access to Class Attributes:</b> Class methods can directly access and modify class attributes using the cls parameter.
    </p>  
    <p className='text-justify wid'><b>Cannot Access Instance Attributes:</b> Since class methods operate at the class level, they do not have direct access to instance attributes unless explicitly provided.
    </p>
    <p className='text-justify wid'><b>Alternative Constructors:</b>  Class methods are often used as alternative constructors to create objects in different ways.
    </p> 
    </div>


    <div className='pt-4'>
    <h4><b>Difference Between Class Methods and Instance Methods</b>

</h4>
  </div>


  <div className="container mt-4">
  <div className="p-2">
   
    <table className="table table-bordered table-hover table-striped text-center shadow">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Aspect</th>
          <th scope="col">Class Method</th>
          <th scope="col">Instance Method</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Decorator Used</td>
          <td className='text-danger'>@classmethod</td>
          <td>No decorator</td>
        </tr>
        <tr>
          <td>First Parameter</td>
          <td><span className='text-danger'>cls</span> (refers to the class)</td>
          <td><spam className='text-danger'>self</spam> (refers to the instance)</td>
        </tr>
        <tr>
          <td>Access Scope</td>
          <td>Can access and modify class attributes</td>
          <td>Can access and modify instance attributes</td>
        </tr>
        <tr>
          <td>Invocation</td>
          <td>Called using the class or an instance.</td>
          <td>Called using an instance</td>
        </tr>
       
      </tbody>
    </table>
  </div>
</div>

<div className='pt-4'>
    <h3><b>Use Cases for Class Methods</b>

</h3>
  </div>

  
  
    <div className='pt-4'>
    <h5><b>Modifying Class Attributes:</b>

</h5>
  </div>

   
   
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 bg-white">
        <pre class="mb-0">
       
                <p className=''><span className='text-danger'>class</span> Employee:</p>
                <p>  company_name = <span className='text-success'>"TechCorp"</span></p>
                <p className='text-danger'>   @classmethod</p>
               
                <p className=' '>   def change_company_name(cls, new_name):
                </p>
                <p>    cls.company_name = new_name</p>
                <p>Employee.change_company_name(<span className='text-success'>"InnoTech"</span>)</p>
                <p><span className='text-warning'>{`print`}</span>(Employee.company_name)  <span className='text-primary'># Output: InnoTech</span></p>
               
               
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
    <h5><b>Alternative Constructors:</b>

</h5>
  </div>

   
   
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 bg-white">
        <pre class="mb-0">
       
                <p className=''><span className='text-danger'>class</span> Date:
                </p>
                <p>  def __init__(self, day, month, year):</p>
                <p>     self.day = day</p>
                <p>     self.month = month</p>
                <p>     self.year = year</p>
                <p className='text-danger'>   @classmethod</p>
               
                <p className=' '>   def from_string(cls, date_string):
                </p>
                <p>    day, month, year = map(int, date_string.split(<span className='text-success'>"-"</span>))</p>
                <p>    return cls(day, month, year)</p>
                <p>date = Date.from_string(<span className='text-success'>"10-12-2024"</span>)</p>
              
                <p><span className='text-warning'>{`print`}</span>(date.day, date.month, date.year)  <span className='text-primary'># Output: 10 12 2024</span></p>
               
               
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
    <h5><b>Factory Methods: </b> Class methods can act as factory methods to produce instances of a class with customized logic.



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

export default PythonClassMethodPage