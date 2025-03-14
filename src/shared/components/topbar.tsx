import { Flex, Text } from '@chakra-ui/react'

import {
  NativeSelectField,
  NativeSelectRoot,
} from '@/components/ui/native-select'

import { ShopNow } from './ui/shopnow'

export const TopBar = () => {
  const topBarData = [
    ' Summer Sale For All Swim Suits And Free Express Delievery - OFF 50%!',
  ]
  return (
    <Flex
      w='full'
      bg='var(--chakra-colors-primary-black)'
      h='fit-content'
      p='0.4rem'
      justify='flex-end'
      pr='10rem'
    >
      <Flex
        alignItems='center'
        w='4xl'
        justify='space-between'
        textAlign='center'
      >
        <Flex flexDir='row' gap='0.5rem'>
          <Text
            fontSize='0.875rem'
            color='var(--chakra-colors-primary-white)'
            fontWeight='normal'
          >
            {' '}
            {topBarData[0]}
          </Text>
          <ShopNow />
        </Flex>
        <Flex>
          <NativeSelectRoot
            alignItems='center'
            size='sm'
            width='fit-content'
            height='fit-content'
            color='var(--chakra-colors-primary-white)'
            fontWeight='normal'
            _icon={{ color: 'var(--chakra-colors-primary-white)' }}
          >
            <NativeSelectField
              cursor='pointer'
              placeholder='English'
              border='none'
              _focus={{ outline: 'none' }}
            ></NativeSelectField>
          </NativeSelectRoot>
        </Flex>
      </Flex>
    </Flex>
  )
}
