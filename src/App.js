import React from "react";
import Navbardrk from "./Components/Navbardrk";
import Footerdrk from "./Components/Footerdrk";
import { Table } from 'flowbite-react';
import SelectBook from "./Components/SelectBook";

function App() {
    return (
        <div >
            <Navbardrk/>

            {/* Header Section */}
            <div style={{ position: 'relative' }}>
                <img src="/Img/library.jpg" alt="Full Logo" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff' }}>
                    <h1 style={{ fontSize: '5rem', marginBottom: '10px' }}>Welcome to Our Library</h1>
                    <p style={{ fontSize: '1.5rem' }}>Explore our collection of books</p>
                </div>
            </div>

            {/* Main Content Section */}
            <div style={{ padding: '20px' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2rem', color: 'blue', fontWeight: 'bold', fontStyle: 'italic' }}>Available Books</h2>
                <SelectBook/>
            </div>

            <Footerdrk/>
        </div>
    );
}

export default App;
