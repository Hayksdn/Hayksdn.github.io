import { ReactNode, useState } from 'react'

import { CartContext } from './CartContext'

type CartProps = {
  children: ReactNode
}

export const Cart = ({ children }: CartProps) => {
  const [activeCartItems, setActiveCartItems] = useState(
    localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart') || '')
      : []
  )
  const [cartTotal, setCartTotal] = useState(0)

  const value = {
    activeCartItems,
    setActiveCartItems,
    cartTotal,
    setCartTotal
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
