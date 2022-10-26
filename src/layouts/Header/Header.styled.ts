import styled from "styled-components";
import { Button } from "../../components/Button/Button.styled";
import { Logo } from "../../components/Logo/Logo.styled";
import { base, breakpoints } from "../../styles/variables";

export const HeaderSearch = styled.div`
  flex-grow: 1;
  max-width: 560px;
  min-width: 320px;
  z-index: 10;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 24px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 16px 0;
    flex-wrap: wrap;
    gap: 12px;

    ${Logo} {
    }

    ${HeaderSearch} {
      min-width: 100%;
      order: 2;
    }

    ${Button} {
    }
  }
`;
