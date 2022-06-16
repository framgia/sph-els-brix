import { Flex, useColorModeValue } from "@chakra-ui/react";

import NavLinks from "./NavLinks";
import Searchbox from "./Searchbox";
import Settings from "./Settings";

const Navbar = () => (
  <Flex
    position="sticky"
    top="0"
    padding="10px 70px"
    boxShadow="md"
    alignItems="center"
    justifyContent="space-between"
    bg={useColorModeValue("#ffffff", "#1A202C")}
    zIndex="docked"
  >
    <Searchbox />
    <NavLinks />
    <Settings />
  </Flex>
);

export default Navbar;
