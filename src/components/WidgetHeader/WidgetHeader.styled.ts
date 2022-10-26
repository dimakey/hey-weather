import styled from "styled-components";

export const WidgetHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const WidgetTitle = styled.h4`
  font-weight: 600;
  font-size: 20px;
`;

export const WidgetSubtitle = styled.span`
  color: ${({ theme }) => theme.colors.body500};
  font-size: 16px;
  font-weight: 400;
`;
