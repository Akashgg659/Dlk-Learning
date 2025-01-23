import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

import { useAdBlock } from "./AdBlockContext";

const AdBlocker = () => {
  const { adBlockDetected, setAdBlockDetected} = useAdBlock();
  const [show, setShow] = useState(false)
  
  
/*
  const handleReload = async () => {
    const testAd = document.createElement("div");
    testAd.className = "ads";
    testAd.style.display = "none";
    document.body.appendChild(testAd);

    const isBlocked = getComputedStyle(testAd).display === "none";
    document.body.removeChild(testAd);

    if (!isBlocked) {
      setAdBlockDetected(false);
    } else {
      alert("Ad blocker is still active. Please disable it to access the site.");
    }
  };*/


 

  const detectAdBlock = async () => {
    return new Promise((resolve) => {
      const adScript = document.createElement("script");
      adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      adScript.onerror = () => resolve(true); // Blocked by ad blocker
      adScript.onload = () => resolve(false); // Successfully loaded
      document.body.appendChild(adScript);
      
    });
  };


/*

  const handleReload = async () => {
    const isBlocked = await detectAdBlock();
    console.log("Ad Blocker Detected After Reload:", isBlocked);

      if (!isBlocked) {
      setAdBlockDetected(false);
      window.location.reload();  // Refresh the page
      
      console.log("Modal should now close");
      
    
    } else {

      alert("Ad blocker is still active. Please disable it to access the site.");

    }
    
  };

*/

  const handleReload = async () => {
    const isBlocked = await detectAdBlock();
    console.log("Ad Blocker Detected After Reload:", isBlocked);
  
    if (!isBlocked) {
      // If ad blocker is disabled, set state and reload the page
      setAdBlockDetected(false);
  
      // Store the information in sessionStorage to persist state across reloads
      sessionStorage.setItem('adBlockDisabled', 'true'); 
      setShow(false)
      
      // Reload the page
      window.location.reload();
      console.log("Modal should now close and the page should reload");
    } else {
       //Show an error message if the ad blocker is still active
       setShow(true)

      
    }
  };

  useEffect(() => {
    // Check if ad blocker has been disabled in the current session
    const adBlockStatus = sessionStorage.getItem('adBlockDisabled');
  
    if (adBlockStatus === 'true') {
      setAdBlockDetected(false); // Hide the modal if ad blocker is disabled
      console.log("Ad blocker has already been disabled in this session.");
    } else {
      // Detect ad blocker if it hasn't been disabled yet
      detectAdBlock().then((isBlocked) => {
        if (isBlocked) {
          setAdBlockDetected(true);  // Show the modal if ad blocker is detected
          console.log("Ad Blocker detected, showing modal.");
        }
      });
    }
  }, []);


  





  return (
    <div>
     <Modal
      show={adBlockDetected}
      backdrop="static"
      keyboard={false}
      centered
      className="adblock-modal hg  "
      
    >
      <Modal.Header className="bg-warning text-dark px-4 " >
        <Modal.Title className="text-center w-100">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          Ad Blocker Detected
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4 " >

      { show ?(
        <div className="text-center ">
        <img
          src="/images/ad3.jpg"
          alt="Ad Block Alert"
          className="img-fluid mb-3"
          style={{ maxWidth: "80px" }}
        />
        <p className="lead ">Steps to follow for  disable Ad blocker </p>
        <p className="lead text-start p-3">To disable an ad blocker extension in Chrome</p>
        <div className="m-3">
        <p className="text-start "> 1.Click the three dots (⋮) in the top-right corner, then select Settings.</p>
                  <p className="text-start">2.Navigate to More tools and select Extensions</p>
                  <p className="text-start">3.Find the ad blocker extension you want to disable in the list</p>
                  <p className="text-start">4.Toggle the switch next to the extension to turn it off</p>
        </div>
            
                  
                 
                  
      </div>

       
      ):(
       <div className="text-center  px-4">
          <img
            src="/images/ad2.jpg"
            alt="Ad Block Alert"
            className="img-fluid mb-3"
            style={{ maxWidth: "80px" }}
          />
          <div className="d-flex justify-content-start text-start">
          <p className="">
            It seems you're using an ad blocker. Ads help us keep our content
            free for everyone. Please disable your ad blocker and refresh the
            page, or consider subscribing for an ad-free experience.
          </p>
          </div>
          
                
        </div>)
}
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-around">
        <Button
          variant="primary"
          className="px-4 py-2"
          onClick={handleReload}
        >
          Allow Ads
        </Button>
        <Button
          variant="success"
          className="px-4 py-2"
          onClick={() => alert("Redirect to subscription page")}
        >
          Subscribe
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
};


export default AdBlocker