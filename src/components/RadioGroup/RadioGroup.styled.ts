import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Label = styled.label`
  font-size: 16px;
  cursor: pointer;
  padding: 2px;
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
  color: ${({ theme }) => theme.colors.body500};

  &:hover {
    color: ${({ theme }) => theme.colors.body900};
  }

  &[data-state="checked"] {
    //border: 2px solid red;
    background-color: ${({ theme }) => theme.colors.buttonSecondaryBg};
    color: ${({ theme }) => theme.colors.body900};

    ${Label} {
      font-weight: 600;
    }
  }
`;

// export const RadioIndicator = styled(RadioGroup.Indicator)``;
