import styled, { keyframes } from "styled-components";
import { H3 } from "../../styles/components";
import { breakpoints } from "../../styles/variables";
import zoomImg from "../../assets/zoom.png";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0.5turn) scale(0.8);
  }
  50% {
    transform: rotate(-1turn) scale(1.2);
  }
  100% {
    transform: rotate(0.5turn) scale(0.8);
  }
`;

const moveAnimation = keyframes`
  0%,
  100% {
    transform: translateX(0%);
    transform-origin: 50% 50%;
  }
  15% {
    transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    transform: translateX(15px) rotate(6deg);
  }
  45% {
    transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    transform: translateX(-6px) rotate(-1.2deg);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
`;

export const MagnifierImg = styled.div`
  position: relative;
  max-width: 160px;
  width: 100%;
  height: 160px;
  background-image: url(${zoomImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  animation-name: ${moveAnimation};
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  margin-bottom: 12px;
`;

export const LightningImg = styled.div`
  position: relative;
  transform: rotateX(60deg) rotateZ(-45deg);

  img {
    position: absolute;
    left: -20px;
    top: 15px;
    width: 64px;
    height: 64px;
    animation-name: ${rotateAnimation};
    animation-duration: 3s;
    animation-timing-function: cubic-bezier(0.45, 0, 0.55, 1);
    animation-iteration-count: infinite;
  }
`;

export const Title = styled(H3)``;

export const Subtitle = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.body500};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
`;
