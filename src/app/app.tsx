import { lazy } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from 'shared/layout'

import { About } from './about'
import { Account } from './account'
import { Cart } from './cart'
import { Checkout } from './checkout'
import { Contact } from './contact'
import { Login } from './login'
import NotFound from './notFound'
import { ProductPage } from './productPage'
import { SignUp } from './signup'
import { WishList } from './wishList'

const Root = lazy(() => import('./root/index'))

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
          <Route path='/login' element={<Login />} />
          <Route path='/myAccount' element={<Account />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
