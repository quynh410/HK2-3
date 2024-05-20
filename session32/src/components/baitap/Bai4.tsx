import React, { useState } from 'react'

export default function Bai4() {
    const [progress, setProgress] = useState<number>(0);
    const [subPro, setSubPro] = useState<number | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProgress(Number(event.target.value));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setSubPro(progress);
    };

    return (
        <div>
            <h1>Bài 4</h1>
            <form onSubmit={handleSubmit}>
                <p>Tiến độ hoàn thành : {progress} %</p>
                <div>
                    <input
                        type="range"
                        id="progress"
                        value={progress}
                        min="0"
                        max="100"
                        onChange={handleChange}
                    />
                    <span>{progress}%</span>
                </div>
                <button type="submit">Submit</button>
            </form>
            {subPro !== null && (
                <div>
                    <h3>Tiến độ hoàn thành : {subPro}%</h3>
                </div>
            )}
        </div>
    );
}
