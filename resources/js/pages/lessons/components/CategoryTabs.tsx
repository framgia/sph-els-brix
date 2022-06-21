import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import LessonsAccordion from "./LessonsAccordion";

const CategoryTabs = () => {
  return (
    <Tabs isFitted w="full" borderWidth="1px" rounded="md" boxShadow="md" p={5}>
      <TabList mb="1em">
        <Tab>Easy</Tab>
        <Tab>Medium</Tab>
        <Tab>Hard</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <LessonsAccordion />
        </TabPanel>
        <TabPanel>
          <LessonsAccordion />
        </TabPanel>
        <TabPanel>
          <LessonsAccordion />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default CategoryTabs;
