import { useRef } from 'react'

import { useAuthActions } from '@/shared/api/auth'
import { Button, Flex, Input, Text } from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'

import css from './resetpassword.module.css'

export type ResetPasswordFormValues = {
  password: string
}

export const ResetPassword = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const { resetPassword } = useAuthActions()

  const { control, handleSubmit } = useForm<ResetPasswordFormValues>()

  return (
    <Flex justify='center' align='center' w='full' h='auto' mb='5rem' mt='3rem'>
      <Flex
        bg='var(--chakra-colors-primary-white2)'
        boxShadow='0px 1px 13px 0px #0000000D'
        flexDir='column'
        gap='1.25rem'
        p='1.25rem'
      >
        <form ref={formRef} onSubmit={handleSubmit(resetPassword)}>
          <Flex flexDir='column' gap='1rem' className={css.inputFieldContainer}>
            <Text fontSize='1.5rem'>Please enter your new password</Text>

            <Controller
              name='password'
              control={control}
              defaultValue=''
              render={({ field: controllerField }) => (
                <Input
                  rounded='none'
                  type='password'
                  p='0'
                  border='none'
                  borderBottom='0.0625rem solid'
                  borderBottomColor='var(--chakra-colors-primary-black)/50'
                  w='100%'
                  h='1.625rem'
                  placeholder='New Password'
                  {...controllerField}
                  color='var(--chakra-colors-primary-black)/40'
                />
              )}
            />

            <Flex
              flexDir='row'
              gap='1.3rem'
              justify='flex-end'
              alignItems='center'
            >
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Flex>
  )
}
