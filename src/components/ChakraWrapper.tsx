'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ChakraWrapperProps {
  children: ReactNode
}

const ChakraWrapper = ({ children }: ChakraWrapperProps) => {
  return <ChakraProvider>{children}</ChakraProvider>
}

export default ChakraWrapper
