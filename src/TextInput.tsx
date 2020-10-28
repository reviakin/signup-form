import React, { FC } from "react";

type Props = {
  type: "text" | "password" | "email";
  placeholder: string;
};

const TextInput: FC<Props> = ({ type, placeholder }) => (
  <input type={type} placeholder={placeholder} />
);

export { TextInput };
