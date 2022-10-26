import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import * as S from "./Layout.styled";

type LayoutProps = {
  children: React.ReactNode;
};

const PromoLayout = ({ children }: LayoutProps) => {
  return (
    <S.PromoLayoutWrapper>
      <Header hideComponents={{ search: true }} />
      <S.MainContent>{children}</S.MainContent>
      <Footer />
    </S.PromoLayoutWrapper>
  );
};

export default PromoLayout;
