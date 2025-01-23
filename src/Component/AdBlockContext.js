import React, { createContext, useContext, useState, useEffect } from "react";

const AdBlockContext = createContext();

export const useAdBlock = () => useContext(AdBlockContext);

const AdBlockProvider = ({ children }) => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  // Detect ad blocker
  const detectAdBlock = async () => {
    const testAd = document.createElement("div");
    testAd.className = "ads";
    testAd.style.display = "none";
    document.body.appendChild(testAd);

    const isBlocked = getComputedStyle(testAd).display === "none";
    document.body.removeChild(testAd);

    return isBlocked;

  };

  const detectAdBlock1 = async () => {
    return new Promise((resolve) => {
      const adScript = document.createElement("script");
      adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      adScript.onerror = () => resolve(true); // Blocked by ad blocker
      adScript.onload = () => resolve(false); // Successfully loaded
      document.body.appendChild(adScript);
    });
  };



  useEffect(() => {
    const checkAdBlock = async () => {
      const isBlocked = await detectAdBlock1();
      setAdBlockDetected(isBlocked);
      console.log(adBlockDetected)
    };
    checkAdBlock();
  }, []);

  return (
    <AdBlockContext.Provider value={{ adBlockDetected, setAdBlockDetected }}>
      {children}
    </AdBlockContext.Provider>
  );
};

export default AdBlockProvider;