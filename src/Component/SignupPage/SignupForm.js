import React, { useContext, useEffect, useRef, useState } from 'react'
import '../Css/SignUpform.css'
import { refreshToken, register } from '../Services/AuthService'
import axios from 'axios'
import { SignupAuthContext } from '../SignUpAuthenticationContext/SignUpAuthenication'
import { useNavigate } from 'react-router-dom'


const SignupForm = () => {

  const usernameRef= useRef(null)
  const logindivRef = useRef(null)
	
	const [message, setMessage] = useState('')

	const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: ""  });

	
	const navigate = useNavigate()
	const [fill, setFill] = useState(false)

	const {setAuth} = useContext(SignupAuthContext)
	

	  const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
		  ...formData, 
		  [name]: value // Update the specific field
		});
	  };


	    



  // Handle form submission
  const handleRegister2 = async (e) => {
    e.preventDefault();
   
	
	 // Basic client-side validation (check if passwords match)
	 if (formData.password !== formData.confirmPassword) {
		alert("Passwords do not match.");
	  return ;

	  
	 }


	 if (!formData.name) {
		
		setFill(true)
		return;  
	  }
	  if (!formData.email) {
		
		setFill(true)
		return;  
	  }
	  if (!formData.password) {
		
		setFill(true)
		return;  
	  }
	  if (!formData.confirmPassword) {
		
		setFill(true)
		return;  
	  }
	

    console.log("Sending form data:", formData); // Log the form data



    try {
      


      const response = await axios.post(`https://dhanamfoundation.org/api/register/`, formData, {
        headers: {
          'Content-Type': 'application/json',
        }
	
      });
	
	  localStorage.setItem('name', formData.name);
	  

	  setShowLogin(true)

	  if (logindivRef.current) {
		logindivRef.current.scrollIntoView({ behavior: "smooth" });
	  }
      console.log(response.data);
      setMessage(response.data.message);
    } catch (error) {
		console.error("Error registering user:", error.response ? error.response.data : error.message);
		// Handle error (e.g., show error message to user)
	}
  };


const handlefill = (e)=>{
	e.preventDefault()
	setFill(false)
	setLoginfill(false)
}

  const [loginformdata, setLoginFormdata] = useState({
	email: '',
	password:''
  })

  const handleLoginInputChange = (e)=>{
	const {name, value} = e.target;
	setLoginFormdata({
		...loginformdata,
		[name] : value
	})
  }


  const[store, setStore] = useState('')
  const [loginfill, setLoginfill] = useState(false)

  const handleLogin = async(e)=>{
	e.preventDefault()

	if(!loginformdata.email){
		setLoginfill(true)
		return
	}
	if(!loginformdata.password){
		setLoginfill(true)
		return
	}

	try{
		const response = await axios.post(`https://dhanamfoundation.org/api/login/`, loginformdata);
		
          console.log(response.data)
		  const  jwt = response.data;
	
		  localStorage.setItem('jwt_token', jwt['jwt token'])
		  setAuth(true)
		  localStorage.setItem("hasRated", true);
         
		 
           
		  alert("Login successful!");
		  navigate("/")
	  }
	   catch (error) {
		console.error("Error:", error.response ? error.response.data : error.message);
		alert("Invalid credentials.");
	  }
	

  }

 

 
  const handleLogout = async () => {
	const refreshjwt = localStorage.getItem('jwt_token'); 
  
	try {
	  // Make logout API call
	  if (refreshjwt) {
		const response = await axios.post('https://dhanamfoundation.org/api/logout/', {
		  refresh: refreshjwt, // Send refresh token
		});
		setAuth(false)
		localStorage.removeItem('jwt_token');
		localStorage.removeItem('name');
  
		console.log('Logout response:', response.data); // Optional: Check the response
	  }
	} catch (error) {
	  console.error('Logout error:', error.response ? error.response.data : error.message);
	} finally {
	  // Clear tokens and other user data from localStorage
	  localStorage.removeItem('jwt_token');
	 
  
	  // Redirect user to login page

	}
  };
  

  const [showlogin , setShowLogin] = useState(false)


  return (
    <>



	<div class="main">  

{
	localStorage.getItem('jwt_token')?<button onClick={handleLogout}>logout</button>:<></>
}



		<input type="checkbox" id="chk" aria-hidden="true"/>

		

			<div class="signup  ">
				<form onSubmit={handleRegister2}>
					
					<label for="chk" aria-hidden="true" className='signuptext  '>Sign up</label>
					
					<input type="text"
					 name="name" 
					value={formData.name}
					
					onChange={handleInputChange}
					className='p-3'
					placeholder="User name" 
					required=""/>
					<input type="email" 
					name="email" placeholder="Email" required=""
					value={formData.email} 
					onChange={handleInputChange}
					className='p-3'/>
          
					<input type="password" 
					name="password" placeholder="Password" required=""
					className='p-3'
					value={formData.password}
					onChange={handleInputChange}/>

                    <input type="password" 
					name="confirmPassword" placeholder="Confirm Password" required=""
					className='p-3'
					value={formData.confirmPassword}
					onChange={handleInputChange}/>
					
                    { (fill === true)?
					<h6 className='text-center text-danger' onClick={handlefill}>Please Fill the form</h6>:<></>}

					<button type='submit' className='buttonform'>Sign up</button>
				</form>
			</div>

			{  <div class="login   " ref={logindivRef}>
				<form onSubmit={handleLogin}>
					<label for="chk" aria-hidden="true " className='  '>Login</label>
					<input type="email"
					 name="email" placeholder="Email"
					 value={loginformdata.email}
					 onChange={handleLoginInputChange}
					  required=""
					className='p-3'/>
					<input type="password" 
					name="password" placeholder="Password"
					value={loginformdata.password}
					onChange={handleLoginInputChange}
					 required=""
					className='p-3'/>
					 { (loginfill === true)?
					<h6 className='text-center text-danger p-0' onClick={handlefill}>Please Fill the form</h6>:<></>}

					<button type='sumbit' className='buttonform'>Login</button>
				</form>
			</div>  

			}

			



			
	</div>

	


    </>
  )
}

export default SignupForm