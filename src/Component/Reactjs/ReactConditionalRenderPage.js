import React from 'react'
import { Link } from 'react-router-dom'


const ReactConditionalRenderPage = () => {
  return (
    <div className='paddownforcol'>
   
    <div >
   <h1>React Conditional Rendering
   </h1> 
 </div>

 <div className='pt-3'>
   
    <p className='text-justify wid'>In React, you can conditionally render components based on certain conditions using several methods like <span className='text-danger'>if</span> statements, the logical AND <span className='text-danger'>(&&)</span> operator, and the <span className='text-danger'>ternary</span> operator. These methods allow you to control the flow of the component rendering based on dynamic data or conditions</p>

</div>

 <div className='pt-4'>
   <h4><b>1. Using if Statement</b>
   </h4> 
 </div>



 <div className='pt-2'>
      <p className='text-justify wid'>You can use the standard if JavaScript statement to decide which component to render. This is useful when you need more complex conditions.
    </p>  
   
    </div>

    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b>  </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`function`}<span className='text-danger'> MissedGoal </span>{`() {`}</p>
                <p className=''> {` return <h1>MISSED!</h1>;`}

                </p>
                <p>{`}`}</p>
               
                <p className=''>{`function`}<span className='text-danger'> MadeGoal </span>{`() {`}</p>
                <p className=''> {` return <h1>Goal!</h1>;`}

                </p>
                <p>{`}`}</p>


                <p className=''>{`function`}<span className='text-danger'> Goal </span>{`(Props) {`}</p>
                <p>   {`const isGoal = props.isGoal;`}</p>
                <p>     <span className='text-danger'>{`if `}</span>{`(isGoal) {`}</p>
                <p>     {`return <MadeGoal />;`}</p>
                <p>{`}`}</p>
                <p>   {`return <MissedGoal />;`}</p>
                <p>{`}`}</p>
               

<p className=''>{`const root = ReactDOM.createRoot(document.`}<span className='text-danger'>{`getElementById`}</span>{`('root'));`}

</p>
<p className=''>{`root.`}<span className='text-danger'>render</span>{`(`}<span className='text-warning'>{`<Car `}</span> {`isGoal={false}`} <span className='text-danger'>{`/>`}</span>{`);`}

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
    <p className='text-justify wid'>In this example, the component Goal checks the isGoal prop, and based on whether it is true or false, it will render either MadeGoal or MissedGoal.</p>
      
    </div>



 <div className='pt-4'>
   <h4><b>Using Logical AND (&&) Operator</b> 
   </h4> 
 </div>


 <div className='pt-2'>
  
      <p className='text-justify wid'>Another way to conditionally render components is by using the logical AND (&&) operator. This method works when you want to render something only if a condition is true. If the condition is false, nothing will be rendered.
    
    
    </p>  
    </div>

    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b>  </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`function`}<span className='text-danger'> Garage </span>{`(Props) {`}</p>
                <p className=''> {` const cars = props.cars;`}

                </p>
                <p>{` return (`}</p>
               
                <p className=''>{`<>`}</p>
                <p className=''>  {` <h1>Garage</h1>`}

                </p>
                <p>{`{cars.length > 0`}<span className='text-danger'> {`&&`} </span></p>


                <p className=''>{`<h2>You have {cars.length} cars in your garage.</h2>`}</p>
                <p>   {`}`}</p>
                <p>  {`</>`}</p>
           
                <p>{`)`}</p>
                <p>{`}`}</p>
                <p>   {`const cars = ['Ford', 'BMW', 'Audi'];`}</p>
                
               

<p className=''>{`const root = ReactDOM.createRoot(document.`}<span className='text-danger'>{`getElementById`}</span>{`('root'));`}

</p>
<p className=''>{`root.`}<span className='text-danger'>render</span>{`(`}<span className='text-warning'>{`<Car `}</span>{`{cars}`} <span className='text-danger'>{`/>`}</span>{`);`}

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
    <p className='text-justify wid'>Here, if cars.length is greater than 0, the message is displayed; otherwise, it renders nothing.
    </p>
    </div>
 

   <div className='pt-4'>
   <h4><b>Using the Ternary Operator</b> 
   </h4> 
 </div>


 <div className='pt-2'>
  
      <p className='text-justify wid'>
      The ternary operator is a shorthand for if-else and allows you to return different JSX elements based on a condition. It is often used in JSX directly, making it a concise way of rendering different elements.
    
    
    </p>  
    </div>

    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b>  </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`function`}<span className='text-danger'> Goal </span>{`(Props) {`}</p>
                <p className=''> {` const isgoal = props.cars;`}

                </p>
                <p>{` return (`}</p>
               
                <p className=''>{`<>`}</p>
                <p className=''>  {` {isGoal ? <MadeGoal /> : <MissedGoal />}`}

                </p>
              
                <p>  {`</>`}</p>
           
                <p>{`)`}</p>
                <p>{`}`}</p>
               
                
               

<p className=''>{`const root = ReactDOM.createRoot(document.`}<span className='text-danger'>{`getElementById`}</span>{`('root'));`}

</p>
<p className=''>{`root.`}<span className='text-danger'>render</span>{`(`}<span className='text-warning'>{`<Goal `}</span>{`{isGoal={false}}`} <span className='text-danger'>{`/>`}</span>{`);`}

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
    <p className='text-justify wid'>Here, if isGoal is true, it renders the MadeGoal component, otherwise it renders the MissedGoal component.
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

export default ReactConditionalRenderPage