import React, { FC } from "react";

type Props = {
  type: "text" | "password" | "email";
  placeholder: string;
  value: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  required?: boolean;
  minLength?: number;
  pattern?: string;
};

const TextInput: FC<Props> = ({
  type,
  placeholder,
  value,
  changeHandler,
  name,
  required,
  minLength,
  pattern,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={changeHandler}
    name={name}
    required={required}
    minLength={minLength}
    pattern={pattern}
  />
);

export { TextInput };
