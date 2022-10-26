import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { fetchIP } from "../../api/ip";
import welcome from "../../assets/welcome.png";
import SearchSelect from "../../components/SearchSelect/SearchSelect";
import { CityNotify } from "../../components/ToasterNotify/ToasterNotify";
import { useLocale } from "../../hooks/useLocale";
import PromoLayout from "../../layouts/PromoLayout";
import * as S from "../Pages.styled";

const Start = () => {
  const { data } = useLocale();

  useEffect(() => {
    const getIP = async () => {
      const response = await fetchIP();
      const data = response.data;

      if (response.status === 200) {
        toast(<CityNotify city={data.city} loc={data.loc} />, {
          duration: 5000,
          style: {
            background: "transparent",
            boxShadow: "none",
          },
        });
      }
    };
    getIP();
  }, []);

  return (
    <PromoLayout>
      <S.Wrapper>
        <S.TitleGroup>
          <S.TextGroup>
            <S.Title>
              {data.pages.start.title1}
              {data.pages.start.title1 && <br />}
              <span>{data.pages.start.title2}</span>
            </S.Title>
            <S.Subtitle>{data.pages.start.subtitle}</S.Subtitle>
          </S.TextGroup>

          <S.Select>
            <SearchSelect size="large" />
          </S.Select>
        </S.TitleGroup>
        <S.ImgGroup>
          <S.Img src={welcome} />
        </S.ImgGroup>
      </S.Wrapper>
    </PromoLayout>
  );
};

export default Start;
