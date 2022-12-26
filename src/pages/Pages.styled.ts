import styled from "styled-components";
import { breakpoints } from "../styles/variables";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 0;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 32px;
  }
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 16px;
    align-items: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 16px;
  }
`;

export const ImgGroup = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex: 0 1 50%;

  @media (max-width: ${breakpoints.tablet}) {
    height: 320px;
  }

  // Gradient under pictures
  &::before {
    //--img-radial-start: rgba(227, 173, 142, 1);
    //--img-radial-stop: rgba(51, 50, 96, 0);
    //
    //content: "";
    //position: absolute;
    //top: 0;
    //left: 0;
    //background: radial-gradient(
    //        50% 50% at 50% 50%,
    //        var(--img-radial-start) 0%,
    //        var(--img-radial-stop) 100%
    //);
    //
    //width: 100%;
    //height: 100%;
    //z-index: -1;
    //opacity: 0.33;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
    align-items: center;
    gap: 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    text-align: center;
    gap: 12px;
  }
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 500;
  line-height: 1;

  span {
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.body900};
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.accent} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 44px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 36px;
  }
`;

export const Subtitle = styled.p`
  font-size: 24px;
  line-height: 1.33;
  color: ${({ theme }) => theme.colors.body500};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
`;

export const Select = styled.div`
  width: 100%;
`;
