// React
import { createContext, useContext } from 'react'
// Types
import { Dispatch, ReactNode, SetStateAction, useState } from 'react'

export type CartContextProps = {
  activeCartItems: { [key: string]: { quantity: number } }
  setActiveCartItems: Dispatch<
    SetStateAction<{ [key: string]: { quantity: number } }>
  >
  cartTotal: number
  setCartTotal: Dispatch<React.SetStateAction<number>>
}

export const CartContext = createContext<CartContextProps | null>(null)

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === null) {
    throw new Error("useCart can't be undefined")
  }

  return context
}
