
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css"; // Import Animate.css for motion effects
import ResponsiveNavbar from "../ResponsiveNavbar";
import { Link, useNavigate } from "react-router-dom";
import SearchBox from '../SearchBox/SearchBox';
import { useMobileSearch } from '../SearchBox/MobileViewContext/MobileSearchContex';
import MobileViewSearchBox from '../SearchBox/MobileViewSearchBox';
import SignupForm from "./SignupForm";

const SignUpPage2 = () => {
  const navigate = useNavigate()

  const islogin = localStorage.getItem('jwt_token')?true : false

  useEffect(() => {
    if (islogin) {
     
      navigate('/');
    }
  }, [islogin, navigate])


 
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };


  const [isDarkMode, setIsDarkMode] = useState(false);



  const setDarkMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'dark')

  }

  const setLightMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'light')
  }

  const toggleTheme = () => {
    if (isDarkMode) {
      setLightMode();
    } else {
      setDarkMode();
    }
    setIsDarkMode(!isDarkMode);
  }

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

    // Render the Google Sign-In button
    window.google.accounts.id.renderButton(
      document.getElementById('google-sign-in-btn2'), // The element to render the button
      {
        // Button style ('filled' or 'outline')
        size: 'large',    // Set to 'small' for a compact button
        shape: 'circle',  // 'circle' for a round button with just the icon
        text: 'signin_with', // Button text
      }
    );

    window.google.accounts.id.prompt(); // Displays the Google One Tap Sign-In prompt

  }, []);

  const handleCredentialResponse = (response) => {
    console.log("Google sign-in response:", response);

    // Handle the Google token and user info
    // Here you can send the token to your backend for validation or use it directly in the frontend.
    const { credential } = response;
    console.log("ID Token:", credential);
    // Example: You can now use the token or redirect the user after sign-in

    // Simulate sign-up logic (e.g., send data to backend)
    // Simulate sign-up logic (e.g., send data to backend)
    navigate("/")
  };

  const { mobileSearchActive } = useMobileSearch()



  return (

    < div className="vh-100">



      <Navbar expand="lg Apptheme  "

      >
        <Navbar.Brand className="font-weight-bold d-flex  py-0 pps  p-0  "  >

          <div className='p-0 '>

            <Link to={"/"} className="navbar-brand   d-flex justify-content-center p-0 ">


              {!mobileSearchActive && <img className="img-fluid me-4 ms-5 " src='/images/h3.png ' alt="not" width={100}  height={30}  />}


            </Link>



          </div>






        </Navbar.Brand>


        <div>
          <MobileViewSearchBox />
        </div>

        {<div className='d-flex justify-content-center'>

          {<div className="pe-3 ps-3 d-lg-none d-xl-none d-sm-block d-md-block  ">

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
        <Navbar.Collapse id="navbarCollapse" className="justify-content-between  p-0  " >
          <Nav className="mx-auto font-weight-bold ms-3">
            <Nav.Link href="index.html" className="times-roman-text  p-0 d-none d-xl-block d-lg-block">

              <h5 className='Apptheme  times-roman-text pe-3 ps-3 d-none d-xl-block d-lg-block'> <span class="tutorial-icon fs-6 pe-1 ps-1">  📖  </span>Tutorial</h5>
            </Nav.Link>
            <Nav.Link href="about.html" className="nav-item nav-link times-roman-text d-none d-xl-block d-lg-block p-0">
              <h5 className='Apptheme  times-roman-text pe-3 ps-3'> <span class="programming-symbol fs-6 pe-1 ps-1">  💻  </span>Exercises</h5>
            </Nav.Link>
            <Nav.Link href="class.html" className="nav-item nav-link times-roman-text d-none d-xl-block d-lg-block p-0">
              <h5 className='Apptheme  times-roman-text pe-3 ps-3'><span class="certificate-symbol fs-6 pe-1 ps-1">   📜   </span>Certification</h5>
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

          <SearchBox />



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











          </div>


        </Navbar.Collapse>





      </Navbar>



      <div className="container-fluid d-flex flex-column align-items-center     ">

        {/* Header Section */}


        {/* Main Content */}
        <div className="row w-100 d-flex justify-content-center align-items-start  ">
          {/* Left Side: Sign-Up/Login Form */}




          <div className="col-lg-4 col-md-8 col-sm-10   ">


            {/*<div class="section">
              <div class="container">
                <div class="row full-height justify-content-center">
                  <div class="col-12 text-center align-self-center py-2">
                    <div class="section  pt-sm-2 text-center   ">
                      
                      <input class="checkbox " type="checkbox" id="reg-log" name="reg-log" />

                      <label for="reg-log"><span>Login</span></label>
                      <div class="card-3d-wrap mx-auto  ">
                        <div class="card-3d-wrapper ">
                          <div class="card-front ">

                            <div class="center-wrap ">
                              <div class="section text-center ">
                                <h4 class="mb-4 pb-3  ">Welcome Back</h4>
                                <div class="form-group">
                                  <input type="email" name="logemail" class="form-style bg-white " placeholder="Your Email" id="logemail" autocomplete="off" />
                                  <i class="input-icon uil uil-at"></i>
                                </div>
                                <div class="form-group mt-2">
                                  <input type="password" name="logpass" class="form-style bg-white" placeholder="Your Password" id="logpass" autocomplete="off" />
                                  <i class="input-icon uil uil-lock-alt"></i>
                                </div>


                                <h4 class="btn1 mt-4">Login</h4>
                                <p class="mb-0 mt-4 text-center"><a href="#0" class="link text-decoration-none">Forgot your password?</a></p>
                              </div>
                            </div>
                          </div>
                          <div class="card-back ">
                            <div class="center-wrap">
                              <div class="section text-center">
                                <h4 class="mb-4 pb-3">welcome</h4>







                                <div class="form-group">
                                  <input type="text" name="logname" class="form-style bg-white" placeholder="Your Full Name" id="logname" autocomplete="off" />
                                  <i class="input-icon uil uil-user"></i>
                                </div>
                                <div class="form-group mt-2">
                                  <input type="email" name="logemail" class="form-style bg-white" placeholder="Your Email" id="logemail" autocomplete="off" />
                                  <i class="input-icon uil uil-at"></i>
                                </div>
                                <div class="form-group mt-2">
                                  <input type="password" name="logpass" class="form-style bg-white" placeholder="Your Password" id="logpass" autocomplete="off" />
                                  <i class="input-icon uil uil-lock-alt"></i>
                                </div>
                                <h4 class="btn1 mt-4  ">Sign Up</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>*/}

            <div className="p-3 mt-3 mb-3">

            <SignupForm/>

            </div>

           

          </div>


          <div className='pt-3 col-lg-4 d-none d-lg-block mt-5 '>
            < img
              src="/images/1a.gif" // Replace with the path to your logo image
              alt="Logo"
              width={400}
              className='img-fluid  martotsign p-3'
            />
          </div>

          {/* Right Side: Information Section */}
          <div className="col-lg-4 d-none d-lg-block ">
            <div className=" mt-4">



              <div className="d-none d-lg-block mt-5 pt-5 ">
                { /*<img
        src="/images/logo2.jpg" // Replace with the path to your logo image
        alt="Logo"
        width={120}
        className='img-fluid '
      />*/}
                <div className='d-flex'>
                  <h3 className='mt-3'>Become a DLk Career Development</h3>
                  <img
                    src="/images/laptop.gif" // Replace with the path to your logo image
                    alt="Logo"
                    width={100}
                    className='img-fluid p-3'
                  />

                </div>

                <h4 className='mt-2'>Start Your Coding Journey </h4>
                <h6 className='mt-3'>📖 Explore interactive tutorials designed for seamless learning and growth</h6>
                <h6 className='mt-3'>💻 Join the community of learners and start mastering the art of coding. </h6>
                <h6 className='mt-3'>📈 Monitor your growth as you learn and achieve milestones along the way.</h6>
                <h6 className='mt-3'>🎯 Define your learning objectives and chart a path to success. </h6>



              </div>
            </div>
          </div>
        </div>




        {/* Footer Section */}
        <footer className="text-center  ">
          <p className="animate__animated animate__fadeInUp">
            DLK Learning is designed to maximize your learning experience. Tutorials, examples, and
            references are continuously updated for clarity and accuracy.
          </p>
          <div className="d-flex justify-content-center mt-3">
            <a href="https://www.facebook.com/DlkTechnologies/" className=" mx-2">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="https://www.instagram.com/dlk_tec" className="mx-2">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/company/dlktechnologies/" className=" mx-2">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://x.com/dlktechnologie/" className=" mx-2">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a
              href="https://www.youtube.com/@dlktechnologiesindiaprivat3300/featured"
              className=" mx-2"
            >
              <i className="fab fa-youtube fa-lg"></i>
            </a>
          </div>
        </footer>
      </div>



















    </div>


  )
}

export default SignUpPage2