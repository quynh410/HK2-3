import React, { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
import './LoadingAnimation.css'
import axios from "axios";
import Model from "./Model";
import AddPost from "./AddPost";
import UpdatePost from './UpdatePost'
interface Post {
  id: number;
  title: string;
  image: string;
  date: string;
  status: boolean;
}

export default function ListPost() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [addForm, setAddForm] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [editPost, setEditPost] = useState<Post | null>(null);

  useEffect(() => {
    getPosts();
  }, []);
// Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
// lấy dữ liệu API in ra 
  const getPosts = () => {
    axios.get("http://localhost:8080/posts").then((response) => {
      setPosts(response.data);
    });
  };
// chặn
  const handleBlock = (post: Post) => {
    setSelectedPost(post);
    setShowModal(true);
  };
// model xác nhận chặn
  const handleConfirmBlock = () => {
    if (selectedPost) {
      const updatedStatus = !selectedPost.status;
      axios
        .patch(`http://localhost:8080/posts/${selectedPost.id}`, { status: updatedStatus })
        .then(() => {
          setShowModal(false);
          setSelectedPost(null);
          getPosts();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
// xóa
  const handleDelete = (post: Post) => {
    setSelectedPost(post);
    setDeleteConfirmation(true);
  };
// model xác nhận xóa
  const handleConfirmDelete = () => {
    if (selectedPost) {
      axios
        .delete(`http://localhost:8080/posts/${selectedPost.id}`)
        .then(() => {
          setDeleteConfirmation(false);
          setSelectedPost(null);
          getPosts();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
// hủy xóa
  const handleCancelDelete = () => {
    setDeleteConfirmation(false);
    setSelectedPost(null);
  };
// sửa
  const handleEdit = (post: Post) => {
    setEditPost(post);
    setEditFormVisible(true);
  };
// model xác nhận sửa
  const handleUpdateSuccess = () => {
    setEditFormVisible(false);
    setEditPost(null);
    getPosts();
  };

  return (
    <div className="App">
      {loading ? (
        <RingLoader
          color={"#454545"}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="font-mono">
          <div className="flex gap-5 mb-4">
            <input
              type="text"
              placeholder="Nội dung tìm kiếm"
              className="w-96 border border-black rounded p-2"
            />
            <select className="border border-black rounded p-2">
              <option value="">Lọc bài viết</option>
            </select>
            <button
              className="bg-blue-600 text-white w-36 h-10 rounded ml-auto"
              onClick={() => setAddForm(true)}
            >
              Thêm bài viết
            </button>
          </div>
          <div className="overflow-y-auto max-h-96">
            <table className="border-collapse border border-slate-500 w-[90pc]">
              <thead className="bg-gray-300">
                <tr>
                  <th className="border border-slate-600 p-2">STT</th>
                  <th className="border border-slate-600 p-2">Bài viết</th>
                  <th className="border border-slate-600 p-2">Hình ảnh</th>
                  <th className="border border-slate-600 p-2">Ngày xuất bản</th>
                  <th className="border border-slate-600 p-2">Trạng thái</th>
                  <th className="border border-slate-600 p-2">Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {posts.slice(0, 5).map((post, index) => (
                  <tr key={post.id}>
                    <td className="border border-slate-700 text-center p-2">
                      {index + 1}
                    </td>
                    <td className="border border-slate-700 p-2">{post.title}</td>
                    <td className="border border-slate-700 p-2">
                      <div className="flex justify-center">
                        <img
                          src={post.image}
                          alt=""
                          className="rounded-full w-24 h-24 object-cover"
                        />
                      </div>
                    </td>
                    <td className="border border-slate-700 text-center p-2">
                      {post.date}
                    </td>
                    <td className="border border-slate-700 text-center p-2">
                      {post.status ? (
                        <button className=" text-black px-4 py-2 ">Đã xuất bản</button>
                      ) : (
                        <button className=" text-black px-4 py-2 ">Ngừng Xuất bản</button>
                      )}
                    </td>
                    <td className="border border-slate-700 p-2">
                      <div className="flex justify-center gap-5">
                        <button
                          className="bg-orange-400 rounded text-white px-4 py-2"
                          onClick={() => handleBlock(post)}
                        >
                          Chặn
                        </button>
                        <button
                          className="bg-orange-200 border border-orange-600 px-4 py-2 rounded"
                          onClick={() => handleEdit(post)}
                        >
                          Sửa
                        </button>
                        <button
                          className="bg-red-200 rounded border border-red-600 px-4 py-2"
                          onClick={() => handleDelete(post)}
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {showModal && (
        <Model
          show={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirmBlock}
        />
      )}
      {deleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 font-mono">
          <div className="bg-white p-6 rounded-lg text-center w-[50pc]">
            <h2 className="font-bold text-2xl mb-4">Xác nhận xóa</h2>
            <p className="mb-4">Bạn có chắc chắn muốn xóa bài viết này không?</p>
            <hr /> <br />
            <div className="flex justify-center gap-5">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                onClick={handleConfirmDelete}
              >
                Đồng ý
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                onClick={handleCancelDelete}
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
      {editFormVisible && editPost && (
        <UpdatePost
          post={editPost}
          onClose={() => setEditFormVisible(false)}
          onUpdateSuccess={handleUpdateSuccess}
        />
      )}
      {addForm && <AddPost onClose={() => setAddForm(false)} onAddPost={getPosts} />}
    </div>
  );
};
