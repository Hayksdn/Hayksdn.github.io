import { useRef } from 'react'

import { BreadCrumb } from '@/shared/components/breadcrumb'
import { contactInfo } from '@/shared/components/contactData'
import { CustomContainer } from '@/shared/container'
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

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data)
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
      <BreadCrumb />
      <Flex flexDir='row' gap={6} justify='space-between'>
        <Flex
          boxShadow=' 0px 1px 13px 0px #0000000D'
          flexDir='column'
          gap={6}
          w='sm'
          h='auto'
          py={12}
          pl={10}
        >
          {contactInfo.map((data, index) => {
            if (data.type === 'Call To Us') {
              return (
                <Flex
                  key={index}
                  flexDir='column'
                  gap={6}
                  color='var(--chakra-colors-primary-black)'
                >
                  <Flex flexDir='row' gap={4} alignItems='center'>
                    <Box
                      w='40px'
                      h='40px'
                      bg='var(--chakra-colors-primary-orange)'
                      rounded='50%'
                      alignContent='center'
                      justifyItems='center'
                    >
                      <CallIcon />
                    </Box>
                    <Text fontWeight='medium'>{data.type}</Text>
                  </Flex>
                  <Flex flexDir='column' gap={6}>
                    <Text>{data.description}</Text>
                    <Text>{data.phone}</Text>
                  </Flex>
                  <Separator
                    orientation='horizontal'
                    w='xs'
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
                  gap={6}
                  color='var(--chakra-colors-primary-black)'
                  maxW='xs'
                >
                  <Flex flexDir='row' gap={4} alignItems='center'>
                    <Box
                      w='40px'
                      h='40px'
                      bg='var(--chakra-colors-primary-orange)'
                      rounded='50%'
                      alignContent='center'
                      justifyItems='center'
                    >
                      <EmailIcon />
                    </Box>
                    <Text fontWeight='medium'>{data.type}</Text>
                  </Flex>
                  <Flex flexDir='column' gap={6}>
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
          boxShadow=' 0px 1px 13px 0px #0000000D'
          py={12}
          flexDir='column'
          gap={8}
          px={10}
        >
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <Flex flexDir='column' gap={6} className={css.inputFieldContainer}>
              <Flex flexDir='column' gap={8}>
                <Flex flexDir='row' gap={4}>
                  {formFields.slice(0, 3).map((field) => (
                    <Flex key={field.id} flexDir='column' gap={3}>
                      <Controller
                        name={field.id}
                        control={control}
                        rules={{ required: field.required }}
                        render={({ field: controllerField }) => (
                          <Input
                            bg='var(--chakra-colors-primary-grey)'
                            h='12'
                            w='230px'
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

                {formFields.slice(3).map((field) => (
                  <Flex key={field.id}>
                    <Controller
                      name={field.id}
                      control={control}
                      rules={{ required: field.required }}
                      render={({ field: controllerField }) => (
                        <Textarea
                          bg='var(--chakra-colors-primary-grey)'
                          h='207px'
                          w='full'
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
