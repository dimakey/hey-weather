import styled from "styled-components";
import { Widget } from "../../../styles/components";

export const CityAstro = styled(Widget)`
  grid-area: astro;
  //justify-content: space-between;
`;

export const AstroGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AstroFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AstroTimeGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  &:nth-child(2) {
    align-items: center;
  }

  &:last-child {
    align-items: flex-end;
  }
`;

export const AstroSubtitle = styled.span`
  color: ${({ theme }) => theme.colors.body500};
`;

export const AstroTime = styled.time`
  font-weight: 500;
  font-size: 18px;
`;
