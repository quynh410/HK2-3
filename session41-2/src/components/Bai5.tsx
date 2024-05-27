import React from "react";

export default function Bai5() {
  return (
    <div>
        <h3>Bài 5</h3>
      <div className="bg-blue-100 w-[500px] h-[300px] rounded-xl  flex justify-center items-center">
        <div className="bg-blue-300 w-[400px] h-[200px] relative ">
          Relative Parent
          <button className="absolute left-0 bottom-0 bg-blue-700 rounded-xl px-4">
            Absolute Children
          </button>
        </div>
      </div>
    </div>
  );
}
