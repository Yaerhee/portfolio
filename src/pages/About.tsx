import { Box, chakra, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import { FaCalendar, FaFaceSmileBeam, FaLocationDot, FaPhone } from 'react-icons/fa6'

const About = () => {
  const FaceIcon = chakra(FaFaceSmileBeam)
  const CalendarIcon = chakra(FaCalendar)
  const LocationIcon = chakra(FaLocationDot)
  const PhoneIcon = chakra(FaPhone)
    return (
        <Flex w="full" p={10} flexDirection="column" justifyContent="center" alignItems="center" m="0 auto" bgColor="orange.50">
            <Heading fontWeight="900" fontSize="3.5rem">About
              <Divider my={4} borderWidth='3px' borderColor='orange.200' />
            </Heading>
          <Flex w="full" p={10} pt={4} justifyContent="space-between" wrap="wrap" flexDirection="row">
            <Box className="row" p={4} pt={2}>
              <Flex className="row-content">
                <Flex>
                  <FaceIcon boxSize="40px" />
                </Flex>
                <Flex flexDirection="column">
                  <Text fontSize="30px" fontWeight="bold">이름</Text>
                  <Text fontSize="20px">이예리 (Yaerhee Lee)</Text>
                </Flex>
              </Flex>
            </Box>
            <Box className="row">
              <Flex className="row-content">
                <Flex>
                  <CalendarIcon boxSize="40px" />
                </Flex>
                <Flex flexDirection="column">
                  <Text fontSize="30px" fontWeight="bold">생년월일</Text>
                  <Text fontSize="20px">1990.09.29</Text>
                </Flex>
              </Flex>
            </Box>
            <Box className="row">
              <Flex className="row-content">
                <Flex>
                  <LocationIcon boxSize="40px" />
                </Flex>
                <Flex flexDirection="column">
                  <Text fontSize="30px" fontWeight="bold">거주지</Text>
                  <Text fontSize="20px">경기도 용인 수지구</Text>
                </Flex>
              </Flex>
            </Box>
            <Box className="row">
              <Flex className="row-content">
                <Flex>
                  <PhoneIcon boxSize="40px" />
                </Flex>
                <Flex flexDirection="column">
                  <Text fontSize="30px" fontWeight="bold">연락처</Text>
                  <Text fontSize="20px">010-9748-9290</Text>
                </Flex>
              </Flex>
            </Box>
            <Box className="row">
              <Flex className="row-content">5</Flex>
            </Box>
            <Box className="row">
              <Flex className="row-content">6</Flex>
            </Box>
          </Flex>
        </Flex>
    )
}

export default About