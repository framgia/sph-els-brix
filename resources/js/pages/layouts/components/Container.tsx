import { Flex } from "@chakra-ui/react";

export default function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <Flex
      width="full"
      alignItems="center"
      justifyContent="center"
      padding="20px 70px"
    >
      {children}
    </Flex>
  );
}
