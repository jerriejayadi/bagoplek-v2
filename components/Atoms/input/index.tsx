"use client";
import { InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  groupClassName?: string;
}

export default function Input({ label, groupClassName, ...props }: InputProps) {
  const [value, setValue] = useState<any>("");
  return (
    <div className={`${groupClassName} flex flex-col`}>
      <label htmlFor={props.id} className={`mb-2 font-barlow font-bold`}>
        {label}
      </label>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        {...props}
        className={`${props.className} px-5 py-3 rounded-md focus:outline-none text-start`}
      />
    </div>
  );
}
