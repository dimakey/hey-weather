import React from "react";
import { useNavigate } from "react-router-dom";
import pageNotFoundImg from "../../assets/404.png";
import Button from "../../components/Button/Button";
import { ROUTES } from "../../constants/routes";
import { useLocale } from "../../hooks/useLocale";
import PromoLayout from "../../layouts/PromoLayout";
import * as S from "../Pages.styled";
import { ReactComponent as Back } from "../../assets/back.svg";

type PageNotFoundProps = {
  title?: string;
  subtitle?: string;
};

// TODO [feature] implement the ability to add subtitle and title from props (different errors)
const PageNotFound: React.FC<PageNotFoundProps> = () => {
  const { data } = useLocale();
  const navigate = useNavigate();

  const handleBackButton = () => navigate(ROUTES.start);

  return (
    <PromoLayout>
      <S.Wrapper>
        <S.TitleGroup>
          <S.TextGroup>
            <S.Title>
              {data.pages.error404.title1}
              {data.pages.error404.title1 && <br />}
              <span>{data.pages.error404.title2}</span>
            </S.Title>
            <S.Subtitle>{data.pages.error404.subtitle}</S.Subtitle>
            <Button icon={<Back />} action="primary" onClick={handleBackButton}>
              {data.pages.error404.backButtonTitle}
            </Button>
          </S.TextGroup>
        </S.TitleGroup>
        <S.ImgGroup>
          <S.Img src={pageNotFoundImg} />
        </S.ImgGroup>
      </S.Wrapper>
    </PromoLayout>
  );
};

export default PageNotFound;
