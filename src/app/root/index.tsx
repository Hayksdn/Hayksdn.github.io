import { CustomContainer } from '@/shared/components/layout/container'
import { Services } from '@/shared/components/services'
import { ScrollTop } from '@/shared/components/ui/scrollTop'
import { Flex } from '@chakra-ui/react'

import { Advertisement } from './modules/advertisement'
import { BestSelling } from './modules/bestselling'
import { Categories } from './modules/categories'
import { ExploreProducts } from './modules/exploreProducts'
import { FlashSales } from './modules/flashSales'
import { NewArrival } from './modules/newArrival'
import { SidebarAndContainer } from './modules/sidebarAndContainer'

export default function Root() {
  return (
    <>
      <CustomContainer variant='container' mx='auto'>
        <SidebarAndContainer />
      </CustomContainer>
      <FlashSales />
      <CustomContainer
        variant='container'
        mx='auto'
        display='flex'
        flexDir='column'
        gap='3rem'
      >
        <Categories />
        <BestSelling />
        <Advertisement />
        <ExploreProducts />
        <NewArrival />
      </CustomContainer>
      <Services />
      <Flex w='full' h='fit-content' position='relative' mb='5rem'>
        <ScrollTop />
      </Flex>
    </>
  )
}
