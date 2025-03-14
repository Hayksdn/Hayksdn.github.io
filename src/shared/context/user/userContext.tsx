// React
import { createContext, useContext } from 'react'
// Types
import { Dispatch, ReactNode, SetStateAction, useState } from 'react'

export type UserContextProps = {
user:boolean | null,
setUser:React.Dispatch<React.SetStateAction<boolean | null>>
}

export const UserContext = createContext<UserContextProps | null>(null)

export const useUser = () => {
  const context = useContext(UserContext)

  if (context === null) {
    throw new Error("useUser can't be undefined")
  }

  return context
}
