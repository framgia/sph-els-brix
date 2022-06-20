import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import FollowersPreviewList from "./FollowersPreviewList";

const UserInfo = () => {
  return (
    <Flex
      alignItems="flex-end"
      justifyContent="space-between"
      w="full"
      borderWidth="1px"
      rounded="md"
      p={5}
      boxShadow="md"
    >
      <Flex alignItems="center" gap={5}>
        <Box>
          <AspectRatio ratio={1} w={40}>
            <Image src="assets/aoi-ashito.jpg" borderRadius="full" />
          </AspectRatio>
        </Box>
        <Box>
          <Heading>Brix Tuyor</Heading>
          <Text>5 followers</Text>
          <FollowersPreviewList />
        </Box>
      </Flex>
      <Box>
        <Button fontWeight="normal">Edit Profile</Button>
      </Box>
    </Flex>
  );
};

export default UserInfo;
