import React from "react";
import * as S from "./Button.styled";

// HTMLButtonElement
interface ButtonProps {
  children: React.ReactNode;
  action?: "primary" | "secondary";
  buttonSize?: "sm" | "md";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  hasOnlyIcon?: boolean;
  onClick?: () => void;
  disabled: boolean;
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
  buttonSize: "sm",
  iconPosition: "left",
  hasOnlyIcon: false,
  disabled: false,
};

export default Button;
