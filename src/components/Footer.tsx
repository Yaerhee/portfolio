import { Box, Flex, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box bgGradient='linear(to-b, orange.100, white)' py={20}>
      <Flex id="footer" w="full" minH="200px" flexDirection="column" justifyContent="center" alignItems="center" m="0 auto">
        <Text fontSize='2xl' fontWeight="500">
          © 2024. Yaerhee Lee, All Rights Reserved.
        </Text>
      </Flex>
    </Box>
  )
}

export default Footer