import React from "react";

type Props = {
    text: string,
    type: "submit" | "button",
    onClick?: () => void,
    disabled?: boolean

}

const Button: React.FC<Props> = ({ text, onClick, disabled, type }) => {

    return (
        <button
            className={`${!disabled ? "bg-teal-400 hover:text-black hover:bg-teal-500 transition-all" : "bg-slate-400"} text-white rounded-md min-h-[50px] min-w-[80px] shadow-sm px-8 py-4`}
            disabled={disabled}
            onClick={onClick}
            type={type ? type : "button"}
        >
            {text}
        </button>
    );
};

export default React.memo(Button);