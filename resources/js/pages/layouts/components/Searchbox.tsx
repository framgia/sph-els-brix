import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { BiBookReader } from "react-icons/bi";
import { SearchIcon } from "@chakra-ui/icons";

const Searchbox = () => (
  <Flex alignItems="center" gap="20px" width="container.md">
    <Flex alignItems="center">
      <BiBookReader fontSize="26px" />
      <Text fontSize="md">E-Learning</Text>
    </Flex>
    <InputGroup width="sm">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input type="text" placeholder="Search user or lesson..." />
    </InputGroup>
  </Flex>
);

export default Searchbox;
