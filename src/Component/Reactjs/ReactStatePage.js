import React from 'react'
import { Link } from 'react-router-dom'


const ReactStatePage = () => {
  return (
    <div className='paddownforcol'>
   
    <div >
   <h1>React <span className=''>State</span>
   </h1> 
 </div>

 <div className='pt-3'>
   <p className='text-justify wid'><span className='text-danger'>State</span> in React is an object that holds data or information about a component. It allows components to maintain and update data dynamically, making your application interactive and responsive.
</p>  
 </div>



 <div className='pt-4'>
   <h4><b>State is Mutable:</b>
   </h4> 
 </div>



 <div className='pt-2'>
      <p className='text-justify wid'>Unlike props, the <span className='text-danger'>State</span> can be changed within a component.
    
    
    </p>  
    </div>





 <div className='pt-4'>
   <h4><b>State is Local</b> 
   </h4> 
 </div>


 <div className='pt-2'>
      <p className='text-justify wid'>Each component manages its own <span className='text-danger'>State</span>, which is isolated from other components.
    
    
    </p>  
    </div>



 <div className='pt-4'>
   <h4><b>State Triggers Re-Rendering</b> 
   </h4> 
 </div>

 <div className='pt-2'>
      <p className='text-justify wid'>When the <span className='text-danger'>State</span> changes, React re-renders the component to reflect the updated data.
    
    </p>  
    </div>
    <div className='pt-4'>
   <h4><b>How to Use State</b> 
   </h4> 
   
 </div>
 <div className='pt-3'>
    
   <h4>Using State in Function Components
   </h4> 
 </div>
 
 <div className='pt-2'>
      <p className='text-justify wid'>React provides the <span className='text-danger'>useState</span> hook to manage <span className='text-danger'>State</span> in function components.
    
    
    </p>  
    </div>

  
    
   



 
 

   

    <div class="container py-2 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b>  </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`import React, {`} <span className='text-danger'>useState</span> {`} from 'react';`}</p>
                <p className=''>   {`function `}<span className='text-success'>Counter</span>{`() {`}

                </p>
                <p>{`}`}</p>
                <p className=''>{`const [count, setCount] =`} <span className='text-danger'>useState(0)</span>;  <span className='text-primary'>// Declare state variable 'count'</span>

                </p>
                
                <p className='text-danger'>  {` return (`}

                </p>
                <p className=''>      {`<div>`}

                </p>
                <p className=''>         {` <p>Count: {count}</p>`}

            </p>
                <p className=''>         {`<button `}<span className='text-danger'>onClick</span>{`={() => setCount(count + 1)}>Increment</button>`}

                </p>
       
                <p className=''>      {`</div>`}

                </p>
                
                <p className='text-danger'>  {`);`}

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
      <p className='text-justify wid'><span className='text-danger'>useState(0)</span> initializes the count state variable with a value of 0
    
    
    </p>  
    </div>
    
    <div className='pt-2'>
      <p className='text-justify wid'>setCount is a function to update the count
    
    
    </p>  
    </div>

    <div className='pt-3'>
    
    <h4>Using State in Class Components
    </h4> 
  </div>
  <div className='pt-2'>
      <p className='text-justify wid'>In class components, state is managed using <span className='text-danger'>this.state </span>and updated with <span className='text-danger'> this.setState() </span>
    
    
    </p>  
    </div>

    <div class="container py-2 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b>  </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`import React, {`} <span className='text-danger'>Component</span> {`} from 'react';`}</p>
                <p className=''>{`class Counter extends Component {`}

                </p>
                <p>   {`constructor(props) {`}</p>
                <p className=''>  {` super(props);`} 

                </p>
                
                <p className='text-danger'> {`  this.state = { count: 0 };`}    // Initialize state

                </p>
                <p className=''>      {`}`}

                </p>
                <p className=''>        {` increment = () => {`}

            </p>
                <p className=''>         {`this.setState({ count: this.state.count + 1 });`} // Update state

                </p>
       
                <p className=''>      {`};`}

                </p>
                
                


                          <p className=''>{`render() {`}

                          </p>               <p className='text-danger'>
                            {`return (`}
                          </p>

                       <p>  {`<div>`}</p>
                       <p>   {` <p>Count: {this.state.count}</p>`}</p>
                       <p>   {`<button onClick={this.increment}>Increment</button>`}</p>
                       <p>  {`</div>`}</p>
                       <p className='text-danger'>  {`);`}</p>
                       <p> {` }`}</p>
                       <p>{` }`}</p>
               
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

export default ReactStatePage