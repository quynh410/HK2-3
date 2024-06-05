import React, { useState } from "react";

export default function Admin() {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const toggleDashboardMenu = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };
  
  return (
    <>
      <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                <i className="fa-solid fa-house text-white"></i> Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                <i className="fa-solid fa-bars"></i> Contents
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                <i className="fa-solid fa-bars-staggered"></i> Categories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                <i className="fa-solid fa-gear"></i> Settings
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center bg-gray-600 w-[120px] h-[40px] rounded-[20px] gap-[20px] ">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center ml-[10px]">
            <img
              src="https://cdn.thuvienphapluat.vn/phap-luat/2022/TTNHAN/0707/chup-anh.png"
              alt=""
              className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center"
            />
          </div>
          <span>Admin</span>
        </div>
      </header>
      <nav>
        <div className="bg-gray-800 h-screen flex">
          <div className="bg-gray-800 text-white w-64 py-6 px-4">
            <div className="bg-gray-300 h-[50px] rounded-[10px]">
              <a
                href="#"
                className="text-xl font-bold mb-8 flex items-center leading-10 gap-[10px]"
              >
                <i className="fa-solid fa-plus ml-[10px]"></i> New Item
              </a>
            </div>
            <nav className="space-y-4">
              <a
                href="#"
                className="hover:bg-gray-700 rounded py-2 px-4 flex"
                onClick={toggleDashboardMenu}
              >
                <span className="material-symbols-outlined">view_cozy</span>
                Dashboard
                <span className="material-symbols-outlined">
                  {isDashboardOpen ? "arrow_drop_up" : "arrow_drop_down"}
                </span>
              </a>

              {isDashboardOpen && (
                <div className="ml-6 space-y-2">
                  <a
                    href="#"
                    className="hover:bg-gray-700 rounded py-2 px-4 block"
                  >
                    Commarce
                  </a>
                  <a
                    href="#"
                    className="hover:bg-gray-700 rounded py-2 px-4 block"
                  >
                    Analytics
                  </a>
                  <a
                    href="#"
                    className="hover:bg-gray-700 rounded py-2 px-4 block"
                  >
                    Crypto
                  </a>
                  <a
                    href="#"
                    className="hover:bg-gray-700 rounded py-2 px-4 block"
                  >
                    Helpdesk
                  </a>
                  <a
                    href="#"
                    className="hover:bg-gray-700 rounded py-2 px-4 block"
                  >
                    Monitoring
                  </a>
                  <a
                    href="#"
                    className="hover:bg-gray-700 rounded py-2 px-4 block"
                  >
                    Fitnes
                  </a>
                </div>
              )}
              <a href="#" className="flex hover:bg-gray-700 rounded py-2 px-4">
                <span className="material-symbols-outlined">view_cozy</span>{" "}
                Commarce
                <span className="material-symbols-outlined">arrow_drop_down</span>
              </a>
              <a href="#" className="flex hover:bg-gray-700 rounded py-2 px-4">
                <span className="material-symbols-outlined">view_cozy</span>{" "}
                Analytics
                <span className="material-symbols-outlined">arrow_drop_down</span>
              </a>
              <a href="#" className="flex hover:bg-gray-700 rounded py-2 px-4">
                <span className="material-symbols-outlined">view_cozy</span>{" "}
                Crypto
                <span className="material-symbols-outlined">arrow_drop_down</span>
              </a>
              <a href="#" className="flex hover:bg-gray-700 rounded py-2 px-4">
                <span className="material-symbols-outlined">view_cozy</span>{" "}
                Helpdesk
                <span className="material-symbols-outlined">arrow_drop_down</span>
              </a>
              <a href="#" className="flex hover:bg-gray-700 rounded py-2 px-4">
                <span className="material-symbols-outlined">view_cozy</span>{" "}
                Monitoring
                <span className="material-symbols-outlined">arrow_drop_down</span>
              </a>
              <a href="#" className="flex hover:bg-gray-700 rounded py-2 px-4">
                <span className="material-symbols-outlined">view_cozy</span>{" "}
                Fitnes
                <span className="material-symbols-outlined">arrow_drop_down</span>
              </a>
            </nav>
          </div>

          <div className="flex-1 bg-gray-100 ">
            <div className="p-4 flex justify-between items-center bg-white pl-8">
              <div className="flex items-center space-x-4 ">
                <span className="font-bold text-4xl ">Add new post</span>
                <button className="text-gray-700">+ Add Content</button>
                <button className="text-gray-700">⚙ Settings</button>
              </div>
              <div className="relative">
                <input
                  type="text"
                  className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700"
                  placeholder="Search content..."
                />
                <button className="absolute right-2 top-2">🔍</button>
              </div>
            </div>
            <br />

            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center">
                  <div className="bg-gray-100 rounded-full p-2 mr-4">
                    <span className="material-symbols-outlined">
                      local_mall
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      $2,456
                    </h3>
                    <p className="text-gray-500">Total Sales</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center">
                  <div className="bg-gray-100 rounded-full p-2 mr-4">
                    <span className="material-symbols-outlined">
                      storefront
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      $3,326
                    </h3>
                    <p className="text-gray-500">Total Expenses</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center">
                  <div className="bg-gray-100 rounded-full p-2 mr-4">
                    <span className="material-symbols-outlined">group</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      $3,326
                    </h3>
                    <p className="text-gray-500">Total Visitor</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center">
                  <div className="bg-gray-100 rounded-full p-2 mr-4">
                    <span className="material-symbols-outlined">menu_open</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      $3,326
                    </h3>
                    <p className="text-gray-500">Total Orders</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded p-6 mb-8 m-8">
              <h2 className=" font-bold mb-4 text-3xl">Form title</h2>
              <p>
                Sed tortor, sed velit ridiculus ipsum pharetra lacus odio
                gravida enim.{" "}
              </p>
              <br />
              <p className="text-red-900 mb-4 bg-red-100 border-2 border-red-600 rounded-[5px] h-[40px] flex items-center leading-4 gap-4">
                <i className="fa-solid fa-circle-exclamation ml-[10px]"></i> Senectus
                malesuada suspendisse bibendum elit amet vitae.
              </p>
              <div className="bg-white shadow-md rounded ">
                <table className="w-full ">
                  <thead className="bg-gray-300">
                    <tr>
                      <th className="border-r  px-4 py-3 text-left font-medium">
                        Table Title
                      </th>
                      <th className="border-r px-4 py-3 text-left font-medium">
                        Table Title
                      </th>
                      <th className="border-r px-4 py-3 text-left font-medium">
                        Table Title
                      </th>
                      <th className="border-r px-4 py-3 text-right font-medium">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-100">
                      <td className="px-4 py-3 border-r">Etiam purus in</td>
                      <td className="border-r px-4 py-3">
                        Curabitur donec duis
                      </td>
                      <td className="border-r px-4 py-3">
                        Morbi phasandra, accumsan
                      </td>
                      <td className="border-r px-4 py-3 text-right">
                        <button className="text-blue-500 hover:text-blue-700 mr-2  bg-blue-200 w-[50px] rounded-[10px]">
                          Edit
                        </button>
                        <button className="text-red-500 hover:text-red-700  bg-red-200 w-[55px] rounded-[10px]">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-100">
                      <td className="border-r px-4 py-3">Duis eget habitant</td>
                      <td className="border-r px-4 py-3">At amet odio</td>
                      <td className="border-r px-4 py-3">
                        Commodo eget scelerisque
                      </td>
                      <td className="border-r px-4 py-3 text-right">
                        <button className="text-blue-500 hover:text-blue-700 mr-2  bg-blue-200 w-[50px] rounded-[10px]">
                          Edit
                        </button>
                        <button className="text-red-500 hover:text-red-700  bg-red-200 w-[55px] rounded-[10px]">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-100">
                      <td className="border-r px-4 py-3">
                        Aliquam velit lacus
                      </td>
                      <td className="border-r px-4 py-3">
                        Pellentesque facilisis massa
                      </td>
                      <td className="border-r px-4 py-3">
                        Tortor habitant sit
                      </td>
                      <td className="border-r px-4 py-3 text-right">
                        <button className="text-blue-500 hover:text-blue-700 mr-2  bg-blue-200 w-[50px] rounded-[10px]">
                          Edit
                        </button>
                        <button className="text-red-500 hover:text-red-700  bg-red-200 w-[55px] rounded-[10px]">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-100">
                      <td className="border-r px-4 py-3">
                        Fermentum scelerisque
                      </td>
                      <td className="border-r px-4 py-3">
                        Morbi sagittis nulla
                      </td>
                      <td className="border-r px-4 py-3">Quam semper quis</td>
                      <td className="border-r px-4 py-3 text-right">
                        <button className="text-blue-500 hover:text-blue-700 mr-2  bg-blue-200 w-[50px] rounded-[10px]">
                          Edit
                        </button>
                        <button className="text-red-500 hover:text-red-700  bg-red-200 w-[55px] rounded-[10px]">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-100">
                      <td className="border-r px-4 py-3">
                        Integer semper pellentesque
                      </td>
                      <td className="border-r px-4 py-3">Neque turpis enim</td>
                      <td className="border-r px-4 py-3">Egestas non sociis</td>
                      <td className="border-r px-4 py-3 text-right">
                        <button className="text-blue-500 hover:text-blue-700 mr-2  bg-blue-200 w-[50px] rounded-[10px]">
                          Edit
                        </button>
                        <button className="text-red-500 hover:text-red-700  bg-red-200 w-[55px] rounded-[10px]">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-100">
                      <td className="border-r px-4 py-3">Parturient at id</td>
                      <td className="border-r px-4 py-3">Sem neque, mattis</td>
                      <td className="border-r px-4 py-3">
                        Pellentesque facilisis massa
                      </td>
                      <td className="border-r px-4 py-3 text-right">
                        <button className="text-blue-500 hover:text-blue-700 mr-2 bg-blue-200 w-[50px] rounded-[10px]">
                          Edit
                        </button>
                        <button className="text-red-500 hover:text-red-700  bg-red-200 w-[55px] rounded-[10px]">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-100">
                      <td className="border-r px-4 py-3">Amet, pretium eget</td>
                      <td className="border-r px-4 py-3">In ipsum volutpat</td>
                      <td className="border-r px-4 py-3">Ut feugiat egestas</td>
                      <td className="border-r px-4 py-3 text-right">
                        <button className="text-blue-500 hover:text-blue-700 mr-2  bg-blue-200 w-[50px] rounded-[10px]">
                          Edit
                        </button>
                        <button className="text-red-500 hover:text-red-700  bg-red-200 w-[55px] rounded-[10px]">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-100">
                      <td className="border-r px-4 py-3">
                        Risus consequat sollicitudin
                      </td>
                      <td className="border-r px-4 py-3">
                        Adipiscing odio nulla
                      </td>
                      <td className="border-r px-4 py-3">Pharetra id sit</td>
                      <td className="border-r px-4 py-3 text-right">
                        <button className="text-blue-500 hover:text-blue-700 mr-2  bg-blue-200 w-[50px] rounded-[10px]">
                          Edit
                        </button>
                        <button className="text-red-500 hover:text-red-700  bg-red-200 w-[55px] rounded-[10px]">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-center space-x-2">
              <a
                href="#"
                className="px-3 py-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              >
                <i className="fas fa-chevron-left"></i>
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              >
                1
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md bg-blue-500 text-white"
              >
                2
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              >
                3
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              >
                4
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              >
                5
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              >
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}