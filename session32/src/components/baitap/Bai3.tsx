import React, { useState } from 'react'

export default function Bai3() {
    const [date, setDate] = useState<string>('');
    const [subDate, setSubDate] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setSubDate(date);
    };

    return (
        <div>
            <h1>Bài 3</h1>
            <p>Ngày sinh : {date}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="date"
                        id="birthdate"
                        value={date}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {subDate && (
                <div>
                    <h2>Submitted Birthdate: {subDate}</h2>
                </div>
            )}
        </div>
    );
}
