import { Products } from '@/shared/components/products'
import { Rectangle } from '@/shared/components/ui/rectangle'
import { useCart } from '@/shared/context/Cart/CartContext'
import { useWishList } from '@/shared/context/wishList/wishListContext'
import { getUpdatedCartData } from '@/shared/utils/cart'
import { GetRatingIcon } from '@/shared/utils/icons'
import { getUpdatedWishListData } from '@/shared/utils/wishList'
import { Button, Flex, Text } from '@chakra-ui/react'
import { Box, Card, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import HeartIcon from 'shared/assets/icons/heart'
import QuickViewIcon from 'shared/assets/icons/quickView'

import { Product } from '../flashSales'
import css from './bestselling.module.css'

export const BestSelling = () => {
  const { activeCartItems, setActiveCartItems } = useCart()
  const { activeWishListItems, setActiveWishListItems } = useWishList()
  const bestSellingProducts = Products?.slice(4, 8)
  return (
    <Flex flexDir='column' gap={14}>
      <Flex justify='space-between' position='relative'>
        <Flex w='50%' flexDir='column' gap={5}>
          <Flex alignItems='center' flexDir='row' gap={4}>
            <Rectangle />
            <Text
              fontSize='md'
              color='var(--chakra-colors-primary-orange)'
              fontWeight='semibold'
            >
              This Month
            </Text>
          </Flex>

          <Text
            fontFamily='Inter'
            fontSize='4xl'
            color='var(--chakra-colors-primary-black)'
            fontWeight='semibold'
          >
            Best Selling Products
          </Text>
        </Flex>

        <Flex w='50%' justify='flex-end' position='absolute' right={0} top={14}>
          <Button variant='primary'>View All</Button>
        </Flex>
      </Flex>

      <Flex flexDir='row' gap={8}>
        {bestSellingProducts?.map((product: Product) => {
          const {
            id,
            images,
            name,
            currentPrice,
            originalPrice,
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
                <Link
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
                </Link>

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

                  <Link to={`/product/${id}`}>
                    <Box
                      bg='var(--chakra-colors-primary-white2)'
                      p={1.5}
                      rounded='full'
                      cursor='pointer'
                    >
                      <QuickViewIcon />
                    </Box>
                  </Link>
                </Flex>

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
    </Flex>
  )
}
