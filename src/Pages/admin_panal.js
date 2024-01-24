import React from 'react';
import Navbardrk from "../Components/Navbardrk";
import Footerdrk from "../Components/Footerdrk";
import Sidebardrk from "../Components/Sidebardrk";
import Admintable from "../Components/Admintable";

function AdminPanal(props) {
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
                    <strong style={{ color: 'blue', fontSize: '45px' }}>| Admins</strong>
                    <Admintable/>
                </div>
            </div>
            <Footerdrk/>
        </div>
    );
}


export default AdminPanal;