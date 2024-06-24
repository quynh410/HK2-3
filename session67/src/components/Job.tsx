import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { JobTodo } from '../interface';

export default function Job() {
    const [name, setName] = useState<string>("");
    const [level, setLevel] = useState<string>("");
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editId, setEditId] = useState<number | null>(null);

    const jobs: any = useSelector(state => state);
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        setName(value);
    }

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let valueSelect = e.target.value;
        setLevel(valueSelect);
    }

    const addTodo = () => {
        if (isEditing && editId !== null) {
            dispatch({
                type: "EDIT_TODO",
                payload: {
                    id: editId,
                    name: name,
                    level: level
                }
            });
            setIsEditing(false);
            setEditId(null);
        } else {
            let newJob = {
                id: Math.floor(Math.random() * 100000000),
                name: name,
                status: false,
                level: level
            }
            dispatch({
                type: "ADD_TODO",
                payload: newJob
            });
        }
        setName("");
        setLevel("");
    }

    const deleteTodo = (id: number) => {
        dispatch({
            type: "DELETE_TODO",
            payload: id
        });
    }

    const editTodo = (job: JobTodo) => {
        setName(job.name);
        setLevel(job.level);
        setIsEditing(true);
        setEditId(job.id);
    }

    return (
        <>
            <div style={{ display: "flex", gap: "20px" }}>
                <label htmlFor="">Tên công việc</label>
                <input type="text" value={name} onChange={handleChange} />
                <select value={level} onChange={handleSelect}>
                    <option value="">Chọn cấp độ</option>
                    <option value="very important">Cực kì quan trọng</option>
                    <option value="important">Quan trọng</option>
                    <option value="normal">Bình thường</option>
                </select>
                <button onClick={addTodo}>{isEditing ? 'Sửa công việc' : 'Thêm công việc'}</button>
            </div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên công việc</th>
                        <th>Trạng thái công việc</th>
                        <th>Mức độ</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.jobReducer.map((job: JobTodo, index: number) => (
                        <tr key={job.id}>
                            <td>{index + 1}</td>
                            <td>{job.name}</td>
                            <td>
                                <input type="checkbox" checked={job.status} readOnly />
                            </td>
                            <td>{job.level}</td>
                            <td>
                                <button onClick={() => deleteTodo(job.id)}>Xóa</button>
                                <button onClick={() => editTodo(job)}>Sửa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='container'>
            </div>
        </>
    )
}
