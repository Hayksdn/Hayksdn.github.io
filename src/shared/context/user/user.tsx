import { ReactNode, useEffect, useState } from 'react'

import { UserContext } from './userContext'
import axios from 'axios'

type UserProps = {
  children: ReactNode
}

export const User = ({ children }: UserProps) => {
  const [user, setUser] = useState<boolean | null>(null)

  const fetchUser = async () => {
    try {
      const res = await axios.get('/check-auth', { withCredentials: true })
      setUser(res.data.user ? true : false) 
    } catch (err) {
      setUser(false) 
    }
  }

  useEffect(() => {
    fetchUser() 
  }, [])
  const value = {
   user,setUser
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
