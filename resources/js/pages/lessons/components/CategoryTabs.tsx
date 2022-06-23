import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Fragment } from "react";

import LessonCard from "./LessonCard";

import {
  easyLessons,
  mediumLessons,
  hardLessons,
} from "../../../utils/dummies/data";

const CategoryTabs = () => {
  const calculatePercentage = (lessons: typeof easyLessons) =>
    (lessons.filter((lesson) => lesson.isFinished).length / lessons.length) *
    100;

  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab display="flex" gap={1.5}>
          <Text>Easy</Text>
          <Tag>{calculatePercentage(easyLessons)}%</Tag>
        </Tab>
        <Tab display="flex" gap={1.5}>
          <Text>Medium</Text>
          <Tag>{calculatePercentage(mediumLessons)}%</Tag>
        </Tab>
        <Tab display="flex" gap={1.5}>
          <Text>Hard</Text>
          <Tag>{calculatePercentage(hardLessons)}%</Tag>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          {easyLessons.map((lesson) => (
            <Fragment key={lesson.id}>
              <LessonCard {...lesson} />
            </Fragment>
          ))}
        </TabPanel>
        <TabPanel>
          {mediumLessons.map((lesson) => (
            <Fragment key={lesson.id}>
              <LessonCard {...lesson} />
            </Fragment>
          ))}
        </TabPanel>
        <TabPanel>
          {hardLessons.map((lesson) => (
            <Fragment key={lesson.id}>
              <LessonCard {...lesson} />
            </Fragment>
          ))}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default CategoryTabs;
