import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
} from 'react'
import s from './SuperCheckbox.module.css'

type DefaultInputPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>

type SuperCheckboxPropsType = Omit<DefaultInputPropsType, 'type'> & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = ({
    onChange,
    onChangeChecked,
    className,
    spanClassName,
    children,
    id,
    ...restProps
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e)
        onChangeChecked?.(e.currentTarget.checked)
    }

    const finalInputClassName = [s.checkbox, className].filter(Boolean).join(' ')
    const finalSpanClassName = [s.spanClassName, spanClassName].filter(Boolean).join(' ')

    return (
        <label className={s.label}>
            <input
                id={id}
                type="checkbox"
                onChange={onChangeCallback}
                className={finalInputClassName}
                {...restProps}
            />
            {children && (
                <span
                    id={id ? `${id}-span` : undefined}
                    className={finalSpanClassName}
                >
                    {children}
                </span>
            )}
        </label>
    )
}

export default SuperCheckbox
