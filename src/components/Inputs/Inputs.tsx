import React, { FC } from "react";

import { RadioInput } from "../RadioInput";
import { TextInput } from "../TextInput";
import { FormInput } from "../../tools/hooks/types";

type Props = {
  inputs: FormInput[];
  change: (input: { name: string; value: string }) => void;
};

const Inputs: FC<Props> = ({ inputs, change }) => (
  <>
    {inputs.map(({ name, ...input }) =>
      input.type === "radio" ? (
        <div>
          <RadioInput
            key={name}
            name={name}
            options={input.options}
            value={input.value}
            onChange={({ target: { value } }) => change({ value, name })}
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
      ) : (
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
      )
    )}
  </>
);

export { Inputs };
