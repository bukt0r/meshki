"use client"

import { useState } from "react";
import DropdownMenu from "../../components/Accaunt/DropdownMenu";
import ChangePasswordModal from "../../components/Accaunt/ChangePasswordModal";

const Account = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const menuItems = [
    { label: "Информация аккаунта", path: "/account" },
    { label: "Избранное", path: "/account/favorites" },
    { label: "История заказов", path: "/account/orders" },
    { label: "Адреса", path: "/account/addresses" },
  ];

  return (
    <div className={"relative"}>
      {/* Модальное окно */}
      <ChangePasswordModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />

      {/* Основной контент */}
      <div className={`flex justify-center bg-[#F8F8F8] py-[80px] ${isModalOpen ? "blur-sm" : ""}`}>
        <div>
          <div className={"flex justify-center mb-[40px]"}>
            <div className={"text-[36px] font-[500]"}>ДОБРО ПОЖАЛОВАТЬ</div>
          </div>

          <div className={"flex justify-center mb-[40px]"}>
            <DropdownMenu
              menuItems={menuItems}
              buttonLabel="Информация аккаунта"
              buttonIcon="/btnRowDown.svg"
            />
          </div>

          <div className={"flex flex-wrap justify-between gap-[20px] mb-[20px]"}>
            <div className={"flex flex-col w-[calc(50%-10px)] gap-[20px]"}>
              <div>
                <div>Имя</div>
                <div>
                  <input
                    className={"w-full h-[60px] pl-[17px] border-[0.5px] border-[#30303080]"}
                    type="text"
                    placeholder="Введите имя"
                  />
                </div>
              </div>
              <div>
                <div>Дата рождения</div>
                <div>
                  <input
                    className={"w-full h-[60px] pl-[17px] border-[0.5px] border-[#30303080]"}
                    type="email"
                    placeholder="01.01.2000г"
                  />
                </div>
              </div>
              <div>
                <div>E-mail</div>
                <div>
                  <input
                    className={"w-full h-[60px] pl-[17px] border-[0.5px] border-[#30303080]"}
                    type="email"
                    placeholder="user@mail.ru"
                  />
                </div>
              </div>
            </div>

            <div className={"flex flex-col w-[calc(50%-10px)] gap-[20px]"}>
              <div>
                <div>Фамилия</div>
                <div>
                  <input
                    className={"w-full h-[60px] pl-[17px] border-[0.5px] border-[#30303080]"}
                    type="email"
                    placeholder="user"
                  />
                </div>
              </div>
              <div>
                <div>Телефон</div>
                <div>
                  <input
                    className={"w-full h-[60px] pl-[17px] border-[0.5px] border-[#30303080]"}
                    type="phone"
                    placeholder="+7 (000) 000 0000"
                  />
                </div>
              </div>
            </div>
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
              Подписка на рассылку
            </label>
          </div>

          <div className={"flex justify-center gap-[20px]"}>
            <div
              className={
                "w-[calc(50%-10px)] text-[24px] font-[600] bg-[#222222] text-[#ffffff] py-[15px] px-[71px]"
              }
            >
              <button onClick={() => setModalOpen(true)}>ИЗМЕНИТЬ ПАРОЛЬ</button>
            </div>
            <div
              className={
                "w-[calc(50%-10px)] text-[24px] font-[600] bg-[#222222] text-[#ffffff] py-[15px] px-[125px]"
              }
            >
              <button>СОХРАНИТЬ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Account;
