import { Flex } from "@chakra-ui/react";

import NavLinks from "./NavLinks";
import Searchbox from "./Searchbox";
import Settings from "./Settings";

export default function Navbar() {
  return (
    <Flex
      position="sticky"
      top="0"
      padding="10px 70px"
      boxShadow="0 2px 2px 0 rgba(0, 0, 0, 0.05)"
      alignItems="center"
      justifyContent="space-between"
    >
      <Searchbox />
      <NavLinks />
      <Settings />
    </Flex>
  );
}
