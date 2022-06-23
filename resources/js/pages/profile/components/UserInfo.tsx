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

import FollowersPreviewList from "./FollowersPreviewList";

import { loggedUser, visitedUser } from "../../../utils/dummies/data";

const UserInfo = () => {
  const { id } = useParams();

  const [user, setUser] = useState<ELearning.UserInfo>();

  useEffect(() => {
    if (id) {
      Number(id) === loggedUser.id ? setUser(loggedUser) : setUser(visitedUser);
    } else {
      setUser(loggedUser);
    }
  }, [id]);

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
        {loggedUser.id === user?.id ? (
          <Button fontWeight="normal">Edit Profile</Button>
        ) : (
          <Button fontWeight="normal">Follow {user?.fullName}</Button>
        )}
      </Box>
    </Flex>
  );
};

export default UserInfo;
