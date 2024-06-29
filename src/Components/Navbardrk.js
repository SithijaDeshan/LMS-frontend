import React from 'react';
import { Button, Navbar } from 'flowbite-react';
import Members from "../Pages/Members";
import { useNavigate } from "react-router-dom";

function Navbardrk() {
    let navigate = useNavigate();

    const logout = () => {
        document.cookie = 'mytoken=null; expires=thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div>
            <Navbar fluid rounded>
                <Navbar.Brand >
                    <img src="/Img/logo.png" className="mr-3 h-6 sm:h-9" style={{ width: '100px', height: 'auto' }}/>
                </Navbar.Brand>
                <div className="flex md:order-2 space-x-3">
                    <Button href="/register">Register</Button>
                    <Button onClick={logout}>Logout</Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="/" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/Aboutus">About us</Navbar.Link>
                    <Navbar.Link href="/Members">Members</Navbar.Link>
                    <Navbar.Link href="/admin_panel">Admin Panel</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navbardrk;