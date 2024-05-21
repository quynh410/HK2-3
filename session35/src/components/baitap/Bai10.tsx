import React, { useState } from 'react'

export default function Bai10() {
    const [hobbies, setHobbies] = useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;

        setHobbies(pre => {
            if (checked) {
                return [...pre, value];
            } else {
                return pre.filter(hobby => hobby !== value);
            }
        });
    };

    return (
        <div>
            <h1>Bài 10</h1>
            <p>Sở Thích [ <b>{hobbies.join(', ')}</b> ]</p>
            <input type="checkbox" value="Đi chơi" onChange={handleChange} /> Đi chơi <br />
            <input type="checkbox" value="Code" onChange={handleChange} /> Code <br />
            <input type="checkbox" value="Bơi Lội" onChange={handleChange} /> Bơi Lội <br />
            <input type="checkbox" value="Nhảy Dây" onChange={handleChange} /> Nhảy Dây <br />
        </div>
    );
}
