import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";


const HomeSearch = () => {

     const [searchtext, setSearchtext] = useState(""); // Search text
      const [filteredItems, setFilteredItems] = useState([]); // Filtered items based on search
        const [showDropdown, setShowDropdown] = useState(false); // Show or hide the dropdown
        const searchRef = useRef(null); // Reference to the search input field
        const dropdownRef = useRef(null); // Reference to the dropdown menu
        const navigate = useNavigate()
      
    
        const items = [
    
            
            
    
    
            
         //Basic
    
           //Home
            { label: "Python ", path: "/python" },
            { label: "React ", path: "/react" },
    
           //intro
            { label: "Python intro", path: '/python/intro' },
            { label: "React Intro", path: '/react/intro'},
    
    
            { label: "Python installation", path: '/python/installation' },
            { label: "Python Control Flow", path: '/python/controlflow' },
            { label: "Python comments", path: '/python/comments' },
            { label: "Python data types", path: '/python/datatypes' },
            { label: "Python Function", path: '/python/function' },
            
    
           
            //react
          
            
            { label: "React Props", path: '/react/props' },
            { label: "React Component", path: '/react/component'},
            { label: "React UseContext", path: '/react/usecontextpage' },
    
    
    
            { label: "Node.js", path: "/intro-node" },
    
    
            { label: "Django", path: "/intro-django" },
            { label: "Flask", path: "/intro-flask" },
            { label: "Bootstrap", path: "/intro-bootstrap" },
            { label: "TypeScript", path: "/intro-typescript" },
            { label: "SQL", path: "/intro-sql" },
    
            { label: "HTML", path: "/intro-html" },
            { label: "CSS", path: "/intro-css" },
            { label: "JavaScript", path: "/intro-javascript" },
    
            
            ];
    
    
    
      useEffect(() => {
        // Filter items based on searchtext
        setFilteredItems(
          items.filter((item) =>
            item.label.toLowerCase().startsWith(searchtext.toLowerCase())
          )
        );
      }, [searchtext]);
    
      // Detect clicks outside the search input or dropdown to close the dropdown
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            searchRef.current &&
            !searchRef.current.contains(event.target)
          ) {
            setShowDropdown(false); // Close dropdown when clicking outside
          }
        };
    
        document.addEventListener("click", handleClickOutside);
    
        // Clean up the event listener on component unmount
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, []);
    
      const handleSearchChange = (event) => {
        setSearchtext(event.target.value);
        setShowDropdown(true); // Show dropdown when the user starts typing
       
      };
    
      const handleItemClick = (path) => {
        navigate(path); // Navigate to the item's path
        setShowDropdown(false); // Hide the dropdown after selecting an item
        setSearchtext('');
      };
    
      const handleKeyDown = (event) => {
        
        if (event.key === "Enter") {
          event.preventDefault(); // Prevent default form submission
          if (searchtext.trim() !== "" && filteredItems.length > 0) {
            navigate(filteredItems[0].path);
            setShowDropdown(false); // Close the dropdown
          } else {
            // Optionally, provide feedback to the user
            console.log("Please enter a search term.");
          }
        }

      };
    
      const handleKeyDown2 = (event) => {

        
        if (filteredItems.length > 0) {
          event.preventDefault();
          if(searchtext.trim() !== '' && filteredItems.length > 0){
              // If Enter key is pressed and there are matching items, navigate to the first one
             navigate(filteredItems[0].path);
             setShowDropdown(false); // Close the dropdown
          }
        
        }
      };
    
      const phrases = ["Search for Python",
        "Search for react",
        "Explore for Java",
        "Research for C++",
      ];
      const [placeholder, setPlaceholder] = useState("");
      const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
      const [currentCharIndex, setCurrentCharIndex] = useState(0);
      const [isDeleting, setIsDeleting] = useState(false);
      
      useEffect(() => {
        const timeout = setTimeout(() => {
          const currentPhrase = phrases[currentPhraseIndex]; // Get the current phrase safely
      
          if (!isDeleting) {
            if (currentCharIndex < currentPhrase.length) {
              setPlaceholder((prev) => prev + currentPhrase[currentCharIndex]);
              setCurrentCharIndex((prev) => prev + 1);
            } else {
              setIsDeleting(true); // Start deleting after the full phrase
            }
          } else {
            if (currentCharIndex > 0) {
              setPlaceholder((prev) => prev.slice(0, -1));
              setCurrentCharIndex((prev) => prev - 1);
            } else {
              setIsDeleting(false);
              setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length); // Move to the next phrase
            }
          }
        }, isDeleting ? 100 : 150);
      
        return () => clearTimeout(timeout);
      }, [currentCharIndex, isDeleting, phrases, currentPhraseIndex]);
    
      
      const [isOpen, setIsOpen] = useState(false);

      useEffect(() => {
        if (isOpen) {
          // Disable body scroll
          document.body.style.overflow = 'hidden';
        } else {
          // Enable body scroll
          document.body.style.overflow = '';
        }
    
        // Cleanup on component unmount
        return () => {
          document.body.style.overflow = '';
        };
      }, [isOpen]);
    
  return (
    <div className=' d-xl-block d-lg-block   '>  
    <div style={{ margin: "0" }}>

    <form class="d-flex align-items-center   ">
<div class="position-relative w-100 colorremove ">
 <input
   type="search"
   style={{backgroundColor: "rgba(157, 165, 157, 0.61)",}}
   placeholder={placeholder}
   aria-label="Search"
   class="form-control ps-4 pe-4 pt-4 pb-4  bg-light colorremove"
   ref={searchRef}
   
   
   value={searchtext}
   onChange={handleSearchChange}
   onKeyDown={handleKeyDown} // Handle key down event to detect "Enter"
   
  
 />
 <div> <span 
   class="position-absolute top-50 end-0 translate-middle-y ps-4 pe-4 text-muted colorremove  "
  
   >
  
    <img className="img-fluid " src='/images/3.gif' alt="not" width={50} onClick={handleKeyDown2}
         />
 </span>
 
 
 </div>

</div>
</form>
 
</div>
<div className='scrollable-container hw-responsive bg-light pt-0  ' >
{showDropdown && searchtext &&  ( // Only display the list if the user types something
    <ul  
    className='hw-responsive row -dark  pt-3 pb-3'
    ref={dropdownRef}
    style={{
      listStyleType: "none",
      padding: "0",
      margin: "0",
      backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent background color
      marginTop: "5px",
      borderRadius: "4px",
      overflowY: "scroll", // Make sure it scrolls
      maxHeight: "150px",
      
      boxShadow: "0 10px 20px rgba(29, 24, 24, 0.1)",
      zIndex: 1000,
      
     
     
     
   }}>
    
   {filteredItems.length > 0 ? (
      filteredItems.map((item, index) => (
        <li
        
          key={index}
          style={{
            
            marginBottom: "5px",
            backgroundColor: "transparent", // Transparent background
            display: "block", // Arrange items vertically
       
            fontSize: "16px",
            cursor: "pointer",
          }}
          className='pe-4 ps-4 pt-1 pb-1 ive ' 
          onClick={() => handleItemClick(item.path)}
        >
          {item.label}
        </li>
      ))
    ) : searchtext ? ( // Show "No results found" only if searchText is not empty
      <li style={{ padding: "10px", color: "#888", display: "block",  listStyleType: "none",
      }}>No results found</li>
    ) : null}
  </ul>
 )}

</div>
 

</div>

  )
}

export default HomeSearch