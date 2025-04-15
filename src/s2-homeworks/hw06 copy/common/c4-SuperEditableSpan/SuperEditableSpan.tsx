import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  HTMLAttributes,
  useState,
  useEffect,
} from "react";
import s from "./SuperEditableSpan.module.css";
import SuperInputText from "../../../hw04/common/c1-SuperInputText/SuperInputText";
import editIcon from "./editIcon.svg";


function saveState<T>(key: string, state: T) {
  const stateAsString = JSON.stringify(state);
  localStorage.setItem(key, stateAsString);
}

function restoreState<T>(key: string, defaultState: T): T {
  let state = defaultState;
  const stateAsString = localStorage.getItem(key);
  if (stateAsString !== null) state = JSON.parse(stateAsString) as T;
  return state;
}

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type DefaultSpanPropsType = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

type SuperEditableSpanType = Omit<DefaultInputPropsType, "type"> & {
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: string;
  spanProps?: DefaultSpanPropsType & { defaultText?: string };
  storageKey?: string; 
};

const SuperEditableSpan: React.FC<SuperEditableSpanType> = ({
  autoFocus,
  onBlur,
  onEnter,
  spanProps,
  value,
  onChange,
  storageKey,
  ...restProps
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { children, onDoubleClick, className, defaultText, ...restSpanProps } =
    spanProps || {};

  const [localValue, setLocalValue] = useState<string>(() => {
    if (storageKey) {
      return restoreState<string>(
        storageKey,
        (value as string) || defaultText || ""
      );
    }
    return (value as string) || defaultText || "";
  });

  useEffect(() => {
    if (storageKey) {
      saveState(storageKey, localValue);
    }
  }, [localValue, storageKey]);

  const onEnterCallback = () => {
    setEditMode(false);
    onEnter?.();
  };

  const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
    setEditMode(false);
    onBlur?.(e);
  };

  const onDoubleClickCallBack = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setEditMode(true);
    onDoubleClick?.(e);
  };

  const restore = () => {
    const restoredValue = defaultText || "";
    setLocalValue(restoredValue);
    if (onChange) {
      const event = {
        target: { value: restoredValue },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    }
    if (storageKey) {
      saveState(storageKey, restoredValue);
    }
  };

  const spanClassName = s.span + (className ? " " + className : "");

  return (
    <>
      {editMode ? (
        <div className={s.editContainer}>
          <SuperInputText
            autoFocus={autoFocus || true}
            onBlur={onBlurCallback}
            onEnter={onEnterCallback}
            className={s.input}
            value={localValue}
            onChange={(e) => {
              setLocalValue(e.target.value);
              onChange?.(e);
            }}
            {...restProps}
          />
          <button
            className={s.restoreButton}
            onClick={restore}
            title="Восстановить значение по умолчанию"
          >
            ↻
          </button>
        </div>
      ) : (
        <div className={s.spanBlock}>
          <img src={editIcon} className={s.pen} alt={"edit"} />
          <span
            onDoubleClick={onDoubleClickCallBack}
            className={spanClassName}
            {...restSpanProps}
          >
            {children || localValue || defaultText}
          </span>
        </div>
      )}
    </>
  );
};

export default SuperEditableSpan;
