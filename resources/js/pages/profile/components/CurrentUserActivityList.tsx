import { Flex } from "@chakra-ui/react";
import Activity from "../../dashboard/components/ActivityCard";

const CurrentUserActivityList = () => {
  return (
    <Flex
      justifyContent="center"
      flexDir="column"
      w="full"
      borderWidth="1px"
      rounded="md"
      p={5}
      boxShadow="md"
    >
      <Activity />
      <Activity />
      <Activity />
      <Activity />
      <Activity />
    </Flex>
  );
};

export default CurrentUserActivityList;
