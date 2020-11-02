import React, { FC } from "react";

import { RadioInput } from "../RadioInput";
import { TextInput } from "../TextInput";
import { FormInput, ITextInput } from "../../tools/hooks/types";

type Props = {
  inputs: FormInput[];
  change: (input: { name: string; value: string }) => void;
};

const isTextInputType = (input: any): input is ITextInput =>
  input.type &&
  typeof input.type === "string" &&
  ["text", "email", "password"].includes(input.type);

const Inputs: FC<Props> = ({ inputs, change }) => (
  <>
    {inputs.map(({ name, ...input }) =>
      input.type === "radio" ? (
        <div key={name}>
          <RadioInput
            name={name}
            options={input.options}
            value={input.value}
            onChange={change}
          />
          {input.validation && input.touched && !input.valid ? (
            <p>{input.validation.invalidMessage}</p>
          ) : null}
        </div>
      ) : input.type === "select" ? (
        <div key={name}>
          <select
            name={name}
            onChange={({ target: { value } }) => change({ value, name: name })}
          >
            <option value=""></option>
            {input.options.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
          {input.validation && input.touched && !input.valid ? (
            <p>{input.validation.invalidMessage}</p>
          ) : null}
        </div>
      ) : input.type === "checkbox" ? (
        <div key={name}>
          {input.options.map((option) => (
            <>
              <input
                key={option}
                type="checkbox"
                checked={option === input.value}
                onChange={() => change({ name, value: option })}
              />
              <label htmlFor="">accept terms and conditions</label>
            </>
          ))}
          {input.validation && input.touched && !input.valid ? (
            <p>{input.validation.invalidMessage}</p>
          ) : null}
        </div>
      ) : isTextInputType(input) ? (
        <div key={name}>
          <TextInput
            type={input.type}
            placeholder={input.placeholder}
            changeHandler={({ target: { value } }) => change({ value, name })}
            name={name}
            value={input.value}
          />
          {input.validation && input.touched && !input.valid ? (
            <p>{input.validation.invalidMessage}</p>
          ) : null}
        </div>
      ) : null
    )}
  </>
);

export { Inputs };
