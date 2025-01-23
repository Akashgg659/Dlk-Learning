import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";


const HomeFooter = () => {


    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: false,    // Allow animation to run multiple times (not just once)
            disable: false, // Ensure animations are enabled for all devices
            offset: 100, // Trigger animation slightly before the element is in view

        });

    }, []);

    return (
        <>

            <div className='container-fluid  mb-3   homefootpad' data-aos="fade-up"
                data-aos-duration="3000" >



                <div className='text-center'
                >
                    <h1 className="box ">Get Started with<br></br>
                       <span className=''> DLK</span>  </h1>




                </div>






                <div className='d-flex justify-content-center mt-5 '>



                    <div>
                        <Link to={"/sign"} className=" px-3 mleft me-2 ms-2">
                            <button className='btn btn-outline-primary  p-3 '>Start Courses</button>
                        </Link>
                    </div>
                    <div>
                        <Link to={"/sign"} className=" px-3 mleft me-2 ms-2">
                            <button className='btn btn-outline-primary p-3 '>Join Internship</button>
                        </Link>
                    </div>



                </div>


            </div>

            <div className='container-fluid  '>

                <div className='row p-5 '>
                    <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12  '>

                        

                        <div className='mt-3 '>
                            <h3 className='text-success'> <b>CONTACT US</b></h3>
                        </div>

                        <div className='mt-4 pt-3'>
                            <h5 className='text-dark'>contact@DLKCareer.ai</h5>
                        </div>


                        <div className=' mt-3  '>



                            <div className='d-flex text-start  justify-content-start text-dark'>

                                



                                <div className='d-flex  '>
                                    <a href="https://www.facebook.com/DlkTechnologies/" className="nav-item nav-link ">
                                        <h4 className='p-2'><i class="fab fa-facebook "></i></h4>
                                    </a>


                                    <a href='https://www.instagram.com/dlk_tec' className='nav-item nav-link'>
                                        <h4 className='p-2'> <i class="fab fa-instagram"></i> </h4>
                                    </a>

                                    <a href='https://www.linkedin.com/company/dlktechnologies/' className='nav-item nav-link'>
                                        <h4 className='p-2'> <i class="fab fa-linkedin"></i> </h4>
                                    </a>

                                    <a href='https://x.com/dlktechnologie/' className='nav-item nav-link'>
                                        <h4 className='p-2'><i class="fab fa-twitter"></i> </h4>
                                    </a>

                                    <a href='https://www.youtube.com/@dlktechnologiesindiaprivat3300/featured' className='nav-item nav-link'>
                                        <h4 className='p-2'><i class="fab fa-youtube"></i> </h4>
                                    </a>

                                </div>

                            </div>


                            <p style={{ flexWrap: 'wrap' }} className='py-3 text-start text-dark '>DLK LEARNINGS is a top EdTech company focused on providing exceptional
                                learning resources for a wide range of technical and non-technical subjects, empowering
                                learners to achieve their goals.</p>

                        </div>


                        <div>
                            <p className=" text-start text-dark">
                                <span className=' text-dark '><b> © </b></span> <b>Copyright 2024. All Rights Reserved.</b> 







                            </p>
                        </div>


                    </div>

                    <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12  text-dark d-none d-lg-block d-xl-block d-md-block '>


                        <div className='d-flex '>

                            <div>


                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <h5 className=" times-roman-text mb-4 text-success"><b>TOP COURSEWARE</b>
                                        </h5>
                                        <a href='#' className=' text-dark ah '>Python Courseware
                                        </a> </div>





                                </div>
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className=' text-dark ah' > Java Courseware
                                        </a>
                                    </div>
                                </div>

                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark  ah'>C++ Courseware
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark  ah'>C Courseware
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark  ah'>C# Courseware
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark  ah'> JavaScript Courseware
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark  ah'>PHP Courseware
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark  ah'>R Courseware
                                        </a>
                                    </div>
                                </div>

                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark  ah'>AWS Courseware
                                        </a>
                                    </div>
                                </div>

                            </div>


                            <div className='text-dark'>
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <h5 className=" times-roman-text mb-4 text-success  "><b>TRENDING TECHNOLOGIES</b></h5>
                                        <a href='#' className='text-dark ah'>Cloud Computing  Courseware </a>
                                    </div>
                                </div>

                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark ah'>Amazon Web Services Courseware
                                        </a>
                                    </div>
                                </div>

                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark ah'>Microsoft Azure  Courseware</a>
                                    </div>
                                </div>
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark ah'>Git  Courseware</a>
                                    </div>
                                </div>
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark ah'>Ethical Hacking Courseware</a>
                                    </div>
                                </div>
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark ah'>Docker Courseware</a>
                                    </div>
                                </div>
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark ah'>Kubernetes Courseware</a>
                                    </div>
                                </div>

                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark ah'>DSA Courseware</a>
                                    </div>
                                </div>
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark ah'>Spring Boot Courseware</a>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <h5 className=" times-roman-text mb-5 text-success"><b>CERTIFICATIONS</b></h5>
                                        <a href='#' className='text-dark ah'>Java & Spring Boot  Certification</a>
                                    </div>
                                </div>

                               

                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark ah'>Data Science Advanced Certification</a>
                                    </div>
                                </div>
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark ah'>Cloud Computing And DevOps</a>
                                    </div>
                                </div>


                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark ah'>DevOps Certification</a>
                                    </div>
                                </div>

                                
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark ah'>Front-End Developer Certification</a>
                                    </div>
                                </div>
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark ah'>Back-End Developer Certification</a>
                                    </div>
                                </div>

                              




                            </div>


                            <div>
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <h5 className=" times-roman-text mb-4 text-success "><b>COMPILERS & EDITORSS</b></h5>
                                        <a href='#' className='text-dark ah'>Online Java Compiler</a>
                                    </div>
                                </div>

                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark ah'>Online Python Compiler
                                        </a>
                                    </div>
                                </div>

                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark ah'>Online Go Compiler</a>
                                    </div>
                                </div>
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark ah'>Online C Compiler</a>
                                    </div>
                                </div>
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark ah'>Online C++ Compiler</a>
                                    </div>
                                </div>
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className=' text-dark ah'>Online C# Compiler</a>
                                    </div>
                                </div>
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className='text-dark ah'>Online PHP Compiler</a>
                                    </div>
                                </div>

                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className=' text-dark ah'>Online SQL Compiler</a>
                                    </div>
                                </div>
                                <div className="d-flex p-1">

                                    <div className="pl-3 ">
                                        <a href='#' className=' text-dark ah'>Online Html Editor</a>
                                    </div>
                                </div>

                                
                                
                            </div>


                        </div>









                    </div>

                </div>

            </div>

        </>
    )
}

export default HomeFooter