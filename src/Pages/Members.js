import React from 'react';
import Navbardrk from "../Components/Navbardrk";
import Footerdrk from "../Components/Footerdrk";
import TabsForTables from "../Components/TabsForTables";
import SearchBar from "../Components/SearchBar";

function Members(props) {
    return (
        <div>
            <Navbardrk/>
            <div>
                <TabsForTables/>
            </div>
            <Footerdrk/>
        </div>
    );
}

export default Members;