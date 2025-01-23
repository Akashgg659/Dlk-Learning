import React, { useEffect, useRef, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../Css/Section5Card.css'
import Marquee from '../MagicUi/Marquee';

const Section5Card = () => {



const [activeIndex, setActiveIndex] = useState(0); // Track the active index
  const [isHovering, setIsHovering] = useState(false);
  const [intervalId, setIntervalId] = useState(null);  // To store the interval reference

  // Start the carousel slide
  useEffect(() => {
    if (!isHovering) {
      const id = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 3);  // Adjust 3 based on your total slides
      }, 3500);  // Change slide every 3 seconds
      setIntervalId(id);

      // Clear the interval on cleanup
      return () => clearInterval(id);
    }
  }, [isHovering]);

  // Stop the carousel slide
  const handleMouseEnter = () => {
    setIsHovering(true);  // Stop sliding when hovering
    clearInterval(intervalId);  // Stop the interval when mouse enters
  };

  // Resume the carousel slide
  const handleMouseLeave = () => {
    setIsHovering(false);  // Resume sliding when mouse leaves
  };

  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Set up IntersectionObserver to detect when the element is in view
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target); // Stop observing once it's in view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    // Target the div we want to animate
    const target = document.querySelector('.slide-right');
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target); // Clean up observer on component unmount
      }
    };
  }, []);





  //another

  
  const [activeIndex1, setActiveIndex1] = useState(0); // Track the active index
  const [isHovering1, setIsHovering1] = useState(false);
  const [intervalId1, setIntervalId1] = useState(null);  // To store the interval reference

  // Start the carousel slide
  useEffect(() => {
    if (!isHovering1) {
      const id = setInterval(() => {
        setActiveIndex1((prevIndex) => (prevIndex + 1) % 3);  // Adjust 3 based on your total slides
      }, 3000);  // Change slide every 3 seconds
      setIntervalId1(id);

      // Clear the interval on cleanup
      return () => clearInterval(id);
    }
  }, [isHovering]);

  // Stop the carousel slide
  const handleMouseEnter1 = () => {
    setIsHovering1(true);  // Stop sliding when hovering
    clearInterval(intervalId1);  // Stop the interval when mouse enters
  };

  // Resume the carousel slide
  const handleMouseLeave1 = () => {
    setIsHovering1(false);  // Resume sliding when mouse leaves
  };







  







  return (
    <>

     
<div className="  ">
     
       
      {/*
        
          <div className="row p-3 ">
      <div className="col-lg-3 col-md-6 pb-1">
          <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
            className=""
            
          >
            <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
     
        <div class="ag-courses-item_title text-center">
        <img src='/images/python.png' className='img-fluid' width={200} ></img>
        <h3 className='text-center'>BlockChain</h3>
        </div>
      </a>
    </div>
          </div>
        </div>


        <div className="col-lg-3 col-md-6 pb-1">
          <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
            className=""
            
          >
            <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
     
        <div class="ag-courses-item_title text-center">
        <img src='/images/python.png' className='img-fluid' width={200} ></img>
        <h3 className='text-center'>BlockChain</h3>
        </div>
      </a>
    </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 pb-1">
          <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
            className=""
            
          >
            <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
     
        <div class="ag-courses-item_title text-center">
        <img src='/images/python.png' className='img-fluid' width={200} ></img>
        <h3 className='text-center'>BlockChain</h3>
        </div>
      </a>
    </div>
          </div>
        </div>



        
        <div className="col-lg-3 col-md-6 pb-1">
          <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
            className=""
            
          >
            <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
     
        <div class="ag-courses-item_title text-center">
        <img src='/images/python.png' className='img-fluid' width={200} ></img>
        <h3 className='text-center'>BlockChain</h3>
        </div>
      </a>
    </div>
          </div>
        </div>

         
      


       

      


        </div>
       
       */ 
      }
     
    
     
       
















  
       
      

    </div>



<Marquee/>


  
    </>
  )
}

export default Section5Card