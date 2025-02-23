import { useState } from 'react'

import { Navigation } from '@/shared/components/ui/navigation'
import { Rectangle } from '@/shared/components/ui/rectangle'
import { Flex, Separator, Stack, Text } from '@chakra-ui/react'
import { List } from '@chakra-ui/react'
import CameraIcon from 'shared/assets/icons/camera'
import ComputerIcon from 'shared/assets/icons/computer'
import GamepadIcon from 'shared/assets/icons/gamepad'
import HeadphonesIcon from 'shared/assets/icons/headphones'
import PhoneIcon from 'shared/assets/icons/phone'
import WatchIcon from 'shared/assets/icons/watch'

import css from './categories.module.css'

type Category = {
  id: number
  name: string
  svg: JSX.Element
}

export const Categories = () => {
  const categories: Category[] = [
    {
      id: 0,
      name: 'Phones',
      svg: <PhoneIcon />,
    },
    {
      id: 1,
      name: 'Computers',
      svg: <ComputerIcon />,
    },
    {
      id: 2,
      name: 'SmartWatch',
      svg: <WatchIcon />,
    },
    {
      id: 3,
      name: 'Camera',
      svg: <CameraIcon />,
    },
    {
      id: 4,
      name: 'HeadPhones',
      svg: <HeadphonesIcon />,
    },
    {
      id: 5,
      name: 'Gamepad',
      svg: <GamepadIcon />,
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(3)

  const nextCategory = () => {
    if (currentIndex < categories.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }
  const previousCategory = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleCategoryChange = (id: number) => {
    setCurrentIndex(id)
  }

  return (
    <Stack maxW='1170px' w='full' mx='auto' gap={10}>
      <Separator orientation='horizontal' className={css.separator} />
      <Flex flexDir='column' gap={14}>
        <Flex justify='space-between'>
          <Flex w='50%' flexDir='column' gap={5}>
            <Flex alignItems='center' flexDir='row' gap={4}>
              <Rectangle />
              <Text
                fontSize='md'
                color='var(--chakra-colors-primary-orange)'
                fontWeight='semibold'
              >
                Categories
              </Text>
            </Flex>

            <Text
              fontFamily='Inter'
              fontSize='4xl'
              color='var(--chakra-colors-primary-black)'
              fontWeight='semibold'
            >
              Browse By Category
            </Text>
          </Flex>

          <Flex w='50%' justify='flex-end' position='relative'>
            <Navigation
              onPrevClick={previousCategory}
              onNextClick={nextCategory}
            />
          </Flex>
        </Flex>

        <List.Root flexDir='row' gap={8} className={css.categories}>
          {categories.map((category) => (
            <List.Item
              display='flex'
              flexDir='column'
              h='145px'
              w='170px'
              alignItems='center'
              justifyContent='center'
              rounded='md'
              cursor='pointer'
              key={category.id}
              onClick={() => {
                handleCategoryChange(category.id)
              }}
              className={
                category.id === currentIndex
                  ? css.changedCategory
                  : css.defaultCategory
              }
            >
              {category.svg}
              <Text> {category.name}</Text>
            </List.Item>
          ))}
        </List.Root>
      </Flex>
      <Separator className={css.separator} orientation='horizontal' />
    </Stack>
  )
}
