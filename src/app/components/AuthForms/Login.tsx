import React from "react";

const Login = () => {
  return(
    <div>
      <div>ВХОД/РЕГИСТРАЦИЯ</div>
      <div className="mb-4">
        <input
          className="w-full h-[60px] pl-[17px] border-[0.5px] border-[#30303080]"
          type="text"
          placeholder="Введите E-mail"
        />
      </div>
    </div>
  );
};

export default Login;