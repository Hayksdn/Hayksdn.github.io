import { WishListContextProps } from '../context/wishList/wishListContext'

export const getUpdatedWishListData = ({
  itemId,
  liked,
}: {
  itemId: number
  liked: boolean
}) => {
  const oldWishListData = localStorage.getItem('wishList')
    ? JSON.parse(localStorage.getItem('wishList') || '')
    : []
  let newWishListData = { ...oldWishListData }

  if (liked) {
    newWishListData[itemId] = { liked: true }
  } else {
    delete newWishListData[itemId]
  }

  return newWishListData
}

export const getMoveWishlistToCartData = ({
  activeWishListItems,
}: {
  activeWishListItems: WishListContextProps['activeWishListItems']
}) => {
  const oldCartData = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart') || '')
    : []
  let newCartData = { ...oldCartData }

  Object.keys(activeWishListItems).forEach((key) => {
    newCartData[key] = {
      quantity: oldCartData[key]?.quantity ? oldCartData[key].quantity + 1 : 1,
    }
  })
  return newCartData
}
