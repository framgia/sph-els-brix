import {
  Button,
  Flex,
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
  useColorMode,
} from "@chakra-ui/react";
import {
  BiLogOut,
  BiMoon,
  BiRefresh,
  BiRightArrowAlt,
  BiSun,
} from "react-icons/bi";

export default function Settings() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex>
      <Button onClick={toggleColorMode} variant="ghost">
        {colorMode === "light" ? (
          <BiMoon fontSize="26px" />
        ) : (
          <BiSun fontSize="26px" />
        )}
      </Button>
      <Popover>
        <PopoverTrigger>
          <Button variant="ghost">
            <Image
              borderRadius="50%"
              src="assets/aoi-ashito.jpg"
              width="26px"
            />
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader height="max-content">
              <Button
                variant="ghost"
                height="max-content"
                width="full"
                flexDirection="column"
                alignItems="flex-start"
                padding="5px"
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
            </PopoverHeader>
            <PopoverBody>
              <Button
                variant="ghost"
                height="max-content"
                width="full"
                padding="5px"
                alignItems="center"
                justifyContent="flex-start"
                leftIcon={<BiRefresh fontSize="26px" />}
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
            <PopoverFooter>
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
}
