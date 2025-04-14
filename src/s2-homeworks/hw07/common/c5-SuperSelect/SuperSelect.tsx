import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'

type OptionType = {
    id: number
    value: string
}

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: OptionType[]
    value: number
    onChangeOption: (value: number) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
    options,
    className,
    onChange,
    onChangeOption,
    ...restProps
}) => {
    const mappedOptions = options.map((o) => (
        <option
            id={'hw7-option-' + o.id}
            className={s.option}
            key={o.id}
            value={o.id}
        >
            {o.value}
        </option>
    ))

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption(Number(e.currentTarget.value))
        onChange?.(e) 
    }

    const finalSelectClassName = `${s.select}${className ? ' ' + className : ''}`

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect