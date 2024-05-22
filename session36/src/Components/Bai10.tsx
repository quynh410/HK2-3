import React, { ChangeEvent, useEffect, useState } from 'react'

export default function Bai10() {
    const [keyPress, setKeyPress] = useState<string>('');
    const [keyCode, setKeyCode] = useState<number>(0);

    useEffect(() => {
        const handleKeyPress = (e:any) => {
            setKeyPress(e.key);
            setKeyCode(e.keyCode);
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []); 

    return (
        <div>
            <h1>Bài 10</h1>
            <p>Bạn đã nhập phím: {keyPress}</p>
            <p>Mã phím: {keyCode}</p>
        </div>
    );
}

