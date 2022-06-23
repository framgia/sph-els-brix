import { Container, Flex } from "@chakra-ui/react";

import LessonOverview from "./components/LessonOverview";
import UserActivityList from "./components/UserActivityList";
import UserInfo from "./components/UserInfo";

const Profile = () => {
  return (
    <Container maxW="container.xl" py={5}>
      <Flex justifyContent="center" w="full" mb={5}>
        <UserInfo />
      </Flex>
      <Flex alignItems="flex-start" justifyContent="space-between" gap={5}>
        <LessonOverview />
        <UserActivityList />
      </Flex>
    </Container>
  );
};

export default Profile;
