import React from "react";
import * as S from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  action?: "primary" | "secondary";
  size?: "sm" | "md";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  hasOnlyIcon?: boolean;
  onClick?: () => void;
  disabled: boolean;
  style?: React.CSSProperties;
}

const Button = ({ children, icon, iconPosition, ...props }: ButtonProps) => {
  return (
    <S.Button {...props}>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </S.Button>
  );
};

Button.defaultProps = {
  action: "primary",
  size: "sm",
  iconPosition: "left",
  hasOnlyIcon: false,
  disabled: false,
};

export default Button;
