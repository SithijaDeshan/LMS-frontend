import React, { useEffect, useState } from 'react';
import { Table } from "flowbite-react";
import { Button } from 'flowbite-react';
import axios from "axios";
import SearchBar from "./SearchBar";
import {useCookies} from "react-cookie"; // Import the SearchBar component
import {useNavigate} from "react-router-dom";

function SelectUser(props) {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const[id,setId] = useState('');
    const[uid,setUid] = useCookies("uid");
    let navigate = useNavigate();
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/LMS/userform/');
            setData(response.data?.users);
            setFilteredData(response.data?.users);
        } catch (err) {
            console.log(err);
        }
    }

    const handleSearch = (searchTerm) => {
        const filteredUsers = data.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.username.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filteredUsers);
    };

    const selectBtn = (userId) => {

        setUid('uid',userId)
        navigate("/BookSelect")


    }

    return (
        <div>
            {/* Use the SearchBar component */}
            <div style={{ marginBottom: '20px', backgroundColor: '#f7f7f7', borderRadius: '8px', padding: '5px' }}>
                <input
                    type="text"
                    placeholder="Search by name, email, phone, or username..."
                    onChange={(e) => handleSearch(e.target.value)} // Call handleSearch directly
                    style={{
                        width: '100%',
                        padding: '10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        outline: 'none',
                    }}
                />
            </div>

            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Phone Number</Table.HeadCell>
                        <Table.HeadCell>Username</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Select User</span>
                        </Table.HeadCell>
                    </Table.Head>

                    <Table.Body className="divide-y">
                        {filteredData.map((user, index) => (
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {user.name}
                                </Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>{user.phone}</Table.Cell>
                                <Table.Cell>{user.username}</Table.Cell>

                                <Table.Cell >

                                    <Button onClick={() => selectBtn(user.id)} color="success">Select User</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

export default SelectUser;
