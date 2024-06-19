import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import ChakraWrapper from '@/components/ChakraWrapper'

interface RootLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: "Yaerhee's Portfolio",
  description: 'Nice to meet you! Check out the information page me.',
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <ChakraWrapper>{children}</ChakraWrapper>
      </body>
    </html>
  )
}

export default RootLayout
