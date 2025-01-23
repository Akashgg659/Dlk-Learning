import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUpPop = () => {
    const [showModal, setShowModal] = useState(false);

    // Show the modal when the page loads
    useEffect(() => {
      const jwtToken = localStorage.getItem('jwt_token');
      if(jwtToken) return
      
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 1000); // Delay by 1 second for a better user experience
      return () => clearTimeout(timer);
    }, []);
  
    const handleSignup = () => {
      alert("Google Sign-Up Process Initiated!");
      setShowModal(false);
    };
  
    const handleClose = () => {
      setShowModal(false);
    };
  return (
    <div>
         <div>
      {/* Bootstrap Modal */}
      {showModal && (
        <div className="modal fade show d-block m-3 hm" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="d-flex justify-content-end">
                
                <button
                  type="button"
                  className="btn-close m-3"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body text-center">
              
                <button
                  className="btn btn-danger d-flex align-items-center justify-content-center"
                  onClick={handleSignup}
                >
                  <i className="fab fa-google me-2"></i> Sign Up with Google
                </button>
              </div>
            
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default SignUpPop