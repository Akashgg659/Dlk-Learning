import React from 'react'
import { Link } from 'react-router-dom'


const ReactUseStatePage = () => {
  return (
    <div className='paddownforcol'>
   
    <div >
   <h1>React <span className='text-danger'>Usestate</span> Hook
   </h1> 
 </div>

 <div className='pt-3'>
   <p className='text-justify wid'>The <span className='text-danger'>useState</span> Hook is one of the most commonly used React Hooks. It allows you to add state to functional components, enabling your component to "remember" values between renders.
</p>  
 </div>



 <div className='pt-4'>
   <h4><b>How useState Works</b>
   </h4> 
 </div>
 <div className='pt-4'>
   <h4> Import <span className='text-danger'>useState</span>
   </h4> 
 </div>

  
 
 <div className='text-justify wid pt-4 bglights pt-4 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  import React, { useState } from 'react'; `}
 </h5> 
</div>




</div>
   

  
 </div>

 <div className='pt-4'>
      <p className='text-justify wid'><b>Initialize State:</b> Call useState inside your component to declare a state variable and its setter function.
    
    </p>  
    </div>


 
    <div className='text-justify wid pt-4 bglights pt-4 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  const [state, setState] = useState(initialValue); `}
 </h5> 
</div>




</div>
   

  
 </div>



    <div className='pt-4'>
      <p className='text-justify wid'><b>state:</b> The current state value.
    
    </p>  
    </div>   
 <div className=''>
      <p className='text-justify wid'><b>setState:</b> The function used to update the state.
    </p>  
    </div>

    
 <div className=''>
      <p className='text-justify wid'><b>initialValue: </b> The initial value of the state
    
    </p>  
    </div>

 
    <div className='pt-4'>
      <p className='text-justify wid'><b>Update State:</b>  Use the setState function to update the state. This triggers a re-render of the component.
    
    </p>  
    </div>
   


    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b>  </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`import React, {`} <span className='text-danger'>useState</span>{` } from 'react';`}</p>
                <p className=''>{`function `}<span className='text-danger'>{`App()`} </span>{`{`}

                </p>
                <p>{`}`}</p>
                <p className=''>  {` const [count, setCount] = `}<span className='text-danger'>{`useState(0)`}</span> ;

                </p>
                
                <p className='text-danger'>  {` return (`}

                </p>
                <p className=''>      {`<div>`}

                </p>
                <p className=''>        {` <p>Count: {count}</p>`}

            </p>
                <p className=''>         {`<button onClick={() => setCount(count + 1)}>Increment</button>`}

                </p>
       
                <p className=''>        {` <button onClick={() => setCount(count - 1)}>Decrement</button>`}

                </p>
                <p>{` </div>`}</p>
                
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



 <div className='pt-4'>
   <h4><b>Explanation:</b> 
   </h4> 
 </div>


 <div className='pt-2'>
      <p className='text-justify wid'><span className='text-danger'>useState(0)</span> initializes count to 0
    
    
    </p>  
    </div>
    <div className='pt-2'>
      <p className='text-justify wid'><span className='text-danger'>setCount</span> (count + 1) updates the count value, re-rendering the component.
    
    
    </p>  
    </div>
    <div className='pt-2'>
      <p className='text-justify wid'>Each click changes the value of <span className='text-danger'>count</span>, and the updated value is displayed.
    
    
    </p>  
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

export default ReactUseStatePage