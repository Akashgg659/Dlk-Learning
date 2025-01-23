import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const GoogleSignUpPop = () => {
    const navigate = useNavigate();

    const jwtToken = localStorage.getItem('jwt-token')
    
    useEffect(() => {

     
        // Load Google Identity Services script
        const initializeGoogleSignIn = () => {
          window.google.accounts.id.initialize({
            client_id: "4499760820-ogotadenot08hvfvoatf18p2mh9lmq4d.apps.googleusercontent.com", // Replace with your actual Client ID
            callback: handleGoogleResponse,
          });
          window.google.accounts.id.prompt(); 
        }
    
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
        // Decode the credential token or send it to your backend for verification
        const userObject = JSON.parse(atob(response.credential.split(".")[1]));
        console.log("User Info:", userObject);


    // Example: Save the user's name in localStorage
    const userName = userObject.name || "User"; // Fallback to "User" if name is unavailable
    localStorage.setItem("userName", userName);
    console.log(userName)
    
        // Navigate to the home page or dashboard after successful sign-up
        navigate("/");
      };





  return (
    <div className="">
 
 <div
        id="g_id_onload"
        data-client_id="4499760820-ogotadenot08hvfvoatf18p2mh9lmq4d.apps.googleusercontent.com" // Replace with your actual Client ID
        data-auto_prompt="false"
      ></div>

  </div>
  )
}

export default GoogleSignUpPop