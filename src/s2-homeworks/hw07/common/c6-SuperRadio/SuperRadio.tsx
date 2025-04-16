import React, {
  ChangeEvent,
  InputHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
// Type for the props of a regular span element
type DefaultSpanPropsType = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
  options?: any[]
  onChangeOption?: (option: any) => void
  spanProps?: DefaultSpanPropsType // props for the span element
  value: any // to control the selected option
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
  id,
  name,
  className,
  options,
  value,
  onChange,
  onChangeOption,
  spanProps,
  ...restProps
}) => {
  // Handle the change event for the radio buttons
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      const selectedOption = options?.find(
          (o) => o.id === e.target.value
      ) // Find the selected option based on its value
      if (selectedOption && onChangeOption) {
          onChangeOption(selectedOption) // Pass the selected option to the parent callback
      }
  }

  const finalRadioClassName = s.radio + (className ? ' ' + className : '')
  const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')

  const mappedOptions: any[] = options
      ? options.map((o) => (
            <label key={name + '-' + o.id} className={s.label}>
                <input
                    id={id + '-input-' + o.id}
                    className={finalRadioClassName}
                    type={'radio'}
                    name={name} // All radio buttons with the same 'name' will be grouped together
                    value={o.id} // The value submitted when this radio button is selected
                    checked={value === o.id} // The radio button is checked if its value matches the selected value
                    onChange={onChangeCallback} // Handle change event for this radio button
                    {...restProps}
                />
                <span
                    id={id + '-span-' + o.id}
                    {...spanProps}
                    className={spanClassName}
                >
                    {o.value} {/* Display the label for the option */}
                </span>
            </label>
        ))
      : []

  return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio
