import React, { useState } from 'react';
import axios from 'axios';

interface AddPostFormProps {
  onClose: () => void;
  onAddPost: () => void;
}

export default function AddPostForm({ onClose, onAddPost }: AddPostFormProps) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState(true);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newPost = {
      title,
      image,
      date,
      status,
    };

    axios.post('http://localhost:8080/posts', newPost).then((response) => {
      console.log('Post added:', response.data);
      onAddPost();
      onClose();
    });
  };

  const handleClear = () => {
    setTitle('');
    setImage('');
    setDate('');
    setStatus(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-6 rounded-lg text-center w-[50pc] font-mono">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="font-bold text-2xl mb-4 mr-[32pc]">Thêm mới bài viết</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-left mb-2">Tên bài viết :</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-400 rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2">Hình ảnh:</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border border-gray-400 rounded p-2"
              required
            />
          </div>
          <div className="mb-4 ">
            <label className="block text-left mb-2">Ngày xuất bản:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-400 rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2">Trạng thái:</label>
            <select
              value={status ? 'đã xuất bản' : 'Ngừng xuất bản'}
              onChange={(e) => setStatus(e.target.value === 'đã xuất bản')}
              className="w-full border border-gray-400 rounded p-2"
            >
              <option value="đã xuất bản">Đã xuất bản</option>
              <option value="Ngừng xuất bản">Ngừng Xuất bản</option>
            </select>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={handleClear}
              className="border border-black text-black px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Làm mới
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Xuất bản
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
