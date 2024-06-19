import {
  Box,
  chakra,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react'
import { MdCheckCircle, MdSettings } from 'react-icons/md'

const Projects = () => {
  const CheckCircleIcon = chakra(MdCheckCircle)
  const SettingsIcon = chakra(MdSettings)
  return (
    <Box
      id="projects"
      bgGradient="linear(to-b, orange.400, orange.100)"
      pt={10}
    >
      <Flex
        id="projects-container"
        w="full"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        m="0 auto"
      >
        <Heading fontWeight="900" fontSize="2.5rem" pt={8} pb={4}>
          Projects
          <Divider mt={4} mb={6} borderWidth="3px" borderColor="orange.600" />
        </Heading>
        <Flex
          w="full"
          justifyContent="center"
          flexDirection="column"
          gap={12}
          pb={8}
        >
          {/* first Project */}
          <Box className="project-box" bgColor="white" boxShadow="l" my={4}>
            <Flex
              w="full"
              p={8}
              m="0 auto"
              flexDirection="column"
              alignItems="center"
              gap={4}
            >
              <Flex flexDirection="column" alignItems="center">
                <Text fontSize="24px" fontWeight="bold">
                  포트폴리오 웹 사이트 (renewal)
                </Text>
                <Text
                  fontSize="18px"
                  color="gray.500"
                  fontWeight="500"
                  opacity="0.7"
                >
                  2024.06
                </Text>
              </Flex>
              <Flex
                w="full"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
              >
                <Image alt="first-portfolio" src="/first_portfolio.png" />
                <Flex w="full" px={4} my={6} flexDirection="column" gap={4}>
                  <Text fontSize="18px">
                    두 번째로 제작한 포트폴리오 웹 사이트 입니다. 현재 보고 계신
                    포트폴리오 웹 사이트 입니다. <br />
                    Next.js + React 를 기반으로 제작하였으며, 깔끔한 디자인과
                    레이아웃을 바탕으로 반응형 또한 고려하여 제작하였습니다.
                  </Text>
                  <Divider
                    my={4}
                    borderWidth="1.5px"
                    borderColor="orange.200"
                  />
                  <List spacing={3}>
                    <ListItem>
                      <Flex alignItems="center">
                        <ListIcon boxSize={8} m={0}>
                          <CheckCircleIcon color="orange.500" />
                        </ListIcon>
                        <Text fontWeight="bold" fontSize="lg" minW="8rem">
                          주요 기능
                        </Text>
                        <Text fontSize="18px">
                          자기 소개 및 인적 사항, 기술 스택, 프로젝트 리스트
                          소개
                        </Text>
                      </Flex>
                    </ListItem>
                    <ListItem>
                      <Flex alignItems="center">
                        <ListIcon boxSize={8} m={0}>
                          <CheckCircleIcon color="orange.500" />
                        </ListIcon>
                        <Text fontWeight="bold" fontSize="lg" minW="8rem">
                          Github
                        </Text>
                        <Text fontSize="18px">
                          <Link
                            href="https://github.com/Yaerhee/portfolio"
                            color="orange.400"
                            isExternal
                          >
                            github.com/Yaerhee/portfolio
                          </Link>
                        </Text>
                      </Flex>
                    </ListItem>
                    <ListItem>
                      <Flex alignItems="center">
                        <ListIcon boxSize={9} m={0}>
                          <SettingsIcon color="orange.500" />
                        </ListIcon>
                        <Text fontWeight="bold" fontSize="lg" minW="8rem">
                          Skills
                        </Text>
                        <Text fontSize="18px">HTML, CSS, JavaScript</Text>
                      </Flex>
                    </ListItem>
                  </List>
                </Flex>
              </Flex>
            </Flex>
          </Box>
          {/* Second Project */}
          <Box className="project-box" bgColor="white" boxShadow="lg">
            <Flex
              w="full"
              p={8}
              m="0 auto"
              flexDirection="column"
              alignItems="center"
              gap={4}
            >
              <Flex flexDirection="column" alignItems="center">
                <Text fontSize="24px" fontWeight="bold">
                  포트폴리오 웹 사이트 (former)
                </Text>
                <Text
                  fontSize="18px"
                  color="gray.500"
                  fontWeight="500"
                  opacity="0.7"
                >
                  2024.06
                </Text>
              </Flex>
              <Flex
                w="full"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
              >
                <Image
                  w="full"
                  alt="second-portfolio"
                  src="/second_portfolio.png"
                />
                <Flex
                  w="full"
                  pl={8}
                  pr={4}
                  my={6}
                  flexDirection="column"
                  gap={4}
                >
                  <Text fontSize="18px">
                    처음 제작한 포트폴리오 웹 사이트 입니다. 현재 보고 계신
                    포트폴리오의 이전 사이트 입니다. <br />웹 개발에 입문할 때
                    제작한 프로젝트로, 기본 HTML, CSS, JS의 원리를 파악하고
                    <br />
                    반응형 웹 및 모바일 확장성에 대해 연구할 수 있는
                    프로젝트였습니다.
                  </Text>
                  <Divider
                    my={4}
                    borderWidth="1.5px"
                    borderColor="orange.200"
                  />
                  <List spacing={3}>
                    <ListItem>
                      <Flex alignItems="center">
                        <ListIcon boxSize={8} m={0}>
                          <CheckCircleIcon color="orange.500" />
                        </ListIcon>
                        <Text fontWeight="bold" fontSize="lg" minW="8rem">
                          주요 기능
                        </Text>
                        <Text fontSize="18px">
                          자기 소개 및 인적 사항, 기술 스택, 프로젝트 리스트
                          소개
                        </Text>
                      </Flex>
                    </ListItem>
                    <ListItem>
                      <Flex alignItems="center">
                        <ListIcon boxSize={8} m={0}>
                          <CheckCircleIcon color="orange.500" />
                        </ListIcon>
                        <Text fontWeight="bold" fontSize="lg" minW="8rem">
                          Github
                        </Text>
                        <Text fontSize="18px">
                          <Link
                            href="https://github.com/Yaerhee/portfolio/tree/former_page"
                            color="orange.400"
                            isExternal
                          >
                            github.com/Yaerhee/portfolio/tree/former_page
                          </Link>
                        </Text>
                      </Flex>
                    </ListItem>
                    <ListItem>
                      <Flex alignItems="center">
                        <ListIcon boxSize={9} m={0}>
                          <SettingsIcon color="orange.500" />
                        </ListIcon>
                        <Text fontWeight="bold" fontSize="lg" minW="8rem">
                          Skills
                        </Text>
                        <Text fontSize="18px">HTML, CSS, JavaScript</Text>
                      </Flex>
                    </ListItem>
                  </List>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Projects
