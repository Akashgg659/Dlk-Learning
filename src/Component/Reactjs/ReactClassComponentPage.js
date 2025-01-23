import React from 'react'
import { Link } from 'react-router-dom'


const ReactClassComponentPage = () => {
  return (
    <div className='paddownforcol'>
   
    <div >
   <h1>React Class Components
   </h1> 
 </div>

 <div className='pt-3'>
   <p className='text-justify wid'>Class components in React are ES6 classes that extend from <span className='text-danger'>React.Component</span>. They are one of the primary ways to define components in React, especially in older React codebases. Class components offer features like state management and lifecycle methods
    </p>
 </div>



 <div className='pt-4'>
   <h4><b>Key Features of Class Components</b>
   </h4> 
 </div>



 <div className='pt-2'>
      <p className='text-justify wid'><b>Must Extend React.Component:</b> Class components are created by extending the base class <span className='text-danger'>React.Component</span>
    </p>  
    <p className='text-justify wid'><b>Requires a render() Method:</b> Every class component must have a <span className='text-danger'>render()</span> method that returns JSX.</p>
    <p className='text-justify wid'><b>State Management:</b> Class components use the <span className='text-danger'>this.state</span> object to manage component-specific data.</p>
    <p className='text-justify wid'>
    <b>Lifecycle Methods:</b> Class components have access to various lifecycle methods like <span className='text-danger'> componentDidMount() </span>, <span className='text-danger'> componentDidUpdate() </span>, and <span className='text-danger'> componentWillUnmount() </span>
    </p>
    
    </div>

    <div className='pt-4'>
   <h4><b>Lifecycle Methods in Class Components</b>
   </h4> 
 </div>

 <div className='pt-2'>
    <p className='text-justify wid'>Lifecycle methods allow you to hook into different stages of a component's lifecycle.</p>
      
    </div>



    <p className='text-justify wid'><b>1. componentDidMount():</b> Runs after the component is rendered
    </p>  
    <p className='text-justify wid'><b>2. componentDidUpdate():</b>Runs after the component is updated</p>
    <p className='text-justify wid'><b>3. componentWillUnmount():</b> Runs before the component is removed.</p>
    


 


 
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b>  </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`import React, { Component } from 'react';`}</p>
                <p className=''><span className='text-danger'> {`class`} </span>{`Timer extends Component {`}

                </p>
                <p className=''><span className='text-danger'>{`constructor`}</span> {`(props) {`}</p>
               
                <p>  {`super(props)`}</p>
                <p>  {`this.state = { time: new Date() }`}</p>
                <p>{` }`}</p>
                <p>  {`super(props)`}</p>
                <p>  {`this.timerID = setInterval(() => this.tick(), 1000);`}</p>
                <p>{`}`}</p>

                <p><span className='text-danger'>{` componentWillUnmount()`}</span> {`{`}</p>
                <p>  {`clearInterval(this.timerID);`}</p>
                <p>{`}`}</p>
                <p>{` tick() {`}</p>
                <p>  {`this.setState({ time: new Date() });`}</p>
                <p>{`}`}</p>
               

                <p className='text-danger'>{`render() {`}</p>
                <p>  {`return <h2>It is {this.state.time.toLocaleTimeString()}.</h2>;`}</p>
                <p>  {`}`}</p>
                <p className='text-danger'>{`}`}</p>
<p className=''>{`export default Timer;`}

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
   <h4><b>When to Use Class Components</b>
   </h4> 
 </div>


 <div className='pt-2'>
    <p className='text-justify wid'>Although functional components with Hooks are now preferred, class components are still relevant in older codebases. You might encounter class components when maintaining or refactoring legacy React applications.</p>
      <p className='text-justify wid'>For modern projects, functional components combined with Hooks are the standard approach
    
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

export default ReactClassComponentPage