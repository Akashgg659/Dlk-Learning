import React, { useEffect, useState } from 'react'


import { useLocation, Outlet } from 'react-router-dom'
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';




import ReactSidebar from './ReactSidebar';
import ResponsiveNavbar from '../ResponsiveNavbar';
import Footer from '../Footer';
import SecondNavigation from '../SecondNavigation';

const ReactHome = () => {

    const { pathname } = useLocation();
    const [scrollPercent, setScrollPercent] = useState(0);
   
   // Handle scroll event to calculate scroll percentage
   const handleScroll = () => {
    const container = document.getElementById("content-container");
    if (container) {
      const scrollTop = container.scrollTop; // Distance scrolled
      const scrollHeight = container.scrollHeight; // Total scrollable height
      const clientHeight = container.clientHeight; // Visible height
  
      const totalScrollableHeight = scrollHeight - clientHeight;
      const scrollPercent = (scrollTop / totalScrollableHeight) * 100;
      setScrollPercent(scrollPercent);
    }
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const container = document.getElementById("content-container");
      console.log("Container found in timeout:", container); // Verify if the container is available now
      if (container) {
        container.addEventListener("scroll", handleScroll);
      } else {
        console.error("Scrollable container not found!");
      }
    }, 100); // Delay execution for 100ms
  
    // Cleanup function
    return () => {
      clearTimeout(timer);
      const container = document.getElementById("content-container");
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [pathname]); //
  
    // Reset progress bar when pathname changes (when outlet content changes)
    useEffect(() => {
      setScrollPercent(0); // Reset the scroll progress to 0
    }, [pathname]); // This effect will run on pathname changes (e.g., when you navigate)
  
  
    useEffect(() => {
      // Reset scroll position when the route changes
      const container = document.getElementById("content-container");
      if (container) {
        container.scrollTop = 0; // Scroll to the top of the container
      }
    }, [pathname]);

  
  return (
     <>
<SecondNavigation/>
       {/* Progress Bar */}
       <div
        style={{
          height: "3px",
          width: `${scrollPercent}%`,
          backgroundColor: "blue",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          transition: "width 0.3s ease",
        }}
      ></div>
  
      <div className='container-fluid  '>
      
        
        <div className='row '>
          <div className='col-lg-3 col-md-6 pb-1 ' >

          
            <ReactSidebar/>
          </div>


          <div className='col-lg-7 col-md-6 pb-1 m-3  '
        >

       

              <div className='cardheight scrollable-container p-3 '
              id="content-container"
              key={pathname} style={{ minHeight: "90vh",
                maxHeight: "90vh",
                overflowY: "scroll", }}
              >
              
               <Outlet/>

               
              </div>
            

          </div>

          <div className='col-lg-1 col-m-6 pb-1 m-3  '>
        {/* Social Icons */}
  <div className="social-icons-container p-3">
    <div className="social-icons d-flex justify-content-center">
      <a
        href="https://www.facebook.com/DlkTechnologies/"
        className="nav-item nav-link social-icon facebook"
      >
        <img src='/images/ff.gif' alt='img' className='img-fluid ' width={30}></img>
       
      </a>
     
      <a
        href="https://www.instagram.com/dlk_tec"
        className="nav-item nav-link social-icon instagram"
      >
        <img src='/images/i1.gif' alt='img' className='img-fluid ' width={30}></img>
      </a>
      <a
        href="https://www.linkedin.com/company/dlktechnologies/"
        className="nav-item nav-link social-icon linkedin"
      >
        <img src='/images/l.gif' alt='img' className='img-fluid ' width={30}></img>
      </a>
      <a
        href="https://www.youtube.com/@dlktechnologiesindiaprivat3300/featured"
        className="nav-item nav-link social-icon youtube"
      >
        <img src='/images/yy.gif' alt='img' className='img-fluid ' width={30}></img>
      </a>

   

    </div>
    
  </div>

          </div>

        </div>

      </div>



    <Footer/>

    </>
  )
}

export default ReactHome