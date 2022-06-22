import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { loggedUser } from "../../../utils/dummies/data";

const LessonOverview = () => {
  const [showButton, setShowButton] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id && Number(id) === loggedUser.id) {
      setShowButton(true);
    } else if (id && Number(id) !== loggedUser.id) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [id]);

  return (
    <Box w="550px" rounded="md" p={5} boxShadow="md" borderWidth="1px">
      <Box textAlign="center" w="full">
        <Flex alignItems="center" justifyContent="space-between" mb={5}>
          <Text>Current lesson</Text>
          <Heading as="h2" fontSize={24}>
            Lesson 1
          </Heading>
        </Flex>
        {showButton && <Button w="max-content">Proceed to Lessons</Button>}
      </Box>
    </Box>
  );
};

export default LessonOverview;
