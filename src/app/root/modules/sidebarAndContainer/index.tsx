import { Sidebar } from '@/shared/components/sidebarData'
import { Box, Flex, Image, List, Text } from '@chakra-ui/react'
import { Separator } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import AppleLogo from 'shared/assets/icons/appleLogo'
import ArrowIcon from 'shared/assets/icons/arrow'
import CircleIcon from 'shared/assets/icons/circle'
import DropDownIcon from 'shared/assets/icons/dropdown'
import PhoneImage from 'shared/assets/images/sidebar/phone.jpg'

import css from './sidebar.module.css'

type SidebarItem = {
  name: string
  url: string
}

type Sidebar = SidebarItem[]

export const SidebarAndContainer = () => {
  return (
    <Flex mx='auto' h='fit-content' flexDir='row' gap='2.6rem'>
      <List.Root
        className={css.sidebar}
        pt='1.5rem'
        flexDir='column'
        gap='1.1rem'
        fontSize='1rem'
        listStyleType='none'
      >
        {Sidebar.map((data, index) => {
          if (data.name === "Women's Fashion") {
            return (
              <List.Item key={index}>
                <NavLink to={data.url}>
                  <Flex flexDir='row' gap='2.5rem'>
                    {data.name}
                    <Box transform='rotate(-90deg)'>
                      <DropDownIcon />
                    </Box>
                  </Flex>
                </NavLink>
              </List.Item>
            )
          } else if (data.name === "Men's Fashion") {
            return (
              <List.Item key={index}>
                <NavLink to={data.url}>
                  <Flex flexDir='row' gap='4.1rem'>
                    {data.name}
                    <Box transform='rotate(-90deg)'>
                      <DropDownIcon />
                    </Box>
                  </Flex>
                </NavLink>
              </List.Item>
            )
          } else {
            return (
              <List.Item key={index}>
                <NavLink to={data.url}>{data.name}</NavLink>
              </List.Item>
            )
          }
        })}
      </List.Root>
      <Separator
        orientation='vertical'
        w='0.1rem'
        borderColor='var(--chakra-colors-primary-black)/30'
        h='auto'
      />
      <Flex
        flex='1'
        h='21.5rem'
        bg='var(--chakra-colors-primary-black)'
        mt='1.925rem'
        flexDir='column'
        position='relative'
      >
        <Flex position='relative' pl='4rem'>
          <Flex flexDir='column' gap='1.375rem' pt='1.875rem'>
            <Flex flexDir='row' gap='2rem' alignItems='center'>
              <AppleLogo
                width='2.5rem'
                height='3.0625rem'
                color='var(--chakra-colors-primary-white)'
              />
              <Text color='var(--chakra-colors-primary-white)' fontSize='1rem'>
                iPhone 14 Series
              </Text>
            </Flex>
            <Flex
              flexDir='column'
              fontFamily='Inter'
              fontSize='3rem'
              color='var(--chakra-colors-primary-white)'
              fontWeight='semibold'
            >
              <Text>Up to 10%</Text>
              <Text>off Voucher</Text>
            </Flex>
            <Flex
              flexDir='row'
              gap='0.4rem'
              alignItems='center'
              cursor='pointer'
            >
              <Text
                fontWeight='500'
                color='var(--chakra-colors-primary-white)'
                textDecoration='underline'
                textUnderlineOffset='0.5rem'
              >
                Shop Now
              </Text>
              <ArrowIcon color='var(--chakra-colors-primary-white)' />
            </Flex>
          </Flex>

          <Image
            position='absolute'
            top='2.3rem'
            objectFit='contain'
            right={0}
            src={PhoneImage}
            w='30.625rem'
            h='18.75rem'
          />
        </Flex>

        <Flex
          zIndex='100'
          w='full'
          h='full'
          justify='center'
          alignItems='center'
        >
          <CircleIcon color='white' />
        </Flex>
      </Flex>
    </Flex>
  )
}
