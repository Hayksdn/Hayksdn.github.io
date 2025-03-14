import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import SpeakerImage from 'shared/assets/images/advertisement/speaker.png'

import css from './advertisement.module.css'

export const Advertisement = () => {
  const countdownData = [
    { id: 0, value: '23', label: 'Hours' },
    { id: 1, value: '05', label: 'Days' },
    { id: 2, value: '59', label: 'Minutes' },
    { id: 3, value: '35', label: 'Seconds' },
  ]

  return (
    <Flex bg='var(--chakra-colors-primary-black)' h='31.25rem' pl='3.5rem'>
      <Flex flexDir='column' gap='1rem' pt='4rem'>
        <Text color='var(--chakra-colors-primary-green)' fontWeight='semibold'>
          Categories
        </Text>
        <Text
          fontFamily='Inter'
          fontWeight='semibold'
          fontSize='2.25rem'
          color='var(--chakra-colors-primary-white)'
          maxW='26.25rem'
        >
          Enhance Your Music Experience
        </Text>
        <Flex flexDir='row' gap='1.3rem'>
          {countdownData.map(({ id, value, label }) => (
            <Flex
              key={id}
              w='4rem'
              h='3.875rem'
              bg='var(--chakra-colors-primary-white2)'
              border='none'
              rounded='50%'
              justify='center'
              alignItems='center'
              flexDir='column'
            >
              <Text fontWeight='semibold'>{value}</Text>
              <Text
                fontSize='0.75rem'
                fontWeight='normal'
                color='var(--chakra-colors-primary-black)'
              >
                {label}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Button variant='secondary' py='1.5rem' px='3rem'>
          Buy Now
        </Button>
      </Flex>

      <Flex
        w='35.5rem'
        h='20.625rem'
        className={css.advertisement}
        mt='4rem'
        flex={1}
        position='relative'
      >
        <Image
          src={SpeakerImage}
          w='full'
          h='full'
          objectFit='cover'
          zIndex='1000'
        />
        <Box
          className={css.elipse}
          position='absolute'
          w='65%'
          h='full'
          bg='#d9d9d9'
          opacity='0.4'
          rounded='50%'
          top='2rem'
          left='5rem'
        ></Box>
      </Flex>
    </Flex>
  )
}
