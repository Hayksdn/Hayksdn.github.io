import { useRef } from 'react'

import { useAuthActions } from '@/shared/api/auth'
import { Button, Flex, Image, Input, Text } from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import LoginIcon from 'shared/assets/images/login/login.jpg'

import css from './login.module.css'

export type LoginFormValues = {
  email: string
  password: string
}

export const Login = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const { loginUser } = useAuthActions()

  const formFields: {
    id: keyof LoginFormValues
    placeholder: string
    type: string
  }[] = [
    { id: 'email', placeholder: 'Email Address', type: 'email' },
    { id: 'password', placeholder: 'Password', type: 'password' },
  ]

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>()

  return (
    <Flex
      w='full'
      h='auto'
      pr='9rem'
      flexDir='row'
      justify='space-between'
      mb='5rem'
      mt='3rem'
    >
      <Image w='50.3125rem' h='48.8125rem' src={LoginIcon} objectFit='cover' />{' '}
      <Flex flexDir='column' gap='1.75rem' justify='center'>
        <Flex
          flexDir='column'
          gap='1.375rem'
          color='var(--chakra-colors-primary-black)'
        >
          <Text fontFamily='Inter' fontSize='2.25rem' fontWeight='medium'>
            Log in to Exclusive
          </Text>
          <Text>Enter your details below</Text>
        </Flex>
        <form ref={formRef} onSubmit={handleSubmit(loginUser)}>
          <Flex flexDir='column' gap='2.625rem'>
            {formFields.map((field) => (
              <Flex
                key={field.id}
                flexDir='column'
                gap='1rem'
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
                      p={0}
                      border='none'
                      borderBottom='0.0625rem solid'
                      borderBottomColor='var(--chakra-colors-primary-black)/50'
                      w='22rem'
                      h='2.625rem'
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
            <Flex
              flexDir='row'
              gap='1.7rem'
              justify='space-between'
              alignItems='center'
            >
              <Button variant='primary' type='submit'>
                Create Account
              </Button>
              <NavLink to='/forgot-password'>
                <Text color='var(--chakra-colors-primary-orange)'>
                  Forgot Password?
                </Text>
              </NavLink>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Flex>
  )
}
