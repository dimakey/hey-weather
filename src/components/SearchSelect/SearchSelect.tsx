import React, { useCallback } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { components, ControlProps, OnChangeValue } from "react-select";
import AsyncSelect from "react-select/async";
import { cityAPI } from "../../api/city";
import { ReactComponent as Search } from "../../assets/search.svg";
import { useLocale } from "../../hooks/useLocale";
import { FetchAutoCompleteData } from "../../types/responses";
import { SelectOption, SelectSize } from "../../types/types";
import { debounce } from "../../utils/debounce";
import { createNavLink } from "../../utils/helpers";

import * as S from "./SearchSelect.styled";
import { getStyleBySize } from "./SearchSelect.theme";

type SearchSelectProps = {
  size?: SelectSize;
};

const SearchSelect = ({ size }: SearchSelectProps) => {
  const { data } = useLocale();
  const navigate = useNavigate();

  const filterSuggestionData = (data: FetchAutoCompleteData[]) => {
    const filteredData = data.filter(
      (fetchData) => fetchData.city && fetchData.country
    );

    return filteredData.map((fetchData) => ({
      value: fetchData.city,
      label: fetchData["address_line2"],
      lat: Number(fetchData.lat.toFixed(5)),
      lon: Number(fetchData.lon.toFixed(5)),
    }));
  };

  const handleLoadOptions = async (inputValue: string) => {
    if (inputValue.trim()) {
      try {
        const response = await cityAPI.fetchCitySuggestions(inputValue);
        return filterSuggestionData(response.data.results);
      } catch (err: any) {
        toast.error(err.message);
      }
    }
  };

  const handleSuggestions = useCallback(
    debounce((inputValue, callback) => {
      handleLoadOptions(inputValue).then((options) => callback(options));
    }, 300),
    []
  );

  const formatOptionLabel = ({ value, label }: SelectOption) => {
    return (
      <S.Option>
        <S.OptionValue>{value}</S.OptionValue>
        <S.OptionLabel>{label}</S.OptionLabel>
      </S.Option>
    );
  };

  const Control = ({
    children,
    ...props
  }: ControlProps<SelectOption, false>) => {
    return (
      <components.Control {...props}>
        <S.SearchIconContainer isFocused={props.isFocused} selectSize={size}>
          <Search />
        </S.SearchIconContainer>
        {children}
      </components.Control>
    );
  };

  const handleOnChange = (option: OnChangeValue<SelectOption, false>) => {
    if (option) {
      const { lat, lon, value } = option;
      const routeString = createNavLink({ lat, lon }, value);
      navigate(routeString);
    }
  };

  return (
    <AsyncSelect
      placeholder={data.search.placeholder}
      components={{ Control }}
      cacheOptions
      onChange={handleOnChange}
      formatOptionLabel={formatOptionLabel}
      styles={getStyleBySize(size)}
      loadOptions={handleSuggestions}
      noOptionsMessage={() => data.search.noOptionMessage}
      defaultOptions
    />
  );
};

SearchSelect.defaultProps = {
  size: "small",
};

export default SearchSelect;
