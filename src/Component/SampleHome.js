
import Navigate from './Navigate'

import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaMoon, FaSun } from 'react-icons/fa'; // Import icons for dark/light mode toggle
import ResponsiveNavbar from './ResponsiveNavbar';
import Footer from './Footer';
import Slide from './Slide';
import OfferCard from "./Offercard";
import Carousel from 'react-bootstrap/Carousel';
import Cookies from 'js-cookie';
import ParticalesBackground from './ParticaleBackground/ParticalesBackground';
import MetrosBackground from './MagicUi/MetrosBackground';
import InteractiveTagCloud from './MagicUi/InteractiveTagCloud';
import { Link } from 'react-router-dom';
import Marquee from './MagicUi/Marquee';
import SearchBox from './SearchBox/SearchBox';
import HomeSearch from './SearchBox/HomeSearch';
import SecondNavigation from './SecondNavigation';
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from 'react-intersection-observer';
import StarRatingPage from './StarRating/StarRatingPage';
import StartRatingModel from './StarRating/StartRatingModel';

import RatingComponent from './StarRating/RatingComponent';
import HomeFooter from './Footer/HomeFooter';
import Section4Card from './Cards/Section4Card';
import Advertisement from './Advertisement/Advertisement';
import SplashScreen from './SplashScreen/SplashScreen';
import TextDesign from './TextDesign/TextDesign';
import Section5Card from './Cards/Section5Card';
import MobileViewMarquee from './MagicUi/MobileViewMarquee';
import SignupForm from './SignupPage/SignupForm';
import FestivalDatePick from './Advertisement/FestivalDatePickOffer/FestivalDatePick';
import MobileViewHeadNav from './MobileViewHeadingNav/MobileViewHeadNav';
import axios from 'axios';
import { left, right } from '@popperjs/core';
import { useDispatch, useSelector } from 'react-redux';


//import './App.css';
//import exampleImage from './images/header.png'; // Import the image


const offers = [
  {
    title: "Python for Beginners",
    description: "Learn Python from scratch and become a coding expert. 30% off today!",
    imageUrl: "/images/first.gif",
    cta: "Start Learning",
  },



];






const SampleHome = () => {

  //find small number


  {/*



  let myarray = [9, 4, 3, 5, 7]
   let min_array = myarray[0]

    for(let i = 1; i< myarray.length; i++){
      if(myarray[i] < min_array){
        min_array = myarray[i]


      }
        

    }
      
 console.log('Lowest value:', min_array);  // Print the lowest value

//  The  nth Fibonacci Number Using Recursion


   const findrecursion = (n) =>{

    if(n <= 1){
      return n;
    }
    else{
      return findrecursion(n-1) + findrecursion(n-2)
    }


   }


 console.log(findrecursion(26))


//find buuble sort

let bubblearray = [55, 33, 57, 77, 99, 72, 99]
let n = bubblearray.length
 
for (let i = 0; i < n-1; i++)
{
  for(let j = 0 ; j < n-i-1; j++){
    if(bubblearray[j] > bubblearray[j+1])
    {
      let temp = bubblearray[j]
      bubblearray[j] = bubblearray[j+1]
      bubblearray[j+1] = temp
    }
  }
}

// Print the final sorted array
console.log("Sorted array:", bubblearray);



//Selection Sort


let  selectionsort = [54, 22, 1, 22, 44, 88, 55, 88];
let n2 = selectionsort.length

for (let i = 0 ; i < n2-1 ; i++){
  
  let minindex =i
  for(let j =i+1; i<n2 ; j++){
    if(selectionsort[j] < selectionsort[minindex]){
      minindex = j
    }
  }

  let removemin = selectionsort.splice(minindex, 1)[0]
selectionsort.splice(i,0, removemin)
}





console.log("Sorted array:", selectionsort);



let short = [2,4,7, 8, 9, 10]
let find = short.length

for (let i = 1; i <= find ; i++){
  let currindex = i
  let currentvalue = short[i]
  for(let j = i-1; j<= 0; j--){
    if(short[j] > currentvalue  ){
      short[j+1] = short[j]
      currindex = j
    }
    else{
      break
    }
  }
  short[currindex] = currentvalue
}


console.log("Sorted array:", short);


//  linear search 

const linearfn = (arr, targetvalue) =>{
  for(let i = 0; i <= arr.length; i++){
    if(arr[i] === targetvalue ){
      return i
    }
  

  }

  return -1


}

let arr = [55, 88, 84, 99, 94, 66]
let targetvalue = 94

console.log(linearfn(arr, targetvalue))
console.log(targetvalue)


    
const Binaryfn = (arr, targetvalue) => {
  
  let left = 0;
  let right = arr.length - 1
 while(left <= right){
 
  let mid = Math.floor(left+right/2)

  if(arr[mid] === targetvalue){
    return mid
  }

  if(arr[mid] < targetvalue){
    left = mid +1
  }
  else{
    right = mid-1
  }


 }

 return -1

}

let arr = [22, 5, 67, 89, 99, 33, 45, 98, 45, 77]
let targetvalue = 33


let result = Binaryfn(arr, targetvalue)
console.log(result)
 
if(result !== -1){
  console.log(targetvalue)
}
else{
  console.log("not found")
}




*/}


{
  /*
  const count = useSelector(state => state.count)
const dispatch = useDispatch
  */
}





  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false,    // Allow animation to run multiple times (not just once)
      disable: false, // Ensure animations are enabled for all devices
      offset: 100, // Trigger animation slightly before the element is in view

    });






 

  }, []);




  const [viewedCards, setViewedCards] = useState([]); // Tracks viewed cards
  const [ipAddress, setIpAddress] = useState(""); // User's IP address


  React.useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => setIpAddress(response.data.ip))
      .catch((error) => console.error("Error fetching IP address:", error));
  }, []);

  // Handle Card Click
  const handleCardClick = (cardId) => {
    if (viewedCards.includes(cardId)) {
      console.log("Card already viewed");
      return;
    }


    setViewedCards((prev) => [...prev, cardId]);

 
    const data = {
      cardId,
      ipAddress,
      timestamp: new Date().toISOString(),
    };

    axios
      .post("https://your-backend-api.com/store-view", data)
      .then((response) => console.log("View stored successfully:", response.data))
      .catch((error) => console.error("Error storing view:", error));
  };

  


  const { ref, inView1 } = useInView({
    triggerOnce: false, // Set to true if you want the animation to trigger only once
    threshold: 0.1, // Adjust this value to control when the animation triggers
  });


  const [tags1, setTags1] = useState([
    { name: "Python", image: "/images/python.png", link: '/python' },
    { name: "React", image: "/images/react.png", link: 'react' },
    { name: "Java", image: "/images/java.png" },
    { name: "Bootstrap", image: "/images/boot.png" },
    { name: "JavaScript", image: "/images/js.png" },
    { name: "CSS", image: "/images/css.png" },



  ]);



  const [activeIndex, setActiveIndex] = useState(0); // Track the active index
  const [isHovering, setIsHovering] = useState(false);
  const [intervalId, setIntervalId] = useState(null);  // To store the interval reference

  // Start the carousel slide
  useEffect(() => {
    if (!isHovering) {
      const id = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 3);  // Adjust 3 based on your total slides
      }, 2000);  // Change slide every 3 seconds
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

  // State to track whether dark mode is enabled
  const [isDarkMode, setIsDarkMode] = useState(false);



  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Retrieve the user's name from localStorage
    const storedUserName = localStorage.getItem("userName");
    setUserName(storedUserName || "Guest"); // Fallback to "Guest" if no name found
  }, []);



  const handleLogout = () => {
    localStorage.removeItem("userName");

  };

  // Toggle dark mode on button click
  const toggleDarkMode = () => {
    console.log(!isDarkMode)
    setIsDarkMode(!isDarkMode);
  };




  // Function to scroll content left
  const scrollLeft = () => {
    document.querySelector('.scroll-content').scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  };

  // Function to scroll content right
  const scrollRight = () => {
    document.querySelector('.scroll-content').scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  };

  // Array of month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const date = new Date()
  const currentmonth = monthNames[date.getMonth()]
  const currentyear = date.getFullYear()







  //   

  return (
    <>
      <>
        <meta charSet="utf-8" />
        <title>KidKinder - Kindergarten Website Template</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Free HTML Templates" name="keywords" />
        <meta content="Free HTML Templates" name="description" />
        {/* Favicon */}
        <link href="img/favicon.ico" rel="icon" />
        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Handlee&family=Nunito&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        {/* Flaticon Font */}
        <link href="lib/flaticon/font/flaticon.css" rel="stylesheet" />
        {/* Libraries Stylesheet */}
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        {/* Customized Bootstrap Stylesheet */}
        <link href="css/style.css" rel="stylesheet" />
        {/* Navbar Start */}

        {/*

   {/* Left Scroll Button */}
        {/*</><button
          className="btn btn-outline-primary scroll-btn left"
          onClick={scrollLeft}
        >
          ‹
        </button>

   <h5 className=' text-white p-3 s'>HTML</h5>
   <h5 className=' text-white p-3 s'>CSS</h5>
   <h5 className=' text-white p-3 s'>Javascript</h5>
   <h5 className=' text-white p-3 s'>Python</h5>
   <h5 className=' text-white p-3 s'>Java</h5>
   <h5 className=' text-white p-3 s'>C</h5>
   <h5 className=' text-white p-3 s'>C++</h5>
   <h5 className=' text-white p-3 s'>Data science</h5>
   <h5 className=' text-white p-3 s'>PHP</h5>
   <h5 className=' text-white p-3 s'>SQL</h5>
   <h5 className=' text-white p-3 s'>AI DL</h5>
   <h5 className=' text-white p-3 s'>Git</h5>
   <h5 className=' text-white p-3 s'>C#</h5>
   <h5 className=' text-white p-3 s'>TailwindCss</h5>
   <h5 className=' text-white p-3 s'>MangoDB</h5>
   <h5 className=' text-white p-3 s'>MySql</h5>
   <h5 className=' text-white p-3 s'>Node.js</h5>
   <h5 className=' text-white p-3 s'>Bootstrap</h5>


    {/* Right Scroll Button */}
        {/*}  <button
          className="btn btn-outline-primary scroll-btn right"
          onClick={scrollRight}
        >
          ›
        </button>
   </div>

    <div className="col-lg-3 col-md-6 pb-1">
          <div
            className="d-flex bg-light shadow-sm border-top rounded mb-4"
            style={{ padding: 30 }}
          >
            <i className="flaticon-030-crayons h1 font-weight-normal text-primary mb-3" />
            <div className="pl-4">
              <h4>Arts and Crafts</h4>
              <p className="m-0">
              
              </p>
            </div>
          </div>
        </div>


////
rows
<div className="row p-3 ">
        <div className="col-lg-3 col-md-6 pb-1">
          <div
            className="d-flex bg-white shadow-sm border-top rounded h mb-4"
            style={{ padding: 20 }}
          >
            <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3" />

            <img src='/images/python.jpg' className='img-fluid' width={40}  ></img>
            <div className="pl-4">
            <a href='#' className='n'> <h4 className='times-roman-text text-black '>Python</h4> </a>
              
            </div>
          </div>
        </div>


           <div className="col-lg-3 col-md-6 pb-1">
          <div
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
 */ }
        <div className='fixed-top'>
          <SecondNavigation />
        </div>



        {/* Header Start    <img className="img-fluid mt-5" src='/images/header.png' alt="" />*/}





        {/* Navbar End */}
        {/* Header Start    <img className="img-fluid mt-5" src='/images/header.png' alt="" />  
   <a href="" className="btn btn-secondary mt-1 py-3 px-5">
        //  Learn More
       // </a> 
       <div className="video-container">
            <video
            className=''
         
              autoPlay
              loop
              muted
          
            >
              <source src="/images/home.webm" type="video/webm" />
              Your browser does not support the video tag.
             </video>
            </div>
      */
          //colhome
        }


        {/**  
 * 
 * 
 
<div className="container-fluid  px-0 px-md-5 mb-5 vh-50  homeheight1 bgimage1" id='qw'
          style={{
            transition: 'all 0.2s ease',
          }}
        >

          <div
          >

            <Carousel
              className=""
              activeIndex={activeIndex}
              onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
              controls={false}
              indicators={false}
              interval={null} >
              <Carousel.Item>


                <div className="row align-items-center px-3"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>

                  <div className="col-lg-6 text-center text-lg-left animated-text">

                    <h1 className="display-3 font-weight-bold text-white times-roman-text ">
                      Start learning today
                    </h1>


                  </div>



                  <div className="col-lg-6 text-center d-flex justify-content-center text-lg-right animated-right bgimage  ">
                    <img className="img-fluid mt-5  me-5 ms-5" src='/images/h7.png' alt="" />
                  </div>







                </div>

                <Carousel.Caption>
                </Carousel.Caption>

              </Carousel.Item>


              <Carousel.Item>


                <div className="row "
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >

                  {offers.map((offer, index) => (
                    <OfferCard
                      key={index}
                      title={offer.title}
                      description={offer.description}
                      imageUrl={offer.imageUrl}
                      cta={offer.cta}
                    />
                  ))}
                </div>

                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>


              <Carousel.Item>

                <div className=''
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h1 className='text-white text-center'>Best Offer For Python</h1>

                  <div className="container-fluid">
                    <div className="row pb-3 p-3  ">
                      <div className="col-md-4 col-lg-12 mb-4 ">
                        <div className=" justify-content-center  m-3">
                          <div className='d-flex justify-content-center'>
                            <img src='/images/special.png' alt='' className='img-fluid' width={200}></img>
                          </div>







                        </div>
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



 */}






        {/* Header End */}
        {/* Facilities Start  <InteractiveTagCloud /> */}






        {/*

        <div className="container p-5  reveal-container  ">





          <div className="container pb-3  p-3 border border-dark bg-light  bento-container reveal-container ">
            <h1 className=' times-roman-text text-black'>Latest Updates - {currentmonth}, {currentyear}</h1>

            <div class="reveal-container">
              <h4 class="reveal-text pt-2 pb-2 times-roman-text text-black">Newly Added and Updated Tutorials</h4>
            </div>

            <div className='row p-3 bento-box C '>
              <div className='col-lg-8 C '>

                <div className="row C">
                  <div className="col-lg-8 col-md-4 pb-1  ">



                    <div className="container py-5  C">
                      <div className="row bento-container bento-image d-flex text-center  align-items-center gap-x-4 gap-y-2 pb-3 C  ">
                        {tags1.map((tag, index) => (
                          <div className="  col-md-4  pt-4 align-items-center " key={index}>
                            {/* Link to the corresponding page */}
        {/*  <Link to={tag.link} className='text-decoration-none'>
                              <div className="bento-box d-flex text-center align-items-center  ">
                                <img src={tag.image} alt={tag.name} className="bento-image" width={50} height={50} />
                                <p className='align-items-center text-center pe-2 pt-2 ps-2 text-decoration-none text-dark'>{tag.name}</p>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>


                    </div>



                  </div>

                





                  {/*

         <div className="col-lg-4 col-md-6 pb-1">
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


        <div className="col-lg-4 col-md-6 pb-1">
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

        <div className="col-lg-4 col-md-6 pb-1">
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

        <div className="col-lg-4 col-md-6 pb-1">
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
        </div>   */}{/*

                </div>


              </div>

              <div className='col-lg-4 d-flex justify-content-center C  ' id='hide1'>
                <img src='/images/gig5.gif' className='img-fluid '></img>
              </div>


            </div>
          </div>
        </div>

                 */ }
 



      <div className=' adsmt  '>
      <FestivalDatePick/>

      </div>


     
              

        <div className=''
       

        >
         

          <div className='text-center containerheight  '>
            <h2 className='  '>Hello, what are you interested in learning?</h2>
            
          </div>

          <div className='container-fluid d-flex justify-content-center  h-responsive   '>


            <div className='pt-4 w-50 mt-1'>
              <HomeSearch />
            </div>




          </div>

        

 
      

       
    

          <section1 className=" pe-5 ps-5" >
            <div className=' pt-4 container p-5'

            >
              <div>
                <div className='text-center '>
                  <h5 className='p-3   '>Why You'll Love Learning Here</h5>
                  
                  <TextDesign/>
                </div>

                <div className=''>
                  <div className='row'>
                    <div className='col-lg-8 col-xl-8 col-sm-12 col-md-6 d-flex row  '>
                      <div className='pt-5 t '>
                        <h5 className=' textheading '> A Clear Path to Mastery</h5>
                        <h2 className='mt-4 '> Structured Courses </h2>
                      </div>

                      <div className='text-start mb-4 '
                      >
                        <h4>No more random tutorials. Follow a structured, logical path tailored to your learning needs.</h4>
                      </div>

                    </div>

                    <div className='col-lg-4 col-xl-4 col-sm-12 col-md-6  '>
                      <div className='d-flex justify-content-center'
                      >
                        <img className="img-fluid " src='/images/firstimg.jpg' alt="not" width={300} height={80} />
                      </div>

                    </div>

                  </div>

                  <div className='row '>

                    <div className='col-lg-5 col-xl-5 col-sm-12 col-md-6  " '>
                      <div className='d-flex justify-content-center d-none  d-xl-block d-lg-block'
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >

                        <img className="img-fluid p-2 " src='/images/secondimg.jpg ' alt="not" width={400} height={80} />


                      </div>

                    </div>
                    <div className='col-lg-7 col-xl-7 col-sm-12 col-md-6 d-flex row  '>
                      <div className='pt-5  '>
                        <h5 className='textheading' > Focused and Time-Efficient</h5>
                        <h2 className='mt-4'> Bite-Sized Lessons</h2>
                      </div>

                      <div className='text-start mb-4  '
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        <h4>Make progress in just minutes with clear, bite-sized lessons designed to fit into your busy life.</h4>
                      </div>



                    </div>



                  </div>




                  <div className="row "
                  >
                    {/* Second column for larger screens, but will show first on mobile */}
                    <div className="col-lg-8 col-xl-8 col-sm-12 col-md-6  d-flex row     ">
                      <div className="   pt-5
                      " >
                        <h5 className='textheading mt-3'>Learn by Doing</h5>
                        <h2 className="mt-4"> Hands-On Projects</h2>
                      </div>
                      <div className="text-start homemarginbtm    "
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        <h4>Gain confidence with real-world projects like graph plotting, geometry solvers, or data visualizers.</h4>
                      </div>
                    </div>

                    {/* First column for larger screens, but will show second on mobile */}
                    <div className="col-lg-4 col-xl-4 col-sm-12 col-md-6  ">
                      <div className="d-flex justify-content-center"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        <img
                          className="img-fluid mt-5 mb-5"
                          src="/images/thirdimg.jpg"
                          alt="not"
                          width={300} height={80}
                        />
                      </div>
                    </div>
                  </div>





                  <div className='row'>

                    <div className='col-lg-5 col-xl-5 col-sm-12 col-md-6  " '>
                      <div className='d-flex justify-content-center '
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        <img className="img-fluid  " src='/images/join.jpg ' alt="not" width={300} height={80} />
                      </div>

                    </div>

                    <div className='col-lg-7 col-xl-7 col-sm-12 col-md-6  d-flex row'>
                      <div className=' pt-5 '>
                        <h5 className='textheading' > Join Today and Start Learning</h5>
                        <h2 className='mt-4'> Built on 20+ Years of Experience</h2>
                      </div>

                      <div className='homemarginbtm2 mt-4 '
                        data-aos="fade-up"
                        data-aos-duration="1000">
                        <h4>With over two decades in the industry, I've seen it all. I'll share insights and lessons that you won't find in any textbook.</h4>
                      </div>

                    </div>

                  </div>

                  <div className='row'>




                    <div className='col-lg-8 col-xl-8 col-sm-12 col-md-6 d-flex row '>
                      <div className=' pt-5  '
                      >
                        <h5 className='textheading ' > Learn at Your Own Pace</h5>
                        <h2 className=' mt-4'> Personalized Learning, Tailored for You</h2>
                      </div>

                      <div className=''
                        data-aos="fade-up"
                        data-aos-duration="1000" >
                        <h4>Every learner is unique. Our courses adapt to your level and goals, ensuring you get the support and challenges you need to succeed. Whether you're a beginner tackling the basics or an advanced learner diving deep into complex concepts, we've got you covered..</h4>
                      </div>

                    </div>

                    <div className='col-lg-4 col-xl-4 col-sm-12 col-md-6 '>
                      <div className='d-flex justify-content-center'
                        data-aos="fade-up"
                        data-aos-duration="1000" >
                        <img className="img-fluid mt-3 mb-3 " src='/images/fifthimg.jpg ' alt="not" width={300} height={80} />
                      </div>

                    </div>

                  </div>



                </div>

                <div>

                </div>
              </div>

            </div>
          </section1>


    


      


          <section2 className="">
            


           
             


              <div class="container mt-4 mb-4 ">
              <div>
              <h1 className=' pb-5 ms-4  ps-3 '>Top Tutorials</h1>
              </div>
              {/** first row */}
              <div className='d-flex justify-content-center rowmar p-4' >


              <div class="row cardpadingforall  custom-gap d-flex justify-content-center">
             

             <div class="col-lg-3 col-sm-6 col-md-4 mb-4  border-0 hover-card p-0 rounded  "
              onClick={handleCardClick}
              >
             <a href='/python' className='text-decoration-none' >
                <div class="card  bg-light hover-card h-100 border-0    "  data-aos="flip-right"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000"
                 >
                  <div className='cardfullheadbg'>
                  <div className='d-flex justify-content-end   '>
                    <div className=' '>
                    <div className=' d-flex m-2 cardstarradius pe-2 ps-2'>
                       <div className=''>
                         <img src='/images/star.gif' class=" img-fluid " width={13} />

                       </div>
                       <div className=' ps-1 pe-1 ' >  <span className='  ff'>1.1</span></div>

                     </div>
                    </div>
                     


                   </div>

                   <div className='d-flex justify-content-between  '>
                     <div className=' d-flex text-start align-items-center d-none d-lg-block d-xl-block '>
                       <h2 className=' p-3'>Python</h2>
                     </div>

                     <div className='d-flex justify-content-center '>
                       <img src='/images/python.png' class="img-fluid ps-4 pe-4  " alt="..." width={300} height={50} />
                     </div>

                   </div>


                  </div>
                   

                   



                   <div class="card-body p-3 " >
                     <div className='pt-4 pb-2'>
                       <h5 class="card-title"><b>Complete Python Mastery </b> </h5>
                       <h6 className='pt-3'>A Beginner-to-Expert Resource</h6>
                     </div>

                     <div>
                       <div className='d-flex   '>
                         <div className='d-flex justify-content-center '>
                           <img src='/images/2.png' class="img-fluid  " alt="..." width={35} height={2} />
                         </div>
                         <div className=' d-flex text-center align-items-center ps-2 pe-2 mt-2 '>
                           <h6 className=''>Beginner to Advance</h6>
                         </div>



                       </div>



                     </div>




                   </div>
                   <div class=" d-flex  p-3 justify-content-between ">
                     <div>
                      <img src='/images/1.png' class="img-fluid p-1 " alt="..." width={25} height={5} />
                      <span className='ff1'>444K+ interested   </span> </div>
                    
                   
                      <div className='  ps-3 pe-3  explore-span '>
                        
                       <span className='textchange'>Learn</span>
                       </div>
                    
                   </div>
                 </div>  </a>
                
             

             </div>

             <div class="col-lg-3 col-sm-6 col-md-4 mb-4  hover-card p-0 rounded"
               data-aos="flip-right"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000">
             <a href='/python' className='text-decoration-none' >
                <div class="card  bg-light hover-card h-100 border-0  " 
                 >

                  <div className='cardfullheadbg '>
                  <div className='d-flex justify-content-end '>
                    <div className=' '>
                    <div className=' d-flex m-2 cardstarradius pe-2 ps-2'>
                       <div className=''>
                         <img src='/images/star.gif' class=" img-fluid " width={13} />

                       </div>
                       <div className=' ps-1 pe-1 ' >  <span className='  ff'>1.1</span></div>

                     </div>
                    </div>
                     


                   </div>

                   <div className='d-flex justify-content-between '>
                     <div className=' d-flex text-start align-items-center d-none d-lg-block d-xl-block '>
                       <h2 className='p-3 '>Java</h2>
                     </div>

                     <div className='d-flex justify-content-center  '>
                       <img src='/images/java1.png' class="img-fluid ps-4 pe-4   " alt="..." width={143} height={50} />
                     </div>

                   </div>

                  </div>
                  


                   <div class="card-body p-3 " >
                     <div className='pt-4 pb-2'>
                       <h5 class="card-title"><b>Complete Java Mastery </b> </h5>
                       <h6 className='pt-3'>A Beginner-to-Expert Resource</h6>
                     </div>

                     <div>
                       <div className='d-flex   '>
                         <div className='d-flex justify-content-center '>
                           <img src='/images/2.png' class="img-fluid  " alt="..." width={35} height={2} />
                         </div>
                         <div className=' d-flex text-center align-items-center ps-2 pe-2 mt-2 '>
                           <h6 className=''>Beginner to Advance</h6>
                         </div>



                       </div>



                     </div>




                   </div>
                   <div class=" d-flex  p-3 justify-content-between ">
                     <div>
                      <img src='/images/1.png' class="img-fluid p-1 " alt="..." width={25} height={5} />
                      <span className='ff1'>444K+ interested   </span> </div>
                    
                   
                      <div className='  ps-3 pe-3  explore-span '>
                        
                       <span className='textchange'>Learn</span>
                       </div>
                    
                   </div>
                 </div>  </a>
                
             

             </div>

             <div class="col-lg-3 col-sm-6 col-md-4 mb-4  hover-card p-0 rounded"
               data-aos="flip-right"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000">
             <a href='/python' className='text-decoration-none' >
                <div class="card  bg-light hover-card h-100 border-0  " 
                 >
                  <div className='cardfullheadbg '> 

                  <div className='d-flex justify-content-end  '>
                    <div className=' '>
                    <div className=' d-flex m-2 cardstarradius pe-2 ps-2'>
                       <div className=''>
                         <img src='/images/star.gif' class=" img-fluid " width={13} />

                       </div>
                       <div className=' ps-1 pe-1 ' >  <span className=' ff'>1.1</span></div>

                     </div>
                    </div>
                     


                   </div>

                   <div className='d-flex justify-content-between '>
                     <div className=' d-flex text-start align-items-center d-none d-lg-block d-xl-block '>
                       <h2 className='p-3'>AWS</h2>
                     </div>

                     <div className='d-flex justify-content-center '>
                       <img src='/images/aws.webp' class="img-fluid ps-4 pe-4  " alt="..." width={143} height={50} />
                     </div>

                   </div>

                  </div>
                  


                   <div class="card-body p-3 " >
                     <div className='pt-4 pb-2'>
                       <h5 class="card-title"><b>Complete AWS Mastery </b> </h5>
                       <h6 className='pt-3'>A Beginner-to-Expert Resource</h6>
                     </div>

                     <div>
                       <div className='d-flex   '>
                         <div className='d-flex justify-content-center '>
                           <img src='/images/2.png' class="img-fluid  " alt="..." width={35} height={2} />
                         </div>
                         <div className=' d-flex text-center align-items-center ps-2 pe-2 mt-2 '>
                           <h6 className=''>Beginner to Advance</h6>
                         </div>



                       </div>



                     </div>




                   </div>
                   <div class=" d-flex  p-3 justify-content-between ">
                     <div>
                      <img src='/images/1.png' class="img-fluid p-1 " alt="..." width={25} height={5} />
                      <span className='ff1'>444K+ interested   </span> </div>
                    
                   
                      <div className='  ps-3 pe-3  explore-span '>
                        
                       <span className='textchange'>Learn</span>
                       </div>
                    
                   </div>
                 </div>  </a>
                
             

             </div>
             
           </div>

              </div>

               {/** second row*/}
              <div className='d-flex justify-content-center p-4 ' >


                <div class="row cardpadingforall  custom-gap d-flex justify-content-center ">


               <div class="col-lg-3 col-sm-6 col-md-4 mb-4  hover-card p-0 rounded"
               data-aos="flip-left"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000">
             <a href='/python' className='text-decoration-none' >
                <div class="card  bg-light hover-card h-100 border-0  " 
                 >
                  <div className='cardfullheadbg '>
                  <div className='d-flex justify-content-end  '>
                    <div className=' '>
                    <div className=' d-flex m-2 cardstarradius pe-2 ps-2'>
                       <div className=''>
                         <img src='/images/star.gif' class=" img-fluid " width={13} />

                       </div>
                       <div className=' ps-1 pe-1 ' >  <span className='  ff'>1.1</span></div>

                     </div>
                    </div>
                     


                   </div>

                   <div className='d-flex justify-content-between  '>
                     <div className=' d-flex text-start align-items-center d-none d-lg-block d-xl-block '>
                       <h2 className='p-3'>Data Science</h2>
                     </div>

                     <div className='d-flex justify-content-center '>
                       <img src='/images/ds.png' class="img-fluid ps-4 pe-4  pb-3 " alt="..." width={300} height={40} />
                     </div>

                   </div>

                  </div>
                  


                   <div class="card-body p-3 " >
                     <div className='pt-4 pb-2'>
                       <h5 class="card-title"><b>Complete Data Science Mastery </b> </h5>
                       <h6 className='pt-3'>A Beginner-to-Expert Resource</h6>
                     </div>

                     <div>
                       <div className='d-flex   '>
                         <div className='d-flex justify-content-center '>
                           <img src='/images/2.png' class="img-fluid  " alt="..." width={35} height={2} />
                         </div>
                         <div className=' d-flex text-center align-items-center ps-2 pe-2 mt-2 '>
                           <h6 className=''>Beginner to Advance</h6>
                         </div>



                       </div>



                     </div>




                   </div>
                   <div class=" d-flex  p-3 justify-content-between ">
                     <div>
                      <img src='/images/1.png' class="img-fluid p-1 " alt="..." width={25} height={5} />
                      <span className='ff1'>444K+ interested   </span> </div>
                    
                   
                      <div className='  ps-3 pe-3  explore-span '>
                        
                       <span className='textchange'>Learn</span>
                       </div>
                    
                   </div>
                 </div>  </a>
                
             

             </div>

             <div class="col-lg-3 col-sm-6 col-md-4 mb-4  hover-card p-0 rounded"
               data-aos="flip-left"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000">
             <a href='/python' className='text-decoration-none' >
                <div class="card  bg-light hover-card h-100 border-0  " 
                 >
                  <div className='cardfullheadbg '>
                  <div className='d-flex justify-content-end '>
                    <div className=' '>
                    <div className=' d-flex m-2 cardstarradius pe-2 ps-2'>
                       <div className=''>
                         <img src='/images/star.gif' class=" img-fluid " width={13} />

                       </div>
                       <div className=' ps-1 pe-1 ' >  <span className=' ff'></span>1.1</div>

                     </div>
                    </div>
                     


                   </div>

                   <div className='d-flex justify-content-between  '>
                     <div className=' d-flex text-start align-items-center d-none d-lg-block d-xl-block '>
                       <h2 className='p-3'>Machine Learning</h2>
                     </div>

                     <div className='d-flex justify-content-center '>
                       <img src='/images/mach.png' class="img-fluid ps-4 pe-4  pb-3  " alt="..." width={300} height={50} />
                     </div>

                   </div>

                  </div>
                  


                   <div class="card-body p-3 " >
                     <div className='pt-4 pb-2'>
                       <h5 class="card-title"><b>Complete Machine Learning Mastery </b> </h5>
                       <h6 className='pt-3'>A Beginner-to-Expert Resource</h6>
                     </div>

                     <div>
                       <div className='d-flex   '>
                         <div className='d-flex justify-content-center '>
                           <img src='/images/2.png' class="img-fluid  " alt="..." width={35} height={2} />
                         </div>
                         <div className=' d-flex text-center align-items-center ps-2 pe-2 mt-2 '>
                           <h6 className=''>Beginner to Advance</h6>
                         </div>



                       </div>



                     </div>




                   </div>
                   <div class=" d-flex  p-3 justify-content-between ">
                     <div>
                      <img src='/images/1.png' class="img-fluid p-1 " alt="..." width={25} height={5} />
                      <span className='ff1'>444K+ interested   </span> </div>
                    
                   
                      <div className='  ps-3 pe-3  explore-span '>
                        
                       <span className='textchange'>Learn</span>
                       </div>
                    
                   </div>
                 </div>  </a>
                
             

             </div>

             <div class="col-lg-3 col-sm-6 col-md-4 mb-4  hover-card p-0 rounded"
               data-aos="flip-left"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000">
             <a href='/python' className='text-decoration-none' >
                <div class="card  bg-light hover-card h-100 border-0  " 
                 >
                  <div className='cardfullheadbg '>

                  <div className='d-flex justify-content-end cardfullheadbg '>
                    <div className=' '>
                    <div className=' d-flex m-2 cardstarradius pe-2 ps-2'>
                       <div className=''>
                         <img src='/images/star.gif' class=" img-fluid " width={13} />

                       </div>
                       <div className=' ps-1 pe-1 ' >  <span className='  ff'>1.1</span></div>

                     </div>
                    </div>
                     


                   </div>

                   <div className='d-flex justify-content-between  '>
                     <div className=' d-flex text-start align-items-center d-none d-lg-block d-xl-block '>
                       <h2 className='p-3'>Web Design</h2>
                     </div>

                     <div className='d-flex justify-content-center '>
                       <img src='/images/web1.png' class="img-fluid ps-4 pe-4 pb-3  " alt="..." width={300} height={50} />
                     </div>

                   </div>

                  </div>
                   


                   <div class="card-body p-3 " >
                     <div className='pt-4 pb-2'>
                       <h5 class="card-title"><b>Complete Web Design Mastery </b> </h5>
                       <h6 className='pt-3'>A Beginner-to-Expert Resource</h6>
                     </div>

                     <div>
                       <div className='d-flex   '>
                         <div className='d-flex justify-content-center '>
                           <img src='/images/2.png' class="img-fluid  " alt="..." width={35} height={2} />
                         </div>
                         <div className=' d-flex text-center align-items-center ps-2 pe-2 mt-2 '>
                           <h6 className=''>Beginner to Advance</h6>
                         </div>



                       </div>



                     </div>




                   </div>
                   <div class=" d-flex  p-3 justify-content-between ">
                     <div>
                      <img src='/images/1.png' class="img-fluid p-1 " alt="..." width={25} height={5} />
                      <span className='ff1'>444K+ interested   </span> </div>
                    
                   
                      <div className='  ps-3 pe-3  explore-span '>
                        
                       <span className='textchange'>Learn</span>
                       </div>
                    
                   </div>
                 </div>  </a>
                
             

             </div>
                </div> 

              </div>

            
          </div>






    
      



          </section2>






          <section3>
            <div className=' mt-5 pt-5 mb-5  container'>

              <div className='text-center'>
                <h2>Why DLK Learnings ?</h2>
              </div>

              <div className='row  p-4'>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 p-4'
                data-aos="fade-up-right"
                data-aos-duration="2000"> 
                <div className='d-flex justify-content-start '
                        >
                        <img className="img-fluid mt-3 mb-3 p-2" src='/images/code2.png ' alt="not" width={70} height={80} />
                        <h3 className='pe-4 ps-4 pt-3 '>
                    By Programmers, For Programmers <b></b>
                    </h3>
                      </div>
                  <div>
                   
                   
                </div>
                <div className='d-flex  ms-5 ps-5 justify-content-start    text-start '>
                <h5 className='text-start '>
                We're not just teachers we're active programmers creating resources we wish we had when learning to code.</h5>

                </div>
                
                </div>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 p-4'
                 data-aos="fade-up"
                data-aos-duration="2000"> 
                <div className='d-flex justify-content-start'
                        >
                        <img className="img-fluid mt-3  " src='/images/code2.webp' alt="not" width={70} height={80} />
                        <h3 className='pe-4 ps-4 pt-4'>
                   
       Coding isn't easy <b></b>
                    </h3>
                      </div>
                  <div>
                   
                   
                </div>
                <div className='d-flex  ms-5 ps-5'>
                <h5>
                We believe in honest, practical learning. Expect to work hard, write lots of code, and build genuine programming skills that employers value.</h5>

                </div>
                
                </div>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 pt-5'
                 data-aos="fade-up-left"
                data-aos-duration="2000"> 
                <div className='d-flex justify-content-start ms-2 ps-3 '
                        >
                        <img className="img-fluid  " src='/images/leto.png ' alt="not" width={50} height={80} />
                        <h3 className='pe-4 ps-4 '>
                        Learn by Doing <b></b>
                    </h3>
                      </div>
                  <div>
                   
                   
                </div>
                <div className='  ms-5 ps-5 '>
                <h5>
                Theory alone isn't enough. Every concept has complete code examples you can run, modify, and use in your projects.</h5>

                </div>
                
                </div>

              </div>


            </div>
          </section3>




          <section4 >
            <div className='container-fluid mb-5  '

            >

              <div className='d-flex justify-content-center text-center container  '>

              <div className='d-none d-lg-block d-xl-block text-center'>
                    <aside className='p-5    mt-3 
                    'data-aos="fade-up"
                            data-aos-duration="2000"

                    >
                      <h2 className='text-success text-center'>
                       <b>Choose what to learn</b> 
                      </h2>
                      <h4 className='pt-3 text-center'>Start learning the best programming languages</h4>
                     
                    </aside>
                  </div>

              </div>

             <div className=''>
             <Section4Card/>

             </div>
               


           

             

            </div>
          </section4>


        

        <section5>

        <div className="container-fluid mt-5 bg-light mb-5 ">
          <div className="  text-center p-5 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1 className=' times-roman-text  text-dark mt-5'>Start Learnings</h1>

          </div>

          <div className="   p-3 container  "


          >

        <Section5Card/>


          </div>

        </div>



      <div className='d-xl-none d-lg-none d-sm-block container '>
      <MobileViewMarquee/>

      </div>


        </section5>


      
       
          


        </div>




        

      


        {/* Class End */}
        {/* Registration Start */}



      

      

   


        <sectionlast >
          <div className='container p-5   
           '   data-aos="fade-up"
           data-aos-duration="1000">
         
            <div className='text-center'>
              <h3>Number Speaks</h3>
            </div>

            <div className='row  '>
             
              <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 p-3   d-flex justify-content-center'>
                <div className='text-start '>
                
                <h1 className='text-success text-center'><b>5000+</b></h1>
                  <h5 className=''>Learning on
                  </h5>
                </div>

              </div>


              <div className='col-xl-4 col-lg-4  col-md-6 col-sm-12 p-3  d-flex justify-content-center'>
              
              <div className=' text-start'>
              
                <h1 className='text-success text-center '><b>10000+</b></h1>
                <h5 className='text-center'>Students Trained  by DLK Consortium</h5>
              </div>

            </div>


              

              <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 p-3  d-flex justify-content-center'>
                <div className='text-start  '>
              
                <h1 className='text-success text-center '><b>30+</b></h1>
                  <h5>Coding courses</h5>
                </div>
                </div>

             
            
              

            

            </div>


          </div>
        </sectionlast>

        <div
          >
          <Footer />

        </div>


{
  /*

  <a href="#" className="btn btn-primary p-3 back-to-top">
          <i className="fa fa-angle-double-up" />
        </a>

   */
}

        



      </>

    </>
  )
}

export default SampleHome