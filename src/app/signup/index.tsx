import { useRef } from 'react'

import { useAuthActions } from '@/shared/api/auth'
import { Button, Flex, Image, Input, Text } from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import GoogleIcon from 'shared/assets/icons/google'
import LoginIcon from 'shared/assets/images/login/login.jpg'

import css from './signup.module.css'

export type SignUpFormValues = {
  name: string
  email: string
  password: string
}

export const SignUp = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const { registerUser } = useAuthActions()

  const formFields: {
    id: keyof SignUpFormValues
    placeholder: string
    type: string
  }[] = [
    { id: 'name', placeholder: 'Name', type: 'text' },
    { id: 'email', placeholder: 'Email Address', type: 'email' },
    { id: 'password', placeholder: 'Password', type: 'password' },
  ]

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>()

  return (
    <Flex
      w='100%'
      h='auto'
      pr='7rem'
      flexDir='row'
      justify='space-between'
      mb='5rem'
      mt='3rem'
    >
      <Image w='50.3125rem' h='48.8125rem' src={LoginIcon} objectFit='cover' />{' '}
      <Flex flexDir='column' gap='3rem'>
        <Flex
          flexDir='column'
          gap='1.7rem'
          color='var(--chakra-colors-primary-black)'
        >
          <Text fontFamily='Inter' fontSize='2.25rem' fontWeight='medium'>
            Create an account
          </Text>
          <Text>Enter your details below</Text>
        </Flex>
        <form ref={formRef} onSubmit={handleSubmit(registerUser)}>
          <Flex flexDir='column' gap='2rem'>
            <Flex flexDir='column' gap='2rem'>
              {formFields.map((field) => (
                <Flex
                  key={field.id}
                  flexDir='column'
                  gap='0.6rem'
                  className={css.inputFieldContainer}
                >
                  <Controller
                    name={field.id}
                    control={control}
                    defaultValue=''
                    rules={{ required: `${field.placeholder} is required` }}
                    render={({ field: controllerField }) => (
                      <Input
                        type={field.type}
                        rounded='none'
                        p='0'
                        border='none'
                        borderBottom='0.0625rem solid'
                        borderBottomColor='var(--chakra-colors-primary-black)/50'
                        w='20rem'
                        h='1.625rem'
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

            <Flex flexDir='column' gap='1.4rem'>
              <Button variant='primary' w='full' type='submit'>
                Create Account
              </Button>
              <Flex flexDir='column' gap='1.5rem'>
                <Button variant='transparent' w='full'>
                  <Flex flexDir='row' gap='1rem'>
                    <GoogleIcon />
                    <Text
                      color='var(--chakra-colors-primary-black)'
                      fontWeight='normal'
                      fontSize='1rem'
                    >
                      Sign up with Google
                    </Text>
                  </Flex>
                </Button>
                <Flex
                  flexDir='row'
                  gap='1rem'
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
