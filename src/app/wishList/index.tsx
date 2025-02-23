import { Products } from '@/shared/components/products'
import { Rectangle } from '@/shared/components/ui/rectangle'
import { CustomContainer } from '@/shared/container'
import { useCart } from '@/shared/context/Cart/CartContext'
import { useWishList } from '@/shared/context/wishList/wishListContext'
import { getUpdatedCartData } from '@/shared/utils/cart'
import { GetRatingIcon } from '@/shared/utils/icons'
import {
  getMoveWishlistToCartData,
  getUpdatedWishListData,
} from '@/shared/utils/wishList'
import { Button, Flex, Text } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Box, Image } from '@chakra-ui/react'
import { Card } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import BinIcon from 'shared/assets/icons/bin'
import QuickViewIcon from 'shared/assets/icons/quickView'

import { Product } from '../root/modules/flashSales'
import css from './wishlist.module.css'

export const WishList = () => {
  const { activeWishListItems, setActiveWishListItems } = useWishList()
  const { setActiveCartItems } = useCart()
  const justForYouProducts = Products.slice(8, 12)

  return (
    <CustomContainer
      variant='container'
      mx='auto'
      display='flex'
      flexDir='column'
      gap={10}
      mb={24}
      mt={20}
    >
      <Flex flexDir='column' gap={15}>
        <Flex flexDir='row' justify='space-between'>
          <Text color='var(--chakra-colors-primary-black)'>
            Wishlist({Object.keys(activeWishListItems)?.length})
          </Text>
          <Button
            variant='transparent'
            onClick={() => {
              localStorage.setItem(
                'cart',
                JSON.stringify(
                  getMoveWishlistToCartData({ activeWishListItems })
                )
              )
              setActiveCartItems(
                getMoveWishlistToCartData({ activeWishListItems })
              )
            }}
          >
            Move All To Bag
          </Button>
        </Flex>

        <SimpleGrid columns={4} columnGap={7} rowGap={12}>
          {Object.entries(activeWishListItems).map(([id, value]) => {
            const product = Products.find(
              (product) => product.id === Number(id)
            )
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
                    to={`/product/${product?.id}`}
                  >
                    <Image
                      w='full'
                      h='70%'
                      objectFit='contain'
                      position='relative'
                      src={product?.images[0]}
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
                          itemId: Number(id),
                          liked: false,
                        })

                        localStorage.setItem(
                          'wishList',
                          JSON.stringify(newWishListData)
                        )
                        setActiveWishListItems(newWishListData)
                      }}
                    >
                      <BinIcon />
                    </Box>
                  </Flex>
                  {product?.discount && (
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
                      {product?.discount}
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
                        itemId: Number(id),
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
                      {product?.name}
                    </Text>
                    <Flex flexDir='row' gap={3}>
                      {product?.originalPrice ? (
                        <>
                          <Text
                            color='var(--chakra-colors-primary-orange)'
                            fontWeight='medium'
                          >
                            {product?.originalPrice}
                          </Text>
                          <Text
                            color='var(--chakra-colors-primary-black)/50'
                            fontWeight='medium'
                            textDecoration='line-through'
                          >
                            {product?.currentPrice}
                          </Text>
                        </>
                      ) : (
                        <Text
                          color='var(--chakra-colors-primary-black)/50'
                          fontWeight='medium'
                        >
                          {product?.currentPrice}
                        </Text>
                      )}
                    </Flex>
                  </Flex>
                </Card.Footer>
              </Card.Root>
            )
          })}
        </SimpleGrid>
      </Flex>

      <Flex flexDir='column' gap={14}>
        <Flex justify='space-between' position='relative'>
          <Flex w='50%' flexDir='column' gap={5}>
            <Flex alignItems='center' flexDir='row' gap={4}>
              <Rectangle />
              <Text color='var(--chakra-colors-primary-black)'>
                Just For You
              </Text>
            </Flex>
          </Flex>

          <Flex w='50%' justify='flex-end'>
            <Button variant='transparent'>See All</Button>
          </Flex>
        </Flex>

        <Flex flexDir='row' gap={8}>
          {justForYouProducts?.map((product: Product) => {
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
                  {product?.discount && (
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
                      {product?.discount}
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
      </Flex>
    </CustomContainer>
  )
}
