import React from "react";

const RegistrationPassword = ({ isOpen, onPass, onClose }) => {
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
            <div>Пароль</div>
            <input
              className="w-full h-[60px] pl-[17px] border-[0.5px] border-[#30303080]"
              type="password"
              placeholder="Введите пароль"
            />
          </div>

          <div className="flex justify-start gap-2 mb-[20px]">
            <input
              type="checkbox"
              id="subscribe"
              className="w-6 h-6 accent-[#222222] border border-[#00000080] rounded-sm"
            />
            <label
              htmlFor="subscribe"
              className="text-sm font-medium text-gray-800"
            >
              Заполняя эту форму, я даю свое согласие на обработку персональных данных*
            </label>
          </div>

          <div className="flex justify-start gap-2 mb-[20px]">
            <input
              type="checkbox"
              id="subscribe"
              className="w-6 h-6 accent-[#222222] border border-[#00000080] rounded-sm"
            />
            <label
              htmlFor="subscribe"
              className="text-sm font-medium text-gray-800"
            >
              Заполняя эту форму, я подтверждаю, что ознакомился с  условиями публичной оферты*
            </label>
          </div>


          <div className={"w-full mb-4"}>
            <button
              className="w-[100%] px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              onClick={onPass}
            >
              РЕГИСТРАЦИЯ
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
export default RegistrationPassword;