import React, { useState } from "react";
import { ModalWrapper, Reoverlay } from "reoverlay";
import "reoverlay/lib/ModalWrapper.css";
import { ReactComponent as Cross } from "../assets/cross.svg";
import Button from "../components/Button/Button";
import RadioGroup from "../components/RadioGroup/RadioGroup";
import { RADIO_ITEMS } from "../constants/settings";
import { useLocale } from "../hooks/useLocale";
import { useSettings } from "../hooks/useSettings";
import {
  Language,
  PressureMeasure,
  setSettings,
  TempMeasure,
  WindMeasure,
} from "../redux/slices/settingsSlice";
import { useAppDispatch } from "../redux/store";
import { findDefaultRadioValue } from "../utils/helpers";
import * as S from "./SettingsModal.styled";

export const SettingsModal = () => {
  const { language, windMeasure, tempMeasure, pressureMeasure } = useSettings();
  const dispatch = useAppDispatch();
  const { data } = useLocale();

  // local state to prevent instant change, while popup still active
  const [localSettings, setLocalSettings] = useState({
    language,
    windMeasure,
    tempMeasure,
    pressureMeasure,
  });

  const langDefaultValue = findDefaultRadioValue(
    RADIO_ITEMS.language,
    language
  );
  const tempDefaultValue = findDefaultRadioValue(RADIO_ITEMS.temp, tempMeasure);
  const windDefaultValue = findDefaultRadioValue(RADIO_ITEMS.wind, windMeasure);
  const pressureDefaultValue = findDefaultRadioValue(
    RADIO_ITEMS.pressure,
    pressureMeasure
  );

  const closeModal = () => {
    Reoverlay.hideModal();
  };

  const handleWindRadioChange = (value: WindMeasure) => {
    setLocalSettings((state) => ({ ...state, windMeasure: value }));
  };

  const handlePressureRadioChange = (value: PressureMeasure) => {
    setLocalSettings((state) => ({ ...state, pressureMeasure: value }));
  };

  const handleLangRadioChange = (value: Language) => {
    setLocalSettings((state) => ({ ...state, language: value }));
  };

  const handleTempRadioChange = (value: TempMeasure) => {
    setLocalSettings((state) => ({ ...state, tempMeasure: value }));
  };

  const handleSaveButton = () => {
    dispatch(setSettings({ ...localSettings }));
    closeModal();
  };

  return (
    <S.ReOverlay>
      <ModalWrapper>
        <S.Wrapper>
          <S.Header>
            <S.Title>{data.pages.modal.settings}</S.Title>
            <Button action="secondary" hasOnlyIcon={true} onClick={closeModal}>
              <Cross />
            </Button>
          </S.Header>
          <S.List>
            <S.ListItem>
              <S.ItemText>
                <S.ItemTitle>{data.pages.modal.language.title}</S.ItemTitle>
                <S.ItemSubtitle>
                  {data.pages.modal.language.subtitle}
                </S.ItemSubtitle>
              </S.ItemText>
              <RadioGroup
                items={RADIO_ITEMS.language}
                defaultValue={langDefaultValue}
                onChange={handleLangRadioChange}
              />
            </S.ListItem>
            <S.ListItem>
              <S.ItemText>
                <S.ItemTitle>{data.pages.modal.temperature.title}</S.ItemTitle>
                <S.ItemSubtitle>
                  {data.pages.modal.temperature.subtitle}
                </S.ItemSubtitle>
              </S.ItemText>
              <RadioGroup
                items={RADIO_ITEMS.temp}
                defaultValue={tempDefaultValue}
                onChange={handleTempRadioChange}
              />
            </S.ListItem>
            <S.ListItem>
              <S.ItemText>
                <S.ItemTitle>{data.pages.modal.windSpeed.title}</S.ItemTitle>
                <S.ItemSubtitle>
                  {data.pages.modal.windSpeed.subtitle}
                </S.ItemSubtitle>
              </S.ItemText>
              <RadioGroup
                items={RADIO_ITEMS.wind}
                defaultValue={windDefaultValue}
                onChange={handleWindRadioChange}
              />
            </S.ListItem>
            <S.ListItem>
              <S.ItemText>
                <S.ItemTitle>{data.pages.modal.pressure.title}</S.ItemTitle>
                <S.ItemSubtitle>
                  {data.pages.modal.pressure.subtitle}
                </S.ItemSubtitle>
              </S.ItemText>
              <RadioGroup
                items={RADIO_ITEMS.pressure}
                defaultValue={pressureDefaultValue}
                onChange={handlePressureRadioChange}
              />
            </S.ListItem>
          </S.List>
          <S.ButtonGroup>
            <Button action="primary" onClick={handleSaveButton}>
              {data.pages.modal.save}
            </Button>
          </S.ButtonGroup>
        </S.Wrapper>
      </ModalWrapper>
    </S.ReOverlay>
  );
};
