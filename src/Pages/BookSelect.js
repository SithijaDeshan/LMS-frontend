import React from 'react';
import Navbardrk from "../Components/Navbardrk";
import Footerdrk from "../Components/Footerdrk";
import TabsforBooks from "../Components/TabsforBooks";

function BookSelect(props) {
    return (
        <div>
            <Navbardrk/>
            <div>
                <TabsforBooks/>
            </div>
            <Footerdrk/>
        </div>
    );
}

export default BookSelect;