import React, { createContext, useState } from 'react'
export const SignupAuthContext = createContext()

export const SignUpAuthProvider = ({children}) => {
    const[auth, setAuth] = useState(false)  // Store the selected code snippet
  return (
    <SignupAuthContext.Provider value ={{auth, setAuth}}>
         {children}
    </SignupAuthContext.Provider>
  )
}
