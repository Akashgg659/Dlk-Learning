import React from 'react'
import { useGoogleLogin } from '@react-oauth/google'; // Import the Google login hook

const Googlesignin = () => {
     // Set up the Google login function
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log('Success! Access token:', tokenResponse.access_token);
      // Here you can send the access token to your backend for further processing
    },
    onError: (error) => {
      console.log('Google login failed: ', error);
    },
})

  return (
    <button onClick={login} className="btn btn-primary">
    <i className="fab fa-google"></i> Sign in with Google
    </button>
  )
}

export default Googlesignin