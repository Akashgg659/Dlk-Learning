import React from 'react'
import { Link } from 'react-router-dom'

const PythonCopySetPage = () => {
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>Python Copy Sets                                                                                                                       
    </h1> 
    </div>
    
    <div>
      <p className='text-justify wid'>In Python, you can create a copy of a set to duplicate its elements, ensuring that changes made to the copied set do not affect the original set. Python provides multiple methods to perform this task, each suited to different scenarios.
    </p>
    </div>

    <div className='wid text-justify pt-4'>
      <h4><b>1. Using the copy() Method</b>
       </h4> 
    </div>

    <div className='wid text-justify pt-2'>
  <p>
  

  The copy() method creates a shallow copy of the original set. This is the most straightforward way to duplicate a set.

</p>
  
</div>

<div className='wid text-justify pt-2'>
  <p>
  

  <b>Syntax</b>

</p>
  
</div>
<div className='text-justify wid pt-4 bglights pt-3 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  new_set = original_set.copy()`}
 </h5> 
</div>




</div>
   

  
 </div>

    

    
       <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0">Example</h5>
       </div>
    
     
       <div class=" text-white p-3 ">
         <pre class="mb-0">
        
                 <p className=''>{`set1 = {1, 2, 3, 4}`}</p>
                 <p>set2 = set1.<span className='text-danger'>copy()</span></p>
                  <p className=''>  <span className='text-warning'>print</span>(set2)
                 </p>
                 <p>set2.<span className='text-danger'>add(5)</span></p>
                 
                  <p className=''>  <span className='text-warning'>print</span>(set1)
                 </p>
                 <p className=''>  <span className='text-warning'>print</span>(set2)
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
    
  

    <div className='wid text-justify pt-4'>
      <h4><b>2. Using the set() Constructor</b>
       </h4> 
    </div>

    <div className='wid text-justify pt-2'>
  <p>
  

  The set() constructor can be used to create a new set from an existing set or any other iterable.

</p>
  
</div>

<div className='wid text-justify pt-2'>
  <p>
  

  <b>Syntax</b>

</p>
  
</div>
<div className='text-justify wid pt-4 bglights pt-3 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  new_set = set(original_set)`}
 </h5> 
</div>




</div>
   

  
 </div>

    

    
       <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0">Example</h5>
       </div>
    
     
       <div class=" text-white p-3 ">
         <pre class="mb-0">
        
                 <p className=''>{`set1 = {1, 2, 3, 4}`}</p>
                 <p>set2 = set<span className='text-danger'>(set1)</span></p>
                  <p className=''>  <span className='text-warning'>print</span>(set2)
                 </p>
                 <p>set2.<span className='text-danger'>remove(3)</span></p>
                 
                  <p className=''>  <span className='text-warning'>print</span>(set1)
                 </p>
                 <p className=''>  <span className='text-warning'>print</span>(set2)
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
   
  

    <div className='wid text-justify pt-4'>
      <h4><b>3. Copying Using Loops</b>
       </h4> 
    </div>

    <div className='wid text-justify pt-2'>
  <p>
  

  You can manually copy the contents of a set by iterating through it and adding elements to a new set.
</p>
  
</div>

<div className='wid text-justify pt-2'>
  <p>
  

  <b>Syntax</b>

</p>
  
</div>


    

    
       <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0">Example</h5>
       </div>
    
     
       <div class=" text-white p-3 ">
         <pre class="mb-0">
        
                 <p className=''>{`set1 = {1, 2, 3, 4}`}</p>
                 <p>set2 =<span className='text-danger'>set()</span></p>
                  
                 <p><span className='text-danger'>for</span> item <span className='text-danger'>in</span> set1:</p>
                 
                  <p className=''>  set2.add(item)
                 </p>
                 <p className=''><span className='text-warning'>print</span>(set2)
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
    
   

    <div className='wid text-justify pt-4'>
      <h4><b>4. Copying Immutable Sets (frozenset)</b>
       </h4> 
    </div>

    <div className='wid text-justify pt-2'>
  <p>
  

  If you're working with a frozenset (an immutable version of a set), you can simply assign it to another variable. Since frozenset is immutable, no modifications can be made to it.

</p>
  
</div>

<div className='wid text-justify pt-2'>
  <p>
  

  <b>Syntax</b>

</p>
  
</div>


    

    
       <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0">Example</h5>
       </div>
    
     
       <div class=" text-white p-3 ">
         <pre class="mb-0">
        
                 <p className=''>{`frozen_set1 = frozenset({1, 2, 3})`}</p>
                 <p>frozen_set2 = frozen_set1</p>
                  <p className=''>  <span className='text-warning'>print</span>(frozen_set2)
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

export default PythonCopySetPage