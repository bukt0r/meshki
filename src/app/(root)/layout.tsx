"use client";

import { FC, ReactNode } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import {ModalProvider} from "../../context/ModalContext";


interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <ModalProvider>
      <Header/>
      {children}
      <Footer/>
    </ModalProvider>
  );
};

export default Layout;