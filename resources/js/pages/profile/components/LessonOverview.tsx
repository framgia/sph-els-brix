import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { loggedUser } from "../../../utils/dummies/data";

const LessonOverview = () => {
  const { id } = useParams();
  return (
    <Box w="550px" rounded="md" p={5} boxShadow="md" borderWidth="1px">
      <Box textAlign="center" w="full">
        <Flex alignItems="center" justifyContent="space-between" mb={5}>
          <Text>Current lesson</Text>
          <Heading as="h2" fontSize={24}>
            Lesson 1
          </Heading>
        </Flex>
        {Number(id) === loggedUser.id && (
          <Button w="max-content">Proceed to Lessons</Button>
        )}
      </Box>
    </Box>
  );
};

export default LessonOverview;
