import React from 'react'
import { Link } from 'react-router-dom'


const PythonTuple = () => {
  return (
    <div className='paddownforcol'>

    <>
       
       <div>
      <h1>Python Tuples                                                                                                                        
    </h1> 
    </div>
    
    <div>
      <p className='text-justify wid'>A tuple is an immutable, ordered collection of items. Like lists, tuples can hold elements of any data type, but unlike lists, tuples cannot be changed after creation
    
    
    </p>  
    </div>

    <div className='wid text-justify pt-4'>
      <h4><b>Key Features of Tuples</b>
       </h4> 
    </div>

    <div className='wid text-justify pt-4'>
  <p>
  

  <b>Ordered:</b> The order of elements in a tuple is preserved</p>
<p><b>Immutable:</b> Once a tuple is created, its elements cannot be modified</p>
<p><b>Allows Duplicates:</b> Tuples can contain duplicate items
</p>
<p><b>Heterogeneous:</b>Tuples can store elements of different data types


</p>  
</div>
<div className='wid text-justify pt-4'>
      <h4><b>Empty Tuple in Python</b>
       </h4> 
    </div>


    <div className='wid text-justify'>
      <p>
      
    
      An <b>empty tuple</b> is a tuple that contains no elements. It is represented by a pair of parentheses ()
    </p>

   
    </div>
    
    
    
    
       <div class="container py-4 p-2">
    
     <div class=" mb-4 shadow-sm shadow">
       
       <div class=" bg-light p-3">
         <h5 class="mb-0">Example</h5>
       </div>
    
     
       <div class=" text-white p-3 ">
         <pre class="mb-0">
        
                 <p className=''>empty_tuple = ()</p>
                 <p className=''><span className='text-warning'>print</span>(empty_tuple)  <span className='text-primary'># Output: ()</span>
                 </p>
                 <p className=' '><span className='text-warning'>print</span>(type(empty_tuple)) <span className='text-primary'>{`# Output: <class 'tuple'>`}</span> 
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
      <h4><b>2. Tuple with Multiple Elements</b>
       </h4> 
    </div>

   
    
    <div className='wid text-justify'>
      <p>
      
      A tuple can hold one or more elements of any data type, including integers, strings, floats, and other tuples
       </p>
   
  
    </div>

    
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>empty_tuple = ()</p>
                <p className=''><span className='text-warning'>print</span>(empty_tuple)  <span className='text-primary'># Output: ()</span>
                </p>
                <p className=' '><span className='text-warning'>print</span>(type(empty_tuple)) <span className='text-primary'>{`# Output: <class 'tuple'>`}</span> 
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
      <h4><b>3. Single Element Tuple</b>
       </h4> 
    </div>

  

    
   

    <div>
      <p className='text-justify wid'>To create a tuple with a single element, you must include a trailing comma, otherwise, Python treats it as the data type of the value itself.
    
    
    </p>  
    </div>

    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>single_tuple = (<span className='text-danger'>5,</span>) <span className='text-primary'># A tuple with one element</span> </p>
                <p>not_a_tuple = (<span className='text-danger'>5</span>)   <span className='text-primary'># This is an integer</span> </p>
                <p className=''><span className='text-warning'>print</span>(type(single_tuple))  <span className='text-primary'>{`# Output: <class 'tuple'>`}</span>
                </p>
                <p className=' '><span className='text-warning'>print</span>(type(not_a_tuple)) <span className='text-primary'>{`# Output: <class 'int'>`}</span> 
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
      <h4><b>4. Nested Tuples</b>
       </h4> 
    </div>


    
     
    <div className='wid text-justify'>
      <p>
      
      Tuples can contain other tuples, forming nested structures
      </p>
  </div>
  



    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
    
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>nested_tuple = (<span className='text-danger'>1</span>, (<span className='text-danger'>2</span>, <span className='text-danger'>3</span>), (<span className='text-danger'>4</span>, <span className='text-danger'>5</span>, <span className='text-danger'>6</span>))</p>
                <p className=''>age = <span className='text-warning'> print</span>(nested_tuple) <span className='text-primary'> # Output: (1, (2, 3), (4, 5, 6))</span>
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
      <h4><b>
      Python Tuple Operations</b>
       </h4>
    </div>


    <div>
      <p className='text-justify wid'>In Python, Tuple is a sequence. Hence, we can concatenate two tuples with + operator and concatenate multiple copies of a tuple with "*" operator. The membership operators "in" and "not in" work with tuple object.
    </p>  
    </div>
    


    <div className="container mt-4">
  <div className="p-2">
   
    <table className="table table-bordered table-hover table-striped text-center shadow">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Python Expression</th>
          <th scope="col">Results</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>(1, 2, 3) + (4, 5, 7)</td>
          <td>(1, 2, 3, 4, 5, )</td>
          <td>Concatenation</td>
        </tr>
        <tr>
          <td>('Hi!',) * 5</td>
          <td>('Hi!', 'Hi!', 'Hi!', 'Hi!', 'Hi!')</td>
          <td>Repetition</td>
        </tr>
        <tr>
          <td>2 in (1, 2, 3)</td>
          <td>True</td>
          <td>Membership</td>
        </tr>
       
      
       
      </tbody>
    </table>
  </div>
</div>

<div className='wid text-justify pt-4'>
      <h4><b>Indexing, Slicing, and Matrixes</b>
       </h4> 
    </div>
    <div>
      <p className='text-justify wid'> Because tuples are sequences, indexing and slicing work the same way for tuples as they do for strings. Assuming following input −
       
    </p>  
    </div>


    <div className="container mt-4">
  <div className="p-2">
   
    <table className="table table-bordered table-hover table-striped text-center shadow">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Python Expression</th>
          <th scope="col">Results</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>L[2]</td>
          <td>'SPAM!'</td>
          <td>Offsets start at zero</td>
        </tr>
        <tr>
          <td>L[-2]</td>
          <td>'Spam'</td>
          <td>Negative: count from the right</td>
        </tr>
        <tr>
          <td>L[1:]</td>
          <td>['Spam', 'SPAM!']</td>
          <td>Slicing fetches sections</td>
        </tr>
       
      
       
      </tbody>
    </table>
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

export default PythonTuple