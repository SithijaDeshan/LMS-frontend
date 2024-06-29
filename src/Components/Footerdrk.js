import React from 'react';
import { Footer } from 'flowbite-react';

function Footerdrk(props) {
    return (
        <div>
            <Footer style={{ backgroundColor: 'gray' }} className="footer-container" container>
                <div className="w-full text-center">
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                        <img src="/Img/logo.png" className="mr-3 h-6 sm:h-9" style={{ width: '100px', height: 'auto' }} />
                        <Footer.LinkGroup>
                            <Footer.Link style={{ color: 'black' }} href="#">
                                About us
                            </Footer.Link>
                            <Footer.Link style={{ color: 'black' }} href="#">
                                Contact
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <Footer.Divider />
                    <div classname="footerbg">

                        <p>
                            © 2024 Library Management System | Designed with ❤️ by BookTech Digital Library
                        </p>
                        <Footer.Copyright
                            style={{ color: 'black' }}
                            href="#"
                            by="APT"
                            year={2024}
                        />

                    </div>

                </div>
            </Footer>
        </div>
    );
}

export default Footerdrk;