import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export default function Activity() {
  return (
    <Box
      width="full"
      borderWidth="1px"
      rounded="md"
      padding="20px"
      marginBottom="10px"
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
        <Button variant="ghost">...</Button>
      </Flex>
    </Box>
  );
}
