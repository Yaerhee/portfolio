import { ReactNode } from 'react'
import Header from '@/components/Header'
import {Flex} from "@chakra-ui/react";
import Footer from '@/components/Footer'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
        <Flex w="full" h="full" flexDirection="column" userSelect="none">
            <Header />
            {children}
            <Footer />
        </Flex>
    </>
  )
}

export default MainLayout
