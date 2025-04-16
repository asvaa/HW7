import React, { ChangeEvent } from "react";
import s from "./SuperRadio.module.css";

type OptionType = {
  id: string | number;
  value: string;
};

type SuperRadioPropsType = {
  id?: string;
  name?: string;
  options?: OptionType[];
  value: string | number;
  onChangeOption?: (option: OptionType) => void;
};

const SuperRadio: React.FC<SuperRadioPropsType> = ({
  id = "hw7-super-radio",
  name,
  options = [],
  value,
  onChangeOption,
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedOption = options.find(
      (o) => o.id.toString() === e.target.value
    );
    if (selectedOption) {
      onChangeOption?.(selectedOption);
    }
  };

  return (
    <div className={s.options}>
      {options.map((o) => (
        <label key={o.id} className={s.label}>
          <input
            id={`${id}-input-${o.id}`}
            type="radio"
            name={name}
            value={o.id}
            checked={String(value) === String(o.id)}
            onChange={onChangeCallback}
          />
          <span id={`${id}-span-${o.id}`}>
            {" "}
            {o.id}
          </span>
        </label>
      ))}
    </div>
  );
};

export default SuperRadio;
