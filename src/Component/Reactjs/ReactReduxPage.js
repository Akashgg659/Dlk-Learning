import React from 'react'
import { Link } from 'react-router-dom'


const ReactReduxPage = () => {
  return (
    <div className='paddownforcol'>
   
    <div >
   <h1>React Redux
   </h1> 
 </div>

 <div className='pt-3'>
   <p className='text-justify wid'>React <span className='text-danger'>Redux </span>is a state management library used with React to manage and share the state of an application across components efficiently. It helps handle complex state logic by centralizing the application's state in a single <span className='text-danger'>"store."</span>
</p>  
 </div>





 <div className='pt-4'>
   <h3><b>Why Use Redux in React?</b>
   </h3> 
 </div>
 <div className='pt-4'>
   <h4><b>Centralized State Management</b>
   </h4> 
 </div>



 <div className='pt-2'>
      <p className='text-justify wid'>All application states are stored in a central location (the Redux store), making it easier to manage and debug
    
    </p>  
    </div>





 <div className='pt-4'>
   <h4><b>Global State Sharing</b> 
   </h4> 
 </div>


 <div className='pt-2'>
      <p className='text-justify wid'>Redux allows multiple components to access and update the same state without passing props through multiple levels of components.
    
    
    </p>  
    </div>



 <div className='pt-4'>
   <h4><b>Predictable State Updates</b> 
   </h4> 
 </div>

 <div className='pt-2'>
      <p className='text-justify wid'>State changes in Redux follow a strict process using actions and reducers, ensuring consistency.


    
    </p>  



    

    
    </div>

    <div className='pt-4'>
   <h4><b>Time Travel Debugging</b> 
   </h4> 
 </div>

 <div className='pt-2'>
      <p className='text-justify wid'>Redux DevTools allows you to inspect every state change, replay actions, and debug effectively


    
    </p>  



    

    
    </div>

    <div className='pt-4'>
   <h3><b>Core Concepts of Redux</b> 
   </h3> </div>



    <div className='  d-flex justify-content-start '>

<div>
  <img src='/images/redu.gif' alt='img' className='img-fluid' width={600}></img>
</div>
 
  
 </div>

    <div className='pt-4'>
   <h3><b>Store</b> 
   </h3> 
   
 </div>
 
 
 <div className='pt-2'>
      <p className='text-justify wid'>The central location where the application's state is stored
    
    </p>  
    </div>

  
    
    <div className='pt-2'>
   <h3><b> Actions</b> 
   </h3> 
   
 </div>
 
 
 <div className='pt-2'>
      <p className='text-justify wid'>
      Plain JavaScript objects that describe what should happen in the app. They always contain a <span className='text-danger'>type</span> property.
    
    </p>  
    </div>

    <div className='pt-2'>
   <h3><b> Reducers:</b> 
   </h3> 
   
 </div>
 
 
 <div className='pt-2'>
      <p className='text-justify wid'>
      Functions that determine how the state is updated in response to an action. They take the current state and an action as inputs and return the new state
    </p>  
    </div>


    <div className='pt-2'>
   <h3><b> Dispatch</b> 
   </h3> 
   
 </div>
 
 
 <div className='pt-2'>
      <p className='text-justify wid'>
      A method used to send actions to the <span className='text-danger'>store</span> to trigger state updates.


    </p>  
    </div>

    <div className='pt-2'>
   <h3><b> Selectors</b> 
   </h3> 
   
 </div>
 
 
 <div className='pt-2'>
      <p className='text-justify wid'>
      Functions used to extract specific parts of the state from the store
    </p>  
    </div>
    <div className='pt-2'>
   <h3><b> How React and Redux Work Together</b> 
   </h3> 
   
 </div>
 
 
 <div className='pt-2'>
      <p className='text-justify wid'>
      React Redux uses a library called react-redux to connect React components to the Redux store. It provides tools like <span className='text-danger'>Provider</span>, <span className='text-danger'>useSelector</span>, and <span className='text-danger'>useDispatch</span>
    </p>  
    </div>

    <div className='pt-2'>
   <h3><b> Steps to Integrate Redux in a React Application</b> 
   </h3> 
   
 </div>
 <div className='pt-4'>
   <h4> Step 1: Install Redux Libraries
   </h4> 
   
 </div>
 
 
 <div className='pt-2'>
      <p className='text-justify wid'>
      Run the following commands in your project directory
    </p>  
    </div>

 
 
 <div className='text-justify wid pt-4 bglights pt-3 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  npm install redux react-redux `}
 </h5> 
</div>




</div>
   

  
 </div>


 <div className='pt-4'>
   <h4> Step 2: Create a Redux Store
   </h4> 
   
 </div>
 
 
 <div className='pt-2'>
      <p className='text-justify wid'>
      The store holds the application's state
    </p>  
    </div>

 
 
 <div className='text-justify wid pt-4 bglights pt-3 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  import { createStore } from 'redux'; `}
 </h5> 
 <h5>{`  const initialState = { counter: 0 }; `}
 </h5> 
 <h5>{`  function counterReducer(state = initialState, action) { `}
 </h5> 
 <h5> {`   switch (action.type) { `}
 </h5> 
 <h5>  {`  case 'INCREMENT': `}
 </h5> 
 <h5>   { `  return { counter: state.counter + 1 }; `}
 </h5> 
 <h5>  {`  case 'DECREMENT': `}
 </h5> 
 <h5>    {`   return { counter: state.counter - 1 }; `}
 </h5> 
 <h5>  {`  default: `}
 </h5> 
 <h5>     {`  return state; `}
 </h5> 
 <h5> {`  } `}
 </h5> 
 <h5>{`  } `}
 </h5> 
 <h5>{`  const store = createStore(counterReducer); `}
 </h5> 
 <h5>{` export default store; `}
 </h5> 
</div>




</div>
   

  
 </div>

 <div className='pt-4'>
   <h4> Step 3: Provide the Store to React
   </h4> 
   
 </div>
 
 
 <div className='pt-2'>
      <p className='text-justify wid'>
      Wrap your React app with the <span className='text-danger'>Provider</span> component and pass the store as a prop
    </p>  
    </div>

 
 
 <div className='text-justify wid pt-4 bglights pt-3 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  import React from 'react'; `}
 </h5> 
 <h5>{`  import ReactDOM from 'react-dom'; `}
 </h5> 
 <h5>{`  import { Provider } from 'react-redux'; `}
 </h5> 
 <h5> {`  import store from './store'; `}
 </h5> 
 <h5>  {` import App from './App'; `}
 </h5> 
 <h5>   { `  ReactDOM.createRoot(document.getElementById('root')).render( `}
 </h5> 
 <h5>  {`  <Provider store={store}>`}
 </h5> 
 <h5>    {`    <App /> `}
 </h5> 
 <h5>  {`  </Provider>`}
 </h5> 
 <h5>     {`  ); `}
 </h5> 
</div>




</div>
   

  
 </div>

 <div className='pt-4'>
   <h4> Step 4: Use Redux in Components
   </h4> 
   
 </div>
 
 
 <div className='pt-2'>
      <p className='text-justify wid'>
      Use the <span className='text-danger'>useSelector</span> and <span className='text-danger'>useDispatch</span> hooks to interact with the Redux store.
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
                <p className=''>{`import {`} <span className='text-danger'>{`useSelector, useDispatch `}</span>{`} from 'react-redux';`}

                </p>
                <p>{`}`}</p>
                <p className=''>{`function`} <span className='text-danger'>{`Counter()`}</span> {`{`} 

                </p>
                
                <p className=''>  {` const counter =`} <span className='text-danger'>{`useSelector`}</span>{`((state) => state.counter);`}

                </p>
                <p className=''>   {`const dispatch = `}<span className='text-danger'>{`useDispatch()`}</span>;

                </p>
                <p className=''>    {`return (`}

            </p>
                <p className=''>        {`<div>`}

                </p>
       
                <p className=''>          {` <h1>Counter: {counter}</h1>`}

                </p>
                
                <p className=''>           {`<button onClick={() =>`} <span className='text-danger'>dispatch</span>{`({ type: 'INCREMENT' })}>Increment</button>`}

</p>
<p className=''>           {`<button onClick={() => `}<span className='text-danger'>dispatch</span>{`({ type: 'DECREMENT' })}>Decrement</button>`}

</p>
<p className=''>        {`</div>`}
</p>
<p className=''>{`);`}
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

 
   <div className='pt-4'>
   <h3>Key Redux Methods
   </h3> 
   
 </div>

 
 <div className='pt-4'>
   <h4><b>createStore(reducer)</b>:
   </h4> 
   
 </div>
 
 
 <div className='pt-2'>
      <p className='text-justify wid'>
      Creates the Redux store and accepts the root reducer
    </p>  
    </div>

   

 
 <div className='pt-4'>
   <h4><b>useSelector(callback)</b>:
   </h4> 
   
 </div>
 
 
 <div className='pt-2'>
      <p className='text-justify wid'>
      Retrieves data from the store's state.
    </p>  
    </div>
 
 
    <div className='pt-4'>
   <h4><b>useDispatch():</b>
   </h4> 
   
 </div>
 
 
 <div className='pt-2'>
      <p className='text-justify wid'>
      Dispatches actions to update the state.
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

export default ReactReduxPage