import { Rectangle } from '@/shared/components/ui/rectangle'
import { ShopNow } from '@/shared/components/ui/shopnow'
import { Flex, Image, Text } from '@chakra-ui/react'
import PerfumeIcon from 'shared/assets/images/newArrival/perfume.png'
import PlaystationIcon from 'shared/assets/images/newArrival/playstation.png'
import SpeakersIcon from 'shared/assets/images/newArrival/speakers.png'
import WomenIcon from 'shared/assets/images/newArrival/women.jpg'

import css from './newarrival.module.css'

export const NewArrival = () => {
  return (
    <Flex maxW='1170px' w='full' mx='auto' flexDir='column' gap={14}>
      <Flex flexDir='column' gap={5}>
        <Flex alignItems='center' flexDir='row' gap={4}>
          <Rectangle />
          <Text
            fontSize='md'
            color='var(--chakra-colors-primary-orange)'
            fontWeight='semibold'
          >
            Featured
          </Text>
        </Flex>

        <Text
          fontFamily='Inter'
          fontSize='4xl'
          color='var(--chakra-colors-primary-black)'
          fontWeight='semibold'
        >
          New Arrival
        </Text>
      </Flex>
      <Flex flexDir='row' gap={7}>
        <Flex
          bg='var(--chakra-colors-primary-black)'
          w='570px'
          h='600px'
          position='relative'
        >
          <Image src={PlaystationIcon} w='full' h='full' objectFit='cover' />
          <Flex
            position='absolute'
            left={10}
            bottom={10}
            flexDir='column'
            gap={2.5}
          >
            <Text
              fontFamily='Inter'
              color='var(--chakra-colors-primary-white)'
              fontWeight='semibold'
              fontSize='2xl'
            >
              PlayStation 5
            </Text>
            <Text
              color='var(--chakra-colors-primary-white)'
              fontSize='sm'
              maxW='242px'
            >
              Black and White version of the PS5 coming out on sale.
            </Text>
            <ShopNow />
          </Flex>
        </Flex>

        <Flex flexDir='column' gap={8}>
          <Flex
            bg='var(--chakra-colors-primary-black)'
            w='570px'
            h='284px'
            position='relative'
            className={css.womenIconContainer}
            zIndex={10000}
          >
            <Flex w='432px' h='full' position='absolute' right={0}>
              <Image
                src={WomenIcon}
                w='full'
                h='full'
                objectFit='contain'
                zIndex={10000}
              />
            </Flex>
            <Flex
              position='absolute'
              left={10}
              bottom={10}
              flexDir='column'
              gap={2.5}
              zIndex={10001}
            >
              <Text
                fontFamily='Inter'
                color='var(--chakra-colors-primary-white)'
                fontWeight='semibold'
                fontSize='2xl'
              >
                Women's Collections
              </Text>
              <Text
                color='var(--chakra-colors-primary-white)'
                fontSize='sm'
                maxW='252px'
              >
                Featured woman collections that give you another vibe.
              </Text>
              <ShopNow />
            </Flex>
          </Flex>

          <Flex flexDir='row' gap={7}>
            <Flex
              bg='var(--chakra-colors-primary-black)'
              w='270px'
              h='284px'
              position='relative'
              className={css.speakersIconContainer}
            >
              <Image
                src={SpeakersIcon}
                w='190px'
                h='221px'
                objectFit='contain'
                position='absolute'
                left={16}
                top={10}
                zIndex={100}
              />
              <Flex
                position='absolute'
                left={6}
                bottom={10}
                flexDir='column'
                gap={2.5}
                zIndex={101}
              >
                <Text
                  fontFamily='Inter'
                  color='var(--chakra-colors-primary-white)'
                  fontWeight='semibold'
                  fontSize='2xl'
                >
                  Speakers
                </Text>
                <Text color='var(--chakra-colors-primary-white)' fontSize='sm'>
                  Amazon wireless speakers
                </Text>
                <ShopNow />
              </Flex>
              <Flex
                position='absolute'
                w='70%'
                h='100%'
                bg='#d9d9d9'
                opacity={0.4}
                rounded='50%'
                top={5}
                className={css.newArrivalElipse}
              ></Flex>
            </Flex>

            <Flex
              bg='var(--chakra-colors-primary-black)'
              w='270px'
              h='284px'
              position='relative'
            >
              <Image
                src={PerfumeIcon}
                w='210px'
                h='222px'
                objectFit='cover'
                position='absolute'
                left={9}
                top={5}
                zIndex={100}
              />
              <Flex
                position='absolute'
                left={6}
                bottom={10}
                flexDir='column'
                gap={2.5}
                zIndex={101}
              >
                <Text
                  fontFamily='Inter'
                  color='var(--chakra-colors-primary-white)'
                  fontWeight='semibold'
                  fontSize='2xl'
                >
                  Perfume
                </Text>
                <Text color='var(--chakra-colors-primary-white)' fontSize='sm'>
                  GUCCI INTENSE OUD EDP
                </Text>
                <ShopNow />
              </Flex>
              <Flex
                position='absolute'
                w='full'
                h='full'
                bg='#d9d9d9'
                opacity={0.5}
                rounded='50%'
                top={5}
                className={css.newArrivalElipse}
              ></Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
