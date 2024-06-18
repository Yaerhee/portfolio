import { Box, chakra, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import { FaBriefcase, FaCalendar, FaEnvelope, FaFaceSmileBeam, FaLocationDot, FaPencil, FaPhone } from 'react-icons/fa6'

const About = () => {
  const FaceIcon = chakra(FaFaceSmileBeam)
  const CalendarIcon = chakra(FaCalendar)
  const LocationIcon = chakra(FaLocationDot)
  const PhoneIcon = chakra(FaPhone)
  const MailIcon = chakra(FaEnvelope)
  const PencilIcon = chakra(FaPencil)
  const BriefCaseIcon = chakra(FaBriefcase)
    return (
      <Box bgColor="orange.50">
        <Flex id="about" w="full" flexDirection="column" justifyContent="center" alignItems="center" m="0 auto"
          // bgGradient='linear(to-b, orange.50, orange.200 90%)'>
                 >
        <Heading fontWeight="900" fontSize="3.5rem" pt={8} pb={4}>About
          <Divider mt={4} mb={6} borderWidth='3px' borderColor='orange.200' />
        </Heading>
        <Flex w="full" py={4} justifyContent="space-between" wrap="wrap">
          <Box className="row">
            <Flex className="row-content">
              <Flex>
                <FaceIcon boxSize="40px" />
              </Flex>
              <Flex flexDirection="column" gap={2}>
                <Text fontSize="26px" fontWeight="bold">이름</Text>
                <Text fontSize="20px">이예리 (Yaerhee Lee)</Text>
              </Flex>
            </Flex>
          </Box>
          <Box className="row">
            <Flex className="row-content">
              <Flex>
                <CalendarIcon boxSize="40px" />
              </Flex>
              <Flex flexDirection="column" gap={2}>
                <Text fontSize="26px" fontWeight="bold">생년월일</Text>
                <Text fontSize="20px">1990.09.29</Text>
              </Flex>
            </Flex>
          </Box>
          <Box className="row">
            <Flex className="row-content">
              <Flex>
                <LocationIcon boxSize="40px" />
              </Flex>
              <Flex flexDirection="column" gap={2}>
                <Text fontSize="26px" fontWeight="bold">거주지</Text>
                <Text fontSize="20px">경기도 용인 수지구</Text>
              </Flex>
            </Flex>
          </Box>
          <Box className="row">
            <Flex className="row-content">
              <Flex>
                <PhoneIcon boxSize="40px" />
              </Flex>
              <Flex flexDirection="column" gap={2}>
                <Text fontSize="26px" fontWeight="bold">연락처</Text>
                <Text fontSize="20px">010-9748-9290</Text>
              </Flex>
            </Flex>
          </Box>
          <Box className="row">
            <Flex className="row-content">
              <Flex>
                <MailIcon boxSize="40px" />
              </Flex>
              <Flex flexDirection="column" gap={2}>
                <Text fontSize="26px" fontWeight="bold">이메일</Text>
                <Text fontSize="20px">yaerhee@naver.com</Text>
              </Flex>
            </Flex>
          </Box>
          <Box className="row">
            <Flex className="row-content">
              <Flex>
                <PencilIcon boxSize="40px" />
              </Flex>
              <Flex flexDirection="column" gap={1}>
                <Text fontSize="26px" fontWeight="bold">학력</Text>
                <Text fontSize="20px">가천대학교<br/>영어영문학과</Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        {/*<Flex>*/}
        {/*  <BriefCaseIcon boxSize="40px" />*/}
        {/*</Flex>*/}
      </Flex>
      </Box>
    )
}

export default About