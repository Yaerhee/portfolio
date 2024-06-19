'use client'
import MainLayout from '@/layouts/MainLayout'
import { Button, chakra, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import About from '@/pages/About'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Skills from '@/pages/Skills'
import Projects from '@/pages/Projects'
import Career from '@/pages/Career'
import { FaArrowUp } from 'react-icons/fa6'
import { useEffect, useRef } from 'react'
import { scrollIntoPage } from '@/ts/util'

export default function Home() {
  const arrowUpRef = useRef<HTMLDivElement | null>(null)
  const mainPageRef = useRef<HTMLDivElement | null>(null)
  const ArrowUpIcon = chakra(FaArrowUp)

  useEffect(() => {

    if (typeof window !== 'undefined') {
      const arrowUp = arrowUpRef.current
      const mainPage = mainPageRef.current
      if (!arrowUp || !mainPage) {
        return
      }
      const handleArrowUp = () => {
        const mainPageHeight = mainPage.getBoundingClientRect().height
        if (window.scrollY > mainPageHeight / 2) {
          arrowUp.classList.add('visible')
        } else {
          arrowUp.classList.remove('visible')
        }
      }

      const scrollIntoPage = (selector: any) => {
        const scrollTarget = document.querySelector(selector)
        scrollTarget.scrollIntoView({ behavior: 'smooth' })
      }

      window.addEventListener('scroll', handleArrowUp)
      return () => {
        window.removeEventListener('scroll', handleArrowUp)
      }
    }
  }, [])
  return (
    // <main className={styles.main}>
    <main className='main-page'>
      <MainLayout>
        <Flex className='profile-content' pos='relative' w='full' p='8.5rem 2rem 3rem' m='0 auto'
              justifyContent='center' alignItems='center' flexDirection='column'>
          <Heading pt={8} pb={4} fontSize='4rem' textAlign='center' color='white'>안녕하세요, <br />프론트엔드 개발자 이예리
            입니다.</Heading>
          <Flex w='50px' py={2}>
            <Divider my={10} borderWidth='3px' borderColor='orange.200' />
          </Flex>
          <Text color='rgba(255, 255, 255, 0.7)' fontSize='26px' fontWeight='500' textAlign='center'>
            사람들에게 도움을 주는 것에 보람을 느끼는,<br />
            3년차 프론트엔드 개발자 이예리 입니다.
          </Text>
          <Button my={10} pl={12} pr={8} colorScheme='orange' background='orange.300' borderRadius={40} height='70px'>
            <Flex as={'button'} gap={4} alignItems='center' onClick={() => scrollIntoPage('#about')}>
              <Text fontSize='20px'>About Me</Text>
              <ChevronDownIcon boxSize={8} />
            </Flex>
          </Button>
        </Flex>
        <About />
        <Skills />
        <Projects />
        <Career />
      </MainLayout>
      <Button className='arrow-up' ref={arrowUpRef}>
        <ArrowUpIcon boxSize={10} />
      </Button>
    </main>
  )
}
