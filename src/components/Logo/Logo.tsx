import React from "react";
import logoImg from "../../assets/logo.svg";
import { ROUTES } from "../../constants/routes";
import * as S from "./Logo.styled";

const Logo = () => {
  return (
    <S.LogoLink to={ROUTES.start}>
      <S.Logo>
        <S.ActiveWord>hey</S.ActiveWord>
        <S.LogoImg src={logoImg} alt="hey weather logo" />
        <S.Word>weather</S.Word>
      </S.Logo>
    </S.LogoLink>
  );
};

export default Logo;
