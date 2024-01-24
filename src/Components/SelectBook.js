import React from 'react';
import {Table} from "flowbite-react";

function SelectBook(props) {
    return (
        <div className="overflow-x-auto" style={{ padding: '80px' }}>
            <Table hoverable >
                <Table.Head>
                    <Table.HeadCell>Book name</Table.HeadCell>
                    <Table.HeadCell>Availability</Table.HeadCell>
                    <Table.HeadCell>Category</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {'Madoldoowa'}
                        </Table.Cell>
                        <Table.Cell>Available</Table.Cell>
                        <Table.Cell>Adventure</Table.Cell>
                        <Table.Cell>
                            <a href="/BookDescription" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                View
                            </a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Lord of the rings
                        </Table.Cell>
                        <Table.Cell>Available</Table.Cell>
                        <Table.Cell>Adventure</Table.Cell>
                        <Table.Cell>
                            <a href="/BookDescription" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                View
                            </a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Harry Pottere</Table.Cell>
                        <Table.Cell>Unavailable</Table.Cell>
                        <Table.Cell>Darama</Table.Cell>
                        <Table.Cell>
                            <a href="/BookDescription" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                View
                            </a>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
}

export default SelectBook;