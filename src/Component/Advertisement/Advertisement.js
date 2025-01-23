import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import '../Css/Advertisement.css'

const Advertisement = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate()

  // Close the advertisement
  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null; // Hide the ad when it's dismissed

const check = true

  const handleGrab = () =>{
    if(check){
      navigate('/errorpage');

    }
    
  }

  return (
    <div
      className="position-fixed container  border rounded shadow-lg container-fluid imgbgset     "
      style={{ width: '99.98%', zIndex: 1045,
        maxWidth: '99.98%'
       }}
    >
      <button
        type="button"
        className="btn-close position-absolute top-0 end-0 p-2"
        aria-label="Close"
        onClick={handleClose}
      ></button>
    

      <div className='text-center  d-flex justify-content-center row  '
         style={{
          
           
            objectFit: 'contain', // Ensures the image fits nicely within the dimensions
          }}>


            <div className='d-flex justify-content-end col-6 mt-2' >
            <h4 className='text-center '>Best Offer Upto </h4>
           
            <h4 className='text-center ps-2 pe-2' > 25 <span className='text-danger'>%</span></h4>
            </div>
       
            <div className='d-flex justify-content-start col-5   ' >
            <button className=' rounded  btn btn-outline-danger  txtcolad ' onClick={handleGrab}>Grab Your Offer</button>
            </div>

                   

        </div>

        
    
    </div>
  );
};

export default Advertisement;
