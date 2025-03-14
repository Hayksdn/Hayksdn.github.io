import { useEffect, useRef, useState } from 'react'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { CustomContainer } from '@/shared/components/layout/container'
import { Products } from '@/shared/components/products'
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
      gap='2.5rem'
      mb='6rem'
      mt='5rem'
    >
      <BreadCrumb />
      <Flex flexDir='column' gap='5rem'>
        <Flex flexDir='column'>
          <Table.Root borderCollapse='separate' borderSpacing='0 3.4375rem'>
            <Table.Header className={css.tableHeader}>
              <Table.Row boxShadow='0px 1px 13px 0px #0000000D'>
                <Table.ColumnHeader pl='1.5rem' py='1.375rem'>
                  Product
                </Table.ColumnHeader>
                <Table.ColumnHeader textAlign='center'>
                  Price
                </Table.ColumnHeader>
                <Table.ColumnHeader textAlign='right'>
                  Quantity
                </Table.ColumnHeader>
                <Table.ColumnHeader pr='1.5rem' textAlign='end'>
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
                    key={id}
                    bg='var(--chakra-colors-primary-white2)'
                    boxShadow='0rem 0.0625rem 0.8125rem 0rem #0000000D'
                  >
                    <Table.Cell pl='1.375rem' py='1.25rem'>
                      <Flex
                        alignItems='center'
                        gap='1.6rem'
                        position='relative'
                        className={css.product}
                      >
                        <Image
                          src={product?.images[0]}
                          w='3.375rem'
                          h='3.375rem'
                          objectFit='contain'
                          cursor='pointer'
                        />
                        <Text>{product?.name}</Text>
                        <Flex
                          position='absolute'
                          top='0rem'
                          left='-0.5rem'
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
                        w='4.5rem'
                        h='3rem'
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
                          borderWidth='0.09375rem'
                          borderColor='var(--chakra-colors-primary-black)/50'
                        />
                      </NumberInputRoot>
                    </Table.Cell>

                    <Table.Cell textAlign='end' pr='2.8rem'>
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
          <Flex flexDir='row' gap='1.5rem'>
            <Input
              placeholder='Coupon Corde'
              border='0.0625rem solid'
              w='20rem'
              h='3.7rem'
              borderColor='var(--chakra-colors-primary-black)/50'
            />
            <Button variant='primary' py='1.8rem'>
              Apply Coupon
            </Button>
          </Flex>

          <Flex
            border='0.09375rem solid'
            color='var(--chakra-colors-primary-black)'
            borderColor='var(--chakra-colors-primary-black)'
            w='32rem' // Converted from 'lg' to rem
            h='18rem' // Converted from 'xs' to rem
            py='1rem'
            px='1rem'
            rounded='sm'
            flexDir='column'
            gap='0.25rem'
          >
            <Text fontWeight='medium' fontSize='1.25rem'>
              Cart Total
            </Text>
            <Flex flexDir='column' gap='1rem'>
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
