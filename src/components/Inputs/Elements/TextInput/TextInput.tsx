import React, { CSSProperties, FC } from "react";

type Props = {
  type: "text" | "password" | "email";
  placeholder: string;
  value: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  required?: boolean;
  minLength?: number;
  pattern?: string;
  style?: CSSProperties;
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
  style,
}) => (
  <input
    style={{
      ...style,
    }}
    className="text-input"
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
