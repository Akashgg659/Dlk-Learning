import React from 'react'
import { Link } from 'react-router-dom'


const ReactPropsPage = () => {
  return (
    <div className='paddownforcol'>
   
    <div >
   <h1>React <span className=''>Props</span>
   </h1> 
 </div>

 <div className='pt-3'>
   <p className='text-justify wid'><span className='text-danger'>Props</span> (short for <span className='text-danger'>properties</span>) are used in React to pass data from one component to another. They allow components to be dynamic and reusable by customizing their behavior or content.
</p>  
 </div>



 <div className='pt-4'>
   <h4><b>Props are Read-Only</b>
   </h4> 
 </div>



 <div className='pt-2'>
      <p className='text-justify wid'><span className='text-danger'>Props</span> cannot be modified by the receiving component. They are immutable and used only for rendering data
    
    
    </p>  
    </div>





 <div className='pt-4'>
   <h4><b>Props are Passed as Attributes</b> 
   </h4> 
 </div>


 <div className='pt-2'>
      <p className='text-justify wid'><span className='text-danger'>Props</span> are passed to a component like HTML attributes
    
    
    </p>  
    </div>



 <div className='pt-4'>
   <h4><b>Props Enable Reusability</b> 
   </h4> 
 </div>

 <div className='pt-2'>
      <p className='text-justify wid'>Components can be reused with different data by passing unique props.
    
    </p>  
    </div>
    <div className='pt-4'>
   <h4><b>How to Use Props</b> 
   </h4> 
   
 </div>
 <div className='pt-3'>
    
   <h4>Step 1: Define Props in a Componen
   </h4> 
 </div>
 
 <div className='pt-2'>
      <p className='text-justify wid'>You can access props in a function component through the <span className='text-danger'>Props</span> parameter.
    
    
    </p>  
    </div>

  
    
   



 
 
 <div className='text-justify wid pt-4 bglights pt-4 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  function Welcome(props) { `}
 </h5> 
</div>
<div className='pt-2'>
 <h5>      {`return <h1>Hello,`} <span className='text-danger'>{`{props.name}`}</span>{`!</h1>;`}
 </h5> 
 <h5>{`}`}</h5>
</div>



</div>
   

  
 </div>


 <div className='pt-2'>
      <p className='text-justify wid'>Here, <span className='text-danger'>props.name</span> refers to the name prop passed to the Welcome component.
    
    
    </p>  
    </div>



    <div className='pt-3'>
    
    <h4>Step 2: Pass Props to a Component 
    </h4> 
  </div>
  
  <div className='pt-2'>
       <p className='text-justify wid'><span className='text-danger'>Props</span>  are passed when the component is used, like this
     
     
     </p>  
     </div>
 
     <div className='text-justify wid pt-4 bglights pt-4 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  <Welcome name="Alice" /> `}
 </h5> 
</div>




</div>
   

  
 </div>



 
 <div className='pt-2'>
      <p className='text-justify wid'>The value of the name <span className='text-danger'>Props</span> will be "Alice".
    
    
    </p>  
    </div>

   

    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b>  </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`function`} <span className='text-warning'>Greeting </span>{`(`}<span className='text-danger'>props</span>{`) {`}</p>
                <p className=''>   {`return <h1>Welcome`}, <span className='text-danger'>{`props.username`}</span>{`!</h1>;`}

                </p>
                <p>{`}`}</p>
                <p className=''>{`function App() {`} 

                </p>
                
                <p className='text-danger'>  {` return (`}

                </p>
                <p className=''>      {`<div>`}

                </p>
                <p className=''>         {`<`}<span className='text-warning'>Greeting</span> {`username="John" />`}

            </p>
                <p className=''>         {`<`}<span className='text-warning'>Greeting </span>{`username="Jane" />`}

                </p>
       
                <p className=''>      {`</div>`}

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

export default ReactPropsPage