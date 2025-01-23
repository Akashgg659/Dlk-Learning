import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS bundle
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icons for open/close
import { Link, useLocation } from 'react-router-dom';

const ReactSidebar = () => {
    const location = useLocation(); // Get the current path

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    const [isOpen7, setIsOpen7] = useState(false);
    const [isOpen8, setIsOpen8] = useState(false);
    const [isOpen9, setIsOpen9] = useState(false);
    const [isOpen10, setIsOpen10] = useState(false);
    const [isOpen11, setIsOpen11] = useState(false);
    const [isOpen12, setIsOpen12] = useState(false);
    const [isOpen13, setIsOpen13] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
     
    };
    const handleToggle1 = () =>{
      setIsOpen1(!isOpen1); // Toggle the dropdown state
    }
  
    const handleToggle2 = () =>{
      setIsOpen2(!isOpen2); // Toggle the dropdown state
    }
   
  
    const handleToggle3 = () =>{
      setIsOpen3(!isOpen3); // Toggle the dropdown state
    }
  
    const handleToggle4 = () =>{
      setIsOpen4(!isOpen4); // Toggle the dropdown state
    }
  
    const handleToggle5 =()=>{
      setIsOpen5(!isOpen5);
    }
    const handleToggle6 =()=>{
      setIsOpen6(!isOpen6);
    }
    const handleToggle7 =()=>{
      setIsOpen7(!isOpen7);
    }
    const handleToggle8 =()=>{
      setIsOpen8(!isOpen8);
    }
    const handleToggle9 =()=>{
      setIsOpen9(!isOpen9);
    }
    const handleToggle10 =()=>{
      setIsOpen10(!isOpen10);
    }
    const handleToggle11 =()=>{
      setIsOpen11(!isOpen11);
    }
    const handleToggle12 =()=>{
      setIsOpen12(!isOpen12);
    }
    const handleToggle13 =()=>{
      setIsOpen13(!isOpen13);
    } 
  return (
    <>
  <div className='card m-3 border cardheight scrollable-container'>

<div className='bg-white m-3 d-flex text-center '>
  <img src='/images/react.png' className='img-fluid ' width={90}  ></img>
  <h1 className='text-center times-roman-text p-3'> React </h1>
</div>







<div className="dropdown m-3">
  <a
    href="#"
    className="n"
    data-bs-toggle="collapse"
    data-bs-target="#functionsModulesSection2"
    aria-expanded="false"
    ariea-expanded ={isOpen}
    aria-controls="functionsModulesSection"
    onClick={handleToggle}
  >
   <div className='d-flex A justify-content-between'>
    <h6 className=' times-roman-text  A patto ps-2 pe-2 text-white '><b>React Basic</b></h6>
      
    <span className="p-2 text-white">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>

        </div>
       
  </a>
 

  <div
    id="functionsModulesSection2"
    className="collapse p-3"
    style={{
      
      position: "relative",
      zIndex: 1,
     
    }}
  >

<nav>
<Link to={"/react"}   
    className={`n text-black ${location.pathname === "/python" ? "active-link" : ""}`}>
    <h5 className=' times-roman-text p-2  hav'>React Home</h5>
    </Link>
</nav>
   
    <nav>
    <Link to={"/react/intro"} className="n text-black">
    <h5 className=' times-roman-text  hav p-2  '>React Intro</h5>
    </Link>
    </nav>

    <nav>
  <Link to={"/react/installation"} className="n text-black">
      <h5 className="times-roman-text p-2 hav">React Installation</h5>
    </Link>

  </nav>
   

  <nav>
  <Link to={"/react/upgrade"} className="n text-black">
      <h5 className="times-roman-text p-2 hav">React Upgrade</h5>
    </Link>

  </nav>

    
    <Link to={'/react/es6'} className="n text-black">
      <h5 className="times-roman-text p-2 hav">React ES6</h5>
    </Link>

    <Link to={"/react/renderhtml"}  className="n text-black">
    <h5 className="times-roman-text p-2 hav">React Render HTML</h5>
    </Link>

    <Link to={'/react/jsx'} className="n text-black">
    <h5 className="times-roman-text p-2 hav">React JSX</h5>
    </Link>

    <Link to={'/react/component'} href="" className="n text-black">
    <h5 className="times-roman-text p-2 hav">React Components</h5>
    </Link>

    <Link to={"/react/classcomponent"} className="n text-black">
    <h5 className="times-roman-text p-2 hav">React Class Components</h5>
    </Link>

    <Link to={'/react/state'}  className="n text-black">
    <h5 className="times-roman-text p-2 hav">React State</h5>
    </Link>

    <Link to={'/react/props'}  className="n text-black">
    <h5 className="times-roman-text p-2 hav">React Props</h5>
    </Link>
   <Link to={'/react/event'} className="n text-black">
    <h5 className="times-roman-text p-2 hav">React Events</h5>
    </Link>
    <Link to={'/react/condition'} className="n text-black">
    <h5 className=' times-roman-text  p-2 hav '>React Conditional</h5>
    </Link>

    <Link to={"/react/list"} className="dropdown-item n text-black" href="#">
    <h5 className=' times-roman-text  p-2 hav '> React Lists</h5>
      </Link>
     
      <Link to={"/react/form"} className="dropdown-item n text-black" href="#">
    <h5 className=' times-roman-text  p-2 hav '> React Forms</h5>
      </Link>

      
    
      <Link to={"/python/pythonArithmetic"} className="n text-black dropdown-item">
    <h5 className="times-roman-text p-2 hav"> React Router</h5>
    </Link>
      
    <Link to={"/python/PythonComparison"} className="n text-black dropdown-item">
    <h5 className="times-roman-text p-2 hav "> React Memo</h5>
    </Link>
      
    <Link to={'/python/Assignment'} className="dropdown-item n" >
    <h5 className=' times-roman-text  p-2 hav '>  Styling React Using CSS</h5>
      
      </Link>
    
    <Link to={"/python/logical"} className="dropdown-item n" >
    <h5 className=' times-roman-text  p-2 hav '>Styling React Using Sass</h5>
        
      </Link>
    
    
   
  </div>
</div>





<div className="dropdown m-3">
  <a
    href="#"
    className="n"
    data-bs-toggle="collapse"
    data-bs-target="#functionsModulesSection1"
    aria-expanded="false"
    ariea-expanded ={isOpen1}
    onClick={handleToggle1}
    aria-controls="functionsModulesSection"
  >
<div className='d-flex A justify-content-between'>
<h6 className="times-roman-text A patto ps-2 pe-2 text-white"><b>React Hooks</b></h6>
      
    <span className="p-2 text-white">
          {isOpen1 ? <FaChevronUp /> : <FaChevronDown />}
        </span>

        </div>
       

  
  </a>

  <div
    id="functionsModulesSection1"
    className="collapse p-3"
    style={{
      
      position: "relative",
      zIndex: 1,
     
    }}
  >
    <Link to= {"/python/controlflow"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>  React Hooks</h5>
      </Link>

      <Link to= {'/react/usestate'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>  useState </h5>
      </Link>

    
      <Link to= {"/python/ifelse"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> useEffect</h5>
      </Link>

      <Link to= {"/react/usecontextpage"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> useContext</h5>
      </Link>
      <Link to= {"/react/redux"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Redux</h5>
      </Link>
      
      <Link to= {"/python/elif"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> useRef </h5>
      </Link>

      <Link to= {"/python/matchcase"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> useReducer </h5>
      </Link>

    
      <Link to= {"/python/forloop"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> useCallback </h5>
      </Link>


      
      <Link to= {"/python/forelseloop"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python ForElse Loop </h5>
      </Link>

        
      <Link to= {"/python/whileloop"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python While Loop </h5>
      </Link>


      <Link to= {"/python/break"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python break Statement </h5>
      </Link>

      <Link to= {"/python/continue"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python continue Statement </h5>
      </Link>

      <Link to= {"/python/pass"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python pass Statement</h5>
      </Link>
    
      <a className="dropdown-item n text-black" href="#">
        <h5 className="times-roman-text p-2 hav">Python Nested Loops</h5>
      </a>

  </div>
</div>









<div className="dropdown m-3">
  <a
    href="#"
    className="n"
    data-bs-toggle="collapse"
    data-bs-target="#functionsModulesSection"
    aria-expanded="false"
    ariea-expanded ={isOpen2}
    onClick={handleToggle2}
    aria-controls="functionsModulesSection"
  >
    <div className='d-flex A justify-content-between'>
   
    <h6 className="times-roman-text A patto ps-2 pe-2 text-white"><b>Python Function Modules</b></h6>
      
    <span className="p-2 text-white">
          {isOpen2 ? <FaChevronUp /> : <FaChevronDown />}
        </span>

        </div>
   
  </a>

  <div
    id="functionsModulesSection"
    className="collapse p-3"
    style={{
      
      position: "relative",
      zIndex: 1,
     
    }}
  >
    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Default Arguments</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Keyword Arguments</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Keyword-Only Arguments</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Positional Arguments</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Arguments</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Arbitrary Arguments</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Variables Scope</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Function Annotations</h5>
    </a>
    <Link to= {"/python/modules"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python Modules</h5>
      </Link>
    

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Built-in Functions</h5>
    </a>
  </div>
</div>









  
<div className="dropdown m-3">
  <a
    href="#"
    className="n"
    data-bs-toggle="collapse"
    data-bs-target="#stringsSection"
    aria-expanded="false"
    ariea-expanded ={isOpen3}
    onClick={handleToggle3}
    aria-controls="stringsSection"
  >

    <div className='d-flex A justify-content-between'>
    <h5 className="times-roman-text A p-2 text-white">Python Strings</h5>
      
    <span className="p-2 text-white">
          {isOpen3 ? <FaChevronUp /> : <FaChevronDown />}
        </span>

        </div>
   

  </a>

  <div
    id="stringsSection"
    className="collapse p-3"
    style={{
      position: "relative",
      zIndex: 1,
    }}
  >
    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Strings</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Slicing Strings</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Modify Strings</h5>
    </a>

    <Link to= {"/python/stringconcatenation"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>String Concatenation</h5>
      </Link>
    
      <Link to= {"/python/stringformatting"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python String Formatting</h5>
      </Link>
    
    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Escape Characters</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python String Methods</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python String Exercises</h5>
    </a>
  </div>
</div>


<div className="dropdown m-3">
  <a
    href="#"
    className="n"
    data-bs-toggle="collapse"
    data-bs-target="#listSection"
    aria-expanded="false"
    aria-controls="listSection"
    ariea-expanded ={isOpen4}
    onClick={handleToggle4}
  >
    
    <div className='d-flex A justify-content-between'>
    <h5 className="times-roman-text A p-2 text-white">Python List</h5>
      
    <span className="p-2 text-white">
          {isOpen4 ? <FaChevronUp /> : <FaChevronDown />}
        </span></div>
    
  </a>

  <div
    id="listSection"
    className="collapse p-3"
    style={{
      position: "relative",
      zIndex: 1,
    }}
  >
    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Lists</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Access List Items</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Change List Items</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Add List Items</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Remove List Items</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Loop Lists</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python List Comprehension</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Sort Lists</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Copy Lists</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Join Lists</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python List Methods</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python List Exercises</h5>
    </a>
  </div>
</div>


<div className="dropdown m-3">
  <a
    href="#"
    className="n"
    data-bs-toggle="collapse"
    data-bs-target="#tuplesSection"
    aria-expanded="false"
    aria-controls="tuplesSection"
    ariea-expanded ={isOpen5}
    onClick={handleToggle5}

  >
     <div className='d-flex A justify-content-between'>
     <h5 className="times-roman-text A p-2 text-white">Python Tuples</h5>
      
    <span className="p-2 text-white">
          {isOpen5 ? <FaChevronUp /> : <FaChevronDown />}
        </span></div>
   
  </a>

  <div
    id="tuplesSection"
    className="collapse p-3"
    style={{
      position: "relative",
      zIndex: 1,
    }}
  >
    
    <Link to= {"/python/tuple"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Tuples</h5>
      </Link>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Access Tuple Items</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Update Tuples</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Unpack Tuples</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Loop Tuples</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Join Tuples</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Tuple Methods</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Tuple Exercises</h5>
    </a>
  </div>
</div>


<div className="dropdown m-3">
  <a
    href="#"
    className="n"
    data-bs-toggle="collapse"
    data-bs-target="#setsSection"
    aria-expanded="false"
    ariea-expanded ={isOpen6}
    onClick={handleToggle6}
    aria-controls="setsSection"
  >
      <div className='d-flex A justify-content-between'>
      <h5 className="times-roman-text A p-2 text-white">Python Sets</h5>
      
    <span className="p-2 text-white">
          {isOpen6 ? <FaChevronUp /> : <FaChevronDown />}
        </span></div>
  
  </a>

  <div
    id="setsSection"
    className="collapse p-3"
    style={{
      position: "relative",
      zIndex: 1,
    }}
  >
    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Sets</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Access Set Items</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Add Set Items</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Remove Set Items</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Loop Sets</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Join Sets</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Copy Sets</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Set Operators</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Set Methods</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Set Exercises</h5>
    </a>
  </div>
</div>

<div className="dropdown m-3">
  <a
    href="#"
    className="n"
    data-bs-toggle="collapse"
    data-bs-target="#dictionariesSection"
    aria-expanded="false"
    aria-controls="dictionariesSection"
    ariea-expanded ={isOpen7}
    onClick={handleToggle7}
  >
    
    <div className='d-flex A justify-content-between'>
    <h5 className="times-roman-text A p-2 text-white">Python Dictionaries</h5>
      
    <span className="p-2 text-white">
          {isOpen7? <FaChevronUp /> : <FaChevronDown />}
        </span></div>
  </a>

  <div
    id="dictionariesSection"
    className="collapse p-3"
    style={{
      position: "relative",
      zIndex: 1,
    }}
  >
    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Dictionaries</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Access Dictionary Items</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Change Dictionary Items</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Add Dictionary Items</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Remove Dictionary Items</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Dictionary View Objects</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Loop Dictionaries</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Copy Dictionaries</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Nested Dictionaries</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Dictionary Methods</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Dictionary Exercises</h5>
    </a>
  </div>
</div>

<div className="dropdown m-3">
  <a
    href="#"
    className="n"
    data-bs-toggle="collapse"
    data-bs-target="#arraysSection"
    aria-expanded="false"
    aria-controls="arraysSection"
    ariea-expanded ={isOpen8}
    onClick={handleToggle8}
  >
       <div className='d-flex A justify-content-between'>
       <h5 className="times-roman-text A p-2 text-white">Python Arrays</h5>
    <span className="p-2 text-white">
          {isOpen4 ? <FaChevronUp /> : <FaChevronDown />}
        </span></div>

  </a> 

  <div
    id="arraysSection"
    className="collapse p-3"
    style={{
      position: "relative",
      zIndex: 1,
    }}
  >
    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Arrays</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Access Array Items</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Add Array Items</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Remove Array Items</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Loop Arrays</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Copy Arrays</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Reverse Arrays</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Sort Arrays</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Join Arrays</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Array Methods</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Array Exercises</h5>
    </a>

    {/* OOPs Concepts Section */}
    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python OOPs Concepts</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Classes & Objects</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Class Attributes</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Class Methods</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Static Methods</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Constructors</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Access Modifiers</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Inheritance</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Polymorphism</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Method Overriding</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Method Overloading</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Dynamic Binding</h5>
    </a>
  </div>
</div>


<div className="dropdown m-3">
  <a
    href="#"
    className="n"
    data-bs-toggle="collapse"
    data-bs-target="#fileHandlingSection"
    aria-expanded="false"
    aria-controls="fileHandlingSection"
    ariea-expanded ={isOpen9}
    onClick={handleToggle9}
  >
    
    <div className='d-flex A justify-content-between'>
    <h5 className="times-roman-text A p-2 text-white">Python File Handling</h5>
    <span className="p-2 text-white">
          {isOpen9 ? <FaChevronUp /> : <FaChevronDown />}
        </span></div>
  </a>

  <div
    id="fileHandlingSection"
    className="collapse p-3"
    style={{
      position: "relative",
      zIndex: 1,
    }}
  >
    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python File Handling</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Write to File</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Read Files</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Renaming and Deleting Files</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Directories</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python File Methods</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python OS File/Directory Methods</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python OS Path Methods</h5>
    </a>
  </div>
</div>


<div className="dropdown m-3">
  <a
    href="#"
    className="n"
    data-bs-toggle="collapse"
    data-bs-target="#oopSection"
    aria-expanded="false"
    aria-controls="oopSection"
    ariea-expanded ={isOpen10}
    onClick={handleToggle10}
  >
      
      <div className='d-flex A justify-content-between'>
      <h5 className="times-roman-text A p-2 text-white">Pyhon OOPS</h5>
    <span className="p-2 text-white">
          {isOpen10 ? <FaChevronUp /> : <FaChevronDown />}
        </span></div>
   
  </a>

  <div
    id="oopSection"
    className="collapse p-3"
    style={{
      position: "relative",
      zIndex: 1,
    }}
  >
    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python OOPs Concepts</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Classes & Objects</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Class Attributes</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Class Methods</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Static Methods</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Constructors</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Access Modifiers</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Inheritance</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Polymorphism</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Method Overriding</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Method Overloading</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Dynamic Binding</h5>
    </a>
  </div>
</div>

<div className="dropdown m-3">
  <a
    href="#"
    className="n"
    data-bs-toggle="collapse"
    data-bs-target="#errorsSection"
    aria-expanded="false"
    aria-controls="errorsSection"
    ariea-expanded ={isOpen11}
    onClick={handleToggle11}
  >
     
     <div className='d-flex A justify-content-between'>
     <h5 className="times-roman-text A p-2 text-white">Python Errors</h5>
    <span className="p-2 text-white">
          {isOpen11 ? <FaChevronUp /> : <FaChevronDown />}
        </span></div>
   
  </a>

  <div
    id="errorsSection"
    className="collapse p-3"
    style={{
      position: "relative",
      zIndex: 1,
    }}
  >
    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Syntax Errors</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Exceptions</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python try-except Block</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python try-finally Block</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Raising Exceptions</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Exception Chaining</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Nested try Block</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python User-defined Exception</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Logging</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Assertions</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Built-in Exceptions</h5>
    </a>
  </div>
</div>



<div className="dropdown m-3">
  <a
    href="#"
    className="n"
    data-bs-toggle="collapse"
    data-bs-target="#miscellaneousSection"
    aria-expanded="false"
    aria-controls="miscellaneousSection"
    ariea-expanded ={isOpen12}
    onClick={handleToggle12}
  >
    <div className='d-flex A justify-content-between'>
    <h5 className="times-roman-text A p-2 text-white">Python Miscellaneous</h5>
    <span className="p-2 text-white">
          {isOpen12 ? <FaChevronUp /> : <FaChevronDown />}
        </span></div>
    
  </a>

  <div
    id="miscellaneousSection"
    className="collapse p-3"
    style={{
      position: "relative",
      zIndex: 1,
    }}
  >
    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Date & Time</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Maths</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Iterators</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Generators</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Closures</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Decorators</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Recursion</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Reg Expressions</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python PIP</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Database Access</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Weak References</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Serialization</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Templating</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Output Formatting</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Performance Measurement</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Data Compression</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python CGI Programming</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python XML Processing</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python GUI Programming</h5>
    </a>

    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Command-Line Arguments</h5>
    </a>
  </div>
</div>


<div className="dropdown m-3">
  <a
    href="#"
    className="n"
    data-bs-toggle="collapse"
    data-bs-target="#advancedConceptsSection"
    aria-expanded="false"
    aria-controls="advancedConceptsSection"
    ariea-expanded ={isOpen13}
    onClick={handleToggle13}
  >
     <div className='d-flex A justify-content-between'>
     <h5 className="times-roman-text A p-2 text-white"> Advanced Concepts</h5>
    <span className="p-2 text-white">
          {isOpen13 ? <FaChevronUp /> : <FaChevronDown />}
        </span></div>
   
  </a>

  <div
    id="advancedConceptsSection"
    className="collapse p-3"
    style={{
      position: "relative",
      zIndex: 1,
    }}
  >
    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Metaclasses</h5>
    </a>
    <a href="" className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Metaclasses</h5>
    </a>
  </div>
</div>


</div>

   </>
  )
}

export default ReactSidebar