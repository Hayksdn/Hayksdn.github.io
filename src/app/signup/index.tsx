import { useRef } from 'react'

import { Button, Flex, Image, Input, Text } from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import GoogleIcon from 'shared/assets/icons/google'
import LoginIcon from 'shared/assets/images/login/login.jpg'

import css from './signup.module.css'

export const SignUp = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const formFields = [
    { id: 'name', placeholder: 'Name' },
    { id: 'emailOrPhone', placeholder: 'Email or Phone Number' },
    { id: 'password', placeholder: 'Password' },
  ]

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data)
  }

  return (
    <Flex
      w='full'
      h='auto'
      pr={40}
      flexDir='row'
      justify='space-between'
      mt={20}
      mb={28}
    >
      <Image w='805px' h='781px' src={LoginIcon} objectFit='cover' />
      <Flex flexDir='column' gap={12}>
        <Flex
          flexDir='column'
          gap={6}
          color='var(--chakra-colors-primary-black)'
        >
          <Text fontFamily='Inter' fontSize='4xl' fontWeight='medium'>
            Create an account
          </Text>
          <Text>Enter your details below</Text>
        </Flex>
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDir='column' gap={10}>
            <Flex flexDir='column' gap={10}>
              {formFields.map((field) => (
                <Flex
                  key={field.id}
                  flexDir='column'
                  gap={2}
                  className={css.inputFieldContainer}
                >
                  <Controller
                    name={field.id}
                    control={control}
                    rules={{ required: `${field.placeholder} is required` }}
                    render={({ field: controllerField }) => (
                      <Input
                        rounded='none'
                        p={0}
                        border='none'
                        borderBottom='1px solid'
                        borderBottomColor='var(--chakra-colors-primary-black)/50'
                        w='sm'
                        h='10'
                        placeholder={field.placeholder}
                        {...controllerField}
                        color='var(--chakra-colors-primary-black)/40'
                      />
                    )}
                  />
                  {errors[field.id] && (
                    <Text color='red.400'>{field.placeholder} is required</Text>
                  )}
                </Flex>
              ))}
            </Flex>

            <Flex flexDir='column' gap={4}>
              <Button variant='primary' w='full' type='submit'>
                Create Account
              </Button>
              <Flex flexDir='column' gap={8}>
                <Button variant='transparent' w='full'>
                  <Flex flexDir='row' gap={4}>
                    <GoogleIcon />
                    <Text
                      color='var(--chakra-colors-primary-black)'
                      fontWeight='normal'
                      fontSize='md'
                    >
                      Sign up with Google
                    </Text>
                  </Flex>
                </Button>
                <Flex
                  flexDir='row'
                  gap={4}
                  color='var(--chakra-colors-primary-black)/70'
                  justify='center'
                >
                  <Text>Already have account?</Text>
                  <NavLink to='/login'>
                    <Text
                      fontWeight='medium'
                      textDecoration='underline'
                      textUnderlineOffset={6}
                    >
                      Log in
                    </Text>
                  </NavLink>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Flex>
  )
}
