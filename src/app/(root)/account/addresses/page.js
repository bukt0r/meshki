import DropdownMenu from "../../../components/Accaunt/DropdownMenu";

const Addresses = () => {
  const menuItems = [
    { label: "Информация аккаунта", path: "/account" },
    { label: "Избранное", path: "/account/favorites" },
    { label: "История заказов", path: "/account/orders" },
    { label: "Адреса", path: "/account/addresses" },
  ];
  return (
    <div className={"flex flex-col justify-center bg-[#F8F8F8] py-[80px]"}>
      <div className={"flex justify-center mb-[40px]"}>
        <div className={"text-[36px] font-[500]"}>СПИСОК АДРЕСОВ</div>
      </div>
      <div className={"flex justify-center mb-[40px]"}>
        <DropdownMenu
          menuItems={menuItems}
          buttonLabel="Адреса"
          buttonIcon="/btnRowDown.svg"
        />
      </div>
    </div>
  );
}
export default Addresses;