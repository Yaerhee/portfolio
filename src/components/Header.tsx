'use client'
import {Box, Flex, Heading, Text} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'

const Header = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const header = headerRef.current;
      if (!header) {
        return;
      }
      const headerHeight = header.getBoundingClientRect().height;

      const handleScroll = () => {
        if (window.scrollY > headerHeight) {
          header.classList.add('header--white');
        } else {
          header.classList.remove('header--white');
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <Flex id="header" ref={headerRef} pos="fixed" top={0} right={0} left={0} py={2} bgColor="transparent" color="rgba(255, 255, 255, .65)">
        <Flex w="full" maxW="71.25rem" p="1.25rem 2rem" m="0 auto" justifyContent="space-between" alignItems="center">
            <Heading>Yaerhee's Portfolio</Heading>
            <Flex float="right" gap={10}>
                <Box>
                    <Text className="header-item">About</Text>
                </Box>
                <Box>
                    <Text className="header-item">Skills</Text>
                </Box>
                <Box>
                    <Text className="header-item">Projects</Text>
                </Box>
                <Box>
                    <Text className="header-item">Career</Text>
                </Box>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Header
