import React from 'react'
import { Link } from 'react-router-dom'


const ReactComponentPage = () => {
  return (
    <div className='paddownforcol'>
   
    <div >
   <h1>React Components
   </h1> 
 </div>

 <div className='pt-3'>
   <p className='text-justify wid'>React components are the building blocks of any React application. They work like JavaScript functions, but instead of just performing a task, they return HTML (using JSX) that defines the structure and content of the UI.
    </p>
 </div>



 <div className='pt-4'>
   <h4><b>What are React Components?</b>
   </h4> 
 </div>



 <div className='pt-2'>
      <p className='text-justify wid'>Components are <span className='text-danger'>independent</span> and <span className='text-danger'>reusable</span> bits of code
    
    </p>  
    <p className='text-justify wid'>They work in isolation, manage their own logic, and return HTML</p>
    <p className='text-justify wid'>React components can be divided into two main types:</p>
    <p className='text-justify wid'>
    <b>1. Class Components</b> (older, less common now)
    </p>
    <p className='text-justify wid'><b>2. Function Components</b> (modern and widely used)</p>
    </div>





 <div className='pt-4'>
   <h4><b>Creating Your First Component</b> 
   </h4> 
 </div>


 <div className='pt-2'>
    <p className='text-justify wid'><b>Class Component</b></p>
      <p className='text-justify wid'>A class component is defined using an ES6 class that extends React.Component. It must include a render() method that returns HTML.
    
    
    </p>  
    </div>

 
 
 <div className='text-justify wid pt-4 bglights pt-4 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  import React from 'react'; `}
 </h5> 
</div>
<div className='pt-2'>
 <h5>      {`class Car extends React.Component {`}
 </h5> 
 <h5>{` render() {`}</h5>
 <h5>{`return <h2>Hi, I am a Car!</h2>;`}</h5>
 <h5>{` }`}</h5>
 <h5>{` }`}</h5>
 <h5>{ `export default Car ;`}</h5>
</div>



</div>
   

  
 </div>


 <div className='pt-4'>
    <p className='text-justify wid'><b>Function Component</b></p>
      <p className='text-justify wid'>A function component is a simple JavaScript function that returns JSX. It is the recommended way to create components in modern React.
    
    
    </p>  
    </div>

 
 
 <div className='text-justify wid pt-4 bglights pt-4 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  function Car() { `}
 </h5> 
</div>
<div className='pt-2'>
 <h5>      {`return <h2>Hi, I am a Car!</h2>;`}
 </h5> 
 <h5>{` }`}</h5>
 <h5>{`export default Car;`}</h5>
 
</div>



</div>
   

  
 </div>

 <div className='pt-4'>
   <h4><b>Rendering a Component</b>
   </h4> 
 </div>


 <div className='pt-2'>
    <p className='text-justify wid'>To render a component and display it in the DOM:</p>
      <p className='text-justify wid'>1. Import the component.
    
    </p>  
    <p className='text-justify wid'>2. Use the <span className='text-danger'>render()</span> method to display it inside a target HTML element
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
                <p className=''>{`import ReactDOM from 'react-dom/client';`}

                </p>
                <p>{`import `}<span className='text-danger'> Car </span>{`from './Car';`}</p>
               
                
                
               


<p className=''>{`const root = ReactDOM.createRoot(document.`}<span className='text-danger'>{`getElementById`}</span>{`('root'));`}

</p>
<p className=''>{`root.`}<span className='text-danger'>render</span>{`(`}<span className='text-warning'>{`<Car />`}</span>{`);`}

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
   <h4><b>Using Props in Components</b>
   </h4> 
 </div>


 <div className='pt-2'>
    <p className='text-justify wid'>Props (short for "properties") are used to pass data from parent components to child components. They work like function arguments.</p>
      <p className='text-justify wid'>Passing a color as a prop:
    
    </p>  
      
    </div>

 
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b>  </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`function Car(props) {`}</p>
                <p className=''>{` return <h2>I am a {props.color} Car!</h2>;`}

                </p>
                <p>{`}`}</p>
               
               
                
                
               


<p className=''>{`const root = ReactDOM.createRoot(document.`}<span className='text-danger'>{`getElementById`}</span>{`('root'));`}

</p>
<p className=''>{`root.`}<span className='text-danger'>render</span>{`(`}<span className='text-warning'>{`<Car`}</span> color="red" ,<span className='text-warning'>{`/>`}</span>{`);`}

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
   <h4><b>Organizing Components in Files</b>
   </h4> 
 </div>


 <div className='pt-2'>
    <p className='text-justify wid'>To keep your project organized, you can separate components into their own files.</p>
      <p className='text-justify wid'>1. Create a file named <span className='text-danger'>Car.js</span>:
    
    </p>  
      
    </div>


    
 <div className='text-justify wid pt-4 bglights pt-4 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  function Car() { `}
 </h5> 
</div>
<div className='pt-2'>
 <h5>      {`return <h2>Hi, I am a Car!</h2>;`}
 </h5> 
 <h5>{` }`}</h5>
 <h5>{`export default Car;`}</h5>
 
</div>



</div>
   

  
 </div>

 
 <div className='pt-2'>
   
      <p className='text-justify wid'>2. Import it in your <b>main file</b>:
    
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
                <p className=''>{`import ReactDOM from 'react-dom/client';`}

                </p>
                <p>{`import `}<span className='text-danger'> Car </span>{`from './Car';`}</p>
               
                
                
               


<p className=''>{`const root = ReactDOM.createRoot(document.`}<span className='text-danger'>{`getElementById`}</span>{`('root'));`}

</p>
<p className=''>{`root.`}<span className='text-danger'>render</span>{`(`}<span className='text-warning'>{`<Car />`}</span>{`);`}

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



   <div className='pt-3'>
    
    <h4><b>Why Use Components?</b>
    </h4> 
  </div>

 <div className='pt-2'>
      <p className='text-justify wid'><b>Reusability:</b> Write once, use multiple times.</p>  
      <p className='text-justify wid'><b>Modularity:</b> Keeps code clean and organized..</p>  
      <p className='text-justify wid'><b>Separation of Concerns:</b>Each component handles its own logic and presentation</p>  
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

export default ReactComponentPage