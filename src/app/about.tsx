import { Statistics, Workers } from '@/shared/components/aboutData'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { CustomContainer } from '@/shared/components/layout/container'
import { Services } from '@/shared/components/services'
import { Flex, Image, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import CircleIcon from 'shared/assets/icons/circle'
import InstagramIcon from 'shared/assets/icons/instagram'
import LinkedinIcon from 'shared/assets/icons/linkedin'
import TwitterIcon from 'shared/assets/icons/twitter'
import OurStoryIcon from 'shared/assets/images/about/ourStory.jpg'

export const About = () => {
  return (
    <>
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
      </CustomContainer>
      <Flex flexDir='row' justify='space-between' pl='11rem'>
        <Flex flexDir='column' gap='3rem' justify='center'>
          <Text fontFamily='Inter' fontWeight='semibold' fontSize='3rem'>
            Our Story
          </Text>
          <Flex
            flexDir='column'
            gap='1.5rem'
            color='var(--chakra-colors-primary-black)'
            maxW='32rem'
          >
            <Text>
              Launced in 2015, Exclusive is South Asia's premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </Text>
            <Text>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </Text>
          </Flex>
        </Flex>
        <Image
          w='44.125rem'
          h='38.0625rem'
          src={OurStoryIcon}
          objectFit='cover'
        />{' '}
      </Flex>
      <CustomContainer
        variant='container'
        mx='auto'
        display='flex'
        flexDir='column'
        gap='3rem'
        mb='5rem'
        mt='3rem'
      >
        <Flex flexDir='row' gap='2rem'>
          {Statistics.map((item) => {
            if (item.id === 2) {
              return (
                <Flex
                  key={item.id}
                  w='16.875rem'
                  h='14.375rem'
                  border='none'
                  bg='var(--chakra-colors-primary-orange)'
                  justifyContent='center'
                  textAlign='center'
                  alignContent='center'
                  rounded='md'
                  flexDir='column'
                  gap='1.25rem'
                  pt='0.5rem'
                >
                  <Flex justify='center'>{item.icon}</Flex>
                  <Flex
                    flexDir='column'
                    gap='0.3rem'
                    color='var(--chakra-colors-primary-white2)'
                  >
                    <Text fontSize='2rem' fontFamily='Inter' fontWeight='bold'>
                      {item.value}
                    </Text>
                    <Text>{item.label}</Text>
                  </Flex>
                </Flex>
              )
            }

            return (
              <Flex
                key={item.id}
                w='16.875rem'
                h='14.375rem'
                border='1px solid'
                justifyContent='center'
                textAlign='center'
                alignContent='center'
                borderColor='var(--chakra-colors-primary-black)/30'
                rounded='md'
                flexDir='column'
                gap='1.25rem'
                pt='0.5rem'
              >
                <Flex justify='center'>{item.icon}</Flex>
                <Flex
                  flexDir='column'
                  gap='0.3rem'
                  color='var(--chakra-colors-primary-black)'
                >
                  <Text
                    fontSize='1.875rem'
                    fontFamily='Inter'
                    fontWeight='bold'
                  >
                    {item.value}
                  </Text>
                  <Text>{item.label}</Text>
                </Flex>
              </Flex>
            )
          })}
        </Flex>

        <Flex flexDir='row' gap='2rem'>
          {Workers.map((worker) => {
            return (
              <Flex key={worker.name} border='none' flexDir='column' gap='1rem'>
                <Flex
                  bg='var(--chakra-colors-primary-grey)'
                  w='23.125rem'
                  h='26.875rem'
                >
                  <Image
                    pt='2rem'
                    src={worker.image}
                    w='full'
                    h='full'
                    objectFit='contain'
                  />
                </Flex>
                <Flex gap='1rem' flexDir='column' p={0}>
                  <Flex
                    flexDir='column'
                    gap='0.3rem'
                    color='var(--chakra-colors-primary-black)'
                  >
                    <Text
                      fontFamily='Inter'
                      fontWeight='medium'
                      fontSize='1.875rem'
                    >
                      {worker.name}
                    </Text>
                    <Text>{worker.position}</Text>
                  </Flex>
                  <Flex flexDir='row' gap='1rem'>
                    <NavLink to={worker.twitter}>
                      <TwitterIcon color='black' />
                    </NavLink>
                    <NavLink to={worker.instagram}>
                      <InstagramIcon color='black' />
                    </NavLink>
                    <NavLink to={worker.linkedin}>
                      <LinkedinIcon color='black' />
                    </NavLink>
                  </Flex>
                </Flex>
              </Flex>
            )
          })}
        </Flex>
        <Flex justify='center'>
          <CircleIcon color='#0000004D' />
        </Flex>
        <Services />
      </CustomContainer>
    </>
  )
}
