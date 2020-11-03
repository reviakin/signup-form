import React, { FC } from "react";

export type SelectInputProps = {
  name: string;
  change: (input: { name: string; value: string }) => void;
  value: string | null;
  options: string[];
  placeholder?: string;
};

const SelectInput: FC<SelectInputProps> = ({
  name,
  change,
  value,
  options,
  placeholder = "",
}) => (
  <select
    className="select-input"
    style={{
      color: value ? "#222222" : "#A2A2A2",
    }}
    name={name}
    onChange={({ target: { value } }) => change({ value, name: name })}
  >
    <option value="" disabled selected>
      {placeholder}
    </option>
    {options.map((option) => (
      <option value={option} selected={option === value} key={option}>
        {option}
      </option>
    ))}
  </select>
);

export { SelectInput };
