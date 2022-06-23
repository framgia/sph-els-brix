import { Box, Container, Flex, useColorModeValue } from "@chakra-ui/react";

import NavLinks from "./NavLinks";
import Searchbox from "./Searchbox";
import Settings from "./Settings";

const Navbar = () => (
  <Box
    position="sticky"
    top="0"
    py={2}
    boxShadow="md"
    bg={useColorModeValue("white", "gray.800")}
    zIndex="docked"
  >
    <Container maxW="container.xl">
      <Flex alignItems="center" justifyContent="space-between">
        <Searchbox />
        <NavLinks />
        <Settings />
      </Flex>
    </Container>
  </Box>
);

export default Navbar;
