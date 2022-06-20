import { Container, Flex } from "@chakra-ui/react";
import CurrentLessonOverview from "./components/CurrentLessonOverview";
import CurrentUserActivityList from "./components/CurrentUserActivityList";
import UserInfo from "./components/UserInfo";

const Profile = () => {
  return (
    <Container maxW="container.xl" py={5}>
      <Flex justifyContent="center" w="full" mb={5}>
        <UserInfo />
      </Flex>
      <Flex alignItems="flex-start" justifyContent="space-between" gap={5}>
        <CurrentLessonOverview />
        <CurrentUserActivityList />
      </Flex>
    </Container>
  );
};

export default Profile;
