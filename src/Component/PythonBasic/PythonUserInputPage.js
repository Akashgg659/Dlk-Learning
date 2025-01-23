import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const PythonUserInputPage = () => {
  return (
      <>
      <div className='paddownforcol'>
      
      <div>
   <h1>User Input

   </h1> 
 </div>
 
 <div>
   <p className='text-justify wid'>The input() function is a built-in feature in Python that allows you to interact with users by taking input directly from them. Here's why it's important:

</p>  
 </div>
 <div className='wid pt-4'>
   <h4>Features of UserInput
</h4>  
 </div>

 <div className='text-justify wid '>
  <ul className='row p-2 text-dark'>
<li><b>Dynamic Input:</b> input() enables your programs to adapt to user needs, making them interactive and flexible.
</li>
<li><b>Real-Time Data:</b> It collects data at runtime, allowing for real-time decision-making based on user responses.

</li>
<li><b>Versatility:</b> It can capture all types of user data as strings, which can be converted into other data types as needed.

</li>
<li><b>User Interaction: </b>  It enhances the user experience by making programs more engaging and interactive</li>
    </ul> 
 </div>
 <div className='text-justify wid'>
   <p><b>raw_input() in Python
   </b>
</p>  
 </div>
 <div className='text-justify wid'>
   <p>In Python 2, the raw_input() function was used to read user input as a string.


</p>  
 </div>
 <div className='text-justify wid'>
   <p>Unlike input() in Python 2, which evaluates the input as a Python expression, raw_input() always returns a string.


</p>  
 </div>
 <div className='text-justify wid'>
   <p> Starting with Python 3, raw_input() was removed, and its behavior was merged into input(). Now, input() in Python 3 always returns a string, just like raw_input() used to.



</p>  
 </div>
 <div className='text-justify wid'>
   <p>Example in Python 2:


</p>  
 </div>

 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariable3">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>user_input = raw_input("Enter your name: ")



</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print("Hello, " + user_input)



</p>


    </div>
    </div>
    <div class="section grey">
      <button className="try">Try it Yourself</button>
    </div>
  </div>
 

 
 
 
 <div className='text-justify wid'>
<p>Equivalent in Python 3:

</p>

 </div>
 

 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariable2">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>user_input = input("Enter your name: ")




</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print("Hello, " + user_input)




</p>


    </div>
    </div>
    <div class="section grey">
      <button className="try">Try it Yourself</button>
    </div>
  </div>
 

 <div className='text-justify wid'>
  <p><b>Using the prompt Parameter in input()</b>

  </p> 
 </div>


 <div className='text-justify wid'>
   <p>
  
   The input() function includes a prompt parameter, which is a string displayed to the user to guide them on what to enter.


</p>  
 </div>
 <div className='text-justify wid'>
   <p>
   The prompt helps improve clarity by explaining what the program expects.



</p>  
 </div>
 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariable2">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>name = input("What is your name? ")





</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print("Welcome, " + name)




</p>


    </div>
    </div>
    <div class="section grey">
      <button className="try">Try it Yourself</button>
    </div>
  </div>
 

 
 
 <div className='text-justify wid'>
   <p>
   The text "What is your name? " serves as a prompt to guide the user.


</p>  
 </div>
 <div className='text-justify wid '>
   <p>
   Default Behavior Without Prompt:



</p>  
 </div>
 <div className='text-justify wid '>
   <p>If no prompt is provided, the user is not given clear instructions.



</p>  
 </div>

 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariable2">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>value = input()  # No prompt text





</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print("You entered:", value)




</p>


    </div>
    </div>
    <div class="section grey">
      <button className="try">Try it Yourself</button>
    </div>
  </div>
 
 
 <div className='text-justify wid bgyellow'>
   <p className='ps-5 pe-5'><b>Note:</b>Input is always captured as a string. To use numbers or other data types, you must explicitly convert the input.

</p>  
 </div>



 <div className="text-dark mt-4 mb-4">
  <div className="section grey">
    <p className='text-justify wid mgn'>Example</p>
  </div>
  <div className="section whitevariable2">
    <div className="lop gy">
      <p className='text-justify fnt wid mgn whitevariablep1'>age = int(input("Enter your age: "))






</p>
<p className='text-justify fnt wid mgn whitevariablep1'>print("You will be " + str(age + 1) + " years old next year.")





</p>


    </div>
    </div>
    <div class="section grey">
      <button className="try">Try it Yourself</button>
    </div>
  </div>
 
 

      </div>
   
   
 
      <div className="d-flex justify-content-end">
        <Link to={"/python/datatypes"} className="button-link m-1">
          <button className="button bg-primary text-white " onClick={(e) => e.preventDefault()}>Prev</button>
        </Link>
        <Link to={"/python/numberspage"} className="button-link m-1">
          <button className="button bg-primary text-white ">Next</button>
        </Link>
      </div>


 </>
  )
}

export default PythonUserInputPage
