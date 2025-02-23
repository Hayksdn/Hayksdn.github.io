import { useState } from 'react'

import { Flex } from '@chakra-ui/react'

import css from './radio.module.css'

type RadioButtonGroupProps = {
  firstColor: string
  secondColor: string
}

export default function RadioGroup({
  firstColor,
  secondColor,
}: RadioButtonGroupProps) {
  const [selected, setSelected] = useState<'first' | 'second'>('first')
  return (
    <Flex flexDir='row' gap='8px'>
      <Flex
        className={`${css.radioOuterColor} ${selected === 'first' ? css.selected : ''}`}
        onClick={() => setSelected('first')}
      >
        <Flex
          className={`${css.radioInnerColor} ${
            selected === 'first' ? css.selected : ''
          }`}
          style={{ backgroundColor: firstColor }}
        ></Flex>
      </Flex>
      <Flex
        className={`${css.radioOuterColor} ${
          selected === 'second' ? css.selected : ''
        }`}
        onClick={() => setSelected('second')}
      >
        <Flex
          className={`${css.radioInnerColor} ${
            selected === 'second' ? css.selected : ''
          }`}
          style={{ backgroundColor: secondColor }}
        ></Flex>
      </Flex>
    </Flex>
  )
}
