import React from 'react';
import Navbardrk from "../Components/Navbardrk";
import Footerdrk from "../Components/Footerdrk";
import { Button } from 'flowbite-react';
import Sidebardrk from "../Components/Sidebardrk";
import Admintable from "../Components/Admintable";
import BookDetails from "../Components/BookDetails";

function BookDescription(props) {
    const backgroundImageUrl = '/Img/BookDe.jpg';

    return (
<div style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbardrk />
            <div className="flex">
                <div className="basis-[60%]" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
                    <img
                        src="/Img/Hp.jpeg"
                        className="mr-3 h-6 sm:h-9"
                        style={{ width: '400px', height: '700px', border: '5px solid #3498db', borderRadius: '10px' }}
                    />
                </div>

                <div style={{paddingTop:"20px"}}>
                    <BookDetails/>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '10px', padding: '50px 20px 50px 400px' }}>
                <Button outline gradientDuoTone="cyanToBlue">
                    Edit
                </Button>
                <Button outline gradientDuoTone="cyanToBlue">
                    Delete
                </Button>
                <Button href="/admin_panel_booklending" outline gradientDuoTone="cyanToBlue">
                    Lend
                </Button>
                <Button outline gradientDuoTone="cyanToBlue">
                    Add
                </Button>
            </div>
            <Footerdrk />
        </div>
    );
}

export default BookDescription;
