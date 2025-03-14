import { BreadCrumb, ErrorBreadCrumb } from '@/shared/components/breadcrumb'
import { CustomContainer } from '@/shared/components/layout/container'
import { Button, Flex, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
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
      <ErrorBreadCrumb />
      <Flex
        flexDir='column'
        gap='3rem'
        alignItems='center'
        color='var(--chakra-colors-primary-black)'
      >
        <Flex flexDir='column' gap='2.5rem' alignItems='center'>
          <Text fontFamily='Inter' fontSize='6.875rem' fontWeight='medium'>
            404 Not Found
          </Text>
          <Text>Your visited page not found. You may go home page.</Text>
        </Flex>
        <NavLink to='/'>
          <Button variant='primary'>Back to home page</Button>
        </NavLink>
      </Flex>
    </CustomContainer>
  )
}
