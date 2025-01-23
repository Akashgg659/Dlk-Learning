import React, { useEffect, useState } from 'react';

const Cookies = () => {

    const [cookies, setCookies] = useState([]);

  useEffect(() => {
    // Function to parse cookies from document.cookie
    const getCookies = () => {
      const cookies = document.cookie.split(';').map(cookie => {
        const [name, value] = cookie.trim().split('=');
        return { name, value };
      });
      return cookies;
    };

    // Get the cookies when the component mounts
    const cookiesArray = getCookies();
    setCookies(cookiesArray);
  }, []);


  useEffect(() => {
    // Log all cookies to see what is accessible
    console.log("All Cookies:", document.cookie);
  
    const getCookies = () => {
      const cookies = document.cookie.split(';').map(cookie => {
        const [name, value] = cookie.trim().split('=');
        return { name, value };
      });
      return cookies;
    };
  
    // Get the cookies when the component mounts
    const cookiesArray = getCookies();
    setCookies(cookiesArray);
  }, []);


  window.addEventListener('storage', (event) => {
    console.log(`Storage changed: ${event.key} = ${event.newValue}`);
  });
  
  return (
   <div>
      <h2>Cookies Table</h2>
      <table border="1" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Cookie Name</th>
            <th>Cookie Value</th>
          </tr>
        </thead>
        <tbody>
          {cookies.map((cookie, index) => (
            <tr key={index}>
              <td>{cookie.name}</td>
              <td>{cookie.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Cookies