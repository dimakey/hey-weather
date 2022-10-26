import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Label = styled.label`
  font-size: 16px;
  cursor: pointer;
`;

export const RadioRoot = styled(RadioGroup.Root)`
  display: flex;
  gap: 4px;
  padding: 4px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
`;

export const RadioItem = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 4px;
  min-width: 32px;
  color: rgba(255, 255, 255, 0.5);

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.white};
  }

  &[data-state="checked"] {
    background-color: ${({ theme }) => theme.colors.white};
    color: #333;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);

    ${Label} {
      font-weight: 600;
    }
  }
`;

// export const RadioIndicator = styled(RadioGroup.Indicator)``;
