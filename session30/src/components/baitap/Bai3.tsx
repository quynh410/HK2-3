import React, { useState } from 'react';

export default function Bai3() {
    const [date, setDate] = useState<string>('');

    const handleDateChange = (event:any) => {
        setDate(event.target.value);
        console.log(event.target.value);
    };

    return (
        <div>
            <h1>Bài 3</h1>
            <h3>Thời gian: <span>{date}</span></h3>
            <input
                type="date"
                value={date}
                onChange={handleDateChange}
            />
        </div>
    );
}
