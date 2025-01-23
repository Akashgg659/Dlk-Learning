import React from 'react'
import { Link } from 'react-router-dom'


const ReactUsecontextpage = () => {
  return (
    <div className='paddownforcol'>
   
    <div >
   <h1>React <span className='text-danger'> useContext </span> Hook
   </h1> 
 </div>

 <div className='pt-3'>
   <p className='text-justify wid'>The useContext hook in React is used to consume data from a React context. Context provides a way to pass data through the component tree without having to manually pass props down through each level.
</p>  
 </div>

 <div className='pt-2'>
   <h3>React <span className=''> Context </span> 
   </h3> 
 </div>

 
 <div className='pt-2'>
      <p className='text-justify wid'>React Context is a way to manage state globally
    
    
    </p>  
    </div>

    
 <div>
      <p className='text-justify wid'>It can be used together with the  useState Hook to share state between deeply nested components more easily than with useState alone.


    
    
    </p>  
    </div> 

    <div className='pt-4'>
   <h3>Steps to Use the <span className='text-danger'>useContext</span>  Hook 
   </h3> 
 </div>

 <div className='pt-4'>
   <h3>1. create a Context
   </h3> 
 </div>

 <div>
      
      <p className='text-justify wid'>Use <span className='text-danger'>React.createContext</span>  to create a context. This context will act as a container for the shared state or values.


    
    
    </p>  
 
  
    </div> 
 
 <div className='text-justify wid pt-4 bglights pt-4'>


   
<div className=''>
   <h5>{` import React, { createContext } from "react"; `}
   </h5> 
 </div>
 <div className='pt-2'>
   <h5>{` const MyContext = createContext();`}
   </h5> 
 </div>

 
  
 </div>



 <div className='pt-4'>
   <h3>2. Provide the Context
   </h3> 
 </div>

 <div>
      
      <p className='text-justify wid'>Use the <span className='text-danger'>Provider</span> component to supply the context value to the component tree.

    
    
    </p>  
 
  
    </div> 

    <div className='text-justify wid pt-4 bglights pt-4'>


   
<div className=''>
   <h5>{` const MyProvider = ({ children }) => {`}
   </h5> 
 </div>
 <div className='pt-2'>
   <h5> { `const sharedValue = "Hello, World!";`}
   </h5> 
 </div>
 <div className='pt-2'>
   <h5> { ` return (`}
   </h5> 
 </div>

 <div className='pt-2'>
   <h5> { `   <MyContext.Provider value={sharedValue}>`}
   </h5> 
 </div>
 <div className='pt-2'>
   <h5> { `    {children}`}
   </h5> 
 </div>

 <div className='pt-2'>
   <h5> { `    </MyContext.Provider>`}
   </h5> 
 </div>

 <div className='pt-2'>
   <h5> { `    );`}
   </h5> 
 </div>
 <div className='pt-2'>
   <h5> { `   };`}
   </h5> 
 </div>
  
 </div>
 
 <div className='pt-4'>
   <h3>3. Consume the Context with useContext
   </h3> 
 </div>


 <div>
      
      <p className='text-justify wid'>Inside any component that needs access to the context, use the <span className='text-danger'>useContext</span> hook.

    
    
    </p>  
 
  
    </div> 

    <div className='text-justify wid pt-4 bglights pt-4'>


   
<div className=''>
   <h5>{` import React, { useContext } from "react";`}
   </h5> 
 </div>
 <div className='pt-4'>
   <h5> { `const MyComponent = () => {`}
   </h5> 
 </div>
 <div className='pt-2'>
   <h5> { ` const value = useContext(MyContext);`}
   </h5> 
 </div>

 <div className='pt-4'>
   <h5> { `   <MyContext.Provider value={sharedValue}>`}
   </h5> 
 </div>
 <div className='pt-2'>
   <h5> { `    return <div>{value}</div>;`}
   </h5> 
 </div>

 <div className='pt-2'>
   <h5> { `    };`}
   </h5> 
 </div>


  
 </div>

 <div className='pt-4'>
   <h3>4. Combine it Together
   </h3> 
 </div>

 <div>
      
      <p className='text-justify wid'>Wrap the consumer component (or entire application) with the <span className='text-danger'>provider</span>

    
    
    </p>  
 
  
    </div>


 <div className='text-justify wid pt-4 bglights pt-4'>


   
<div className=''>
   <h5>{` const App = () => (`}
   </h5> 
 </div>
 <div className='pt-4'>
   <h5> { ` <MyProvider>`}
   </h5> 
 </div>
 <div className='pt-2'>
   <h5> { ` <MyComponent />`}
   </h5> 
 </div>

 <div className='pt-4'>
   <h5> { `   </MyProvider>`}
   </h5> 
 </div>
 <div className='pt-2'>
   <h5> { `    );`}
   </h5> 
 </div>

 <div className='pt-2'>
   <h5> { `    export default App;`}
   </h5> 
 </div>


  
 </div>

 

    <div className='pt-4'>
      
      <p className='text-justify wid'><span className='text-danger '>useContext</span> allows for direct consumption of the context value without needing Consumer components

    
    
    </p>  
 
  
    </div>
    <div className='pt-2'>
      
      <p className='text-justify wid'>It's particularly useful for avoiding "prop drilling" (passing props through multiple layers)
    
    
    </p>  
 
  
    </div>
    <div className='pt-2'>
      
      <p className='text-justify wid'>Context should be used sparingly, as it can make state management more complex if overused.

    
    
    </p>  
 
  
    </div>

    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0">Example</h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''><span className='text'><span className='text-success'>import</span></span> {`{ useState, createContext, useContext }`} <span className='text-success'>from</span> "react"; </p>
                <p><span className='text-success'>import</span> ReactDOM <span className='text-success'>from</span> "react-dom/client"; </p>
                <p className='pt-3 '>{`const `}<span className='' >UserContext</span>{`=`} <span className='text-danger' >{`createContext()`}</span>;
                </p>
                <p className=' '>function Component1() {`{ `}
                </p>
                <p className=' '> {` const [user, setUser] = useState("Jesse Hall");`}
                </p>
                <p className=' '> {` return ( `}
                </p>

               <p className=' '> {`<`} <span className='text-danger'>{`UserContext.Provider`}</span>{` value={user}>`}
                </p>
                <p className=' '> {`<h1> Hello </h1> ${`user`} !`}
                </p>
                <p className=' '> {` <Component2 /> `}
                </p>
                <p className=' text-danger'> {` </UserContext.Provider>`}
                </p>
                <p className=' '> {`  ); `}
                </p>
                <p className=' '> {` } `}
                </p>
                <p className=' '> {` function Component2() {`}

                </p>
                <p className=' '> {`   const user =`} <span className='text-danger'>{`useContext(UserContext)`}</span>;

                </p>

              
                <p className=' '> {` <> `}
                </p>
                <p className=' '> {` <h1>Component 2</h1>`}
                </p>
                <p className=' '> {`  <Component3 /> `}

                </p>
                <p className=' '> {`<h1> Hello </h1> ${`user`} !`}
                </p>
                <p className=' '> {` </> `}
                </p>
                <p className=' '> {` ); `}
                </p>
                <p className=' '> {` } `}
                </p>
               
                
                <p>
                const root = ReactDOM.createRoot(document.getElementById('root'));</p>
                <p className=' '> {` root.render(<Component1 />); `}
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
  



 
 <div className="d-flex justify-content-end">
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

export default ReactUsecontextpage