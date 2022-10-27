import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLocale } from "../../hooks/useLocale";
import { createNavLink } from "../../utils/helpers";
import Button from "../Button/Button";
import * as S from "./ToasterNotify.styled";

type NotifyProps = {
  city?: string;
  loc?: string;
};

// const Notify: React.FC<NotifyProps> = ({ children }) => {
//   return <S.NotifyWrapper>{children}</S.NotifyWrapper>;
// };

// export default ToasterNotify;

export const CityNotify = ({ city, loc }: NotifyProps) => {
  const { data } = useLocale();
  const navigate = useNavigate();

  const handleNotifyClick = () => {
    if (loc && city) {
      const [lat, lon] = loc.split(",").map(Number);
      const navLink = createNavLink({ lat, lon }, city);
      navigate(navLink);
      toast.remove();
    }
  };

  const yourCityMessage = `${data.notify.cityMessage} ${city}?`;

  return (
    <S.NotifyWrapper>
      <S.NotifyText>{yourCityMessage}</S.NotifyText>
      <Button onClick={handleNotifyClick}>{data.notify.buttonMessage}</Button>
    </S.NotifyWrapper>
  );
};

/*
  @param message:  React.ReactNode | string | null;

  <Notify action="info" message="message" />
  <Notify action="warning" message="message" />
 */
