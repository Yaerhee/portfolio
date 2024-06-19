'use client'
import { chakra, Flex, Heading, Text, Tooltip } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import { scrollIntoPage } from '@/ts/util'
import { FaHome } from 'react-icons/fa'
import { useMediaQuery } from '@chakra-ui/react'
import { RxHamburgerMenu } from 'react-icons/rx'

const Header = () => {
  const HomeIcon = chakra(FaHome)
  const MobileMenuIcon = chakra(RxHamburgerMenu)
  const headerRef = useRef<HTMLDivElement | null>(null)
  const navRef = useRef<HTMLDivElement | null>(null)
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  const addOrRemoveClassName = () => {
    if (navRef.current?.classList.contains('nav-clicked')) {
      navRef.current?.classList.remove('nav-clicked')
      headerRef.current?.classList.remove('header-clicked')
    } else {
      navRef.current?.classList.add('nav-clicked')
      headerRef.current?.classList.add('header-clicked')
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const header = headerRef.current
      if (!header) {
        return
      }
      const headerHeight = header.getBoundingClientRect().height

      const handleScroll = () => {
        if (window.scrollY > headerHeight) {
          header.classList.add('header--white')
        } else {
          header.classList.remove('header--white')
        }
      }
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <Flex
      id="header"
      ref={headerRef}
      pos="fixed"
      top={0}
      right={0}
      left={0}
      py={2}
      bgColor="transparent"
      color="rgba(255, 255, 255, .65)"
      zIndex={999}
    >
      <Flex
        w="full"
        maxW="71.25rem"
        p="1rem 2rem"
        m="0 auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex gap={2} alignItems="center" justifyContent="space-between">
          <Heading fontSize="25px">Yaerhee&apos;s Portfolio</Heading>
          <Tooltip label="Go Home" placement="right" bg="orange.500">
            <button
              className="home-button"
              onClick={() => scrollIntoPage('#main')}
            >
              <HomeIcon boxSize={6} />
            </button>
          </Tooltip>
        </Flex>
        {!isLargerThan768 && (
          <>
            <button
              onClick={addOrRemoveClassName}
              style={{ margin: '0 10px 0 10px' }}
            >
              <MobileMenuIcon boxSize={6} />
            </button>
          </>
        )}
        <Flex
          className="nav-menu"
          gap={10}
          flexDirection={isLargerThan768 ? 'row' : 'column'}
        >
          <button onClick={() => scrollIntoPage('#about')}>
            <Text className="header-item" fontSize="18px">
              About
            </Text>
          </button>
          <button onClick={() => scrollIntoPage('#skills')}>
            <Text className="header-item" fontSize="18px">
              Skills
            </Text>
          </button>
          <button onClick={() => scrollIntoPage('#career')}>
            <Text className="header-item" fontSize="18px">
              Career
            </Text>
          </button>
          <button onClick={() => scrollIntoPage('#projects')}>
            <Text className="header-item" fontSize="18px">
              Projects
            </Text>
          </button>
        </Flex>
      </Flex>
      {!isLargerThan768 && (
        <>
          <Flex
            className="nav-menu"
            ref={navRef}
            gap={10}
            flexDirection={isLargerThan768 ? 'row' : 'column'}
          >
            <button onClick={() => scrollIntoPage('#about')}>
              <Text className="header-item" fontSize="18px">
                About
              </Text>
            </button>
            <button onClick={() => scrollIntoPage('#skills')}>
              <Text className="header-item" fontSize="18px">
                Skills
              </Text>
            </button>
            <button onClick={() => scrollIntoPage('#career')}>
              <Text className="header-item" fontSize="18px">
                Career
              </Text>
            </button>
            <button onClick={() => scrollIntoPage('#projects')}>
              <Text className="header-item" fontSize="18px">
                Projects
              </Text>
            </button>
          </Flex>
        </>
      )}
    </Flex>
  )
}

export default Header
