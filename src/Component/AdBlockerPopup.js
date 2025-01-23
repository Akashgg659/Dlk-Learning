import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

const AdBlockerPopup = () => {
  const [show, setShow] = useState(false);

  // Ad blocker detection logic
  useEffect(() => {
    const detectAdBlocker = () => {
      const ad = document.createElement("div");
      ad.className = "adsbox";
      ad.style.display = "none";
      document.body.appendChild(ad);

      // If the element doesn't exist in the DOM, an ad blocker is active
      const isAdBlocked = !document.querySelector(".adsbox");
      document.body.removeChild(ad);

      if (isAdBlocked) {
        setShow(true);
      }
    };

    detectAdBlocker();
  }, []);

  return (
    <>
      {/* Modal to show the Ad Blocker message */}
      <Modal show={show} onHide={() => setShow(false)} backdrop="static" centered>
        <Modal.Header className="bg-danger text-white">
          <Modal.Title>Ad Blocker Detected</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            We noticed you're using an ad blocker. Ads help us keep our content
            free and support our site. Please consider disabling your ad blocker
            or whitelisting our website.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              window.open("https://www.wikihow.com/Disable-Adblock", "_blank");
            }}
          >
            Learn How to Disable
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdBlockerPopup;
