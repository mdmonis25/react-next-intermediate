"use client"
import React, { createContext } from 'react'
export const MyContext = createContext()

const Contetxt = ({children}) => {
    const username = "Md Monis"
  return (
    <MyContext.Provider value={username}>
        {children}
    </MyContext.Provider>
  )
}

export default Contetxt