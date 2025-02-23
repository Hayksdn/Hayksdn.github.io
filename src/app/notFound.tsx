import { BreadCrumb, ErrorBreadCrumb } from '@/shared/components/breadcrumb'
import { CustomContainer } from '@/shared/container'
import { Button, Flex, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
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
      <ErrorBreadCrumb />
      <Flex
        flexDir='column'
        gap={20}
        alignItems='center'
        color='var(--chakra-colors-primary-black)'
      >
        <Flex flexDir='column' gap={10} alignItems='center'>
          <Text fontFamily='Inter' fontSize='110px' fontWeight='medium'>
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
