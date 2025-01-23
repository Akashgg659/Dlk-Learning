import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CodeContext } from '../CodeContext/CodeContext'


const PythonCommentsPage = () => {
  const {setSelectedCode} = useContext(CodeContext)
  const navigate =useNavigate()
  const examples = [
  {
    id:1,
    title: "Single Line Comments",
    code: `# This is a single-line comment

  print("Hello, World!") # This is an inline comment`

  },

  {
  id:2,
  title: "Multi Line Comments",
  code: `# This is a comment

# that spans multiple lines

print("Python comments!")`

},
{

  id:3,
  title: "Triple quotes:",
  code: `"""

This is a multi-line comment.

You can use triple quotes to write comments

across several lines.

"""

print("Python comments!")`

},
{
  id:4,
  title: "Bad Example",
  code: `x = 10 # Assign 10 to x`

},
{
  id:5,
  title: "Good Example",
  code: `x = 10 # The initial value for the calculation`

},





]

const handleRun = (code) =>{
  setSelectedCode(code)
  navigate('/compiler')

}

const targetId = 1; 
const targetId2 = 2; 
const targetId3 = 3; 
const targetId4 = 4;
const targetId5 = 5;

  return (
      <div className='paddownforcol'>

    <div >
   <h1>PYTHON COMMENTS
   </h1> 
 </div>

 <div>
   <p className='text-justify wid'>Importance of Comments in Coding
</p>  
 </div>
 
 <div className='text-justify wid  '>
   <ul className='row p-4 text-dark'>
    <li>Enhance Code Readability
    </li>
    <li>Serve as Documentation
</li>
<li>Aid in Debugging and Testing
</li>
<li>Provide Context for Complex Logic
</li>
<li>Encourage Collaboration and Maintenance
</li>
<li>Track Development Progress
</li>
   </ul>

  
 </div>
 <div className='wid pt-4'>
   <h4>Types of Comments in Python
</h4>  
 </div>

 <div className='text-justify wid pt-4'>
   <h5>1. Single Line Comments
</h5>  
 </div>
 
 
 
 <div className='text-justify wid text-dark' >
  <ul className='row p-3'>
    <li>Start with a <b>#</b> symbol.</li>
    <li>Everything after <b>#</b>  on that line is treated as a comment.</li>
    </ul> 
 </div>
 <div className=" mt-4 mb-4 text-dark">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section white">
    <div className="lop gy">
      <p className='text-justify wid mgn'># This is a single-line comment</p>
      <p className='fnt mgn'>print("Hello, World!")  # This is an inline comment</p>
    </div>
    </div>


    {
      examples.map((example)=>(

        example.id === targetId && (

        <div class="section greyt" key={example.id}>
        <button className="try" key={example.id}
        onClick={() => handleRun(example.code)}>Try it Yourself</button>
      </div>)
      )

      )
    }
  </div> 


 <div className='text-justify wid pt-4'>
   <h5>2. Multi Line Comments
</h5>  
 </div>
 <div className='text-justify wid'>
  <ul className='row p-3 text-dark'>
    <li>Python does not have a specific syntax for multi-line comments, but a common practice is to use a series of <b>#</b> or triple quotes ( <b>"""</b> or <b> '''</b> ) for comments that span multiple lines.</li>
   
    </ul> 
 </div>


 <div className='text-justify wid'>
   <p>
   Using <b>#</b> :
</p>  
 </div>
 <div className=" mt-4 mb-5 text-dark">
  <div className="section greyt">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitet">
    <div className="lop gy">
      <p className='text-justify wid mgn'># This is a comment</p>
      <p className='fnt mgn'># that spans multiple lines</p>
      <p className='fnt mgn'>print("Python comments!")</p>
    </div>
    </div>
    {
      examples.map((example)=>(

        example.id === targetId2 && (

        <div class="section greyt" key={example.id}>
        <button className="try" key={example.id}
        onClick={() => handleRun(example.code)}>Try it Yourself</button>
      </div>)
      )

      )
    }
  
  </div> 

<div className='text-justify wid pt-3'>
   <p>
   Using Triple quotes:
</p>  
 </div>
 <div className=" mt-4 mb-5 text-dark">
  <div className="section greys">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whites">
    <div className="lop gy">
      <p className='text-justify wid mgn whitemargin'>"""</p>
      <p className='fnt mgn whitemargin'>This is a multi-line comment.</p>
      <p className='fnt mgn whitemargin'>You can use triple quotes to write comments</p>
      <p className='fnt mgn whitemargin'>across several lines.</p>
      <p className='fnt mgn whitemargin'>"""</p>
      <p className='fnt mgn whitemargin'>print("Python comments!")</p>
    </div>
    </div>
    {
      examples.map((example)=>(

        example.id === targetId3 && (

        <div class="section greyt" key={example.id}>
        <button className="try" key={example.id}
        onClick={() => handleRun(example.code)}>Try it Yourself</button>
      </div>)
      )

      )
    }
  </div> 

 <div className='text-justify wid pt-3'>
   <p>
   Best Practices for Comments
</p>  
 </div>
 <div className='text-justify wid pt-4'>
   <h5>1. Keep Comments Relevant
</h5>  
 </div>
 <div className='text-justify wid pt-3'>
  <p>Update comments if you modify the related code to avoid confusion.</p>  
</div>
<div className='text-justify wid pt-4'>
   <h5>2. Avoid Obvious Comments
</h5>  
 </div>
 <div className='text-justify wid pt-3'>
  <p>Don’t state the obvious in your comments. Focus on explaining why the code is written a certain way, not just what it does.</p>  
</div>
<div className=" mt-4 mb-4 text-dark">
  <div className="section greyy">
    <p className="text-justify wid mgn">Bad Example</p>
  </div>
  <div className="section whitey">
    <div>
      <p className="text-justify wid">x = 10  # Assign 10 to x</p>
     
    </div>
    </div>
    
    {
      examples.map((example)=>(

        example.id === targetId4 && (

        <div class="section greyt" key={example.id}>
        <button className="try" key={example.id}
        onClick={() => handleRun(example.code)}>Try it Yourself</button>
      </div>)
      )

      )
    }
  </div>
  <div className="text-dark mt-4 mb-4">
  <div className="section greyy">
    <p className="text-justify wid mgn">Good Example</p>
  </div>
  <div className="section whitey">
    <div>
      <p className="text-justify wid ">x = 10  # The initial value for the calculation
      </p>
    </div>
    </div>
    {
      examples.map((example)=>(

        example.id === targetId5 && (

        <div class="section greyt" key={example.id}>
        <button className="try" key={example.id}
        onClick={() => handleRun(example.code)}>Try it Yourself</button>
      </div>)
      )

      )
    }
  </div>


<div className='text-justify wid pt-4'>
   <h5>3. Use Docstrings for Functions and Classes
</h5>  
 </div>
 <div className='text-justify wid pt-3'>
  <p>Use triple quotes to document functions and classes comprehensively.</p>  
</div>
<div className='text-justify wid pt-4'>
   <h5>4. Comment Code Blocks, Not Every Line
</h5>  
 </div>
 <div className='text-justify wid pt-3'>
  <p>Add comments for blocks of code, not every single line unless necessary.</p>  
</div>
<div className='wid pt-4'>
   <h4>Common Mistakes
</h4>  
 </div>
 <div className='text-justify wid'>
   <p>1.Writing too many comments that clutter the code.
</p>  
 </div>
  
 <div className='text-justify wid'>
   <p>
2.Using outdated comments that mislead the reader.
</p>  
 </div>

    <div className='text-justify wid'>
   <p>3.Overusing comments instead of writing self-explanatory code (e.g., meaningful variable names).
</p>  
 </div>

 
 <div className="d-flex justify-content-end">
 <Link to={'/python/hello'} className="button-link m-1">
     <button className="button bg-primary text-white ">Prev</button>
   </Link>
   <Link to={'/python/variable'}  className="button-link m-1">
     <button className="button bg-primary text-white ">Next</button>
     </Link>
 </div>
 
   
 </div>
  )
}

export default PythonCommentsPage
