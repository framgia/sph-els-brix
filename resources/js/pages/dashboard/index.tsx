import { Container, Flex } from "@chakra-ui/react";
import Activities from "./components/ActivityList";

const Dashboard = () => (
  <Container maxW="container.xl" py={5}>
    <Flex justifyContent="center">
      <Activities />
    </Flex>
  </Container>
);

export default Dashboard;
