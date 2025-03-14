import { ForgotPasswordFormValues } from '@/app/forgotPassword'
import { LoginFormValues } from '@/app/login'
import { ResetPasswordFormValues } from '@/app/resetPassword'
import { SignUpFormValues } from '@/app/signup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { useUser } from '../context/user/userContext'

export const useAuthActions = () => {
  const navigate = useNavigate()
  const { user, setUser } = useUser()

  const registerUser = async (data: SignUpFormValues) => {
    const { name, email, password } = data

    try {
      const { data } = await axios.post(
        '/signup',
        { name, email, password },
        { withCredentials: true }
      )

      if (data.error) {
      } else {
        navigate('/verify-email')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const verificationEmail = async (codeArray: string[]) => {
    const code = codeArray.join('')

    try {
      const { data } = await axios.post(
        '/verify-email',
        { code },
        { withCredentials: true }
      )

      if (data.error) {
      } else {
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const loginUser = async (data: LoginFormValues) => {
    const { email, password } = data

    try {
      const { data } = await axios.post(
        '/login',
        { email, password },
        { withCredentials: true }
      )

      if (data.error) {
      } else {
        setUser(true)
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const forgotPassword = async (data: ForgotPasswordFormValues) => {
    const { email } = data

    try {
      const { data } = await axios.post(
        '/forgot-password',
        { email },
        { withCredentials: true }
      )

      if (data.error) {
      } else {
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const resetPassword = async (data: ResetPasswordFormValues) => {
    const { password } = data

    try {
      const { data } = await axios.post(
        '/reset-password',
        { password },
        { withCredentials: true }
      )

      if (data.error) {
      } else {
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout = async () => {
    try {
      await axios.post('/logout', {}, { withCredentials: true })
      setUser(false)
      navigate('/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return {
    registerUser,
    verificationEmail,
    loginUser,
    forgotPassword,
    resetPassword,
    handleLogout,
  }
}
