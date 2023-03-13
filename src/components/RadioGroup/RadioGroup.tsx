import React from "react";
import { RadioGroupItem } from "../../types/types";
import { RadioRoot, RadioItem, Label } from "./RadioGroup.styled";

type RadioProps = {
  defaultValue?: string;
  onChange: (value: string) => void;
  items: RadioGroupItem[];
};

const RadioGroup = ({ defaultValue, onChange, items }: RadioProps) => {
  return (
    <RadioRoot defaultValue={defaultValue} onValueChange={onChange}>
      {items.map((item) => (
        <RadioItem key={item.value} value={item.value}>
          <Label htmlFor={item.value}>{item.label}</Label>
        </RadioItem>
      ))}
    </RadioRoot>
  );
};

export default RadioGroup;
