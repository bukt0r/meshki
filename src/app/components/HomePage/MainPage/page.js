"use client"
import { useModal } from "../../../../context/ModalContext";
import Registration from "../../AuthForms/Registration";
import RegistrationPassword from "../../AuthForms/RegistrationPassword";

const MainPage = () => {
  const { isModalOpen, closeModal, currentStep, nextStep } = useModal();
  return(
    <div
      className={"flex flex-col justify-center h-[calc(100vh-80px)] bg-[url('/mainPage.svg')] bg-cover bg-center px-[75px] pt-[250px] pb-[100px]"}>
      <div className={"relative"}>
        {isModalOpen && currentStep === 1 && (
          <Registration isOpen={true} onNext={nextStep} onClose={closeModal}/>
        )}
        {isModalOpen && currentStep === 2 && (
          <RegistrationPassword isOpen={true} onPass={closeModal} onClose={closeModal}/>
        )}
      </div>
      <div className={"flex flex-grow items-center "}>
        <div className={"flex justify-between items-end w-full"}>
          <div>
            <div>
              <h1 className={" text-[96px] font-[700]"}>MESHKI</h1>
              <span className={"text-[20px] font-[300]"}>бренд стильной одежды для <br/> комфортной жизни</span>
            </div>
          </div>
          <div>
            <div className={"flex flex-col gap-[32px]"}>
              <div>
                <img className={"w-[37px] h-[37px]"} src="/insta.svg" alt="tele"/>
              </div>
              <div>
                <img className={"w-[37px] h-[37px]"} src="/telegram.svg" alt="ws"/>
              </div>
              <div>
                <img className={"w-[37px] h-[37px]"} src="/vk.svg" alt="mail"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <button className={"bg-[#222222] text-[#ffffff] py-[15px] px-[90px]"}>
          КАТАЛОГ
        </button>
      </div>
    </div>
  );
};

export default MainPage;