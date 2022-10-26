import styled from "styled-components";
import { breakpoints } from "../../styles/variables";

export const Footer = styled.footer`
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  font-size: 16px;
  
  @media (max-width: ${breakpoints.tablet}) {
  }

  @media (max-width: ${breakpoints.mobile}) {
  }
`;

export const AuthorGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    color: #fff;
  }
`;

export const AuthorName = styled.span``;
export const Thanks = styled.span``;
