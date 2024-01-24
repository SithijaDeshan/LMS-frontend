import React from 'react';
import { Card } from 'flowbite-react';
import Navbardrk from "../Components/Navbardrk";
import Footerdrk from "../Components/Footerdrk";
import UpdateUser from "../Components/UpdateUser";
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

function MemberDetailsUpdate(props) {
    const backgroundImageUrl = '/Img/BookDe.jpg';
    return (
        <div style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column' }} >
            <Navbardrk/>
            <Tabs aria-label="Default tabs" style="default">
                <Tabs.Item active title="Profile" icon={HiUserCircle}>
                </Tabs.Item>
            </Tabs>
                <div className="flex">
                    <div className="basis-[40%]" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom:'50px' }}>
                        <img
                            src="/Img/propic.jpg"
                            className="mr-3 h-6 sm:h-9"
                            style={{ maxWidth: '600px', height: '500px', border: '5px solid #3498db', borderRadius: '10px' }}
                        />
                    </div>
                    <div className="basis-[40%]" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <UpdateUser/>
                    </div>
                </div>
            <Footerdrk/>
        </div>

    );
}

export default MemberDetailsUpdate;