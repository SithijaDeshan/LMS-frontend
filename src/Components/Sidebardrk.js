import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';
import {Link} from 'react-router-dom';

function Sidebardrk(props) {
    return (
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/admin_panel" icon={HiUser}>
                        Admins
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin_panel_user" icon={HiUser}>
                        Users
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin_panel_booklending" icon={HiInbox}>
                        Lending
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}

export default Sidebardrk;