import { Statistics, Workers } from '@/shared/components/aboutData'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { Services } from '@/shared/components/services'
import { CustomContainer } from '@/shared/container'
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
        gap={10}
        mb={24}
        mt={20}
      >
        <BreadCrumb />
      </CustomContainer>
      <Flex flexDir='row' justify='space-between' pl={40}>
        <Flex flexDir='column' gap={10} justify='center'>
          <Text fontFamily='Inter' fontWeight='semibold' fontSize='5xl'>
            Our Story
          </Text>
          <Flex
            flexDir='column'
            gap={6}
            color='var(--chakra-colors-primary-black)'
            maxW='lg'
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
        <Image w='706px' h='609px' src={OurStoryIcon} objectFit='cover' />
      </Flex>
      <CustomContainer
        variant='container'
        mx='auto'
        display='flex'
        flexDir='column'
        gap={10}
        mb={24}
        mt={20}
      >
        <Flex flexDir='row' gap={8}>
          {Statistics.map((item) => {
            if (item.id === 2) {
              return (
                <Flex
                  key={item.id}
                  w='270px'
                  h='230px'
                  border='none'
                  bg='var(--chakra-colors-primary-orange)'
                  justifyContent='center'
                  textAlign='center'
                  alignContent='center'
                  rounded='md'
                  flexDir='column'
                  gap={5}
                  pt={2}
                >
                  <Flex justify='center'>{item.icon}</Flex>
                  <Flex
                    flexDir='column'
                    gap={3}
                    color='var(--chakra-colors-primary-white2)'
                  >
                    <Text fontSize='3xl' fontFamily='Inter' fontWeight='bold'>
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
                w='270px'
                h='230px'
                border='1px solid'
                justifyContent='center'
                textAlign='center'
                alignContent='center'
                borderColor='var(--chakra-colors-primary-black)/30'
                rounded='md'
                flexDir='column'
                gap={5}
                pt={2}
              >
                <Flex justify='center'>{item.icon}</Flex>
                <Flex
                  flexDir='column'
                  gap={3}
                  color='var(--chakra-colors-primary-black)'
                >
                  <Text fontSize='3xl' fontFamily='Inter' fontWeight='bold'>
                    {item.value}
                  </Text>
                  <Text>{item.label}</Text>
                </Flex>
              </Flex>
            )
          })}
        </Flex>

        <Flex flexDir='row' gap={8}>
          {Workers.map((worker) => {
            return (
              <Flex key={worker.name} border='none' flexDir='column' gap={4}>
                <Flex
                  bg='var(--chakra-colors-primary-grey)'
                  w='370px'
                  h='430px'
                >
                  <Image
                    pt={5}
                    src={worker.image}
                    w='full'
                    h='full'
                    objectFit='contain'
                  />
                </Flex>
                <Flex gap='4' flexDir='column' p={0}>
                  <Flex
                    flexDir='column'
                    gap={2}
                    color='var(--chakra-colors-primary-black)'
                  >
                    <Text fontFamily='Inter' fontWeight='medium' fontSize='3xl'>
                      {worker.name}
                    </Text>
                    <Text>{worker.position}</Text>
                  </Flex>
                  <Flex flexDir='row' gap={4}>
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
