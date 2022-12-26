/* Stats */
import styled from "styled-components";
import { base, breakpoints } from "../../../styles/variables";

export const CityStats = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Item = styled.li`
  background-color: ${({ theme }) => theme.colors.surfaceSecondary};
  width: calc(50% - 4px);
  display: flex;
  gap: 8px;
  border-radius: 8px;
  padding: 8px 12px;
  overflow: hidden;
`;

export const Icon = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  img {
    margin-top: 4px;
    width: 100%;
    height: 100%;
  }
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 18px;
`;

export const Subtitle = styled.span`
  color: ${({ theme }) => theme.colors.body500};
`;
