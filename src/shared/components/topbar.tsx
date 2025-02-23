import { Flex, Text } from '@chakra-ui/react'

import {
  NativeSelectField,
  NativeSelectRoot,
} from '@/components/ui/native-select'

import { ShopNow } from './ui/shopnow'

export const TopBar = () => {
  return (
    <Flex
      w='full'
      bg='var(--chakra-colors-primary-black)'
      h='fit-content'
      p={2}
      justify='flex-end'
      pr={40}
    >
      <Flex
        alignItems='center'
        w='4xl'
        justify='space-between'
        textAlign='center'
      >
        <Flex flexDir='row' gap={2}>
          <Text
            fontSize='sm'
            color='var(--chakra-colors-primary-white)'
            fontWeight='normal'
          >
            Summer Sale For All Swim Suits And Free Express Delievery - OFF 50%!
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
