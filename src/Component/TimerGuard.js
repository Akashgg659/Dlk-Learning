import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const TimerGuard = ({ children }) => {
    const [timeRemaining, setTimeRemaining] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedTime = localStorage.getItem('startTime');
    const currentTime = Date.now();

    // If start time doesn't exist, set it to current time
    if (!savedTime) {
      localStorage.setItem('startTime', currentTime);
      setTimeRemaining(300);  // 5 minutes (in seconds)
    } else {
      const elapsedTime = Math.floor((currentTime - savedTime) / 1000); // Time in seconds
      const remainingTime = 300 - elapsedTime; // 5 minutes - elapsed time

      if (remainingTime <= 0) {
        // If time has expired, navigate to the signup page
        navigate('/signup');
      } else {
        setTimeRemaining(remainingTime);
      }
    }

    // Update the time remaining every second, but skip when on signup page
    if (location.pathname !== '/signup') {
      const timer = setInterval(() => {
        const savedTime = localStorage.getItem('startTime');
        const currentTime = Date.now();
        const elapsedTime = Math.floor((currentTime - savedTime) / 1000); // Time in seconds
        const remainingTime = 300 - elapsedTime; // 5 minutes - elapsed time

        if (remainingTime <= 0) {
          // If time expired, stop the timer and navigate to signup
          clearInterval(timer);
          navigate('/signup');
        } else {
          setTimeRemaining(remainingTime);
        }
      }, 1000);

      // Clean up interval on unmount or when location changes
      return () => clearInterval(timer);
    }
  }, [location.pathname, navigate]);

  return <>{children}</>;
  
}

export default TimerGuard