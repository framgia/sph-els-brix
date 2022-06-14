import { Button, Flex, Tooltip } from "@chakra-ui/react";
import { BiBookOpen, BiGroup, BiHomeSmile } from "react-icons/bi";

export default function NavLinks() {
  return (
    <Flex gap="20px">
      <Tooltip label="Dashboard">
        <Button fontWeight="normal" variant="ghost">
          <BiHomeSmile fontSize="26px" />
        </Button>
      </Tooltip>
      <Tooltip label="Follows">
        <Button fontWeight="normal" variant="ghost">
          <BiGroup fontSize="26px" />
        </Button>
      </Tooltip>
      <Tooltip label="Lessons">
        <Button fontWeight="normal" variant="ghost">
          <BiBookOpen fontSize="26px" />
        </Button>
      </Tooltip>
    </Flex>
  );
}
