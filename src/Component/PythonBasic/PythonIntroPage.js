import React, { useEffect, useState } from 'react'


import { Link, Outlet, useLocation } from 'react-router-dom'
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';






const PythonIntroPage = () => {

  const location = useLocation();

  const { pathname } = useLocation();

  useEffect(() => {
      // Reset component-specific state here if needed
        // Reset the container height or layout styles
        const contentDiv = document.getElementById("content-container");
        if (contentDiv) {
            contentDiv.style.height = "auto"; // Reset height
        }
      console.log("Route changed to:", pathname);
  }, []);

{/*

  const handleScroll = () => {
    const container = document.getElementById("content-container1");
    const scrollTop = container.scrollTop; // Distance scrolled
    const scrollHeight = container.scrollHeight; // Total scrollable height
    const clientHeight = container.clientHeight; // Visible height

    const totalScrollableHeight = scrollHeight - clientHeight;
    const scrollPercent = (scrollTop / totalScrollableHeight) * 100;
    setScrollPercent1(scrollPercent);
  };

  useEffect(() => {
    const container = document.getElementById("content-container1");
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

*/}


  return (

        <div>
        
      
      <div className='paddownforcol scrollable-container  '
      
       
      
       
      >


    
        



 

       

              
    <div >
   <h1>Python Introduction</h1>  {/* This will display the "Python Tutorial" text as a heading */}
 </div>

 <div>
   <p className='text-justify wid'>Python is a powerful, high-level, and versatile programming language known for its simplicity and readability. Designed to prioritize developer experience, Python has become one of the most popular languages in the world, empowering professionals and enthusiasts to solve complex problems with ease. Its intuitive syntax resembles everyday language, making it an ideal choice for beginners and experienced developers alike.
</p>  
 </div>
 <div className='text-justify wid'>
   <p>Initially released in 1991 by Guido van Rossum, Python was created with the philosophy of prioritizing code readability and simplicity. Over the years, it has evolved into a multipurpose language used in a wide range of industries, including web development, data science, artificial intelligence, machine learning, scientific computing, automation, and more. Its ability to adapt to various domains is supported by a rich ecosystem of libraries and frameworks like Django, Flask, NumPy, Pandas, and TensorFlow.
</p>  
 </div>
 <div className='pt-5'>
   <h4>WHY LEARN PYTHON?
     </h4>  
 </div>
 <div className='text-justify wid'>
   <p>Python is frequently listed as one of the most widely used programming languages worldwide. Python is an excellent option if you are just beginning to learn any programming language because it is relatively easy to learn. Today, Python is taught as the main programming language in many schools, colleges, and universities. Python is the best option for any programmer for numerous other reasons:
</p>  
 </div>
 <div className='text-justify wid '>
 <ul className='row p-5 text-dark'>
        <li className=''>Since Python is open source, it can be downloaded for free.</li>
        <li className=''>Python is incredibly easy to learn and straightforward.</li>
        <li>Because of its versatility, Python can be used to develop a wide range of things.</li>
        <li>Python boasts robust development libraries for AI, ML, and other fields.</li>
      </ul>
 </div>
 <div className='pt-5'>
   <h4>Features of Python
</h4>  
 </div>
 <div className='text-justify wid'>
   <p>Python stands out among programming languages due to its remarkable features that cater to beginners and professionals alike. Here’s what makes Python a favorite among developers worldwide:
</p>  
 </div>
 <div className='text-justify wid'>
   <p><b>1. Simple and Readable Syntax</b><br/>
Python’s syntax is clean, concise, and similar to everyday English. This simplicity reduces the learning curve and allows developers to focus on problem-solving rather than language complexities.
</p>  
 </div>
 <div className='text-justify wid'>
   <p><b>2. Interpreted Language </b><br/>
Python is an interpreted language, meaning the code is executed line by line. This makes debugging easier and enables you to test and see results quickly.
</p>  
 </div>
 <div className='text-justify wid'>
   <p><b>3. Dynamic Typing</b><br/>
With Python, you don’t need to declare the data type of variables. The language determines the type automatically, which simplifies coding and increases flexibility.
</p>  
 </div>
 <div className='text-justify wid'>
   <p><b>4. Versatility</b><br/>
Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming. This flexibility allows developers to use Python in various projects, from simple scripts to complex systems.
</p>  
 </div>
 <div className='text-justify wid'>
   <p><b>5. Extensive Libraries and Frameworks</b><br/>
Python has a rich set of standard libraries and frameworks that simplify tasks like web development (Django, Flask), data analysis (Pandas, NumPy), machine learning (TensorFlow, Scikit-learn), and more.
</p>  
 </div>
 <div className='text-justify wid'>
   <p><b>6. Cross-Platform Compatibility</b><br/>
Python is platform-independent, meaning you can write code on one operating system and run it on another without modification. This makes Python ideal for developing portable applications.
</p>  
 </div>
 <div className='text-justify wid'>
   <p><b>7. Open Source</b><br/>
As an open-source language, Python is free to use, modify, and distribute. This ensures accessibility for all and fosters a thriving community of contributors.
</p>  
 </div>
 <div className='text-justify wid'>
   <p><b>8. Automation Capabilities</b><br/>
Python simplifies automating repetitive tasks like file handling, data scraping, and testing. With libraries like Selenium and Beautiful Soup, automation becomes a breeze.
</p>  
 </div>
 <div className='text-justify wid'>
   <p><b>9. Scalability and Efficiency</b><br/>
Python’s robust architecture and performance make it suitable for small-scale projects and enterprise-level applications, ensuring scalability and reliability.
</p>  
 </div>
 <div className='text-justify wid'>
   <p><b>10. Integration and Extensibility</b><br/>
Python can easily integrate with other languages like C, C++, Java, and more. Its extensibility ensures compatibility with different technologies and systems.
</p>  
 </div>
 <div className='text-justify wid'>
   <p><b>11. Vibrant Community Support</b><br/>
Python’s active global community provides extensive documentation, tutorials, forums, and open-source contributions, ensuring constant support for learners and professionals.
</p>  
 </div>
 <div className='text-justify wid'>
   <p><b>12. Ideal for Emerging Technologies</b><br/>
Python powers advancements in cutting-edge fields like Artificial Intelligence, Machine Learning, Data Science, and the Internet of Things (IoT).
</p>  
 </div>
 <div className='pt-5'>
   <h4>Applications of Python
</h4>  
 </div>
 <div className='text-justify wid'>
   <ul className='row p-5 text-dark'>
    <li><b>Data Science and Analytics:</b> Python simplifies data manipulation, analysis, and visualization using libraries like Pandas, NumPy, and Matplotlib.
    </li>
    <li><b>Web Development:</b> Frameworks such as Django and Flask enable the creation of dynamic and scalable web applications.</li>
  <li><b>Artificial Intelligence and Machine Learning:</b> Python powers AI and ML with tools like TensorFlow, PyTorch, and Scikit-learn.
  </li>
  <li><b>Automation and Scripting:</b> Python automates repetitive tasks, including web scraping and system management, with ease.
  </li>
  <li><b>Game and GUI Development:</b> Python supports game creation with Pygame and GUI development with Tkinter and PyQt.
  </li>
   </ul>
 </div>

 <div className="d-flex justify-content-end">
 < Link to={"/python"} className="button-link m-1">
     <button className="button bg-primary text-white "
      
     >Prev</button>
   </Link>
   <Link to={"/python/installation "}  className="button-link m-1">
     <button className="button bg-primary text-white ">Next</button>
  </Link>
 </div>
              




    



   
 </div>

     </div>
  )
}

export default PythonIntroPage
