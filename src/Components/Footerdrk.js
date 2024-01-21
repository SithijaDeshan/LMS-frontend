import React from 'react';
import { Footer } from 'flowbite-react';

function Footerdrk(props) {
    return (
        <div>
            <Footer container>
                <div className="w-full text-center">
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                        <img src="/Img/logo.png" className="mr-3 h-6 sm:h-9" style={{ width: '100px', height: 'auto' }}/>
                        <Footer.LinkGroup>
                            <Footer.Link href="#">About us</Footer.Link>
                            <Footer.Link href="#">Contact</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <Footer.Divider />
                    <Footer.Copyright href="#" by="APT" year={2024} />
                </div>
            </Footer>
        </div>
    );
}

export default Footerdrk;