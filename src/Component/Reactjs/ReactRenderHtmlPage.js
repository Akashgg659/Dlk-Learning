import React from 'react'
import { Link } from 'react-router-dom'


const ReactRenderHtmlPage = () => {
  return (
    <div className='paddownforcol'>
   
    <div >
   <h1>React <span className=''>Render</span> HTML
   </h1> 
 </div>

 <div className='pt-3'>
   <p className='text-justify wid'>React's primary purpose is to render HTML to the web page efficiently. It achieves this using the <span className='text-danger'> createRoot() </span> function and the <span className='text-danger'> render() </span> method provided by ReactDOM.
</p>  
 </div>

 <div className='pt-4'>
   <h4><b>1. <span className=''> createRoot( ) </span> Function</b> 
   </h4> 
 </div>

 
 <div className='pt-2'>
      <p className='text-justify wid'>The <span className='text-danger'> createRoot( ) </span> function initializes React rendering for a specific HTML element.
    
    
    </p>  
    </div>

    <div className='pt-2'>
      <p className='text-justify wid'><b>Purpose:</b> Defines the HTML element where a React component will be rendered.
    
    </p> 
    <p className='text-justify wid'><b>Argument:</b>An HTML DOM element (e.g., document.<span className='text-danger'>getElementById</span>(<span className='text-success'> 'root' </span>)).
    
    </p> 

    </div> 
    
   



 
 
 <div className='text-justify wid pt-4 bglights pt-4 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  const container = document.getElementById('root'); `}
 </h5> 
</div>
<div className='pt-2'>
 <h5>{` const root = ReactDOM.createRoot(container);`}
 </h5> 
</div>



</div>
   

  
 </div>


 <div className='pt-2'>
      <p className='text-justify wid'>Here, container points to the HTML element (<span className='text-danger'>{`<div id="root">`}</span>) where React will render its content.
    
    
    </p>  
    </div>



 <div className='pt-4'>
   <h4><b>2. The render() Method</b>.
   </h4> 
 </div>

 
 <div className='pt-2'>
      <p className='text-justify wid'>The <span className='text-danger'>render()</span> method is called on the root object created by <span className='text-danger'>createRoot()</span> to display a React component or element inside the target container.
    
    
    </p>  
    </div>

    <div className='pt-2'>
      <p className='text-justify wid'><b>Purpose:</b> Defines what React component or HTML element will be rendered
    </p> 
 

    </div> 
    

    <div className='text-justify wid pt-4 bglights pt-4 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  root.render(<h1>Hello, React!</h1>); `}
 </h5> 
</div>




</div>
   

  
 </div>


 <div className='pt-4'>
   <h4><b>3. Where Does React Render?</b>
   </h4> 
 </div>

 <div className='pt-2'>
      <p className='text-justify wid'>React renders its content inside the target element defined by <span className='text-danger'>createRoot()</span> — typically an empty  {`<div>`}  in the <span className ="text-danger">index.html</span> file located in the public folder
    
    
    </p>  
    </div>

    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b>   </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`const container = document`}.<span className='text-danger'>{`getElementById`}</span>('root');</p>
                <p className=''>{`const root = ReactDOM`}.<span className='text-danger'>{`createRoot`}</span>(container);

                </p>
                <p className=''>{`root`}.<span className='text-danger'>{`render`}</span>{`(<p>Hello, React!</p>);`}

                </p>
                
                <p className=''>{`<body>`}

                </p>
                <p className=''>{`<div id="root">`}

                </p>
                <p className=''>{`<p>Hello, React!</p>`}

            </p>
                <p className=''>{`</div>`}

                </p>
       
                <p className=''>{`</body>`}

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

export default ReactRenderHtmlPage