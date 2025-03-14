import { useRef } from 'react'

import { useAuthActions } from '@/shared/api/auth'
import { Button, Flex, Input, Separator, Text } from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

import css from './forgotpassword.module.css'

export type ForgotPasswordFormValues = {
  email: string
}
export const ForgotPassword = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const { forgotPassword } = useAuthActions()

  const { control, handleSubmit } = useForm<ForgotPasswordFormValues>()

  return (
    <Flex justify='center' align='center' w='full' h='auto' mb='5rem' mt='3rem'>
      <Flex
        bg='var(--chakra-colors-primary-white2)'
        boxShadow='0rem 0.0625rem 0.8125rem 0rem #0000000D'
        flexDir='column'
        gap='1.25rem'
        p='1.25rem'
      >
        <Text fontSize='1.5rem'>Find your account</Text>

        <Separator
          orientation='horizontal'
          w='full'
          size='sm'
          borderColor='var(--chakra-colors-primary-black)/30'
          h='auto'
        />
        <form ref={formRef} onSubmit={handleSubmit(forgotPassword)}>
          <Flex
            flexDir='column'
            gap='1.7rem'
            className={css.inputFieldContainer}
          >
            <Text>
              Please enter your email address to search for your account.
            </Text>

            <Controller
              name='email'
              control={control}
              defaultValue=''
              render={({ field: controllerField }) => (
                <Input
                  rounded='none'
                  p={0}
                  border='none'
                  borderBottom='0.0625rem solid'
                  borderBottomColor='var(--chakra-colors-primary-black)/50'
                  w='100%'
                  h='2.625rem'
                  placeholder='Email Address'
                  {...controllerField}
                  color='var(--chakra-colors-primary-black)/40'
                />
              )}
            />

            <Flex
              flexDir='row'
              gap='1.7rem'
              justify='flex-end'
              alignItems='center'
            >
              <NavLink to='/login'>
                <Text color='var(--chakra-colors-primary-black)'>Cancel</Text>
              </NavLink>

              <Button variant='primary' type='submit'>
                Search
              </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Flex>
  )
}
