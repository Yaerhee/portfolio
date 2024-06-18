'use client'
import MainLayout from '@/layouts/MainLayout'
import { Button, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import About from '@/pages/About'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Skills from '@/pages/Skills'
import Projects from '@/pages/Projects'

export default function Home() {
  return (
    // <main className={styles.main}>
    <main className='main-page'>
      <MainLayout>
        <Flex className='profile-content' pos='relative' w='full' p='8.5rem 2rem 3rem' m='0 auto'
              justifyContent='center' alignItems='center' flexDirection='column'>
          <Heading pt={8} pb={4} fontSize='4rem' textAlign='center' color='white'>안녕하세요, <br />프론트엔드 개발자 이예리 입니다.</Heading>
          <Flex w='50px' py={2}>
            <Divider my={10} borderWidth='3px' borderColor='orange.200' />
          </Flex>
          <Text color='rgba(255, 255, 255, 0.7)' fontSize='26px' fontWeight='500' textAlign='center'>
            사람들에게 도움을 주는 것에 보람을 느끼는,<br />
            3년차 프론트엔드 개발자 이예리 입니다.
          </Text>
          <Button my={10} pl={12} pr={8} colorScheme='orange' background='orange.300' borderRadius={40} height='70px'>
            <Flex gap={4} alignItems="center">
              <Text fontSize="20px">About Me</Text>
              <ChevronDownIcon boxSize={8} />
            </Flex>
          </Button>
        </Flex>
        <About />
        <Skills />
        <Projects />
      </MainLayout>
    </main>
  )
}
