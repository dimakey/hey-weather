import styled, { css } from "styled-components";
import sunriseBg from "../../assets/sunrise-bg.svg";
import moonriseBg from "../../assets/moonrise-bg.svg";
import { SunriseChartProps } from "./SunriseChart";

const percentToDegree = (percent: number = 0): number => {
  return 180 * (percent / 100) - 90;
};

export const SunriseContainer = styled.div`
  display: flex;
  height: 104px;
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.body100};
`;

export const ImgGroup = styled.div`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;

  svg {
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.colors.primary};
  }

  &:last-child svg {
    margin-left: auto;
  }
`;

export const Chart = styled.div<SunriseChartProps>`
  transform: rotate(${({ percent }) => `${percentToDegree(percent)}deg`});
  width: 208px;
  height: 208px;
  flex-shrink: 0;
`;

export const ChartImg = styled.div<SunriseChartProps>`
  position: relative;
  width: 208px;
  height: 208px;
  background-image: url(${({ isSunPhase }) =>
    isSunPhase ? sunriseBg : moonriseBg});

  background-repeat: no-repeat;
  background-position: center center;

  &::after {
    content: "";
    position: absolute;

    ${({ isSunPhase }) =>
      isSunPhase
        ? css`
            background: radial-gradient(
                50% 50% at 50% 50%,
                yellow 0%,
                //${({ theme }) => theme.colors.surface} 0%,
                rgba 100%
              )
              no-repeat center center;
          `
        : css`
            background: radial-gradient(
                50% 50% at 50% 50%,
                rgba(147, 146, 199, 0.5) 0%,
                rgba(147, 146, 199, 0) 100%
              )
              no-repeat center center;
          `}

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    width: 208px;
    height: 208px;

    z-index: -1;
    opacity: 0.25;
  }
`;

/**
 * sun:
 * rgba(254, 197, 36, 0.35) 0%
 * rgba(254, 197, 36, 0) 100%
 * night:
 *  rgba(187, 197, 228, 0.35) 0%,
 *                 rgba(187, 197, 228, 0) 100%
 */
