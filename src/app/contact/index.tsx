import { useRef } from 'react'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { contactInfo } from '@/shared/components/contactData'
import { CustomContainer } from '@/shared/components/layout/container'
import {
  Box,
  Button,
  Flex,
  Input,
  Separator,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'
import CallIcon from 'shared/assets/icons/call'
import EmailIcon from 'shared/assets/icons/email'

import css from './contact.module.css'

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const formFields = [
    { id: 'name', placeholder: 'Your Name', required: true },
    { id: 'email', placeholder: 'Your Email', required: true },
    { id: 'phone', placeholder: 'Your Phone', required: true },
    { id: 'message', placeholder: 'Your Message', required: false },
  ]
  const firstSection=3
  
  const onSubmit = (data: any) => {
    console.log('Form submitted:', data)
  }

  return (
    <CustomContainer
      variant='container'
      mx='auto'
      display='flex'
      flexDir='column'
      gap='3rem'
      mb='5rem'
      mt='3rem'
    >
      <BreadCrumb />
      <Flex flexDir='row' gap='1.7rem' justify='space-between'>
        <Flex
          boxShadow='0rem 0.0625rem 0.8125rem 0rem #0000000D'
          flexDir='column'
          gap='1.375rem'
          w='24rem'
          h='auto'
          py='1.75rem'
          px='1.2rem'
        >
          {contactInfo.map((data, index) => {
            if (data.type === 'Call To Us') {
              return (
                <Flex
                  key={index}
                  flexDir='column'
                  gap='1.7rem'
                  color='var(--chakra-colors-primary-black)'
                >
                  <Flex flexDir='row' gap='1.5rem' alignItems='center'>
                    <Box
                      w='2.5rem'
                      h='2.5rem'
                      bg='var(--chakra-colors-primary-orange)'
                      rounded='50%'
                      alignContent='center'
                      justifyItems='center'
                    >
                      <CallIcon />
                    </Box>
                    <Text fontWeight='medium'>{data.type}</Text>
                  </Flex>
                  <Flex flexDir='column' gap='1.7rem'>
                    <Text>{data.description}</Text>
                    <Text>{data.phone}</Text>
                  </Flex>
                  <Separator
                    orientation='horizontal'
                    w='full'
                    size='sm'
                    borderColor='var(--chakra-colors-primary-black)/30'
                    h='auto'
                  />
                </Flex>
              )
            } else {
              return (
                <Flex
                  key={index}
                  flexDir='column'
                  gap='1.7rem'
                  color='var(--chakra-colors-primary-black)'
                  maxW='20rem'
                >
                  <Flex flexDir='row' gap='1.7rem' alignItems='center'>
                    <Box
                      w='2.5rem'
                      h='2.5rem'
                      bg='var(--chakra-colors-primary-orange)'
                      rounded='50%'
                      alignContent='center'
                      justifyItems='center'
                    >
                      <EmailIcon />
                    </Box>
                    <Text fontWeight='medium'>{data.type}</Text>
                  </Flex>
                  <Flex flexDir='column' gap='1.7rem'>
                    <Text>{data.responseTime}</Text>
                    {data.emails?.map((email, i) => (
                      <Text key={i}>Email: {email}</Text>
                    ))}
                  </Flex>
                </Flex>
              )
            }
          })}
        </Flex>

        <Flex
          boxShadow='0rem 0.0625rem 0.8125rem 0rem #0000000D'
          py='1.75rem'
          flexDir='column'
          gap='0.5rem'
          px='1.625rem'
        >
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <Flex
              flexDir='column'
              gap='1.75rem'
              className={css.inputFieldContainer}
            >
              <Flex flexDir='column' gap='2rem'>
                <Flex flexDir='row' gap='1.75rem'>
                  {formFields.slice(0, firstSection).map((field) => (
                    <Flex key={field.id} flexDir='column' gap='1.75rem'>
                      <Controller
                        name={field.id}
                        control={control}
                        rules={{ required: field.required }}
                        render={({ field: controllerField }) => (
                          <Input
                            bg='var(--chakra-colors-primary-grey)'
                            h='2.75rem'
                            w='14.375rem'
                            border='none'
                            {...controllerField}
                            placeholder={field.placeholder}
                          />
                        )}
                      />
                      {errors[field.id] && (
                        <Text color='red.400'>
                          {field.placeholder} is required
                        </Text>
                      )}
                    </Flex>
                  ))}
                </Flex>

                {formFields.slice(firstSection).map((field) => (
                  <Flex key={field.id}>
                    <Controller
                      name={field.id}
                      control={control}
                      rules={{ required: field.required }}
                      render={({ field: controllerField }) => (
                        <Textarea
                          bg='var(--chakra-colors-primary-grey)'
                          h='12.9375rem'
                          w='100%'
                          {...controllerField}
                          placeholder={field.placeholder}
                        />
                      )}
                    />
                    {errors[field.id] && (
                      <Text color='red.400'>
                        {field.placeholder} is required
                      </Text>
                    )}
                  </Flex>
                ))}
              </Flex>
              <Flex justify='end'>
                <Button variant='primary' type='submit'>
                  Send Message
                </Button>
              </Flex>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </CustomContainer>
  )
}
