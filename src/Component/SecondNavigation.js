import React, { useContext, useEffect, useState } from 'react';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBox from './SearchBox/SearchBox';
import { useMobileSearch } from './SearchBox/MobileViewContext/MobileSearchContex';
import MobileViewSearchBox from './SearchBox/MobileViewSearchBox';
import SignUpButton from './SignupButton/SignUpButton';
import { SignupAuthContext } from './SignUpAuthenticationContext/SignUpAuthenication';
import axios from 'axios';


const SecondNavigation = () => {



  const {auth} = useContext(SignupAuthContext)

const {setAuth} = useContext(SignupAuthContext)









  const {mobileSearchActive} = useMobileSearch()
 const location = useLocation(); // Get the current path 

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

  const { pathname } = useLocation();
     const [scrollPercent, setScrollPercent] = useState(0);
    
    // Handle scroll event to calculate scroll percentage
    const handleScroll = () => {
     const container = document.getElementById("content-container1");
     if (container) {
       const scrollTop = container.scrollTop; // Distance scrolled
       const scrollHeight = container.scrollHeight; // Total scrollable height
       const clientHeight = container.clientHeight; // Visible height
   
       const totalScrollableHeight = scrollHeight - clientHeight;
       const scrollPercent = (scrollTop / totalScrollableHeight) * 100;
       setScrollPercent(scrollPercent);
     }
   };
   
   useEffect(() => {
     const timer = setTimeout(() => {
       const container = document.getElementById("content-container1");
       console.log("Container found in timeout:", container); // Verify if the container is available now
       if (container) {
         container.addEventListener("scroll", handleScroll);
       } else {
         console.error("Scrollable container not found!");
       }
     }, 100); // Delay execution for 100ms
   
     // Cleanup function
     return () => {
       clearTimeout(timer);
       const container = document.getElementById("content-container1");
       if (container) {
         container.removeEventListener("scroll", handleScroll);
       }
     };
   }, [pathname]); //
   
    
   
   
     useEffect(() => {
      
       
       // Reset scroll position when the route changes
       const container = document.getElementById("content-container1");
       if (container) {
         container.scrollTop = 0; // Scroll to the top of the container
       }
     }, [pathname]);
   
  
  
  
  
  const handleGoogleSignIn = () => {
    // Redirect to the Google Sign-In URL
    const googleSignInUrl = "https://accounts.google.com/o/oauth2/auth?client_id=4499760820-ogotadenot08hvfvoatf18p2mh9lmq4d.apps.googleusercontent.com&redirect_uri=&response_type=token&scope=email profile";
    window.location.href = googleSignInUrl;
  };


  const navigatea = useNavigate();

  const handleNavigation = () => {
   
    navigate("/python", { replace: true }); // Navigate to /python
    
  };



  

  const handleLogout = async () => {
    const refreshjwt = localStorage.getItem('jwt_token'); 
    
    try {
      // Make logout API call
      if (refreshjwt) {
      const response = await axios.post('https://dhanamfoundation.org/api/logout/', {
        refresh: refreshjwt, // Send refresh token
      });
      setAuth(false)
      localStorage.removeItem('jwt_token');
    
      console.log('Logout response:', response.data); // Optional: Check the response
      }
    } catch (error) {
      console.error('Logout error:', error.response ? error.response.data : error.message);
    } finally {
      // Clear tokens and other user data from localStorage
      localStorage.removeItem('jwt_token');
     
    
      // Redirect user to login page
  
    }
    };
    


  
  return (
    <>
   


   <Navbar expand="lg bg-white "style={{zIndex: 40}}

>
  <Navbar.Brand className="font-weight-bold d-flex  py-0 pps  p-0  "  >
  
    <div className='p-0 '>
  
    <Link to={"/"} className="navbar-brand   d-flex justify-content-center p-0 ">
    

    {! mobileSearchActive &&<img className="img-fluid mt-2 ms-4 me-5  " src='/images/h3.png ' alt="not" width={100}  height={30}  />}
   

       </Link>
      
   

   </div>

   
 
  
   

  </Navbar.Brand>

  
  <div>
  <MobileViewSearchBox/>
  </div>

  { ! mobileSearchActive &&<div className='d-flex justify-content-center'>

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


 
 

  {/* Collapsible menu 🏅 🏆 🔖 */}
  <Navbar.Collapse id="navbarCollapse" className="justify-content-between  p-0  navbar-container  " 
  >
    <Nav className="mx-auto font-weight-bold ms-3 ">
      <Nav.Link href="index.html" className="times-roman-text  p-0 d-none d-xl-block d-lg-block  ">
       
       <h5 className=' times-roman-text pe-3 ps-2 d-none pt-1  pb-1 mt-2 me-2 ms-2 d-xl-block d-lg-block bghover'> <span class="tutorial-icon fs-6 pe-1 ps-1">  📖  </span>Tutorial</h5> 
      </Nav.Link>
      <Nav.Link href="about.html" className="nav-item nav-link times-roman-text d-none d-xl-block d-lg-block p-0">
      <h5 className=' times-roman-text pe-3 ps-2 d-none pt-1  pb-1 mt-2 me-2 ms-2  d-xl-block d-lg-block bghover'> <span class="programming-symbol fs-6 pe-1 ps-1">  💻  </span>Exercises</h5> 
      </Nav.Link>
      <Nav.Link href="class.html" className="nav-item nav-link times-roman-text d-none d-xl-block d-lg-block p-0">
      <h5 className=' times-roman-text  pe-3 ps-2 d-none pt-1  pb-1 mt-2 me-2 ms-2  d-xl-block d-lg-block bghover'><span class="certificate-symbol fs-6 pe-1 ps-1">   📜   </span>Certification</h5> 
      </Nav.Link>

  <div className='d-flex'>

  
      <div className='bg-white m-1'>
      <Nav.Link href=""
       className="nav-item nav-link times-roman-text d-lg-none d-xl-none d-sm-block d-md-block text-start  ps-4 ms-2 pt-4 p-0"
       >
      <h5 className=' times-roman-text  d-lg-none d-sm-block d-md-block  '>Tutorial</h5> 
      </Nav.Link>
      <Nav.Link href=""
       className="nav-item nav-link times-roman-text d-lg-none d-xl-none d-sm-block d-md-block text-start  ps-4 ms-2 pt-4 p-0"
       >
      <h5 className='  times-roman-text  d-lg-none d-sm-block d-md-block  '>Exercises</h5> 
      </Nav.Link>
      <Nav.Link href="" className="nav-item  nav-link times-roman-text d-lg-none d-xl-none d-sm-block d-md-block text-start  ps-4 ms-2 pt-4 p-0"
      >
      <h5 className='  times-roman-text d-lg-none d-sm-block d-md-block  '>Certification</h5> 
      </Nav.Link>


      </div>

      <div className='d-flex justify-content-end container-fluid   d-lg-none d-xl-none d-sm-block d-md-block mt-5 pt-5  '>











{
	localStorage.getItem('jwt_token')?    <button className='btn btn-outline-success  ms-2 me-2'
  onClick={handleLogout}
  >Logout</button>:<>  <Link to={"/sign"} className="me-2 ms-2 ">

  {
   
   <button className='btn btn-outline-success ms-2 me-2 '>Login</button>
   

  }

       </Link>  </>
}





    

</div>

</div>


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
     
 
  
   

<div className='d-flex justify-content-end d-none d-xl-block d-lg-block  '>











{
	localStorage.getItem('jwt_token')?    <button className='btn btn-outline-primary  ms-2 me-2'
  onClick={handleLogout}
  >Logout</button>:<>  <Link to={"/sign"} className="me-2 ms-2 ">

  {
   
   <button className='btn btn-outline-primary ms-2 me-2 '>Login</button>
   

  }

       </Link>  </>
}





    

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



      

    <div className="position-relative align-items-center  "
     >
      
      {/* Left Scroll Button */}
      <button
        className=" scroll-btn A  border-0 "
        onClick={scrollLeft}
      >
      <h3 className='text-white pe-2 ps-2  '><b className='fntsizze'>‹</b></h3>
      </button>
     

      {/* Scrollable Content */}
      <div className="d-flex overflow-auto scroll-content ga A scrollable-container times-roman-text  "
     >
       
        
        <p className="text-white s mt  ">HTML</p>
        <p className="text-white s mt">CSS</p>
        
        <Link to = "/javascript" className='n '>
        <div className='d-flex '>
        <p className="text-white s mt">JAVA<span className='ps-1'>SCRIPT </span> </p>
        </div>
       
       
       </Link> 

        
       
       <a href="/python" className='n'> <p className="text-white s mt">PYTHON</p></a>


    



     
       <a href='react' className='n'><p className="text-white s mt">REACT<span className='ps-1'>JS</span></p></a>
       
      
       <p className="text-white s mt">JAVA</p>
       <p className="text-white s mt">C</p>
       <p className="text-white s mt">C++</p>
       <p className="text-white s mt">DATA<span className='ps-1'>SCIENCE</span></p>
       <p className="text-white s mt">PHP</p>
       <p className="text-white s mt">SQL</p>
       <p className="text-white s mt">AI</p>
       <p className="text-white s mt">GIT</p>
       <p className="text-white s mt">C#</p>
       <p className="text-white s mt">TAILWIND<span className='ps-1'>CSS</span></p>
       <p className="text-white s mt">MANGODB</p>
       <p className="text-white s mt">MYSQL</p>
       <p className="text-white s mt">NODE<span className='ps-1'>JS</span></p>
       <p className="text-white s mt">BOOTSTRAP</p>
       <p className="text-white s mt">KOTLIN</p>
       <p className="text-white s mt">ANGULAR</p>
       <p className="text-white s mt">ASP</p>
       <p className="text-white s mt">EMBBEDED<span className='ps-1'>C</span></p>
       <p className="text-white s mt">ARDUINO</p>
       <p className="text-white s mt">RESPBERRY<span className='ps-1'>PI</span></p>
       <p className="text-white s mt">NODEM<span className='ps-1'>MCU</span></p>
       <p className="text-white s mt">SIMULATION</p>

       
        
     
      
      
      </div>

      {/* Right Scroll Button */}
      <button
        className=" scroll-btn right border-0  A"
        onClick={scrollRight}
      >
        <h3 className='text-white pe-2 ps-2   '><b>›</b> </h3>
      </button>
    </div>
  



    

</>
  )
}

export default SecondNavigation