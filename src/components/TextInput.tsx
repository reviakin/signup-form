import React, { FC } from "react";

type Props = {
  type: "text" | "password" | "email";
  placeholder: string;
  value: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

const TextInput: FC<Props> = ({
  type,
  placeholder,
  value,
  changeHandler,
  name,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={changeHandler}
    name={name}
  />
);

export { TextInput };
