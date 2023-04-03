import React from "react";

interface Props {
    optionsArray: string[],
    value: string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select: React.FC<Props> = ({ optionsArray, onChange, value }) => {
    return (
        <select
            value={value}
            onChange={onChange}
            className="uppercase bg-white border border-gray-300 rounded-md py-2 px-3 pr-8 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            {optionsArray.map((option) => (
                <option
                    key={option}
                >
                    {option}
                </option>
            ))}
        </select>
    )
}
export default Select;