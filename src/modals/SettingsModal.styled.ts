import styled from "styled-components";
import { breakpoints } from "../styles/variables";

export const ReOverlay = styled.div`
  .reOverlay__modalWrapper {
    background-color: rgba(0, 0, 0, 0.66);
  }

  .reOverlay__modalContainer {
    background-color: ${({ theme }) => theme.colors.bg} !important;
    border-radius: 12px;
  }
`;

export const Wrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    width: calc(100vw - 40px);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 500;
`;

export const List = styled.ul`
  margin: 1rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.body50};
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 0.75rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.body50};
`;

export const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ItemTitle = styled.h5`
  font-size: 18px;
`;

export const ItemSubtitle = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.body500};
`;

export const ButtonGroup = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 8px;
`;
