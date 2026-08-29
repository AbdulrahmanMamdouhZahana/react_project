import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    className?: string,
    width?: "w-full" | "w-fit",
    
}
const Button = ({ children, className, width = "w-full", ...rest }: IProps) => {
    return (
        <button
            {...rest}
            className={`${className} text-amber-50 p-3 ${width} cursor-pointer rounded-md`}
        >
            {children}
        </button>
    );
};
export default Button;