import React from 'react'
import { Link } from 'react-router-dom'


const ReactIntropage = () => {
  return (
    <div className='paddownforcol'>
   
    <div >
   <h1>React Introduction
   </h1> 
 </div>

 <div className='pt-3'>
   <p className='text-justify wid'>React is a popular JavaScript library for building user interfaces (<span className='text-danger'> UIs </span>), primarily for web applications. It was developed by <span className='text-danger'> Facebook </span> and is now maintained by Meta (formerly Facebook) and a large community of developers.
</p>  
 </div>

 <div className='pt-2'>
   <h3>How does React Work?
   </h3> 
 </div>




 
 <div className='text-justify wid pt-4 mt-4 bglights pt-4'>

  <div className='d-flex text-start text-justify wid '>
    <p>React operates by building a virtual representation of the DOM in memory. Rather than directly modifying the browser’s DOM, React updates this virtual DOM first, performs the required computations and optimizations, and then applies only the necessary changes to the actual DOM. This approach ensures efficient updates and improves performance.</p>
  </div>
   <div className='d-flex text-start '>
    <p>Throughout this tutorial, you’ll explore the different mechanisms that make React’s update process seamless and efficient.</p>
   </div>


 
  
 </div>



 <div className='pt-4'>
   <h3>React History
   </h3> 
 </div>




 <div className='pt-2'>
      
      <p className='text-justify wid'>React.js, developed by Facebook, has a fascinating history that showcases its evolution into one of the most popular JavaScript libraries for building user interfaces.
    
    
    </p>  
 
  
    </div> 

    <div className='pt-3'>
      
      <p className='text-justify wid'>The latest version of <span className='text-danger'> React.js </span>, <span className='text-danger'> v18.0.0 </span>, was released in <span className='text-success'>April 2022</span>.
    
    </p>  
 
  
    </div> 
     
    
    <div className='pt-2'>
      
      <p className='text-justify wid'>React.js was first publicly released as <span className='text-danger'> v0.3.0 </span> in <span className='text-success'> July 2013 </span>, though it was initially developed and used by <span className='text-danger'> Facebook </span> in <span className='text-success'> 2011 </span> for the News Feed feature. The library was created by Jordan Walke, a software engineer at <span className='text-danger'> Facebook </span>
    </p>  
 
  
    </div>

    <div className='pt-1'>
      
      <p className='text-justify wid'>The most recent version of create-react-app, the official tool for setting up a React project, is <span className='text-danger'> v5.0.1 </span> (released in <span className='text-success'> April 2022 </span>). This tool simplifies the development process by integrating essential build tools like <b>Webpack,  Babel,  and  ESLint</b>.
    
    </p>  
 
  
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

export default ReactIntropage