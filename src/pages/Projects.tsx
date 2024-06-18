import { Box, Divider, Flex, Heading } from '@chakra-ui/react'

const Projects = () => {
  return (
    <Box bgGradient='linear(to-b, orange.200, orange.300)'>
      <Flex id="projects" w="full" flexDirection="column" justifyContent="center" alignItems="center" m="0 auto"
      >
        <Heading fontWeight="900" fontSize="3.5rem" pt={8} pb={4}>Projects
          <Divider mt={4} mb={6} borderWidth='3px' borderColor='orange.500' />
        </Heading>
        <Flex w="full" justifyContent="center" flexDirection="column">
          <Box className="project-box" bgColor="white" boxShadow='2xl'>
            Test
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Projects