import React from "react";
import s from "./SuperSelect.module.css";

type OptionType = {
  id: number;
  value: string;
};

type SuperSelectProps = {
  id?: string;
  options: OptionType[];
  value: number;
  onChangeOption: (id: number) => void;
};

const SuperSelect: React.FC<SuperSelectProps> = ({ id, options, value, onChangeOption }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeOption(Number(e.target.value));
  };

  return (
    <select id={id} className={s.select} value={value} onChange={handleChange}>
      {options.map((opt) => (
        <option key={opt.id} value={opt.id} className={s.option}>
          {opt.value}
        </option>
      ))}
    </select>
  );
};

export default SuperSelect;
