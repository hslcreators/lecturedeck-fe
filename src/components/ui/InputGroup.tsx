import { cn } from "@/utils/cn";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  labelClassName?: string;
  inputClassName?: string;
  inputType?: React.HTMLInputTypeAttribute;
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  error: FieldErrors<FieldValues>["x"];
  disabled?: boolean;
};

function InputGroup({
  inputType = "text",
  id,
  label,
  register,
  error,
  inputClassName = "",
  labelClassName = "",
  disabled = false
}: Props) {
  return (
    <div>
      <label
        htmlFor={id}
        className={cn(
          `
        leading-6 
        text-sm 
        font-semibold 
        text-black`,
          error && `text-rose-500`,
          disabled && `opacity-50`,
          labelClassName
        )}
      >
        {label}
      </label>
      <input
        id={id}
        disabled={disabled}
        type={inputType}
        {...register(id)}
        className={cn(
          `rounded-md border
       w-full 
       border-[#d0d5dd] 
       py-2 px-4 placeholder:text-slate-500 
       text-sm 
       outline-none 
       focus:ring-blue 
       focus:ring-2 
       bg-white 
       text-slate-500 
       h-9 
       block`,
          error &&
            `
       focus:ring-rose-500 
       text-rose-500 
       border-rose-500`,
          inputClassName
        )}
      />
      {error && (
        <small className="text-xs font-medium text-rose-500">
          {error.message as string}
        </small>
      )}
    </div>
  );
}

export default InputGroup;
