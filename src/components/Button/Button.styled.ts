import styled, { css } from "styled-components";
import { paddings } from "../../styles/variables";

interface StyledButtonProps {
  action?: string;
  hasOnlyIcon?: boolean;
  size?: "sm" | "md";
}

export const Button = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.25;

  margin: 0;
  border: none;

  gap: 8px;
  border-radius: ${paddings.xsm};

  box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.15);

  // Primary button styling
  color: ${({ theme }) => theme.colors.buttonPrimaryText};
  background-color: ${({ theme }) => theme.colors.buttonPrimaryBg};

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonPrimaryBgHover};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }

  &:active {
    box-shadow: inset 0 4px 25px rgba(255, 255, 255, 0.5);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.33;
  }

  ${({ theme, action }) => {
    switch (action) {
      case "secondary":
        return css`
          color: ${theme.colors.buttonSecondaryText};
          background-color: ${theme.colors.buttonSecondaryBg};

          // Hover effect ?
          &:hover {
            background-color: ${theme.colors.buttonSecondaryBgHover};
          }

          &:active {
            box-shadow: inset 0 4px 25px rgba(255, 255, 255, 0.15);
          }
        `;

      case "primary":
        return css`
          box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.5);
        `;

      default:
        return;
    }
  }}

  ${({ hasOnlyIcon, size }) => {
    // Button sizes
    switch (size) {
      case "sm":
        return css`
          ${hasOnlyIcon
            ? "height: 32px; width: 32px; padding: 4px;"
            : "padding: 4px 12px;"}
        `;
      case "md":
        return css`
          ${hasOnlyIcon
            ? "width: 40px; height: 40px; padding: 8px;"
            : "padding: 8px 16px;"}
        `;
      default:
        return;
    }
  }}
`;
