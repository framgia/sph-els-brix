import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";

import PersonalInfoForm from "./PersonalInfoForm";

const SettingsTabs = () => {
  return (
    <Tabs>
      <TabList justifyContent="center">
        <Tab>Personal Information</Tab>
        <Tab>Change Password</Tab>
        <Tab>Account Options</Tab>
      </TabList>

      <TabPanels>
        <TabPanel display="flex" justifyContent="center">
          <PersonalInfoForm />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SettingsTabs;
