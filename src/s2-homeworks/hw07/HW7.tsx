import React, { useState } from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";
import s from "./HW7.module.css";

type OptionType = {
  id: number;
  value: string;
};

const options: OptionType[] = [
  { id: 1, value: "Pre-junior" },
  { id: 2, value: "Junior" },
  { id: 3, value: "Junior+" },
];

const HW7 = () => {
  const [value, setValue] = useState<number>(1);
  const selected = options.find((o) => o.id === value)?.value;

  return (
    <div className={s.hw7Wrapper}>
      <div className={s.header}>
        <h1 className={s.title}>Homework #7</h1>
        <div className={s.selected}>{selected}</div>
      </div>

      <div className={s.selectWrapper}>
        <SuperSelect
          id="hw7-select"
          options={options}
          value={value}
          onChangeOption={setValue}
        />
      </div>

      <div className={s.radioWrapper}>
        <SuperRadio
          id="hw7-radio"
          name="options"
          options={options}
          value={value}
          onChangeOption={setValue}
        />
      </div>
    </div>
  );
};

export default HW7;
