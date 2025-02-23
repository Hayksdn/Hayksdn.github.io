import { useState } from 'react'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { Products } from '@/shared/components/products'
import { Rectangle } from '@/shared/components/ui/rectangle'
import { CustomContainer } from '@/shared/container'
import { useCart } from '@/shared/context/Cart/CartContext'
import { useWishList } from '@/shared/context/wishList/wishListContext'
import { getUpdatedCartData } from '@/shared/utils/cart'
import { GetRatingIcon } from '@/shared/utils/icons'
import { getUpdatedWishListData } from '@/shared/utils/wishList'
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Separator,
  Text,
} from '@chakra-ui/react'
import { Card } from '@chakra-ui/react'
import { NavLink, useParams } from 'react-router-dom'
import DelieveryIcon from 'shared/assets/icons/delievery'
import HeartIcon from 'shared/assets/icons/heart'
import MinusIcon from 'shared/assets/icons/minus'
import PlusIcon from 'shared/assets/icons/plus'
import QuickViewIcon from 'shared/assets/icons/quickView'
import ReturnIcon from 'shared/assets/icons/return'
import RadioIcons from 'shared/components/ui/radio'

import { Product } from '../root/modules/flashSales'
import css from './productPage.module.css'

export const ProductPage = () => {
  const { id } = useParams()
  const product = Products.find((product) => product.id === Number(id))
  const sizes = [
    { id: '1', size: 'XS' },
    { id: '2', size: 'S' },
    { id: '3', size: 'M' },
    { id: '4', size: 'L' },
    { id: '5', size: 'XL' },
  ]
  const [quantity, setQuantity] = useState(1)
  const valueChange = (method: string) => {
    setQuantity((prevQuantity) => {
      if (method === 'combine') {
        return prevQuantity + 1
      } else if (method === 'set' && prevQuantity > 1) {
        return prevQuantity - 1
      }
      return prevQuantity
    })
  }
  const { setActiveCartItems } = useCart()
  const { setActiveWishListItems } = useWishList()
  const justForYouProducts = Products.slice(2, 6)

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
      <BreadCrumb />
      <Flex flexDir='row' gap={10}>
        <Flex flexDir='column' gap={4}>
          {product &&
            product.images?.slice(1).map((item, index) => (
              <Flex
                key={index}
                w='170px'
                h='138px'
                bg='var(--chakra-colors-primary-grey)'
                justify='center'
              >
                <Image
                  w='121px'
                  h='114px'
                  objectFit='contain'
                  src={item}
                  alt={`Product Image ${index + 2}`}
                />
              </Flex>
            ))}
        </Flex>
        <Flex
          w='500px'
          h='600px'
          bg='var(--chakra-colors-primary-grey)'
          alignItems='center'
        >
          <Image
            w='446px'
            h='315px'
            objectFit='contain'
            src={product?.images[0]}
          />
        </Flex>
        <Flex flexDir='column' gap={4}>
          <Flex
            flexDir='column'
            gap={5}
            color='var(--chakra-colors-primary-black)'
          >
            <Flex flexDir='column' gap={4}>
              <Text fontFamily='Inter' fontWeight='semibold' fontSize='2xl'>
                {product?.name}
              </Text>
              <Flex flexDir='row' gap={4} alignItems='center'>
                <Flex flexDir='row' gap={2}>
                  {GetRatingIcon(product?.rating || '')}
                  <Text color='var(--chakra-colors-primary-black)/50'>
                    ({product?.ratingCount} reviews)
                  </Text>
                </Flex>
                <Flex flexDir='row' gap={4} alignItems='center'>
                  <Separator
                    orientation='vertical'
                    borderColor='var(--chakra-colors-primary-black)/50'
                    h='4.5'
                  />
                  <Text color='var(--chakra-colors-primary-green)/60'>
                    In Stock
                  </Text>
                </Flex>
              </Flex>
              <Text fontFamily='Inter' fontSize='2xl'>
                {product?.currentPrice}
              </Text>
              <Flex maxW='430px'>
                <Text>
                  PlayStation 5 Controller Skin High quality vinyl with air
                  channel adhesive for easy bubble free install & mess free
                  removal Pressure sensitive.
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Separator
            orientation='horizontal'
            w='full'
            size='sm'
            borderColor='var(--chakra-colors-primary-black)/30'
            h='auto'
          />
          <Flex
            flexDir='column'
            gap={5}
            color='var(--chakra-colors-primary-black)'
          >
            <Flex flexDir='row' gap={6} alignItems='center'>
              <Text fontSize='xl'>Colors:</Text>
              <RadioIcons
                firstColor={product?.productColors?.[0] ?? ''}
                secondColor={product?.productColors?.[1] ?? ''}
              />
            </Flex>
            <Flex flexDir='row' gap={6}>
              <Text fontSize='xl'>Size:</Text>
              {sizes.map((item) => {
                if (Number(item.id) === 3) {
                  return (
                    <Box
                      id={item.id}
                      w='32px'
                      h='32px '
                      rounded='md'
                      bg='var(--chakra-colors-primary-orange)'
                      color='var(--chakra-colors-primary-white)'
                      fontWeight='normal'
                      alignContent='center'
                      textAlign='center'
                    >
                      {item.size}
                    </Box>
                  )
                } else {
                  return (
                    <Box
                      id={item.id}
                      w='32px'
                      h='32px '
                      rounded='md'
                      border='1px solid'
                      borderColor='var(--chakra-colors-primary-black)/50'
                      bg='transparent'
                      color='var(--chakra-colors-primary-black)'
                      fontWeight='normal'
                      alignContent='center'
                      textAlign='center'
                    >
                      {item.size}
                    </Box>
                  )
                }
              })}
            </Flex>
            <Flex flexDir='row' gap={4} alignItems='center'>
              <Flex flexDir='row'>
                <Button
                  onClick={() => valueChange('set')}
                  w='40px'
                  fontSize='5xl'
                  border='1px solid'
                  borderColor='var(--chakra-colors-primary-black)/50'
                  borderLeftRadius='md'
                  borderRightRadius='none'
                  bg='transparent'
                >
                  <MinusIcon />
                </Button>
                <Input
                  value={quantity}
                  textAlign='center'
                  w='80px'
                  fontSize='xl'
                  color='var(--chakra-colors-primary-black)'
                  fontWeight='medium'
                  border='1px solid'
                  borderColor='var(--chakra-colors-primary-black)/50'
                  borderRight='none'
                  borderLeft='none'
                  borderRadius='none'
                />
                <Button
                  onClick={() => valueChange('combine')}
                  w='40px'
                  border='none'
                  borderColor='var(--chakra-colors-primary-black)/50'
                  borderRightRadius='md'
                  borderLeftRadius='none'
                  bg='var(--chakra-colors-primary-orange)'
                >
                  <PlusIcon />
                </Button>
              </Flex>
              <NavLink to='/cart'>
                <Button
                  variant='primary'
                  onClick={() => {
                    const newCartData = getUpdatedCartData({
                      itemId: product?.id || 0,
                      quantity: quantity,
                      method: 'set',
                    })

                    localStorage.setItem('cart', JSON.stringify(newCartData))
                    setActiveCartItems(newCartData)
                  }}
                >
                  Buy Now
                </Button>
              </NavLink>
              <Box
                w='40px'
                rounded='md'
                h='40px'
                justifyItems='center'
                alignContent='center'
                border='1px solid'
                borderColor='var(--chakra-colors-primary-black)/50'
                bg='transparent'
              >
                <HeartIcon width='25px' height='25px' />
              </Box>
            </Flex>
            <Flex
              w='399px'
              h='180px'
              border='1px solid'
              flexDir='column'
              gap={4}
              justify='center'
              pl={2}
              borderColor='var(--chakra-colors-primary-black)/50'
              color='var(--chakra-colors-primary-black)'
            >
              <Flex flexDir='row' gap={4} alignItems='center'>
                <Flex>
                  <DelieveryIcon color='black' />
                </Flex>
                <Flex flexDir='column' gap={2}>
                  <Text fontWeight='medium'>Free Delivery</Text>
                  <Text
                    fontSize='sm'
                    textDecoration='underline'
                    textUnderlineOffset='2'
                  >
                    Enter your postal code for Delivery Availability
                  </Text>
                </Flex>
              </Flex>
              <Separator
                orientation='horizontal'
                w='full'
                size='sm'
                borderColor='var(--chakra-colors-primary-black)/30'
                h='auto'
              />
              <Flex flexDir='row' gap={4} alignItems='center'>
                <Flex>
                  <ReturnIcon />
                </Flex>
                <Flex flexDir='column' gap={2}>
                  <Text fontWeight='medium'>Return Delivery</Text>
                  <Text fontSize='sm'>
                    Free 30 Days Delivery Returns. Details
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex flexDir='column' gap={14}>
        <Flex justify='space-between' position='relative'>
          <Flex alignItems='center' flexDir='row' gap={4}>
            <Rectangle />
            <Text
              color='var(--chakra-colors-primary-orange)'
              fontWeight='semibold'
            >
              Related Items
            </Text>
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
