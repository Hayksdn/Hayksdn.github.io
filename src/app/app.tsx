import { lazy } from 'react'

import { Layout } from '@/shared/components/layout/layout'
import { Protected } from '@/shared/components/layout/protected'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { About } from './about'
import { Account } from './account'
import { Cart } from './cart'
import { Checkout } from './checkout'
import { Contact } from './contact'
import { ForgotPassword } from './forgotPassword'
import { Login } from './login'
import NotFound from './notFound'
import { ProductPage } from './productPage'
import { ResetPassword } from './resetPassword'
import { SignUp } from './signup'
import { VerificationPage } from './verificationEmail'
import { WishList } from './wishList'

const Root = lazy(() => import('./root/index'))
axios.defaults.baseURL = 'http://localhost:3000/'
axios.defaults.withCredentials = true

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/wishList' element={<WishList />} />
          <Route path='/signup' element={<SignUp />} />
          <Route
            path='/verify-email'
            element={
              <Protected>
                <VerificationPage />
              </Protected>
            }
          />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password/:token' element={<ResetPassword />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/myAccount'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
