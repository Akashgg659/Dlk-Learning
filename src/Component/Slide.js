import React, { useEffect, useRef, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const Slide = () => {

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
   
   <div className="container p-3  ">
      <div
        className={`slide-left ${inView ? 'in-view' : ''}`}>
        
       <Carousel 
      className="carousel-right-to-left"
      activeIndex={activeIndex}
      onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
      controls={false}
      indicators={false}
      interval={null} >
      <Carousel.Item>
      
      <div className="row p-3 ">
        <div className="col-lg-3 col-md-6 pb-1">
          <div
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
            className="d-flex bg-white shadow-sm border-top rounded h mb-4"
            style={{ padding: 20 }}
          >
           
           <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          UI/Web&amp;Graph design for teenagers 11-17&#160;years old
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </a>
    </div>




            <img src='/images/python.jpg' className='img-fluid' width={40}  ></img>
            
          </div>
        </div>


           <div className="col-lg-3 col-md-6 pb-1">
          <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
            className="d-flex bg-white shadow-sm border-top  h rounded mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/j2.png' className='img-fluid' width={40} ></img>
            <div className="pl-4">
            <a href='#' className='n'> <h4 className='times-roman-text text-black '>java</h4> </a>
              
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 pb-1">
          <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
            className="d-flex bg-white shadow-sm border-top  h rounded mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/blockchain.png' className='img-fluid' width={40} ></img>
            <div className="pl-4">
            <a href='#' className='n'> <h4 className='times-roman-text text-black '>BlockChain</h4> </a>
              
            </div>
          </div>
        </div>

        
        <div className="col-lg-3 col-md-6 pb-1">
          <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
            className="d-flex bg-white shadow-sm border-top  h rounded mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/sql.jpg' className='img-fluid' width={40} ></img>
            <div className="pl-4">
            <a href='#' className='n'> <h4 className='times-roman-text text-black '>SQL</h4> </a>
              
            </div>
          </div>
        </div>

         
      


       

      


        </div>
       
        <Carousel.Caption>
         </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>
      <div className="row p-3 ">
        <div className="col-lg-3 col-md-6 pb-1">
          <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
            className="d-flex bg-white shadow-sm border-top rounded h mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/html.jpg' className='img-fluid' width={40}  ></img>
            <div className="pl-4">
            <a href='#' className='n'> <h4 className='times-roman-text text-black '>HTML</h4> </a>
              
            </div>
          </div>
        </div>


           <div className="col-lg-3 col-md-6 pb-1">
          <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
            className="d-flex bg-white shadow-sm border-top  h rounded mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/css.png' className='img-fluid' width={40} ></img>
            <div className="pl-4">
            <a href='#' className='n'> <h4 className='times-roman-text text-black '>CSS</h4> </a>
              
            </div>
          </div>
        </div>

         <div className="col-lg-3 col-md-6 pb-1">
          <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
            className="d-flex bg-white shadow-sm border-top  h  rounded mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/js.png' className='img-fluid' width={40} height={20} ></img>
            <div className="pl-4">
               <a href='#' className='n'> <h4 className='times-roman-text text-black '>javascript</h4> </a>
              
            </div>
          </div>
        </div>


        <div className="col-lg-3 col-md-6 pb-1">
          <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
            className="d-flex bg-white shadow-sm border-top  h rounded mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/react.png' className='img-fluid' width={40} ></img>
            <div className="pl-4">
            <a href='#' className='n'> <h4 className='times-roman-text text-black '>React Js</h4> </a>
              
            </div>
          </div>
        </div>

        
      


         </div>
           
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <div className="row p-3 ">
        <div className="col-lg-3 col-md-6 pb-1">
          <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
            className="d-flex bg-white shadow-sm border-top rounded h mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/net.jpg' className='img-fluid' width={40}  ></img>
            <div className="pl-4">
            <a href='#' className='n'> <h4 className='times-roman-text text-black '>ComputerNetwork</h4> </a>
              
            </div>
          </div>
        </div>


           <div className="col-lg-3 col-md-6 pb-1">
          <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
            className="d-flex bg-white shadow-sm border-top  h rounded mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/j2.png' className='img-fluid' width={40} ></img>
            <div className="pl-4">
            <a href='#' className='n'> <h4 className='times-roman-text text-black '>java</h4> </a>
              
            </div>
          </div>
        </div>

         <div className="col-lg-3 col-md-6 pb-1">
          <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
            className="d-flex bg-white shadow-sm border-top  h  rounded mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/node.png' className='img-fluid' width={40} ></img>
            <div className="pl-4">
               <a href='#' className='n'> <h4 className='times-roman-text text-black '>Node js</h4> </a>
              
            </div>
          </div>
        </div>


        <div className="col-lg-3 col-md-6 pb-1">
          <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
            className="d-flex bg-white shadow-sm border-top  h rounded mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/embedded.jpg' className='img-fluid' width={40} ></img>
            <div className="pl-4">
            <a href='#' className='n'> <h4 className='times-roman-text text-black '>Embbeded</h4> </a>
              
            </div>
          </div>
        </div>
         </div>

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
       </Carousel> 
    </div>
     

    <div
        className={`slide-right ${inView ? 'in-view' : ''}`}>
        <Carousel
 className="carousel-right-to-left"
 activeIndex={activeIndex1}
 onSelect={selectedIndex1 => setActiveIndex1(selectedIndex1)} 
 controls={false} 
 indicators={false} 
 interval={null}
 
>
<Carousel.Item>
      
      <div className="row p-3 ">
       

         <div className="col-lg-3 col-md-6 pb-1">
          <div
            className="d-flex bg-white shadow-sm border-top  h  rounded mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/node.png' className='img-fluid' width={40} ></img>
            <div className="pl-4">
               <a href='#' className='n'> <h4 className='times-roman-text text-black '>Node js</h4> </a>
              
            </div>
          </div>
        </div>


        <div className="col-lg-3 col-md-6 pb-1">
          <div
            className="d-flex bg-white shadow-sm border-top  h rounded mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/embedded.jpg' className='img-fluid' width={40} ></img>
            <div className="pl-4">
            <a href='#' className='n'> <h4 className='times-roman-text text-black '>Embbeded</h4> </a>
              
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 pb-1">
          <div
            className="d-flex bg-white shadow-sm border-top h  rounded mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/data.png' className='img-fluid' width={40} ></img>
            <div className="pl-4">
            <a href='#' className='n'> <h4 className='times-roman-text text-black '>Data science</h4> </a>
              
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 pb-1">
          <div
            className="d-flex bg-white shadow-sm border-top h  rounded mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/C.jpg' className='img-fluid' width={40} ></img>
            <div className="pl-4">
             <a href='#' className='n'> <h4 className='times-roman-text text-black '>C++</h4> </a>
              
            </div>
          </div>
        </div>
       
      


       

      


        </div>
       
        <Carousel.Caption>
         </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>
      <div className="row p-3 ">
       

        <div className="col-lg-3 col-md-6 pb-1">
          <div
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
            className="d-flex bg-white shadow-sm border-top h  rounded mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/django.jpg' className='img-fluid' width={40} ></img>
            <div className="pl-4">
            <a href='#' className='n'> <h4 className='times-roman-text text-black '>Django</h4> </a>
              
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 pb-1">
          <div
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
            className="d-flex bg-white shadow-sm border-top h  rounded mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/mango.png' className='img-fluid' width={40} ></img>
            <div className="pl-4">
             <a href='#' className='n'> <h4 className='times-roman-text text-black '>MangoDB</h4> </a>
              
            </div>
          </div>
        </div>
       
        <div className="col-lg-3 col-md-6 pb-1">
          <div
             onMouseEnter={handleMouseEnter1}
             onMouseLeave={handleMouseLeave1}
            className="d-flex bg-white shadow-sm border-top rounded h mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/php.jpg' className='img-fluid' width={40}  ></img>
            <div className="pl-4">
            <a href='#' className='n'> <h4 className='times-roman-text text-black '>PHP</h4> </a>
              
            </div>
          </div>
        </div>


        <div className="col-lg-3 col-md-6 pb-1">
          <div
             onMouseEnter={handleMouseEnter1}
             onMouseLeave={handleMouseLeave1}
            className="d-flex bg-white shadow-sm border-top rounded h mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/mech.png' className='img-fluid' width={40}  ></img>
            <div className="pl-4">
            <a href='#' className='n'> <h4 className='times-roman-text text-black '>machine learning</h4> </a>
              
            </div>
          </div>
        </div>

      


         </div>
           
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <div className="row p-3 ">
        

        <div className="col-lg-3 col-md-6 pb-1">
          <div
             onMouseEnter={handleMouseEnter1}
             onMouseLeave={handleMouseLeave1}
            className="d-flex bg-white shadow-sm border-top h  rounded mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/data.png' className='img-fluid' width={40} ></img>
            <div className="pl-4">
            <a href='#' className='n'> <h4 className='times-roman-text text-black '>Data science</h4> </a>
              
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 pb-1">
          <div
             onMouseEnter={handleMouseEnter1}
             onMouseLeave={handleMouseLeave1}
            className="d-flex bg-white shadow-sm border-top h  rounded mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/C.jpg' className='img-fluid' width={40} ></img>
            <div className="pl-4">
             <a href='#' className='n'> <h4 className='times-roman-text text-black '>C++</h4> </a>
              
            </div>
          </div>
        </div>
       
        <div className="col-lg-3 col-md-6 pb-1">
          <div
             onMouseEnter={handleMouseEnter1}
             onMouseLeave={handleMouseLeave1}
            className="d-flex bg-white shadow-sm border-top rounded h mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/boot.jpg' className='img-fluid' width={40}  ></img>
            <div className="pl-4">
            <a href='#' className='n'> 
              <h4 className='times-roman-text text-black '>Bootstrap</h4> </a>
              
            </div>
          </div>
        </div>


        <div className="col-lg-3 col-md-6 pb-1">
          <div
             onMouseEnter={handleMouseEnter1}
             onMouseLeave={handleMouseLeave1}
            className="d-flex bg-white shadow-sm border-top rounded h mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/my.png' className='img-fluid' width={40}  ></img>
            <div className="pl-4">
            <a href='#' className='n'> <h4 className='times-roman-text text-black '>mysql</h4> </a>
              
            </div>
          </div>
        </div>

      


         </div>

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
          </Carousel>
      
    </div>




    </div>
</>
    
  )
}

export default Slide