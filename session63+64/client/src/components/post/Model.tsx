import React from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function Modal({ show, onClose, onConfirm }: ModalProps) {
  if (!show) {
    return null;
  }

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
        <h2 className="font-bold text-2xl mb-4">Xác nhận chặn</h2>
        <p className="mb-4">Bạn có chắc chắn muốn ngừng xuất bản bài viết này không?</p>
        <hr className="mb-4" />
        <div className="flex justify-center mt-4 gap-[20px]">
          <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">Chặn</button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">Hủy</button>
        </div>
      </div>
    </div>
  );
}
