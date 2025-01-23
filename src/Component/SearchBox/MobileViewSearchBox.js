import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useMobileSearch } from './MobileViewContext/MobileSearchContex';


   

const MobileViewSearchBox = () => {
    const [searchtext, setSearchtext] = useState(""); // Search text
    const [filteredItems, setFilteredItems] = useState([]); // Filtered items based on search
      const [showDropdown, setShowDropdown] = useState(false); // Show or hide the dropdown
      const searchRef = useRef(null); // Reference to the search input field
      const dropdownRef = useRef(null); // Reference to the dropdown menu
      const navigate = useNavigate()
      const [showSearch, setShowSearch] = useState(false); // State to control visibility

      const {mobileSearchActive, setMobileSearchActive} = useMobileSearch()
  
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

     // Handle click on the image
  const handleKeyDown3 = () => {
    setShowSearch(true);
    setMobileSearchActive(true);
    setTimeout(() => {
      searchRef.current?.focus(); // Focus the search input when it appears
    }, 0);
  };

  // Hide search and show the image again
  const hideSearch = () => {
    setShowSearch(false);
    setSearchtext(""); // Optional: Clear search text when hiding
    setMobileSearchActive(false);
  };
  
  return (
    <div className='d-lg-none d-xl-none d-sm-block d-md-block '>  
         <div style={{ margin: "0" }}>

         <form class="">

         {!showSearch ? (
        // Show image when search is not visible

    <div class="position-relative   ">
     
      <div> <span 
        class=" text-muted"
        >
       
         <img className="img-fluid " src='/images/3.gif' alt="not" width={40} onClick={handleKeyDown3}   />
      </span>
      
      
      </div>
     
    </div>

) : (
    <div class="position-relative w-100 pe-4 ps-4">
    <input
      type="search"
      placeholder="Search..."
      aria-label="Search"
      class="form-control rounded-pill "
      ref={searchRef}
      
      value={searchtext}
      onChange={handleSearchChange}
      onKeyDown={handleKeyDown} // Handle key down event to detect "Enter"
      
     
    />


       <div> <span 
        class="position-absolute top-50 end-0 translate-middle-y  me-4 text-muted"
        >
       
         <img className="img-fluid pe-2 ps-2" src='/images/cancel.png ' alt="not" width={40} onClick={hideSearch}   />
      </span>
      
      
      </div>
   
  </div>)}
  </form>
      
     </div>
     <div className='scrollable-container ' >
     {showDropdown && searchtext && ( // Only display the list if the user types something
         <ul 
         className='row' 
         ref={dropdownRef}
         style={{
          listStyleType: "none",
          padding: "0",
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent background color
          marginTop: "5px",
          width: "300px",
          borderRadius: "4px", // Optional: Rounded corners
          maxHeight: "200px", // Set a maximum height for the dropdown
          overflowY: "scroll", // Make sure it scrolls
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
          zIndex: 1000, // Ensure the dropdown appears above other elements
          position: "absolute", // Position the dropdown relative to the container
          backdropFilter: "blur(15px)", // Apply blur effect to the background
          
        }}>
         
        {filteredItems.length > 0 ? (
           filteredItems.map((item, index) => (
             <li
             
               key={index}
               style={{
                 
                 marginBottom: "5px",
                 backgroundColor: "transparent", // Transparent background
                
            
                 fontSize: "16px",
                 cursor: "pointer",
               }}
               className='pe-4 ps-4 pt-1' 
               onClick={() => handleItemClick(item.path)}
             >
               {item.label}
             </li>
           ))
         ) : searchtext ? ( // Show "No results found" only if searchText is not empty
           <li style={{ padding: "10px", color: "#888" }}>No results found</li>
         ) : null}
       </ul>
      )}

     </div>
      
    
    </div>
 

  )
}

export default MobileViewSearchBox