import {Box, Flex, Heading, Text} from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex pos="fixed" top={0} right={0} left={0} my={2} bgColor="transparent" color="rgba(255, 255, 255, .65)">
        <Flex w="full" maxW="71.25rem" p="1.25rem 2rem" m="0 auto" justifyContent="space-between" alignItems="center">
            <Heading>Yaerhee's Portfolio</Heading>
            <Flex float="right" gap={6}>
                <Box>
                    <Text fontSize="24px" fontWeight="500">About</Text>
                </Box>
                <Box>
                    <Text fontSize="24px" fontWeight="500">Skills</Text>
                </Box>
                <Box>
                    <Text fontSize="24px" fontWeight="500">Projects</Text>
                </Box>
                <Box>
                    <Text fontSize="24px" fontWeight="500">Career</Text>
                </Box>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Header
