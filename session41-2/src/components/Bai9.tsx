import React, { useState } from "react";

export default function Bai9() {
  const [lightMode, setLightMode] = useState(true);

  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };

  return (
    <>
    <h3>Bài 9</h3>
    <div
      className={`p-4 w-64 h-screen ${
        lightMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="mb-4">
        <i className="fa-solid fa-fish" style={{ fontSize: "90px" }}></i>
      </div>
      <nav className="space-y-2">
        <a
          href="#"
          className={`block px-2 py-1 rounded ${
            lightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          <i className="fa-solid fa-house mr-2"></i>
          Dashboard
        </a>
        <a
          href="#"
          className={`block px-2 py-1 rounded ${
            lightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          <i className="fa-solid fa-pen mr-2"></i>
          Posts
        </a>
        <a
          href="#"
          className={`block px-2 py-1 rounded ${
            lightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          <i className="fa-solid fa-image mr-2"></i>
          Media
        </a>
        <a
          href="#"
          className={`block px-2 py-1 rounded ${
            lightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          <i className="fa-solid fa-table-list mr-2"></i>
          Pages
        </a>
        <a
          href="#"
          className={`block px-2 py-1 rounded ${
            lightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          <i className="fa-solid fa-comment mr-2"></i>
          Comments
        </a>
        <a
          href="#"
          className={`block px-2 py-1 rounded ${
            lightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          <i className="fa-solid fa-grip mr-2"></i>
          Appearances
        </a>
        <a
          href="#"
          className={`block px-2 py-1 rounded ${
            lightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          <i className="fa-solid fa-bag-shopping mr-2"></i>
          Plugins
        </a>
        <a
          href="#"
          className={`block px-2 py-1 rounded ${
            lightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          <i className="fa-solid fa-users mr-2"></i>
          Users
        </a>
        <a
          href="#"
          className={`block px-2 py-1 rounded ${
            lightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          <i className="fa-solid fa-gear mr-2"></i>
          Settings
        </a>
        <a
          href="#"
          className={`block px-2 py-1 rounded ${
            lightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          <i className="fa-solid fa-wrench mr-2"></i>
          Tools
        </a>
      </nav>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br /> <br />
      <div className="mt-auto">
        <div className="flex items-center space-x-2">
          <i className="fa-solid fa-moon"></i>
          <span className={`${lightMode ? "text-gray-300" : "text-gray-700"}`}>
            {lightMode ? "Dark Mode" : "Light Mode"}
          </span>
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only peer"
              id="light-mode-toggle"
              checked={!lightMode}
              onChange={toggleLightMode}
            />
            <label
              htmlFor="light-mode-toggle"
              className="block w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-500 peer-checked:after:translate-x-5 peer-checked:after:bg-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-4 after:w-4 after:rounded-full after:transition-transform after:duration-300 cursor-pointer"
            ></label>
          </div>
        </div>
        <a href="#" className="block py-4 mt-4">
          <div
            className={`rounded px-1 py-1 w-[225px] ${
              lightMode ? "bg-gray-700 text-white" : "bg-gray-300 text-gray-800"
            }`}
          >
            <i className="fa-solid fa-right-from-bracket"></i> Log Out
          </div>
        </a>
      </div>
    </div>
    </>
  );
}
