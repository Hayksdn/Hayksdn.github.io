import { Button, Flex } from '@chakra-ui/react'
import ArrowIcon from 'shared/assets/icons/arrow'

export const ScrollTop = () => {
  return (
    <Flex right='24' top='0' position='absolute'>
      <Button
        transform='rotate(-90deg)'
        w={11}
        h={11}
        borderRadius='50%'
        border='none'
        bg='primary.grey'
        cursor='pointer'
        onClick={() => window.scrollTo(0, 0)}
      >
        <ArrowIcon color='var(--chakra-colors-primary-black)' />
      </Button>
    </Flex>
  )
}
