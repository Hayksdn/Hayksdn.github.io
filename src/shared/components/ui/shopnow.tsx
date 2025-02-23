import { Flex, Link } from '@chakra-ui/react'

export const ShopNow = () => {
  return (
    <Flex>
      <Link
        color='var(--chakra-colors-primary-white)'
        fontSize='sm'
        fontWeight='600'
        variant='underline'
        textDecorationColor='var(--chakra-colors-primary-white)'
        _hover={{
          textDecoration: 'underline',
        }}
      >
        ShopNow
      </Link>
    </Flex>
  )
}
