

import React, { useState } from 'react';

export default function Bai5() {
    const [status, setStatus] = useState(true);

    const toggle = () => {
        setStatus(!status);
    };

    return (
        <div>
            <div>
                <br />
                <h1>Bài 6</h1>
                <button onClick={toggle}>
                    {status ? 'Hiển' : 'Ẩn'}
                </button>
            </div>
        </div>
    );
}