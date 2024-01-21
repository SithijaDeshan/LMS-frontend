import React from 'react';
import Navbardrk from "../Components/Navbardrk";
import Footerdrk from "../Components/Footerdrk";
import { Button } from 'flowbite-react';
import Sidebardrk from "../Components/Sidebardrk";
import Admintable from "../Components/Admintable";

function BookDescription(props) {
    return (
        <div>
            <Navbardrk/>
            <div className="flex">
                <div className="basis-[60%]" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src="/Img/logo.png"
                        className="mr-3 h-6 sm:h-9"
                        style={{ maxWidth: '100%', height: 'auto', border: '5px solid #3498db', borderRadius: '10px' }}
                    />
                </div>

                <div className="book-card" style={{ maxWidth: '40%', padding: '20px 50px 20px 20px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h2 className="text-3xl font-bold mb-2" style={{ color: '#333333' }}>Discover</h2>
                    <h3 className="text-2xl font-semibold mb-2" style={{ color: '#007BFF' }}>The Art of Enlightenment</h3>
                    <p className="text-lg font-medium mb-2" style={{ color: '#555555' }}>By: Mastermind Author</p>
                    <p className="text-gray-700" style={{ lineHeight: '1.6' }}>Embark on a transformative journey with this captivating masterpiece, exploring the realms of wisdom and introspection. Uncover the secrets of enlightenment and embrace the power of profound insights.</p>
                </div>


            </div>
            <div style={{ display: 'flex', gap: '10px', padding: '50px 50px 20px 400px' }}>
                <Button outline gradientDuoTone="cyanToBlue">
                    Edit
                </Button>
                <Button outline gradientDuoTone="cyanToBlue">
                    Delete
                </Button>
                <Button outline gradientDuoTone="cyanToBlue">
                    Lend
                </Button>
                <Button outline gradientDuoTone="cyanToBlue">
                    Add
                </Button>
            </div>


            <Footerdrk/>
        </div>
    );
}

export default BookDescription;