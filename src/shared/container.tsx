import { Box, type BoxProps } from '@chakra-ui/react'

type ContainerVariant = 'container' | 'containerXS' | 'containerFull'

interface CustomContainerProps extends BoxProps {
  variant: ContainerVariant
}

export const CustomContainer = ({
  variant,
  children,
  ...rest
}: CustomContainerProps) => {
  const widths = {
    container: {
      base: 'calc(100% - 40px)',
      md: 'calc(100% - 80px)',
    },
    containerFull: { base: 'calc(100% - 40px)', md: 'calc(100% - 80px)' },
    containerXS: {
      base: 'calc(100% - 40px)',
      md: 'calc(100% - 80px)',
    },
  }

  const maxWidths = {
    container: '1170px',
    containerFull: 'unset',
    containerXS: '950px',
  }

  return (
    <Box w={widths[variant]} maxW={maxWidths[variant]} {...rest}>
      {children}
    </Box>
  )
}
