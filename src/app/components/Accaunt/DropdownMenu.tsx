"use client"

import { useState } from "react";
import Link from "next/link";

const DropdownMenu = ({ menuItems, buttonLabel, buttonIcon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Кнопка */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-center"
      >
        <div className={"text-[24px] font-[500] underline"}>{buttonLabel}</div>
        {buttonIcon && (
          <img
            className={"w-[30px] h-[25px] ml-2"}
            src={buttonIcon}
            alt="dropdown"
          />
        )}
      </button>

      {/* Выпадающее меню */}
      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10">
          <ul className="py-1">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;



