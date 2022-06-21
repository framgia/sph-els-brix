import { Container, Flex } from "@chakra-ui/react";
import CategoryTabs from "./components/CategoryTabs";

const Lessons = () => (
  <Container maxW="container.xl" py={5}>
    <Flex justifyContent="center">
      <CategoryTabs />
    </Flex>
  </Container>
);

export default Lessons;
