import React from 'react';
import {Button, Label, TextInput} from "flowbite-react";

function BookDetails(props) {
    return (
        <div>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookname" value="Book Name :" />
                    </div>
                    <TextInput style={{ width: '600px' }} id="bookname" type="text" required />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="authorname" value="AuthorName :" />
                    </div>
                    <TextInput id="authorname" type="text" required />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="qty" value="quantity :" />
                    </div>
                    <TextInput id="qty" type="text" required />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="description" value="description :" />
                    </div>
                    <TextInput style={{ width: '600px', height: '200px' }} id="description" type="text" required />
                </div>
            </form>
        </div>
    );
}

export default BookDetails;