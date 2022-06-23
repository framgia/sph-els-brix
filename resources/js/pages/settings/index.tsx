import { Container, Heading } from "@chakra-ui/react";
import SettingsTabs from "./components/SettingsTabs";

const Settings = () => {
  return (
    <Container
      maxW="container.xl"
      p={5}
      mt={10}
      boxShadow="md"
      borderWidth="1px"
      rounded="md"
    >
      <Heading mb={5}>Settings</Heading>
      <SettingsTabs />
    </Container>
  );
};

export default Settings;
