import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

const LessonsAccordion = () => {
  return (
    <Accordion allowToggle allowMultiple>
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <Heading as="h2" size="sm">
              Lesson 1
            </Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Text mb={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Button>Start Lesson</Button>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <Heading as="h2" size="sm">
              Lesson 2
            </Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Text mb={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Button>Start Lesson</Button>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <Heading as="h2" size="sm">
              Lesson 3
            </Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Text mb={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Button>Start Lesson</Button>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <Heading as="h2" size="sm">
              Lesson 4
            </Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Text mb={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Button>Start Lesson</Button>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <Heading as="h2" size="sm">
              Lesson 5
            </Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Text mb={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Button>Start Lesson</Button>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default LessonsAccordion;
