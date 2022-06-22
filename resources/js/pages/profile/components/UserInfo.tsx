import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useStore from "../../../store";
import FollowersPreviewList from "./FollowersPreviewList";

const UserInfo = () => {
  const { loggedUser, visitedUser, loggedUserId } = useStore();
  const { id } = useParams();

  const [user, setUser] = useState<ELearning.UserInfo>();

  useEffect(() => {
    Number(id) === loggedUserId ? setUser(loggedUser) : setUser(visitedUser);
  }, []);

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
            <Image src={user?.imgUrl} borderRadius="full" />
          </AspectRatio>
        </Box>
        <Box>
          <Heading>{user?.fullName}</Heading>
          <Text>10 followers</Text>
          <FollowersPreviewList />
        </Box>
      </Flex>
      <Box>
        {loggedUserId === user?.id ? (
          <Button fontWeight="normal">Edit Profile</Button>
        ) : (
          <Button fontWeight="normal">Follow {user?.fullName}</Button>
        )}
      </Box>
    </Flex>
  );
};

export default UserInfo;
