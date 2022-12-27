import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../../styles/variables";

export const LogoLink = styled(Link)`
  text-decoration: none;
`;

export const ActiveWord = styled.span`
  color: ${({ theme }) => theme.colors.body900};
`;

export const Word = styled.span`
  color: ${({ theme }) => theme.colors.body900};
  transition: color 0.125s ease-in-out;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-size: 24px;
  font-weight: 600;

  &:hover {
    ${Word} {
      color: ${({ theme }) => theme.colors.accentHover};
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 20px;
  }
`;

export const LogoImg = styled.img`
  width: 28px;
  height: 28px;
`;
