import React, { useRef, useState, useEffect } from 'react';

export default function UseRef() {
    const [count, setCount] = useState<number>(0);
    let index = 0;
    const refCurrent = useRef<HTMLInputElement>(null);

    useEffect(() => {
        refCurrent.current?.focus();
    }, []);

    const handleClick = () => {
        index++;
        setCount(count + 1);
    }

    console.log('giá trị index', index);

    return (
        <div>
            <p>Hiển thị count: {count}</p>
            <button onClick={handleClick}>Tăng</button> <br /> <br />
            <input type="text" placeholder='Nhập email' ref={refCurrent} />
        </div>
    )
}
