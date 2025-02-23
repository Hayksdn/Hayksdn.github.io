// React
import { createContext, useContext } from 'react'
// Types
import { Dispatch, ReactNode, SetStateAction, useState } from 'react'

export type WishListContextProps = {
  activeWishListItems: { [key: string]: { quantity: number } }
  setActiveWishListItems: Dispatch<
    SetStateAction<{ [key: string]: { quantity: number } }>
  >
}

export const WishListContext = createContext<WishListContextProps | null>(null)

export const useWishList = () => {
  const context = useContext(WishListContext)

  if (context === null) {
    throw new Error("useWishList can't be undefined")
  }

  return context
}
