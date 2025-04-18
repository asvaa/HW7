import React, { useState } from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import { restoreState, saveState } from "./localStorage/localStorage";
import s2 from "../../s1-main/App.module.css";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import s from "./HW6.module.css";

const HW6 = () => {
  const [value, setValue] = useState<string>(() => {
    return restoreState<string>("hw6-editable-span-value", "");
  });

  const save = () => {
    saveState<string>("hw6-editable-span-value", value);
    alert("Значение сохранено в localStorage!");
  };

  const restore = () => {
    const restoredValue = restoreState<string>("hw6-editable-span-value", "");
    setValue(restoredValue);
    alert("Значение восстановлено из localStorage!");
  };

  return (
    <div id={"hw6"} className={s2.hw}>
      <div className={s2.container}>
        <div className={s2.hwTitle}>Homework #6</div>
      </div>

      <div className={s2.hw}>
        <div className={s.editableSpanContainer}>
          <SuperEditableSpan
            id={"hw6-spanable-input"}
            value={value}
            onChangeText={setValue}
            spanProps={{
              id: "hw6-editable-span",
              defaultText: "enter text...",
              className: s.editableSpan,
            }}
          />
        </div>

        <div className={s.buttonsContainer}>
          <SuperButton id={"hw6-save"} onClick={save} className={s.button}>
            Save to ls
          </SuperButton>
          <SuperButton
            id={"hw6-restore"}
            onClick={restore}
            xType={"secondary"}
            className={s.button}
          >
            Get from ls
          </SuperButton>
        </div>
      </div>
    </div>
  );
};

export default HW6;
