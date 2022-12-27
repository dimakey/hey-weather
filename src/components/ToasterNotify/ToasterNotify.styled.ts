import styled from "styled-components";
import { base } from "../../styles/variables";

export const NotifyWrapper = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.notifyPopupBg};
  border-radius: ${base.radii};
  max-width: 480px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: all 1.25s ease-in-out;

  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;
`;

export const NotifyText = styled.p`
  color: ${({ theme }) => theme.colors.body900};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;
