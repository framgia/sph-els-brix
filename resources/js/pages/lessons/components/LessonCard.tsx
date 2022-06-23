import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

type LessonCardProps = {
  title: string;
  description: string;
  isUnlocked: boolean;
};

const LessonCard: React.FC<LessonCardProps> = ({
  title,
  description,
  isUnlocked,
}) => {
  return (
    <Accordion allowToggle allowMultiple>
      <AccordionItem py={5}>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <Heading as="h2" fontSize="md">
              {title}
            </Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Text mb={5}>{description}</Text>
          <Button isDisabled={!isUnlocked}>Start {title}</Button>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default LessonCard;
