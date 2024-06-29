import React, { useEffect, useState } from 'react';
import { Table } from "flowbite-react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import { useCookies } from "react-cookie";
import axios from "axios";
import { Datepicker } from 'flowbite-react';
import AdminCalander from "./AdminCalander";

function LendedBooks(props) {
    const [data, setData] = useState([]);
    const [token, setToken] = useCookies(["uid", "bid"]); // Using setToken to update cookies

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (token.uid && token.bid) { // Check if token values are present
                    const response = await axios.get(`http://127.0.0.1:8000/LMS/Getuser/${token.uid}`);
                    const userName = response.data.name;

                    const responseBook = await axios.get(`http://127.0.0.1:8000/LMS/Getbook/${token.bid}`);
                    const bookName = responseBook.data.book_name;

                    const currentDate = new Date().toISOString().split('T')[0]; // Extracting only the date part

                    // Data to be posted
                    const postData = {
                        borrowed_user: userName,
                        borrowed_book: bookName,
                        borrowed_date: currentDate
                    };

                    // Posting the data to the correct URL
                    await axios.post(`http://127.0.0.1:8000/LMS/BorrowedInfo/`, postData);
                    // console.log(postData)

                    setToken("uid", "", { expires: new Date(0) });
                    setToken("bid", "", { expires: new Date(0) });
                }

                // Fetching data after performing operations
                const borrowedData = await axios.get(`http://127.0.0.1:8000/LMS/borrowedform/`);
                setData(borrowedData.data.BorrowedBook); // Set the fetched data
                console.log(borrowedData.data)
            } catch (err) {
                console.log(err);
            }
        };

        fetchData(); // Call fetchData on mount
    }, []); // Dependency added for re-fetching data when token changes

    console.log("Data:", data); // Log the data to understand its structure

    return (
        <div>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Book Name</Table.HeadCell>
                        <Table.HeadCell>Borrowed user</Table.HeadCell>
                        <Table.HeadCell>Borrowed Date</Table.HeadCell>
                        <Table.HeadCell>Returned Date</Table.HeadCell>
                    </Table.Head>

                    <Table.Body className="divide-y">
                        {data.map((borrowedData, index) => (
                            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {borrowedData.borrowed_book}
                                </Table.Cell>
                                <Table.Cell>{borrowedData.borrowed_user}</Table.Cell>
                                <Table.Cell>{borrowedData.borrowed_date}</Table.Cell>
                                <Table.Cell>
                                    <AdminCalander/>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

export default LendedBooks;
