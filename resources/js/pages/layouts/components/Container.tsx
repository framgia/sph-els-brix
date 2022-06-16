import { Flex } from "@chakra-ui/react";

const Container = ({ children }: React.PropsWithChildren<{}>) => (
  <Flex
    width="full"
    alignItems="center"
    justifyContent="center"
    padding="20px 70px"
  >
    {children}
  </Flex>
);

export default Container;
