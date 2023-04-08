import React from "react";
interface FormItemProps {
  label: string;
  children: JSX.Element;
  invalid: boolean;
  errorMessage: string | undefined;
}
export default function FormItem({
  label,
  children,
  errorMessage,
  invalid,
}: FormItemProps) {
  return (
    <div className="flex flex-col form-item">
      <label className="form-label mb-2 block font-[600]">{label}</label>
      <div className="relative flex flex-col">
        {children}
        {invalid && (
          <span className="absolute text-[rgb(239,68,68)] bottom-[-21px]">{errorMessage}</span>
        )}
      </div>
    </div>
  );
}
