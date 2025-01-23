import React from 'react'
import { Link } from 'react-router-dom'


const PythonAddSetItemsPage = () => {
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>Python Add Set Items                                                                                                                        
    </h1> 
    </div>
    
    <div>
      <p className='text-justify wid'>Python sets are mutable collections of unique and unordered elements. You can add new items to a set using two main methods: add() and update().
    </p>
    </div>

    <div className='wid text-justify pt-4'>
      <h4><b>Using add()</b>
       </h4> 
    </div>

    <div className='wid text-justify pt-2'>
  <p>
  

  The add() method is used to add a single item to a set.

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
 <h5>{`  set_name.add(item)`}
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
        
                 <p className=''>{`my_set = {1, 2, 3}`}</p>
                 
                 <p>my_set.add(4):</p>
                 
                 <p className=''>  <span className='text-warning'>print</span>(my_set)  
                 </p>
                 <p>my_set.add(4):</p>
                 
                 <p className=''>  <span className='text-warning'>print</span>(my_set)  
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
      <h4><b>Using update()</b>
       </h4> 
    </div>

    <div className='wid text-justify pt-2'>
  <p>
  

  The update() method is used to add multiple items to a set at once. It accepts any iterable (e.g., list, tuple, or another set)
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
 <h5>{`  set_name.update(iterable)`}
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
        
                 <p className=''>{`my_set = {1, 2, 3}`}</p>
                 
                 <p>my_set.update([4, 5, 6])</p>
                 
                 <p className=''>  <span className='text-warning'>print</span>(my_set)  
                 </p>
                 <p>{`my_set.update((7, 8), {9, 10})`}`</p>
                 
                 <p className=''>  <span className='text-warning'>print</span>(my_set)  
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
  <p>
  

  Use add() to include a single element..

</p>
<p>
  

Use update() to add multiple elements efficiently.

</p>
<p>Sets automatically manage duplicates and maintain unique elements.</p>
  
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

export default PythonAddSetItemsPage