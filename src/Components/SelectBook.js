import React, { useEffect, useState } from 'react';
import { Table } from "flowbite-react";
import axios from "axios";
import {useCookies} from "react-cookie"; // Import the SearchBar component
import {useNavigate} from "react-router-dom";


// SearchBar component
function SearchBar(props) {
    const handleInputChange = (event) => {
        const searchTerm = event.target.value;
        props.onSearch(searchTerm);
    };

    return (
        <div style={{ marginBottom: '20px', backgroundColor: '#f7f7f7', borderRadius: '8px', padding: '5px' }}>
            <input
                type="text"
                placeholder="Search by book name or category..."
                onChange={handleInputChange}
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
    );
}

// SelectBook component
function SelectBook(props) {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const[id,setId] = useState('');
    const[bid,setBid] = useCookies("bid");
    let navigate = useNavigate();

    // Fetch data from API
    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/LMS/booksform/');
            setData(response.data?.books);
            setFilteredData(response.data?.books);
        } catch (err) {
            console.log(err);
        }
    };

    // Fetch data on component mount
    useEffect(() => {
        fetchData();
    }, []);

    // Handle search term change
    // Handle search term change
    const handleSearch = (searchTerm) => {
        const filteredBooks = data.filter(book => {
            // Add null checks before accessing properties
            const name = book.book_name ? book.book_name.toLowerCase() : "";
            const category = book.book_category ? book.book_category.toLowerCase() : "";

            return name.includes(searchTerm.toLowerCase()) || category.includes(searchTerm.toLowerCase());
        });
        setFilteredData(filteredBooks);
    };

    const selectBtn = (bookId) => {

        setBid('bid',bookId)

    }


    // Render component
    return (
        <div className="overflow-x-auto" style={{ padding: '80px' }}>
            <div style={{ paddingBottom: '80px' }}>
                <SearchBar onSearch={handleSearch} />
            </div>
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell>Book name</Table.HeadCell>
                    <Table.HeadCell>Availability</Table.HeadCell>
                    <Table.HeadCell>Category</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {filteredData.map((book, index) => (
                        <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {book.book_name}
                            </Table.Cell>
                            <Table.Cell>{book.book_quantity > 0 ? 'Available' : 'Out of stock'}</Table.Cell>
                            <Table.Cell>{book.book_category}</Table.Cell>
                            <Table.Cell>
                                <a href={"/BookDescription/" + book.id} onClick={() => selectBtn(book.id)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                    View
                                </a>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}

export default SelectBook;
