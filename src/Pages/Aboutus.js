import React from 'react';
import Navbardrk from "../Components/Navbardrk";
import Footerdrk from "../Components/Footerdrk";
import "../Css/Aboutus.css"

function Aboutus(props) {
    return (
        <div>
            <Navbardrk />
            <div style={{ textAlign: 'center', fontSize: '24px', padding: '40px', color: 'blue', fontWeight: 'bold', fontStyle: 'italic' }}>
                About Us
            </div>
            <div className="about-us-container">
            <div className="paragraph-container">
                <p>Welcome to our Library Management System!</p>
                <p>
                    Our library system allows users to borrow and return books, search for
                    available titles, and manage their reading history. We aim to provide a
                    user-friendly experience for both library staff and patrons.
                </p>
                <p>
                    If you have any questions or feedback, feel free to contact us at{' '}
                    <a href="booktechlms@gmail.com">booktechlms@gmail.com</a>.
                </p>
                </div>
            </div>

            <Footerdrk />
        </div>
    );
}

export default Aboutus;