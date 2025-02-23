import { Flex, Image, Input, Text } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import AppStoreIcon from 'shared/assets/icons/appStore'
import CopyRightIcon from 'shared/assets/icons/copyRight'
import FacebookIcon from 'shared/assets/icons/facebook'
import GooglePlayIcon from 'shared/assets/icons/googlePlay'
import InstagramIcon from 'shared/assets/icons/instagram'
import LinkedinIcon from 'shared/assets/icons/linkedin'
import SendIcon from 'shared/assets/icons/send'
import TwitterIcon from 'shared/assets/icons/twitter'
import QrCode from 'shared/assets/images/footer/qrCode.jpg'

import { CustomContainer } from '../container'
import { FooterData } from './footerData'

type Link = {
  name: string
  url: string
}

type SocialLink = {
  icon: string
  url: string
}

type Exclusive = {
  heading: string
  subheading: string
  description: string
}

type Support = {
  heading: string
  address1: string
  email: string
  phone: string
}

type DownloadApp = {
  heading: string
  subheading: string
  socialLinks: SocialLink[]
}

type QuickLinks = {
  heading: string
  links: Link[]
}
type AccountLinks = {
  heading: string
  links: Link[]
}

type FooterData = {
  exclusive: Exclusive
  support: Support
  accountLinks: Link[]
  quickLinks: Link[]
  downloadApp: DownloadApp
  socialLinks: SocialLink[]
}

export const Footer = () => {
  const getSocialMediaIcon = (icon: string) => {
    switch (icon) {
      case 'facebook':
        return <FacebookIcon />
      case 'instagram':
        return <InstagramIcon color='white' />
      case 'linkedin':
        return <LinkedinIcon color='white' />
      case 'twitter':
        return <TwitterIcon color='white' />
    }
  }

  return (
    <Flex
      w='full'
      bg='var(--chakra-colors-primary-black)'
      justify='center'
      flexDir='column'
      justifyContent='space-between'
    >
      <CustomContainer
        variant='container'
        mx='auto'
        display='flex'
        flexDir='column'
        gap={20}
        pb={4}
        h='full'
      >
        <Grid pt={4} templateColumns='repeat(5, 1fr)' gap={14} mt={20}>
          {FooterData &&
            Object.entries(FooterData).map(([section, data], index) => {
              if (section === 'exclusive') {
                const exclusiveData = data as Exclusive
                return (
                  <Flex
                    flexDir='column'
                    gap={4}
                    color='var(--chakra-colors-primary-white)'
                    key={section}
                  >
                    <Flex flexDir='column' gap={6}>
                      <Text fontFamily='Inter' fontWeight='bold' fontSize='2xl'>
                        {exclusiveData.heading}
                      </Text>
                      <Text fontWeight='medium' fontSize='xl'>
                        {exclusiveData.subheading}
                      </Text>
                      <Text fontSize='md'>{exclusiveData.description}</Text>
                    </Flex>
                    <Flex w='217px' h={12} position='relative'>
                      <Input
                        placeholder='Enter your email'
                        w='full'
                        fontSize='md'
                        fontWeight='normal'
                        position='relative'
                        h='full'
                        border='1.5px solid'
                        borderColor='var(--chakra-colors-primary-white)'
                      />
                      <Flex position='absolute' right={4} top={3}>
                        <SendIcon />
                      </Flex>
                    </Flex>
                  </Flex>
                )
              } else if (section === 'support') {
                const supportData = data as Exclusive
                return (
                  <Flex
                    key={section}
                    flexDir='column'
                    gap={6}
                    color='var(--chakra-colors-primary-white)'
                  >
                    <Text fontWeight='medium' fontSize='xl'>
                      {supportData.heading}
                    </Text>
                    <Flex flexDir='column' gap={4}>
                      {Object.entries(supportData).map(([key, value]) => {
                        return (
                          <Text fontSize='md' key={key}>
                            {value}
                          </Text>
                        )
                      })}
                    </Flex>
                  </Flex>
                )
              } else if (
                section === 'accountLinks' ||
                section === 'quickLinks'
              ) {
                const sectionData = data as QuickLinks | AccountLinks
                return (
                  <Flex
                    flexDir='column'
                    gap={6}
                    color='var(--chakra-colors-primary-white)'
                    key={section}
                  >
                    <Text fontWeight='medium' fontSize='xl'>
                      {sectionData.heading}
                    </Text>
                    <Flex flexDir='column' gap={4}>
                      {sectionData.links?.map((link) => {
                        return (
                          <NavLink to={link.url} key={link.url}>
                            <Text fontSize='md'>{link.name}</Text>
                          </NavLink>
                        )
                      })}
                    </Flex>
                  </Flex>
                )
              } else if (section === 'downloadApp') {
                const downloadData = data as DownloadApp
                return (
                  <Flex flexDir='column' gap={6} key={index}>
                    <Flex
                      flexDir='column'
                      gap={6}
                      color='var(--chakra-colors-primary-white)'
                    >
                      <Text fontWeight='medium' fontSize='xl'>
                        {downloadData.heading}
                      </Text>
                      <Flex flexDir='column' gap={2}>
                        <Text
                          fontWeight='medium'
                          fontSize='xs'
                          color='var(--chakra-colors-primary-white2)/70'
                        >
                          {downloadData.subheading}
                        </Text>
                        <Flex flexDir='row' gap={2}>
                          <Image
                            w='80px'
                            h='80px'
                            src={QrCode}
                            border='2.5px solid '
                            borderColor='var(--chakra-colors-primary-white2)'
                            objectFit='contain'
                          />
                          <Flex flexDir='column' gap={1}>
                            <GooglePlayIcon />
                            <AppStoreIcon />
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex flexDir='row' gap={6}>
                      {downloadData.socialLinks?.map((link) => {
                        return (
                          <NavLink to={link.url} key={link.url}>
                            {getSocialMediaIcon(link.icon)}
                          </NavLink>
                        )
                      })}
                    </Flex>
                  </Flex>
                )
              }
            })}
        </Grid>
        <Flex flexDir='row' gap={2} justifyContent='center'>
          <CopyRightIcon />
          <Text fontSize='md' color='var(--chakra-colors-primary-white)/30'>
            Copyright Rimel 2025. All right reserved
          </Text>
        </Flex>
      </CustomContainer>
    </Flex>
  )
}
