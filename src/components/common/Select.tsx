import React from "react";
import { ICurrency } from "../../ts/interfaces";

interface Props {
    optionsArray: ICurrency[],
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select: React.FC<Props> = ({ optionsArray, onChange, value, name }) => {
    return (
        <select
            value={value}
            name={name}
            onChange={onChange}
            className="uppercase bg-white border w-full border-gray-300 rounded-md py-2 px-3 pr-8 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            {optionsArray.map(({ id, value }) => (
                <option
                    key={id}
                    value={id}
                >
                    {id} - {value}
                </option>
            ))}
        </select>
    )
}
export default Select;