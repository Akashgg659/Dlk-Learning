import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'; // Updated import
import{Button, Modal} from 'react-bootstrap'
import { useAuth } from './AuthContext';

const TimerModel = () => {
  const { isAuthenticated } = useAuth(); // Access authentication status
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      // Stop the timer if the user is signed in
      setTimeLeft(0); // Optionally, reset time left
      return;
    }

    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else {
      setShowModal(true); // Show modal when time is up
    }
  }, [timeLeft, isAuthenticated]);

  const handleSkip = () => {
    setShowModal(false);
    setTimeLeft(300); // Add 5 more minutes
  };


  return (
    
    <div>
      <h4>Time Left: {timeLeft}s</h4>
      <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title>Time's Up!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You need to sign up to continue using the website.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSkip}>
            Skip
          </Button>
          <Button variant="primary" onClick={() => window.location.replace('/signup')}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default TimerModel