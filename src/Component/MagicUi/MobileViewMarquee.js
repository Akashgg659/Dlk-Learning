import React from 'react'
import '../Css/MobileViewMarquee.css'
const MobileViewMarquee = () => {


   
  const images = [
    { src: "/images/kotlin.png", title: "Kotlin", content: "Kotlin is a statically-typed programming language that runs on the Java Virtual Machine (JVM" },
    { src: "/images/angular.png", title: "Angular ", content: "Angular is a popular, open-source web application framework developed and maintained by Google" },
    { src: "/images/arduino.png", title: "Arduino", content: "Arduino is an open-source electronics platform based on easy-to-use hardware and software." },
    { src: "/images/resp.png", title: "Raspberry PI", content: "The Raspberry Pi is a series of small, affordable, single-board computers designed " },
    { src: "/images/nodemcu.png", title: "Nodem MCU", content : "The NodeMCU is an open-source IoT development board based on the ESP32 microcontroller" },
    { src: "/images/simulation.png", title: "Simulation", content: "Simulation refers to the process of modeling a real-world system, process or environment " },
    { src: "/images/embc.png", title: "EmbeddedC ", content:"Embedded Systems are specialized computer systems that are designed to perform specific tasks " },
    { src: "/images/mysqlc1.png", title: "MySQL", content:"MySQL is a widely used open-source relational database management system (RDBMS)" },
    { src: "/images/AI1.png", title: "AI" , content:" AI is a branch of computer science focused on creating systems and machines capable of performing tasks "}
  ]
    


  return (
    <div className="marquee-containerm tag-cloud-container1 d-xl-none d-lg-none d-md-none   ">
    <div className="marquee-contentm image-container1 m-4 p-1 ">
      {/* Render images twice for continuous effect */}


        
      {images.concat(images).map((image, index) => (
<div className="ag-courses_item" key={index}>
  <a href="#" className="ag-courses-item_link">
    <div className="ag-courses-item_bg w-100  "></div>
    <div className="ag-courses-item_title text-center ">
      <img 
        src={image.src} 
        alt={image.title} 
        className="  p-3  "  height={170} width={170}
      />
      <p>{image.title}</p> {/* Display the title */}
      <p className='fs-6 p-2'>{image.content}</p> {/* Display the title */}
    </div>
  </a>
</div>
))}

       
    

        
     



    </div>
  </div>
  )
}

export default MobileViewMarquee