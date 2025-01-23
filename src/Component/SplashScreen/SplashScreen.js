import React, { useEffect, useState } from 'react'
import SplashDesign from './SplashDesign';


const SplashScreen = () => {

  const [loading, setLoading] = useState(true);

  // Simulate loading time (e.g., API or assets loading)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Show splash screen for 3 seconds
    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  if (!loading) {
    return null; // Hide the splash screen after loading
  }

  
     
  return (
    <div className="splash-screen">
      
      <SplashDesign/>
    </div>
  );
};

export default SplashScreen