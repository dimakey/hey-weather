import React from "react";
import { useLocale } from "../../hooks/useLocale";
import * as S from "./Preloader.styled";
import logoImg from "../../assets/logo.svg";

const Preloader = () => {
  const { data } = useLocale();
  return (
    <S.Wrapper>
      <S.Group>
        <S.MagnifierImg>
          <S.LightningImg>
            <img src={logoImg} alt="thunder spark" />
          </S.LightningImg>
        </S.MagnifierImg>

        <S.Title>{data.pages.preloader.title}</S.Title>
        <S.Subtitle>{data.pages.preloader.subtitle}</S.Subtitle>
      </S.Group>
    </S.Wrapper>
  );
};

export default Preloader;
