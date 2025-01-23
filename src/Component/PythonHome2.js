import React, { useContext, useEffect, useState } from 'react'
import ResponsiveNavbar from './ResponsiveNavbar'
import Footer from './Footer'
import { useLocation, Outlet } from 'react-router-dom'
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import Navigate from './Navigate';
import PythonHomePage from './PythonBasic/PythonHomePage';
import PythonSidebar from './PythonSidebar';
import AdBlockerPopup from './AdBlockerPopup';
import SecondNavigation from './SecondNavigation';
import StartRatingModel from './StarRating/StartRatingModel';
import { RatingContext } from './StarRating/RatingContext';


const PythonHome2 = () => {


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
  
  
  
  
    const { pathname2 } = useLocation();
    const [scrollPercent2, setScrollPercent2] = useState(0);
   
   // Handle scroll event to calculate scroll percentage
   const handleScroll2 = () => {
    const container = document.getElementById("content-container2");
    if (container) {
      const scrollTop2 = container.scrollTop2; // Distance scrolled
      const scrollHeight2 = container.scrollHeight2; // Total scrollable height
      const clientHeight2 = container.clientHeight2; // Visible height
  
      const totalScrollableHeight2 = scrollHeight2 - clientHeight2;
      const scrollPercent2 = (scrollTop2 / totalScrollableHeight2) * 100;
      setScrollPercent2(scrollPercent2);
    }
  };
  
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const container = document.getElementById("content-container2");
      console.log("Container found in timeout:", container); // Verify if the container is available now
      if (container) {
        container.addEventListener("scroll", handleScroll2);
      } else {
        console.error("Scrollable container not found!");
      }
    }, 100); // Delay execution for 100ms
  
    // Cleanup function
    return () => {
      clearTimeout(timer);
      const container = document.getElementById("content-container2");
      if (container) {
        container.removeEventListener("scroll", handleScroll2);
      }
    };
  }, [pathname2]); //
  
    // Reset progress bar when pathname changes (when outlet content changes)
    useEffect(() => {
      setScrollPercent2(0); // Reset the scroll progress to 0
    }, [pathname2]); // This effect will run on pathname changes (e.g., when you navigate)
  
  
    useEffect(() => {
     
      
      // Reset scroll position when the route changes
      const container = document.getElementById("content-container2");
      if (container) {
        container.scrollTop2 = 0; // Scroll to the top of the container
      }
    }, [pathname2]);
  
  
  
    React.useEffect(() => {
      // Reset or initialize state here
      console.log("Python Home view restarted.");
    }, []); // Empty dependency ensures this runs only on mount


      const [showModal, setShowModal] = useState(false);
  
  return (
    <div>
       <>
  <div className=''>
<SecondNavigation/>
</div>



<div className=''
 id="content-container2"
 key={pathname2}>

  {/* Progress Bar */}
<div className=''
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
  
      <div className='container-fluid  '
      
      >
      
        
        <div className='row  '>
          <div className='col-xl-3 col-lg-3 col-md-5 col-sm-6 col-12 pb-1  d-none d-lg-block d-xl-block '  >

          
            <PythonSidebar/>
          </div>



          <div className='col-lg-7  col-md-6 pb-1   '
        >

       

              <div className='cardheight2 scrollable-container  scrollable-container2   '
               id="content-container"
               key={pathname}
              
              >

                <StartRatingModel showModal={showModal} setShowModal={setShowModal} />

     
              
              <PythonHomePage/>

               
              </div>


           

            

          </div>


          <div className='col-lg-1 col-m-6 pb-1 m-3  '>
          <div>
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

        

      </div>

     


</div>
      
       

<Footer />
      

    </>
    </div>
  )
}

export default PythonHome2