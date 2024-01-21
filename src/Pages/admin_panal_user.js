import React from 'react';
import Navbardrk from "../Components/Navbardrk";
import Sidebardrk from "../Components/Sidebardrk";
import Footerdrk from "../Components/Footerdrk";
import Usertable from "../Components/Usertable";

function AdminPanalUser(props) {
    const fullPageStyle = {
        height: '100vh',  // 100% of the viewport height
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
    };

    const flexContainerStyle = {
        display: 'flex',
        height: '100%',
    };

    const sidebarStyle = {
        flex: '10%',
    };

    const contentStyle = {
        flex: '90%',
    };

    return (
        <div style={fullPageStyle}>
            <Navbardrk/>
            <div style={flexContainerStyle}>
                <div style={sidebarStyle}>
                    <Sidebardrk/>
                </div>
                <div style={contentStyle}>
                    <strong style={{ color: 'blue', fontSize: '45px' }}>| User</strong>
                    <Usertable/>
                </div>
            </div>
            <Footerdrk/>
        </div>
    );
}

export default AdminPanalUser;