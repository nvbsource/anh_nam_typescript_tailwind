import { FieldProps } from "formik";
import React, { FC } from "react";
import { useState } from "react";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";
interface InputPasswordFieldProps{
  placeholder: string;
}
const InputPasswordField: FC<FieldProps & InputPasswordFieldProps> = ({ placeholder, ...props }) => {
  const { field, form } = props;
  const invalid = form.errors[field.name];
  const [pwInputType, setPwInputType] = useState("password");
  const onPasswordVisibleClick = () => {
    const nextValue = pwInputType === "password" ? "text" : "password";
    setPwInputType(nextValue);
  };

  const classInvalid = () => (invalid ? "border border-[#ef4444]" : "");

  return (
    <div className="flex flex-col relative">
      <input
        className={`block px-[12px] py-[8px] pr-[40px] h-[44px] rounded-md border ${classInvalid()} focus:ring-0 focus:outline-none`}
        type={pwInputType}
        id={field.name}
        placeholder={placeholder}
        {...field}
      />
      <span
        className="cursor-pointer text-xl absolute right-[10px] top-[50%] translate-y-[-50%]"
        onClick={() => onPasswordVisibleClick()}
      >
        {pwInputType === "password" ? <HiOutlineEyeOff /> : <HiOutlineEye />}
      </span>
    </div>
  );
};
export default InputPasswordField;
