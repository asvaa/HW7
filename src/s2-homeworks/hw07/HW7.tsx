import React, { useState } from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";
import s2 from "../../s1-main/App.module.css";
import s from "./HW7.module.css";

type OptionType = {
  id: number;
  value: string;
};

const arr: OptionType[] = [
  { id: 1, value: "Pre-junior" },
  { id: 2, value: "Junior" },
  { id: 3, value: "Junior+" },
];

const HW7 = () => {
  const [value, onChangeOption] = useState<number>(1); 
  const selectedOption = arr.find((opt) => opt.id === value)?.value || "не выбрано";

  return (
    <div id={"hw7"} className={s2.container}>
      <div className={s2.hwTitle}>Homework #7</div>

      <div className={s2.hw}>
        <div className={s.container}>
          <div className={s.selectedValue}>
            Выбран: <strong>{selectedOption}</strong> (ID: {value})
          </div>

          <div className={s.selectContainer}>
            <SuperSelect
              id={"hw7-super-select"}
              options={arr}
              value={value}
              onChangeOption={onChangeOption}
            />
          </div>

          <div className={s.radioContainer}>
            <SuperRadio
              id={"hw7-super-radio"}
              name={"hw7-radio"}
              options={arr}
              value={value}
              onChangeOption={onChangeOption}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HW7;