import React from "react";
import * as S from "./WidgetHeader.styled";

type WidgetHeaderProps = {
  title?: string;
  subtitle?: string;
};

const WidgetHeader = ({ title, subtitle }: WidgetHeaderProps) => {
  return (
    <S.WidgetHeader>
      {subtitle && <S.WidgetSubtitle>{subtitle}</S.WidgetSubtitle>}
      {title && <S.WidgetTitle>{title}</S.WidgetTitle>}
    </S.WidgetHeader>
  );
};

export default WidgetHeader;
