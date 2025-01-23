import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


const InteractiveTagCloud = () => {
  const tagContainerRef = useRef(null);
  const [tags1, setTags1] = useState([
    { name: "Python", image: "/images/python.png", link: '/python' },
    { name: "React", image: "/images/react.png", link: 'react' },
    { name: "Java", image: "/images/java.png" },
    { name: "Bootstrap", image: "/images/boot.png" },
    { name: "JavaScript", image: "/images/js.png" },
    { name: "CSS", image: "/images/css.png" },
    { name: "HTML", image: "/images/html.png" },
    { name: "Node.js", image: "/images/node.png" },
    { name: "C++", image: "/images/C.png" },
    { name: "MySQL", image: "/images/my.png" },
    { name: "embedded", image: "/images/embedded.png" },
   
   
    
  ]);

  const rotation = useRef({ x: 0, y: 0 });  // Track current rotation values
  const lastMousePos = useRef({ x: 0, y: 0 });  // Last mouse position
  const velocity = useRef({ x: 0, y: 0 });  // Mouse velocity
  const mouseActive = useRef(false);  // Track if the mouse is active
  const animationFrameId = useRef(null);  // Animation frame ID for smooth stop

  /*
  // Handle random distribution in 3D space
  const distributeTagsRandomly = () => {
    const maxX = 300; // Maximum X position for the tags
    const maxY = 300; // Maximum Y position for the tags
    const maxZ = 300; // Maximum Z position for the tags

    tags.forEach((tag, index) => {
      const x = (Math.random() - 0.5) * maxX;
      const y = (Math.random() - 0.5) * maxY;
      const z = (Math.random() - 0.5) * maxZ;

      const tagElement = document.getElementById(`tag-${index}`);
      if (tagElement) {
        tagElement.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
      }
    });
  };

  // Handle mouse movement
  useEffect(() => {
    const container = tagContainerRef.current;
    const angleX = 30;
    const angleY = 30;

    let lastUpdateTime = Date.now();

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const deltaX = clientX - lastMousePos.current.x;
      const deltaY = clientY - lastMousePos.current.y;
      const now = Date.now();
      const timeDiff = now - lastUpdateTime;
      velocity.current.x = deltaX / timeDiff;
      velocity.current.y = deltaY / timeDiff;

      // Update mouse position
      lastMousePos.current = { x: clientX, y: clientY };

      // Calculate rotation values based on mouse position
      const centerX = container.offsetWidth / 2;
      const centerY = container.offsetHeight / 2;

      const angleXDeg = (clientY - centerY) / container.offsetHeight * angleX;
      const angleYDeg = (clientX - centerX) / container.offsetWidth * angleY;

      rotation.current.x = angleXDeg;
      rotation.current.y = angleYDeg;

      lastUpdateTime = now;
    };

    // Handle mouse down event
    const handleMouseDown = () => {
      mouseActive.current = true;
    };

    // Handle mouse up event and apply deceleration
    const handleMouseUp = () => {
      mouseActive.current = false;
      const stopRotation = () => {
        // Apply damping to velocity
        velocity.current.x *= 0.95;
        velocity.current.y *= 0.95;

        if (Math.abs(velocity.current.x) < 0.01 && Math.abs(velocity.current.y) < 0.01) {
          cancelAnimationFrame(animationFrameId.current); // Stop animation if velocity is low
        }

        // Update the rotation based on velocity
        rotation.current.x += velocity.current.y * 10;
        rotation.current.y -= velocity.current.x * 10;

        container.style.transform = `rotateX(${rotation.current.x}deg) rotateY(${rotation.current.y}deg)`;
        animationFrameId.current = requestAnimationFrame(stopRotation); // Continue decelerating
      };

      // Start deceleration
      stopRotation();
    };

    // Update the tag cloud position
    const updateTagCloudPosition = () => {
      if (mouseActive.current) {
        // Apply smooth rotation based on velocity
        rotation.current.x += velocity.current.y * 10;
        rotation.current.y -= velocity.current.x * 10;

        // Apply rotation to container
        container.style.transform = `rotateX(${rotation.current.x}deg) rotateY(${rotation.current.y}deg)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Distribute tags randomly in 3D space when the component mounts
    distributeTagsRandomly();

    // Apply smooth animation
    const interval = setInterval(updateTagCloudPosition, 16);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [tags]);

  */

  /*
  // Sample initial tags
  const initialTags = [
    { name: "Python", image: "/images/python.png" },
    { name: "React", image: "/images/react.png" },
    { name: "Java", image: "/images/java.png" },
    { name: "Bootstrap", image: "/images/boot.png" },
    { name: "JavaScript", image: "/images/js.png" },
    { name: "CSS", image: "/images/css.png" },
    { name: "HTML", image: "/images/html.png" },
    { name: "Node.js", image: "/images/node.png" },
    { name: "C++", image: "/images/C.png" },
    { name: "MySQL", image: "/images/my.png" },
    { name: "Embedded", image: "/images/embedded.png" },
  
  ];
  
  
  const [visibleItems, setVisibleItems] = useState([]); // Track visible items
  const containerRef = useRef(null); // Reference for the container to enable auto-scroll
  const [tags, setTags] = useState(initialTags); // Track tags
  const [isAnimating, setIsAnimating] = useState(false); // Track animation status

  // Add items to the visible list sequentially
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < tags.length) {
        setVisibleItems((prev) => [...prev, tags[index]]);
        index++;
      } else {
        clearInterval(interval);
        setIsAnimating(true)
      }
    }, 300);

    return () => clearInterval(interval)  ;
  }, [tags]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth; // Auto-scroll to the end
    }
  }, [visibleItems]);

*/

  return (
    <>
    <div className="tag-cloud-container p-0  " >
    {tags1.map((tag1, index) => (
      <div key={index}>
         <Link to={tag1.link}>
         <div className="tag-cloud-item pt-0 pb-0 pe-2 ps-2 image-container" >
        <img src={tag1.image} alt={tag1.name} style={{ width: "60px", height: "60px" }}  className="p-2 "/>
        
      </div>
     
      </Link>
        </div>
     
    ))}
  </div>

  
  

  {/*
 <div
        className="magic-horizontal-list d-flex overflow-hidden "
        ref={containerRef}
      >
        {visibleItems.map((tag, index) => (
          <div
            key={index}
            className={`magic-list-item m-2 p-2 fade-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {tag.image && (
              <div className="image-container">
                 <img
                src={tag.image}
                alt={tag.name}
                className="tag-image img-fluid mb-2 "
                style={{ width: "50px", height: "50px" }} 
              />

                </div>
             
            )}
            
          </div>
        ))}
        {setIsAnimating === true ? (<><h1>hii</h1></>):<></>}
      </div>*/}
    </>
   

  );
};

export default InteractiveTagCloud;
