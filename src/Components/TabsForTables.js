import React from 'react';
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import SelectUser from "./SelectUser";
import SearchBar from "./SearchBar";
import SelectBook from "./SelectBook";

function TabsForTables(props) {
    return (
        <div>
            <Tabs aria-label="Default tabs" style="default">
                <Tabs.Item active title="Users" icon={HiUserCircle}>
                    <div style={{textAlign : "center", padding:"20px"}}>
                    </div>
                    <SelectUser/>
                </Tabs.Item>
            </Tabs>
        </div>
    );
}

export default TabsForTables;