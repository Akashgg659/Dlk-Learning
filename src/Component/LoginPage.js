import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

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
  return (
    <div>

        
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
    </div>
  )
}

export default LoginPage