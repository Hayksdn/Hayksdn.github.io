import { useEffect, useRef } from 'react'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { Products } from '@/shared/components/products'
import { CustomContainer } from '@/shared/container'
import { useCart } from '@/shared/context/Cart/CartContext'
import { updateCartTotal } from '@/shared/utils/cart'
import { Button, Flex, Image, Input, Separator, Text } from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'
import PaymentIcon1 from 'shared/assets/images/payment/paymentImg-1.png'
import PaymentIcon2 from 'shared/assets/images/payment/paymentImg-2.png'
import PaymentIcon3 from 'shared/assets/images/payment/paymentImg-3.png'
import PaymentIcon4 from 'shared/assets/images/payment/paymentImg-4.png'

import { Checkbox } from '@/components/ui/checkbox'
import { Radio, RadioGroup } from '@/components/ui/radio'

import css from './checkout.module.css'

export const Checkout = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const paymentIcons = [
    { id: 1, image: PaymentIcon1 },
    { id: 2, image: PaymentIcon2 },
    { id: 3, image: PaymentIcon3 },
    { id: 4, image: PaymentIcon4 },
  ]
  const { activeCartItems, cartTotal, setCartTotal } = useCart()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const formFields = [
    { id: 1, label: 'First Name', required: true },
    { id: 2, label: 'Company Name', required: false },
    { id: 3, label: 'Street Address', required: true },
    { id: 4, label: 'Apartment, floor, etc. (optional)', required: false },
    { id: 5, label: 'Town/City', required: true },
    { id: 6, label: 'Phone Number', required: true },
    { id: 7, label: 'Email Address', required: true },
  ]
  const onSubmit = (data: any) => {
    console.log('Form submitted:', data)
  }
  const handlePlaceOrderClick = () => {
    if (formRef.current) {
      handleSubmit(onSubmit)()
    }
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
      <Flex flexDir='column' gap={8}>
        <Text
          fontFamily='Inter'
          fontWeight='medium'
          fontSize='4xl'
          color='var(--chakra-colors-primary-black)'
        >
          Billing Details
        </Text>

        <Flex flexDir='row' justify='space-between'>
          <form
            ref={formRef}
            onSubmit={handleSubmit((data) => console.log(data))}
          >
            <Flex flexDir='column' gap={8} className={css.inputFieldContainer}>
              {formFields.map((field) => (
                <Flex key={field.id} flexDir='column' gap={2}>
                  <Flex flexDir='row'>
                    <Text color='var(--chakra-colors-primary-black)/40'>
                      {field.label}
                    </Text>
                    {field.required && (
                      <Text color='var(--chakra-colors-primary-orange)'>*</Text>
                    )}
                  </Flex>

                  <Controller
                    name={field.label}
                    control={control}
                    rules={{ required: field.required }}
                    render={({ field }) => (
                      <Input
                        bg='var(--chakra-colors-primary-grey)'
                        w='lg'
                        h='10'
                        {...field}
                      />
                    )}
                  />
                  {errors[field.label] && (
                    <Text color='red.400'>{field.label} is required</Text>
                  )}
                </Flex>
              ))}
              <Checkbox className={css.checkbox}>
                <Text
                  color='var(--chakra-colors-primary-black)'
                  fontSize='md'
                  fontWeight='normal'
                >
                  Save this information for faster check-out next time
                </Text>
              </Checkbox>
            </Flex>
          </form>

          <Flex flexDir='column' gap={8} pt={6}>
            {Object.entries(activeCartItems).map(([id, value]) => {
              const product = Products.find(
                (product) => product.id === Number(id)
              )

              return (
                <Flex
                  key={id}
                  flexDir='column'
                  gap={8}
                  maxW='400px'
                  color='var(--chakra-colors-primary-black)'
                >
                  <Flex
                    flexDir='row'
                    justify='space-between'
                    alignItems='center'
                  >
                    <Flex flexDir='row' gap={6} alignItems='center'>
                      <Image
                        src={product?.images[0]}
                        w='54px'
                        h='54px'
                        objectFit='contain'
                        cursor='pointer'
                      />
                      <Text>{product?.name}</Text>
                    </Flex>
                    <Text>
                      {`$${value?.quantity * Number(product?.currentPrice.slice(1))}`}
                    </Text>
                  </Flex>
                </Flex>
              )
            })}
            <Flex flexDir='column' gap={3} maxW='400px'>
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
            </Flex>
            <RadioGroup
              display='flex'
              flexDir='column'
              gap={8}
              maxW='400px'
              className={css.radioGroup}
              color='var(--chakra-colors-primary-black)'
              defaultValue='Cash on delievery'
            >
              <Flex w='full' flexDir='row' justify='space-between'>
                <Radio value='Bank'>
                  <Text fontSize='md' fontWeight='normal'>
                    Bank
                  </Text>
                </Radio>
                <Flex flexDir='row' gap={2}>
                  {paymentIcons.map((icon) => {
                    return (
                      <Image
                        key={icon.id}
                        src={icon.image}
                        w='42px'
                        h='28px'
                        objectFit='contain'
                      />
                    )
                  })}
                </Flex>
              </Flex>

              <Radio
                value='Cash on delievery'
                fontSize='md'
                fontWeight='normal'
              >
                Cash on delievery
              </Radio>
            </RadioGroup>

            <Flex flexDir='row' gap={4}>
              <Input
                placeholder='Coupon Corde'
                border='1px solid'
                w='xs'
                h='12'
                borderColor='var(--chakra-colors-primary-black)'
              />
              <Button variant='primary'>Apply Coupon</Button>
            </Flex>

            <Button variant='primary' onClick={handlePlaceOrderClick}>
              Place Order
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </CustomContainer>
  )
}
