import styled, { css } from "styled-components"; // Import css for cleaner logic
import { Widget } from "../../../styles/components";
import { paddings } from "../../../styles/variables";

export const DuringDay = styled(Widget)`
  grid-area: duringday;
  display: flex;
  flex-direction: column;
  gap: ${paddings.l};

  // Swiper Settings
  .swiper-wrapper {
    padding-bottom: 24px;
  }

  .swiper-scrollbar {
    left: 0;
  }
`;

export const DuringDayHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DayList = styled.div``;

// 1. Updated DayItem with $isActive prop logic
export const DayItem = styled.div<{ $isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.surfaceSecondary};
  border-radius: 8px;
  gap: 8px;
  padding: 8px 0;

  /* Smooth transition for the effect */
  transition: all 0.3s ease-in-out;

  /* Create a transparent border by default to prevent "jumping" when the active border appears */
  border: 1px solid transparent;

  ${({ $isActive, theme }) =>
          $isActive &&
          css`
            background-color: ${theme.colors.surfaceTertiary || theme.colors.surfaceSecondary};
          `}
`;

export const DayTime = styled.time`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.body500};
`;

export const DayIcon = styled.div`
  width: 40px;
  height: 40px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const DayTemp = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const DayHumidity = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.body700};

  svg {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }
`;