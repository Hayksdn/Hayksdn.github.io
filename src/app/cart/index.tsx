import { useEffect, useRef, useState } from 'react'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { Products } from '@/shared/components/products'
import { CustomContainer } from '@/shared/container'
import { useCart } from '@/shared/context/Cart/CartContext'
import { getUpdatedCartData, updateCartTotal } from '@/shared/utils/cart'
import {
  Button,
  Flex,
  Image,
  Input,
  Separator,
  Table,
  Text,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import CancelIcon from 'shared/assets/icons/cancel'

import { NumberInputField, NumberInputRoot } from '@/components/ui/number-input'

import css from './cart.module.css'

export const Cart = () => {
  const { activeCartItems, setActiveCartItems } = useCart()
  const [filterApplied, setFilterApplied] = useState(false)
  const [cartTotal, setCartTotal] = useState(0)

  const hasPageBeenRendered = useRef(false)
  useEffect(() => {
    if (!hasPageBeenRendered.current) {
      hasPageBeenRendered.current = true
      return
    }

    if (filterApplied) {
      const filteredItems = Object.fromEntries(
        Object.entries(activeCartItems).filter(
          ([key, value]) => value.quantity > 0
        )
      )

      localStorage.setItem('cart', JSON.stringify(filteredItems))
      setActiveCartItems(filteredItems)
      setFilterApplied(false)
      setCartTotal(updateCartTotal(activeCartItems))
    }
  }, [filterApplied])

  const ItemRemove = (itemId: string) => {
    const filteredItems = Object.fromEntries(
      Object.entries(activeCartItems).filter(([key]) => key !== itemId)
    )
    localStorage.setItem('cart', JSON.stringify(filteredItems))
    setActiveCartItems(filteredItems)
  }

  useEffect(() => {
    setCartTotal(updateCartTotal(activeCartItems))
  }, [])

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
      <Flex flexDir='column' gap={20}>
        <Flex flexDir='column'>
          <Table.Root borderCollapse='separate' borderSpacing='0 55px'>
            <Table.Header className={css.tableHeader}>
              <Table.Row boxShadow='0px 1px 13px 0px #0000000D'>
                <Table.ColumnHeader pl={8} py={6}>
                  Product
                </Table.ColumnHeader>
                <Table.ColumnHeader textAlign='center'>
                  Price
                </Table.ColumnHeader>
                <Table.ColumnHeader textAlign='right'>
                  Quantity
                </Table.ColumnHeader>
                <Table.ColumnHeader pr={8} textAlign='end'>
                  Subtotal
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>

            <Table.Body className={css.tableBody}>
              {Object.entries(activeCartItems).map(([id, value]) => {
                const product = Products.find(
                  (product) => product.id === Number(id)
                )

                return (
                  <Table.Row
                    key={id + 73481}
                    bg='var(--chakra-colors-primary-white2)'
                    boxShadow='0px 1px 13px 0px #0000000D'
                  >
                    <Table.Cell pl={6} py={4}>
                      <Flex
                        alignItems='center'
                        gap={4}
                        position='relative'
                        className={css.product}
                      >
                        <Image
                          src={product?.images[0]}
                          w='54px'
                          h='54px'
                          objectFit='contain'
                          cursor='pointer'
                        />
                        <Text>{product?.name}</Text>
                        <Flex
                          position='absolute'
                          top={0}
                          left={-2}
                          className='cancelIcon'
                          onClick={() => {
                            ItemRemove(id)
                          }}
                        >
                          <CancelIcon opacity={0} />
                        </Flex>
                      </Flex>
                    </Table.Cell>

                    <Table.Cell textAlign='center'>
                      {product?.currentPrice}
                    </Table.Cell>

                    <Table.Cell justifyItems='right' alignItems='center'>
                      <NumberInputRoot
                        defaultValue={String(value?.quantity)}
                        min={0}
                        className={css.numberInput}
                        w='72px'
                        h='48px'
                        step={1}
                        alignContent='center'
                        onValueChange={(event) => {
                          const newValue = event?.valueAsNumber
                          const newCartData = getUpdatedCartData({
                            itemId: product?.id || 0,
                            quantity: newValue,
                            method: 'set',
                          })

                          localStorage.setItem(
                            'cart',
                            JSON.stringify(newCartData)
                          )
                          setActiveCartItems(newCartData)
                        }}
                      >
                        <NumberInputField
                          borderWidth='1.5px'
                          borderColor='var(--chakra-colors-primary-black)/50'
                        />
                      </NumberInputRoot>
                    </Table.Cell>

                    <Table.Cell textAlign='end' pr='10'>
                      {`$${value?.quantity * Number(product?.currentPrice.slice(1))}`}
                    </Table.Cell>
                  </Table.Row>
                )
              })}
            </Table.Body>
          </Table.Root>

          <Flex flexDir='row' justify='space-between'>
            <NavLink to='/'>
              <Button variant='transparent'>Return To Shop</Button>
            </NavLink>
            <Button
              variant='transparent'
              onClick={() => {
                setFilterApplied(true)
              }}
            >
              Update Cart
            </Button>
          </Flex>
        </Flex>

        <Flex flexDir='row' justify='space-between'>
          <Flex flexDir='row' gap={4}>
            <Input
              placeholder='Coupon Corde'
              border='1px solid'
              w='xs'
              h='14'
              borderColor='var(--chakra-colors-primary-black)/50'
            />
            <Button variant='primary' py={7}>
              Apply Coupon
            </Button>
          </Flex>

          <Flex
            border='1.5px solid'
            color='var(--chakra-colors-primary-black)'
            borderColor='var(--chakra-colors-primary-black)'
            w='lg'
            h='xs'
            py={6}
            px={5}
            rounded='sm'
            flexDir='column'
            gap={4}
          >
            <Text fontWeight='medium' fontSize='xl'>
              Cart Total
            </Text>
            <Flex flexDir='column' gap={3}>
              <Flex flexDir='row' justify='space-between'>
                <Text>Subtotal:</Text>
                <Text>${cartTotal}</Text>
              </Flex>
              <Separator
                orientation='horizontal'
                w='full'
                size='sm'
                borderColor='var(--chakra-colors-primary-black)/30'
                h='auto'
              />
              <Flex flexDir='row' justify='space-between'>
                <Text>Shipping:</Text>
                <Text>Free</Text>
              </Flex>
              <Separator
                orientation='horizontal'
                w='full'
                size='sm'
                borderColor='var(--chakra-colors-primary-black)/30'
                h='auto'
              />
              <Flex flexDir='row' justify='space-between'>
                <Text>Total:</Text>
                <Text>${cartTotal}</Text>
              </Flex>
              <NavLink to='/checkout'>
                <Flex justify='center'>
                  <Button variant='primary'>Process To Chechkout</Button>
                </Flex>
              </NavLink>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </CustomContainer>
  )
}
