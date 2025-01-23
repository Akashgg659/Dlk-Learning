import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'



const PythonInstallationPage = () => {

   const location = useLocation();

   useEffect(() => {
       // Reset page-specific state here
   }, [location.pathname]);
 
   
  return (
      <div className='paddownforcol'>
   
    <div id=''>
   <h1>Python Installation</h1> 
 </div>

 <div>
   <p className='text-justify wid'>Download the most recent version of Python by going to https://www.python.org. We will install Python 3.11.3 on our Windows computer during this procedure. The following page will appear when we click on the aforementioned link.

</p>  
 </div>
 <div>
    <img className="img-fluid pt-3 " src='/images/firststep.png' alt="DLK Image" width={1000}   />
    </div>
 <div className='text-justify wid pt-4'>
   <h3><b>Step - 1: Select the Python's version to download.</b>

</h3>  
 </div>
 <div className='wid'>
   <p>Click on the download button to download the exe file of Python.
</p>  
 </div>
 <div>
    <img className="img-fluid pt-3 " src='/images/secondstep.png' alt="DLK Image" width={1000}   />
    </div>
 <div className='text-justify wid'>
   <p>Incase you wish to download a certain Python version, you can then see alternative versions from 2 and 3 by scrolling down further below. Next to the version number you wish to download, click the "download" option.
</p>  
 </div>
 <div>
    <img className="img-fluid pt-3 " src='/images/thirdstep.png' alt="DLK Image" width={1000}   />
    </div>
 
 <div className='pt-4'>
   <h3><b>Step - 2: Click on the Install Now</b>

</h3>  
 </div>
 <div className='text-justify wid'>
   <p>Double-click the executable file, which is downloaded.
</p>  
 </div>
 <div className='text-justify wid'>
   <p>The window that follows will open. The Python path will be automatically configured when you click the Add Path check box. Also click the checkbox above.
</p>  
 </div>
 <div>
    <img className="img-fluid pt-3 " src='/images/fourthstep.png' alt="DLK Image" width={1000}   />
    </div>
 <div className='text-justify wid pt-3'>
   <p>Choose Customize installation now, then continue. Additionally, we can select the location and features we want by clicking on the customize installation button. Installing the launcher for every user is another crucial step that needs to be verified.
</p>  
 </div>
 <div className='text-justify wid'>
   <p>Click the "Install Python 3.11 for all users" checkboxes, which were not previously ticked, under the advanced options section. This will automatically check the other option, "Precompile standard library." Additionally, the installation's position will be altered. We keep the install location set to default as we can modify it later. After that, click the install button to complete the installation.
</p>  
 </div>
  
 <div className='pt-4'>
   <h3><b>Step - 3 Installation in Process
   </b>
</h3>  
 </div>
<div>
    <img className="img-fluid pt-3 " src='/images/fifthstep.png' alt="DLK Image" width={1000}   />
    </div>
    <div className='text-justify wid'>
   <p>The setup is underway. Our system will have all of the Python default files, libraries, and packages installed. The page that reads "Setup was successful" will show up after the installation is complete.
</p>  
 </div>
 <div>
    <img className="img-fluid pt-3 " src='/images/sixthstep.png' alt="DLK Image" width={1000}   />
    </div>
    <div className='pt-4'>
   <h3><b>Step 4: Checking the Installation of Python
</b>
</h3>  
 </div>
 <div className='text-justify wid'>
   <p><b>5. Extensive Libraries and Frameworks</b><br/>
Python has a rich set of standard libraries and frameworks that simplify tasks like web development (Django, Flask), data analysis (Pandas, NumPy), machine learning (TensorFlow, Scikit-learn), and more.
</p>  
 </div>
 <div className='text-justify wid'>
   <p>We must take the following actions to confirm whether Python is installed on our machine.
</p>  
 </div>
 <div className='text-justify wid'>
   <p><ul className='row p-5 text-dark'>
    <li>Click the "Start" button and type "cmd."</li>
    <li>Next, enter "python - - version."
    </li>
    <li>The version of Python installed can be seen if the installation was successful.
</li>
<li>The error message 'python' is not recognized as an internal or external command, operable program, or batch file." will appear if it is not installed.
</li>
</ul>
</p>  
 </div>
 <div>
    <img className="img-fluid pt-3 " src='/images/seventhstep.png' alt="DLK Image" width={1000}   />
    </div>
 <div className='text-justify wid'>
   <p>Now we are ready to work with python.
</p>  
 </div>

 <div className="d-flex justify-content-end">
 <Link to={"/python/intro"}  className="button-link m-1">
     <button className="button bg-primary text-white "   onClick={(e) => e.preventDefault()}>Prev</button>
 </Link>
   <Link to={"/python/hello "} className="button-link m-1">
     <button className="button bg-primary text-white ">Next</button>
   </Link>
 </div>

 </div>
  )
}

export default PythonInstallationPage
