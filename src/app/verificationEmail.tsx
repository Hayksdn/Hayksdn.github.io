import { useAuthActions } from '@/shared/api/auth'
import { Flex } from '@chakra-ui/react'

import { PinInput } from '@/components/ui/pin-input'

export const VerificationPage = () => {
  const { verificationEmail } = useAuthActions()

  return (
    <Flex justify='center' align='center' w='full' h='auto' mb='5rem' mt='3rem'>
      <PinInput
        size='lg'
        count={6}
        onValueComplete={(e) => verificationEmail(e.value)}
      />
    </Flex>
  )
}
