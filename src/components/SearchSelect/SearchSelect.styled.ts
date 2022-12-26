import styled from "styled-components";

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const OptionValue = styled.strong`
  font-weight: 500;
`;

export const OptionLabel = styled.span`
  font-size: 14px;
  opacity: 0.5;
`;

type SearchIconSvgProps = {
  isFocused?: boolean;
  selectSize?: "small" | "large";
};

export const SearchIconContainer = styled.span<SearchIconSvgProps>`
  height: ${({ selectSize }) => (selectSize === "small" ? "20px" : "24px")};
  width: ${({ selectSize }) => (selectSize === "small" ? "20px" : "24px")};

  display: flex;
  align-items: center;

  // stiling search icon in react-select component
  color: ${({ isFocused, theme }) =>
    isFocused ? theme.colors.body300 : theme.colors.body100};
`;
