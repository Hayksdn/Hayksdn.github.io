import type { ReactNode } from 'react'

import { Flex } from '@chakra-ui/react'

import { Footer } from './components/footer'
import { Navbar } from './components/navbar'
import { TopBar } from './components/topbar'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex w='100%' h='fit-content' minH='100%' direction='column' mx='auto'>
      <TopBar />
      <Navbar />

      <Flex height='100%' flex={1} flexDir='column' gap='50px'>
        {children}
      </Flex>
      <Footer />
    </Flex>
  )
}
