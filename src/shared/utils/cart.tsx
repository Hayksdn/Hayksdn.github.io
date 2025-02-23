import { Products } from '../components/products'

export const getUpdatedCartData = ({
  itemId,
  quantity,
  method,
}: {
  itemId: number
  quantity: number
  method: 'combine' | 'set'
}) => {
  const oldCartData = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart') || '')
    : []
  let newCartData

  if (method === 'combine') {
    newCartData = {
      ...oldCartData,

      [itemId]: {
        quantity: oldCartData[itemId]?.quantity
          ? oldCartData[itemId]?.quantity + quantity
          : quantity,
      },
    }
  } else if (method === 'set') {
    newCartData = {
      ...oldCartData,

      [itemId]: {
        quantity,
      },
    }
  }

  return newCartData
}

export const updateCartTotal = (activeCartItems: {
  [key: string]: { quantity: number }
}) => {
  let newTotal = 0
  {
    Object.entries(activeCartItems).map(([id, value]) => {
      const product = Products.find((product) => product.id === Number(id))
      console.log(product)
      newTotal += Number(product?.currentPrice.slice(1)) * value?.quantity
    })
  }
  return newTotal
}
