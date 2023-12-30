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
  icon?: string;
  iconHandler?: () => unknown;
  iconSize?: number;
  iconAlt?: string;
};

function InputGroup({
  inputType = "text",
  id,
  label,
  register,
  error,
  inputClassName = "",
  labelClassName = "",
  disabled = false,
  icon,
  iconSize = 25,
  iconHandler = () => void 0,
  iconAlt = "input icon",
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
        text-black
        `,
          error && `text-rose-500`,
          disabled && `opacity-50`,
          labelClassName
        )}
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          disabled={disabled}
          type={inputType}
          {...register(id)}
          className={cn(
            `rounded-md !mt-2 border
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
        {icon && (
          <img
            onClick={iconHandler}
            src={icon}
            alt={iconAlt}
            style={{ height: iconSize, width: iconSize }}
            className="absolute my-auto top-0 bottom-0  right-3 cursor-pointer"
          />
        )}
      </div>
      {error && (
        <small className="text-xs font-medium text-rose-500">
          {error.message as string}
        </small>
      )}
    </div>
  );
}

export default InputGroup;
