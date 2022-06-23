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
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab display="flex" gap={1.5}>
          <Text>Easy</Text>
          <Tag>0 %</Tag>
        </Tab>
        <Tab display="flex" gap={1.5}>
          <Text>Medium</Text>
          <Tag>0 %</Tag>
        </Tab>
        <Tab display="flex" gap={1.5}>
          <Text>Hard</Text>
          <Tag>0 %</Tag>
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
