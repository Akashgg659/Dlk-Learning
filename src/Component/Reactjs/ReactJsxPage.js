import React from 'react'
import { Link } from 'react-router-dom'


const ReactJsxPage = () => {
  return (
    <div className='paddownforcol'>
   
    <div >
   <h1>React JSX
   </h1> 
 </div>

 <div className='pt-3'>
   <p className='text-justify wid'><span className='text-danger'>JSX</span> (JavaScript XML) is a syntax extension for JavaScript, used in React to describe what the UI should look like. It allows you to write <span className='text-danger'>HTML</span>-like code within <span className='text-danger'>JavaScript</span>, which React transforms into function calls for rendering the UI
</p>  
 </div>



 <div className='pt-4'>
   <h4><b>HTML-like Syntax:</b>
   </h4> 
 </div>



 <div className='pt-2'>
      <p className='text-justify wid'><span className='text-danger'>JSX</span>  allows you to write code that resembles HTML, making it easier to visualize the structure of your UI.
    
    </p>  
    </div>





 <div className='pt-4'>
   <h4><b>Embedding Expressions</b> 
   </h4> 
 </div>


 <div className='pt-2'>
      <p className='text-justify wid'>You can embed JavaScript expressions within <span className='text-danger'>JSX</span> using curly braces <span className='text-danger'>{}</span>
    
    
    </p>  
    </div>



 <div className='pt-4'>
   <h4><b>Transpiled to JavaScript</b> 
   </h4> 
 </div>

 <div className='pt-2'>
      <p className='text-justify wid'><span className='text-danger'>JSX</span> is not valid JavaScript. It is transpiled into <span className='text-danger'>React.createElement()</span> calls by tools like Babel.
    
    </p>  
    </div>

   
    
   



 
 
 






 


   

    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Basic JSX Example</b>  </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`const `}<span className='text-danger'>element</span>{` = <h1>Hello, World!</h1>;`}</p>
                
                


<p className=''>{`ReactDOM.createRoot(document.`}<span className='text-danger'>{`getElementById`}</span>{`('root'))..render(`}<span className='text-danger'>element</span>{`);`}

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
      <p className='text-justify wid'>This <span className='text-danger'>JSX</span> code will render an {`<h1>`} element with the text "Hello, World!" in the div with the id <span className='text-danger'>root</span>
    
    
    </p>  
    </div>

    <div className='pt-4'>
   <h4><b>Embedding JavaScript Expressions</b> 
   </h4> 
 </div>
 <div className='pt-2'>
      <p className='text-justify wid'>You can embed dynamic values or JavaScript expressions inside <span className='text-danger'>JSX</span>
    
    </p>  
    </div>
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b>  </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`const`} <span className='text-danger'>name</span> {`= 'Alice';`}</p>
                
                


<p className=''>{`const element = <h1>Hello, {`}<span className='text-danger'> name </span>{`!</h1>;`}

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
      <p className='text-justify wid'>Here, <span className='text-danger'>{`{name}`}</span> is replaced by the value of the variable <span className='text-danger'>name</span>
    
    
    </p>  
    </div>


    <div className='pt-4'>
   <h4><b>JSX with Functions</b> 
   </h4> 
 </div>
 <div className='pt-2'>
      <p className='text-justify wid'>You can call JavaScript functions inside JSX to compute values dynamically
    </p>  
    </div>
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b>  </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`function `}<span className='text-danger'>formatName</span>{`(user) {`}</p>
                
                


<p className=''> {`return user.firstName + ' ' + user.lastName;`}

</p>

   <p className=''>{`}`}

   </p>
   <p>{`const user = { firstName: 'Alice', lastName: 'Smith' };`}</p>
    <p>{`const element = <h1>Hello, {`}<span className='text-danger'>formatName</span>{`(user)}!</h1>`}</p>         
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
      <p className='text-justify wid'>Here, <span className='text-danger'>{`{name}`}</span> is replaced by the value of the variable <span className='text-danger'>name</span>
    
    
    </p>  
    </div>


    <div className='pt-4'>
   <h4><b>Conditional Rendering in JSX</b> 
   </h4> 
 </div>
 <div className='pt-2'>
      <p className='text-justify wid'>You can conditionally include elements in JSX using JavaScript logic
    </p>  
    </div>
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b>  </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`const isLoggedIn = true;`}</p>
                
                


<p className=''>{`const element = <h1>{isLoggedIn `}<span className='text-danger'>? </span><span className='text-success'>{`'Welcome Back!'`}</span> <span className='text-danger'> : </span> <span className='text-success'> {`'Please Log In'`}</span> {`</h1>;`}

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
      <p className='text-justify wid'>Here, <span className='text-danger'>{`{name}`}</span> is replaced by the value of the variable <span className='text-danger'>name</span>
    
    
    </p>  
    </div>


    <div className='pt-4'>
   <h4><b>Using Loops in JSX</b> 
   </h4> 
 </div>
 <div className='pt-2'>
      <p className='text-justify wid'>You can use JavaScript functions like <span className='text-danger'>map()</span> to render lists dynamically
    </p>  
    </div>
    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b>  </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`const numbers = [1, 2, 3, 4];`}</p>
                
                


<p className=''>{`const listItems = numbers.`}<span className='text-danger'>{`map(`}</span>(number) {`=> <li key={number}>{number}</li> ;`}<span className='text-danger'>{`)`}</span>
</p>

<p>{`const element = <ul>{listItems}</ul>;`}</p>

         
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

export default ReactJsxPage