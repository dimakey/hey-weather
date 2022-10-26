import { StylesConfig } from "react-select";
import { theme } from "../../styles/theme";
import { SelectOption, SelectSize } from "../../types/types";

export const getStyleBySize = (
  size: SelectSize = "small"
): StylesConfig<SelectOption> => {
  const isSizeIsSmall = size === "small";

  return {
    container: (base) => ({
      ...base,
      color: "#4a4385",
      fontSize: isSizeIsSmall ? 20 : 22,
      fontWeight: 500,
    }),
    control: (base, { isFocused }) => ({
      ...base,
      padding: isSizeIsSmall ? "0 10px" : "4px 12px",
      border: 0,
      borderRadius: "8px",
      backgroundColor: isFocused ? theme.colors.white : theme.colors.black300,
    }),
    placeholder: (base, { isFocused }) => ({
      ...base,
      color: isFocused ? theme.colors.black500 : theme.colors.white300,
      opacity: 0.5,
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "4px",
      marginLeft: isSizeIsSmall ? 2 : 4,
    }),
    option: (base) => ({
      ...base,
      fontSize: 18,
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "8px",
      padding: "4px 0",
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
