import React, {
  ChangeEvent,
  InputHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";
import s from "./SuperRadio.module.css";

type OptionType = {
  id: string | number;
  value: string;
};

type DefaultSpanPropsType = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperRadioPropsType = Omit<DefaultRadioPropsType, "type"> & {
  options?: OptionType[];
  onChangeOption?: (option: OptionType) => void;
  spanProps?: DefaultSpanPropsType;
  value: string | number;
};

const SuperRadio: React.FC<SuperRadioPropsType> = ({
  id = "hw7-super-radio", // <- Добавлено значение по умолчанию
  name,
  className,
  options = [],
  value,
  onChangeOption,
  spanProps,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedOption = options.find(
      (o) => o.id.toString() === e.target.value
    );
    if (selectedOption) {
      onChangeOption?.(selectedOption);
    }
  };

  const finalRadioClassName = `${s.radio} ${className || ""}`;
  const spanClassName = `${s.span} ${spanProps?.className || ""}`;

  const mappedOptions = options.map((o) => (
    <label key={o.id} className={s.label}>
      <input
        id={`${id}-input-${o.id}`} // Будет #hw7-super-radio-input-1 и т.д.
        className={finalRadioClassName}
        type="radio"
        name={name}
        value={o.id.toString()}
        checked={value.toString() === o.id.toString()}
        onChange={onChangeCallback}
        {...restProps}
      />
      <span
        id={`${id}-span-${o.id}`} // Будет #hw7-super-radio-span-1 и т.д.
        {...spanProps}
        className={spanClassName}
      >
        {o.value}
      </span>
    </label>
  ));

  return <div className={s.options}>{mappedOptions}</div>;
};

export default SuperRadio;
