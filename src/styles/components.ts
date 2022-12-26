import styled from "styled-components";
import { base, breakpoints, paddings } from "./variables";

export const Widget = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${base.radii};
  padding: ${paddings.l};

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${paddings.m};
  }
`;

export const H1 = styled.h1`
  font-size: 48px;
`;

export const H2 = styled.h2`
  font-size: 40px;
  font-weight: 500;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 32px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 32px;
  }
`;

export const H3 = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

export const H4 = styled.h4``;

export const ALink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  padding-bottom: 2px;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.body900};
  }
`;
