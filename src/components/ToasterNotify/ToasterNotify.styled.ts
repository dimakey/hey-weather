import styled from "styled-components";
import { base, breakpoints } from "../../styles/variables";

export const NotifyWrapper = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.bg300};
  border-radius: ${base.radii};
  max-width: 480px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: all 2s ease-in-out;

  @media (min-width: ${breakpoints.tablet}) {
  }
`;

export const Header = styled.h4`
  font-size: 20px;
  font-weight: 600;
`;

export const NotifyText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;
