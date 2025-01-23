import React from 'react'
import { Link } from 'react-router-dom'


const PythonAccessModifierPage = () => {
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>
      
      Python Access Modifiers                                                                                                                   
    </h1> 
    </div>

   
  
    
    <div className='pt-2'>
      <p className='text-justify wid'>Access modifiers in Python determine the level of access to the attributes and methods of a class. Python provides three types of access modifiers: public, protected, and private. These modifiers define how and where the attributes or methods can be accessed within a program.
    </p>  
    
    </div>

    <div className='pt-4'>
    <h3><b>Types of Access Modifiers</b></h3>
    </div>

    <div className='pt-2'>
      <h5 className='text-justify wid'><b>1. Public</b>(no underscore):
    </h5>  
    
   
</div>

<div className='pt-2'>
      <p className='text-justify wid'>Attributes and methods with no underscore (_) prefix are public
    </p>  
    <p className='text-justify wid'>Public members can be accessed from anywhere, both inside and outside the class.
    </p> 
    
</div>





<div className='pt-2'>
      <h5 className='text-justify wid'><b>2. Protected</b>(_single underscore)::
    </h5>  
    
   
</div>

<div className='pt-2'>
      <p className='text-justify wid'>Attributes and methods prefixed with a single underscore (_) are treated as protected.
    </p>  
    <p className='text-justify wid'>Protected members should be accessed only within the class and its subclasses (though Python doesn't enforce this strictly).
    </p> 
    
</div>

<div className='pt-2'>
      <h5 className='text-justify wid'><b>3. Private</b>(__double underscore)::
    </h5>  
    
   
</div>

<div className='pt-2'>
      <p className='text-justify wid'>Attributes and methods prefixed with a double underscore (__) are private.
    </p>  
    <p className='text-justify wid'>Private members are accessible only within the class. They are name-mangled by Python to prevent direct access.
    </p> 
    
</div>

<div className='pt-4'>
    <h4><b>1. Public Access</b></h4>
    </div>

   
    
  
       <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow ">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0 text-dark">Example</h5>
       </div>
    
     
       <div class=" p-3 bg-white ">
         <pre class="mb-0 ">
        
                 <p className=''><span className='text-danger'>class</span> Student:</p>
                 <p className=''>  def __init__(self, name, age):</p>
                 <p>      self.name = name</p>
                 <p>      self.age = age </p>
                 <p>   def display(self):</p>
                 <p className=''>      <span className='text-warning'>{`print`}</span>{`(f"Name: {self.name}, Age: {self.age}")`}
                 </p>
                 <p className=' '>student = Student("Alice", <span className='text-danger'>20</span>)
                 </p>
                 <p><span className='text-warning'>{`print`}</span>(student.name)</p>
                 <p><span className='text-warning'>{`print`}</span>(student.age)</p>
                 <p>student.display()</p>
               

                 
                
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
    <h4><b>1. Public Access</b></h4>
    </div>

   
    
  
       <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow ">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0 text-dark">Example</h5>
       </div>
    
     
       <div class=" p-3 bg-white ">
         <pre class="mb-0 ">
        
                 <p className=''><span className='text-danger'>class</span> Student:</p>
                 <p className=''>  def __init__(self, name, age):</p>
                 <p>      self.name = name</p>
                 <p>      self.age = age </p>
                 <p>   def display(self):</p>
                 <p className=''>      <span className='text-warning'>{`print`}</span>{`(f"Name: {self.name}, Age: {self.age}")`}
                 </p>
                 <p className=' '>student = Student("Alice", <span className='text-danger'>20</span>)
                 </p>
                 <p><span className='text-warning'>{`print`}</span>(student.name)</p>
                 <p><span className='text-warning'>{`print`}</span>(student.age)</p>
                 <p>student.display()</p>
               

                 
                
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
    <h4><b>2. Protected Access</b></h4>
    </div>

   
    
  
       <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow ">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0 text-dark">Example</h5>
       </div>
    
     
       <div class=" p-3 bg-white ">
         <pre class="mb-0 ">
        
                 <p className=''><span className='text-danger'>class</span> Employee:</p>
                 <p className=''>  def __init__(self, name, age):</p>
                 <p>       self.<span className='text-danger'>_</span>name = name </p>
                 <p>      self.<span className='text-danger'>_</span>salary = salary </p>
                 <p>   def <span className='text-danger'>_</span>display(self):</p>
                 <p className=''>      <span className='text-warning'>{`print`}</span>{`(f"Name: {self._name}, Salary: {self._salary}")`}
                 </p>
                 <p><span className='text-danger'>class</span> Manager(Employee):</p>
                 <p>  def show<span className='text-danger'>_</span>details(self):</p>
                 <p>   self.<span className='text-danger'>_</span>display()</p>
                 <p>manager = Manager(<span className='text-success'>"Bob"</span>, <span className='text-danger'>50000</span>)</p>
                 <p className=' '>manager.show_details() 
                 </p>
                 <p><span className='text-warning'>{`print`}</span>(manager._name) </p>
               
               

                 
                
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
    <h4><b>3. Private Access</b></h4>
    </div>

   
    
  
       <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow ">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0 text-dark">Example</h5>
       </div>
    
     
       <div class=" p-3 bg-white ">
         <pre class="mb-0 ">
        
                 <p className=''><span className='text-danger'>class</span> BankAccount:</p>
                 <p className=''>  def __init__(self, account_number, balance):</p>
                 <p>       self.<span className='text-danger'>__</span>account_number = account_number </p>
                 <p>       self.<span className='text-danger'>__</span>balance = balance  </p>
                 <p>   def <span className='text-danger'>__</span>display(self):</p>
                 <p className=''>      <span className='text-warning'>{`print`}</span>{`(f"Account: {self.__account_number}, Balance: {self.__balance}")
`}
                 </p>
                 <p>   def show_balance(self):</p>
               
                 <p>    self._display()</p>
                 <p>account = BankAccount(<span className='text-success'>"12345"</span>, <span className='text-danger'>1000</span>)</p>
                 <p className=' '>account.show_balance() 
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




    <div className='pt-4'>
    <h4><b>Accessing Private Members with Name Mangling</b></h4>
    </div>
    
  

    <div className='pt-2'>
      <p className='text-justify wid'>Private members can still be accessed using the name mangling pattern (_ClassName__attribute).
    </p>  
    </div>
    
    <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow ">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0 text-dark">Example</h5>
       </div>
    
     
       <div class=" p-3 bg-white ">
         <pre class="mb-0 ">
        
                 <p className=''><span className='text-warning'>{`print`}</span>(account._BankAccount__account_number)</p>
                
               

                 
                
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
    <h4><b>Summary Table</b>

</h4>
  </div>

  <div className="container mt-4">
  <div className="p-2">
   
    <table className="table table-bordered table-hover table-striped text-center shadow">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Modifier</th>
          <th scope="col">Syntax Example</th>
          <th scope="col">Accessed Within Class</th>
          <th scope='col'>Accessed by Subclass</th>
          <th scope='col'>Accessed Outside Class</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Public</td>
          <td className=''>self.name</td>
          <td className=''>✅</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Protected</td>
          <td>self._name</td>
          <td className=''>✅</td>
          <td className=''>✅</td>
          
          <td>⚠️ (Not recommended)</td>
        </tr>
        <tr>
          <td>Private</td>
          <td>self.__name</td>
          <td className=''>✅</td>
          <td>❌</td>
          <td>❌</td>
        </tr>
       

        

       
      </tbody>
    </table>
  </div>
</div>



<div className='pt-4'>
    <h4><b>Why Python Doesn't Enforce Strict Access Control?</b>

</h4>
  </div>

  <div className='pt-2'>
      <p className='text-justify wid'>Python relies on a convention rather than strict enforcement to define access modifiers. This is consistent with Python's philosophy of "we are all consenting adults," meaning developers should respect the conventions without strict restrictions.


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

export default PythonAccessModifierPage