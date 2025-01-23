import React, { useState } from 'react';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa'; // Import icons for dark/light mode toggle
//import './App.css';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons

const Navigate = () => {


  const [isDarkMode, setIsDarkMode] = useState(false);

  

  const setDarkMode =() =>{
    document.querySelector("body").setAttribute('data-theme', 'dark')
    
  }

  const setLightMode = () =>{
    document.querySelector("body").setAttribute('data-theme', 'light')
  }


const toggleTheme = () =>{
  if (isDarkMode) {
    setLightMode();
  } else {
    setDarkMode();
  }
  setIsDarkMode(!isDarkMode);
}

  
  // Function to scroll content left
  const scrollLeft = () => {
    document.querySelector('.scroll-content').scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  };

  // Function to scroll content right
  const scrollRight = () => {
    document.querySelector('.scroll-content').scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  };




  return (
    <>
    <Navbar expand="lg">
    <Navbar.Brand href="/" className="font-weight-bold mx-auto py-0 pp">
       <div className='p-3 '>
      <a
        href=""
        className="navbar-brand font-weight-bold  width1 d-flex justify-content-center p-2"
        style={{ fontSize: 50 }}
      >
        <i className="flaticon-043-teddy-bear" />

       <div className='bg-success'>
       <img className="img-fluid " src='/images/logo2.jpg' alt="not" width={200}   />
       </div>
        

        <div className='d-flex padingdown '>
           <h1 className=' text-center times-roman-text Apptheme '>DLK Learning</h1>
           
           </div>
       </a></div>

    </Navbar.Brand>

    {/* Toggle button for mobile view */}
    <Navbar.Toggle aria-controls="navbarCollapse">
      <FaBars />
    </Navbar.Toggle>

    {/* Collapsible menu */}
    <Navbar.Collapse id="navbarCollapse" className="justify-content-between">
      <Nav className="mx-auto font-weight-bold">
        <Nav.Link href="index.html" className="nav-item nav-link times-roman-text ">
        <h5 className='Apptheme m-3 times-roman-text'>Tutorial</h5> 
        </Nav.Link>
        <Nav.Link href="about.html" className="nav-item nav-link times-roman-text">
        <h5 className='Apptheme m-3 times-roman-text'>Exercises</h5> 
        </Nav.Link>
        <Nav.Link href="class.html" className="nav-item nav-link times-roman-text">
        <h5 className='Apptheme m-3 times-roman-text'>Certification</h5> 
        </Nav.Link>
      </Nav>

      {/* Search bar */}
      <Form inline className="p-3">
          <input
            type="search"
            placeholder="Search"
            aria-label="Search"
            className="m-3 inputradius p-3"
            style={{
              paddingLeft: '30px', // Space for the icon
              backgroundColor: '#f8f9fa',
              border: '1px solid #ced4da',
            }}
          />
        </Form>


        
        {/* Dark Mode Toggle Button */}
        <div className="p-3">
         
          <input type='checkbox' className=''
          onChange={toggleTheme}
          checked={isDarkMode}
          style={{ display: 'none' }} // Hide the checkbox
          
          />

       <div
        onClick={toggleTheme}
        className="d-flex align-items-center justify-content-center rounded-circle p-2"
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: isDarkMode ? '#343a40' : '#f8f9fa',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
      >
        {isDarkMode ? (
          <FaMoon style={{ color: '#f8f9fa' }} />
        ) : (
          <FaSun style={{ color: '#343a40' }} />
        )}
      </div>


      
         
         
       </div>
         
     <div className='d-flex pdown Applink'>
      <a href="https://www.facebook.com/DlkTechnologies/" className="nav-item nav-link ">
        <h4 className='p-2'><i class="fab fa-facebook "></i></h4>
          </a>


     <a href='https://www.instagram.com/dlk_tec' className='nav-item nav-link'>
   <h4 className='p-2'> <i class="fab fa-instagram"></i> </h4>
    </a>

    <a href='https://www.linkedin.com/company/dlktechnologies/' className='nav-item nav-link'>
   <h4 className='p-2'> <i class="fab fa-linkedin"></i> </h4>
    </a>
    
    <a href='https://x.com/dlktechnologie/' className='nav-item nav-link'>
   <h4 className='p-2'><i class="fab fa-twitter"></i> </h4>
    </a>

    <a href='https://www.youtube.com/@dlktechnologiesindiaprivat3300/featured' className='nav-item nav-link'>
   <h4 className='p-2'><i class="fab fa-youtube"></i> </h4>
    </a>

    </div>


         <a href="" className="btn btn-primary px-4 mleft">
          Join 
        </a>

      
    </Navbar.Collapse>
  </Navbar>

<div className="A"

  
>
    <div className="position-relative ">
      
      {/* Left Scroll Button */}
      <button
        className="btn scroll-btn bg-success "
        onClick={scrollLeft}
      >
      <h6 className='text-white'> ‹</h6>
      </button>

      {/* Scrollable Content */}
      <div className="d-flex overflow-auto scroll-content ga scrollable-container times-roman-text">
        
        <h5 className="text-white s p-2">HTML</h5>
        <h5 className="text-white p-2 s ">CSS</h5>
        <h5 className="text-white p-2 s ">Javascript</h5>
        <h5 className="text-white p-2 s  ">Python</h5>
        <h5 className="text-white p-2 s ">Java</h5>
        <h5 className="text-white p-2 s  ">C</h5>
        <h5 className="text-white p-2 s ">C++</h5>
        <h5 className="text-white p-2 s ">DataScience</h5>
        <h5 className="text-white p-2 s ">PHP</h5>
        <h5 className="text-white p-2 s ">SQL</h5>
        <h5 className="text-white p-2 s ">AI</h5>
        <h5 className="text-white p-2 s ">Git</h5>
        <h5 className="text-white p-2 s ">C#</h5>
        <h5 className="text-white p-2 s ">TailwindCss</h5>
        <h5 className="text-white p-2 s ">MangoDB</h5>
        <h5 className="text-white p-2 s ">MySql</h5>
        <h5 className="text-white p-2 s ">Node.js</h5>
        <h5 className="text-white p-2 s">Bootstrap</h5>
        <h5 className="text-white p-2 s">MangoDB</h5>
        <h5 className="text-white p-2 s ">MySql</h5>
        <h5 className="text-white p-2 s ">Node.js</h5>
        <h5 className="text-white p-2 s">Bootstrap</h5>
      </div>

      {/* Right Scroll Button */}
      <button
        className="btn scroll-btn right bg-success"
        onClick={scrollRight}
      >
        <h6 className='text-white'> ›</h6>
      </button>
    </div>
  </div>

  </>


  )
}

export default Navigate