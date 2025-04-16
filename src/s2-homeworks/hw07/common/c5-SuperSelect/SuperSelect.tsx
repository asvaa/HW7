import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from "react";
import s from "./SuperSelect.module.css";

type OptionType = {
  id: string | number;
  value: string;
};

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: OptionType[];
  onChangeOption?: (option: OptionType) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options = [], // Задаем пустой массив по умолчанию, если options не передан
  className,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions = options.map((o) => (
    <option
      id={"hw7-option-" + o.id}
      className={s.option}
      key={o.id}
      value={o.id}
    >
      {o.value}
    </option>
  ));

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find(
      (o) => o.id === (typeof o.id === 'string' ? e.target.value : +e.target.value)
    );

    if (selectedOption && onChangeOption) {
      onChangeOption(selectedOption);
    }
  };

  const finalSelectClassName = `${s.select} ${className || ""}`;

  return (
    <select
      className={finalSelectClassName}
      onChange={onChangeCallback}
      {...restProps}
    >
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;
