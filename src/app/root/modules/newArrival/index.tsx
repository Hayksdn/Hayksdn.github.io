import { Rectangle } from '@/shared/components/ui/rectangle'
import { ShopNow } from '@/shared/components/ui/shopnow'
import { Flex, Image, Text } from '@chakra-ui/react'
import PerfumeIcon from 'shared/assets/images/newArrival/perfume.png'
import PlaystationIcon from 'shared/assets/images/newArrival/playstation.png'
import SpeakersIcon from 'shared/assets/images/newArrival/speakers.png'
import WomenIcon from 'shared/assets/images/newArrival/women.jpg'

import css from './newarrival.module.css'

const newArrivalData = [
  {
    id: 1,
    title: 'PlayStation 5',
    description: 'Black and White version of the PS5 coming out on sale.',
    image: PlaystationIcon,
  },
  {
    id: 2,
    title: "Women's Collections",
    description: 'Featured woman collections that give you another vibe.',
    image: WomenIcon,
  },
  {
    id: 3,
    title: 'Speakers',
    description: 'Amazon wireless speakers',
    image: SpeakersIcon,
  },
  {
    id: 4,
    title: 'Perfume',
    description: 'GUCCI INTENSE OUD EDP',
    image: PerfumeIcon,
  },
]

const newArrivalSecondSection=2
export const NewArrival = () => {
  return (
    <Flex flexDir='column' gap='3rem'>
      <Flex flexDir='column' gap='1.4rem'>
        <Flex alignItems='center' flexDir='row' gap='1rem'>
          <Rectangle />
          <Text
            fontSize='1rem'
            color='var(--chakra-colors-primary-orange)'
            fontWeight='semibold'
          >
            Featured
          </Text>
        </Flex>

        <Text
          fontFamily='Inter'
          fontSize='2.25rem'
          color='var(--chakra-colors-primary-black)'
          fontWeight='semibold'
        >
          New Arrival
        </Text>
      </Flex>

      <Flex flexDir='row' gap='1.9rem'>
        <Flex
          bg='var(--chakra-colors-primary-black)'
          w='35.625rem'
          h='37.5rem'
          position='relative'
        >
          <Image
            src={newArrivalData[0].image}
            w='full'
            h='full'
            objectFit='cover'
          />
          <Flex
            position='absolute'
            left='1.625rem'
            bottom='1.625rem'
            flexDir='column'
            gap={2.5}
          >
            <Text
              fontFamily='Inter'
              color='var(--chakra-colors-primary-white)'
              fontWeight='semibold'
              fontSize='1.25rem'
            >
              {newArrivalData[0].title}
            </Text>
            <Text
              color='var(--chakra-colors-primary-white)'
              fontSize='0.875rem'
              maxW='15.125rem'
            >
              {newArrivalData[0].description}
            </Text>
            <ShopNow />
          </Flex>
        </Flex>

        <Flex flexDir='column' gap='2rem'>
          <Flex
            bg='var(--chakra-colors-primary-black)'
            w='35.625rem'
            h='17.75rem'
            position='relative'
            className={css.womenIconContainer}
            zIndex={10000}
          >
            <Flex w='27rem' h='full' position='absolute' right={0}>
              <Image
                src={newArrivalData[1].image}
                w='full'
                h='full'
                objectFit='contain'
                zIndex={10000}
              />
            </Flex>
            <Flex
              position='absolute'
              left='1.625rem'
              bottom='1.625rem'
              flexDir='column'
              gap='1.15625rem'
              zIndex={10001}
            >
              <Text
                fontFamily='Inter'
                color='var(--chakra-colors-primary-white)'
                fontWeight='semibold'
                fontSize='1.5rem'
              >
                {newArrivalData[1].title}
              </Text>
              <Text
                color='var(--chakra-colors-primary-white)'
                fontSize='0.875rem'
                maxW='15.75rem'
              >
                {newArrivalData[1].description}
              </Text>
              <ShopNow />
            </Flex>
          </Flex>

          <Flex flexDir='row' gap='1.7rem'>
            {newArrivalData.slice(newArrivalSecondSection).map((item) => (
              <Flex
                key={item.id}
                bg='var(--chakra-colors-primary-black)'
                w='16.875rem'
                h='17.75rem'
                position='relative'
                className={item.id === 3 ? css.speakersIconContainer : ''}
              >
                <Image
                  src={item.image}
                  w={item.id === 3 ? '11.875rem' : '13.125rem'}
                  h={item.id === 3 ? '13.8125rem' : '13.875rem'}
                  objectFit={item.id === 3 ? 'contain' : 'cover'}
                  position='absolute'
                  left={item.id === 3 ? '4rem' : '1.5625rem'}
                  top={item.id === 3 ? '2.625rem' : '2.3125rem'}
                  zIndex={100}
                />
                <Flex
                  position='absolute'
                  left='1.375rem'
                  bottom='1.625rem'
                  flexDir='column'
                  gap={2.5}
                  zIndex={101}
                >
                  <Text
                    fontFamily='Inter'
                    color='var(--chakra-colors-primary-white)'
                    fontWeight='semibold'
                    fontSize='1.5rem'
                  >
                    {item.title}
                  </Text>
                  <Text
                    color='var(--chakra-colors-primary-white)'
                    fontSize='0.875rem'
                  >
                    {item.description}
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
                  top='2rem'
                  className={css.newArrivalElipse}
                />
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
