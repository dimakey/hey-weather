import styled from "styled-components";
import { Widget } from "../../../styles/components";
import { breakpoints } from "../../../styles/variables";

export const CityName = styled(Widget)`
  grid-area: name;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;

export const CityNameGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

export const City = styled.h2`
  font-size: 24px;
  font-weight: 500;
`;

export const Country = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.body500};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`;
