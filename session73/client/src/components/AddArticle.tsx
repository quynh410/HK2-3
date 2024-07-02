import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddManagement } from "../store/reducers/managementReducer";
import { useState } from "react";
import Modal from "./Modal";

export default function AddArticle() {
  const [newArticle, setNewArticle] = useState({
    title: '',
    thumbnail: '',
    content: '',
    updatedAt: '',
    status: 'draft', // Add status field
  });
  const [errors, setErrors] = useState({
    title: '',
    thumbnail: '',
    content: '',
    updatedAt: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  const data = useSelector((state) => state);
  console.log(data);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewArticle((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevState) => ({
      ...prevState,
      [name]: '',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    let isValid = true;
    if (!newArticle.title.trim()) {
      setErrors((prevState) => ({
        ...prevState,
        title: 'Vui lòng nhập tiêu đề',
      }));
      isValid = false;
    }
    if (!newArticle.thumbnail.trim()) {
      setErrors((prevState) => ({
        ...prevState,
        thumbnail: 'Vui lòng nhập hình ảnh',
      }));
      isValid = false;
    }
    if (!newArticle.content.trim()) {
      setErrors((prevState) => ({
        ...prevState,
        content: 'Vui lòng nhập nội dung',
      }));
      isValid = false;
    }
    if (!newArticle.updatedAt.trim()) {
      setErrors((prevState) => ({
        ...prevState,
        updatedAt: 'Vui lòng nhập ngày viết',
      }));
      isValid = false;
    }

    if (isValid) {
      dispatch(AddManagement(newArticle));
      setNewArticle({
        title: '',
        thumbnail: '',
        content: '',
        updatedAt: new Date().toISOString(),
        status: 'draft',
      });
    } else {
      setIsModalOpen(true);
      setModalTitle('Lỗi');
      setModalMessage('Vui lòng điền đầy đủ thông tin bài viết.');
    }
  };

  return (
    <>
      <div className="container mx-auto p-4 font-mono">
        <Link to="/" className="py-2 px-4">
          Danh sách bài viết
        </Link>
        <Link to="/add" className="py-2 px-4">
          Thêm mới bài viết
        </Link>
        <div className="text-center mb-4 flex justify-center gap-4"></div>
        <hr className="my-4" />
        <form className="max-w-xl bg-white p-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Tiêu đề</label>
            <input
              name="title"
              value={newArticle.title}
              onChange={handleChange}
              type="text"
              className="w-[92.5pc] px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Hình ảnh</label>
            <input
              name="thumbnail"
              value={newArticle.thumbnail}
              onChange={handleChange}
              type="text"
              className="w-[92.5pc] px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Thể loại</label>
            <input
              name="content"
              value={newArticle.content}
              onChange={handleChange}
              type="text"
              className="w-[92.5pc] px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Ngày viết</label>
            <input
              name="updatedAt"
              value={newArticle.updatedAt}
              onChange={handleChange}
              type="date"
              className="w-[92.5pc] px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Trạng thái</label>
            <select
              name="status"
              className="w-[92.5pc] px-3 py-2 border rounded"
            >
              <option value="draft">Ngừng xuất bản</option>
              <option value="published">Đã xuất bản</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nội dung</label>
            <textarea
              // name="content"
              // value={newArticle.content}
              onChange={handleChange}
              className="w-[92.5pc] px-3 py-2 border rounded h-[200px]"
            ></textarea>
          </div>  
          <div className="text-center ml-[40pc]">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded w-[200px]"
            >
              Xuất bản
            </button>
          </div>
        </form>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={modalTitle}
          message={modalMessage}
        />
      </div>
    </>
  );
}

