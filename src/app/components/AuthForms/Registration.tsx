import React from "react";

const Registration = ({ isOpen, onNext, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end">
      <div className="flex justify-center relative h-full w-1/2 bg-white shadow-lg p-6 overflow-y-auto">

        <div className={" w-[55%]"}>
          <div className={"text-center"}>
            <div className="text-xl font-bold mb-4">РЕГИСТРАЦИЯ</div>
            <div className={"text-[#00000080]"}>userr@mail.ru</div>
          </div>
          <div className="mb-4">
            <div>Имя</div>
            <input
              className="w-full h-[60px] pl-[17px] border-[0.5px] border-[#30303080]"
              type="text"
              placeholder="Введите пароль"
            />
          </div>
          <div className="mb-4">
            <div>Фамилия</div>
            <input
              className="w-full h-[60px] pl-[17px] border-[0.5px] border-[#30303080]"
              type="text"
              placeholder="Введите фамилию"
            />
          </div>
          <div className="mb-4">
            <div>Дата рождения</div>
            <input
              className="w-full h-[60px] pl-[17px] border-[0.5px] border-[#30303080]"
              type="text"
              placeholder="__.__.____г"
            />
          </div>
          <div className="mb-4">
            <div>Телефон</div>
            <input
              className="w-full h-[60px] pl-[17px] border-[0.5px] border-[#30303080]"
              type="phone"
              placeholder="Введите номер телефона"
            />
          </div>

          <div className={"w-full mb-4"}>
            <button
              className="w-[100%] px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              onClick={onNext}
            >
              ДАЛЕЕ
            </button>
            <button
              className="mt-[20px] w-[100%] px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              onClick={onClose}
            >
              Отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;