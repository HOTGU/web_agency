import React, { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
}

const Textarea = ({ name, label, ...rest }: TextareaProps) => {
  return (
    <div className="relative w-full">
      <textarea
        {...rest}
        name={name}
        placeholder=" "
        className="w-full min-h-40 px-4 py-2 rounded border hover:border-slate-400 focus:border-purple-600 outline-none duration-200 resize-none peer"
      />
      <span className="absolute -top-2 text-xs left-0 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base px-1 ml-2 bg-white text-neutral-400 tracking-wide peer-focus:text-purple-600 peer-focus:text-xs peer-focus:-top-2  pointer-events-none duration-200">
        {label}
      </span>
    </div>
    // <div className="w-full">
    //   {label && (
    //     <label htmlFor={name} className="text-neutral-400 text-sm">
    //       {label}
    //     </label>
    //   )}
    //   <textarea
    //     {...rest}
    //     id={name}
    //     disabled={rest.disabled}
    //     className="w-full px-4 py-3 min-h-32 bg-white rounded-md border border-zinc-200 disabled:bg-zinc-900 transition outline-none focus:border-emerald-700 resize-none placeholder:text-neutral-300"
    //     autoComplete="off"
    //   />
    // </div>
  );
};

export default Textarea;
