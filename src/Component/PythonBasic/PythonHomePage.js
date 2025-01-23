import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';


const PythonHomePage = () => {

  
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
    <img className="img-fluid " src='/images/python.jpg' alt="DLK Image" width={100}   />
    </div>
    <div>
   <h1>Python Tutorial</h1>  {/* This will display the "Python Tutorial" text as a heading */}
 </div>
 
 <div className='pt-4 '>
   <h3>Welcome to the World of Python Programming!
   </h3>  
 </div>
 <div className='text-justify wid'>
   <p inert >Dive into the simplicity and power of Python, the language that fuels innovation, creativity, and efficiency in technology. Whether you're a beginner taking your first steps into coding or an experienced developer building cutting-edge solutions, Python offers something for everyone.
</p>  
 </div>
 <div className='text-justify wid'>
   <p>With its clean syntax, versatile libraries, and vibrant global community, Python has become the backbone of modern software development, data science, artificial intelligence, web development, and so much more.
     </p>  
 </div>
 <div className='text-justify wid'>
   <p>With its clean syntax, versatile libraries, and vibrant global community, Python has become the backbone of modern software development, data science, artificial intelligence, web development, and so much more.
</p>  
 </div>
 <div className='text-justify wid'>
   <p>Explore a universe where ideas transform into reality with just a few lines of code. Unleash your potential, solve real-world problems, and join millions of developers worldwide on this incredible journey.
</p>  
 </div>
 <div className='pt-4 text-justify wid'>
   <p>Start coding with Python today—where simplicity meets limitless possibilities!
</p>  
 </div>
 </div>
 <div className="button-container justify-content-end">

   <Link to={"/python/intro "}  className="button-link">
     <button className="button bg-primary text-white">Next</button>
   </Link>
 </div>


      </div>

      
    
     
   
 </>
  )
}

export default PythonHomePage
