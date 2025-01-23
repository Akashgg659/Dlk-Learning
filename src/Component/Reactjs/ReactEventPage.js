import React from 'react'
import { Link } from 'react-router-dom'


const ReactEventPage = () => {
  return (
    <div className='paddownforcol'>
   
    <div >
   <h1>React Events
   </h1> 
 </div>

 <div className='pt-3'>
   <p className='text-justify wid'>React events are similar to native DOM events, but they follow a slightly different syntax and approach. Events in React allow you to capture user interactions like clicks, keypresses,change, mouseover  form submissions, and etc
</p>  
 </div>



 <div className='pt-4'>
   <h4><b>CamelCase Syntax</b>
   </h4> 
 </div>



 <div className='pt-2'>
      <p className='text-justify wid'>Event names in React are written in camelCase, e.g., <span className='text-danger'>onClick</span>, <span className='text-danger'>onMouseOver</span>.
    
    </p>  
    </div>





 <div className='pt-4'>
   <h4><b>Event Handlers as Functions</b> 
   </h4> 
 </div>


 <div className='pt-2'>
      <p className='text-justify wid'>React events are handled using functions, which can be inline or defined separately
    
    </p>  
    </div>



 <div className='pt-4'>
   <h4><b>Synthetic Events</b> 
   </h4> 
 </div>

 <div className='pt-2'>
      <p className='text-justify wid'>React wraps native events in a cross-browser wrapper called <span className='text-danger'>SyntheticEvent</span>, which provides consistent behavior across browsers.
    
    </p>  
    </div>
    <div className='pt-4'>
   <h4><b>Adding an Event</b> 
   </h4> 
   
 </div>

 
 <div className='pt-2'>
      <p className='text-justify wid'>To add an event in React, pass the event handler function as a prop to a JSX element.
    
    
    </p>  
    </div>

   

    <div class="container py-1 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b> Click Event </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`function Button() {`}</p>
                <p className=''> {` function `}<span className='text-danger'>handleClick</span>{`() {`}
                </p>
                <p>  {` alert('Button was clicked!');`}</p>
                <p className=''>  {` }`} 

                </p>
                
                <p className=''> { ` return <button`}<span className='text-danger'> onClick </span> {`= {handleClick}>Click Me</button>;`}

                </p>
                <p className=''>{`}`}

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
      <p className='text-justify wid'>Here, the <span className='text-danger'>onClick</span> event is triggered when the button is clicked.
    
    
    </p>  
    </div>

    <div className='pt-4'>
   <h4><b>Passing Arguments to Event Handlers</b> 
   </h4> 
   
 </div>

 <div className='pt-2'>
      <p className='text-justify wid'>You can pass arguments to event handlers using an arrow function or the <span className='text-danger'>bind()</span> method.
    
    </p>  
    </div>

    <div class="container py-1 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b> Click Event </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`function`} <span className='text-danger'>Greeting</span>{`() {`}</p>
                <p className=''> {` function `}<span className='text-danger'>sayHello</span>{`(name) {`}
                </p>
               <p>   {`alert(Hello, {name}!);`}</p>
                <p className=''>  {` }`} 

                </p>
                
                <p className=''> { `  return <button`} <span className='text-danger'> onClick </span>{`={() => `}<span className='text-danger'>sayHello</span>{`('Alice')}>Greet</button>;`}
                </p>
                <p className=''>{`}`}

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

export default ReactEventPage