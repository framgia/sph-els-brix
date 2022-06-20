import {
  AspectRatio,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Searchbox = () => (
  <Flex alignItems="center" gap="20px" width="container.md">
    <AspectRatio ratio={1} w={7}>
      <Image src="assets/e-learning-logo.png" />
    </AspectRatio>
    <InputGroup w="auto">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input type="text" placeholder="Search user or lesson..." />
    </InputGroup>
  </Flex>
);

export default Searchbox;
