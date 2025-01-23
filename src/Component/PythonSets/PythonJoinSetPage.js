import React from 'react'
import { Link } from 'react-router-dom'


const PythonJoinSetPage = () => {
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>Python Join Sets                                                                                                                      
    </h1> 
    </div>
    
    <div>
      <p className='text-justify wid'>In Python, you can join sets to combine their elements in various ways. Python provides multiple methods to perform set operations like union, intersection, difference, and symmetric difference. Each method has its own use case.
    </p>
    </div>

    <div className='wid text-justify pt-4'>
      <h4><b>1. Joining Sets Using union()</b>
       </h4> 
    </div>

    <div className='wid text-justify pt-2'>
  <p>
  

  The union() method returns a new set containing all elements from both sets, without duplicates.

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
 <h5>{` set3 = set1.union(set2)`}
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
        
                 <p className=''>{`set1 = {1, 2, 3}`}</p>
                 <p>{`set2 = {3, 4, 5}`}</p>
                 
                 <p>result = set1.<span className='text-danger'>union</span>(set2)</p>
                 
                 <p className=''>  <span className='text-warning'>print</span>(result)
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
 
 Note: You can also use the <b>|</b> operator for union:
 
</p>
 
</div>

  
    <div className='wid text-justify pt-4'>
      <h4><b> 2. Joining Sets Using update() </b>
       </h4> 
    </div>

    <div className='wid text-justify pt-2'>
  <p>
  

  The update() method adds elements from another set to the current set, modifying it in place.
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
 <h5>{`  set1.update(set2)
`}
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
       
                <p className=''>{`set1 = {1, 2, 3}`}</p>
                <p>{`set2 = {4, 5, 6}`}</p>
                
                <p>set1.<span className='text-danger'>update</span>(set2)</p>
                
                <p className=''>  <span className='text-warning'>print</span>(set1)
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
     <h4><b>3. Common Elements with intersection()</b>
      </h4> 
   </div>

   <div className='wid text-justify pt-2'>
 <p>
 

 The intersection() method returns a set containing only the elements that are present in both sets.
</p>
 
</div>



   
   
<div className='text-justify wid pt-4 bglights pt-3 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  set3 = set1.intersection(set2)
`}
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
                <p>{`set2 = {3, 4, 5, 6}`}</p>
                
                <p>result = set1.<span className='text-danger'>intersection</span>(set2)</p>
                
                <p className=''>  <span className='text-warning'>print</span>(result)
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
 
 Note: You can also use the <b>& </b>operator for intersection:
 
</p>
 
</div>
   






<div className='wid text-justify pt-4'>
     <h4><b>4. Unique Elements with difference()</b>
      </h4> 
   </div>

   <div className='wid text-justify pt-2'>
 <p>
 

 The difference() method returns a set containing elements that are only in the first set
</p>
 
</div>



   
   
<div className='text-justify wid pt-4 bglights pt-3 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{` set3 = set1.difference(set2)
`}
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
                <p>{`set2 = {3, 4, 5, 6}`}</p>
                
                <p>result = set1.<span className='text-danger'>difference</span>(set2)</p>
                
                <p className=''>  <span className='text-warning'>print</span>(result)
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
 
 Note: You can also use the <b>-</b> operator for difference:
 
</p>
 
</div>
   
 

 
<div className='wid text-justify pt-4'>
     <h4><b>5. Symmetric Difference with symmetric_difference()</b>
      </h4> 
   </div>

   <div className='wid text-justify pt-2'>
 <p>
 

 The symmetric_difference() method returns a set containing elements that are in either set, but not in both
</p>
 
</div>



   
   
<div className='text-justify wid pt-4 bglights pt-3 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{` set3 = set1.symmetric_difference(set2)
`}
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
       
                <p className=''>{`set1 = {1, 2, 3}`}</p>
                <p>{`set2 = {3, 4, 5}`}</p>
                
                <p>result = set1.<span className='text-danger'>symmetric_difference</span>(set2)</p>
                
                <p className=''>  <span className='text-warning'>print</span>(result)
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
 
 Note: You can also use the <b>^</b> operator for symmetric difference:
 
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

export default PythonJoinSetPage