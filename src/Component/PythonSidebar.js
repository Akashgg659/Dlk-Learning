import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS bundle
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icons for open/close
import { Link, useLocation } from 'react-router-dom';


const PythonSidebar = () => {
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
  <div className=' m-3 border cardheight scrollable-container'
   style={{ minHeight: "85vh",
    maxHeight: "100vh",
    overflowY: "scroll",}}>

<div className=' m-3 d-flex text-center '>
  <img src='/images/python.png' className='img-fluid ' width={90}  ></img>
  <h1 className='text-center times-roman-text p-3 text-dark'> Python </h1>
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
   <div className='d-flex A justify-content-between radiussidebar'>
    <h6 className=' times-roman-text    patto ps-2 pe-2 text-white  '><b>Python Basic</b></h6>
      
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
<Link to={"/python"}   
    className={`n text-black ${location.pathname === "/python" ? "active-link" : ""}`}>
    <h5 className=' times-roman-text p-2  hav'>Python Home</h5>
    </Link>
</nav>
   
    <nav>
    <Link to={"/python/intro"} className="n text-black radiussidebar">
    <h5 className=' times-roman-text  hav p-2  '>Python Intro</h5>
    </Link>
    </nav>
   

  <nav>
  <Link to={"/python/installation"} className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Installation</h5>
    </Link>

  </nav>

    
    <Link to={"/python/hello"} className="n text-black">
      <h5 className="times-roman-text p-2 hav">Python Hello</h5>
    </Link>

    <Link to={"/python/comments"}  className="n text-black">
    <h5 className="times-roman-text p-2 hav">Python Comments</h5>
    </Link>

    <Link to={'/python/variable'} className="n text-black">
    <h5 className="times-roman-text p-2 hav">Python Variable</h5>
    </Link>

    <Link to={"/python/objectidentity"} href="" className="n text-black">
    <h5 className="times-roman-text p-2 hav">Python Object Indentity</h5>
    </Link>

    <Link to={"/python/datatypes"} className="n text-black">
    <h5 className="times-roman-text p-2 hav">Python Data Types</h5>
    </Link>

    <Link to={"/python/userinput"}  className="n text-black">
    <h5 className="times-roman-text p-2 hav">Python User Input</h5>
    </Link>
   <Link to={"/python/numberspage"} className="n text-black">
    <h5 className="times-roman-text p-2 hav">Python Number</h5>
    </Link>
    <Link to={"/python/boolean"} className="n text-black">
    <h5 className=' times-roman-text  p-2 hav '> Python boolean</h5>
    </Link>

    <Link to={"/python/literal"} className="dropdown-item n text-black" href="#">
    <h5 className=' times-roman-text  p-2 hav '> Python Literals</h5>
      </Link>
     

      <a className="dropdown-item n text-black" href="#">
    <h5 className=' times-roman-text  p-2 hav '>Python Operators</h5>
        
      </a>
    
      <Link to={"/python/pythonArithmetic "} className="n text-black dropdown-item ">
    <h5 className="times-roman-text p-2 hav"> ArithmeticOperator</h5>
    </Link>
      
    <Link to={"/python/PythonComparison"} className="n text-black dropdown-item ">
    <h5 className="times-roman-text p-2 hav "> ComparisonOperator</h5>
    </Link>
      
    <Link to={'/python/Assignment'} className="dropdown-item n text-black" >
    <h5 className=' times-roman-text  p-2 hav '>  AssignmentOperator</h5>
      
      </Link>
    
    <Link to={"/python/logical"} className="dropdown-item n text-black" >
    <h5 className=' times-roman-text  p-2 hav '>Logical Operator</h5>
        
      </Link>
    
    
    <Link to={"/python/Bitwise"} className="dropdown-item n text-black" >
    <h5 className=' times-roman-text  p-2 hav '>Bitwise Operator</h5>
        
      </Link>
    
    

      <Link to={"/python/membership"} className="dropdown-item n text-black " >
    <h5 className=' times-roman-text  p-2 hav '>MembershipOperator</h5>
        
      </Link>
         
    
   
    
    
  
    
    
 
    <Link to ={"/python/identity"} className='dropdown-item n text-black '>
    <h5 className=' times-roman-text  p-2 hav '>Identity Operators</h5>
        
      </Link>
    
    
      <Link to={"/python/precedence"} className="dropdown-item n text-black " >
     <h5 className=' times-roman-text  p-2 hav '>Operator Precedence</h5>
        
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
<div className='d-flex A justify-content-between  radiussidebar'>
  <h6 className="times-roman-text  patto ps-2 pe-2  text-white fs-6">
    <b>Python Control Statement</b></h6>

      
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
      <h5 className=' times-roman-text  p-2 hav '>  Python Control Flow</h5>
      </Link>

      <Link to= {"/python/if"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>  Python If statement</h5>
      </Link>

    
      <Link to= {"/python/ifelse"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python If else</h5>
      </Link>

      <Link to= {"/python/nestedif"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python Nested If</h5>
      </Link>

      
      <Link to= {"/python/elif"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python Elif </h5>
      </Link>

      <Link to= {"/python/matchcase"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python Match-Case </h5>
      </Link>

    
      <Link to= {"/python/forloop"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python For Loop </h5>
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
    <div className='d-flex A justify-content-between  radiussidebar'>
    <h6 className="times-roman-text   patto ps-2 pe-2  text-white"><b>Python Function Modules</b></h6>
      
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

     <Link to= {"/python/function"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python Function</h5>
      </Link>
      
      <Link to= {"/python/defaultarguments"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Default Arguments</h5>
      </Link>
      <Link to= {"/python/keywordarguments"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Keyword Arguments</h5>
      </Link>
      <Link to= {"/python/keywordonly"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Keyword OnlyArguments</h5>
      </Link>
      <Link to= {"/python/positionalkeyword"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Positional keyword</h5>
      </Link>
      <Link to= {"/python/positiononly"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Positional OnlyArguments</h5>
      </Link>
      <Link to= {"/python/scope"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python Scope</h5>
      </Link>
      <Link to= {"/python/functionanno"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Function Annotations</h5>
      </Link>

      <Link to= {"/python/buildinfunction"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Built-in Functions</h5>
      </Link>
  



   
    <Link to= {"/python/modules"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python Modules</h5>
      </Link>
    


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

    <div className='d-flex A justify-content-between  radiussidebar'>
    <h6 className="times-roman-text  patto ps-2 pe-2  text-white"><b>Python Strings</b></h6>
      
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
    
    <Link to= {"/python/string"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python Strings</h5>
      </Link>
      <Link to= {"/python/slicing"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python Slicing Strings</h5>
      </Link>
      <Link to= {"/python/stringmethod"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python Modify Strings</h5>
      </Link>
    
      <Link to= {"/python/stringmethod"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python String Methods</h5>
      </Link>
   

    <Link to= {"/python/stringconcatenation"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>String Concatenation</h5>
      </Link>
    
      <Link to= {"/python/stringformatting"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python String Formatting</h5>
      </Link>
    
    

    

    
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
    
    <div className='d-flex A justify-content-between  radiussidebar'>
    <h6 className="times-roman-text  patto ps-2 pe-2  text-white"><b>Python List</b></h6>
      
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
    
    <Link to= {"/python/list"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python List</h5>
      </Link>
      <Link to= {"/python/listaccess"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Access List Items</h5>
      </Link>
    
      <Link to= {"/python/listchange"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Change List Items</h5>
      </Link>
    
      <Link to= {"/python/addlist"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Add List Items</h5>
      </Link>
    
      <Link to= {"/python/removelist"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Remove List Items</h5>
      </Link>
    
      <Link to= {"/python/LoopLists"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Loop Lists</h5>
      </Link>
      <Link to= {"/python/ListComprehension"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>List Comprehension</h5>
      </Link>
    
    

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
     <div className='d-flex A justify-content-between  radiussidebar'>
     <h6 className="times-roman-text  patto ps-2 pe-2  text-white"><b>Python Tuples</b></h6>
      
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
      <div className='d-flex A justify-content-between  radiussidebar'>
      <h6 className="times-roman-text  patto ps-2 pe-2  text-white"><b>Python Sets</b></h6>
      
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
    <Link to= {"/python/set"} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Sets</h5>
      </Link>
     
      <Link to= {'/python/accessset'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Access Set Items</h5>
      </Link>
      

      <Link to= {'/python/addsetitem'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Add Set Items</h5>
      </Link>

      <Link to= {'/python/removesetitem'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Remove Set Items</h5>
      </Link>

      <Link to= {'/python/loopset'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Loop Sets</h5>
      </Link>
      <Link to= {'/python/joinset'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Join Sets</h5>
      </Link>

      <Link to= {'/python/copyset'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Copy Sets</h5>
      </Link>
  
      <Link to= {'/python/setoperator'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Set Operators</h5>
      </Link>
   
  
      <Link to= {'/python/setmethod'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Set Methods</h5>
      </Link>

  

    
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
    
    <div className='d-flex A justify-content-between  radiussidebar'>
    <h6 className="times-roman-text patto ps-2 pe-2  text-white"><b>Python Dictionaries</b></h6>
      
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
       <div className='d-flex A justify-content-between  radiussidebar'>
       <h6 className="times-roman-text   p-2 text-white"><b>Python Arrays</b></h6>
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
    
    <div className='d-flex A justify-content-between  radiussidebar'>
    <h6 className="times-roman-text  patto ps-2 pe-2  text-white"><b>Python File Handling</b></h6>
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

    <Link to= {'/python/filemethod'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python File Methods</h5>
      </Link>
      <Link to= {'/python/osfiledirectory'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> OS File/Directory Methods</h5>
      </Link>

    

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
      
      <div className='d-flex A justify-content-between  radiussidebar'>
      <h6 className="times-roman-text  patto ps-2 pe-2  text-white"><b>Pyhon OOPS</b></h6>
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
    

     <Link to= {'/python/oops'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python OOPs Concepts</h5>
      </Link>

      
     <Link to= {'/python/classobject'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Classes & Objects</h5>
      </Link>
   
      <Link to= {'/python/classattribute'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Class Attributes</h5>
      </Link>
   
      <Link to= {'/python/classmethod'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Class Methods</h5>
      </Link>

      <Link to= {'/python/staticmethod'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Static Methods</h5>
      </Link>

      <Link to= {'/python/construstor'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Constructors</h5>
      </Link>
      <Link to= {'/python/accessmodifier'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Access Modifiers</h5>
      </Link>
      <Link to= {'/python/inheritance'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Inheritance</h5>
      </Link>
      <Link to= {'/python/polymorphism'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '>Python Polymorphism</h5>
      </Link>
      <Link to= {'/python/overriding'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Method Overriding</h5>
      </Link>
      <Link to= {'/python/overloading'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Method Overloading</h5>
      </Link>
      <Link to= {'/python/dynamicbinding'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python Dynamic Binding</h5>
      </Link>
      <Link to= {'/python/abstract'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python Abstraction</h5>
      </Link>
      <Link to= {'/python/encapsulation'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python Encapsulation</h5>
      </Link>
      <Link to= {'/python/interface'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python Interfaces</h5>
      </Link>
   

   


    

    
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
     
     <div className='d-flex A justify-content-between  radiussidebar'>
     <h6 className="times-roman-text  patto ps-2 pe-2  text-white"><b>Python Errors</b></h6>
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

      <Link to= {'/python/syntaxerror'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python Syntax Errors</h5>
      </Link>
    
      <Link to= {'/python/exceptions'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python Exceptions</h5>
      </Link>
    
   
      <Link to= {'/python/tryexcept'} className="dropdown-item n text-black" >
      <h5 className=' times-roman-text  p-2 hav '> Python try-except Block</h5>
      </Link>

  

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
    <div className='d-flex A justify-content-between  radiussidebar'>
    <h6 className="times-roman-text  patto ps-2 pe-2  text-white"><b>Python Miscellaneous</b></h6>
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
     <div className='d-flex A justify-content-between  radiussidebar'>
     <h6 className="times-roman-text  patto ps-2 pe-2 text-white"> <b>Advanced Concepts</b></h6>
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
);
};

export default PythonSidebar