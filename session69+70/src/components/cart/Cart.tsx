import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PCart } from "../../interface/interface";

export default function Cart() {
    const cart:any = useSelector(state => state);
    const dispatch = useDispatch();
    
    const [editData, setEditData] = useState({
        id: null,
        name: '',
        description: '',
        image: '',
        quantity: 0,
    });

    const handleIncrease = (id:number) => {
        dispatch({
            type: "INCREASE_QUANTITY",
            payload: id
        });
    };

    const handleDecrease = (id:number) => {
        dispatch({
            type: "DECREASE_QUANTITY",
            payload: id
        });
    };

    const handleRemove = (id:number) => {
        if (window.confirm("Bạn có muốn xóa hay không?")) {
            dispatch({
                type: "REMOVE_CART",
                payload: id
            });
        }
    };

    const handleEdit = (id:number) => {
        const itemToEdit = cart.find((item:any) => item.id === id);
        setEditData({
            id: itemToEdit.id,
            name: itemToEdit.name,
            description: itemToEdit.description,
            image: itemToEdit.image,
            quantity: itemToEdit.quantity,
        });
    };

    const handleSaveEdit = () => {
        dispatch({
            type: "UPDATE_CART",
            payload: {
                id: editData.id,
                updatedItem: {
                    id: editData.id,
                    name: editData.name,
                    description: editData.description,
                    image: editData.image,
                    quantity: editData.quantity,
                }
            }
        });
        setEditData({
            id: null,
            name: '',
            description: '',
            image: '',
            quantity: 0,
        });
    };

    return (
        <div className="font-mono">
            <br /><br /><br /><br />
            <table className="min-w-full border-collapse" border={1}>
                <thead>
                    <tr className="border border-gray-300">
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Mô tả</th>
                        <th>Ảnh</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.cartReducer.map((item:PCart, index:number) => (
                        <tr key={item.id} className="border border-gray-300 text-center">
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 object-cover mx-auto"
                                />
                            </td>
                            <td>{item.price}</td>
                            <td>
                                <button
                                    className="bg-gray-300 w-[30px] h-[30px] rounded mr-[10px]"
                                    onClick={() => handleIncrease(item.id)}
                                >
                                    +
                                </button>
                                {item.quantity}
                                <button
                                    className="bg-gray-300 w-[30px] h-[30px] rounded ml-[10px]"
                                    onClick={() => handleDecrease(item.id)}
                                >
                                    -
                                </button>
                            </td>
                            <td>
                                <button
                                    className="bg-yellow-300 w-[50px] h-[30px] rounded border-2 border-yellow-500 mr-[10px]"
                                    onClick={() => handleEdit(item.id)}
                                >
                                    Sửa
                                </button>
                                <button
                                    className="bg-red-300 w-[50px] h-[30px] rounded border-2 border-red-500"
                                    onClick={() => handleRemove(item.id)}
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Form */}
            {editData.id !== null && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 bg-opacity-50">
                    <div className="bg-white p-8 rounded shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Chỉnh sửa sản phẩm</h2>
                        <p>ID: {editData.id}</p>
                        <div className="flex items-center mb-4">
                            <label className="mr-2">Tên sản phẩm:</label>
                            <input
                                type="text"
                                value={editData.name}
                                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                className="border border-gray-300 rounded px-2 py-1"
                            />
                        </div>
                        <div className="flex items-center mb-4">
                            <label className="mr-2">Mô tả:</label>
                            <input
                                type="text"
                                value={editData.description}
                                onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                                className="border border-gray-300 rounded px-2 py-1"
                            />
                        </div>
                        <div className="flex items-center mb-4">
                            <label className="mr-2">Ảnh:</label>
                            <input
                                type="text"
                                value={editData.image}
                                onChange={(e) => setEditData({ ...editData, image: e.target.value })}
                                className="border border-gray-300 rounded px-2 py-1"
                            />
                        </div>
                        <div className="flex items-center mb-4">
                            <label className="mr-2">Số lượng:</label>
                            <input
                                type="number"
                                value={editData.quantity}
                                onChange={(e) => setEditData({ ...editData, quantity: parseInt(e.target.value) })}
                                className="border border-gray-300 rounded px-2 py-1"
                            />
                        </div>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                            onClick={handleSaveEdit}
                        >
                            Lưu
                        </button>
                        <button
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                            onClick={() => setEditData({ id: null, name: '', description: '', image: '', quantity: 0 })}
                        >
                            Hủy
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
