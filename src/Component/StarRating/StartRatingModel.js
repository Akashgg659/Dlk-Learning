import React, { useContext, useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import StarRatingPage from "./StarRatingPage";
import { RatingContext } from "./RatingContext";
import axios from "axios";




const StartRatingModel = ({}) => {
   
const [userIp, setUserIp] = useState(null)
const userName = localStorage.getItem('name');  
const [starCount, setStarCount] = useState({
  id:'' ,
  name : '', 
  currentstarRating: ''

})

const [userview, setUserview] = useState(null)


    //for show model

    useEffect(() => {

     axios.get("https://api.ipify.org?format=json")
     .then((response)=>{
      const ip = response.data.ip;
      setUserIp(ip);

      const hasRated = localStorage.getItem(`hasRated_${ip}`)
      console.log(`IP Address: ${ip}, hasRated: ${hasRated}`);
      const jwtToken = localStorage.getItem("jwt_token");
  
      if (jwtToken &&!hasRated) {
        // Show modal after 20 seconds if the user hasn't rated
        const timer1 = setTimeout(() => {
          setShowModal(true);
        }, 1000);



        return () => clearTimeout(timer1); // Cleanup timer on unmount
      }
    })
    .catch((error) => {
      console.error("Error fetching IP address:", error);
    });
}, []);

//for username set

useEffect(() => {
  const jwtToken = localStorage.getItem('jwt_token');


  if (jwtToken && userName) {



   
    setStarCount((prevState) => ({
      ...prevState,
      name: userName, // Set user name if logged in
    }));
  } else {
    //setIsLoggedIn(false);
    localStorage.removeItem('name');
  }
}, []);

// for get the register user data
useEffect(() => {
 
  axios
    .get("https://dhanamfoundation.org/api/register/") 
    .then((response) => {
      console.log("Response data:", response.data);
      const rawdata = response.data
      setStarCount((prev)=>
      ({
        ...prev,
        id: rawdata.id,
        name: rawdata.name,
      }))
    })
    .catch((error) => {
     
      if (error.response) {
       
        console.error("Error status:", error.response.status);
        console.error("Error data:", error.response.data);
        console.error("Error headers:", error.response.headers);
      } else if (error.request) {
      
        console.error("No response received:", error.request);
      } else {
     
        console.error("Error message:", error.message);

       
        
      }
    });
}, []);








const handleClose = (e, rated = false)=>{
  e.preventDefault()
  if(userIp){
    localStorage.setItem(`hasrated_${userIp}`, rated ? true : false)
  }
   setShowModal(false)
}




const [currentstarRating, setStarCurrentRating] = useState(0); // Store the rating selected by the user

const handlestarrating = (e)=>{
  setStarCount((prevstate)=>({...prevstate,
    currentstarRating: parseInt(e.target.value, 10),
  }));
};

const handleStarSubmit = (e)=>{

  e.preventDefault()
   

  if (starCount.currentstarRating === null) {
    alert("Please select a rating before submitting!");
  
    return;
  }
 
  
   
  console.log(starCount)

}




console.log(starCount.ratings)  


    const [ratings, setRatings] = useState([]); // Store all user ratings
     const [currentRating, setCurrentRating] = useState(null); // Store the rating selected by the user
     const [averageRating, setAverageRating] = useState(0); // Store the calculated average rating
     const [showModal, setShowModal] = useState(false); // Modal initially visible

     
   
     // Function to handle the rating change
     const handleRatingChange = (e) => {
       setCurrentRating(Number(e.target.value)); // Update the selected rating
     };


   
     // Function to submit the rating
     const handleSubmit = () => {
      
       if (currentRating === null) {
         alert("Please select a rating before submitting!");
         console.log(currentRating)
         return;
       }

       
       
         
   

       // Add the new rating to the ratings array
       const updatedRatings = [...ratings, currentRating];
       setRatings(updatedRatings);
   
       // Recalculate the average rating
       const sum = updatedRatings.reduce((acc, rating) => acc + rating, 0);
       const average = (sum / updatedRatings.length).toFixed(1); // Round to 1 decimal place
       setAverageRating(average);
       console.log(average)
     
          

   
      
       setCurrentRating(null);
       console.log(ratings)
       
         // Close the modal
 
      localStorage.setItem("hasRated", "true")

     };
   
     
  
   





  return (
    <div className="">




        <div className="container text-center Modal">
      


      {/* Bootstrap Modal */}
     

          <Modal show={showModal} onHide={() => setShowModal(false)} centered 
          className=" "  >
           
           
         
    
             
 
    
    <div class=" text-center card card3">
    
        <div class="circle-image">
            <img src="/images/py1.gif" width="50" className="img-fluid "/>
        </div>
    
            <span class="dot"></span>
    
        <span class="name mb-1 fw-500"></span>
        <small class="text-black-50"></small>
        <small class="text-black-50 font-weight-bold"></small>
    
    
    
        <div class="location mt-4">
          {
            /**
             * <span class="d-block">
                <i class="fa fa-map-marker start"></i>
                 <small class="text-truncate ml-2"></small>
                  </span>

                   <span>
                <i class="fa fa-map-marker stop mt-2">
                    </i> <small class="text-truncate ml-2">DLK</small>
                     </span>

             */
          }
    
            
    
            <span>
                 <small class="text-truncate ml-2">Rate Your Learning Experience</small>
                     </span>
            
        </div>
    
    
        <div class="rate bg-success py-3 text-white mt-3">
    
            <h6 class="mb-0">Your feedback helps us improve and create better content for you!</h6>
    
            {/*<div className="rating">
            <input type="radio" name="rating" value={5} id="5" onChange={handleRatingChange1} />
            <label htmlFor="5">☆</label>
            <input type="radio" name="rating" value= {4} id="4" onChange={handleRatingChange1} />
            <label htmlFor="4">☆</label>
            <input type="radio" name="rating" value= {3} id="3" onChange={handleRatingChange1} />
            <label htmlFor="3">☆</label>
            <input type="radio" name="rating" value={2} id="2" onChange={handleRatingChange1} />
            <label htmlFor="2">☆</label>
            <input type="radio" name="rating" value={1} id="1" onChange={handleRatingChange1} />
            <label htmlFor="1">☆</label>
          </div>*/}



       <div className="rating ">
               {/* Render radio buttons for rating */}
               {[5,4,3,2,1].map((value) => (
                 <React.Fragment key={value}>
                   <input
                     type="radio"
                     name="rating"
                     value={value}
                     id={`rating-${value}`}
                     checked={starCount.currentstarRating === value}
                     onChange={handlestarrating}
                   />
                   <label className="p-0 m-0" htmlFor={`rating-${value}`}>☆</label>
                 </React.Fragment>
               ))}
             </div>

              <h1>{starCount.currentstarRating}</h1>
              <h1>{starCount.name}</h1>
    
            <div class="buttons px-4 mt-0">
    
            <button class="btn btn-warning btn-block rating-submit"  onClick={handleStarSubmit }>Submit</button>
            
            {/*<h6>Average Rating: {calculateAverageRating()}</h6>
            <h6>Total Ratings: {ratings.length}</h6>*/}
            
        </div>
    
            
        </div>
    
    
    
    
        
        
    </div>
    
    
    
    
    
         
            
          </Modal> 
       
     
    </div>

    </div>
  )
}

export default StartRatingModel