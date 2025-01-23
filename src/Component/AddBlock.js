import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

const AddBlock = () => {
    const [adBlockDetected, setAdBlockDetected] = useState(false);

    useEffect(() => {
      const testAd = document.createElement("div");
      testAd.className = "ads";
      testAd.style.display = "none";
      document.body.appendChild(testAd);
  
      if (getComputedStyle(testAd).display === "none") {
        setAdBlockDetected(true);
      }
  
      document.body.removeChild(testAd);
    }, []);
  
    const handleReload = () => {
      window.location.reload();
    };
  return (
    <>
     <Modal
      show={adBlockDetected}
      backdrop="static"
      keyboard={false}
      centered
      size="md"
      className="adblock-modal"
    >
      <Modal.Header className="bg-danger text-white">
        <Modal.Title className="w-100 text-center">
          <i className="bi bi-shield-exclamation me-2"></i> Ad Blocker Detected
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Ad Block Warning"
            className="img-fluid mb-3"
          />
          <p className="lead">
            It seems you're using an ad blocker. Our website relies on ad revenue to
            provide you with free content. Please consider disabling your ad blocker to
            support us or subscribe to an ad-free experience.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-around">
        <Button
          variant="primary"
          className="px-4"
          onClick={handleReload}
        >
          Allow Ads
        </Button>
        <Button
          variant="success"
          className="px-4"
          onClick={() => alert("Redirect to subscription page")}
        >
          Subscribe
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default AddBlock