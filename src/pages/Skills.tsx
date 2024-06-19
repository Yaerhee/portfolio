import { Box, Divider, Flex, Heading, Text, Image } from '@chakra-ui/react'

const Skills = () => {
  return (
    <Box id="skills" pt={10}>
      <Flex
        id="skills-container"
        w="full"
        p={10}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        m="0 auto"
        maxW="71.25rem"
      >
        <Heading fontWeight="900" fontSize="2.5rem" pt={8} pb={4}>
          Skills
          <Divider mt={4} mb={6} borderWidth="3px" borderColor="orange.300" />
        </Heading>
        <Flex
          id="skills-row-box"
          w="full"
          py={4}
          justifyContent="space-between"
          flexWrap="wrap"
          gap={8}
        >
          <Box
            className="row skill-box"
            flexBasis={{ base: '100%', sm: '48%', md: '30%' }}
            boxShadow="2xl"
          >
            <Flex className="row-content" flexDirection="column">
              <Text fontSize="24px" fontWeight="bold">
                Frontend
              </Text>
              <Divider borderWidth="1.5px" borderColor="orange.200" />
              <Image
                alt="frontend-skills"
                src="/portfolio/frontend_skills.png"
              />
            </Flex>
          </Box>
          <Box
            className="row skill-box"
            flexBasis={{ base: '100%', sm: '48%', md: '30%' }}
            boxShadow="2xl"
          >
            <Flex className="row-content" flexDirection="column">
              <Text fontSize="24px" fontWeight="bold">
                Backend
              </Text>
              <Divider borderWidth="1.5px" borderColor="orange.200" />
              <Image alt="backend-skills" src="/portfolio/backend_skills.png" />
            </Flex>
          </Box>
          <Box
            className="row skill-box"
            flexBasis={{ base: '100%', sm: '48%', md: '30%' }}
            boxShadow="2xl"
          >
            <Flex className="row-content" flexDirection="column">
              <Text fontSize="24px" fontWeight="bold">
                Other Skills
              </Text>
              <Divider borderWidth="1.5px" borderColor="orange.200" />
              <Image
                alt="other-skills"
                src="/portfolio/other_skills.png"
                mt={4}
              />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Skills
