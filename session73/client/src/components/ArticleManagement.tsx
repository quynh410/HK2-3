import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllManagement,
  putManagement,
} from "../store/reducers/managementReducer";

export default function ArticleManagement() {
  const data: any = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleChange = async (management: any) => {
    const data = {
      ...management,
      status: !management.status,
    };
    dispatch(putManagement(data));
  };

  useEffect(() => {
    dispatch(getAllManagement());
  }, []);
  return (
    <>
      <div className="container mx-auto p-4 font-mono">
        <div className="text-center mb-4 flex">
          <Link to="/" className="py-2 px-4 ">
            Danh sách bài viết
          </Link>
          <Link to="/add" className=" py-2 px-4 ">
            Thêm mới bài viết
          </Link>
        </div>
        <hr className="my-4" />
        <div className="overflow-x-auto text-center">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">STT</th>
                <th className="py-2 px-4 border-b">Tiêu đề</th>
                <th className="py-2 px-4 border-b">Hình ảnh</th>
                <th className="py-2 px-4 border-b">Thể loại</th>
                <th className="py-2 px-4 border-b">Ngày viết</th>
                <th className="py-2 px-4 border-b">Trạng thái</th>
                <th className="py-2 px-4 border-b">Chức năng</th>
              </tr>
            </thead>
            <tbody>
              {data.managementReducer.management.map((management: any) => {
                return (
                  <tr className="hover:bg-gray-50" key={management.id}>
                    <td className="py-2 px-4 border-b">{management.id}</td>
                    <td className="py-2 px-4 border-b">{management.title}</td>
                    <td className="py-2 px-4 border-b">
                      <img
                        src={management.thumbnail}
                        alt="Thumbnail"
                        className="w-24 mx-auto"
                      />
                    </td>
                    <td className="py-2 px-4 border-b">{management.content}</td>
                    <td className="py-2 px-4 border-b">
                      {management.updatedAt}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <button>
                        {management.status ? "Đã xuất bản" : "Ngừng xuất bản"}
                      </button>
                    </td>
                    <td className="py-2 px-4 border-b space-x-2">
                      <button
                        className="border border-red-500 py-1 px-3 rounded"
                        onClick={() => handleChange(management)}
                      >
                        <i className="fa-solid fa-lock text-red-500"></i>
                      </button>
                      <button className="border border-blue-500 py-1 px-3 rounded">
                        <i className="fa-solid fa-eye text-blue-500"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>{" "}
        <br />
        <div className="bg-gray-200 h-[70px] flex justify-center">
          <p className="mt-[20px]">Số lượng: 2 bản ghi</p>
          <div className="ml-[55pc] flex gap-[10px] h-[30px] mt-[20px]">
            <select>
              <option value="">20 bản ghi trên 1 trang</option>
            </select>
            <span className="mt-[3px]">Trước</span>
            <span className="flex gap-[5px]">
              <button className="border-2 border-gray-400 rounded w-[25px]">
                1
              </button>
              <button>2</button>
              <button>3</button>
              <button>...</button>
              <button>10</button>
            </span>
            <span className="mt-[3px]">Sau</span>
          </div>
        </div>
      </div>
    </>
  );
}
