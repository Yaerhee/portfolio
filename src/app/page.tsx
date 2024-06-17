import MainLayout from '@/layouts/MainLayout'
import {Divider, Flex, Heading, Text} from "@chakra-ui/react";

export default function Home() {
  return (
    // <main className={styles.main}>
    <main>
      <MainLayout>
        <Flex className="profile-content" w="full" maxW="71.25rem" p="8.5rem 2rem 4rem" m="0 auto" justifyContent="center" alignItems="center" flexDirection="column">
            <Heading fontSize="4rem" textAlign="center" color="white">안녕하세요, <br/>프론트엔드 개발자 이예리 입니다.</Heading>
            <Flex w="50px" py={2}>
                <Divider my={10} borderWidth="3px" />
            </Flex>
            <Text color="rgba(255, 255, 255, 0.7)" fontSize="26px" fontWeight="500" textAlign="center">
                사람들에게 도움을 주는 것에 보람을 느끼는,<br/>
                3년차 프론트엔드 개발자 이예리 입니다.
            </Text>
        </Flex>
      </MainLayout>
    </main>
  )
}
