import { Products } from '@/shared/components/products'
import { Navigation } from '@/shared/components/ui/navigation'
import { Rectangle } from '@/shared/components/ui/rectangle'
import { useCart } from '@/shared/context/Cart/CartContext'
import { useWishList } from '@/shared/context/wishList/wishListContext'
import { getUpdatedCartData } from '@/shared/utils/cart'
import { GetRatingIcon } from '@/shared/utils/icons'
import { getUpdatedWishListData } from '@/shared/utils/wishList'
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { Card } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import HeartIcon from 'shared/assets/icons/heart'
import QuickViewIcon from 'shared/assets/icons/quickView'
import RadioIcons from 'shared/components/ui/radio'

import { Product } from '../flashSales'
import css from './exploreproducts.module.css'

export const ExploreProducts = () => {
  const { setActiveCartItems } = useCart()
  const { setActiveWishListItems } = useWishList()
  const exploreProducts = Products?.slice(8)
  return (
    <Flex flexDir='column' gap='3rem'>
      <Flex justify='space-between'>
        <Flex w='50%' flexDir='column' gap='1.4rem'>
          <Flex alignItems='center' flexDir='row' gap='1rem'>
            <Rectangle />
            <Text
              fontSize='1rem'
              color='var(--chakra-colors-primary-orange)'
              fontWeight='semibold'
            >
              Our Products
            </Text>
          </Flex>

          <Text
            fontFamily='Inter'
            fontSize='2.25rem'
            color='var(--chakra-colors-primary-black)'
            fontWeight='semibold'
          >
            Explore Our Products
          </Text>
        </Flex>

        <Flex w='50%' justify='flex-end' position='relative'>
          <Navigation
            onPrevClick={() => {
              console.log(4)
            }}
            onNextClick={() => {
              console.log(4)
            }}
          />
        </Flex>
      </Flex>

      <SimpleGrid columns={4} columnGap='2rem' rowGap='1.75rem'>
        {exploreProducts?.map((product: Product) => {
          const {
            id,
            images,
            name,
            currentPrice,
            rating,
            ratingCount,
            productColors,
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
                  <Flex flexDir='row' gap='0.6rem'>
                    <Text
                      color='var(--chakra-colors-primary-orange)'
                      fontWeight='medium'
                    >
                      {currentPrice}
                    </Text>
                    {GetRatingIcon(rating)}
                    <Text
                      color='var(--chakra-colors-primary-black)/50'
                      fontSize='0.875rem'
                      fontWeight='semibold'
                    >
                      ({ratingCount})
                    </Text>
                  </Flex>
                  {productColors && (
                    <RadioIcons
                      firstColor={productColors[0]}
                      secondColor={productColors[1]}
                    />
                  )}
                </Flex>
              </Card.Footer>
            </Card.Root>
          )
        })}
      </SimpleGrid>
      <Flex justify='center'>
        <Button variant='primary'>View All Products</Button>
      </Flex>
    </Flex>
  )
}
