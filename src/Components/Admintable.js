import React, {useEffect, useState} from 'react';
import {Table} from 'flowbite-react';
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";
import axios from "axios";

function Admintable(props) {
    const [data, setData] = useState([])


    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/LMS/userform/');
            console.log(response.data)
            setData(response.data?.users)
            const users = response.data.users;

            const filteredUsers = users.filter(user => user.user_role === 'Admin' || user.user_role === 'admin');
            setData(filteredUsers)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Phone Number</Table.HeadCell>
                        <Table.HeadCell>Username</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                        {/*<Table.HeadCell>*/}
                        {/*    <span className="sr-only">Delete</span>*/}
                        {/*</Table.HeadCell>*/}
                    </Table.Head>

                    <Table.Body className="divide-y">
                        {
                            data.map((user, index) => (
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {user.name}
                                    </Table.Cell>
                                    <Table.Cell>{user.email}</Table.Cell>
                                    <Table.Cell>{user.phone}</Table.Cell>
                                    <Table.Cell>{user.username}</Table.Cell>
                                    <Table.Cell>
                                        <EditUser user={user}/>
                                    </Table.Cell>
                                    {/*<Table.Cell>*/}
                                    {/*    <DeleteUser item={user} onDeleteSuccess={fetchData} endpoint="userform"/>*/}
                                    {/*</Table.Cell>*/}
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

export default Admintable;