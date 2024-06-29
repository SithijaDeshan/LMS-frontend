import React, { useState } from 'react';
import { Datepicker } from 'flowbite-react';

function AdminCalendar(props) {
    const [selectedDate, setSelectedDate] = useState(null);

    // Function to handle date change
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <Datepicker
                weekStart={1} // Monday
                onChange={handleDateChange} // Handle date change
            />
            {/* Display the selected date */}
            {selectedDate && <p>Selected Date: {selectedDate.toString()}</p>}
        </div>
    );
}

export default AdminCalendar;
