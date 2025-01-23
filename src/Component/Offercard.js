import React from 'react'

const Offercard = ({ title, description, imageUrl, cta }) => {
  return (
    <div className="col-md-4 col-lg-12 mb-4 ">
    <div className="  justify-content-center m-3">
      <div className='d-flex justify-content-center sc'>
      <img src={imageUrl} height={50} width={400} className="img-fluid"   alt={title} />
      </div>

      <div className="m-3 justify-content-center text-center ">
        <h5 className="title times-roman-text text-white p-3">{title}</h5>
        <p className="text times-roman-text text-white ">{description}</p>
       
      </div>


    </div>
  </div>
  )
}

export default Offercard