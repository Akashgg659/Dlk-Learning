import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const ReactHomePage = () => {

 
    useEffect(() => {
        // Reset component-specific state here if needed
          // Reset the container height or layout styles
          const contentDiv = document.getElementById("content-container1");
          if (contentDiv) {
              contentDiv.style.height = "auto"; // Reset height
          }
       
    }, []);
    
    // Function to disable right-click context menu
    const disableContextMenu = (event) => {
      event.preventDefault();
    }
  return (



    <>
    <div  className='paddownforcolh scrollable-container'
     id="content-container1" 
    
    >
    <div className='scrollable-container' style={{ userSelect: 'none' ,
      minHeight: "100vh",
      maxHeight: "100vh",
      overflowY: "scroll",
    

    }} // Prevents text selection
    onContextMenu={disableContextMenu} // Disables right-click
    onCopy={(e) => e.preventDefault()} // Disables copying
  
    >
  <div className='d-flex justify-content-center'>
  <img className="img-fluid " src='/images/react1.gif' alt="DLK Image" width={300}   />
  </div>
  <div className='pt-3'>
 <h1>React Tutorial</h1>  {/* This will display the "Python Tutorial" text as a heading */}
</div>





<div className='text-justify wid pt-4'>
 <p inert >React is a JavaScript library for building user interfaces.
</p>  
</div>
<div className='text-justify wid'>
 <p>React is used to build single-page applications
   </p>  
</div>
<div className='text-justify wid'>
 <p>React allows us to create reusable UI components</p>
</div>

<div className='pt-3'>
 <h3>Ready to Learn React</h3>  {/* This will display the "Python Tutorial" text as a heading */}
</div>

<div className='text-justify wid pt-3'>
 <p>Whether you're a beginner exploring web development or an experienced developer looking to enhance your skills, React offers endless possibilities. Start your journey today and unlock the power of building <b>scalable</b>, <b>high-performance</b>, and <b>interactive</b> applications with React!</p>
</div>

<div className="button-container justify-content-start">

 <Link to={"/python/intro "}  className="button-link">
   <button className="button bg-primary text-white">Let's start</button>
 </Link>
</div>

</div>



    </div>

    
  
   
 
</>
  )
}

export default ReactHomePage