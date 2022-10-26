import React from "react";
import * as S from "./InfoIcon.styled";

type Size = "sm" | "md" | "l";

type InfoIconProps = {
  icon: React.ReactNode;
  size?: Size;
};

const InfoIcon: React.FC<InfoIconProps> = ({ icon }) => {
  const isIconTypeString = typeof icon === "string";

  return (
    <S.Wrapper>
      {isIconTypeString ? <img src={icon} alt="icon" /> : icon}
    </S.Wrapper>
  );
};

export default InfoIcon;
