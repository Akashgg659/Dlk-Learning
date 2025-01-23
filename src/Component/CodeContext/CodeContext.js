import React, { createContext, useEffect, useState } from 'react'
export const CodeContext = createContext()

export const CodeProvider = ({children}) => {
    const[selectedcode, setSelectedCode] = useState(()=>{
      const savedcode = sessionStorage.getItem('selectedcode')
      return savedcode? savedcode : ""
    })  

useEffect(()=>{
  if(selectedcode){
    
     sessionStorage.setItem('selectedcode', selectedcode)
  }
  
  
},[selectedcode])

  return (
    <CodeContext.Provider value ={{selectedcode, setSelectedCode}}>
         {children}
    </CodeContext.Provider>
  )
}

