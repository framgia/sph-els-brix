import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import ChangePassword from "./ChangePassword";

import AccountDetails from "./AccountDetails";

const SettingsTabs = () => {
  return (
    <Tabs>
      <TabList justifyContent="center">
        <Tab>Account Details</Tab>
        <Tab>Password</Tab>
      </TabList>

      <TabPanels>
        <TabPanel display="flex" justifyContent="center">
          <AccountDetails />
        </TabPanel>
        <TabPanel display="flex" justifyContent="center">
          <ChangePassword />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SettingsTabs;
