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
    <Flex flexDir='column' gap={14}>
      <Flex justify='space-between'>
        <Flex w='50%' flexDir='column' gap={5}>
          <Flex alignItems='center' flexDir='row' gap={4}>
            <Rectangle />
            <Text
              fontSize='md'
              color='var(--chakra-colors-primary-orange)'
              fontWeight='semibold'
            >
              Our Products
            </Text>
          </Flex>

          <Text
            fontFamily='Inter'
            fontSize='4xl'
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

      <SimpleGrid columns={4} columnGap={7} rowGap={12}>
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
                  <Flex flexDir='row' gap={2}>
                    <Text
                      color='var(--chakra-colors-primary-orange)'
                      fontWeight='medium'
                    >
                      {currentPrice}
                    </Text>
                    {GetRatingIcon(rating)}
                    <Text
                      color='var(--chakra-colors-primary-black)/50'
                      fontSize='sm'
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
