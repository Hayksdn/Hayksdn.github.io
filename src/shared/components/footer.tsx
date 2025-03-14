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

import { FooterData } from './footerData'
import { CustomContainer } from './layout/container'

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
        gap='4rem'
        pb='1rem'
        h='full'
      >
        <Grid pt={4} templateColumns='repeat(5, 1fr)' gap='3rem' mt='4rem'>
          {FooterData &&
            Object.entries(FooterData).map(([section, data], index) => {
              if (section === 'exclusive') {
                const exclusiveData = data as Exclusive
                return (
                  <Flex
                    flexDir='column'
                    gap='1rem'
                    color='var(--chakra-colors-primary-white)'
                    key={section}
                  >
                    <Flex flexDir='column' gap='1.3rem'>
                      <Text
                        fontFamily='Inter'
                        fontWeight='bold'
                        fontSize='1.5rem'
                      >
                        {exclusiveData.heading}
                      </Text>
                      <Text fontWeight='medium' fontSize='1.25rem'>
                        {exclusiveData.subheading}
                      </Text>
                      <Text fontSize='1rem'>{exclusiveData.description}</Text>
                    </Flex>
                    <Flex w='13.5625rem' h='3rem' position='relative'>
                      <Input
                        placeholder='Enter your email'
                        w='full'
                        fontSize='1rem'
                        fontWeight='normal'
                        position='relative'
                        h='full'
                        border='0.09375rem solid'
                        borderColor='var(--chakra-colors-primary-white)'
                      />
                      <Flex position='absolute' right='1rem' top='0.8rem'>
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
                    gap='1.3rem'
                    color='var(--chakra-colors-primary-white)'
                  >
                    <Text fontWeight='medium' fontSize='1.25rem'>
                      {supportData.heading}
                    </Text>
                    <Flex flexDir='column' gap='1rem'>
                      {Object.entries(supportData).map(([key, value]) => {
                        return (
                          <Text fontSize='1rem' key={key}>
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
                    gap='1.3rem'
                    color='var(--chakra-colors-primary-white)'
                    key={section}
                  >
                    <Text fontWeight='medium' fontSize='1.25rem'>
                      {sectionData.heading}
                    </Text>
                    <Flex flexDir='column' gap='1rem'>
                      {sectionData.links?.map((link) => {
                        return (
                          <NavLink to={link.url} key={link.url}>
                            <Text fontSize='1rem'>{link.name}</Text>
                          </NavLink>
                        )
                      })}
                    </Flex>
                  </Flex>
                )
              } else if (section === 'downloadApp') {
                const downloadData = data as DownloadApp
                return (
                  <Flex flexDir='column' gap='1.3rem' key={index}>
                    <Flex
                      flexDir='column'
                      gap='1.3rem'
                      color='var(--chakra-colors-primary-white)'
                    >
                      <Text fontWeight='medium' fontSize='1.25rem'>
                        {downloadData.heading}
                      </Text>
                      <Flex flexDir='column' gap='0.5rem'>
                        <Text
                          fontWeight='medium'
                          fontSize='0.75rem'
                          color='var(--chakra-colors-primary-white2)/70'
                          textWrap='nowrap'
                        >
                          {downloadData.subheading}
                        </Text>
                        <Flex flexDir='row' gap='0.5rem'>
                          <Image
                            w='5rem'
                            h='5rem'
                            src={QrCode}
                            border='0.15625rem solid'
                            borderColor='var(--chakra-colors-primary-white2)'
                            objectFit='contain'
                          />
                          <Flex flexDir='column' gap='0.2rem'>
                            <GooglePlayIcon />
                            <AppStoreIcon />
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex flexDir='row' gap='1.3rem'>
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
        <Flex flexDir='row' gap='0.3rem' justifyContent='center'>
          <CopyRightIcon />
          <Text fontSize='1rem' color='var(--chakra-colors-primary-white)/30'>
            Copyright Rimel 2025. All right reserved
          </Text>
        </Flex>
      </CustomContainer>
    </Flex>
  )
}
