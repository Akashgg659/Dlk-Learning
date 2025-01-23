import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';




const FestivalDatePick = () => {

   
    const [festivals, setFestivals] = useState([]);
    const [currentFestival, setCurrentFestival] = useState(null)


    useEffect(() => {
        const today = new Date();
        const currentMonthDay = today.toISOString().split('T')[0].slice(5); // MM-DD format
    
        // Festival Data: Only month and day, no year.
        const fixedFestivals = [
          { name: 'New Year ', date: '01-01', background: 'bg-newyear' },
         
          { name: 'Christmas Grab ', date: '12-25', background: 'bg-christmas' },
          { name: 'Valentine\'s Day', date: '02-14', background: 'bg-valentines' },
          { name: 'Independence Day', date: '07-04', background: 'bg-independence' },
          { name: 'Halloween', date: '10-31', background: 'bg-halloween' },
        ];

        // Diwali is a movable festival, calculated each year
    const getDiwaliDate = () => {
        const year = today.getFullYear();
        // Diwali date for 2024 (using simplified fixed date for demonstration purposes)
        const diwali = new Date(`11/12/${year}`);  // Replace with actual Diwali date calculation logic
        return diwali.toISOString().split('T')[0].slice(5); // MM-DD format
      };
  
      // Get today's date for Diwali comparison
      const diwaliDate = getDiwaliDate();
  
      // Combine fixed festivals with Diwali
      const allFestivals = [...fixedFestivals, { name: 'Diwali', date: diwaliDate, background: 'bg-diwali' }];
      setFestivals(allFestivals); // Set all festivals
  
      // Find festival for today
      const festival = allFestivals.find(f => f.date === currentMonthDay);
      setCurrentFestival(festival || null);
    
    

    },[])




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
    

<div className={`container-fluid  imgbgset mt1  position-fixed   ${currentFestival? currentFestival.background: ""}`}
   
       >




      <div className='d-flex justify-content-center'>



      <div className=''>
           
           {
            currentFestival?(
                <h2>{currentFestival.name} 25 <span className='text-danger'>%</span></h2>
            ): <> <div className='d-flex mt-2 ' >
            <h4 className='text-center '>Best Offer Upto </h4>
           
            <h4 className=' ps-2 pe-2' > 25 <span className='text-danger'>%</span></h4>
            </div></>
           }
        </div>


        <div className='d-flex ms-3 me-3   ' >
            <button className=' rounded  btn btn-outline-danger  txtcolad ' onClick={handleGrab}>Grab Your Offer</button>
            </div>

      </div>

      <button
        type="button"
        className="btn-close position-absolute top-0 end-0 p-2"
        aria-label="Close"
        onClick={handleClose}
      ></button>
    
        
    </div>

    
   
  )
}

export default FestivalDatePick