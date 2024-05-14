import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const Input = ({ label, name, ...rest }: InputProps) => {
  return (
    <div className="relative w-full">
      <input
        {...rest}
        name={name}
        placeholder=" "
        autoComplete="off"
        className="w-full px-4 py-2 rounded border hover:border-slate-400 focus:border-purple-600 outline-none duration-200 peer"
      />
      <span className="absolute -top-2 text-xs left-0 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base px-1 ml-2 bg-white text-neutral-400 tracking-wide peer-focus:text-purple-600 peer-focus:text-xs peer-focus:-top-2  pointer-events-none duration-200">
        {label}
      </span>
    </div>
  );
};

export default Input;
