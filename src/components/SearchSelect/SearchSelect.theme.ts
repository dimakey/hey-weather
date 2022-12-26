import { StylesConfig } from "react-select";
import { DefaultTheme } from "styled-components";
import { SelectOption, SelectSize } from "../../types/types";

export const getStyleBySize = (
  theme: DefaultTheme,
  size: SelectSize = "small"
): StylesConfig<SelectOption> => {
  const isSizeIsSmall = size === "small";

  return {
    container: (base) => ({
      ...base,
      fontSize: isSizeIsSmall ? 20 : 22,
      fontWeight: 500,
    }),
    control: (base, { isFocused }) => ({
      ...base,
      padding: isSizeIsSmall ? "0 10px" : "4px 12px",
      border: 0,
      borderRadius: "8px",
      outline: isFocused ? `2px solid ${theme.colors.primary}` : undefined,
      backgroundColor: isFocused
        ? theme.colors.searchBgFocus
        : theme.colors.searchBg,
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "4px",
      marginLeft: isSizeIsSmall ? 2 : 4,
    }),
    placeholder: (base, { isFocused }) => ({
      ...base,
      color: isFocused ? theme.colors.body300 : theme.colors.body100,
    }),
    input: (base) => ({
      ...base,
      color: theme.colors.body900,
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: `${theme.colors.searchBgFocus}`,
      borderRadius: "8px",
      padding: "4px 0",
    }),
    option: (base, { isSelected, isFocused }) => ({
      ...base,
      fontSize: 18,
      backgroundColor: isSelected
        ? `${theme.colors.secondary}`
        : isFocused
        ? `${theme.colors.secondary}`
        : undefined,
      color: isFocused ? `${theme.colors.black}` : `${theme.colors.body900}`,
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      display: "none",
    }),
  };
};
