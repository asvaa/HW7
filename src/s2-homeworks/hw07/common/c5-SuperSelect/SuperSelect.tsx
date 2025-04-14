import React, { ChangeEvent } from 'react'
import s from './SuperSelect.module.css'

type OptionType = {
    id: number
    value: string
}

type SuperSelectPropsType = {
    id?: string
    options: OptionType[]
    value: number
    onChangeOption: (value: number) => void
    className?: string 
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
    id,
    options,
    value,
    onChangeOption,
    className,
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption(Number(e.currentTarget.value))
    }

    return (
        <select
            id={id}
            className={`${s.select} ${className ?? ''}`} 
            value={value}
            onChange={onChangeCallback}
        >
            {options.map((o) => (
                <option
                    key={o.id}
                    value={o.id}
                    className={s.option}
                >
                    {o.value}
                </option>
            ))}
        </select>
    )
}

export default SuperSelect