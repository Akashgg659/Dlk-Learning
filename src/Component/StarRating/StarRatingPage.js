import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // FontAwesome Icons

const StarRatingPage = () => {
    const [rating, setRating] = useState(0); // Tracks the current rating
  const [hover, setHover] = useState(0);  // Tracks the hover state

  
  return (
    <div>


  







  <div class="container d-flex justify-content-center mt-5">

        <div class="card card3 text-center mb-5">

            <div class="circle-image">
                <img src="/images/py1.gif" width="50" className="img-fluid p-1"/>
            </div>

                <span class="dot"></span>

            <span class="name mb-1 fw-500">who it's</span>
            <small class="text-black-50"></small>
            <small class="text-black-50 font-weight-bold"></small>



            <div class="location mt-4">

                <span class="d-block">
                    <i class="fa fa-map-marker start"></i>
                     <small class="text-truncate ml-2">Ganesha Road, preet vihar new delhi</small>
                      </span>

                <span>
                    <i class="fa fa-map-marker stop mt-2">
                        </i> <small class="text-truncate ml-2">Mandir Road, Mayur vihar, new delhi</small>
                         </span>
                
            </div>


            <div class="rate bg-success py-3 text-white mt-3">

                <h6 class="mb-0">Rate your driver</h6>

                <div class="rating"> 
                    <input type="radio" name="rating" value="5" id="5"/>
                    <label for="5">☆</label> <input type="radio" name="rating" value="4" id="4"/>
                    <label for="4">☆</label> <input type="radio" name="rating" value="3" id="3"/>
                    <label for="3">☆</label> <input type="radio" name="rating" value="2" id="2"/>
                    <label for="2">☆</label> <input type="radio" name="rating" value="1" id="1"/>
                    <label for="1">☆</label>
                </div>


                <div class="buttons px-4 mt-0">

                <button class="btn btn-warning btn-block rating-submit">Submit</button>
                
            </div>

                
            </div>




            
            
        </div>
        


    </div>

        </div>
  )
}

export default StarRatingPage