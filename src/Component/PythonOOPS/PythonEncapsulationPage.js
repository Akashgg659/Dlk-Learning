import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const PythonEncapsulationPage = () => {
 
  


 
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>
      
      Python Encapsulation                                                                                                                
    </h1> 
    </div>

   
  
    
    <div className='pt-2'>
      <p className='text-justify wid'>Encapsulation is one of the fundamental principles of object-oriented programming (OOP). It refers to the bundling of data (attributes) and methods (functions) that operate on that data into a single unit, or class, and restricting direct access to some of the object's components. This helps ensure that the internal workings of a class are hidden from the outside world and can only be modified in controlled ways.
    </p>  
    <p className='text-justify wid'>In Python, encapsulation is implemented using access modifiers:
    </p> 
    
    </div>

   

    <div className='pt-2'>
      <h5 className='text-justify wid pt-2'><b>Public members: </b>Accessible from anywhere
    </h5>  
    <h5 className='text-justify wid pt-2'><b>Protected members: </b>Suggested to be accessed only within the class or its subclasses (conventionally marked by a single underscore _).
    </h5>  
    <h5 className='text-justify wid pt-2'><b>Private members: </b> Not directly accessible from outside the class (marked by a double underscore __).
    </h5>  
    
    <div className='d-flex justify-content-center'>
<img src='/images/en.png' alt='img' className='img-fluid' width={500} ></img>

</div>
   
</div>


  

 





 <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow ">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0 text-dark">Example</h5>
      </div>
   
    
      <div class=" p-3 bg-white ">
        <pre class="mb-0 ">
                <p><span className='text-danger'>class</span> BankAccount:</p>
                <p className=''><span className='text-danger'>def</span> __init__(self, account_holder, initial_balance):</p>
                <p> self.account_holder = account_holder</p>
                <p className=''> self._account_number = <span>1234567890</span></p>
                <p> self.__balance = initial_balance </p>
                
                <p className=''> <span className='text-danger'>def</span> get_balance(self):</p>
                
                <p className=''>    return self.__balance</p>
                <p><span className='text-danger'>def</span> deposit(self, amount):</p>

                <p className=''>if amount {`>`} 0:</p>
                
                <p className=''>  self.__balance += amount</p>
                <p>   <span className='text-warning'>{` print`}</span> {`(f"{amount} deposited. New balance: {self.__balance}")`}</p>

                 <p>else:</p>
                 <p>   <span className='text-warning'>{` print`}</span>("Invalid deposit amount!")</p>
                 <p><span className='text-danger'>def</span> withdraw(self, amount):</p>
                 <p>  if 0 {`<`} amount {`<=`} self.__balance: </p>
                       <p>  self.__balance -= amount</p>
                       <p>   <span className='text-warning'>{` print`}</span> {`(f"{amount} withdrawn. Remaining balance: {self.__balance}"))`}</p>
                  
                 <p>else:</p>
                 
                 <p><span className='text-warning'>{` print`}</span>("Invalid withdrawal amount or insufficient funds!")</p>
                 <p>account = BankAccount("Alice", 1000)</p>
                <p><span className='text-warning'>{`print`}</span>("Account Holder:", account.account_holder)</p>
                <p><span className='text-warning'>{`print`}</span>("Account Number (Protected):", account._account_number)</p>
               <p>account.deposit(500)</p>
               <p>account.withdraw(300)</p>
               <p><span className='text-warning'>{`print`}</span>("Balance (via getter):", account.get_balance())</p>
              

                
               
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

    <div>
      <h4>
        <b>Benefits of Encapsulation</b>
      </h4>
    </div>
   

    <div className='pt-2'>
      <h5 className='text-justify wid pt-2'><b>Data Security:</b> Restricts unauthorized access to sensitive data
    </h5>  
    <h5 className='text-justify wid pt-2'><b>Code Maintainability:</b> Ensures that changes to internal implementation don't affect external code.
    </h5>  
    <h5 className='text-justify wid pt-2'><b>Control:</b> Allows validation or constraints on how data is modified.
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

export default PythonEncapsulationPage