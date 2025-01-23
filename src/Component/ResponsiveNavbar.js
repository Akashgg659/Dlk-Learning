import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBox from './SearchBox/SearchBox';
import MobileViewSearchBox from './SearchBox/MobileViewSearchBox';
import { useMobileSearch } from './SearchBox/MobileViewContext/MobileSearchContex';


function ResponsiveNavbar() {
  const {mobileSearchActive } =  useMobileSearch()
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

  
//  bg={isDarkMode ? 'dark' : 'white'} variant={isDarkMode ? 'dark' : 'white'} 



const navigate = useNavigate();

useEffect(() => {
  const initializeGoogleSignIn = () => {
    window.google.accounts.id.initialize({
      client_id: "4499760820-ogotadenot08hvfvoatf18p2mh9lmq4d.apps.googleusercontent.com", // Replace with your actual Client ID
      callback: handleGoogleResponse,
    });
    window.google.accounts.id.prompt(); 
  };

  const script = document.createElement("script");
  script.src = "https://accounts.google.com/gsi/client";
  script.async = true;
  script.onload = initializeGoogleSignIn;
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);

const handleGoogleResponse = (response) => {
  console.log("Google Response:", response);
  const userObject = JSON.parse(atob(response.credential.split(".")[1]));
  console.log("User Info:", userObject);
  navigate("/");
};

const triggerGoogleSignIn = () => {
  window.google.accounts.id.prompt(); // Manually show Google Sign-In popup
};








useEffect(() => {
  // Initialize the Google Sign-In button
  window.google.accounts.id.initialize({
    client_id: '4499760820-ogotadenot08hvfvoatf18p2mh9lmq4d.apps.googleusercontent.com', // Replace with your Google Client ID
    callback: handleCredentialResponse, // Callback function to handle the response
  });

  // Render the Google Sign-In button
  window.google.accounts.id.renderButton(
    document.getElementById('google-sign-in-btn'), // The element to render the button
    {
       // Button style ('filled' or 'outline')
      size: 'large',    // Set to 'small' for a compact button
      shape: 'circle',  // 'circle' for a round button with just the icon
     
    }
  );
}, []);

const handleCredentialResponse = (response) => {
  console.log("Google sign-in response:", response);

  // Handle the Google token and user info
  // Here you can send the token to your backend for validation or use it directly in the frontend.
  const { credential } = response;
  console.log("ID Token:", credential);
  // Example: You can now use the token or redirect the user after sign-in
  // e.g., navigate('/dashboard');
};



const handleGoogleSignIn = () => {
  // Redirect to the Google Sign-In URL
  const googleSignInUrl = "https://accounts.google.com/o/oauth2/auth?client_id=4499760820-ogotadenot08hvfvoatf18p2mh9lmq4d.apps.googleusercontent.com&redirect_uri=&response_type=token&scope=email profile";
  window.location.href = googleSignInUrl;
};



  return (

    <>
   
     


    <Navbar expand="lg Apptheme "

>
  <Navbar.Brand className="font-weight-bold d-flex  py-0 pps  p-0  "  >
  
    <div className='p-0 '>
  <a
    href="/"
    className="navbar-brand font-weight-bold   width1 d-flex justify-content-center "
    
  >
    

    {! mobileSearchActive &&<img className="img-fluid me-4 " src='/images/logo4.png ' alt="not" width={60}   />}
    <div className='d-flex  '>
      {!mobileSearchActive && <h5 className=' text-center times-roman-text Apptheme '>DLK Learning</h5>}
       </div>
      
   </a>

   </div>

   
 
  
   

  </Navbar.Brand>

  
  <div>
  <MobileViewSearchBox/>
  </div>

  {<div className='d-flex justify-content-center'>

  { <div className="pe-3 ps-3 d-lg-none d-xl-none d-sm-block d-md-block  ">
     
     <input type='checkbox' className=''
     onChange={toggleTheme}
     checked={isDarkMode}
     style={{ display: 'none' }} // Hide the checkbox
     
     />

  <div
   onClick={toggleTheme}
   className="d-flex align-items-center justify-content-center rounded-circle "
   style={{
     width: '40px',
     height: '40px',
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



 
    
    
  </div>}

  {/* Toggle button for mobile view */}
{<div className='d-flex justify-content-center '>

<Navbar.Toggle aria-controls="navbarCollapse">
    <FaBars />
  </Navbar.Toggle>

</div>}


  </div>}


 
 

  {/* Collapsible menu */}
  <Navbar.Collapse id="navbarCollapse" className="justify-content-between  p-0  " >
    <Nav className="mx-auto font-weight-bold">
      <Nav.Link href="index.html" className="times-roman-text  p-0 d-none d-xl-block d-lg-block">
       
       <h5 className='Apptheme  times-roman-text pe-3 ps-3 d-none d-xl-block d-lg-block'>Tutorial</h5> 
      </Nav.Link>
      <Nav.Link href="about.html" className="nav-item nav-link times-roman-text d-none d-xl-block d-lg-block p-0">
      <h5 className='Apptheme  times-roman-text pe-3 ps-3'>Exercises</h5> 
      </Nav.Link>
      <Nav.Link href="class.html" className="nav-item nav-link times-roman-text d-none d-xl-block d-lg-block p-0">
      <h5 className='Apptheme  times-roman-text pe-3 ps-3'>Certification</h5> 
      </Nav.Link>

      <Nav.Link href="" className="nav-item nav-link times-roman-text d-lg-none d-xl-none d-sm-block d-md-block text-start  ps-4 ms-2 pt-4 p-0">
      <h5 className='Apptheme  times-roman-text pe-3 ps-4 d-lg-none d-sm-block d-md-block  '>Tutorial</h5> 
      </Nav.Link>
      <Nav.Link href="" className="nav-item nav-link times-roman-text d-lg-none d-xl-none d-sm-block d-md-block text-start  ps-4 ms-2 pt-4 p-0">
      <h5 className='Apptheme  times-roman-text pe-3 ps-4 d-lg-none d-sm-block d-md-block  '>Exercises</h5> 
      </Nav.Link>
      <Nav.Link href="" className="nav-item nav-link times-roman-text d-lg-none d-xl-none d-sm-block d-md-block text-start  ps-4 ms-2 pt-4 p-0">
      <h5 className='Apptheme  times-roman-text pe-3 ps-4 d-lg-none d-sm-block d-md-block  '>Certification</h5> 
      </Nav.Link>


    </Nav>

    {/* Search bar */}
   
    <SearchBox/>



    {/* Dark Mode Toggle Button */}
    <div className="pe-3 ps-3 d-none d-xl-block d-lg-block  ">
     
      <input type='checkbox' className=''
      onChange={toggleTheme}
      checked={isDarkMode}
      style={{ display: 'none' }} // Hide the checkbox
      
      />

   <div
    onClick={toggleTheme}
    className="d-flex align-items-center justify-content-center rounded-circle "
    style={{
      width: '40px',
      height: '40px',
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
     
 <div className='d-flex   Applink d-none d-xl-block d-lg-block '>

 <div className='d-flex'>
 <a href="https://www.facebook.com/DlkTechnologies/" className="nav-item nav-link ">
    <h4 className='pe-2 ps-2 pt-2'><i class="fab fa-facebook "></i></h4>
      </a>


 <a href='https://www.instagram.com/dlk_tec' className='nav-item nav-link'>
<h4 className='pe-2 ps-2 pt-2'> <i class="fab fa-instagram"></i> </h4>
</a>

<a href='https://www.linkedin.com/company/dlktechnologies/' className='nav-item nav-link'>
<h4 className='pe-2 ps-2 pt-2'> <i class="fab fa-linkedin"></i> </h4>
</a>

<a href='https://www.youtube.com/@dlktechnologiesindiaprivat3300/featured' className='nav-item nav-link'>
<h4 className='pe-2 ps-2 pt-2'><i class="fab fa-youtube"></i> </h4>
</a>





 </div>

 


</div>

<div
    id="google-sign-in-btn" className='mb-1 d-none d-xl-block d-lg-block '
    style={{ width: "45px"  }} // Adjust the width and height
  ></div>
   

<div className='d-flex justify-content-end d-none d-xl-block d-lg-block  '>
<a href="" className=" px-3 mleft me-2 ms-2">
<button>Login</button>
        </a>
       
</div>


  </Navbar.Collapse>

     



</Navbar>


    {/*<button
        className="btn  d-flex align-items-center justify-content-center  "
        onClick={triggerGoogleSignIn} >
        <i className="fab fa-google me-2" ></i>
        Sign 
      </button>

     
       
          <div
        id="google-sign-in-btn" className='bg-success'
        style={{ width: "21px", height: "30px"  }} // Adjust the width and height
      ></div>*/}



       

<div className="A align-items-center"

  
>
    <div className="position-relative ">
      
      {/* Left Scroll Button */}
      <button
        className=" scroll-btn A border-0 "
        onClick={scrollLeft}
      >
      <h6 className='text-white pe-2 ps-2'><b>‹</b></h6>
      </button>

      {/* Scrollable Content */}
      <div className="d-flex overflow-auto scroll-content ga scrollable-container times-roman-text  ">
        
        <p className="text-white s p-1">HTML</p>
        <p className="text-white s p-1">CSS</p>
        
        <Link to = "/javascript" className='n'>
        <p className="text-white s p-1">Javascript</p>
       
       </Link> 
       <Link to = "/react" className='n'>
       <p className="text-white s p-1">Reactjs</p>
      
       </Link> 
       <Link to = "/python" className='n'>
       <p className="text-white s p-1">Python</p>
      
       </Link> 
       <p className="text-white s p-1">Java</p>
       <p className="text-white s p-1">C</p>
       <p className="text-white s p-1">C++</p>
       <p className="text-white s p-1">DataScience</p>
       <p className="text-white s p-1">PHP</p>
       <p className="text-white s p-1">SQL</p>
       <p className="text-white s p-1">AI</p>
       <p className="text-white s p-1">Git</p>
       <p className="text-white s p-1">C#</p>
       <p className="text-white s p-1">TailwindCss</p>
       <p className="text-white s p-1">MangoDB</p>
       <p className="text-white s p-1">MySql</p>
       <p className="text-white s p-1">Node.js</p>
       <p className="text-white s p-1">Bootstrap</p>
       <p className="text-white s p-1">Kotlin</p>
       <p className="text-white s p-1">MySql</p>
       <p className="text-white s p-1">Angular</p>
       <p className="text-white s p-1">ASP</p>
       <p className="text-white s p-1">GO</p>
      
      </div>

      {/* Right Scroll Button */}
      <button
        className=" scroll-btn right border-0 A"
        onClick={scrollRight}
      >
        <h6 className='text-white ps-2 pe-2'><b>›</b> </h6>
      </button>
    </div>
  </div>



    

</>
   
  );
}
export default ResponsiveNavbar;