import React from "react";
import { useLocale } from "../../hooks/useLocale";
import * as S from "./Footer.styled";
import { ReactComponent as GitSvg } from "../../assets/github.svg";
import { ALink } from "../../styles/components";

const Footer = () => {
  const { data } = useLocale();

  return (
    <S.Footer>
      <ALink target="_blank" href="https://github.com/dimakey">
        <S.AuthorGroup>
          <GitSvg />
          Dmitriy Krapivnyy
        </S.AuthorGroup>
      </ALink>

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
