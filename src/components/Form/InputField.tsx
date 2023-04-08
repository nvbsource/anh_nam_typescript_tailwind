import { FieldProps } from "formik";
import React, { FC } from "react";
interface InputFieldProps{
  placeholder: string;
}
const InputField: FC<FieldProps & InputFieldProps> = ({ placeholder, ...props }) => {
  const { field, form } = props;
  const invalid = form.errors[field.name];
  const classInvalid = () => (invalid ? "border border-[#ef4444]" : "");

  return (
    <input
      className={`block px-[12px] py-[8px] h-[44px] rounded-md border ${classInvalid()} focus:ring-0 focus:outline-none`}
      type="text"
      id={field.name}
      placeholder={placeholder}
      {...field}
    />
  );
};
export default InputField;
