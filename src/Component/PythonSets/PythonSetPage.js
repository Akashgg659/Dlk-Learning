import React from 'react'
import { Link } from 'react-router-dom'


const PythonSetPage = () => {
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>Python Sets                                                                                                                        
    </h1> 
    </div>
    
    <div>
      <p className='text-justify wid'>In Python, sets are a built-in data type used to store collections of unique, unordered elements. They are useful for situations where you need to maintain a collection of items and eliminate duplicates, or perform mathematical set operations like union, intersection, and difference.


    
    
    </p>  
    </div>

    <div className='wid text-justify pt-4'>
      <h4><b>Key Features of Python Sets</b>
       </h4> 
    </div>

    <div className='wid text-justify pt-4'>
  <p>
  

  <b>Unordered:</b> Elements in a set have no specific order</p>
<p><b>Unique Elements</b> A set does not allow duplicate values</p>
<p><b>Mutable</b> Sets are changeable; you can add or remove items.
</p>
<p><b>Cannot Contain Mutable Items:</b>Items like lists or other sets cannot be elements of a set (but tuples can, as they are immutable).


</p>  
</div>
<div className='wid text-justify pt-4'>
      <h4><b>Creating a Set</b>
       </h4> 
    </div>


    <div className='wid text-justify'>
      <p>
      
    
      You can create a set using curly braces {} or the set() function
    </p>

   
    </div>
    
    
    
    
       <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0">Example</h5>
       </div>
    
     
       <div class=" text-white p-3 ">
         <pre class="mb-0">
                 <p className='text-primary'># Using curly braces</p>
                 <p className=''>my_set = {`{1, 2, 3, 4}`}</p>
                 <p className=''><span className='text-warning'>print</span>(my_set)  <span className='text-primary'>{`# Output: {1, 2, 3, 4}`}</span>
                 </p>
                 <p className='text-primary'># Using the set() function</p>
                 <p className=' '>another_set = set([1, 2, 3, 4, 4]) <span className='text-primary'>{`# Duplicate '4' will be ignored`}</span> 
                 </p>
                 <p><span className='text-warning'>print</span>(another_set)  <span className='text-primary'>{`# Output: {1, 2, 3, 4}`}</span></p>
                <p className='text-primary'># Empty set</p>
                <p>empty_set = set()</p>
                <p><span className='text-warning'>print</span>(empty_set)  <span className='text-primary'>{`# Output: set()`}</span></p>
              
                
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
      <h4><b>Set Operations</b>
       </h4> 
    </div>


    
    <div className='wid text-justify pt-2'>
      <p>
      
     <b>Adding Elements</b>
       </p>
   
  
    </div>

    
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`my_set = {1, 2, 3}`}</p>
                <p className=''>my_set.add(4)
                </p>
                <p className=' '><span className='text-warning'>print</span>(my_set) <span className='text-primary'>{`# Output: {1, 2, 3, 4}`}</span>  </p>
               
             
               
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
      
     <b>Removing Elements</b>
       </p>
   
  
    </div>

    
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`my_set = {1, 2, 3, 4}`}</p>
                <p className=''>my_set.remove(3)  {`# Raises KeyError if 3 is not in the set`}
                </p>
                <p className=' '><span className='text-warning'>print</span>(my_set) <span className='text-primary'>{`# Output: {1, 2, 4}`}</span>  </p>
               <p>my_set.discard(5)  # Does not raise an error if 5 is not in the set</p>
             
               
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
      
     <b>Set Union </b>Combines all elements from both sets (duplicates are removed).
       </p>
   
  
    </div>

    
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`my_set = {1, 2, 3}`}</p>
                <p className=''>{`set2 = {3, 4, 5}`}
                </p>
                <p className=' '><span className='text-warning'>print</span>(set1 | set2) <span className='text-primary'>{`# Output: {1, 2, 3, 4, 5}`}</span>  </p>
               
             
               
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
      
     <b>Set Intersection</b> Returns elements common to both sets.
       </p>
   
  
    </div>

    
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`my_set = {1, 2, 3}`}</p>
                <p className=''>my_set.add(4)
                </p>
                <p className=' '><span className='text-warning'>print</span>(my_set) <span className='text-primary'>{`# Output: {1, 2, 3, 4}`}</span>  </p>
               
             
               
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
      
     <b>Adding Elements</b>
       </p>
   
  
    </div>

    
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`my_set = {1, 2, 3}`}</p>
                <p className=''>my_set.add(4)
                </p>
                <p className=' '><span className='text-warning'>print</span>(set1 & set2)<span className='text-primary'>{` # Output: {3}`}</span>  </p>
               
             
               
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
      
     <b>Set Difference</b>Returns elements that are in one set but not the other
       </p>
   
  
    </div>

    
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`my_set = {1, 2, 3}`}</p>
                <p className=''>my_set.add(4)
                </p>
                <p className=' '><span className='text-warning'>print</span>(set1 - set2) <span className='text-primary'>{`# Output: {1, 2}`}</span>  </p>
               
             
               
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
      
     <b>Set Symmetric Difference</b> Returns elements in either set, but not both.
       </p>
   
  
    </div>

    
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`my_set = {1, 2, 3}`}</p>
                <p className=''>my_set.add(4)
                </p>
                <p className=' '><span className='text-warning'>print</span>(set1 ^ set2) <span className='text-primary'>{`# Output: {1, 2, 4, 5}`}</span>  </p>
               
             
               
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
      
     <b>Subset and Superset Checks</b>
       </p>
   
  
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
                <p className=''>my_set.add(4)
                </p>
                <p className=' '><span className='text-warning'>print</span>(set1.issubset(set2)) <span className='text-primary'>{`# Output: True`}</span>  </p>
                <p className=' '><span className='text-warning'>print</span>(set2.issuperset(set1)) <span className='text-primary'>{`# Output: True`}</span>  </p>
             
               
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
      
     <b>Adding Elements</b>
       </p>
   
  
    </div>

    
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`my_set = {1, 2, 3}`}</p>
                <p className=''>my_set.clear()
                </p>
                <p className=' '><span className='text-warning'>print</span>(my_set) <span className='text-primary'>{`# Output: set()`}</span>  </p>
               
             
               
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
      <h4><b>Iterating Through a Set</b>
       </h4> 
    </div>


    
    <div className='wid text-justify pt-2'>
      <p>
      
      Since sets are unordered, iteration doesn't follow a specific sequence
       </p>
   
  
    </div>

    
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`my_set = {1, 2, 3, 4}`}</p>
                <p className=''>for item in my_set:
                </p>
                <p className=' '><span className='text-warning'>print</span>(item)   </p>
               
             
               
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
      <h4><b>Frozensets</b>
       </h4> 
    </div>


    
    <div className='wid text-justify pt-2'>
      <p>
      
      Frozensets are immutable sets. Once created, you cannot modify them
       </p>
   
  
    </div>

    
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`frozen = frozenset([1, 2, 3])`}</p>
                
                
                <p className=' '><span className='text-warning'>print</span>(frozen)   </p>
               
             
               
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

export default PythonSetPage