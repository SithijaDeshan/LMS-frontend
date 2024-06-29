import React from 'react';
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import axios from "axios";

function DeleteUser(props) {
    const [openModal, setOpenModal] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const handleDelete = async () => {
        try{
            setDeleting(true);
            console.log(props.endpoint)

            await axios.delete(`http://127.0.0.1:8000/LMS/${props.endpoint}/${props.item.id}`)
            props.onDeleteSuccess()

        }catch (error){
            console.error(`Error deleting ${props.endpoint}:`, error)
        }finally {
            setDeleting(false)
            setOpenModal(false)
        }
    }

    return (
        <>
            <Button color="failure" onClick={() => setOpenModal(true)}>Delete</Button>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this user?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={handleDelete} disabled={deleting} id="sure-delete">
                                {deleting ? `Deleting ${props.endpoint}...` : "Yes, I'm sure"}
                            </Button>
                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default DeleteUser;