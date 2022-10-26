import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import * as S from "./Layout.styled";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.LayoutWrapper>
      <Header />
      <S.MainContent>{children}</S.MainContent>
      <Footer />
    </S.LayoutWrapper>
  );
};

export default Layout;
