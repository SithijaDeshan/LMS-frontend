import React from 'react';
import {Tabs} from "flowbite-react";
import {HiUserCircle} from "react-icons/hi";
import SearchBar from "./SearchBar";
import SelectUser from "./SelectUser";
import {MdDashboard} from "react-icons/md";
import SelectBook from "./SelectBook";

function TabsforBooks(props) {
    return (
        <div>
            <Tabs aria-label="Default tabs" style="default">
                <Tabs.Item title="Books" icon={MdDashboard}>
                    <SelectBook/>
                </Tabs.Item>
            </Tabs>
        </div>
    );
}

export default TabsforBooks;