import React from 'react'
import { Link } from 'react-router-dom'


const ReactInstallationPage = () => {
  return (
    <div className='paddownforcol'>
   
    <div >
   <h1>React Installation
   </h1> 
 </div>

 <div className='pt-3'>
   <p className='text-justify wid'>React can be installed in multiple ways depending on the project's requirements and complexity. Below are the methods and concepts associated with installing React for building a website
</p>  
 </div>

 <div className='pt-2'>
   <h4><b>1. Direct Inclusion via <span className='text-danger'>CDN</span></b> 
   </h4> 
 </div>

 
 <div className='pt-2'>
      <p className='text-justify wid'>This method is suitable for small projects or for trying out React without any additional setup
    
    
    </p>  
    </div>

    
   

 <div className='pt-4'>
   <h5><b>1.Create an HTML file:</b>
   </h5> 
 </div>

 
 
 <div className='text-justify wid pt-4 bglights pt-4 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  <!DOCTYPE html> `}
 </h5> 
</div>
<div className='pt-2'>
 <h5>{` <html lang="en">`}
 </h5> 
</div>

<div className='pt-2'>
 <h5>{` <head>`}
 </h5> 
</div>

<div className='pt-2'>
 <h5>{` <meta charset="UTF-8">`}
 </h5> 
</div>
<div className='pt-2'>
 <h5>{` <meta name="viewport" content="width=device-width, initial-scale=1.0">`}
 </h5> 
</div>
<div className='pt-2'>
 <h5>{` <title>React App</title>`}
 </h5> 
</div>
<div className='pt-2'>
 <h5>{` <!-- Include React and ReactDOM -->`}
 </h5> 
</div>

<div className='pt-2'>
 <h5>{` <script src = "https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>`}
 </h5> 
</div>

<div className='pt-2'>
 <h5>{` <script src = "https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>`}
 </h5> 
</div>
<div className='pt-2'>
 <h5>{` <head>`}
 </h5> 
</div>
<div className='pt-2'>
 <h5>{` <body>`}
 </h5> 
</div>
<div className='pt-2'>
 <h5>{` <div id="root"></div>`}
 </h5> 
</div>
<div className='pt-2'>
 <h5>{` // React code`}
 </h5> 
</div>
<div className='pt-2'>
 <h5>{` const element = React.createElement('h1', null, 'Hello, React!');`}
 </h5> 
</div>
<div className='pt-2'>
 <h5>{` ReactDOM.createRoot(document.getElementById('root')).render(element);`}
 </h5> 
</div>
<div className='pt-2'>
 <h5>{` <script>`}
 </h5> 
</div>
<div className='pt-2'>
 <h5>{` <body>`}
 </h5> 
</div>
<div className='pt-2'>
 <h5>{` <html>`}
 </h5> 
</div>

</div>
   

  
 </div>



 <div className='pt-4'>
   <h5><b>2. Open the file in a browser to see the output</b>.
   </h5> 
 </div>
 <div className='pt-4'>
   <h5><b>Pros</b>
   </h5> 
 </div>

 <div className='pt-2'>
      <p className='text-justify wid'>No build tools required.
    
    
    </p>  
    </div>
    <div className=''>
      <p className='text-justify wid'>Quick and easy setup.act without any additional setup
    
    
    </p>  
    </div>

    <div className='pt-2'>
   <h5><b>Cons</b>
   </h5> 
 </div>

 <div className='pt-2'>
      <p className='text-justify wid'>Not suitable for large applications
    
    
    </p>  
    </div>
    <div className=''>
      <p className='text-justify wid'>Lacks modern development tools and optimization
    
    
    </p>  
    </div>



    <div className='pt-4'>
   <h4><b> 2. Installing React Using npm and <span className='text-danger'>Create-React-App</span></b>
   </h4> 
 </div>


<div className='pt-2'>
      <p className='text-justify wid'> If you have npx and Node.js installed, you can create a React application by using <span className='text-danger'>create-react-app</span>
    
    
    </p>  
    </div>

    <div className='pt-2'>
      <p className='text-justify wid'>  Run this command to create a React application named <span className='text-danger'>my-react-app</span>
    
    
    </p>  
    </div>
   
    <div className='pt-4'>
   <h5><b> 1. Open your terminal and run:</b>
   </h5> 
 </div>

   

    <div className='text-justify wid pt-4 bglights pt-4'>


   

 <div className=''>
   <h5> { `npx create-react-app my-app`}
   </h5> 
 </div>
 <div className='pt-2'>
   <h5> { ` cd my-app`}
   </h5> 
 </div>

 <div className='pt-2'>
   <h5> { `   npm start`}
   </h5> 
 </div>

  
 </div>

 



 <div className='pt-4'>
      
      <p className='text-justify wid'>npx ensures you’re using the latest version of <span className='text-danger'>create-react-app</span>.

    
    
    </p>  
 
  
    </div> 
    <div className=''>
      
      <p className='text-justify wid'>This scaffolds a fully configured React project

    
    
    </p>  
 
  
    </div> 


    <div className='pt-3'>
   <h5><b> 2. Access the development server:</b>
   </h5> 
 </div>

 <div className='pt-2'>
      
      <p className='text-justify wid'>Open <span className='text-primary'> http://localhost:3000 </span> in your browser.

    
    
    </p>  
 
  
    </div>


    <div className='pt-3'>
   <h5><b> File Structure:</b>
   </h5> 
 </div>

 <div className='pt-2'>
      
      <p className='text-justify wid'><b>src/:</b> Contains your application's source code.

    
    
    </p>  
 
  
    </div>

    
 <div className='pt-2'>
      
      <p className='text-justify wid'><b>public/:</b> Static files like index.html.

    
    
    </p>  
 
  
    </div>
    
 <div className='pt-2'>
      
      <p className='text-justify wid'><b>node_modules/:</b> Dependencies installed via npm.

    
    
    </p>  
 
  
    </div>
  
    <div className='pt-2'>
      
      <p className='text-justify wid'>A new browser window will pop up with your newly created React App! If not, open your browser and type <span className='text-primary'> localhost:3000 </span> in the address bar.


    
    
    </p>  
 
  
    </div>


    <div className='pt-2'>
      
      <h4 className='text-justify wid'><b>Result :</b>


    
    
    </h4>  
 
  
    </div>
  
    
 




 <div className='  pt-4  '>

<div>
  <img src='/images/ReactOutput.png' alt='img' className='img-fluid'></img>
</div>
 
  
 </div>

 <div className='pt-4'>
   <h5><b> Modify the React Application</b>
   </h5> 
 </div>

 <div className='pt-2'>
      
      <p className='text-justify wid'>Look in the <b>my-react-app directory</b>, and you will find a <b>src folder</b>. Inside the src folder there is a file called <b>App.js</b>, open it and it will look like this.


    
    
    </p>  
    
 
  
    </div> 

    <div className='pt-2'>
    <p className='text-justify wid'>/myReactApp/src/<span className='text-danger'>App.js</span></p>
    </div>

 <div className='text-justify wid pt-4 bglights pt-4'>


   

<div className=''>
  <h5> { `import logo from './logo.svg';`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { ` import './App.css';`}
  </h5> 
</div>

<div className='pt-4'>
  <h5> { `   function App() {}`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `   return (`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `   <div className="App">`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `   <header className="App-header">`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `    <img src={logo} className="App-logo" alt="logo" />`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `   <p>`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `    Edit <code>src/App.js</code> and save to reload`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `   </p>`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `   <a`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `   className="App-link"`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `   href="https://reactjs.org"`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `    target="_blank"`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `  rel="noopener noreferrer"`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `   >`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `   Learn React`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `  </a>`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `    </header>`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { ` </div>`}
  </h5> 
</div>

<div className='pt-2'>
  <h5> { `  ) };`}
  </h5> 
</div>

<div className='pt-2'>
  <h5> { ` export default App;`}
  </h5> 
</div>
 
</div>

<div className='pt-4'>
      
      <p className='text-justify wid'>Replace all the content inside the <span className='text-danger'> { `<div className="App">`} </span>   with a <span className='text-danger'> {` <h1> element`} </span> 


    
    
    </p>  
    
 
  
    </div> 
    <div className=''>
      
      <p className='text-justify wid'>Notice that the changes are visible immediately after you save the file, you do not have to reload the browser!


    
    
    </p>  
    
 
  
    </div> 
    
   

    
      
   
  





<div className='text-justify wid pt-4 bglights pt-4'>


   

<div className=''>
  <h5> { ` function App() {`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `   return (`}
  </h5> 
</div>

<div className='pt-4'>
  <h5> { `   <div className="App">`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `   <h1>Hello World!</h1>`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `   <div className="App">`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `   );`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `    }`}
  </h5> 
</div>
<div className='pt-2'>
  <h5> { `   export default App;`}
  </h5> 
</div>

 
</div>

<div className='pt-4'>
      
      <h4 className='text-justify wid'><b>Result After Modify </b>
 </h4>  
 
  
    </div>

    
 <div className='  pt-4  '>

<div>
  <img src='/images/hello.png' alt='img' className='img-fluid'></img>
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

export default ReactInstallationPage