import { ButtonHTMLAttributes } from "react";
type ButtonVariants = "entry" | "spent";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariants;
};

export const Button = ({ variant, className = "" }: ButtonProps) => {
    const variants = {
        entry: "text-green-primary",
        spent: "text-red-600",
    };
    if (variant) {
        const text = variant === "entry" ? variants.entry : variants.spent;
        return (
            <>
                <button className="bg-blue-secondary px-2 py-2 h-[4rem] rounded-2xl flex gap-1">
                    <p className={`${text} text-center`}>{"+"} </p>
                    <p className="text-white">adicionar</p>
                    <p className={`${text} `}>
                        {" "}
                        {variant === "entry" ? "entrada" : "gasto"}
                    </p>
                </button>
            </>
        );
    }
    return (
        <>
            <button className={className}></button>
        </>
    );
};

export default Button;
