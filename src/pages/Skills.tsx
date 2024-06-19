import { Box, Divider, Flex, Heading, Text, Image } from '@chakra-ui/react'

const Skills = () => {
  return (
    <Box id="skills" bgGradient='linear(to-b, orange.50, orange.200)' pt={20}>
      <Flex id='skills-container' w='full' p={10} flexDirection='column'
             justifyContent='center' alignItems='center' m='0 auto'
             maxW='71.25rem'>
        <Heading fontWeight='900' fontSize='3.5rem' pt={8} pb={4}>Skills
          <Divider mt={4} mb={6} borderWidth='3px' borderColor='orange.300' />
        </Heading>
        <Flex id='skills-row-box' w='full' py={4} justifyContent='space-between'>
          <Box className='row skill-box' boxShadow='2xl'>
            <Flex className='row-content' flexDirection='column'>
              <Text fontSize='28px' fontWeight='bold'>Frontend</Text>
              <Divider borderWidth='1.5px' borderColor='orange.200' />
              <Image alt='frontend-skills' src='/frontend_skills.png' />
            </Flex>
          </Box>
          <Box className='row skill-box' boxShadow='2xl'>
            <Flex className='row-content' flexDirection='column'>
              <Text fontSize='28px' fontWeight='bold'>Backend</Text>
              <Divider borderWidth='1.5px' borderColor='orange.200' />
              <Image alt='backend-skills' src='/backend_skills.png' mt={10} />
            </Flex>
          </Box>
          <Box className='row skill-box' boxShadow='2xl'>
            <Flex className='row-content' flexDirection='column'>
              <Text fontSize='28px' fontWeight='bold'>Other Skills</Text>
              <Divider borderWidth='1.5px' borderColor='orange.200' />
              <Image alt='other-skills' src='/other_skills.png' mt={4} />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Skills