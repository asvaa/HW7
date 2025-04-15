import React from "react";
import s from "./SuperRadio.module.css";

type OptionType = {
  id: number;
  value: string;
};

type SuperRadioProps = {
  id?: string;
  name: string;
  options: OptionType[];
  value: number;
  onChangeOption: (id: number) => void;
};

const SuperRadio: React.FC<SuperRadioProps> = ({
  id,
  name,
  options,
  value,
  onChangeOption,
}) => {
  return (
    <div className={s.radioGroup}>
      {options.map((opt) => (
        <label key={opt.id} className={s.label}>
          <input
            id={id + "-" + opt.id}
            type="radio"
            name={name}
            value={opt.id}
            checked={value === opt.id}
            onChange={() => onChangeOption(opt.id)}
            className={s.radio}
          />
          {opt.value}
        </label>
      ))}
    </div>
  );
};

export default SuperRadio;
