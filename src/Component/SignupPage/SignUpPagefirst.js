import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import { useAuth } from '../AuthContext';
import { Modal} from "react-bootstrap";
import LoginPage from '../LoginPage';
import ResponsiveNavbar from '../ResponsiveNavbar';
import Footer from '../Footer';


const SignUpPagefirst = () => {
  const[isSignUp, setIsSignUp] = useState(true)
    const navigate = useNavigate()

    const toggleForm = () => {
      setIsSignUp(!isSignUp);  // Toggle between Sign Up and Login forms
    };

    //const { signIn } = useAuth(); // Access sign-in function

    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent page reload
       // signIn(); // Mark the user as authenticated
        navigate("/")
        console.log("Sign-up form submitted!"); // Handle sign-up logic here
      };


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
  


  return (
    <div className='bg1'>


    <Navbar expand="lg Apptheme" 

    >
      <Navbar.Brand href="/" className="font-weight-bold mright py-0 pps  ">
        <div className='p-1'>
      <a
        href="/"
        className="navbar-brand font-weight-bold   width1 d-flex justify-content-center p-2"
        style={{ fontSize: 50 }}
      >
        <i className="flaticon-043-teddy-bear" />

        <img className="img-fluid " src='/images/logo2.jpg' alt="not" width={100}   />
        <div className='d-flex padingdown '>
           <h1 className=' text-center times-roman-text Apptheme '>DLK Learning</h1></div>
       </a></div>

      </Navbar.Brand>

      {/* Toggle button for mobile view */}
      <Navbar.Toggle aria-controls="navbarCollapse">
        <FaBars />
      </Navbar.Toggle>

      {/* Collapsible menu */}
      <Navbar.Collapse id="navbarCollapse" className="justify-content-between ">
        <Nav className="mx-auto font-weight-bold">
          <Nav.Link href="index.html" className="times-roman-text">
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
            className="m-3 inputradius p-2"
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

    <a href='https://www.youtube.com/@dlktechnologiesindiaprivat3300/featured' className='nav-item nav-link'>
   <h4 className='p-2'><i class="fab fa-youtube"></i> </h4>
    </a>

    <div
        id="google-sign-in-btn" className=' '
        style={{ width: "45px"  }} // Adjust the width and height
      ></div>


  

    </div>


         <a href="" className="btn btn-primary px-3 mleft">
          Join 
        </a>
      


      </Navbar.Collapse>

         

 

    </Navbar>




    <div className=' text-center  text-dark A '><h3>Unlock a world of knowledge! Sign up now to start your journey of learning</h3></div>
    <div className="container-fluid d-flex justify-content-center align-items-center mt-5 text-dark  " >
    {/* Left side: Sign Up Form */}
    <div className='p-3 m-3 container d-flex justify-content-around   ' >
    
    <div className="background-animation d-flex justify-content-center align-items-start mt-4">
      <div className="content  text-center rounded  moving-box">


      <div className="card shadow-lg p-4 animate__animated animate__fadeInLeft  " style={{ maxWidth: '350px',   }} >
      <div className="card-body p-3">
        {/* Title Section */}
        <h4 className="card-title text-center mb-4"> { isSignUp ? 'Sign Up' : 'Login'}</h4>
        <h5 className="card-title text-center mb-4">{isSignUp ? 'Already have an account?' :  ``}
           <b id='logino' onClick={toggleForm}> {isSignUp ? 'Login' :  ''}</b>
         </h5>

        

      <div className="d-flex justify-content-center mt-4 mb-1">
      <div className=" text-center p-1 letsi  " >
        <div className="d-flex justify-content-between align-items-center">
         
      <div
        id="google-sign-in-btn2" className='p-2  '
        // Adjust the width and height
       
      > <div className="g_id_signin"   data-size="large" data-text="signup"> <span>i</span></div></div>
      
       { /*  <img
        src="/images/google.gif" // Replace with the path to your logo image
        alt="Logo"
        width={40}
        className='img-fluid p-2'
      /> */}


        </div>
      </div>
    </div>

        <div className='text-center mb-1 mt-2 '>
          <h5><b>or</b></h5>
          <hr></hr>
        </div>

        {isSignUp ?(
          <form onSubmit={handleFormSubmit} className="p-2 ">
          {/* Name Input */}
          <div className="mb-1">
            <label htmlFor="name" className="form-label"></label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-1">
            <label htmlFor="email" className="form-label"></label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label"></label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Create a password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="d-flex justify-content-center mb-2">
            <button type="submit" className="btn btn-primary w-100">
            {isSignUp ? 'Sign Up' : 'Login'}  {/* Button text changes based on form */}
            </button>
          </div>
        </form>) :

         ( <div>

        <form onSubmit={handleFormSubmit} className="p-3" >
          {/* Name Input */}
         
          {/* Email Input */}
          <div className="mb-1">
            <label htmlFor="email" className="form-label"></label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label"></label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter a password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="d-flex justify-content-center mb-2">
          <button type="submit" className="btn btn-primary w-100 m-2">
           {`Forgot`}
            </button>
            <button type="submit" className="btn btn-primary w-100 m-2">
            {isSignUp ? 'Sign Up' : 'Login'}  {/* Button text changes based on form */}
            </button>
           
          </div>
        </form>

        <h5 className="card-title text-center mb-4">{isSignUp ? 'Already have an account?' :  `Don't have an account?`}
           <b id='logino' onClick={toggleForm}> {isSignUp ? 'Login' :  'Sign Up'}</b>
         </h5>


          </div>) 
        }



       

        {isSignUp ?(<div className='text-center mb-4'>
          <h6>By signing up you agree to our <a href='#'> Terms of Service</a> and <a href='#'>Privacy Policy</a></h6>
        </div>): (<></>)}

        {isSignUp ?(<div className='text-center d-flex justify-content-center'>
     <h5><input type='checkbox' className=''></input> Email me with news and updates</h5>
        </div>): (<></>)}
        
      </div>
    </div>
    

</div></div>


    <div className="card shadow-lg p-4 animate__animated animate__fadeInLeft  " style={{ maxWidth: '350px',   }} >
      <div className="card-body p-3">
        {/* Title Section */}
        <h4 className="card-title text-center mb-4"> { isSignUp ? 'Sign Up' : 'Login'}</h4>
        <h5 className="card-title text-center mb-4">{isSignUp ? 'Already have an account?' :  ``}
           <b id='logino' onClick={toggleForm}> {isSignUp ? 'Login' :  ''}</b>
         </h5>

        

      <div className="d-flex justify-content-center mt-4 mb-1">
      <div className=" text-center p-1 letsi  " >
        <div className="d-flex justify-content-between align-items-center">
         
      <div
        id="google-sign-in-btn2" className='p-2  '
        // Adjust the width and height
       
      > <div className="g_id_signin"   data-size="large" data-text="signup"> <span>i</span></div></div>
      
       { /*  <img
        src="/images/google.gif" // Replace with the path to your logo image
        alt="Logo"
        width={40}
        className='img-fluid p-2'
      /> */}


        </div>
      </div>
    </div>

        <div className='text-center mb-1 mt-2 '>
          <h5><b>or</b></h5>
          <hr></hr>
        </div>

        {isSignUp ?(
          <form onSubmit={handleFormSubmit} className="p-2 ">
          {/* Name Input */}
          <div className="mb-1">
            <label htmlFor="name" className="form-label"></label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-1">
            <label htmlFor="email" className="form-label"></label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label"></label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Create a password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="d-flex justify-content-center mb-2">
            <button type="submit" className="btn btn-primary w-100">
            {isSignUp ? 'Sign Up' : 'Login'}  {/* Button text changes based on form */}
            </button>
          </div>
        </form>) :

         ( <div>

        <form onSubmit={handleFormSubmit} className="p-3" >
          {/* Name Input */}
         
          {/* Email Input */}
          <div className="mb-1">
            <label htmlFor="email" className="form-label"></label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label"></label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter a password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="d-flex justify-content-center mb-2">
          <button type="submit" className="btn btn-primary w-100 m-2">
           {`Forgot`}
            </button>
            <button type="submit" className="btn btn-primary w-100 m-2">
            {isSignUp ? 'Sign Up' : 'Login'}  {/* Button text changes based on form */}
            </button>
           
          </div>
        </form>

        <h5 className="card-title text-center mb-4">{isSignUp ? 'Already have an account?' :  `Don't have an account?`}
           <b id='logino' onClick={toggleForm}> {isSignUp ? 'Login' :  'Sign Up'}</b>
         </h5>


          </div>) 
        }



       

        {isSignUp ?(<div className='text-center mb-4'>
          <h6>By signing up you agree to our <a href='#'> Terms of Service</a> and <a href='#'>Privacy Policy</a></h6>
        </div>): (<></>)}

        {isSignUp ?(<div className='text-center d-flex justify-content-center'>
     <h5><input type='checkbox' className=''></input> Email me with news and updates</h5>
        </div>): (<></>)}
        
      </div>
    </div>


  <div className='pt-3  d-none d-lg-block '>
 < img
        src="/images/1a.gif" // Replace with the path to your logo image
        alt="Logo"
        width={400}
        className='img-fluid  martotsign p-3'
      />
  </div>

    {/* Right side: Logo Image */}
    <div className="d-none d-lg-block ">
     { /*<img
        src="/images/logo2.jpg" // Replace with the path to your logo image
        alt="Logo"
        width={120}
        className='img-fluid '
      />*/}
      <div className='d-flex'>
      <h1 className='mt-3'>Become a DLk learners</h1>  
       <img
        src="/images/laptop.gif" // Replace with the path to your logo image
        alt="Logo"
        width={80}
        className='img-fluid p-3'
      />

      </div>
      
      <h3 className='mt-3'>Start Your Coding Journey </h3>
      <h6 className='mt-3'>📖 Explore interactive tutorials designed for seamless learning and growth</h6>
      <h6 className='mt-3'>💻 Join the community of learners and start mastering the art of coding. </h6>
      <h6 className='mt-3'>📈 Monitor your growth as you learn and achieve milestones along the way.</h6>
      <h6 className='mt-3'>🎯 Define your learning objectives and chart a path to success. </h6>
      <h6 className='mt-3'>🛤️ Discover a learning journey designed just for you and your goals. </h6>
      <h6 className='mt-3'>⚙️ Access regularly updated references and resources for accuracy and reliability. </h6>
    
    
      
    </div>


    
    </div>

    
   


</div>


     <div className='d-flex text-center p-3  justify-content-center'>
      
    
      <div className='d-flex  '>
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
   <h4 className='p-2'><i class="fab fa-google"></i> </h4>
    </a>

    </div>

     </div>

      <div className='text-center p-3'>
        <p>
        DLK Learning is designed to maximize your learning experience.
         Content is simplified for clarity and accessibility, and tutorials, examples, and references are continuously updated to ensure accuracy. While every effort is made to avoid errors, we cannot guarantee the complete correctness of all materials. By using DLK Learning,
         you acknowledge that you have 
         reviewed and accepted our terms of use, 
         privacy policy, and cookie guidelines
        </p>
      </div>














</div>

  )
}

export default SignUpPagefirst