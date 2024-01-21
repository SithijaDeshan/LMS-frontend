import React from 'react';
import {Table} from "flowbite-react";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";

function LendedBooks(props) {
    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell>Book Name</Table.HeadCell>
                            <Table.HeadCell>Borowed user</Table.HeadCell>
                            <Table.HeadCell>Status</Table.HeadCell>
                            <Table.HeadCell>Date</Table.HeadCell>
                        </Table.Head>

                        <Table.Body className="divide-y">

                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {'Madolduwa'}
                                </Table.Cell>
                                <Table.Cell>Sithija deshan</Table.Cell>
                                <Table.Cell>Borrowed</Table.Cell>
                                <Table.Cell>2024/01/15</Table.Cell>
                            </Table.Row>

                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {'Madolduwa'}
                                </Table.Cell>
                                <Table.Cell>Sithija deshan</Table.Cell>
                                <Table.Cell>Borrowed</Table.Cell>
                                <Table.Cell>2024/01/15</Table.Cell>
                            </Table.Row>

                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {'Madolduwa'}
                                </Table.Cell>
                                <Table.Cell>Sithija deshan</Table.Cell>
                                <Table.Cell>Borrowed</Table.Cell>
                                <Table.Cell>2024/01/15</Table.Cell>
                            </Table.Row>

                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {'Madolduwa'}
                                </Table.Cell>
                                <Table.Cell>Sithija deshan</Table.Cell>
                                <Table.Cell>Borrowed</Table.Cell>
                                <Table.Cell>2024/01/15</Table.Cell>
                            </Table.Row>

                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {'Madolduwa'}
                                </Table.Cell>
                                <Table.Cell>Sithija deshan</Table.Cell>
                                <Table.Cell>Borrowed</Table.Cell>
                                <Table.Cell>2024/01/15</Table.Cell>
                            </Table.Row>

                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default LendedBooks;