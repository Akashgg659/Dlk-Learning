import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CodeContext } from '../CodeContext/CodeContext'


const HelloDLKPage = () => {
const navigate =  useNavigate()
const {setSelectedCode} = useContext(CodeContext)
  const example = [
    {
      id :1,
      title: "hello world",
      code: `print("Hello, World!")`
    }
  ]

  const handleRun = (code) => {
    setSelectedCode(code)
    navigate('/compiler')

    
  }

  return (
      <div className='paddownforcol'>
   
    <div id='top-div'>
   <h1><b>HELLO DLK!</b> PROGRAM IN PYTHON
   </h1> 
 </div>
 
 <div>
   <p className='text-justify wid'>Let us execute a Python program to print <b>Hello, DLK!</b> in two different modes of Python Programming.
</p>  
 </div>
 
 <div className='text-justify wid pt-3 '>
   <p><ol style={{ listStyleType: 'lower-alpha' }} className='row p-5 text-dark' >
    <li>Interactive Mode Programming</li>
    <li>Script Mode Programming.
</li>
   </ol>

</p>  
 </div>
 <div className='wid pt-4'>
   <h4>Python - Interactive Mode Programming
</h4>  
 </div>

 <div className='text-justify wid'>
   <p>Python provides us the feature to execute the Python statement one by one at the interactive prompt. It is preferable in the case where we are concerned about the output of each line of our Python program.
</p>  
 </div>
 
 
 <div className='wid'>
   <p>Open the terminal (or command prompt) and enter python or python3 if your system has both Python 2 and Python 3 to enter interactive mode.
</p>  
 </div>
 <div className='text-justify wid'>
   <p>The following prompt will appear, allowing us to run the Python statement and see how it affects the terminal.
</p>  
 </div>

 <div>
    <img className="img-fluid pt-3 " src='/images/interactiveimg.png' alt="DLK Image" width={1000}   />
    </div>
 <div className='text-justify wid'>
   <p>
After writing the print statement, press the Enter key.
</p>  
 </div>
 <div>
    <img className="img-fluid pt-3 " src='/images/interactiveimg2.png' alt="DLK Image" width={1000}   />
    </div>
    <div className='text-justify wid pt-3'>
  <p>Here, we get the message <span style={{ fontWeight: 'bold' }}>Hello DLK!</span> printed on the console.</p>  
</div>
<div className='wid pt-4'>
   <h4>Python - Script Mode Programming
</h4>  
 </div>
 <div className='text-justify wid'>
   <p>The best way to execute the code's single-line statements is through the interpreter prompt. We are unable to write the code on the terminal every time, though. Writing more than one line of code is not appropriate.
</p>  
 </div>
  
 <div className='pt-4 wid'>
   <p>
We can write numerous lines of code into a file that can be run later by using the script mode. In order to accomplish this, we must launch an editor such as Notepad, create a file, and save it with the "Python" extension (.py). We will now use the script mode to put the aforementioned example into practice.
</p>  
 </div>

    <div className='text-justify wid'>
   <p>Create a Python Script File
</p>  
 </div>
 
    <div className=' wid'>
   <p>Open a text editor (e.g., Notepad, VS Code, PyCharm, or any IDE you prefer).

</p>  
 </div>
 <div className='text-justify wid'>
   <p>Write your Python code. For example:
</p>  
 </div>
 
 <div className="pt-5 pb-5 mt-3 mb-3 text-dark">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section white">
    <div className="lop gy">
      <p className='text-justify wid mgn'># This is a Python script file</p>
      <p className='fnt mgn'>print("Hello, DLK!")</p>
    </div>
    </div>
    <div class="section grey">
      {
        example.map((example)=>(
          <button className="try" 
          onClick={() => handleRun(example.code)}
        >Try it yourself</button>

        ))
      }
      
    </div>
  </div> 





 <div className='text-justify wid'>
   <p>Save the file with a .py extension. For example, name it hello_dlk.py.
</p>  
 </div>
 
 <div className='text-justify wid'>
   <p>Run the Python Script using the Command Prompt (or Terminal):
</p>  
 </div>
 <div className='text-justify wid'>
   <p>Open the Command Prompt (Windows) or Terminal (macOS/Linux).
</p>  
 </div>
 <div className='text-justify wid'>
   <p>Navigate to the directory where your script file is saved using the cd command.
</p>  
 </div>
 <div className="pt-3 pb-3 mt-4 mb-4 text-dark">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section white">
    <div className="lop gy">
      <p className='text-justify wid mgn'>cd path/to/your/script</p>
      <p className='fnt mgn'>python hello_dlk.py  </p>
    </div>
    </div>
    <div class="section grey">
    {
        example.map((example)=>(
          <button className="try" 
          onClick={() => handleRun(example.code)}
        >Try it yourself</button>

        ))
      }
      
    </div>
  </div> 

<div >
   <p className='text-justify wid '>(Use python3 if python doesn’t work.)
</p>


 </div>
 <div >
   <p className='text-justify wid '>Congratulations! You've successfully executed your first Python program. 🎉

 
   </p>


 </div>

 <div className="d-flex justify-content-end">
 <Link to={'/python/installation'} className="button-link m-1">
     <button className="button bg-primary text-white ">Prev</button>
   </Link>
   <Link to={'/python/comments'}  className="button-link m-1">
     <button className="button bg-primary text-white ">Next</button>
     </Link>
 </div>
 </div>
  
)
}

export default HelloDLKPage
