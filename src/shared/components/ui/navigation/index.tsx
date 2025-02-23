import { Button, Flex } from '@chakra-ui/react'
import ArrowIcon from 'shared/assets/icons/arrow'

import css from './navigation.module.css'

type NavigationProps = {
  onPrevClick: () => void
  onNextClick: () => void
}

export const Navigation = ({ onPrevClick, onNextClick }: NavigationProps) => {
  return (
    <Flex flexDir='row' gap='8px' className={css.navigation} position='absolute' bottom='10px'>
      <Button onClick={onPrevClick}>
        <ArrowIcon color='var(--chakra-colors-primary-black)' />
      </Button>
      <Button onClick={onNextClick}>
        <ArrowIcon color='var(--chakra-colors-primary-black)' />
      </Button>
    </Flex>
  )
}
