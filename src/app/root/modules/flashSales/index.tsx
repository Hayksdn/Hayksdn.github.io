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
    <Flex flexDir='column' gap={10}>
      <Flex maxW='1170px' w='full' mx='auto' justify='space-between'>
        <Flex w='50%' justify='space-between'>
          <Flex flexDir='column' gap={6}>
            <Flex alignItems='center' flexDir='row' gap={4}>
              <Rectangle />
              <Text
                fontSize='md'
                color='var(--chakra-colors-primary-orange)'
                fontWeight='semibold'
              >
                Today's
              </Text>
            </Flex>

            <Text
              fontFamily='Inter'
              fontSize='4xl'
              color='var(--chakra-colors-primary-black)'
              fontWeight='semibold'
            >
              Flash Sales
            </Text>
          </Flex>

          <Flex pt={14}>
            <TimerIcon />
          </Flex>
        </Flex>

        <Flex w='50%' justify='flex-end' position='relative'>
          <Navigation onPrevClick={btnPressPrev} onNextClick={btnPressNext} />
        </Flex>
      </Flex>

      <Flex
        flexDir='row'
        gap={8}
        overflowX='hidden'
        scrollBehavior='smooth'
        pl='175px'
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
              minW='270px'
              boxSizing='border-box'
              flexDir='column'
              gap={4}
              border='none'
            >
              <Flex
                className={css.product}
                w='full'
                h='250px'
                bg='var(--chakra-colors-primary-grey)'
                rounded='sm'
                pt={8}
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
                  gap={2}
                  position='absolute'
                  top={2.5}
                  right={2.5}
                >
                  <Box
                    bg='var(--chakra-colors-primary-white2)'
                    p={1.5}
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
                    <HeartIcon width='24px' height='24px' />
                  </Box>
                  <NavLink to={`/product/${id}`}>
                    <Box
                      bg='var(--chakra-colors-primary-white2)'
                      p={1.5}
                      rounded='full'
                      cursor='pointer'
                    >
                      <QuickViewIcon />
                    </Box>
                  </NavLink>
                </Flex>
                {discount && (
                  <Flex
                    px={3}
                    py={1}
                    bg='var(--chakra-colors-primary-orange)'
                    position='absolute'
                    top={4}
                    left={4}
                    border='none'
                    rounded='sm'
                    color='var(--chakra-colors-primary-white)'
                    fontSize='sm'
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
                    fontSize='md'
                    color='var(--chakra-colors-primary-black)'
                    fontWeight='medium'
                  >
                    {name}
                  </Text>
                  <Flex flexDir='row' gap={3}>
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
                  <Flex flexDir='row' gap={2}>
                    {GetRatingIcon(rating)}
                    <Text
                      color='var(--chakra-colors-primary-black)/50'
                      fontSize='sm'
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
