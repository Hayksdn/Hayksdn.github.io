import { ReactNode, useEffect, useState } from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Protected = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const fetchUser = async () => {
    try {
      const res = await axios.get('/check-auth', { withCredentials: true })
      setUser(res.data.user)

      if (!res.data.user) {
        navigate('/')
      }
    } catch (err) {
      setUser(null)
      navigate('/')
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return user && children
}
