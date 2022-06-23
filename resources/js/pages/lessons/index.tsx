import { Container } from "@chakra-ui/react";

import CategoryTabs from "./components/CategoryTabs";

const Lessons = () => (
  <Container
    maxW="container.xl"
    marginTop={10}
    paddingTop={5}
    boxShadow="md"
    borderWidth="1px"
    rounded="md"
  >
    <CategoryTabs />
  </Container>
);

export default Lessons;
