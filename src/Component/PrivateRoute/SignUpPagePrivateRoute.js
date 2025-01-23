import React from 'react'
import { Navigate, Route, useNavigate } from 'react-router-dom'

const SignUpPagePrivateRoute = ({component:Component, allowlogout = false, ...rest }) => {
 const islogin = localStorage.getItem('jwt-token')?true : false

  return (
    <Route
    {...rest}
    render = { (props) =>{

        if (allowlogout && islogin) {
            // If the user is logged in, redirect them away from logged-out-only pages
            return <Navigate to="/" />;
          }
  
          // If access is allowed, render the specified component
          return <Component {...props} />;
           
        }
    }
    
    
    
    
    
    
    
    
    />

   
  )
}

export default SignUpPagePrivateRoute