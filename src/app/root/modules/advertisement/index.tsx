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
    <Flex bg='var(--chakra-colors-primary-black)' h='500px' pl={14}>
      <Flex flexDir='column' gap={4} pt={16}>
        <Text color='var(--chakra-colors-primary-green)' fontWeight='semibold'>
          Categories
        </Text>
        <Text
          fontFamily='Inter'
          fontWeight='semibold'
          fontSize='5xl'
          color='var(--chakra-colors-primary-white)'
          maxW='420px'
        >
          Enhance Your Music Experience
        </Text>
        <Flex flexDir='row' gap={6}>
          {countdownData.map(({ id, value, label }) => (
            <Flex
              key={id}
              w='64px'
              h='62px'
              bg='var(--chakra-colors-primary-white2)'
              border='none'
              rounded='50%'
              justify='center'
              alignItems='center'
              flexDir='column'
            >
              <Text fontWeight='semibold'>{value}</Text>
              <Text
                fontSize='xs'
                fontWeight='normal'
                color='var(--chakra-colors-primary-black)'
              >
                {label}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Button variant='secondary' py={6} px={12}>
          Buy Now
        </Button>
      </Flex>

      <Flex
        w='568px'
        h='330px'
        className={css.advertisement}
        mt={16}
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
          top={8}
          left={20}
        ></Box>
      </Flex>
    </Flex>
  )
}
