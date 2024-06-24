import React, { useState, useEffect } from "react";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  image: string;
  date: string;
  status: boolean;
}

interface UpdatePostProps {
  post: Post | null;
  onClose: () => void;
  onUpdateSuccess: () => void;
}

const UpdatePost: React.FC<UpdatePostProps> = ({ post, onClose, onUpdateSuccess }) => {
  const [editedPost, setEditedPost] = useState<Post | null>(null);

  useEffect(() => {
    if (post) {
      setEditedPost({ ...post });
    }
  }, [post]);

  const handleUpdate = () => {
    if (editedPost) {
      if (!editedPost.title || !editedPost.image) {
        alert("Tên bài viết, hình ảnh không được để trống!");
        return;
      }
      axios
        .put(`http://localhost:8080/posts/${editedPost.id}`, editedPost)
        .then(() => {
          onUpdateSuccess();
          onClose();
        })
        .catch((error) => {
          console.error("Error updating post:", error);
        });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedPost((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  if (!editedPost) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 font-mono">
      <div className="bg-white p-6 rounded-lg text-center w-[50pc]">
        <h2 className="font-bold text-2xl mb-4">Cập nhật bài viết</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label className="block mb-4 text-left">
            Tiêu đề:
            <input
              type="text"
              className="border border-gray-300 p-2 w-full mt-1"
              name="title"
              value={editedPost.title}
              onChange={handleChange}
              required
            />
          </label>
          <label className="block mb-4 text-left">
            Hình ảnh:
            <input
              type="text"
              className="border border-gray-300 p-2 w-full mt-1"
              name="image"
              value={editedPost.image}
              onChange={handleChange}
              required
            />
          </label>
          <label className="block mb-4 text-left">
            Ngày xuất bản:
            <input
              type="date"
              className="border border-gray-300 p-2 w-full mt-1 mr-]"
              name="title"
              value={editedPost.date}
              onChange={handleChange}
              required
            />
          </label>
          <div className="flex justify-center gap-5">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={handleUpdate}
            >
              Cập nhật
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
              onClick={onClose}
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;