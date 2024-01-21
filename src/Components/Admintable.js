import React from 'react';
import { Table } from 'flowbite-react';
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";

function Admintable(props) {
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
                        <Table.HeadCell>
                            <span className="sr-only">Delete</span>
                        </Table.HeadCell>
                    </Table.Head>

                    <Table.Body className="divide-y">

                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Sithija Deshan'}
                            </Table.Cell>
                            <Table.Cell>s@d.c</Table.Cell>
                            <Table.Cell>0769231013</Table.Cell>
                            <Table.Cell>sdeshan</Table.Cell>
                            <Table.Cell>
                                <EditUser/>
                            </Table.Cell>
                            <Table.Cell>
                                <DeleteUser/>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Sithija Deshan'}
                            </Table.Cell>
                            <Table.Cell>s@d.c</Table.Cell>
                            <Table.Cell>0769231013</Table.Cell>
                            <Table.Cell>sdeshan</Table.Cell>
                            <Table.Cell>
                                <EditUser/>
                            </Table.Cell>
                            <Table.Cell>
                                <DeleteUser/>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Sithija Deshan'}
                            </Table.Cell>
                            <Table.Cell>s@d.c</Table.Cell>
                            <Table.Cell>0769231013</Table.Cell>
                            <Table.Cell>sdeshan</Table.Cell>
                            <Table.Cell>
                                <EditUser/>
                            </Table.Cell>
                            <Table.Cell>
                                <DeleteUser/>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Sithija Deshan'}
                            </Table.Cell>
                            <Table.Cell>s@d.c</Table.Cell>
                            <Table.Cell>0769231013</Table.Cell>
                            <Table.Cell>sdeshan</Table.Cell>
                            <Table.Cell>
                                <EditUser/>
                            </Table.Cell>
                            <Table.Cell>
                                <DeleteUser/>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Sithija Deshan'}
                            </Table.Cell>
                            <Table.Cell>s@d.c</Table.Cell>
                            <Table.Cell>0769231013</Table.Cell>
                            <Table.Cell>sdeshan</Table.Cell>
                            <Table.Cell>
                                <EditUser/>
                            </Table.Cell>
                            <Table.Cell>
                                <DeleteUser/>
                            </Table.Cell>
                        </Table.Row>

                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

export default Admintable;