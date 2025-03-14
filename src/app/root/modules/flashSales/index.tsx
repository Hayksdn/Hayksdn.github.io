import { useRef } from 'react'

import { Products } from '@/shared/components/products'
import { Navigation } from '@/shared/components/ui/navigation/'
import { Rectangle } from '@/shared/components/ui/rectangle'
import { useCart } from '@/shared/context/Cart/CartContext'
import { useWishList } from '@/shared/context/wishList/wishListContext'
import { getUpdatedCartData } from '@/shared/utils/cart'
import { GetRatingIcon } from '@/shared/utils/icons'
import { getUpdatedWishListData } from '@/shared/utils/wishList'
import { Box, Button, Card, Flex, Image, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import HeartIcon from 'shared/assets/icons/heart'
import QuickViewIcon from 'shared/assets/icons/quickView'
import TimerIcon from 'shared/assets/icons/timer'

import css from './flashSales.module.css'

export type Product = {
  id: number
  images: string[]
  discount?: string
  name: string
  currentPrice: string
  originalPrice?: string
  rating: string
  ratingCount: string
  quantity: number
  circleIcons?: string[]
  liked: boolean
  description?: string
  productColors?: string[]
}

export const FlashSales = () => {
  const { setActiveCartItems } = useCart()
  const { setActiveWishListItems } = useWishList()
  const flashSalesProducts = Products.slice(0, 6)

  const boxRef = useRef<HTMLDivElement | null>(null)
  const btnPressPrev = () => {
    const box = boxRef.current
    if (box) {
      if (box.scrollLeft > 0) {
        box.scrollLeft -= 450
      }
    }
  }

  const btnPressNext = () => {
    const box = boxRef.current
    if (box) {
      const maxScrollLeft = box.scrollWidth - box.clientWidth
      if (box.scrollLeft < maxScrollLeft) {
        box.scrollLeft += 450
      }
    }
  }

  return (
    <Flex flexDir='column' gap='3rem'>
      <Flex maxW='73.125rem' w='full' mx='auto' justify='space-between'>
        <Flex w='50%' justify='space-between'>
          <Flex flexDir='column' gap='1.4rem'>
            <Flex alignItems='center' flexDir='row' gap='1rem'>
              <Rectangle />
              <Text
                fontSize='1rem'
                color='var(--chakra-colors-primary-orange)'
                fontWeight='semibold'
              >
                Today's
              </Text>
            </Flex>

            <Text
              fontFamily='Inter'
              fontSize='2.25rem'
              color='var(--chakra-colors-primary-black)'
              fontWeight='semibold'
            >
              Flash Sales
            </Text>
          </Flex>

          <Flex pt='3.4rem'>
            <TimerIcon />
          </Flex>
        </Flex>

        <Flex w='50%' justify='flex-end' position='relative'>
          <Navigation onPrevClick={btnPressPrev} onNextClick={btnPressNext} />
        </Flex>
      </Flex>

      <Flex
        flexDir='row'
        gap='2rem'
        overflowX='hidden'
        scrollBehavior='smooth'
        pl='10.9375rem'
        ref={boxRef}
      >
        {flashSalesProducts?.map((product: Product) => {
          const {
            id,
            images,
            name,
            currentPrice,
            originalPrice,
            discount,
            rating,
            ratingCount,
          } = product
          return (
            <Card.Root
              key={id}
              minW='16.875rem'
              boxSizing='border-box'
              flexDir='column'
              gap='1.25rem'
              border='none'
            >
              <Flex
                className={css.product}
                w='100%'
                h='15.625rem'
                bg='var(--chakra-colors-primary-grey)'
                rounded='sm'
                pt='1.5rem'
                position='relative'
              >
                <NavLink
                  style={{
                    display: 'block',
                    position: 'relative',
                    width: '100%',
                  }}
                  to={`/product/${id}`}
                >
                  <Image
                    w='full'
                    h='70%'
                    objectFit='contain'
                    position='relative'
                    src={images[0]}
                  />
                </NavLink>

                <Flex
                  flexDir='column'
                  gap='1.125rem'
                  position='absolute'
                  top='1.15625rem'
                  right='1.15625rem'
                >
                  <Box
                    bg='var(--chakra-colors-primary-white2)'
                    p='0.3rem'
                    rounded='full'
                    cursor='pointer'
                    onClick={() => {
                      const newWishListData = getUpdatedWishListData({
                        itemId: id,
                        liked: true,
                      })

                      localStorage.setItem(
                        'wishList',
                        JSON.stringify(newWishListData)
                      )
                      setActiveWishListItems(newWishListData)
                    }}
                  >
                    <HeartIcon width='1.5rem' height='1.5rem' />
                  </Box>
                  <NavLink to={`/product/${id}`}>
                    <Box
                      bg='var(--chakra-colors-primary-white2)'
                      p='0.3rem'
                      rounded='full'
                      cursor='pointer'
                    >
                      <QuickViewIcon />
                    </Box>
                  </NavLink>
                </Flex>
                {discount && (
                  <Flex
                    px='0.6rem'
                    py='0.3rem'
                    bg='var(--chakra-colors-primary-orange)'
                    position='absolute'
                    top='1.25rem'
                    left='1.25rem'
                    border='none'
                    rounded='sm'
                    color='var(--chakra-colors-primary-white)'
                    fontSize='0.875rem'
                  >
                    {discount}
                  </Flex>
                )}

                <Button
                  w='full'
                  bg='var(--chakra-colors-primary-black)'
                  cursor='pointer'
                  position='absolute'
                  bottom={0}
                  opacity={0}
                  transition='0.3s ease-in-out'
                  fontSize='md'
                  onClick={() => {
                    const newCartData = getUpdatedCartData({
                      itemId: id,
                      quantity: 1,
                      method: 'combine',
                    })

                    localStorage.setItem('cart', JSON.stringify(newCartData))
                    setActiveCartItems(newCartData)
                  }}
                >
                  Add To Cart
                </Button>
              </Flex>

              <Card.Footer p={0}>
                <Flex flexDir='column' gap={2}>
                  <Text
                    fontSize='1rem'
                    color='var(--chakra-colors-primary-black)'
                    fontWeight='medium'
                  >
                    {name}
                  </Text>
                  <Flex flexDir='row' gap='1rem'>
                    <Text
                      color='var(--chakra-colors-primary-orange)'
                      fontWeight='medium'
                    >
                      {originalPrice}
                    </Text>
                    <Text
                      color='var(--chakra-colors-primary-black)/50'
                      fontWeight='medium'
                      textDecoration='line-through'
                    >
                      {currentPrice}
                    </Text>
                  </Flex>
                  <Flex flexDir='row' gap='0.4rem'>
                    {GetRatingIcon(rating)}
                    <Text
                      color='var(--chakra-colors-primary-black)/50'
                      fontSize='0.875rem'
                      fontWeight='semibold'
                    >
                      ({ratingCount})
                    </Text>
                  </Flex>
                </Flex>
              </Card.Footer>
            </Card.Root>
          )
        })}
      </Flex>
      <Flex justify='center' w='full'>
        <Button variant='primary'>View All Products</Button>
      </Flex>
    </Flex>
  )
}
