

import { TabGroup, TabPanel, TabPanels, TabList, Tab } from "@tremor/react";
import { IconUser, IconUsersGroup } from '@tabler/icons-react';


export default function TabListBase () {

  return (
    <TabGroup className="h-52 flex flex-col">
        <TabList>
          <Tab icon={IconUsersGroup}>Tab 01 with Icon</Tab>
          <Tab icon={IconUser}>Tab 02 with Icon</Tab>
        </TabList>
        <TabPanels className="flex-auto">

          <TabPanel className="h-full m-0 p-5">
            <div className="h-full bg-blue-400"/>
          </TabPanel>

          <TabPanel className="h-full m-0 p-5">
            <div className="h-full bg-slate-500"/>
          </TabPanel>

        </TabPanels>
      </TabGroup>
  )
}

