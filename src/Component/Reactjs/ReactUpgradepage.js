import React from 'react'
import { Link } from 'react-router-dom'

const ReactUpgradepage = () => {
  return (
    <div className='paddownforcol'>
   
    <div >
   <h1> React Upgrade
   </h1> 
 </div>

 <div className='pt-3'>
   <p className='text-justify wid'>Upgrading a website to use React for rendering HTML is a straightforward process that involves two key steps
</p>  
 </div>

 <div className='pt-4'>
   <h4><b>Step 1. Add React to Your Project</b> 
   </h4> 
 </div>

 
 <div className='pt-2'>
      <p className='text-justify wid'>To begin using React, you need to install it along with ReactDOM. Run the following command in your project directory
    
    </p>  
    </div>

  
   



 
 
 <div className='text-justify wid pt-4 bglights pt-3 '>

<div className='p-3'>

<div className=''>
 <h5>{` npm i react@latest react-dom@latest`}
 </h5> 
</div>



</div>
   

  
 </div>


 <div className='pt-2'>
      <p className='text-justify wid'>This will add React and its dependencies to your project
    
    </p>  
    </div>



 <div className='pt-4'>
   <h4><b>Step 2: Use the new root API</b>.
   </h4> 
 </div>

 
 <div className='pt-2'>
      <p className='text-justify wid'>In order to take advantage of React 18's concurrent features you'll need to use the new root API for client rendering.


    </p>  
    </div>


    <div className='text-justify wid pt-4 bglights pt-4 '>

<div className='p-3'>
<div className=''>

<div className='d-flex text-start'>
 
</div>
 <h5>{`  // Before `}
 </h5> 
 <h5>{`  import ReactDOM from 'react-dom'; `}
 </h5> 
 <h5>{`  ReactDOM.render(<App />, document.getElementById('root')); `}
 </h5> 
 <h5>{`  // After `}
 </h5> 
 <h5>{`  import ReactDOM from 'react-dom/client'; `}
 </h5> 
 <h5>{`  const root = ReactDOM.createRoot(document.getElementById('root')); `}
 </h5>
 <h5>{`  root.render(<App />); `}
 </h5>

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

export default ReactUpgradepage