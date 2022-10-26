import React from "react";
import { Reoverlay } from "reoverlay";
import { ReactComponent as MenuSvg } from "../../assets/menu.svg";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import SearchSelect from "../../components/SearchSelect/SearchSelect";
import { useLocale } from "../../hooks/useLocale";
import { SettingsModal } from "../../modals/SettingsModal";
import * as S from "./Header.styled";

type HeaderProps = {
  hideComponents: {
    logo?: boolean;
    search?: boolean;
    menu?: boolean;
  };
};

const Header = ({ hideComponents }: HeaderProps) => {
  const { data } = useLocale();
  const { logo, search, menu } = hideComponents;

  const handleSettingsClick = () => {
    Reoverlay.showModal(SettingsModal);
  };

  return (
    <S.Header>
      {!logo && <Logo />}

      {!search && (
        <S.HeaderSearch>
          <SearchSelect />
        </S.HeaderSearch>
      )}

      {!menu && (
        <Button
          action="secondary"
          onClick={handleSettingsClick}
          icon={<MenuSvg />}
          iconPosition="right"
        >
          {data.pages.modal.settings}
        </Button>
      )}
    </S.Header>
  );
};

Header.defaultProps = {
  hideComponents: {
    logo: false,
    search: false,
    menu: false,
  },
};

export default Header;
