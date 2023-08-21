import { Status } from "@/@types/types";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Status;
};

export const Button = ({ variant, className = "", ...props }: ButtonProps) => {
    const variants = {
        entry: "text-green-primary",
        spent: "text-red-600",
    };
    if (variant) {
        return (
            <>
                <button
                    className="bg-blue-secondary px-3 py-1 h-[4rem] rounded-2xl flex items-center gap-1"
                    {...props}
                >
                    <p className={`${variants[variant]} text-center`}>{"+"} </p>
                    <p className="text-white">adicionar</p>
                    <p className={`${variants[variant]} `}>
                        {variant === "entry" ? "entrada" : "gasto"}
                    </p>
                </button>
            </>
        );
    }
    return (
        <>
            <button className={className} {...props}></button>
        </>
    );
};

export default Button;
