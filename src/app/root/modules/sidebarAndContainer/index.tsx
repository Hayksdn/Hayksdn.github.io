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
    <Flex mx='auto' h='fit-content' flexDir='row' gap={12}>
      <List.Root
        className={css.sidebar}
        pt={8}
        flexDir='column'
        gap={4}
        fontSize='md'
        listStyleType='none'
      >
        {Sidebar.map((data, index) => {
          if (data.name === "Women's Fashion") {
            return (
              <List.Item key={index}>
                <NavLink to={data.url}>
                  <Flex flexDir='row' gap={10}>
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
                  <Flex flexDir='row' gap={16}>
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
        w='0.5px'
        borderColor='var(--chakra-colors-primary-black)/30'
        h='auto'
      />
      <Flex
        flex='1'
        h='344px'
        bg='var(--chakra-colors-primary-black)'
        mt={10}
        flexDir='column'
        position='relative'
      >
        <Flex position='relative' pl={16}>
          <Flex flexDir='column' gap={1.5} pt={14}>
            <Flex flexDir='row' gap={8} alignItems='center'>
              <AppleLogo
                width='40px'
                height='49px'
                color='var(--chakra-colors-primary-white)'
              />
              <Text color='var(--chakra-colors-primary-white)' fontSize='md'>
                iPhone 14 Series
              </Text>
            </Flex>
            <Flex
              flexDir='column'
              fontFamily='Inter'
              fontSize='5xl'
              color='var(--chakra-colors-primary-white)'
              fontWeight='semibold'
            >
              <Text>Up to 10%</Text>
              <Text>off Voucher</Text>
            </Flex>
            <Flex flexDir='row' gap={3} alignItems='center' cursor='pointer'>
              <Text
                fontWeight='500'
                color='var(--chakra-colors-primary-white)'
                textDecoration='underline'
                textUnderlineOffset='8px'
              >
                Shop Now
              </Text>
              <ArrowIcon color='var(--chakra-colors-primary-white)' />
            </Flex>
          </Flex>

          <Image
            position='absolute'
            top={10}
            objectFit='contain'
            right={0}
            src={PhoneImage}
            w='490px'
            h='300px'
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
