import React from "react";
import { useLocale } from "../../hooks/useLocale";
import * as S from "./Footer.styled";
import { ReactComponent as GitSvg } from "../../assets/github.svg";
import { ALink } from "../../styles/components";

const Footer = () => {
  const { data } = useLocale();

  return (
    <S.Footer>
      <S.AuthorGroup>
        <GitSvg />
        <S.AuthorName>
          <ALink target="_blank" href="https://github.com/dimakey">
            Dmitriy Krapivnyy
          </ALink>
        </S.AuthorName>
      </S.AuthorGroup>
      <S.Thanks>
        {data.pages.footer.thanks}
        <ALink target="_blank" href="https://www.freepik.com/">
          Freepik
        </ALink>
      </S.Thanks>
    </S.Footer>
  );
};

export default Footer;
