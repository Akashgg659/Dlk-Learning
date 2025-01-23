import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SignupAuthContext } from "./SignUpAuthenticationContext/SignUpAuthenication";



const Timermodal = () => {
const [timeLeft, setTimeLeft] = useState(10); // 5 minutes
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [showFinalModal, setShowFinalModal] = useState(false);
  const [skipUsed, setSkipUsed] = useState(false); // Track if the skip option was used
  const [userip, setUserIp] = useState(null)
 
   const {auth} = useContext(SignupAuthContext)
   const {setAuth} = useContext(SignupAuthContext)
  
  const navigate = useNavigate();



 useEffect(()=>{
  
  axios.get('https://api.ipify.org?format=json')
  .then((response)=>{
    const ip = response.data.ip;
    setUserIp(ip)

    
  const saveState = JSON.parse(localStorage.getItem(ip))
   
  if(saveState){
    setTimeLeft(saveState.timeLeft)
    setSkipUsed(saveState.skipUsed);
  
    // Retrieve the JWT token from local storage
    const jwtToken = localStorage.getItem('jwt_token');

    // If a JWT token exists, you can set the auth state to true
    if (jwtToken) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  
    console.log(saveState);
  }
  } )
  .catch((error)=>{
    console.log(error)
  })


 } , [])

 console.log(auth)

 console.log( localStorage.getItem('jwt_token'));


  // Countdown Timer Logic
  useEffect(() => {

   if (auth=== true) return; 
    
  const jwtToken = localStorage.getItem('jwt_token');

  if (jwtToken) return;

    if (timeLeft > 0 ) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (!skipUsed) {
      setShowAlertModal(true); // Show alert modal when the first 5 minutes are up
    } else  {
      setShowFinalModal(true); // Show final modal when extra 5 minutes are up
    }


    // Save the state in local storage
    if (userip) {
      localStorage.setItem(userip, JSON.stringify({ timeLeft, skipUsed, auth }));
    }
  }, [timeLeft, skipUsed, auth, userip]);



  // Handle Skip Action
  const handleSkip = () => {
    setShowAlertModal(false);
    setTimeLeft(10); // Add 5 more minutes
    setSkipUsed(true); // Mark that the skip was used

  };

  // Handle Sign Up Action
  const handleSignup = () => {
    setShowAlertModal(false);
    setShowFinalModal(false);
    //setIsSignedUp(true);
    //localStorage.setItem('isSignedUp', true);  // Store the sign-up status in localStorage
      // Mark the user as signed up in localStorage
   
    navigate("/sign"); // Redirect to the sign-up page
  };





  return (
    <>
  

<div className="container">

  {/* Timer Display */}
  {/* Uncomment the following if you want to display the timer */}
  {/* <div className="text-center my-3">
    <h4 className="text-primary">
      Time Left: {Math.floor(timeLeft / 60)}m {timeLeft % 60}s
    </h4>
  </div> */}

  {/* Alert Modal */}

  {
   
  localStorage.getItem('jwt_token')&& auth === false? 
  <></>: <Modal
  show={showAlertModal}
  onHide={handleSkip}
  backdrop="static"
  keyboard={false}
  centered
  >
  <Modal.Header className="bg-warning text-dark">
    <Modal.Title className="fw-bold">⏰ Time's Up!</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p className="mb-4">
      Your 5 minutes are up. You can skip to continue for another 5 minutes or
      sign up now.
    </p>
  </Modal.Body>
  <Modal.Footer className="d-flex justify-content-between">
    <Button variant="outline-secondary" onClick={handleSkip}>
      Skip
    </Button>
    <Button variant="primary" onClick={handleSignup}>
      Sign Up
    </Button>
  </Modal.Footer>
  </Modal>


  }
 

  {/* Final Modal */}
{
  localStorage.getItem('jwt_token') && auth===false ?
  
  <></> : <Modal
  show={showFinalModal}
  onHide={handleSignup}
  backdrop="static"
  keyboard={false}
  centered
>
  <Modal.Header className="bg-danger text-white">
    <Modal.Title className="fw-bold">🔒 Sign Up Required</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>
      Your extra time has expired. You must sign up to continue using the
      website.
    </p>
  </Modal.Body>
  <Modal.Footer className="justify-content-end">
    <Button variant="success" onClick={handleSignup}>
      Sign Up
    </Button>
  </Modal.Footer>
</Modal>
}

 


   


</div>


</>
  )
}

export default Timermodal