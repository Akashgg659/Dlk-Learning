import React from 'react'
import { Link } from 'react-router-dom'


const ReactEs6Page = () => {
  return (
    <div className='paddownforcol'>
   
    <div >
   <h1>React ES6
   </h1> 
 </div>

 <div className='pt-3'>
   
   
    <p className='text-justify wid'>ES6, also known as ECMAScript 6 or ECMAScript 2015, is the 6th version of the ECMAScript standard for JavaScript. It introduced many modern features to JavaScript, which make writing code cleaner and more efficient..</p>
<p className='text-justify wid'>Since React heavily relies on modern JavaScript features, understanding ES6 is essential for React development</p>
</div>

 <div className='pt-4'>
   <h4><b> Why Learn ES6 for React?</b>
   </h4> 
 </div>



 <div className='pt-2'>
      <p className='text-justify wid'>React uses ES6 features to make code more modular, maintainable, and expressive. Here are some key ES6 features commonly used in React:


    </p>  
   
    </div>

  

 

   <div className='pt-3'>
    
   <p className='text-justify wid '>Classes</p>

     
      <p className='text-justify wid'>Arrow Functions
      </p>
      <p className='text-justify wid'>Variables (let, const, var)
      </p>
      <p className='text-justify wid'>Array Methods
      </p>
      <p className='text-justify wid'>Destructuring
      </p>
      <p className='text-justify wid'>Modules
      </p>
      <p className='text-justify wid'>Ternary Operator
      </p>
      <p className='text-justify wid'>Spread Operator
      </p>
    

    </div>

   
 
    <div className='pt-4'>
   <h4><b> Key Features of ES6 in React</b>
   </h4> 
 </div>

 <div className='pt-4'>
   <h4><b>Classes</b>
   </h4> 
 </div>

 <div className='pt-2'>
      <p className='text-justify wid'>React components can be defined as classes using ES6 syntax.


    </p>  
   
    </div>
  
 <div className='text-justify wid pt-4 mt-4 bglights pt-4'>

  <div className='d-flex text-start text-justify wid '>
    <p>{`class Welcome extends React.Component {`}</p>
  </div>
   <div className='d-flex text-start '>
    <p>{`render() { `}</p></div>

    <p>{` return <h1>Hello, {this.props.name}</h1>; `}</p>
    <p>{`} `}</p>
    <p>{`}`}</p>


 
  
 </div>

 <div className='pt-4'>
   <h4><b>2. Arrow Functions</b>
   </h4> 
 </div>

 <div className='pt-2'>
      <p className='text-justify wid'>Arrow functions are concise and do not bind their own this, making them ideal for event handlers and inline functions in React.


    </p>  
   
    </div>
  
 <div className='text-justify wid pt-4 mt-4 bglights pt-4'>

  <div className='d-flex text-start text-justify wid '>
    <p>{`const Greeting = () => <h1>Welcome to React!</h1>;`}</p>
  </div>



 
  
 </div>

 <div className='pt-4'>
   <h4><b>3. Variables (let, const)</b>
   </h4> 
 </div>

 <div className='pt-2'>
      <p className='text-justify wid'>ES6 introduced let and const for block-scoped variables. In React, const is often used for components and immutable variables, while let is used for variables that need reassignment.


   </p>  
   
    </div>
  
 <div className='text-justify wid pt-4 mt-4 bglights pt-4'>

  <div className='d-flex text-start text-justify wid '>
    <p>{`const name = "John";`}</p>
  </div>
   <div className='d-flex text-start '>
    <p>{`let age = 25;`}</p></div>

   


 
  
 </div>


 <div className='pt-4'>
   <h4><b>4. Array Methods (e.g., .map())
   </b>
   </h4> 
 </div>

 <div className='pt-2'>
      <p className='text-justify wid'>Methods like .map() are frequently used in React to render lists dynamically.


    </p>  
   
    </div>
  
 <div className='text-justify wid pt-4 mt-4 bglights pt-4'>

  <div className='d-flex text-start text-justify wid '>
    <p>{`const items = ['Apple', 'Banana', 'Cherry'];`}</p>
  </div>
   <div className='d-flex text-start '>
    <p>{`const list = items.map((item) => <li key={item}>{item}</li>);`}</p></div>
</div>


 <div className='pt-4'>
   <h4><b>5. Destructuring</b>
   </h4> 
 </div>

 <div className='pt-2'>
      <p className='text-justify wid'>Destructuring simplifies accessing properties from objects or arrays, which is common with React props and state.


    </p>  
   
    </div>
  
 <div className='text-justify wid pt-4 mt-4 bglights pt-4'>

  <div className='d-flex text-start text-justify wid '>
    <p>{`cconst user = { name: "John", age: 30 };`}</p>
  </div>
   <div className='d-flex text-start '>
    <p>{`const { name, age } = user; `}</p></div>

    <p>{` function Profile({ name, age }) { `}</p>
    <p>{`return <p>{name} is {age} years old.</p>; `}</p>
    <p>{`}`}</p>


 
  
 </div>


 <div className='pt-4'>
   <h4><b>6. Modules (Import/Export)</b>
   </h4> 
 </div>

 <div className='pt-2'>
      <p className='text-justify wid'>Modules enable code splitting and reusability by exporting and importing functionality.




    </p>  
   
    </div>
  
 <div className='text-justify wid pt-4 mt-4 bglights pt-4'>

  <div className='d-flex text-start text-justify wid '>
    <p>{`export default function MyComponent() {`}</p>
  </div>
   <div className='d-flex text-start '>
    <p>{`return <h1>Hello, World!</h1>; `}</p></div>

    <p>{` } `}</p>
    <p>{`import MyComponent from './MyComponent'; `}</p>
    


 
  
 </div>

 
 <div className='pt-4'>
   <h4><b>7. Ternary Operator</b>
   </h4> 
 </div>

 <div className='pt-2'>
      <p className='text-justify wid'>The ternary operator is widely used for conditional rendering in React.


    </p>  
   
    </div>
  
 <div className='text-justify wid pt-4 mt-4 bglights pt-4'>

  <div className='d-flex text-start text-justify wid '>
    <p>{`const isLoggedIn = true;`}</p>
  </div>
   <div className='d-flex text-start '>
    <p>{`const message = isLoggedIn ? "Welcome back!" : "Please log in."; `}</p></div>

    


 
  
 </div>

 <div className='pt-4'>
   <h4><b>8. Spread and Rest Operators</b>
   </h4> 
 </div>

 <div className='pt-2'>
      <p className='text-justify wid'><b>Spread Operator:</b> Expands objects or arrays.


    </p>  
    <p className='text-justify wid'><b>Rest Operator:</b> Gathers remaining elements into an array.


</p>  
   
    </div>
  
 <div className='text-justify wid pt-4 mt-4 bglights pt-4'>

  <div className='d-flex text-start text-justify wid '>
    <p>{`const numbers = [1, 2, 3];`}</p>
  </div>
   <div className='d-flex text-start '>
    <p>{`const moreNumbers = [...numbers, 4, 5];`}</p></div>

    <p>{` const user = { name: "John", age: 30 }; `}</p>
    <p>{`const updatedUser = { ...user, location: "USA" };`}</p>
    <p>{`const sum = (...args) => args.reduce((a, b) => a + b, 0);`}</p>


 
  
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

export default ReactEs6Page