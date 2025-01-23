import React from 'react'
import { Link } from 'react-router-dom'

const ReactListPage = () => {
  return (
    <div className='paddownforcol'>
   
    <div >
   <h1>React Lists
   </h1> 
 </div>

 <div className='pt-3'>
   <p className='text-justify wid'>In React, <span className='text-danger'>lists</span> are used to display a collection of items in an organized manner. They allow you to dynamically render multiple components based on an array of data
 </p>
 </div>



 <div className='pt-4'>
   <h4><b>Why Use Lists in React?</b>
   </h4> 
 </div>



 <div className='pt-2'>
      <p className='text-justify wid'>To display repeated elements, such as items in a to-do list or search results
    </p>  
    <p className='text-justify wid'>To dynamically render content based on data
    </p> 
    <p className='text-justify wid'>To handle updates efficiently when the data changes
    </p> 
    </div>





 <div className='pt-4'>
   <h4><b>Rendering a List in React</b> 
   </h4> 
 </div>


 <div className='pt-2'>
      <p className='text-justify wid'>To render a list, you typically use the <span className='text-danger'>map()</span>  function, which transforms an array into a new array of React elements.
    
    </p>  
    </div>





 

 


   

    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b>  </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`import React from 'react';`}</p>
                <p className=''>{`function `}<span className='text-danger'>{`App()`}</span> {`{`}

                </p>
                <p>{`const fruits = ['Apple', 'Banana', 'Cherry']`}</p>
                <p className=''>{`return (`} 

                </p>
                
                <p className=''>  {` <ul>`}

                </p>
                <p className=''>      {`{fruits.`}<span className='text-danger'>{`map`}</span>{`((fruit, index) => (`}

                </p>
                <p className=''>         {` <li `}<span className='text-danger'>{`key`}</span>{`={index}>{fruit}</li>`}

            </p>
                <p className=''>         {`  ))}`}

                </p>
       
                <p className=''>      {` </ul>`}

                </p>
                
                <p className='text-danger'>  {`);`}

</p>
<p className=''>{`}`}

</p>
<p className=''>{`const root = ReactDOM.createRoot(document.`}<span className='text-danger'>{`getElementById`}</span>{`('root'));`}

</p>
<p className=''>{`root.`}<span className='text-danger'>render</span>{`(`}<span className='text-warning'>{`<App />`}</span>{`);`}

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

 
   <div className='pt-2'>
      <p className='text-justify wid'><b>map():</b> Iterates over the fruits array and returns an array of {`<li>`} elements
    </p>  
    </div>
    
 <div className='pt-2'>
      <p className='text-justify wid'><b>key Attribute:</b> Each element in a list should have a unique key to help React efficiently update and manage the DOM.
    </p>  
    </div>



    <div className='pt-4'>
   <h4><b>Key Prop in Lists</b> 
   </h4> 
 </div>


 <div className='pt-2'>
      <p className='text-justify wid'>The <span className='text-danger'>key</span> is a special attribute that must be included when rendering lists in React. It helps React identify which items have changed, been added, or removed.
    
    </p>  
    </div>

    
    <div className='pt-4'>
   <h4><b>Why is the key important ?</b> 
   </h4> 
 </div>


 <div className='pt-2'>
      <p className='text-justify wid'>It improves performance by minimizing unnecessary re-renders.
    </p>  
    <p className='text-justify wid'>It ensures that the component state is maintained correctly during updates.</p>
    </div>

    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b>  </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`const numbers = [1, 2, 3, 4, 5];`}</p>
                <p className=''>{`function `}<span className='text-danger'>NumberList</span>{`() {`}

                </p>
                
                <p className='text-danger'>{`return (`} 

                </p>
                
                <p className=''>  {` <ul>`}

                </p>
                <p className=''>      {`  {numbers.`}<span>map</span>{`((number) => (`}

                </p>
                <p className=''>       {` <li `}<span className='text-danger'>key</span>{`={number.toString()}>{number}</li>`}

            </p>
                <p className=''>         {`  ))}`}

                </p>
       
                <p className=''>      {` </ul>`}

                </p>
                
                <p className='text-danger'>  {`);`}

</p>
<p className=''>{`}`}

</p>
<p className=''>{`const root = ReactDOM.createRoot(document.`}<span className='text-danger'>{`getElementById`}</span>{`('root'));`}

</p>
<p className=''>{`root.`}<span className='text-danger'>render</span>{`(`}<span className='text-warning'>{`<App />`}</span>{`);`}

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
 <Link to={'/python/hello'} className="button-link m-1">
     <button className="button bg-primary text-white ">Prev</button>
   </Link>
   <Link to={'/python/variable'}  className="button-link m-1">
     <button className="button bg-primary text-white ">Next</button>
     </Link>
 </div>
 
   
 </div>
  )
}

export default ReactListPage