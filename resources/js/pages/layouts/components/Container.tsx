import { FC, PropsWithChildren } from "react";
import { Flex } from "@chakra-ui/react";

const Container: FC<PropsWithChildren> = ({ children }) => (
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
