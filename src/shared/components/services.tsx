import { Box, Flex, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import DelieveryIcon from 'shared/assets/icons/delievery'
import MoneyBackIcon from 'shared/assets/icons/moneyBack'
import ServiceIcon from 'shared/assets/icons/service'

import { CustomContainer } from '../container'

export const Services = () => {
  const services = [
    {
      id: 0,
      svg: <DelieveryIcon color='white' />,
      firstSpan: 'FREE AND FAST DELIVERY',
      secondspan: 'Free delivery for all orders over $140',
    },
    {
      id: 1,
      svg: <ServiceIcon />,
      firstSpan: '24/7 CUSTOMER SERVICE',
      secondspan: 'Friendly 24/7 customer support',
    },
    {
      id: 2,
      svg: <MoneyBackIcon />,
      firstSpan: 'MONEY BACK GUARANTEE',
      secondspan: 'We return money within 30 days',
    },
  ]

  return (
    <CustomContainer
      variant='containerXS'
      mx='auto'
      display='flex'
      flexDir='row'
      justifyContent='space-between'
    >
      {services.map((service) => {
        return (
          <NavLink to='/' key={service.id}>
            <Flex flexDir='column' gap={6} alignItems='center'>
              <Box
                w='80px'
                h='80px'
                rounded='50%'
                bg='#2F2E30/30'
                alignContent='center'
                justifyItems='center'
              >
                <Box
                  w='58px'
                  h='58px'
                  rounded='50%'
                  bg='var(--chakra-colors-primary-black)'
                  justifyItems='center'
                  alignContent='center'
                >
                  {service.svg}
                </Box>
              </Box>

              <Flex flexDir='column' gap={2} alignItems='center'>
                <Text
                  color='var(--chakra-colors-primary-black)'
                  fontWeight='semibold'
                  fontSize='xl'
                >
                  {service.firstSpan}
                </Text>

                <Text fontSize='sm' color='var(--chakra-colors-primary-black)'>
                  {service.secondspan}
                </Text>
              </Flex>
            </Flex>
          </NavLink>
        )
      })}
    </CustomContainer>
  )
}
