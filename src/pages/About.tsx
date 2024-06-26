import { Box, chakra, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import {
  FaCalendar,
  FaEnvelope,
  FaFaceSmileBeam,
  FaLocationDot,
  FaPencil,
  FaPhone,
} from 'react-icons/fa6'

const About = () => {
  const FaceIcon = chakra(FaFaceSmileBeam)
  const CalendarIcon = chakra(FaCalendar)
  const LocationIcon = chakra(FaLocationDot)
  const PhoneIcon = chakra(FaPhone)
  const MailIcon = chakra(FaEnvelope)
  const PencilIcon = chakra(FaPencil)
  return (
    <Box id="about" bgColor="orange.50" pt={10}>
      <Flex
        id="about-container"
        w="full"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        m="0 auto"
      >
        <Heading fontWeight="900" fontSize="2.5rem" pt={8}>
          About
          <Divider mt={4} mb={6} borderWidth="3px" borderColor="orange.200" />
        </Heading>
        <Flex w="full" py={4} justifyContent="space-between" wrap="wrap">
          <Box
            flexBasis={{ base: '100%', sm: '48%', md: '30%' }}
            className="row"
          >
            <Flex className="row-content">
              <Flex>
                <FaceIcon boxSize="40px" />
              </Flex>
              <Flex flexDirection="column" gap={2}>
                <Text fontSize="18px" fontWeight="bold">
                  이름
                </Text>
                <Text fontSize="18px">이예리 (Yaerhee Lee)</Text>
              </Flex>
            </Flex>
          </Box>
          <Box
            flexBasis={{ base: '100%', sm: '48%', md: '30%' }}
            className="row"
          >
            <Flex className="row-content">
              <Flex>
                <CalendarIcon boxSize="40px" />
              </Flex>
              <Flex flexDirection="column" gap={2}>
                <Text fontSize="18px" fontWeight="bold">
                  생년월일
                </Text>
                <Text fontSize="18px">1990.09.29</Text>
              </Flex>
            </Flex>
          </Box>
          <Box
            flexBasis={{ base: '100%', sm: '48%', md: '30%' }}
            className="row"
          >
            <Flex className="row-content">
              <Flex>
                <LocationIcon boxSize="40px" />
              </Flex>
              <Flex flexDirection="column" gap={2}>
                <Text fontSize="18px" fontWeight="bold">
                  거주지
                </Text>
                <Text fontSize="18px">경기도 용인 수지구</Text>
              </Flex>
            </Flex>
          </Box>
          <Box
            flexBasis={{ base: '100%', sm: '48%', md: '30%' }}
            className="row"
          >
            <Flex className="row-content">
              <Flex>
                <PhoneIcon boxSize="40px" />
              </Flex>
              <Flex flexDirection="column" gap={2}>
                <Text fontSize="18px" fontWeight="bold">
                  연락처
                </Text>
                <Text fontSize="18px">010-9748-9290</Text>
              </Flex>
            </Flex>
          </Box>
          <Box
            flexBasis={{ base: '100%', sm: '48%', md: '30%' }}
            className="row"
          >
            <Flex className="row-content">
              <Flex>
                <MailIcon boxSize="40px" />
              </Flex>
              <Flex flexDirection="column" gap={2}>
                <Text fontSize="18px" fontWeight="bold">
                  이메일
                </Text>
                <Text fontSize="18px">yaerhee@naver.com</Text>
              </Flex>
            </Flex>
          </Box>
          <Box
            flexBasis={{ base: '100%', sm: '48%', md: '30%' }}
            className="row"
          >
            <Flex className="row-content">
              <Flex>
                <PencilIcon boxSize="40px" />
              </Flex>
              <Flex flexDirection="column" gap={1}>
                <Text fontSize="18px" fontWeight="bold">
                  학력
                </Text>
                <Text fontSize="18px">
                  가천대학교
                  <br />
                  영어영문학과
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default About
