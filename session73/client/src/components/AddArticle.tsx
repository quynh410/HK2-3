import React from "react";
import { Link } from "react-router-dom";

export default function AddArticle() {
  return (
    <>
      <div className="container mx-auto p-4 font-mono">
        <Link to="/" className=" py-2 px-4 ">
          Danh sách bài viết
        </Link>
        <Link to="/add" className=" py-2 px-4 ">
          Thêm mới bài viết
        </Link>
        <div className="text-center mb-4 flex justify-center gap-4"></div>
        <hr className="my-4" />
        <form className="max-w-xl  bg-white p-6 ">
          <div className="mb-4">
            <label className="block text-gray-700 ">Tiêu đề</label>
            <input
              type="text"
              className="w-[92.5pc] px-3 py-2 border rounded "
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Hình ảnh</label>
            <input
              type="text"
              className="w-[92.5pc] px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Thể loại</label>
            <input
              type="text"
              className="w-[92.5pc] px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Ngày viết</label>
            <input
              type="date"
              className="w-[92.5pc] px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Trạng thái</label>
            <select className="w-[92.5pc] px-3 py-2 border rounded">
              <option value="draft">Ngừng xuất bản</option>
              <option value="published">Đã xuất bản</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nội dung</label>
            <textarea
              name=""
              id=""
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
      </div>
    </>
  );
}
