import { Flex, useColorModeValue } from "@chakra-ui/react";

import NavLinks from "./NavLinks";
import Searchbox from "./Searchbox";
import Settings from "./Settings";

export default function Navbar() {
  const bg = useColorModeValue("#ffffff", "#1A202C");
  return (
    <Flex
      position="sticky"
      top="0"
      padding="10px 70px"
      boxShadow="md"
      alignItems="center"
      justifyContent="space-between"
      bg={bg}
      zIndex="docked"
    >
      <Searchbox />
      <NavLinks />
      <Settings />
    </Flex>
  );
}
