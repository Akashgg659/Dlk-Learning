import React from 'react'
import { Link } from 'react-router-dom'


const ReactFormPage = () => {
  return (
    <div className='paddownforcol'>
   
    <div >
   <h1>React Forms
   </h1> 
 </div>

 <div className='pt-3'>
   
    <p className='text-justify wid'>In React, forms are used to collect user input. React handles forms a bit differently than regular HTML because of its declarative, state-driven nature. React forms can be controlled or uncontrolled, depending on how the form data is managed.</p>
</div>

 <div className='pt-4'>
   <h4><b> Adding a Simple Form</b>
   </h4> 
 </div>



 <div className='pt-2'>
      <p className='text-justify wid'>Here’s how you can add a form in React:
    </p>  
   
    </div>

    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b>  </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`function MyForm() {`}</p>
                <p className=''> {` return (`}

                </p>
                <p className='text-danger'>   {` <form>`}</p>
               
                <p className=''>   {`  <label>`}</p>
                <p className=''>    {`   Enter your name:`}

                </p>
                <p>     {` <input type=`}<span className='text-danger'>"text"</span> {`/>`}</p>


                <p>     {`</label>`}</p>
                <p className='text-danger'>    {`</form>`}</p>
               
            <p>{`)}`}</p>
               

<p className=''>{`const root = ReactDOM.createRoot(document.`}<span className='text-danger'>{`getElementById`}</span>{`('root'));`}

</p>
<p className=''>{`root.`}<span className='text-danger'>render</span>{`(`}<span className='text-warning'>{`<MyForm /> `}</span> {`);`}

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
   <h4><b> Handling Form Data in React</b>
   </h4> 
 </div>

   <div className='pt-2'>
    <p className='text-justify wid'>To manage form data in React:
    </p>
    <p className='text-justify wid'>1. Use state to track the input values.

      </p>
      <p className='text-justify wid'>2. Add an <span className='text-danger'>onChange</span> event handler to capture changes in the input.
      </p>
      <p className='text-justify wid'>3. Prevent the default behavior of form submission using <span className='text-danger'>preventDefault</span>.
      </p>
    </div>


 
    <div className='pt-4'>
   <h4><b> Textarea</b>
   </h4> 
 </div>



 <div className='pt-2'>
      <p className='text-justify wid'>In HTML the value of a textarea was the text between the start tag <span className='text-danger'>{`<textarea>`}</span> and the end tag <span className='text-danger'>{`</textarea>`}</span> .
    </p>  
   
    </div>

    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b>  </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`function MyForm() {`}</p>
                <p> {` const [textarea, setTextarea] = useState(`}</p>
                <p>  {`"The content of a textarea goes in the value attribute"`}</p>
                <p>  {`)`}</p>
                <p>{`const handleChange = (event) => {`}</p>
                <p>  {`setTextarea(event.target.value)`}</p>
                <p>{`}`}</p>
                <p className=''> {` return (`}

                </p>
                <p className='text-danger'>   {` <form>`}</p>
               
                <p className=''>   <span className='text-danger'>{`  <textarea `}</span>{`value={textarea} onChange={handleChange} `}<span className='text-danger'>{`/>}`}</span></p>
               
               
                <p className='text-danger'>    {`</form>`}</p>
               
            <p>{`)}`}</p>
               

<p className=''>{`const root = ReactDOM.createRoot(document.`}<span className='text-danger'>{`getElementById`}</span>{`('root'));`}

</p>
<p className=''>{`root.`}<span className='text-danger'>render</span>{`(`}<span className='text-warning'>{`<MyForm /> `}</span> {`);`}

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
   <h4><b> Select</b>
   </h4> 
 </div>



 <div className='pt-2'>
      <p className='text-justify wid'>In HTML, the selected value in the drop down list was defined with the <span className='text-danger'>selected</span> attribute .
    </p>  
   
    </div>

    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b>  </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`function MyForm() {`}</p>
                <p> {` const [myCar, setMyCar] = useState("Volvo");`}</p>
               
                <p>{`const handleChange = (event) => {`}</p>
                <p>  {`setMyCar(event.target.value)`}</p>
                <p>{`}`}</p>
                <p className=''> {` return (`}

                </p>
                <p className='text-danger'>{` <form>`}</p>
               
                <p className=''> { `<`}<span className='text-danger'>select</span>{` value={myCar} onChange={handleChange}>`} </p>
                <p>   {`<option value="Ford">Ford</option>`}</p>
                <p>   {`<option value="Volvo">Volvo</option>`}</p>
                <p>   {`<option value="Fiat">Fiat</option>`}</p>
                <p className='text-danger'>  {`</select>`}</p>
               
                <p className='text-danger'>{`</form>`}</p>
               
            <p>{`)}`}</p>
               

<p className=''>{`const root = ReactDOM.createRoot(document.`}<span className='text-danger'>{`getElementById`}</span>{`('root'));`}

</p>
<p className=''>{`root.`}<span className='text-danger'>render</span>{`(`}<span className='text-warning'>{`<MyForm /> `}</span> {`);`}

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
   <h4><b> Controlled Components</b>
   </h4> 
 </div>



 <div className='pt-2'>
      <p className='text-justify wid'>A controlled component is a form element whose value is controlled by React state. This allows React to manage the form data and respond to user input effectively
    </p>  
   
    </div>

    <div class="container py-4 p-2">
    
    <div class=" mb-4 shadow-sm shadow">
      
      <div class=" bg-light p-3">
        <h5 class="mb-0"><b>Example</b>  </h5>
      </div>
   
    
      <div class=" text-white p-3 ">
        <pre class="mb-0">
       
                <p className=''>{`import React, { useState } from 'react';`}</p>
                <p className=''>{` function ControlledForm() {`}

                </p>
                <p>   {`const [email, setEmail] = useState('');`}</p>
               
                <p className=''>  {` const [email, setEmail] = useState('');`}</p>
                <p className=''> {`  const handleSubmit = (e) => {`}

                </p>
                <p>    {` e.preventDefault();`}</p>


                <p>     {`alert(`}{`Name: `}{`name}, Email: {email}`}{`);`}</p>
                <p>   {`}`}</p>
                <p>  {` return (`}</p>
                <p>  {`<`}<span className='text-danger'>form </span>{`onSubmit={handleSubmit}>`}</p>
                <p>   {`<div>`}</p>
                <p>    {`<label>`}</p>
                <p>      {`Name:`}</p>
               <p>     {`<input`}</p>
               <p>     {`type="text"
`}</p>
               <p>     {`onChange={(e) => setName(e.target.value)}`}</p>
               <p>     {`value={name}`}</p>
               <p>  {` </label>`}</p>
               <p>{` </div>`}</p>
               <p>  {`<div>`}</p>
               <p>   {`<label>`}</p>
               <p>     {  ` Email:`}</p>
               <p>     {` <input type="email"  value={email}  onChange={(e) => setEmail(e.target.value)} />`}</p>
               <p>   {`</label>`}</p>
               <p>{`</div>`}</p>
               <p>{`<button type="submit">Submit</button>`}</p>
               <p className='text-danger'>{`</form>`}</p>

            <p>{`)}`}</p>
               

<p className=''>{`const root = ReactDOM.createRoot(document.`}<span className='text-danger'>{`getElementById`}</span>{`('root'));`}

</p>
<p className=''>{`root.`}<span className='text-danger'>render</span>{`(`}<span className='text-warning'>{`<ControlledForm `}</span> <span className='text-danger'>{`/>`}</span>{`);`}

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

export default ReactFormPage