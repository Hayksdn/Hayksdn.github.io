import { useRef } from 'react'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { CustomContainer } from '@/shared/container'
import { Button, Flex, Input, Text } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

import css from './account.module.css'

export const Account = () => {
  const formFields = [
    { id: '0', label: 'First Name', placeholder: 'Enter your first name' },
    { id: '1', label: 'Last Name', placeholder: 'Enter your last name' },
    { id: '2', label: 'Email', placeholder: 'Enter your email' },
    { id: '3', label: 'Address', placeholder: 'Enter your address' },
    {
      id: '4',
      label: 'Current Password',
      placeholder: 'Enter current password',
    },
    { id: '5', label: 'New Password', placeholder: 'Enter new password' },
    {
      id: '6',
      label: 'Confirm New Password',
      placeholder: 'Re-enter new password',
    },
  ]
  const formRef = useRef<HTMLFormElement>(null)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data)
  }
  const handleSignUp = () => {
    if (formRef.current) {
      handleSubmit(onSubmit)()
    }
  }
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
      <Flex flexDir='row' justify='space-between'>
        <BreadCrumb />
        <Flex justify='row' gap={1} fontSize='sm'>
          Welcome!
          <Text color='var(--chakra-colors-primary-orange)'> Md Rimel </Text>
        </Flex>
      </Flex>
      <Flex flexDir='row' justify='space-between'>
        <Flex flexDir='column' gap={3}>
          <NavLink to='/myAccount'>
            <Text
              color='var(--chakra-colors-primary-black)'
              fontWeight='medium'
            >
              Manage My Account
            </Text>
          </NavLink>
          <Flex flexDir='column' gap={2} pl={8}>
            <Text color='var(--chakra-colors-primary-orange)'>My Profile</Text>
            <Text color='var(--chakra-colors-primary-black)/50'>
              Address Book
            </Text>
            <Text color='var(--chakra-colors-primary-black)/50'>
              My Payment Options
            </Text>
          </Flex>

          <NavLink to='/myAccount'>
            <Text
              color='var(--chakra-colors-primary-black)'
              fontWeight='medium'
            >
              My Orders
            </Text>
          </NavLink>
          <Flex flexDir='column' gap={2} pl={8}>
            <Text color='var(--chakra-colors-primary-black)/50'>
              My Returns
            </Text>
            <Text color='var(--chakra-colors-primary-black)/50'>
              My Cancellations
            </Text>
          </Flex>
          <NavLink to='/wishlist'>
            <Text
              color='var(--chakra-colors-primary-black)'
              fontWeight='medium'
            >
              My WishList
            </Text>
          </NavLink>
        </Flex>

        <Flex
          boxShadow=' 0px 1px 13px 0px #0000000D'
          w='870px'
          h='630px'
          gap={2}
          flexDir='column'
          px={20}
          py={10}
        >
          <Text color='var(--chakra-colors-primary-orange)' fontWeight='medium'>
            Edit Your Profile
          </Text>

          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className={css.inputFieldContainer}
          >
            <Grid templateColumns='repeat(2, 1fr)' columnGap={14} rowGap={4}>
              {formFields.slice(0, 4).map((field) => (
                <Flex key={field.id} flexDir='column' gap={3}>
                  <Text color='var(--chakra-colors-primary-black)'>
                    {field.label}
                  </Text>
                  <Controller
                    name={field.label}
                    control={control}
                    render={({ field: controllerField }) => (
                      <Input
                        bg='var(--chakra-colors-primary-grey)'
                        h='12'
                        w='xs'
                        {...controllerField}
                        placeholder={field.placeholder}
                      />
                    )}
                  />
                  {errors[field.label] && (
                    <Text color='red.400'>{field.label} is required</Text>
                  )}
                </Flex>
              ))}
            </Grid>

            <Flex flexDir='column' mt={6} gap={4}>
              <Text color='var(--chakra-colors-primary-black)'>
                Password Changes
              </Text>
              {formFields.slice(4).map((field) => (
                <Flex key={field.id} flexDir='column' mt={2}>
                  <Controller
                    name={field.label}
                    control={control}
                    render={({ field: controllerField }) => (
                      <Input
                        bg='var(--chakra-colors-primary-grey)'
                        h='12'
                        w='full'
                        {...controllerField}
                        placeholder={field.placeholder}
                      />
                    )}
                  />
                  {errors[field.label] && (
                    <Text color='red.400'>{field.label} is required</Text>
                  )}
                </Flex>
              ))}
            </Flex>
            <Flex
              flexDir='row'
              gap={8}
              justify='end'
              mt={6}
              alignItems='center'
            >
              <Text color='var(--chakra-colors-primary-black)'>Cancel</Text>
              <Button variant='primary'>Save Changes</Button>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </CustomContainer>
  )
}
