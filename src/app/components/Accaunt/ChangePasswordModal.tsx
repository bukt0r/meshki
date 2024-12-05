import React from "react";

const ChangePasswordModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="relative w-[400px] bg-white rounded-lg shadow-lg p-6">
        {/* Закрыть модальное окно */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✕
        </button>
        <div>
          <div className="text-xl font-bold mb-4 text-center">ИЗМЕНЕНИЕ ПАРОЛЯ</div>
        </div>
        <div className="mb-4">
          <div>Новый пароль</div>
          <input
            className="w-full h-[60px] pl-[17px] border-[0.5px] border-[#30303080]"
            type="password"
            placeholder="Введите пароль"
          />
        </div>
        <div className="mb-4">
          <div>Подтверждение пароля</div>
          <input
            className="w-full h-[60px] pl-[17px] border-[0.5px] border-[#30303080]"
            type="password"
            placeholder="Подтвердите пароль"
          />
        </div>
        <div className="flex justify-end">
          <button
            className="w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            onClick={onClose}
          >
            ИЗМЕНИТЬ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
