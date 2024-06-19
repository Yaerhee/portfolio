import { Box, chakra, Divider, Flex, Heading, ListItem, Text, UnorderedList, OrderedList, Link } from '@chakra-ui/react'
import { GrTask } from 'react-icons/gr'
import { ExternalLinkIcon } from '@chakra-ui/icons'
const Career = () => {
  const TaskIcon = chakra(GrTask)
  return (
    <Box id="career" bgGradient='linear(to-b, orange.400, orange.100)' pt={20}>
      <Flex id="career-container" w="full" flexDirection="column" justifyContent="center" alignItems="center" m="0 auto">
        <Heading fontWeight="900" fontSize="3.5rem" pt={8} pb={4}>Career
          <Divider mt={4} mb={6} borderWidth='3px' borderColor='orange.600' />
        </Heading>
        <Flex w="full" justifyContent="center">
          <Flex w="full" flexDirection="column" gap={4}>
            <Flex alignItems="center" gap={2}>
              <Text fontWeight="900" fontSize="40px" py={2}>
                <Link href="https://www.stealien.com/" color="orange.900" isExternal>
                  스틸리언 <ExternalLinkIcon boxSize={6} mx='2px' />
                </Link>
              </Text>
              <Text fontSize='26px' color='orange.100' fontWeight='600' opacity='0.7'>2022.12 - </Text>
            </Flex>
            <Divider borderWidth="2px" borderColor="orange.300" opacity="0.6" />
            <Flex flexDirection="column" my={4}>
              <Text fontSize='2xl' fontWeight="bold" display="flex" gap={4} alignItems="center">
                <TaskIcon boxSize={8} m={0} />
                AppSuit Cloud - Frontend 파트, Admin 파트 운영 및 유지보수
              </Text>
              <UnorderedList spacing={3} fontSize="2xl" pl={8}>
                <ListItem pt={3}>어플리케이션 빌드 및 빌드 로그 확인 및 다운로드 관리</ListItem>
                <ListItem>(Admin) 등록된 어플리케이션 모듈, 라이센스 및 프리셋 관리</ListItem>
                <ListItem>
                  사용성 증대를 위한 리스트 페이지 고도화
                  <UnorderedList py={3} styleType="circle" spacing={3} fontSize="2xl" pl={4}>
                    <ListItem>Pagination UI 고도화로 페이지 이동성 증대</ListItem>
                    <ListItem>날짜 및 세부 검색 란 추가로 데이터 검색 편의성 증대</ListItem>
                  </UnorderedList>
                </ListItem>
              </UnorderedList>
            </Flex>
            <Flex flexDirection="column">
              <Text fontSize='2xl' fontWeight="bold" display="flex" gap={4} alignItems="center">
                <TaskIcon boxSize={8} m={0} />
                AppSuit Keypad - Web 파트 운영 및 유지보수
              </Text>
              <UnorderedList spacing={3} fontSize="2xl" pl={8}>
                <ListItem py={3}>
                  보안 키패드 - 키패드 종류 별 암/복호화 로직 관리
                  <UnorderedList py={3} styleType="circle" spacing={3} fontSize="2xl" pl={4}>
                    <ListItem>AES128, AES192, AES256</ListItem>
                    <ListItem>RSA</ListItem>
                    <ListItem>ECC(ECIES) - 하기 사항 참조</ListItem>
                  </UnorderedList>
                </ListItem>
              </UnorderedList>
              <UnorderedList spacing={3} fontSize="2xl" pl={8}>
                <ListItem>
                  ECC 알고리즘 암/복호화 지원을 위한 Emscripten + CMake 로의 compile 작업
                  <UnorderedList py={3} styleType="circle" spacing={3} fontSize="2xl" pl={4}>
                    <ListItem>JS library - JAVA 상 호환성 저하로 인한 신규 작업</ListItem>
                    <ListItem>Emscripten + 추가 cpp 로직 설계 및 CMakeList 작업으로 .js, .wasm 파일 컴파일</ListItem>
                    <ListItem>현재 컴파일된 모듈로 전체 알고리즘 지원 중입니다.</ListItem>
                  </UnorderedList>
                </ListItem>
              </UnorderedList>
              <UnorderedList spacing={3} fontSize="2xl" pl={8}>
                <ListItem>
                  고객사 별 환경(라이브러리 등)에 적합한 적용 방식 연구
                  <UnorderedList py={3} styleType="circle" spacing={3} fontSize="2xl" pl={4}>
                    <ListItem>React, Vue 로의 샘플 프로젝트 지원을 통해 사용성 증대</ListItem>
                    <ListItem>미설치 환경 지원을 위한 도커 이미지 지원</ListItem>
                  </UnorderedList>
                </ListItem>
                <ListItem>고객사 이슈에 대한 지속적인 대응 중 -> 빠르고 정확한 유지보수를 통한 모듈 사용성 향상</ListItem>
                <ListItem>고객사 및 키패드 팀 동료와의 원활한 소통을 위한 문서화 작업 진행, 상세 활용 가이드 작성 및 <br/> 버전 리스트 운영</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
        </Flex>
        <Flex w="full" justifyContent="center" mt={20}>
          <Flex w="full" flexDirection="column" gap={4}>
            <Flex alignItems="center" gap={2}>
              <Text fontWeight="900" fontSize="40px" py={2}>
                <Link href="https://www.planit-healthcare.com/" color="orange.900" isExternal>
                  플랜잇헬스케어 <ExternalLinkIcon boxSize={6} mx='2px' />
                </Link>
              </Text>
              <Text fontSize='26px' color='orange.500' fontWeight='600' opacity='0.7'>2021.05 - 2022.10</Text>
            </Flex>
            <Divider borderWidth="2px" borderColor="orange.400" opacity="0.6" />
            <Flex flexDirection="column" my={4}>
              <Text fontSize='2xl' fontWeight="bold" display="flex" gap={4} alignItems="center">
                <TaskIcon boxSize={8} m={0} />
                DQualEx - 데이터 품질 진단 소프트웨어 제작 (발표자료 링크)
              </Text>
              <UnorderedList spacing={3} fontSize="2xl" pl={8}>
                <ListItem pt={3}>1인 프로젝트로 Front-end, Back-end, DB 분야를 담당하여 앱 구현</ListItem>
                <ListItem>데이터 품질 인증 Gold Class 취득을 목표로 앱 구현 (최소 공신력 인정 단계)</ListItem>
                <ListItem>진단 대상 테이블 설정 후, 규칙 쿼리 & 계획 설정하여 진단 수행하는 기능 구현</ListItem>
                <ListItem>진단 결과 엑셀 데이터 다운 기능 및 규칙 엑셀 업로드 기능 구현</ListItem>
                <ListItem>
                  실제 병원 지표 CDW(Clinical Data Warehouse) 데이터 추가 후, 앱 진단 규칙 실행으로 데이터가 오기재된
                  테이블을 10건 이상 발견 → 수정후 데이터 재 적재 완료
                  <UnorderedList py={3} styleType="circle" spacing={3} fontSize="2xl" pl={4}>
                    <ListItem>CDW - 병원 임상 데이터를 비식별화해 저장 후, 연구자의 필요에 따라 검색/ 분석 가능하도록 하는 서비스</ListItem>
                  </UnorderedList>
                </ListItem>
              </UnorderedList>
            </Flex>
            <Flex flexDirection="column">
              <Text fontSize='2xl' fontWeight="bold" display="flex" gap={4} alignItems="center">
                <TaskIcon boxSize={8} m={0} />
                BICI_Cloud - 대시보드, 임상지표 웹 어플리케이션 (1세대) 유지보수 - 신규 지표 추가 및 버그 fix
              </Text>
              <UnorderedList py={3} spacing={3} fontSize="2xl" pl={8}>
                <ListItem>지표 별 수정 필요한 기능 반영 (ex. Vue 필터 기능 추가, 공휴일 필터링 API 등)</ListItem>
                <ListItem>신규 지표 추가 및 관련 로직 일괄 구현 (분석, 추이 차트, 그리드, 피벗 로직)</ListItem>
                <ListItem>
                  총 신규 정의 지표 페이지 약 5 건, 치명적인 버그 3건 해결
                  <OrderedList py={3} spacing={3} fontSize="2xl" pl={4}>
                    <ListItem>그리드 컬럼 DnD 미적용 버그 해결 (return Object 구조 및 JS 로직 수정)</ListItem>
                    <ListItem>피벗 소계 계산 버그 (긴급 수정 오류) - DB DataType 조건 수정하여 해결</ListItem>
                    <ListItem>환자현황 지표 입원 - 재원 변환 로직 누락 해결 (Vue state 추가, 로직 추가)</ListItem>
                  </OrderedList>
                </ListItem>
              </UnorderedList>
            </Flex>
            <Flex flexDirection="column">
              <Text fontSize='2xl' fontWeight="bold" display="flex" gap={4} alignItems="center">
                <TaskIcon boxSize={8} m={0} />
                InsightEx - 대시보드, 임상지표 웹 어플리케이션 (2세대) 유지보수 - 신규 대시보드 추가 및 로직 수정
              </Text>
              <UnorderedList py={3} spacing={3} fontSize="2xl" pl={8}>
                <ListItem>신규 대시보드 화면 생성 및 메타 데이터와의 매핑 로직 구현 <br/>
                  (사용자 커스터마이징이 가능한 요약카드 리스트를 구현하고,
                  설정된 지표 데이터가 테이블에 저장 및 <br/>select 되도록 로직 구현)
                </ListItem>
                <ListItem>그리드, 피벗 단의 뷰 이름 중복 체크 로직 추가 (axios fetch 로 실시간 체크)</ListItem>
                <ListItem>관리자 메뉴 - 유저 설정 뷰 템플릿 조회 화면의 redux - setState 오류 해결</ListItem>
                <ListItem>중복 코드 & 사용하지 않는 코드 정리 및 비효율적인 로직 리팩토링</ListItem>
                <ListItem>다양한 DB (Oracle, MSSQL 등) 에 대한 Mapper xml 쿼리 수정 및
                  jdbcType 정의하여 쿼리 호환성 증대
                  {`({.. jdbcType=INTEGER})`}</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Career