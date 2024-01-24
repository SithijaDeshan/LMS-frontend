import React from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

function UpdateUser(props) {
    return (
        <form className="flex flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput
                    id="email1"
                    type="email"
                    placeholder="name@flowbite.com"
                    required
                    style={{ width: '600px' }}
                />
            </div>

            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput id="password1" type="password" required />
            </div>

            <div>
                <div className="mb-2 block">
                    <Label htmlFor="name" value="Name" />
                </div>
                <TextInput id="name" type="text" required />
            </div>

            <div>
                <div className="mb-2 block">
                    <Label htmlFor="uname" value="User name" />
                </div>
                <TextInput id="uname" type="text" required />
            </div>
            <Button type="submit">Update</Button>
        </form>
    );
}

export default UpdateUser;