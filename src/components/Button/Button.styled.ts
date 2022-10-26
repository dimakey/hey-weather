import styled, { css } from "styled-components";
import { paddings } from "../../styles/variables";

interface StyledButtonProps {
  action?: string;
  hasIconOnly?: boolean;
  buttonSize?: "sm" | "md";
}

export const Button = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  line-height: 1;
  font-size: 18px;

  margin: 0;
  border: none;

  gap: 8px;

  border-radius: ${paddings.xsm};
  padding: ${paddings.sm} ${paddings.l};

  box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.15);

  // Primary styling
  background-color: ${({ theme }) => theme.colors.accent};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
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
    color: gray;
    opacity: 0.5;
  }

  ${({ theme, action }) => {
    switch (action) {
      case "secondary":
        return css`
          color: ${theme.colors.body900};
          background-color: ${theme.colors.surface};

          &:hover {
            background-color: ${theme.colors.surfaceSecondary};
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

  ${({ hasIconOnly, buttonSize }) => {
    // Button sizes
    switch (buttonSize) {
      case "sm":
        return css`
          ${hasIconOnly ? "width: 32px;padding: 8px;" : "padding: 4px 12px;"}
          border-radius: 4px;
          height: 32px;
        `;
      case "md":
        return css`
          ${hasIconOnly ? "width: 40px; padding: 8px;" : "padding: 8px 16px;"}
          border-radius: 8px;
          height: 40px;
        `;
      default:
        return;
    }
  }}
`;
