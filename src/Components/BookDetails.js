import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Label, TextInput, Textarea, Button } from "flowbite-react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import {useCookies} from "react-cookie"; // Import the SearchBar component


function BookDetails() {
    const [data, setData] = useState({});
    const { book } = useParams();
    const [deleting, setDeleting] = useState(false);
    const [action, setAction] = useState('add'); // State to determine the action (add, edit, delete)
    const [token] = useCookies(["uid","bid"])
    // const [token] = useCookies(["bid"])

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/LMS/book/${book}/`);
            setData(response.data?.book);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleAction = (e, action) => {
        e.preventDefault();
        setAction(action);
        if (action === 'delete') {
            handleDelete();
        } else if (action === 'edit') {
            handleUpdate();
        } else if (action === 'update') {
            // Perform action before navigating
            handleUpdateQuantity();
            // Navigate to the specified URL
            window.location.href = "/admin_panel_booklending";
        } else {
            handleAdd();
        }
    };


    const handleAdd = async () => {
        try {
            const formData = new FormData();
            formData.append("book_name", data.book_name);
            formData.append("book_author", data.book_author);
            formData.append("book_quantity", data.book_quantity);
            formData.append("book_category", data.book_category);
            formData.append("book_description", data.book_description);
            await axios.post(`http://127.0.0.1:8000/LMS/booksform/add/`, formData);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Book added successfully!',
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async () => {
        try {
            const formData = new FormData();
            formData.append("id", data.id);
            formData.append("book_name", data.book_name);
            formData.append("book_author", data.book_author);
            formData.append("book_quantity", data.book_quantity);
            formData.append("book_category", data.book_category);
            formData.append("book_description", data.book_description);
            await axios.put(`http://127.0.0.1:8000/LMS/updatebook/`, formData);
            // Refresh the page
            // window.location.reload();
            // Show a success message after the page is refreshed
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Book updated successfully!',
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdateQuantity = async () => {
        try {
            const formData = new FormData();
            formData.append("id", data.id);
            formData.append("book_name", data.book_name);
            formData.append("book_author", data.book_author);
            formData.append("book_quantity", data.book_quantity);
            formData.append("book_category", data.book_category);
            formData.append("book_description", data.book_description);

            // Log formData for debugging
            console.log("FormData:", formData);

            const response = await axios.put(`http://127.0.0.1:8000/LMS/UpdateBookNew/`, formData);
            // Log response for debugging
            console.log("Response:", response);
        } catch (error) {
            console.log("Error:", error);
        }
    };



    const handleDelete = async () => {
        try {
            setDeleting(true);
            await axios.delete(`http://127.0.0.1:8000/LMS/Deletebook/${data.id}`);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Book Deleted successfully!',
            }).then(() => {
                window.location.reload(); // Refresh the page after successful deletion
            });
        } catch (error) {
            console.error(`Error deleting book:`, error);
        } finally {
            setDeleting(false);
        }
    };


    return (
        <div className="container mx-auto">
            <form onSubmit={(e) => handleAction(e, action)}>
                <div className="mb-4">
                    <Label htmlFor={`bookname`} value="Book Name :" />
                    <TextInput
                        className="w-full"
                        id={`bookname`}
                        type="text"
                        name="book_name"
                        value={data.book_name || ''}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <Label htmlFor={`authorname`} value="AuthorName :" />
                    <TextInput
                        className="w-full"
                        id={`authorname`}
                        type="text"
                        name="book_author"
                        value={data.book_author || ''}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <Label htmlFor={`category`} value="Quantity :" />
                    <TextInput
                        className="w-full"
                        id={`category`}
                        type="text"
                        name="book_quantity"
                        value={data.book_quantity || ''}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <Label htmlFor={`qty`} value="category :" />
                    <TextInput
                        className="w-full"
                        id={`qty`}
                        type="text"
                        name="book_category"
                        value={data.book_category || ''}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <Label htmlFor={`description`} value="Description :" />
                    <Textarea
                        className="w-full"
                        id={`description`}
                        name="book_description"
                        value={data.book_description || ''}
                        onChange={handleInputChange}
                        style={{ height: '10rem' }}
                    />
                </div>

                <div className="flex justify-end mt-8">
                    <Button className="mr-4" outline gradientDuoTone="cyanToBlue" type="button" onClick={(e) => handleAction(e, 'edit')}>
                        Edit
                    </Button>
                    <Button className="mr-4" outline gradientDuoTone="cyanToBlue" type="button" onClick={(e) => handleAction(e, 'delete')}>
                        Delete
                    </Button>
                    <Button className="mr-4" outline gradientDuoTone="cyanToBlue" type="submit">
                        Add
                    </Button>
                    <Button href="/admin_panel_booklending" className="mr-4" outline gradientDuoTone="cyanToBlue" type="button" onClick={(e) => handleAction(e, 'update')} >
                        Lend
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default BookDetails;
