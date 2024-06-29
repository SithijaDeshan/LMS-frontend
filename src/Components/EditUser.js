import React, { useState } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import axios, {Axios} from 'axios';
import {error} from "next/dist/build/output/log";

function EditUser(props) {
    const [openModal, setOpenModal] = useState(false);
    const { user } = props; // Extracting user data from props

    const [userData, setUserData] = useState({
        name: user.name,
        email: user.email,
        phone: user.phone,
        username: user.username
    });

    const onCloseModal = () => {
        setOpenModal(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        formData.append("id" , user?.id)
        axios.put(`http://127.0.0.1:8000/LMS/updateuser/` , formData).then(response => {
            console.log(response.data)
            onCloseModal();
        }).catch(error => {
            console.log(error)
        })
    };

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Edit User</Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header>Edit User</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit selected user</h3>
                        <form onSubmit={(e) => handleUpdate(e)} >
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Name" />
                                </div>
                                <TextInput id="name" name="name" type="text" value={userData.name} onChange={handleInputChange} required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Email" />
                                </div>
                                <TextInput id="email" name="email" type="email" value={userData.email} onChange={handleInputChange} required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="phone" value="Phone Number" />
                                </div>
                                <TextInput id="phone" name="phone" type="text" value={userData.phone} onChange={handleInputChange} required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="username" value="Username" />
                                </div>
                                <TextInput id="username" name="username" type="text" value={userData.username} onChange={handleInputChange} required />
                            </div>
                            <div className="w-full">
                                <Button type={"submit"}>Update</Button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EditUser;
