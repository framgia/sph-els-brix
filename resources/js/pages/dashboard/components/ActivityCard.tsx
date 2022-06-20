import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import { BiDotsHorizontalRounded, BiXCircle } from "react-icons/bi";

const Activity = () => (
  <Box
    width="full"
    borderWidth="1px"
    rounded="md"
    padding="20px"
    marginBottom="20px"
  >
    <Flex justifyContent="space-between">
      <Flex gap="10px" alignItems="center">
        <Image src="assets/aoi-ashito.jpg" width="50px" borderRadius="50%" />
        <Box>
          <Flex gap="5px" alignItems="baseline">
            <Text fontWeight="bold">Brix Tuyor</Text>
            <Text fontSize="sm">started a new lesson</Text>
          </Flex>
          <Text fontSize="sm">2 hours ago</Text>
        </Box>
      </Flex>

      <Popover>
        <PopoverTrigger>
          <IconButton
            variant="ghost"
            size="sm"
            icon={<BiDotsHorizontalRounded />}
            aria-label={"Activity Options"}
          />
        </PopoverTrigger>
        <Portal>
          <PopoverContent width="max-content" padding="5px">
            <Button
              variant="ghost"
              fontWeight="normal"
              leftIcon={<BiXCircle fontSize="26px" />}
            >
              Unfollow
            </Button>
          </PopoverContent>
        </Portal>
      </Popover>
    </Flex>
  </Box>
);

export default Activity;
