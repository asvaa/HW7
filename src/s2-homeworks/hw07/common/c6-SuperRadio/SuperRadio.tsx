import React, { ChangeEvent } from "react";
import s from "./SuperRadio.module.css";

type OptionType = {
  id: number;
  value: string;
};

type SuperRadioPropsType = {
  id?: string;
  name: string;
  options: OptionType[];
  value: number;
  className?: string;
  onChangeOption: (value: number) => void;
};

const SuperRadio: React.FC<SuperRadioPropsType> = ({
  id,
  name,
  options,
  value,
  onChangeOption,
  className,
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeOption(Number(e.currentTarget.value));
  };

  return (
    <div id={id} className={`${s.radioContainer} ${className ?? ""}`}>
      {options.map((o) => (
        <label key={o.id} className={s.label}>
          <input
            type="radio"
            name={name}
            className={s.radio}
            checked={value === o.id}
            value={o.id}
            onChange={onChangeCallback}
          />
          <span className={s.radioValue}>{o.value}</span>
        </label>
      ))}
    </div>
  );
};

export default SuperRadio;
