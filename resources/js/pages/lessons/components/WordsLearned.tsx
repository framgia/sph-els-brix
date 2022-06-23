import { Flex, Tag } from "@chakra-ui/react";

import { wordsLearned } from "../../../utils/dummies/data";

const WordsLearned = () => {
  return (
    <Flex gap={5}>
      {wordsLearned.map((word, index) => (
        <Tag key={index} rounded="none">
          {word}
        </Tag>
      ))}
    </Flex>
  );
};

export default WordsLearned;
