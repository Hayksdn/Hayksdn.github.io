import { ReactNode, useState } from 'react'

import { WishListContext } from './wishListContext'

type WishListProps = {
  children: ReactNode
}

export const WishList = ({ children }: WishListProps) => {
  const [activeWishListItems, setActiveWishListItems] = useState(
    localStorage.getItem('wishList')
      ? JSON.parse(localStorage.getItem('wishList') || '')
      : []
  )

  const value = {
    activeWishListItems,
    setActiveWishListItems,
   
  }

  return <WishListContext.Provider value={value}>{children}</WishListContext.Provider>
}
