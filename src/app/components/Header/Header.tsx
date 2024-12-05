import React from "react";
import { useModal } from "../../../context/ModalContext";

const Header=()=>{
  const {openModal} = useModal();
  return (
    <div className={"flex items-center justify-between h-[80px] bg-[#E2E2E2] pl-[78px] border-b-[0.5px] border-[#0000004D]"}>
      <div className={"text-[24px] font-[600]"}>
        <div>MESHKI</div>
      </div>
      <div className={"flex gap-[45px]"}>
        <div className={"flex items-center gap-[45px] text-[20px]"}>
          <button className={"hover:text-[#00000080]"}>КАТАЛОГ</button>
          <button className={"hover:text-[#00000080]"}>МАГАЗИНЫ</button>
          <button className={"hover:text-[#00000080]"}>О БРЕНДЕ</button>
          <button className={"hover:text-[#00000080]"}>ИНФОРМАЦИЯ</button>
        </div>
        <div className={"flex"}>
          <div className={"flex justify-center items-center h-[80px] w-[80px] border-l-[0.5px] border-[#0000004D] hover:bg-[#222222CC] duration-300 group"}>
            <img className={"group-hover:invert transition duration-300"} src="./loupe.svg" alt=""/>
          </div>
          <div className={"flex justify-center items-center h-[80px] w-[80px] border-l-[0.5px] border-[#0000004D] hover:bg-[#222222CC] duration-300 group"}>
            <img className={"group-hover:invert transition duration-300"} src="./profile.svg" alt=""/>
          </div>
          <div className={"flex justify-center items-center h-[80px] w-[80px] border-l-[0.5px] border-[#0000004D] hover:bg-[#222222CC] duration-300 group"}>
            <img className={"group-hover:invert transition duration-300"} src="./heart.svg" alt=""/>
          </div>
          <div
            className={"flex justify-center items-center h-[80px] w-[80px] border-b-[0.5px] bg-[#222222] border-l-[0.5px] border-[#0000004D] hover:bg-[#222222CC] duration-300"}
            onClick={openModal}
          >
            <img src="./lock.svg" alt="lock"/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;