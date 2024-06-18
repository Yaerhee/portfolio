import { ReactNode } from 'react'
import Header from '@/components/Header'
import {Flex} from "@chakra-ui/react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
        <Flex w="full" h="full" flexDirection="column" userSelect="none">
            <Header />
            {children}
        </Flex>
    </>
  )
}

export default MainLayout
