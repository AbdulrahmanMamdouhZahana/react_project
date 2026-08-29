import { InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> { }

const Input = ({...rest}:IProps) => { 
    return (
        <input className='border-[1px] border-gray-300 shadow-md focus:border-indigo-300 px-2 mb-3 py-2 w-full text-md rounded-md'  {...rest} />
    )
}
export default Input;