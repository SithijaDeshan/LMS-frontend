import React from 'react';
import { Button, Navbar } from 'flowbite-react';

function Navbardrk() {
    return (
        <div>
            <Navbar fluid rounded>
                <Navbar.Brand >
                    <img src="/Img/logo.png" className="mr-3 h-6 sm:h-9" style={{ width: '100px', height: 'auto' }}/>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button>Register</Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#">About</Navbar.Link>
                    <Navbar.Link href="#">Books</Navbar.Link>
                    <Navbar.Link href="#">Members</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navbardrk;