import React from 'react'
import { Link } from 'react-router-dom'


const PythonSetOperators = () => {
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>Python Set Operators                                                                                                                      
    </h1> 
    </div>
    
    <div>
      <p className='text-justify wid'>Python provides a variety of operators to perform set operations such as union, intersection, difference, and symmetric difference. These operators allow you to combine, compare, and manipulate sets effectively
    </p>
    </div>

    <div className='wid text-justify pt-4'>
      <h4><b>1. Union ( | )</b>
       </h4> 
    </div>

    <div className='wid text-justify pt-2'>
  <p>
  

  The union operator combines all unique elements from two or more sets

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
 <h5>{` set1 | set2`}
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
                 
                 <p>result = set1<span className='text-danger'>|</span>(set2)</p>
                 
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
    
    

   

  
    <div className='wid text-justify pt-4'>
      <h4><b>2. Intersection ( & ) </b>
       </h4> 
    </div>

    <div className='wid text-justify pt-2'>
  <p>
  

  The intersection operator returns elements that are common to all sets.
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
 <h5>{` set1 & set2
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
                
                <p>result = set1<span className='text-danger'>& </span>(set2)</p>
                
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
     <h4><b>3. Difference ( - )</b>
      </h4> 
   </div>

   <div className='wid text-justify pt-2'>
 <p>
 

 The difference operator returns elements that are in the first set but not in the second
</p>
 
</div>



   
   
<div className='text-justify wid pt-4 bglights pt-3 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  set1 - set2
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
                
                <p>result = set1<span className='text-danger'>-</span>(set2)</p>
                
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


  
   






<div className='wid text-justify pt-4'>
     <h4><b>4. Symmetric Difference ( ^ )</b>
      </h4> 
   </div>

   <div className='wid text-justify pt-2'>
 <p>
 

 The symmetric difference operator returns elements that are in either of the sets but not in both
</p>
 
</div>



   
   
<div className='text-justify wid pt-4 bglights pt-3 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`set1 ^ set2
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
                
                <p>result = set1<span className='text-danger'>^</span>(set2)</p>
                
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


 
   
 

 
<div className='wid text-justify pt-4'>
     <h4><b>{`5. Subset (<=)`}</b>
      </h4> 
   </div>

   <div className='wid text-justify pt-2'>
 <p>
 

 The subset operator checks if all elements of the first set are in the second set
</p>
 
</div>



   
   
<div className='text-justify wid pt-4 bglights pt-3 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{` set1 <= set2
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
       
                <p className=''>{`set1 = {1, 2}`}</p>
                <p>{`set2 = {1, 2, 3}`}</p>
                
                <p>result = set1<span className='text-danger'> {`<=`} </span>(set2)</p>
                
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


   

   <div className='wid text-justify pt-4'>
     <h4><b>{`6. Superset (>=)`}</b>
      </h4> 
   </div>

   <div className='wid text-justify pt-2'>
 <p>
 

 The superset operator checks if all elements of the second set are in the first set.
</p>
 
</div>



   
   
<div className='text-justify wid pt-4 bglights pt-3 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{` set1 >= set2
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
                <p>{`set2 = {1, 2}`}</p>
                
                <p>result = set1<span className='text-danger'> {`>=`} </span>(set2)</p>
                
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





   
<div className='wid text-justify pt-4'>
     <h4><b>{`7. Disjoint Sets (isdisjoint())`}</b>
      </h4> 
   </div>

   <div className='wid text-justify pt-2'>
 <p>
 

 Disjoint sets have no elements in common.
</p>
 
</div>



   
   
<div className='text-justify wid pt-4 bglights pt-3 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{` set1.isdisjoint(set2)
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
                
                <p>result = set1<span className='text-danger'> {`isdisjoint`} </span>(set2)</p>
                
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

export default PythonSetOperators