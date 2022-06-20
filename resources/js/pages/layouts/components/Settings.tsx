import {
  AspectRatio,
  Button,
  Flex,
  IconButton,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
  Tooltip,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import {
  BiCog,
  BiLogOut,
  BiMoon,
  BiRightArrowAlt,
  BiSun,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const Settings = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex
      width="container.md"
      alignItems="center"
      justifyContent="flex-end"
      gap={5}
    >
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Light or dark mode toggler"
        isRound
      >
        <Tooltip label={colorMode === "light" ? "Dark mode" : "Light mode"}>
          <AspectRatio ratio={1} w={7}>
            {colorMode === "light" ? <BiMoon /> : <BiSun />}
          </AspectRatio>
        </Tooltip>
      </IconButton>
      <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <PopoverTrigger>
          <IconButton
            variant="ghost"
            aria-label="User icon with options"
            isRound
          >
            <Tooltip label="Profile">
              <AspectRatio ratio={1} w={7}>
                <Image src="assets/aoi-ashito.jpg" borderRadius="full" />
              </AspectRatio>
            </Tooltip>
          </IconButton>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader height="max-content" padding="5px">
              <Link to="/profile">
                <Button
                  variant="ghost"
                  height="max-content"
                  width="full"
                  flexDirection="column"
                  alignItems="flex-start"
                  padding="5px"
                  onClick={onClose}
                >
                  <Flex gap="15px" alignItems="center">
                    <Image
                      src="assets/aoi-ashito.jpg"
                      width="60px"
                      height="60px"
                      borderRadius="50%"
                    />
                    <Flex flexDirection="column" alignItems="flex-start">
                      <Text>Brix Tuyor</Text>
                      <Text fontSize="sm" fontWeight="normal">
                        View profile
                      </Text>
                    </Flex>
                  </Flex>
                </Button>
              </Link>
            </PopoverHeader>
            <PopoverBody padding="5px">
              <Button
                variant="ghost"
                height="max-content"
                width="full"
                padding="5px"
                alignItems="center"
                justifyContent="flex-start"
                leftIcon={<BiCog fontSize="26px" />}
              >
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  width="full"
                >
                  <Text fontWeight="normal">Settings</Text>
                  <BiRightArrowAlt fontSize="26px" />
                </Flex>
              </Button>
            </PopoverBody>
            <PopoverFooter padding="5px">
              <Button
                variant="ghost"
                height="max-content"
                width="full"
                padding="5px"
                alignItems="center"
                justifyContent="flex-start"
                leftIcon={<BiLogOut fontSize="26px" />}
              >
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  width="full"
                >
                  <Text fontWeight="normal">Logout</Text>
                </Flex>
              </Button>
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    </Flex>
  );
};

export default Settings;
